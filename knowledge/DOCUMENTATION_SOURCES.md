# Documentation Sources for /knowledge/

This file lists documentation that should be fetched and stored in `.claude/knowledge/` to provide context for development.

## Cloudflare Documentation

### Email Workers
- **URL:** https://developers.cloudflare.com/email-routing/email-workers/
- **Topics:** Email worker setup, email message object, headers, routing rules
- **Priority:** High

### Email Workers - Runtime API
- **URL:** https://developers.cloudflare.com/email-routing/email-workers/runtime-api/
- **Topics:** EmailMessage interface, ForwardableEmailMessage, reply(), forward()
- **Priority:** High

### Email Routing
- **URL:** https://developers.cloudflare.com/email-routing/
- **Topics:** Setting up email routing, custom addresses, catch-all
- **Priority:** Medium

### R2 Storage
- **URL:** https://developers.cloudflare.com/r2/
- **Topics:** Bucket creation, API access, pricing
- **Priority:** High

### R2 Workers API
- **URL:** https://developers.cloudflare.com/r2/api/workers/workers-api-reference/
- **Topics:** R2Bucket binding, put(), get(), head(), list()
- **Priority:** High

### Wrangler CLI
- **URL:** https://developers.cloudflare.com/workers/wrangler/
- **Topics:** wrangler.toml configuration, deploy, dev, tail
- **Priority:** Medium

## Obsidian Ecosystem

### Remotely Save Plugin
- **URL:** https://github.com/remotely-save/remotely-save
- **Topics:** S3/R2 configuration, sync settings, folder filtering
- **Priority:** High
- **Note:** Check README and wiki for configuration details

### Remotely Save - S3 Setup
- **URL:** https://github.com/remotely-save/remotely-save/blob/master/docs/remote_services/s3_cors_china.md
- **Topics:** S3-compatible setup including R2
- **Priority:** High

## Email Parsing

### MIME Format (RFC 2045-2049)
- **URL:** https://datatracker.ietf.org/doc/html/rfc2045
- **Topics:** MIME structure, multipart, content-transfer-encoding
- **Priority:** Medium

### Email Headers (RFC 5322)
- **URL:** https://datatracker.ietf.org/doc/html/rfc5322
- **Topics:** From, Subject, Date, Message-ID header formats
- **Priority:** Medium

### postal-mime (npm package)
- **URL:** https://github.com/nickelcase/postal-mime
- **Topics:** Lightweight email parser that works in Workers
- **Priority:** High
- **Note:** Consider using this instead of manual parsing

## Email Provider Specifics

### Gmail Forwarding
- **URL:** https://support.google.com/mail/answer/10957
- **Topics:** Setting up forwarding rules, filters
- **Priority:** Low (user docs, not code docs)

### Outlook Rules
- **URL:** https://support.microsoft.com/en-us/office/manage-email-messages-by-using-rules
- **Topics:** Setting up forwarding rules
- **Priority:** Low (user docs, not code docs)

## Markdown Conversion

### Turndown (HTML to Markdown)
- **URL:** https://github.com/mixmark-io/turndown
- **Topics:** HTML to Markdown conversion, customization
- **Priority:** Medium
- **Note:** May need for HTML email body conversion

---

## Scraping Instructions

To populate the knowledge folder:

1. For each URL above, fetch the content and save as markdown
2. Name files descriptively: `cloudflare-email-workers.md`, `r2-api.md`, etc.
3. Include the source URL at the top of each file
4. Focus on API references and code examples
5. Skip marketing content and navigation

### Example fetch commands:

```bash
# Using curl + pandoc for HTML to markdown
curl -s "https://developers.cloudflare.com/email-routing/email-workers/" | \
  pandoc -f html -t markdown -o .claude/knowledge/cloudflare-email-workers.md

# Or use a web scraping tool that preserves code blocks
```

### Key information to capture:

1. **EmailMessage interface** - All properties and methods available
2. **R2Bucket methods** - put(), get(), head(), list() signatures and options
3. **wrangler.toml format** - R2 bindings, email bindings, vars
4. **postal-mime usage** - How to parse MIME in Workers environment
5. **Remotely Save R2 config** - Exact settings needed for R2 sync
