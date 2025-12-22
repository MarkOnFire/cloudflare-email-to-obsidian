# Google Drive API Overview

_Source: [About the Google Drive API](https://developers.google.com/workspace/drive/api/guides/about-sdk), retrieved 2025-11-04_

## Why It Matters
- Adds first-party context on Google Drive capabilities for automation scripts and Obsidian integrations that need cloud storage.
- Highlights scenarios where Drive API features complement PARA workflows (centralized documents, shared resources, backup targets).

## Core Components
- **Drive-enabled app** – Your application or automation that calls the API on behalf of a Google Workspace user.
- **Google Drive API** – The REST interface that exposes file, folder, sharing, and metadata operations in Google Drive.
- **Google Drive** – User-managed files, folders, and shared drives that the API can read or manipulate (subject to granted scopes).

## Supported Capabilities
- Upload and download files, enabling bi-directional sync or export flows.
- Search files and folders with expressive queries across any `files` resource metadata field.
- Manage sharing so users can collaborate across files, folders, and shared drives.
- Pair with the Google Picker API to let users browse Drive contents inside custom UIs and return metadata such as names, URLs, last modified timestamps, and owners.
- Create **third-party shortcuts** that deep-link to data stored outside Drive while keeping them accessible inside Drive’s hierarchy.
- Use an app-specific hidden folder (`appDataFolder`) to isolate configuration data without exposing the rest of a user’s Drive.
- Subscribe to Google Drive events so your app can react to file activity (for example, trigger automation when content changes).
- Extend the Drive UI by integrating entry points that open your Drive-enabled app from within Google’s standard web interface.
- Apply Google Drive labels: set and read custom label field values on files and search using label metadata taxonomy.

## Related Resources
- **Develop on Google Workspace** – Covers authentication, authorization, and shared patterns for Google Workspace APIs.
- **Drive API Quickstarts** – Step-by-step guides to configure credentials, run sample apps, and understand request patterns.
- **Drive API Authentication** (`drive-api-auth.md`) – OAuth consent setup, scope selection, and verification requirements tailored for Drive integrations.
- **Drive API Guides** (`drive-api-guides.md`) – Detailed coverage of file operations, sharing, metadata, changes, UI integrations, shared drives, and labels.
- **Drive API REST Reference** (`drive-api-rest-reference.md`) – Endpoint catalog for Drive API v3 resources and methods.
