# Obsidian Knowledge Base

Curated documentation for Obsidian, plugins, and vault configuration. This knowledge base provides comprehensive reference materials for working with this vault and serves as context for AI assistants.

## Purpose

- **Quick Reference** - Fast access to Obsidian documentation offline
- **AI Context** - Provides Claude Code with necessary plugin knowledge
- **Version Tracking** - Track documentation sources and update dates
- **Organized Learning** - Structured documentation by topic area

## Directory Structure

```
knowledge/
├── metadata.json                    # Documentation tracking and sources
├── METHODOLOGY.md                   # How to curate and maintain docs
│
├── obsidian-core/                   # Official Obsidian documentation
│   ├── Obsidian_Complete_Documentation.md (756KB, 167 pages)
│   └── obsidian_docs_raw.json (6.3MB raw backup)
│
├── plugins/                         # Plugin-specific documentation
│   ├── tasks/                      # Obsidian Tasks plugin
│   │   ├── Obsidian_Tasks_Complete_Documentation.md
│   │   └── Obsidian_Tasks_Complete_Documentation.json (raw backup)
│   ├── toggl-integration/          # Toggl time tracking plugin
│   └── templater/                  # Templater plugin setup
│
├── integrations/                    # External services and API references
│   └── google-drive/
│       ├── drive-api-auth.md
│       ├── drive-api-guides.md
│       ├── drive-api-rest-reference.md
│       └── google-drive-api-overview.md
│
└── setup-guides/                    # Configuration and setup guides
    ├── alternative_tagging_solutions.md
    ├── auto_tag_config.md
    └── auto-update-tags-setup.md
```

## What's Included

### Core Obsidian Documentation
**Location:** `obsidian-core/`
**Source:** https://help.obsidian.md/
**Last Updated:** October 27, 2025
**Coverage:** 167 pages covering all core features

Complete official documentation including:
- Getting started guides
- UI and navigation
- Editing and formatting
- Core and community plugins
- Obsidian Publish, Sync, and Web Clipper
- Advanced topics and API
- Licensing information

### Plugin Documentation

#### Tasks Plugin
**Location:** `plugins/tasks/`
**Source:** https://publish.obsidian.md/tasks/
**Size:** 317KB

Complete documentation for the Obsidian Tasks plugin:
- `Obsidian_Tasks_Complete_Documentation.md` - readable Markdown export
- `Obsidian_Tasks_Complete_Documentation.json` - raw scraped backup for re-processing
- Task syntax and formatting
- Queries and filters
- Recurring tasks
- Task properties
- Integration examples

#### Toggl Integration Plugin
**Location:** `plugins/toggl-integration/`
**Source:** https://github.com/mcndt/obsidian-toggl-integration
**Last Updated:** October 28, 2025

Comprehensive guide to the Toggl time tracking plugin:
- Installation and setup
- TQL (Toggl Query Language) syntax
- Status bar integration
- QuickAdd integration examples
- PARA workflow use cases

#### Templater Plugin
**Location:** `plugins/templater/`

Setup guide for Templater plugin configuration:
- Template folder setup
- Folder-based template automation
- User scripts configuration

### Integrations
**Location:** `integrations/`

External API references and integration notes that support automation work alongside this vault:

#### Google Drive API Overview
**Location:** `integrations/google-drive/google-drive-api-overview.md`
**Source:** https://developers.google.com/workspace/drive/api/guides/about-sdk
**Last Updated:** November 4, 2025

Key highlights from Google’s Drive API overview page covering core components, supported operations (search, sharing, labels, events, shortcuts), and pointers to quickstarts and authentication guidance.

#### Google Drive API Guides
**Location:** `integrations/google-drive/drive-api-guides.md`
**Source:** https://developers.google.com/workspace/drive/api/guides/
**Last Updated:** November 4, 2025

Aggregated reference compiling the Drive API's official guide topics, including file CRUD, uploads/downloads, search, sharing models, access proposals, shortcuts, metadata, comments, changes, push notifications, UI integrations, shared drives, and label management.

#### Google Drive API Authentication
**Location:** `integrations/google-drive/drive-api-auth.md`
**Sources:** https://developers.google.com/workspace/guides/configure-oauth-consent, https://developers.google.com/workspace/drive/api/guides/api-specific-auth
**Last Updated:** November 4, 2025

Centralizes Google Workspace OAuth consent configuration steps and Drive-specific scope guidance, including scope sensitivity categories, verification requirements, and best practices for choosing per-file access.

#### Google Drive API REST Reference
**Location:** `integrations/google-drive/drive-api-rest-reference.md`
**Source:** https://developers.google.com/workspace/drive/api/reference/rest/v3
**Last Updated:** November 4, 2025

REST endpoint catalog listing every v3 resource (files, permissions, revisions, changes, labels, etc.), supported methods, and base service metadata to aid direct HTTP integration.

#### Airtable Web API Reference
**Location:** `integrations/airtable/airtable-web-api-overview.md`
**Source:** https://airtable.com/developers/web/api/introduction
**Last Updated:** November 9, 2025

End-to-end REST guidance covering authentication models, record CRUD/upsert patterns, field types, rate limits, error handling, webhooks, metadata endpoints, and PARA-focused integration tips.

#### Airtable Personal Access Tokens
**Location:** `integrations/airtable/airtable-personal-access-tokens.md`
**Source:** https://airtable.com/developers/web/api/personal-access-tokens
**Last Updated:** November 9, 2025

Explains how to create, scope, rotate, and secure PATs, including enterprise-only scope sets, resource restrictions, and lifecycle management for automation credentials.

#### Airtable Webhooks Guide
**Location:** `integrations/airtable/airtable-webhooks-guide.md`
**Source:** https://airtable.com/developers/web/api/webhooks
**Last Updated:** November 9, 2025

Summarizes webhook endpoints, scope requirements, notification payload formats, HMAC verification, retry/expiration policies, and quotas for building reactive Airtable integrations.

#### Airtable Metadata API
**Location:** `integrations/airtable/airtable-metadata-api.md`
**Source:** https://airtable.com/developers/web/api/meta-bases
**Last Updated:** November 9, 2025

Details schema discovery and mutation operations (bases, tables, fields), expected permissions, request payloads, and best practices for aligning Airtable structure with PARA automation.

#### Airtable Formula Field Reference
**Location:** `integrations/airtable/airtable-formula-field-reference.md`
**Source:** https://support.airtable.com/docs/formula-field-reference
**Last Updated:** November 9, 2025

Categorized catalog of Airtable operators and functions (text, logical, numeric, date, array, regex) with usage notes for building robust formulas in support of Obsidian sync workflows.

### Setup Guides
**Location:** `setup-guides/`

Configuration guides specific to this vault:
- PARA folder auto-tagging strategies
- Plugin configuration options
- Alternative approaches to common tasks

## Using This Knowledge Base

### As a Developer
- Reference API documentation while building plugins
- Check plugin capabilities before implementing features
- Find integration examples for complex workflows
- Understand best practices from official docs

### As Claude Code Context
- Claude Code reads these docs to understand Obsidian features
- Enables accurate answers about plugin capabilities
- Provides context for troubleshooting and configuration
- Allows for informed suggestions about vault improvements

### For Troubleshooting
- Search documentation for error messages
- Check official docs for feature explanations
- Review plugin docs for configuration options
- Find examples of working implementations

## Maintenance

### Tracking Documentation
All documentation is tracked in `metadata.json`:
- Source URLs
- Last crawled dates
- Plugin versions documented
- Location of files

### Updating Documentation

Follow the process in `METHODOLOGY.md`:

1. **Identify what needs updating** (check metadata.json dates)
2. **Use appropriate tools** (Crawl4AI for web content)
3. **Organize systematically** (follow directory structure)
4. **Update metadata** (record source, date, version)
5. **Maintain quality** (verify completeness and accuracy)

### Adding New Plugin Documentation

Use the `obsidian-docs-curator` agent:
```bash
# In Claude Code, ask:
"Please document the [PLUGIN-NAME] plugin"
```

Or follow METHODOLOGY.md for manual curation.

### Recommended Update Schedule

- **Core Obsidian Docs:** Quarterly (Obsidian updates frequently)
- **Critical Plugins (Tasks, Templater):** Monthly
- **Other Plugins:** As needed or when features change
- **Setup Guides:** Update when vault configuration changes

## File Formats

### Markdown Documentation
Main documentation files in `.md` format:
- Easy to read and search
- Compatible with version control
- Can be viewed in Obsidian itself
- Searchable with standard tools

### JSON Backups
Raw JSON files preserve:
- Original HTML structure
- Metadata and timestamps
- Full page content
- Useful for re-processing or analysis

## Search Tips

### Find Information Quickly

```bash
# Search all documentation for a term
grep -r "dataview" knowledge/

# Search only plugin docs
grep -r "template" knowledge/plugins/

# Search with context (2 lines before/after)
grep -r -C 2 "frontmatter" knowledge/
```

### Within Obsidian
1. Open this repo folder in Obsidian as a vault
2. Use global search (Cmd/Ctrl+Shift+F)
3. Filter by path (e.g., `path:knowledge/plugins/`)

## Integration with Repository

### Custom Extensions
Plugin documentation complements development:
- `custom-extensions/` - Your custom plugin code
- `knowledge/plugins/` - How official plugins work
- Use both together when building extensions

### Templates
Documentation references template features:
- `templates/` - Your template files
- `knowledge/plugins/templater/` - Templater documentation
- Understand capabilities before creating templates

### CLAUDE.md
This knowledge base is referenced in `CLAUDE.md`:
- Claude Code knows to check here for Obsidian features
- Provides accurate context for development tasks
- Enables informed suggestions and troubleshooting

## Resources

### Official Documentation
- **Obsidian Help:** https://help.obsidian.md/
- **Developer Docs:** https://docs.obsidian.md/
- **Forum:** https://forum.obsidian.md/

### Plugin Resources
- **Tasks Plugin:** https://publish.obsidian.md/tasks/
- **Toggl Integration:** https://github.com/mcndt/obsidian-toggl-integration
- **Templater:** https://silentvoid13.github.io/Templater/

### Curation Tools
- **Crawl4AI:** Web scraping tool used for documentation
- **obsidian-docs-curator:** Claude Code agent for documentation

## Contributing

When adding new documentation:

1. **Follow the structure** - Use appropriate subdirectories
2. **Update metadata.json** - Record source and date
3. **Write clear names** - Descriptive filenames
4. **Include README** - If creating new category
5. **Test completeness** - Verify docs are comprehensive
6. **Version control** - Commit with descriptive message

## Future Expansion Ideas

Potential documentation to add:
- **Dataview plugin** - Query language and examples
- **Kanban plugin** - Board configuration
- **QuickAdd plugin** - Macro creation
- **Periodic Notes** - Daily/weekly note setup
- **Community best practices** - Workflow examples
- **API documentation** - For plugin development

## Questions?

- Check `METHODOLOGY.md` for curation process
- Use `obsidian-docs-curator` agent for automated gathering
- See `custom-extensions/plugins/README.md` for plugin development
- Reference `CLAUDE.md` for overall repository structure
