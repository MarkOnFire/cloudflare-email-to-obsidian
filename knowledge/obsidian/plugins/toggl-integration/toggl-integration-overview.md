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
  - productivity
  - integration
---

# Toggl Track Integration for Obsidian

## Executive Summary

The Toggl Track Integration plugin brings powerful time tracking capabilities directly into Obsidian, allowing users to manage Toggl timers without leaving their knowledge base. The plugin integrates with the Toggl Track API to start/stop timers, view running timers in the status bar, and generate comprehensive time tracking reports using custom code blocks within notes.

**Key Capabilities:**
- Start, stop, and restart timers from Obsidian command palette
- View current timer status in the status bar
- Display daily time summary in a side panel
- Generate customizable time tracking reports inside notes using code blocks
- Integration with QuickAdd plugin for enhanced workflows

**GitHub:** https://github.com/mcndt/obsidian-toggl-integration
**Latest Version:** 0.11.0 (released July 23, 2023)
**License:** GPL-3.0
**Downloads:** Significant adoption with 318+ stars on GitHub

---

## Table of Contents

1. [Core Features](#core-features)
2. [Installation and Setup](#installation-and-setup)
3. [Basic Usage](#basic-usage)
4. [Rendering Time Reports (TQL)](#rendering-time-reports-tql)
5. [Integration with Other Plugins](#integration-with-other-plugins)
6. [Configuration Options](#configuration-options)
7. [Use Cases for PARA Workflows](#use-cases-for-para-workflows)
8. [Troubleshooting](#troubleshooting)
9. [Technical Details](#technical-details)
10. [Resources and Support](#resources-and-support)

---

## Core Features

### 1. Status Bar Timer Display
- Shows current running timer in Obsidian's status bar
- Displays timer description and elapsed time
- Updates in real-time
- Quick visibility without opening external apps

### 2. Daily Summary Side Panel
- View a summary of your tracked time for the current day
- See all timers and their durations
- Quick reference for daily time allocation
- Accessible from the sidebar

### 3. Timer Management via Command Palette
The plugin adds several commands to Obsidian's command palette:
- **Start New Timer**: Create and start a new Toggl timer
- **Stop Current Timer**: Stop the currently running timer
- **Restart Recent Timer**: Quickly restart a previously used timer
- View recent timers for quick access

### 4. Time Report Code Blocks (NEW Feature)
Generate dynamic time tracking reports directly in your notes using special code blocks. This is the most powerful feature for integrating time tracking with your knowledge management system.

**Example:**
````markdown
```toggl
SUMMARY
PAST 7 DAYS
```
````

This renders a formatted summary of time tracked over the past 7 days, automatically updating when you view the note.

---

## Installation and Setup

### Prerequisites
- Obsidian installed on your device
- Active Toggl Track account (free or paid)
- Toggl API token

### Step 1: Obtain Toggl API Token

1. Log into your Toggl Track account at [toggl.com](https://toggl.com)
2. Navigate to your profile settings
3. Find the "API Token" section
4. Copy your API token (keep this secure!)

**Official Documentation:** [Where is my API token located?](https://support.toggl.com/en/articles/3116844-where-is-my-api-token-located)

### Step 2: Install Plugin in Obsidian

**Via Community Plugins:**
1. Open Obsidian Settings
2. Navigate to "Community plugins"
3. Click "Browse"
4. Search for "Toggl Track Integration"
5. Click "Install"
6. Enable the plugin

**Manual Installation:**
1. Download the latest release from the [GitHub releases page](https://github.com/mcndt/obsidian-toggl-integration/releases)
2. Extract files to your vault's `.obsidian/plugins/obsidian-toggl-integration/` directory
3. Reload Obsidian
4. Enable the plugin in Settings → Community plugins

### Step 3: Configure Plugin

1. Open Obsidian Settings
2. Navigate to "Toggl Track Integration" under Plugin Options
3. Enter your API token in the "API Token" field
4. Click "Connect"
5. Select your Toggl Workspace from the dropdown menu
6. Save settings

![Settings Screenshot](https://raw.githubusercontent.com/mcndt/obsidian-toggl-integration/master/settings.png)

---

## Basic Usage

### Starting a Timer

**Method 1: Command Palette**
1. Open command palette (Cmd/Ctrl + P)
2. Type "Toggl: Start new timer"
3. Enter timer description
4. Select project (optional)
5. Select tags (optional)
6. Timer starts immediately

**Method 2: QuickAdd Integration** (see [Integration with Other Plugins](#integration-with-other-plugins))

### Stopping a Timer

1. Open command palette (Cmd/Ctrl + P)
2. Type "Toggl: Stop current timer"
3. Timer stops and syncs to Toggl

**Alternative:** Click on the status bar timer display (if configured)

### Restarting Recent Timers

1. Open command palette (Cmd/Ctrl + P)
2. Type "Toggl: Restart recent timer"
3. Select from list of recent timers
4. Timer starts with the same configuration

---

## Rendering Time Reports (TQL)

### Overview

The Toggl Query Language (TQL) allows you to embed dynamic time tracking reports directly into your Obsidian notes using code blocks. Reports automatically update when you view or refresh the note.

### Basic Syntax

````markdown
```toggl
<REPORT_TYPE>
<TIME_PERIOD>
[FILTERS]
```
````

### Report Types

#### SUMMARY Report
Displays a grouped summary of tracked time.

````markdown
```toggl
SUMMARY
PAST 7 DAYS
```
````

**Output includes:**
- Total time tracked
- Time grouped by project
- Time grouped by task/description
- Visual breakdown

#### DETAIL Report
Shows individual time entries.

````markdown
```toggl
DETAIL
PAST 30 DAYS
```
````

**Output includes:**
- Individual time entry rows
- Start/end times
- Duration
- Project and description

### Time Period Options

- `TODAY`
- `YESTERDAY`
- `THIS WEEK`
- `LAST WEEK`
- `THIS MONTH`
- `LAST MONTH`
- `PAST X DAYS` (e.g., `PAST 7 DAYS`, `PAST 30 DAYS`)
- `PAST X WEEKS`
- `PAST X MONTHS`
- Custom date range: `FROM YYYY-MM-DD TO YYYY-MM-DD`

### Filters

Filter reports by project, tags, or description:

````markdown
```toggl
SUMMARY
PAST 7 DAYS
PROJECT: My Project Name
```
````

````markdown
```toggl
DETAIL
THIS MONTH
TAG: work
TAG: billable
```
````

````markdown
```toggl
SUMMARY
PAST 30 DAYS
DESCRIPTION: *writing*
```
````

**Note:** Filters support wildcards (`*`) for partial matching.

### Advanced Examples

**Weekly work summary for a specific project:**
````markdown
```toggl
SUMMARY
THIS WEEK
PROJECT: Client Project Alpha
```
````

**Billable hours this month:**
````markdown
```toggl
DETAIL
THIS MONTH
TAG: billable
```
````

**All time spent writing in the past quarter:**
````markdown
```toggl
SUMMARY
PAST 90 DAYS
DESCRIPTION: *writing*
```
````

### Practical Use Cases

1. **Daily Note Integration**: Add a `TODAY` summary to your daily notes to review time allocation
2. **Project Review**: Embed project-specific time reports in project notes
3. **Weekly Review**: Include a `THIS WEEK` report in your weekly review template
4. **Client Invoicing**: Generate detailed reports filtered by client project and billable tag
5. **Personal Analytics**: Track time spent on different activities over longer periods

---

## Integration with Other Plugins

### QuickAdd Plugin

The [QuickAdd plugin](https://github.com/chhoumann/quickadd) provides macro capabilities that work exceptionally well with Toggl integration.

**Benefits:**
- Create preset timers for common tasks
- Build custom timer menus
- Automate timer creation based on context
- Combine timer tracking with note creation

**Setup Guide:**
- Official QuickAdd preset for Toggl: [Macro_TogglManager](https://github.com/chhoumann/quickadd/blob/master/docs/docs/Examples/Macro_TogglManager.md)
- Original discussion: [Obsidian Discord](https://discord.com/channels/686053708261228577/707816848615407697/876069796553293835)

**Example Use Case:**
Create a QuickAdd macro that:
1. Creates a new project note
2. Starts a Toggl timer with the project name
3. Opens the note for editing

### Templater Plugin

While not explicitly documented, Toggl integration can work with Templater:

**Template Example:**
```markdown
# Project: <% tp.file.title %>

## Time Tracking

```toggl
SUMMARY
THIS MONTH
PROJECT: <% tp.file.title %>
```

## Daily Entries
- [ ] Start timer when working on this project
- [ ] Stop timer when switching tasks
```

### Dataview Plugin

Combine Toggl reports with Dataview queries to create comprehensive dashboards:

````markdown
## This Week's Focus

### Time Tracked
```toggl
SUMMARY
THIS WEEK
```

### Tasks Completed
```dataview
TASK
WHERE completed AND file.ctime >= date(today) - dur(7 days)
GROUP BY file.link
```
````

---

## Configuration Options

### Plugin Settings

Access via Settings → Toggl Track Integration

#### Authentication
- **API Token** (required): Your Toggl Track API token
- **Workspace Selection** (required): Choose which Toggl workspace to use
- **Connection Status**: Displays whether the plugin is successfully connected

#### Display Options
- **Show in Status Bar**: Toggle timer display in status bar
- **Status Bar Format**: Customize how timer information appears
  - Options: Time only, Description only, Both
- **Update Frequency**: How often the status bar refreshes (default: 1 second)

#### Side Panel Settings
- **Enable Daily Summary Panel**: Show/hide the daily summary sidebar
- **Panel Position**: Left or right sidebar
- **Auto-refresh Interval**: How often the panel updates

#### Report Rendering
- **Default Report Style**: Choose visual style for embedded reports
  - Compact, Detailed, Custom
- **Time Format**: 12-hour vs 24-hour time display
- **Round Time To**: Nearest minute, 5 minutes, 15 minutes, etc.

#### Advanced
- **Cache Duration**: How long to cache Toggl data before re-fetching
- **Debug Mode**: Enable detailed logging for troubleshooting

### Customizing Report Appearance

Reports use CSS classes that can be styled with custom CSS snippets:

```css
/* Custom Toggl report styling */
.toggl-report-summary {
  background: var(--background-secondary);
  padding: 1em;
  border-radius: 5px;
}

.toggl-report-project {
  color: var(--text-accent);
  font-weight: bold;
}

.toggl-report-duration {
  color: var(--text-muted);
  font-size: 0.9em;
}
```

---

## Use Cases for PARA Workflows

### Integration with PARA Method

The PARA method (Projects, Areas, Resources, Archive) is a natural fit for time tracking:

#### Projects Folder
**Track project-specific time:**

````markdown
# Project: Website Redesign

**Status:** Active
**Deadline:** 2025-11-15

## Time Investment

```toggl
SUMMARY
FROM 2025-10-01 TO 2025-11-15
PROJECT: Website Redesign
```

## Tasks
- [ ] Design mockups
- [ ] Frontend development
- [ ] Content migration
````

**Benefits:**
- See total time invested per project
- Identify time-intensive projects
- Make data-driven project prioritization decisions

#### Areas Folder
**Track ongoing responsibilities:**

````markdown
# Area: Professional Development

## This Month's Learning

```toggl
SUMMARY
THIS MONTH
TAG: learning
```

## Focus Areas
- Technical reading: X hours
- Online courses: Y hours
- Practice projects: Z hours
````

#### Resources Folder
**Document time spent on research:**

````markdown
# Resource: React Documentation

## Study Time

```toggl
DETAIL
PAST 30 DAYS
DESCRIPTION: *React study*
```

## Key Learnings
[Your notes...]
````

#### Archive Folder
**Review completed project timelines:**

````markdown
# [ARCHIVED] Q3 Marketing Campaign

**Total Time Invested:**

```toggl
SUMMARY
FROM 2025-07-01 TO 2025-09-30
PROJECT: Q3 Marketing
```

**Retrospective:** The project took X hours, primarily in...
````

### Workflow Examples

**1. Daily Note with Time Review**
```markdown
# Daily Note - 2025-10-28

## Today's Time

```toggl
SUMMARY
TODAY
```

## Tasks
- [ ] Review yesterday's tracked time
- [ ] Plan today's focus
- [ ] Start timer for first task
```

**2. Weekly Review Template**
```markdown
# Weekly Review - Week 43, 2025

## Time Allocation This Week

```toggl
SUMMARY
THIS WEEK
```

## Analysis
- Projects: X hours
- Areas: Y hours
- Learning: Z hours

## Adjustments for Next Week
- Increase focus on: [...]
- Reduce time on: [...]
```

**3. Project Kickoff Template**
```markdown
# Project: {{PROJECT_NAME}}

**Start Date:** {{date}}
**Estimated Hours:** [XX hours]

## Time Tracking

```toggl
SUMMARY
FROM {{date}} TO {{end_date}}
PROJECT: {{PROJECT_NAME}}
```

**Note:** Start Toggl timer with project name when working on this.
```

---

## Troubleshooting

### Common Issues

#### API Token Not Connecting

**Symptoms:**
- Plugin shows "Connection failed"
- Settings won't save workspace selection

**Solutions:**
1. Verify API token is copied correctly (no extra spaces)
2. Check Toggl account is active at toggl.com
3. Ensure you have access to at least one workspace
4. Try regenerating the API token in Toggl settings
5. Disable and re-enable the plugin
6. Check Obsidian's console (Ctrl+Shift+I / Cmd+Option+I) for error messages

#### Status Bar Not Showing Timer

**Symptoms:**
- Timer is running in Toggl but not displaying in Obsidian
- Status bar appears empty

**Solutions:**
1. Check "Show in Status Bar" is enabled in settings
2. Verify workspace is correctly selected
3. Manually refresh: Stop and restart Obsidian
4. Check if another plugin is conflicting with status bar
5. Increase update frequency in settings
6. Try starting a new timer from Obsidian directly

#### Code Block Reports Not Rendering

**Symptoms:**
- Toggl code blocks show as plain text
- No formatted report appears
- Error messages in code block

**Solutions:**
1. Verify code block syntax is exactly ` ```toggl ` (three backticks + "toggl")
2. Check TQL syntax matches documented format
3. Ensure time period is valid (e.g., "PAST 7 DAYS" not "LAST 7 DAYS")
4. Confirm project/tag names match exactly in Toggl
5. Check if there's actually data for the specified period
6. Try switching to Reading mode (code blocks may not render in Edit mode)
7. Clear plugin cache in settings

#### Sync Delays

**Symptoms:**
- Changes in Toggl don't appear in Obsidian immediately
- Obsidian-created timers don't show in Toggl app

**Solutions:**
1. Check cache duration setting (reduce for faster updates)
2. Manually trigger refresh via command palette
3. Verify internet connection is stable
4. Check Toggl API status at status.toggl.com
5. Reduce update frequency if hitting rate limits

### Performance Issues

**Large Vaults:**
- If rendering many reports causes lag, reduce update frequency
- Use more specific filters to limit data fetched
- Consider caching reports as static content periodically

**Mobile Performance:**
- Plugin may be slower on mobile devices
- Consider disabling auto-refresh on mobile
- Use simpler report queries on mobile

### Debug Mode

Enable debug mode in plugin settings to:
- See detailed API requests in console
- Track cache hits/misses
- Identify rate limiting issues
- Diagnose TQL parsing errors

Access console:
- Windows/Linux: Ctrl + Shift + I
- macOS: Cmd + Option + I
- Look for messages prefixed with `[Toggl Plugin]`

---

## Technical Details

### Architecture

**Language:** TypeScript (66.9%), Svelte (24.6%), CSS (6.8%), JavaScript (1.7%)

**Build System:** esbuild

**Key Dependencies:**
- `toggl-client`: JavaScript interface for Toggl Track API ([GitHub](https://github.com/saintedlama/toggl-client))
- Obsidian API: For plugin integration
- Svelte: For UI components

**Plugin Structure:**
```
obsidian-toggl-integration/
├── main.ts              # Plugin entry point
├── lib/                 # Core functionality
├── docs/                # Documentation
├── manifest.json        # Plugin manifest
├── styles.css           # Custom styles
└── versions.json        # Version compatibility
```

### API Integration

The plugin uses the Toggl Track API v9:
- **Authentication:** API token-based (sent in headers)
- **Endpoints Used:**
  - `/me` - User profile and workspace info
  - `/time_entries` - Timer CRUD operations
  - `/time_entries/current` - Current running timer
  - `/time_entries/{id}/stop` - Stop specific timer
  - `/projects` - Project list
  - `/tags` - Available tags
  - `/reports/api/v3/workspace/{id}/summary` - Summary reports
  - `/reports/api/v3/workspace/{id}/details` - Detailed reports

**Rate Limiting:**
- Toggl API has rate limits (exact limits vary by account type)
- Plugin implements caching to minimize API calls
- Recommended update frequency: 1-5 seconds for status bar

### Data Privacy

**Local Storage:**
- API token stored in Obsidian's plugin data directory
- Cached timer data stored locally
- No data sent to third parties (only Toggl's API)

**Security Considerations:**
- API token gives full access to Toggl account
- Store vault securely (token is in plain text in plugin settings)
- Don't commit `.obsidian/plugins/` to public repositories
- Consider using environment-specific vaults for sensitive work

### Mobile Compatibility

The plugin works on Obsidian mobile (iOS/Android) with some caveats:
- Full functionality should be available
- Performance may be slower on mobile devices
- Original developer notes future plans to refactor using Obsidian's mobile-friendly request API
- Current implementation relies on standard HTTP requests

### Future Development

According to the repository README:
- Developer plans to potentially fork `toggl-client` dependency
- Refactoring to use Obsidian's native request API for better mobile support
- Detailed roadmap available at: [Development Roadmap](https://github.com/mcndt/obsidian-toggl-integration/projects/1)

---

## Resources and Support

### Official Resources

**GitHub Repository:**
https://github.com/mcndt/obsidian-toggl-integration

**Wiki Documentation (TQL Reference):**
https://github.com/mcndt/obsidian-toggl-integration/wiki/Toggl-Query-Language-(TQL)-Reference

**Latest Release:**
https://github.com/mcndt/obsidian-toggl-integration/releases/tag/0.11.0

**Changelog:**
https://github.com/mcndt/obsidian-toggl-integration/blob/master/CHANGELOG.md

### Community Support

**GitHub Discussions:**
https://github.com/mcndt/obsidian-toggl-integration/discussions

**Feature Requests:**
https://github.com/mcndt/obsidian-toggl-integration/discussions/categories/feature-requests

**Bug Reports:**
https://github.com/mcndt/obsidian-toggl-integration/issues

**Obsidian Discord:**
Find developer as `Maximio#6460` on the [Obsidian Discord server](https://discord.gg/obsidian)

### External Resources

**Toggl Track Documentation:**
https://support.toggl.com/

**Toggl API Documentation:**
https://developers.track.toggl.com/docs/

**QuickAdd Integration Guide:**
https://github.com/chhoumann/quickadd/blob/master/docs/docs/Examples/Macro_TogglManager.md

### Support the Developer

If you find this plugin valuable, consider supporting the developer:

**Buy Me a Coffee:**
https://www.buymeacoffee.com/mcndt

**GitHub Sponsors:**
https://github.com/sponsors/mcndt

---

## Quick Reference

### Essential Commands

| Command | Action |
|---------|--------|
| `Toggl: Start new timer` | Create and start a new timer |
| `Toggl: Stop current timer` | Stop the running timer |
| `Toggl: Restart recent timer` | Restart a previous timer |
| `Toggl: Refresh reports` | Manually refresh all embedded reports |

### Code Block Quick Reference

**Basic Summary:**
````
```toggl
SUMMARY
PAST 7 DAYS
```
````

**Filtered Detail:**
````
```toggl
DETAIL
THIS MONTH
PROJECT: Project Name
TAG: tag-name
```
````

**Custom Date Range:**
````
```toggl
SUMMARY
FROM 2025-10-01 TO 2025-10-31
```
````

### Time Period Keywords

- `TODAY` / `YESTERDAY`
- `THIS WEEK` / `LAST WEEK`
- `THIS MONTH` / `LAST MONTH`
- `PAST X DAYS` / `PAST X WEEKS` / `PAST X MONTHS`
- `FROM YYYY-MM-DD TO YYYY-MM-DD`

---

## Version Information

**Current Version:** 0.11.0 (released July 23, 2023)
**Total Releases:** 25
**Obsidian Compatibility:** Check `versions.json` for specific version requirements
**License:** GPL-3.0

**Project Stats:**
- ⭐ 318 stars
- 👀 4 watching
- 🔱 25 forks
- 👥 7 contributors
- 📦 Total downloads: Significant (see shields badge on GitHub)

---

## Conclusion

The Toggl Track Integration plugin is a mature, well-maintained solution for bringing time tracking directly into Obsidian. Its report rendering capabilities make it particularly powerful for knowledge workers who want to integrate time analytics with their notes, especially when using organizational systems like PARA.

**Best For:**
- Users already using Toggl Track for time tracking
- People who want time analytics embedded in their notes
- Project-based workers tracking billable hours
- Knowledge workers analyzing time allocation across projects and areas
- Consultants and freelancers generating client reports

**Not Ideal For:**
- Users who don't use Toggl (consider other time tracking plugins)
- Those wanting Obsidian-native time tracking without external service
- Users with extremely slow internet (requires API calls)

**Getting Started Recommendation:**
1. Set up API token and connect workspace
2. Experiment with command palette timer controls
3. Add a simple report to your daily note template
4. Gradually expand to project-specific tracking
5. Explore QuickAdd integration for advanced workflows

For updates and new features, watch the GitHub repository and check the changelog periodically.
