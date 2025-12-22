# Airtable Webhooks Guide

_Source: [Airtable Webhooks Overview](https://airtable.com/developers/web/api/webhooks), retrieved 2025-11-09_

## Why Use Webhooks
- Receive near-real-time notifications when records change instead of polling `listRecords`.
- Trigger downstream automations (sync jobs, note updates, task mirroring) only when data actually changes.
- Access change metadata that is otherwise unavailable in basic REST responses (transaction numbers, change sources).

## API Surface
- Create webhook (`POST /v0/bases/{baseId}/webhooks`)
- Delete webhook (`DELETE /v0/bases/{baseId}/webhooks/{webhookId}`)
- List webhooks (`GET /v0/bases/{baseId}/webhooks`)
- Enable/disable notification pings (`POST /v0/bases/{baseId}/webhooks/{webhookId}/enable` or `/disable`)
- List webhook payloads (`GET /v0/bases/{baseId}/webhooks/{webhookId}/payloads`)
- Refresh webhook lease (`POST /v0/bases/{baseId}/webhooks/{webhookId}/refresh`)

## Authentication & Scopes
- Authenticate with PATs or OAuth access tokens (`Authorization: Bearer ...`). OAuth integrations can only access webhooks created by that integration.
- Required scope: `webhook:manage`.
- Additional scopes depend on specification `dataTypes`:
  - `tableData` requires `data.records:read`.
  - `tableFields` / `tableMetadata` require `schema.bases:read`.
- Execute calls server-side; exposing tokens in client code violates Airtable policy.

## Rate Limits
- Webhook endpoints share the same quota as REST calls: **5 requests per second per base**.
- Exceeding the limit yields HTTP 429; wait 30 seconds before retrying.

## Notification Payloads
- Airtable issues POST requests to the supplied notification URL. Body example:

```json
{
  "base": {
    "id": "app00000000000000"
  },
  "webhook": {
    "id": "ach00000000000000"
  },
  "timestamp": "2022-02-01T21:25:05.663Z"
}
```

- Respond with HTTP 200 or 204 and an empty body.
- Fetch actual change payloads separately via `list webhook payloads`.

## Verifying Signatures
- Airtable signs payloads with `X-Airtable-Content-MAC = hmac-sha256=<hex>` using the base64-encoded MAC secret returned when the webhook is created.
- Validation pattern (Node.js):

```javascript
const macSecretDecoded = Buffer.from(macSecretBase64FromCreate, 'base64');
const body = Buffer.from(JSON.stringify(webhookNotificationDeliveryPayload), 'utf8');
const hmac = require('crypto').createHmac('sha256', macSecretDecoded);
hmac.update(body.toString(), 'ascii');
const expectedContentHmac = 'hmac-sha256=' + hmac.digest('hex');
```

## Delivery Guarantees
- At-least-once delivery: transaction numbers help deduplicate.
- Notifications may be coalesced; always pull payloads until exhausted.
- Retry policy: up to 13 retries with exponential backoff starting at 10 s (≈24 hours total) for network failures, slow responses (>25 s), or non-200/204 status codes.
- If retries fail, Airtable disables notifications (payload generation continues). Call the enable endpoint to resume.

## Expiration & Refresh
- PAT- and OAuth-based webhooks expire after **7 days** without refresh.
- Call `refresh` or `list webhook payloads` before expiry to extend another 7 days.
- After expiration, metadata/payloads remain accessible for 7 additional days.
- Legacy API-key webhooks no longer expire but can’t be created anymore and are enterprise-only.

## Quotas & FAQs
- Limit of 10 webhooks per base.
- A single OAuth integration can create up to 2 webhooks per base.
- Payload retention: 7 days.
- Filter change sources (`fromSources`) to exclude automation changes.
- Requires scope-backed filtering by `filters.dataTypes`.

## Best Practices
- Store MAC secrets securely and rotate webhook endpoints with versioned URLs.
- Combine webhooks with incremental sync stored in Obsidian frontmatter (transaction number, cursor).
- Refresh webhooks as part of recurring jobs (e.g., nightly cron).
- Log failures and automate re-enabling when Airtable disables notifications.
- Prefer webhooks for high-signal updates; use scheduled pulls for bulk backfills or historical data validation.
