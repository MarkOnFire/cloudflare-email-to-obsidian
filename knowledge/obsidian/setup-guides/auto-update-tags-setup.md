# Auto-Update PARA Tags on File Move - Setup Guide

This script automatically updates your PARA tags when you move files between folders!

## What This Script Does

When you move a file from one PARA folder to another:
- ✓ Removes old PARA tag (e.g., `para/inbox`)
- ✓ Adds new PARA tag (e.g., `para/projects`)
- ✓ Keeps the `all` tag intact
- ✓ Adds `archived` date when moving to ARCHIVE
- ✓ Works with Kanban views

## Installation Steps

### 1. Configure Templater for User Scripts

1. Open Obsidian Settings
2. Go to **Templater** → **User Script Functions**
3. Set the **Script files folder location** to: `templates/scripts`
4. Enable **"Enable System Commands"** (this allows the script to run)

### 2. Copy Your Script Files to Obsidian Vault

The script has been created at:
```
/Users/mriechers/Developer/obsidian-config/templates/scripts/update-para-tags.js
```

**Important:** You need to copy the entire `templates` folder to your actual Obsidian vault.

**Example:** If your vault is at `/Users/mriechers/Documents/MyVault/`, copy like this:

```bash
cp -r /Users/mriechers/Developer/obsidian-config/templates /Users/mriechers/Documents/MyVault/
```

### 3. Create a Command/Hotkey to Run the Script

#### Option A: Manual Command (Recommended to start)

1. Open Command Palette (Cmd+P)
2. Search for "Templater: Create new note from template"
3. You can also add the script as a user function and call it manually

#### Option B: Automatic on File Move (Advanced)

Unfortunately, Obsidian doesn't have a native "on file move" event hook. But here are workarounds:

**Method 1: Use a Hotkey**
1. Open Settings → Hotkeys
2. Search for "Templater: Run user script"
3. Assign a hotkey (e.g., Cmd+Shift+U for "Update tags")
4. After moving a file, press the hotkey to update tags

**Method 2: Commander Plugin + Ribbon Button**
1. Install "Commander" plugin
2. Add the Templater script command to your ribbon
3. Click the button after moving files

**Method 3: QuickAdd Integration (Fully Automated)**
1. Install "QuickAdd" plugin
2. Create a macro that runs after file operations
3. This can detect moves and auto-run the script

## How to Use

### Manual Method (Easiest):
1. Move your file to a new PARA folder
2. Open the file
3. Run Command Palette (Cmd+P)
4. Type "Templater" and look for user scripts
5. Select the update-para-tags script

### With Hotkey:
1. Move your file to a new PARA folder
2. Open the file
3. Press your assigned hotkey (e.g., Cmd+Shift+U)
4. Tags are updated automatically!

## Example Workflow

**Before Move:**
```yaml
---
tags:
  - para/inbox
  - all
---
```

**After moving from INBOX → PROJECTS and running script:**
```yaml
---
tags:
  - para/projects
  - all
---
```

**After moving to ARCHIVE:**
```yaml
---
tags:
  - para/archive
  - all
archived: 2025-10-21
---
```

## Customization

If you need to modify the folder names or add subfolder-specific tags, edit the script at:
`templates/scripts/update-para-tags.js`

Change this section:
```javascript
const folderMappings = {
    "0 - INBOX": "para/inbox",
    "1 - PROJECTS - Action Needed": "para/projects",
    "2 - AREAS - Tracking and Check-ins": "para/areas",
    "3 - RESOURCES": "para/resources",
    "4 - ARCHIVE": "para/archive"
};
```

### Adding Subfolder Support

If you want specific tags for subfolders (like ME, PBSWI, PD under PROJECTS), add them:

```javascript
const folderMappings = {
    "0 - INBOX": "para/inbox",
    "1 - PROJECTS - Action Needed/ME": "para/projects/personal",
    "1 - PROJECTS - Action Needed/PBSWI": "para/projects/pbswi",
    "1 - PROJECTS - Action Needed/PD": "para/projects/professional-development",
    "1 - PROJECTS - Action Needed": "para/projects", // Fallback for main folder
    "2 - AREAS - Tracking and Check-ins": "para/areas",
    "3 - RESOURCES": "para/resources",
    "4 - ARCHIVE": "para/archive"
};
```

**Important:** Put more specific paths BEFORE general ones!

## Troubleshooting

**Script doesn't appear in Templater commands:**
- Make sure "Enable System Commands" is ON in Templater settings
- Verify the script folder path is correct
- Restart Obsidian

**Tags not updating:**
- Make sure the file is open when running the script
- Check that your folder names match exactly
- Look at the Notice popup for error messages

**Want fully automatic updates on move?**
- Let me know and I can create a more advanced solution using Obsidian's API with a custom plugin

## Next Steps

1. Copy the `templates` folder to your Obsidian vault
2. Configure Templater user scripts folder
3. Test the script by moving a file and running it
4. Set up a hotkey for quick access
5. Enjoy automatic PARA tag management!

---

Need help with the fully automated version? Just ask!
