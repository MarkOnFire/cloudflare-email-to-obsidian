# Airtable Personal Access Tokens

_Source: [Airtable Personal Access Tokens Guide](https://airtable.com/developers/web/api/personal-access-tokens), retrieved 2025-11-09_

## Why They Matter
- PATs are the primary individual authentication method now that legacy API keys are deprecated.
- Each token represents a specific Airtable user identity and inherits that user’s base/workspace permissions.
- Granular scopes and resource controls allow automation to limit blast radius while still accessing sensitive endpoints (Metadata API, Comments API, Webhooks, etc.).

## Creating Tokens
1. Open the management console at `https://airtable.com/create/tokens` and select **Create new token**.
2. Name the token (the name appears in revision history and audit logs).
3. Select scopes (see below) to define allowed API operations.
4. Assign resources:
   - Add individual bases or workspaces.
   - Optionally grant access to “All current and future workspaces”.
5. Copy the token value when prompted; Airtable only shows it once. Store it securely (password manager, macOS keychain, environment secrets).

Enterprise admins can also mint PATs for [service accounts](https://support.airtable.com/docs/service-accounts-overview) from the Admin Panel.

## Scopes & Resource Controls
- **Basic scopes** available to all users cover record read/write, schema read/write, comments, attachments, file upload, metadata discovery, etc.
- **Enterprise member scopes** unlock advanced capabilities such as reading audit logs, managing bases/workspaces, and accessing SCIM.
- **Enterprise admin scopes** expose organization-level administration (bulk user management, enterprise metadata, governance endpoints).
- Tokens only succeed when:
  - The scope allows the operation.
  - The token has a base/workspace assigned.
  - The underlying user also has sufficient permissions (e.g., Creator to alter schema).

Use the Scopes reference page inside the developer docs to review the full catalog and the endpoints each scope unlocks.

## Using Tokens
- Include PATs via the HTTP header:
```http
Authorization: Bearer YOUR_PERSONAL_ACCESS_TOKEN
```
- Tokens are opaque strings (aside from a visible ID prefix). Do not rely on a fixed length or format.
- Airtable treats PAT traffic as if the creating user made the request. Respect rate limits (5 req/s per base) and table-level edit permissions.
- PATs work with every public Web API endpoint, including ones locked behind scopes such as `/v0/meta/*` and webhooks.

## Managing Tokens After Creation
- **Update scopes/resources**: revisit the token in the console and adjust granted bases/workspaces or scopes.
- **Regenerate**: issues a new secret value while keeping the name and permissions; the old secret immediately stops working.
- **Delete**: revokes the token completely. Bulk delete is supported from the management list.
- Airtable never stores or redisplays the raw token string after creation. Track it yourself.

## Security Practices
- Rotate PATs periodically; schedule rotation alongside scope audits.
- Keep secrets out of version control—load them from environment variables or system keychains.
- Prefer read-only scopes for reporting scripts, and separate write-enabled tokens for mutating jobs.
- Monitor audit logs (enterprise) to verify how PATs are used, and disable unused tokens promptly.
- For multi-user integrations, use OAuth integrations instead so end users can authorize individually.
