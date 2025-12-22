# Documentation Curation Methodology

## Purpose

This knowledge base maintains comprehensive, well-organized documentation about Obsidian and its plugins to support efficient vault configuration and workflow development. The documentation follows a systematic approach to gathering, organizing, and maintaining information that can be easily referenced during development work.

**Primary Goals:**
1. Create a single source of truth for plugin capabilities and configuration
2. Document integration patterns between plugins and workflows
3. Maintain version-specific information to track feature changes
4. Enable quick reference during vault configuration and troubleshooting
5. Support PARA-method workflows with relevant examples

---

## Tools Used

### Crawl4AI Web Scraper

**Primary tool for gathering documentation from web sources.**

**Configuration:**
- **Tool:** Crawl4AI v0.7.5 (Python library with Playwright)
- **Python Version:** Python 3.13 (required for modern async syntax)
- **Installation:** `pip3 install crawl4ai` (with Playwright browser support)

**Usage Pattern:**
```python
import asyncio
from crawl4ai import AsyncWebCrawler

async with AsyncWebCrawler(verbose=True) as crawler:
    result = await crawler.arun(url="<target_url>")
    markdown_content = result.markdown
```

**Benefits:**
- JavaScript rendering support (captures dynamic content)
- Clean markdown output from HTML
- Handles GitHub repository pages effectively
- Extracts metadata (title, description)
- Respects web standards

**Best Practices:**
- Always use async context manager (`async with`)
- Scrape multiple URL variations (main page, README raw, blob view)
- Choose the result with the most comprehensive content
- Add delays between requests to respect rate limits
- Handle errors gracefully with try/except blocks

### Obsidian Command Line Tools

- **Read tool:** Review existing documentation
- **Write tool:** Create new documentation files
- **Edit tool:** Update existing documentation
- **Bash tool:** File system operations, directory creation

---

## Documentation Sources

### Primary Sources (Authoritative)

1. **Official Plugin GitHub Repositories**
   - README.md files (main documentation)
   - Wiki pages (detailed guides)
   - docs/ directories (structured documentation)
   - CHANGELOG.md (version history)
   - Issues/Discussions (common problems and solutions)

2. **Obsidian Official Documentation**
   - https://help.obsidian.md/ (core features)
   - https://docs.obsidian.md/Plugins/ (plugin development)

3. **Plugin-Specific Documentation Sites**
   - Some plugins maintain dedicated documentation sites
   - Often linked from GitHub README

### Secondary Sources (Supplementary)

1. **Community Forums**
   - Obsidian Discord server (real-time help)
   - Obsidian Forum (https://forum.obsidian.md/)
   - Reddit r/ObsidianMD

2. **Tutorial Sites**
   - YouTube tutorials (for complex workflows)
   - Blog posts by community members
   - Medium articles

3. **Integration Guides**
   - Cross-plugin integration examples
   - Workflow guides (e.g., QuickAdd + Toggl)

### Source Selection Criteria

Document a source if it:
- Provides authoritative information from plugin developers
- Includes version-specific details
- Contains practical, tested examples
- Addresses integration with other plugins
- Solves common problems or edge cases
- Is actively maintained (updated within last 2 years)

**Avoid sources that:**
- Contain outdated information (check dates)
- Lack version context
- Provide only theoretical or untested advice
- Come from unreliable community members
- Conflict with official documentation

---

## Organization Principles

### Directory Structure

```
/knowledge/
├── metadata.json                    # Tracking and version info
├── METHODOLOGY.md                   # This file
├── obsidian-core/                   # Core Obsidian features
│   ├── features/                    # Individual features
│   ├── settings/                    # Settings and configuration
│   └── workflows/                   # Workflow patterns
├── plugins/                         # Plugin-specific documentation
│   ├── [plugin-name]/               # One directory per plugin
│   │   ├── [plugin-name]-overview.md     # Main documentation
│   │   ├── [plugin-name]-examples.md     # Practical examples
│   │   └── [plugin-name]-troubleshooting.md  # Common issues
│   └── integrations/                # Cross-plugin integrations
├── best-practices/                  # General best practices
└── templates/                       # Documentation templates
```

### File Naming Conventions

**Format:** `kebab-case.md`

**Patterns:**
- Overview docs: `[plugin-name]-overview.md`
- Feature-specific: `[feature-name]-guide.md`
- Integration docs: `[plugin-a]-[plugin-b]-integration.md`
- Troubleshooting: `[topic]-troubleshooting.md`

**Examples:**
- `toggl-integration-overview.md`
- `templater-guide.md`
- `dataview-tasks-integration.md`
- `sync-troubleshooting.md`

### Markdown File Structure

Every documentation file should follow this structure:

```markdown
---
title: "Descriptive Title"
plugin: plugin-name (or feature: feature-name)
version: X.Y.Z
last_updated: YYYY-MM-DD
source_url: https://primary-source-url
tags:
  - obsidian
  - plugin (or feature)
  - relevant-keywords
---

# Title

## Executive Summary
[2-3 paragraphs summarizing the plugin/feature, key capabilities, and relevance]

## Table of Contents
[Structured list of sections]

## [Main Content Sections]
[Well-organized content with clear headings]

## Quick Reference
[Command cheatsheet, syntax reference, etc.]

## Resources and Support
[Links to official docs, community support, etc.]

## Version Information
[Current version, compatibility, changelog reference]
```

### YAML Frontmatter Standards

**Required Fields:**
- `title`: Human-readable title
- `plugin` or `feature`: Identifier for categorization
- `version`: Version documented (plugin version or Obsidian version)
- `last_updated`: Date documentation was created/updated (YYYY-MM-DD)
- `source_url`: Primary source URL
- `tags`: Array of relevant tags for searching

**Optional Fields:**
- `repository`: GitHub repository (if applicable)
- `author`: Plugin author/maintainer
- `license`: Software license
- `compatibility`: Obsidian version requirements
- `deprecated`: Boolean flag if deprecated
- `replacement`: Alternative if deprecated

**Example:**
```yaml
---
title: "Toggl Track Integration for Obsidian"
plugin: toggl-integration
version: 0.11.0
last_updated: 2025-10-28
source_url: https://github.com/mcndt/obsidian-toggl-integration
repository: mcndt/obsidian-toggl-integration
tags:
  - obsidian
  - plugin
  - time-tracking
  - toggl
---
```

---

## Update Cadence

### Critical Plugins
**Check: Weekly**
- Plugins actively used in daily workflows
- Plugins with frequent updates
- Plugins with known issues being tracked

**Examples:**
- Templater (core template system)
- Tasks (task management)
- Auto PARA Tagger (custom plugin in this repo)

### Important Plugins
**Check: Monthly**
- Stable plugins used regularly
- Plugins with moderate update frequency
- Plugins with established workflows

**Examples:**
- Dataview (query language)
- Kanban (board views)
- Toggl Integration (time tracking)

### Supplementary Plugins
**Check: Quarterly**
- Infrequently used plugins
- Mature, stable plugins with rare updates
- Exploratory plugins being evaluated

**Examples:**
- Specialty integrations
- Experimental features
- One-time use utilities

### Obsidian Core Features
**Check: Monthly**
- Monitor official changelog
- Track breaking changes
- Document new features relevant to workflows

### Triggering Immediate Updates

Update documentation immediately when:
1. Plugin shows "Update available" in Obsidian
2. Breaking changes are announced
3. New features relevant to PARA workflows are released
4. Security vulnerabilities are disclosed
5. Plugin behavior differs from documentation

---

## Crawling Protocol

### Step-by-Step Process

#### 1. Identify Target URL
- Start with GitHub repository URL
- Note any wiki or docs/ subdirectories
- Identify official documentation site if separate

#### 2. Check robots.txt Compliance
```bash
curl https://example.com/robots.txt
```
- Verify crawling is allowed
- Respect any disallowed paths
- Note crawl-delay if specified

#### 3. Prepare Crawl Script

**Standard Template:**
```python
import asyncio
from crawl4ai import AsyncWebCrawler

async def scrape_plugin_docs():
    """Scrape plugin documentation from GitHub repository."""

    urls_to_scrape = [
        "https://github.com/[user]/[repo]",
        "https://github.com/[user]/[repo]/blob/main/README.md",
        "https://raw.githubusercontent.com/[user]/[repo]/main/README.md"
    ]

    results = {}

    async with AsyncWebCrawler(verbose=True) as crawler:
        for url in urls_to_scrape:
            try:
                result = await crawler.arun(url=url)
                if result.success:
                    results[url] = {
                        "markdown": result.markdown,
                        "title": result.metadata.get("title", ""),
                        "status": "success"
                    }
            except Exception as e:
                results[url] = {"status": "error", "error": str(e)}

    # Choose best result (usually longest content)
    best_result = max(
        [r for r in results.values() if r['status'] == 'success'],
        key=lambda x: len(x.get('markdown', ''))
    )

    return best_result

if __name__ == "__main__":
    result = asyncio.run(scrape_plugin_docs())
    # Process result...
```

#### 4. Execute Crawl

```bash
/opt/homebrew/bin/python3.13 scrape_script.py
```

**Note:** Use Python 3.13+ for compatibility with Crawl4AI's modern syntax.

#### 5. Extract and Clean Content

- Review scraped markdown for completeness
- Remove navigation elements (usually auto-removed by Crawl4AI)
- Preserve code examples exactly as shown
- Keep links functional (relative → absolute if needed)
- Extract version numbers from badges or text
- Capture last updated date if available

#### 6. Format as Markdown with Frontmatter

- Add YAML frontmatter with required fields
- Structure content with clear section headings
- Add table of contents for long documents
- Include practical examples in dedicated sections
- Create quick reference cheatsheets

#### 7. Place in Appropriate Directory

```bash
# Create plugin directory if needed
mkdir -p /knowledge/plugins/[plugin-name]/

# Save main documentation
# Save to: /knowledge/plugins/[plugin-name]/[plugin-name]-overview.md
```

#### 8. Update metadata.json

Add entry to `documentation_sources` array:
```json
{
  "name": "Plugin Name - GitHub Repository",
  "url": "https://github.com/user/repo",
  "last_crawled": "YYYY-MM-DD",
  "relevance": "Brief description of what this source provides"
}
```

Add to `plugins_documented` array:
```json
"plugins_documented": ["plugin-name"]
```

Add version tracking:
```json
"version_tracking": {
  "plugin-name": "X.Y.Z"
}
```

---

## Quality Checklist

Before considering any documentation complete, verify:

### Content Quality
- [ ] Source URL documented in frontmatter
- [ ] Version number captured and accurate
- [ ] Code examples present and properly formatted
- [ ] Practical examples relevant to project workflows (PARA method)
- [ ] Installation instructions included
- [ ] Configuration options documented
- [ ] Troubleshooting section present

### Metadata Completeness
- [ ] Frontmatter contains all required fields
- [ ] Tags are accurate and useful for searching
- [ ] Last updated date is current
- [ ] Source attribution is clear

### Technical Accuracy
- [ ] Links are functional (not broken)
- [ ] Code syntax is valid
- [ ] Commands tested where possible
- [ ] Version compatibility noted

### Organization
- [ ] File placed in correct directory
- [ ] Naming convention followed
- [ ] metadata.json updated
- [ ] Cross-references added to related docs

### Usefulness
- [ ] Information addresses real use cases
- [ ] Quick reference section included
- [ ] Common problems addressed
- [ ] Integration patterns documented

---

## Integration with PARA Workflows

### Documentation Focus Areas

Since this project uses the PARA method, documentation should emphasize:

1. **Project-Specific Use Cases**
   - How plugins support project management
   - Time tracking per project
   - Project templates and automation

2. **Area Maintenance**
   - Recurring tasks and check-ins
   - Ongoing responsibility tracking
   - Regular review workflows

3. **Resource Organization**
   - Knowledge capture and retrieval
   - Reference material management
   - Learning and research workflows

4. **Archive Processes**
   - Completing and archiving projects
   - Historical analysis
   - Retrospective workflows

### Required Examples

Every plugin documentation should include at least one example showing:
- How it integrates with PARA folder structure
- Practical application in daily/weekly workflows
- Integration with other documented plugins
- Automation opportunities with Templater

---

## Adaptation for Other Projects

This methodology is designed to be reusable beyond this Obsidian configuration project.

### Adaptation Steps

1. **Clone Structure**
   - Copy `/knowledge/` directory structure
   - Adapt folder names to new domain
   - Modify metadata.json schema if needed

2. **Update Methodology**
   - Replace Obsidian-specific references
   - Adjust source types for new domain
   - Modify quality checklist for new context

3. **Configure Tooling**
   - Set up Crawl4AI for new source types
   - Adjust scraping scripts for different site structures
   - Configure any domain-specific tools

4. **Establish Cadence**
   - Define update frequencies for new domain
   - Set up monitoring for source changes
   - Create maintenance schedule

### Universal Principles

These principles apply to any documentation curation project:

1. **Source Traceability**: Always document where information came from
2. **Version Tracking**: Maintain version context for accuracy
3. **Structured Organization**: Use consistent hierarchy and naming
4. **Quality Standards**: Apply rigorous quality checklist
5. **Maintenance Plan**: Define clear update cadences
6. **Practical Focus**: Prioritize actionable information over theory
7. **Integration Awareness**: Document how pieces work together

---

## Maintenance Procedures

### Monthly Audit Process

**Every month (or as needed):**

1. **Review metadata.json**
   - Check `last_crawled` dates
   - Identify sources needing updates
   - Note any deprecated plugins

2. **Spot-Check Documentation**
   - Randomly select 2-3 documented plugins
   - Verify version numbers are current
   - Test example code if possible
   - Check for broken links

3. **Monitor Source Changes**
   - Visit GitHub repositories for critical plugins
   - Check for new releases
   - Review changelogs for breaking changes

4. **Update as Needed**
   - Re-run crawl scripts for updated sources
   - Merge new information into existing docs
   - Update version numbers and dates
   - Note deprecated features

5. **Validate Integration Examples**
   - Test cross-plugin workflows still work
   - Update examples if behavior changed
   - Add new integration patterns discovered

### When Adding New Plugin Documentation

1. Run quality checklist on new documentation
2. Add entry to metadata.json
3. Cross-reference with related plugins
4. Add integration examples where relevant
5. Update any workflow documentation that uses it

### When Deprecating Documentation

1. Add `deprecated: true` to frontmatter
2. Add note at top explaining deprecation
3. Link to replacement if available
4. Keep file for historical reference
5. Update metadata.json to note deprecation

---

## Tools and Scripts Reference

### Python Scraping Script Template

Location: Create ad-hoc in project root, e.g., `scrape_[plugin]_docs.py`

**Purpose:** Gather documentation from web sources using Crawl4AI

**Usage:**
```bash
/opt/homebrew/bin/python3.13 scrape_plugin_docs.py
```

**Output:** Raw markdown file saved to project directory

### Bash Commands

**Create plugin directory:**
```bash
mkdir -p /Users/mriechers/Developer/obsidian-config/knowledge/plugins/[plugin-name]
```

**Check file structure:**
```bash
ls -la /Users/mriechers/Developer/obsidian-config/knowledge/
```

**Find documentation files:**
```bash
find /Users/mriechers/Developer/obsidian-config/knowledge -name "*.md"
```

### File Paths

**Project root:** `/Users/mriechers/Developer/obsidian-config/`

**Knowledge base:** `/Users/mriechers/Developer/obsidian-config/knowledge/`

**Metadata:** `/Users/mriechers/Developer/obsidian-config/knowledge/metadata.json`

**Plugin docs:** `/Users/mriechers/Developer/obsidian-config/knowledge/plugins/[plugin-name]/`

---

## Example: Documenting Toggl Integration Plugin

### Process Followed

**Date:** 2025-10-28

**Plugin:** Obsidian Toggl Integration v0.11.0

**Steps Taken:**

1. **Identified Source**
   - Repository: https://github.com/mcndt/obsidian-toggl-integration
   - README: Primary documentation source
   - Wiki: Noted for future detailed scraping

2. **Created Scraping Script**
   - File: `scrape_toggl_docs.py`
   - URLs scraped: Main repo, README blob view, raw README
   - Chose result with most content (main repo page)

3. **Extracted Information**
   - Features and capabilities
   - Installation instructions
   - TQL syntax for code blocks
   - Configuration options
   - Integration examples (QuickAdd)
   - Version: 0.11.0 (latest release)

4. **Structured Documentation**
   - Created: `/knowledge/plugins/toggl-integration/toggl-integration-overview.md`
   - Added comprehensive frontmatter
   - Organized into 10 main sections
   - Included PARA workflow examples
   - Added troubleshooting section
   - Created quick reference tables

5. **Updated Metadata**
   - Added to `documentation_sources`
   - Added to `plugins_documented`
   - Added version to `version_tracking`
   - Set `last_full_audit` date

**Time Invested:** ~30 minutes (automated scraping + manual structuring)

**Result:** Comprehensive 600+ line documentation file covering all aspects of the plugin

---

## Future Improvements

### Planned Enhancements

1. **Automated Version Checking**
   - Script to check GitHub API for new releases
   - Compare against documented versions
   - Alert when updates are available

2. **Documentation Diff Tool**
   - Compare old vs. new versions of scraped content
   - Highlight what changed
   - Semi-automate update process

3. **Search Functionality**
   - Build search index of all documentation
   - Enable quick keyword searching
   - Tag-based filtering

4. **Integration Mapping**
   - Visual diagram of plugin interactions
   - Documented integration patterns
   - Compatibility matrix

5. **Testing Framework**
   - Automated testing of documented code examples
   - Validation of configuration snippets
   - Link checking automation

### Wishlist Features

- Browser extension for one-click documentation capture
- AI-assisted summarization of changelog updates
- Community contribution workflow
- Documentation versioning (Git-based)

---

## Conclusion

This methodology provides a systematic, repeatable approach to building and maintaining a comprehensive knowledge base about Obsidian and its ecosystem. By following these practices, documentation remains:

- **Accurate**: Version-tracked and source-attributed
- **Current**: Regular update cadences prevent staleness
- **Organized**: Consistent structure enables quick navigation
- **Practical**: Focus on real-world use cases and examples
- **Maintainable**: Clear processes for updates and deprecation

The approach is designed to be adapted to other documentation domains while maintaining these core principles.

**Last Updated:** 2025-10-28
**Maintained By:** Project owner (following this methodology)
**Version:** 1.0
