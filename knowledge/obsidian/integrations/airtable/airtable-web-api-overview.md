# Airtable Web API Reference

_Source: Airtable Web API documentation (https://airtable.com/developers/web/api/introduction and linked sub-guides), retrieved 2025-11-09_

## Why It Matters
- Airtable delivers a columnar database with relational links that fits PARA dashboards, CRM-style trackers, and content calendars without provisioning infrastructure.
- Automation can treat Airtable as a system of record: sync tasks into Obsidian, drive note metadata, or enrich templates from external workflows.
- Deep familiarity with endpoint behavior, rate controls, formulas, and schema metadata avoids brittle integrations and surprises when data models evolve.

## Base URLs & Versioning
- REST base URL: `https://api.airtable.com/v0/`. Requests target `/v0/{baseId}/{tableIdOrName}`.
- Metadata endpoints live at `/v0/meta/*`; webhooks live under `/v0/bases/{baseId}/webhooks`.
- There is no version header—major API changes are introduced via new fields rather than breaking revisions.
- Responses use UTF-8 JSON. Airtable ignores unknown request fields, which helps maintain backwards compatibility.

## Platform Architecture
- **Bases define the schema** – Each base exposes tables that map to endpoints keyed by table name or table ID (`tblXXXXXXXXXXXXXX`). Field configuration governs expected data types.
- **Records** – JSON objects with `id`, `createdTime`, and `fields` (keyed by field name). Linked records appear as arrays of record IDs (strings) unless `cellFormat` is changed.
- **Views & filters** – Named views encapsulate filters/sorts. Passing `view` applies those constraints server-side.
- **Workspaces** – Group bases together. Metadata API exposes workspace IDs when scoping automations.

## Authentication & Authorization
- **Personal access tokens (PATs)**:
  - Created from the Airtable account UI; replace legacy API keys (deprecated for new integrations).
  - Configure scopes: `data.records:read`, `data.records:write`, `schema.bases:read`, etc.
  - Restrict to specific workspaces/bases where possible for least privilege.
- **OAuth 2.0**:
  - Standard authorization code flow; tokens share the PAT scope model.
  - Supports refresh tokens for long-lived integrations. Request offline access up front.
  - Redirect URI must be whitelisted in the Airtable developer portal.
- **Requests**:
  - Use `Authorization: Bearer <token>`.
  - No API key query params or cookies.
  - TLS required; Airtable supports HTTPS only.
- **Token hygiene**: rotate regularly, store outside repo (environment variables, macOS keychain), never embed in templates.

## Record Retrieval
- **List records**: `GET /v0/{baseId}/{table}` supports:
  - `maxRecords` – hard cap on total records returned (optional).
  - `pageSize` – 1–100 (default 100).
  - `offset` – cursor for pagination; continue until offset absent.
  - `view` – apply a view’s filters/sorts and field visibility.
  - `filterByFormula` – use Airtable formula syntax evaluating to truthy/falsey.
  - `fields[]` – restrict returned fields by name (array). Use multiple query params.
  - `sort[0][field]`, `sort[0][direction]` – multiple levels allowed.
  - `cellFormat` (`json` default, `string` for rendered values), `timeZone`, `userLocale`.
  - `returnFieldsByFieldId=true` to return field IDs rather than names (helpful when names change).
- **Retrieve single record**: `GET /v0/{baseId}/{table}/{recordId}` returns the JSON object.

## Record Mutation
- **Create**: `POST /v0/{baseId}/{table}` body `{ "records": [ { "fields": { ... } } ], "typecast": true|false }`
  - Up to 10 records per request.
  - `typecast` attempts to coerce strings into select options or linked records (required when posting new select values).
- **Update (partial)**: `PATCH /v0/{baseId}/{table}` with `records` payload; each entry needs `id` and `fields`.
- **Update (replace)**: `PUT /v0/{baseId}/{table}` with `records`, replacing full record fields.
- **Upsert**: `PATCH /v0/{baseId}/{table}` with `performUpsert` option specifying `fieldsToMergeOn` (usually a `Unique ID` field). Creates or updates in one request.
- **Delete**: `DELETE /v0/{baseId}/{table}` with `records[]` query params (up to 10). Returns array of `{id, deleted: true}`.
- **Concurrency**: No ETag support. Rely on record IDs and consider storing `createdTime`/last update timestamps to detect stale writes.

## Supported Field Types (Selected Highlights)
- **Text**: plain text strings.
- **Long text**: multi-line strings; API returns plain text (no markdown formatting).
- **Number, Currency, Percent**: numeric JSON values. Airtable stores as decimal; send numbers not strings.
- **Single select / Multi select**: arrays of objects in responses (with `name`); in writes you can send string option names. `typecast` required to create new options.
- **Checkbox**: boolean.
- **Date / DateTime**: ISO 8601 strings (`YYYY-MM-DD`, `YYYY-MM-DDTHH:MM:SS.SSSZ`), respect configured time zone.
- **Attachments**: array of `{ url, filename?, type?, size? }`. Airtable hosts remote files when given a public URL; uploading binary requires multi-step upload via pre-signed URLs (beta).
- **Linked record**: array of linked record IDs.
- **Rollup**: returns calculated value; read-only.
- **Lookup**: returns data from linked record fields; may be nested arrays.
- **Formula**: read-only computed output.
- **Button / Created by / Last modified by**: read-only metadata fields.

## Formula, Sorting & Filtering Tips
- `filterByFormula` uses Airtable’s formula language (similar to Excel). Example: `AND({Status} = "Active", FIND("Q4", {Quarter}))`.
- Wrap field names with braces; spaces allowed.
- Use `IS_AFTER`, `IS_BEFORE`, `DATETIME_DIFF` for date logic.
- Sorting by linked record fields requires referencing the lookup/rollup field.
- Combine with `maxRecords` to guard against runaway pagination during dev.

## Attachment Handling
- Provide publicly accessible URLs (`https://...`) in writes. Airtable fetches asynchronously; responses include `status`.
- To delete attachments, omit them in a `PUT` request or explicitly set `fields.Attachment` to an empty array in PATCH.
- For secure uploads, use the Attachments API (beta) to request an upload URL, PUT binary data, then reference the resulting token in record creation. Monitor docs for general availability.

## Metadata API
- **List bases**: `GET /v0/meta/bases` (requires `schema.bases:read`). Response includes `id`, `name`, `workspaceId`.
- **List tables in a base**: `GET /v0/meta/bases/{baseId}/tables`.
- **Table details**: Each table entry contains `id`, `name`, `primaryFieldId`, `fields` array (type, options, description), and `views`.
- **Field identities**: `fields[].type` enumerations (e.g., `singleSelect`). Options block lists choices for selects and linked table IDs.
- **Use cases**: bootstrap automation, validate schema drift, or dynamically generate API clients.
- **Write operations**: As of 2025, metadata API is read-only in GA. Beta endpoints for schema modifications are limited and subject to access restrictions.

## Webhooks & Syncing
- Create webhook: `POST /v0/bases/{baseId}/webhooks` with `notificationUrl`, `specification` (table IDs, filter), and `enableFor` (e.g., `dataTable`).
- Airtable sends verification requests (`challenge`); respond with the challenge string within 10 seconds.
- Webhook payloads include `timestamp`, array of `changes` (created/updated/deleted record IDs) and `scope` details.
- Webhook leases expire (default 7 days). Renew using `POST /v0/bases/{baseId}/webhooks/{webhookId}/renew`.
- Acknowledge batches via `POST /v0/bases/{baseId}/webhooks/{webhookId}/ack` with `cursor` to confirm processing.
- For low frequency updates, consider polling with `filterByFormula` on `LAST_MODIFIED_TIME()` instead of webhooks.

## Rate Limits & Performance
- **Default throughput**: 5 requests per second per base per token. Bursts beyond that trigger HTTP 429 with `Retry-After`.
- **Concurrency**: Limits apply per base; distributing operations across bases avoids throttling.
- **Pagination**: Always consume `offset` until absent. Combine with `maxRecords` when reading for UI.
- **Compression**: Enable gzip via `Accept-Encoding: gzip` to reduce payload size.
- Backoff strategy: exponential with jitter; respect `Retry-After` header on 429.

## Error Handling
- HTTP status indicates class of issue:
  - `400 Bad Request` – validation errors, malformed formulas, unknown fields.
  - `401 Unauthorized` – missing or invalid token.
  - `403 Forbidden` – token lacks scope or base access.
  - `404 Not Found` – base/table/record missing or inaccessible.
  - `413 Payload Too Large` – exceeded request size (typically attachments).
  - `422 Unprocessable Entity` – type coercion failure in upserts.
  - `429 Too Many Requests` – throttled.
  - `500/502/503` – Airtable internal issues; retry safely with backoff.
- Error body:
  ```json
  {
    "error": {
      "type": "INVALID_VALUE_FOR_COLUMN",
      "message": "Must be a number"
    }
  }
  ```
- Log both `type` and `message` to accelerate debugging.

## Testing & Tooling
- Airtable auto-generates per-base API docs at `https://airtable.com/api`. Use it to validate endpoints, sample payloads, and field IDs.
- API docs include `curl` snippets; adapt them into scripts for regression tests.
- Combine with Postman or Bruno collections for reusable request suites.
- For local dev, store tokens in `.env` and load via script wrappers; avoid embedding in repo.

## Integration Patterns for Obsidian
- **Two-way sync**: Map Airtable records to note frontmatter (store record IDs). Use webhooks or scheduled pulls to keep metadata current.
- **Lookup tables**: Reference select options or linked data inside Templater templates via scripts that call Airtable before note creation.
- **Task ingestion**: Pull filtered views (`view=Active Tasks`) into Obsidian dashboards. Use formula fields to flag items needing review.
- **Content calendars**: Push new notes into Airtable to maintain an editorial pipeline; leverage `performUpsert` to avoid duplicates when titles match.
- **Rate limit friendly job design**: Batch writes (≤10) and delay loops to remain under 5 RPS.

## Security & Governance
- Store PATs in local keychain or secure secrets management; never commit.
- Enforce scope minimization; create separate tokens for read-only reporting vs write access.
- Monitor access logs in Airtable admin to detect unexpected use.
- Remove stale webhooks to avoid unnecessary callbacks.

## Helpful References
- Airtable developer hub: https://airtable.com/developers
- Local copy: `knowledge/integrations/airtable/airtable-personal-access-tokens.md`
- Local copy: `knowledge/integrations/airtable/airtable-webhooks-guide.md`
- Local copy: `knowledge/integrations/airtable/airtable-formula-field-reference.md`
- Local copy: `knowledge/integrations/airtable/airtable-metadata-api.md`
- Source (PATs): https://airtable.com/developers/web/api/personal-access-tokens
- Source (Webhooks): https://airtable.com/developers/web/api/webhooks
- Source (Metadata API): https://airtable.com/developers/web/api/meta-bases
- Source (Formulas): https://support.airtable.com/docs/formula-field-reference
