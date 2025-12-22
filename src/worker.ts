/**
 * Cloudflare Email Worker
 *
 * Receives forwarded emails and creates markdown notes in R2 bucket
 * for sync to Obsidian via Remotely Save plugin.
 */

import { EmailMessage } from '@cloudflare/workers-types';

export interface Env {
  OBSIDIAN_BUCKET: R2Bucket;
  INBOX_FOLDER: string;
}

interface ParsedEmail {
  messageId: string;
  from: {
    name: string;
    email: string;
  };
  subject: string;
  date: Date;
  body: string;
  source: 'gmail' | 'outlook' | 'icloud' | 'unknown';
}

export default {
  async email(message: EmailMessage, env: Env, ctx: ExecutionContext): Promise<void> {
    try {
      // Parse the incoming email
      const parsed = await parseEmail(message);

      // Generate markdown note
      const markdown = generateMarkdown(parsed);

      // Generate filename
      const filename = generateFilename(parsed, env.INBOX_FOLDER);

      // Check if note already exists (deduplication)
      const existing = await env.OBSIDIAN_BUCKET.head(filename);
      if (existing) {
        console.log(`Note already exists: ${filename}`);
        return;
      }

      // Write to R2 bucket
      await env.OBSIDIAN_BUCKET.put(filename, markdown, {
        customMetadata: {
          'email-id': parsed.messageId,
          'created': new Date().toISOString(),
        },
      });

      console.log(`Created note: ${filename}`);
    } catch (error) {
      console.error('Failed to process email:', error);
      // Don't throw - we don't want to bounce the email
    }
  },
};

async function parseEmail(message: EmailMessage): Promise<ParsedEmail> {
  // TODO: Implement email parsing
  // - Extract headers (From, Subject, Date, Message-ID)
  // - Parse MIME parts to get body (prefer text/plain, fallback to text/html)
  // - Convert HTML to markdown if needed
  // - Detect source (gmail, outlook, icloud) from headers

  const rawEmail = await streamToString(message.raw);

  // Basic header extraction (will be enhanced)
  const fromHeader = message.from;
  const subject = message.headers.get('subject') || 'No Subject';
  const messageId = message.headers.get('message-id') || generateId();
  const dateHeader = message.headers.get('date');

  // Parse from header "Name <email@example.com>"
  const fromMatch = fromHeader.match(/^(?:"?([^"]*)"?\s)?<?([^>]+)>?$/);
  const fromName = fromMatch?.[1] || fromMatch?.[2] || fromHeader;
  const fromEmail = fromMatch?.[2] || fromHeader;

  // Detect email source from headers
  const source = detectEmailSource(message.headers);

  return {
    messageId: sanitizeMessageId(messageId),
    from: {
      name: fromName,
      email: fromEmail,
    },
    subject,
    date: dateHeader ? new Date(dateHeader) : new Date(),
    body: await extractBody(rawEmail),
    source,
  };
}

function detectEmailSource(headers: Headers): ParsedEmail['source'] {
  // TODO: Implement source detection from headers
  // Gmail: X-Gm-Message-State header
  // Outlook: X-MS-Exchange-* headers
  // iCloud: Check received headers for apple.com

  const gmailHeader = headers.get('x-gm-message-state');
  const outlookHeader = headers.get('x-ms-exchange-organization-authas');
  const received = headers.get('received') || '';

  if (gmailHeader) return 'gmail';
  if (outlookHeader) return 'outlook';
  if (received.includes('apple.com') || received.includes('icloud.com')) return 'icloud';

  return 'unknown';
}

async function extractBody(rawEmail: string): Promise<string> {
  // TODO: Implement proper MIME parsing
  // For now, basic extraction
  // Will need to handle:
  // - multipart/alternative (prefer text/plain)
  // - multipart/mixed (extract text parts)
  // - quoted-printable decoding
  // - base64 decoding
  // - HTML to markdown conversion

  // Basic: split on double newline to separate headers from body
  const parts = rawEmail.split('\r\n\r\n');
  if (parts.length < 2) {
    return rawEmail.split('\n\n').slice(1).join('\n\n');
  }
  return parts.slice(1).join('\r\n\r\n');
}

function generateMarkdown(email: ParsedEmail): string {
  const createdDate = formatDate(email.date);

  return `---
tags:
  - all
  - email-task
created: ${createdDate}
from: ${email.from.email}
subject: ${escapeYaml(email.subject)}
email_id: ${email.messageId}
source: ${email.source}
---

## Tasks in this note

- [ ] Review and process this email

---
## Email
**From:** ${email.from.name} <${email.from.email}>
**Date:** ${formatDateLong(email.date)}
**Subject:** ${email.subject}

${email.body}

---
## Notes

`;
}

function generateFilename(email: ParsedEmail, inboxFolder: string): string {
  const date = formatDate(email.date);
  // Sanitize subject for filename
  const safeSubject = email.subject
    .replace(/[/\\?%*:|"<>]/g, '-')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 100);

  return `${inboxFolder}/${date} - ${safeSubject}.md`;
}

// Utility functions

async function streamToString(stream: ReadableStream): Promise<string> {
  const reader = stream.getReader();
  const decoder = new TextDecoder();
  let result = '';

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    result += decoder.decode(value, { stream: true });
  }

  result += decoder.decode();
  return result;
}

function formatDate(date: Date): string {
  return date.toISOString().split('T')[0];
}

function formatDateLong(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

function escapeYaml(str: string): string {
  if (/[:#{}[\],&*?|<>=!%@`]/.test(str) || str.includes('\n')) {
    return `"${str.replace(/"/g, '\\"')}"`;
  }
  return str;
}

function sanitizeMessageId(id: string): string {
  return id.replace(/[<>]/g, '').replace(/[^a-zA-Z0-9@._-]/g, '_');
}

function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;
}
