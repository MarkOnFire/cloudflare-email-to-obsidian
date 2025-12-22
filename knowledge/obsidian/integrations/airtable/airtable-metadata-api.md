# Airtable Metadata API

_Source: [Airtable Metadata API Reference](https://airtable.com/developers/web/api/meta-bases), retrieved 2025-11-09_

## Why It Matters
- Programmatically inspect and modify base structure—essential for scripted migrations, schema drift detection, and automatic template provisioning.
- Enables automation to align Airtable schema with PARA-aligned Obsidian frontmatter (create fields, views, tables on demand).
- Provides consistent IDs and option metadata required for advanced integrations (webhooks, sync pipelines, transform jobs).

## Endpoints
- `GET /v0/meta/bases` – list accessible bases (id, name, workspaceId).
- `GET /v0/meta/bases/{baseId}/tables` – fetch tables within a base.
- `GET /v0/meta/bases/{baseId}/tables/{tableId}` – retrieve full table schema (fields, views, primary field, field configs).
- `POST /v0/meta/bases` – create an empty base from a template definition.
- `POST /v0/meta/bases/{baseId}/tables` – create a new table with column definitions.
- `PATCH /v0/meta/bases/{baseId}/tables/{tableId}` – rename table, reorder fields, or update view visibility.
- `POST /v0/meta/bases/{baseId}/tables/{tableId}/fields` – create a field with config (`type`, `options`, etc.).
- `PATCH /v0/meta/bases/{baseId}/tables/{tableId}/fields/{fieldId}` – update field configuration/type.

> Delete endpoints are not part of the public Metadata API; destructive schema changes must be handled manually.

## Permissions & Scopes
- Requires PAT or OAuth token with `schema.bases:read` for reads, `schema.bases:write` for writes.
- The underlying user must have **Creator** (or Owner) permissions on the base/workspace.
- Token must be granted explicit access to the base/workspace in the PAT console (or via OAuth consent).

## Request Patterns
- Resource IDs use stable prefixes (`app`, `tbl`, `fld`, `viw`).
- Use `include=visibleFieldIds` on `get-base-schema` to mirror grid view layouts.
- Field definitions:
  ```json
  {
    "name": "Status",
    "type": "singleSelect",
    "options": {
      "choices": [
        {"name": "Backlog"},
        {"name": "Doing"},
        {"name": "Done"}
      ]
    }
  }
  ```
- For updates, send only fields you wish to change—omitted properties stay untouched.
- When converting field types, Airtable attempts to coerce existing data; test in staging before modifying production bases.

## Responses & Schema Objects
- `table` objects include:
  - `id`, `name`, `description`
  - `primaryFieldId`
  - `fields[]` with `id`, `name`, `type`, `options`, `description`, `isLocked`
  - `views[]` with `id`, `name`, `type`, `visibleFieldIds`
  - `createdTime`, `createdBy`, `lastModifiedTime`, `lastModifiedBy`
- Linked record fields reference `options.linkedTableId` plus optional view IDs for record selection.
- Rollups and formulas expose the evaluated formula text in `options`.
- New field types may appear without warning; always tolerate unknown `type` values.

## Rate Limits & Concurrency
- Same global limit: **5 requests per second per base**.
- Metadata writes are atomic; avoid simultaneous structural updates from multiple jobs to prevent `409` conflicts.
- Retrieve fresh schema after mutations before caching IDs locally.

## Use Cases & Best Practices
- Cache schema snapshots in Git to detect drift and drive review workflows.
- Automatically seed project tables when creating new PARA areas—`POST /tables` followed by bulk field creation.
- Use field IDs (not names) when wiring Obsidian sync scripts to survive renames.
- Store the timestamp of last schema sync in vault metadata; rerun `get-base-schema` nightly to detect manual edits.
- Combine with Webhooks to refresh local schema when `tableMetadata` changes are observed.
