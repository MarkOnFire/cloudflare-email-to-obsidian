# Google Drive API Guides

_Aggregated from Google Drive API documentation, retrieved 2025-11-04._



This file consolidates key Google Drive API guide pages covering file operations, permissions, metadata, events, UI integrations, shared drives, labels, performance, and troubleshooting.

## Contents

- [About files and metadata](#about-files-and-metadata)
- [Ownership](#ownership)
- [File types](#file-types)
- [File characteristics](#file-characteristics)
- [File organization](#file-organization)
- [Related topics](#related-topics)
- [Create and manage files](#create-and-manage-files)
- [Create file](#create-file)
- [Use the fields parameter](#use-the-fields-parameter)
- [Generate IDs to use with your files](#generate-ids-to-use-with-your-files)
- [Create metadata-only files](#create-metadata-only-files)
- [Manage thumbnail images](#manage-thumbnail-images)
- [Copy an existing file](#copy-an-existing-file)
- [Upload file data](#upload-file-data)
- [Use PATCH vs. PUT](#use-patch-vs-put)
- [Perform a simple upload](#perform-a-simple-upload)
- [Perform a multipart upload](#perform-a-multipart-upload)
- [Perform a resumable upload](#perform-a-resumable-upload)
- [Handle media upload errors](#handle-media-upload-errors)
- [Import to Google Docs types](#import-to-google-docs-types)
- [Use a pre-generated ID to upload files](#use-a-pre-generated-id-to-upload-files)
- [Define indexable text for unknown file types](#define-indexable-text-for-unknown-file-types)
- [Download and export files](#download-and-export-files)
- [Download blob file content](#download-blob-file-content)
- [Download blob file content at an earlier version](#download-blob-file-content-at-an-earlier-version)
- [Download blob file content in a browser](#download-blob-file-content-in-a-browser)
- [Download blob file content during long-running operations](#download-blob-file-content-during-long-running-operations)
- [Export Google Workspace document content](#export-google-workspace-document-content)
- [Export Google Workspace document content in a browser](#export-google-workspace-document-content-in-a-browser)
- [Export Google Workspace document content at an earlier version in a browser](#export-google-workspace-document-content-at-an-earlier-version-in-a-browser)
- [Export Google Workspace document content during long-running operations](#export-google-workspace-document-content-during-long-running-operations)
- [Limit how files are shared](#limit-how-files-are-shared)
- [Manage file revisions](#manage-file-revisions)
- [Specify revisions to save from auto delete](#specify-revisions-to-save-from-auto-delete)
- [Get a file revision](#get-a-file-revision)
- [List a file's revisions](#list-a-files-revisions)
- [Update a file revision](#update-a-file-revision)
- [Download a revision](#download-a-revision)
- [Delete a file revision](#delete-a-file-revision)
- [Publish a revision](#publish-a-revision)
- [Create and populate folders](#create-and-populate-folders)
- [Create a folder](#create-a-folder)
- [Create a file in a specific folder](#create-a-file-in-a-specific-folder)
- [Move files between folders](#move-files-between-folders)
- [File and folder limits](#file-and-folder-limits)
- [Trash or delete files and folders](#trash-or-delete-files-and-folders)
- [Trash](#trash)
- [Empty trash](#empty-trash)
- [Delete](#delete)
- [Permissions](#permissions)
- [Search for files and folders](#search-for-files-and-folders)
- [Get a file](#get-a-file)
- [Search for all files and folders on the current user's My Drive](#search-for-all-files-and-folders-on-the-current-users-my-drive)
- [Search for specific files or folders on the current user's My Drive](#search-for-specific-files-or-folders-on-the-current-users-my-drive)
- [Search for files with a custom file property](#search-for-files-with-a-custom-file-property)
- [Search for files with a specific label or field value](#search-for-files-with-a-specific-label-or-field-value)
- [Search the corpora](#search-the-corpora)
- [Share files, folders, and drives](#share-files-folders-and-drives)
- [How permissions work](#how-permissions-work)
- [Understand file capabilities](#understand-file-capabilities)
- [Scenarios for sharing Drive resources](#scenarios-for-sharing-drive-resources)
- [Create a permission](#create-a-permission)
- [Get a permission](#get-a-permission)
- [List all permissions](#list-all-permissions)
- [Update permissions](#update-permissions)
- [Update multiple permissions with batch requests](#update-multiple-permissions-with-batch-requests)
- [Delete a permission](#delete-a-permission)
- [Set an expiration date to limit item access](#set-an-expiration-date-to-limit-item-access)
- [Manage pending access proposals](#manage-pending-access-proposals)
- [Get a pending access proposal](#get-a-pending-access-proposal)
- [List pending access proposals](#list-pending-access-proposals)
- [Resolve pending access proposals](#resolve-pending-access-proposals)
- [Manage limited and expansive access](#manage-limited-and-expansive-access)
- [About folders with limited access](#about-folders-with-limited-access)
- [About expansive access](#about-expansive-access)
- [Transfer file ownership](#transfer-file-ownership)
- [Transfer file ownership to another Google Workspace account in the same organization](#transfer-file-ownership-to-another-google-workspace-account-in-the-same-organization)
- [Transfer file ownership from one consumer account to another](#transfer-file-ownership-from-one-consumer-account-to-another)
- [Protect file content from modification](#protect-file-content-from-modification)
- [Make files read-only with Drive content restrictions](#make-files-read-only-with-drive-content-restrictions)
- [Prevent users from downloading, printing, or copying your file](#prevent-users-from-downloading-printing-or-copying-your-file)
- [Access link-shared files using resource keys](#access-link-shared-files-using-resource-keys)
- [Read the resource key from the file](#read-the-resource-key-from-the-file)
- [Set the resource key on the request](#set-the-resource-key-on-the-request)
- [Store application-specific data](#store-application-specific-data)
- [Application data folder scope](#application-data-folder-scope)
- [How the application data folder differs from Drive backup folders](#how-the-application-data-folder-differs-from-drive-backup-folders)
- [Constraints on the application data folder](#constraints-on-the-application-data-folder)
- [Create a file in the application data folder](#create-a-file-in-the-application-data-folder)
- [Search for files in the application data folder](#search-for-files-in-the-application-data-folder)
- [Download files from the application data folder](#download-files-from-the-application-data-folder)
- [Manage file metadata](#manage-file-metadata)
- [Specify file names and extensions](#specify-file-names-and-extensions)
- [Save indexable text](#save-indexable-text)
- [Upload thumbnails](#upload-thumbnails)
- [Retrieve thumbnails](#retrieve-thumbnails)
- [Add custom file properties](#add-custom-file-properties)
- [Working with custom file properties](#working-with-custom-file-properties)
- [Limits of custom file properties](#limits-of-custom-file-properties)
- [Access private custom file properties](#access-private-custom-file-properties)
- [Manage comments and replies](#manage-comments-and-replies)
- [Comment constraints](#comment-constraints)
- [Add an anchored comment to the latest revision of a document](#add-an-anchored-comment-to-the-latest-revision-of-a-document)
- [Add an unanchored comment](#add-an-unanchored-comment)
- [Add a reply to a comment](#add-a-reply-to-a-comment)
- [Get a comment](#get-a-comment)
- [List comments](#list-comments)
- [Update a comment](#update-a-comment)
- [Delete a comment](#delete-a-comment)
- [Create a shortcut to a Drive file](#create-a-shortcut-to-a-drive-file)
- [Create a shortcut](#create-a-shortcut)
- [Search for a shortcut](#search-for-a-shortcut)
- [Create shortcut files to external app content](#create-shortcut-files-to-external-app-content)
- [How third-party shortcuts work](#how-third-party-shortcuts-work)
- [Add custom thumbnails and indexable text](#add-custom-thumbnails-and-indexable-text)
- [Return user info](#return-user-info)
- [Get details about a user](#get-details-about-a-user)
- [List user apps](#list-user-apps)
- [Get user app by ID](#get-user-app-by-id)
- [Monitor Drive changes overview](#monitor-drive-changes-overview)
- [Identify which change log to track](#identify-which-change-log-to-track)
- [Change entry after file moves to a shared drive](#change-entry-after-file-moves-to-a-shared-drive)
- [Change entry for individual items in a shared drive](#change-entry-for-individual-items-in-a-shared-drive)
- [Change entry for lost access permission](#change-entry-for-lost-access-permission)
- [Track changes for users and shared drives](#track-changes-for-users-and-shared-drives)
- [Enable change entries](#enable-change-entries)
- [Tombstones](#tombstones)
- [Track shared drives](#track-shared-drives)
- [Retrieve and process changes](#retrieve-and-process-changes)
- [Get start page token](#get-start-page-token)
- [Get changes](#get-changes)
- [Receive notifications](#receive-notifications)
- [Receive notifications for resource changes](#receive-notifications-for-resource-changes)
- [Overview](#overview)
- [Create notification channels](#create-notification-channels)
- [Stop notifications](#stop-notifications)
- [Overview of Drive apps](#overview-of-drive-apps)
- [Drive UI's "New" button](#drive-uis-new-button)
- [Drive UI's "Open with" menu item](#drive-uis-open-with-menu-item)
- [Configure a Drive UI integration](#configure-a-drive-ui-integration)
- [Enable the Drive API](#enable-the-drive-api)
- [Set up Drive UI integration](#set-up-drive-ui-integration)
- [Request the drive.install scope](#request-the-driveinstall-scope)
- [Integrate with Drive UI's New button](#integrate-with-drive-uis-new-button)
- [Users & new events](#users-new-events)
- [Integrate with Drive UI's Open with context menu](#integrate-with-drive-uis-open-with-context-menu)
- [Handle an Open URL for app-specific documents](#handle-an-open-url-for-app-specific-documents)
- [Handle an Open URL for Google Workspace documents](#handle-an-open-url-for-google-workspace-documents)
- [Display the Google Picker](#display-the-google-picker)
- [Add the Save to Drive button](#add-the-save-to-drive-button)
- [Supported browsers](#supported-browsers)
- [Add the "Save to Drive" button to a page](#add-the-save-to-drive-button-to-a-page)
- [Use multiple buttons on a page](#use-multiple-buttons-on-a-page)
- [JavaScript API](#javascript-api)
- [Localize the "Save to Drive" button](#localize-the-save-to-drive-button)
- [Troubleshooting](#troubleshooting)
- [Add the Share button](#add-the-share-button)
- [Shared drives overview](#shared-drives-overview)
- [Access control](#access-control)
- [Implement shared drive support](#implement-shared-drive-support)
- [Search for content on a shared drive](#search-for-content-on-a-shared-drive)
- [Track changes on a shared drive](#track-changes-on-a-shared-drive)
- [Enable shared drive support in the Drive UI](#enable-shared-drive-support-in-the-drive-ui)
- [Use the Google Picker with shared drives](#use-the-google-picker-with-shared-drives)
- [Manage shared drives](#manage-shared-drives)
- [Create a shared drive](#create-a-shared-drive)
- [Get a shared drive](#get-a-shared-drive)
- [List shared drives](#list-shared-drives)
- [Update a shared drive](#update-a-shared-drive)
- [Hide and unhide a shared drive](#hide-and-unhide-a-shared-drive)
- [Delete a shared drive](#delete-a-shared-drive)
- [Add or remove shared drive members](#add-or-remove-shared-drive-members)
- [Manage shared drives as domain administrators](#manage-shared-drives-as-domain-administrators)
- [Folder limits](#folder-limits)
- [Search for shared drives](#search-for-shared-drives)
- [Query string examples](#query-string-examples)
- [Query multiple terms with parentheses](#query-multiple-terms-with-parentheses)
- [Labels overview](#labels-overview)
- [Set label field values](#set-label-field-values)
- [Example](#example)
- [Notes](#notes)
- [Unset label field values](#unset-label-field-values)
- [Remove labels from files](#remove-labels-from-files)
- [List labels applied to files](#list-labels-applied-to-files)
- [Return specific labels from a file](#return-specific-labels-from-a-file)
- [Search files by label or field](#search-files-by-label-or-field)
- [Label field types](#label-field-types)
- [How the fields parameter works](#how-the-fields-parameter-works)
- [Field parameter format rules](#field-parameter-format-rules)
- [Fetch the fields of a nested resource](#fetch-the-fields-of-a-nested-resource)
- [Alternative system parameters](#alternative-system-parameters)
- [Improve Drive API performance](#improve-drive-api-performance)
- [Compression using gzip](#compression-using-gzip)
- [Working with partial resources](#working-with-partial-resources)
- [Batch requests](#batch-requests)
- [Resolve Drive API errors](#resolve-drive-api-errors)
- [HTTP status code summary](#http-status-code-summary)
- [400 errors](#400-errors)
- [401 errors](#401-errors)
- [403 errors](#403-errors)
- [404 errors](#404-errors)
- [429 errors](#429-errors)
- [500, 502, 503, 504 errors](#500-502-503-504-errors)

## About files and metadata

_Source: https://developers.google.com/workspace/drive/api/guides/about-files_

Google Drive organizes files in collections, describes files by types, and
provides specific attributes for each file to facilitate file manipulation.


The Google Drive API represents files stored on Drive as a files resource.


Note:

Folders are treated as a type of file. For more details about folders, see

File types

.


## Ownership


Drive organizes files based on the user's relationship with the
content and its storage location. Collections are specified as part of the
file's metadata to show which group of files the file is stored with inside
Drive. The main difference between My Drive and
shared drive collections is file ownership. A single user is the owner of files
in their My Drive, whereas a group or organization owns files in
a shared drive.


My Drive

Each user has a "root" folder called "My Drive" that functions as their primary hierarchy, and consists of everything that descends from this root folder. The user is the primary owner of this folder.

Shared drives

A

shared drive

is an organizational structure within Drive that lives parallel to My Drive. You can organize an individual file within a shared drive or My Drive, but not both. However,

Drive shortcuts

can be used to point to files or folders from shared drives to My Drive, or the other way around.


## File types


Drive describes files by types. This list shows all available
file types:


Blob

A file that contains text or binary content such as images, videos, and PDFs.

Folder

A container you can use to organize other types of files on
Drive. Folders are files that only contain metadata, and have
the MIME type application/vnd.google-apps.folder . For more information,
see Create and populate folders .


Note: A single file stored on My Drive can be in multiple
folders. A single file stored on a shared
drive can only have one parent folder.


Google Workspace document

A file that a Google Workspace application
creates, such as Google Docs, Sheets, or
Slides. The MIME type format is application/vnd.google-apps.*app* where app is the application name
(such as application/vnd.google-apps.spreadsheet for a
Sheets file). For a list of Drive and
Google Workspace-specific MIME types, see Google Workspace and
Google Drive supported MIME types .


Shortcut

A metadata-only file that points to another file on Drive. The
shortcut file MIME type is application/vnd.google-apps.shortcut . For more
information, see Create a shortcut to a Drive
file .


Third-party shortcut

A metadata-only file that links to content stored on a third-party storage
system. The third-party shortcut file MIME type is application/vnd.google-apps.drive-sdk . For more information, see Create a
shortcut file to content stored by your
app .


Note:

You cannot upload or download folders, Google Workspace documents, shortcuts, and third-party shortcuts to or from Drive. However, if they use compatible formats you can upload or export Google Workspace documents. For example, you can create a Docs document when you import a PDF. Similarly, you can export a Google Slides presentation as a Microsoft PowerPoint file.


## File characteristics


This list shows some characteristics of a Drive file:


Access proposal

A proposal from a requester to an approver to grant a recipient access to a Drive item. For more information, see

List and resolve pending access proposals

.

Content

The binary or text body of the file. Some content examples you can store in Drive are images, videos, text, and PDFs.

File ID

A unique, opaque ID for each file. File IDs are stable throughout the life of the file, even if the file name changes.

Search expressions

are used to locate files by name, type, content, parent container, owner, or other metadata.

Metadata

Data describing the contents of the file. This data includes the name, type, creation, and modification times. Some metadata fields, such as the

`name`
, are user-agnostic and appear the same for each user. Other fields, such as

`capabilities`
and

`viewedByMeDate`
contain user-specific values. File types, such as images and videos, contain additional metadata extracted from EXIF and other embedded metadata. For more information, see

Manage file metadata

.

Permission

An access grant for a user, group, domain, or the world to access a file or a folder hierarchy. Users control who can access a file with the access control list (ACL), which is a list of permissions for the file. For more information, see

Share files, folders and drives

.

Revision history

The record of changes to the file content only, not the file metadata. For more details about revisions, see

Changes and revisions overview

.

Thumbnail

A graphical representation of a file. Drive automatically generates thumbnails for many common file types. For shortcuts and other file types that Drive can't render, you can provide a thumbnail image. For more information, see

Upload thumbnails

.


## File organization


The Drive API organizes files into storage locations, called spaces ,
and collections, called corpora .


Spaces

Specific storage locations that are isolated from each other. All content in
Drive is stored in one of these two defined spaces: drive and appDataFolder .


- drive : Includes all user-visible files created in
Drive. PDFs, documents, Google Docs, shortcuts, and
other content the user uploads is located in the drive space.

- appDataFolder : Includes per-user application data. Applications
typically store configuration files and other data not intended to be
directly accessible by users.



Files cannot move between spaces .


Corpora

Collections of files used to narrow the scope of file and folder searches. The
corpora for Drive are: user , domain , drive , and allDrives .


- user : Includes all files created by and opened by the user in "My
Drive", and those shared directly with the user in
"Shared with me."

- drive : Includes all files contained in a single shared drive, as
indicated by the driveId .

- domain : Includes all searchable files shared with the user's domain.

- allDrives : Includes all files in shared drives where the user is a
member, and all files in "My Drive" and "Shared with me."
Use the allDrives corpora with caution as it has a broad scope and can
affect performance. When possible, use user or drive instead of allDrives for efficiency.



Files can move freely between corpora as permissions and ownership change.



## Related topics


Here are a few next steps you might take:


- Learn how to Create and manage files .

- Learn how to Create and populate folders .

- Learn how to Upload file data .

- Learn how to Download and export files .

- Learn how to Store application-specific data .

- Learn how to Display the Google Picker on a page.

## Create and manage files

_Source: https://developers.google.com/workspace/drive/api/guides/create-file_

This guide explains how to create and manage files in Google Drive using the
Google Drive API.



## Create file


To create a file in Drive that contains no metadata or content,
use the create method on the files resource with no parameters.


When you create the file, the method returns a files resource. The file is
given a kind of drive.file , an id , a name of "Untitled", and a mimeType of application/octet-stream . The uploadType is marked as required but defaults to media , so you don't actually have to
supply it.


For more information about Drive file limits, see File and
folder limits .


Note:

When a Drive user wants to download a file, or when the file is downloaded through the sync client, Drive builds a full filename (with extension) based on the name. In cases where the extension is missing, Drive attempts to determine the extension based on the file's

MIME type

.


## Use the fields parameter


If you want to specify the fields to return in the response, you can set the fields system
parameter with any method of the files resource. If you omit the fields parameter, the
server returns a default set of fields specific to the method. For example, the list method returns only the kind , id , name , mimeType , and resourceKey fields for each file. To return different
fields, see Return specific fields .



## Generate IDs to use with your files


The generateIds method on the files resource lets you pre-generate unique file
IDs that can be used when creating or copying files and folders in
Drive. This can be useful when you need to control the file IDs
from your app, rather than letting Drive assign them
automatically.


You can set the number of IDs generated using the count query parameter.
If count is not set, 10 are returned by default. The maximum number of IDs you
can request is capped at 1,000.


You can also designate the space in which the IDs
can be used and the type of items which the
IDs can be used for.


Once an ID is generated, it can be passed to the create or copy method
through the id field. This ensures that the created or copied file uses the
predetermined ID.


If the file is successfully created or copied, subsequent retries return a 409
Conflict HTTP status code response and duplicate files aren't created.


Note that pre-generated IDs aren't supported for the creation of
Google Workspace files, except for the application/vnd.google-apps.drive-sdk and application/vnd.google-apps.folder MIME
types . Similarly, uploads referencing a conversion
to a Google Workspace file format aren't supported.



## Create metadata-only files


Metadata-only files contain no content. Metadata is data (such as name , mimeType , and createdTime ) that describes the file. Fields like name are
user-agnostic and appear the same for each user, whereas fields such as viewedByMeTime contain user-specific values.


One example of a metadata-only file is a folder with the MIME type application/vnd.google-apps.folder . For more information, see Create and
populate folders . Another example is a shortcut that
points to another file on Drive with the MIME type application/vnd.google-apps.shortcut . For more information, see Create a
shortcut to a Drive file .



## Manage thumbnail images


Thumbnails help users identify Drive files. Drive
can automatically generate thumbnails for common file types or you can provide a
thumbnail image generated by your app. For more information, see Upload
thumbnails .



## Copy an existing file


To copy a file, and apply any requested updates, use the copy method on the files resource. To find the fileId to copy, use the list method.


You can apply updates through patch semantics, meaning you can make partial
modifications to a resource. You must explicitly set the fields that you intend
to modify in your request. Any fields not included in the request retain their
existing values. For more information, see Working with partial resources .


You can pre-set the file ID of the copied file using the generateIds method. For more information, see Generate IDs to use with your files .


Note that you need to use an appropriate Drive API
scope to authorize the
call. For more information on Drive scopes, see Choose
Google Drive API scopes .



### Limits and considerations


As you prepare to copy files, take note of these limits and considerations:


- Permissions : The DownloadRestrictionsMetadata object of the files resource determines
who can copy the file. For more information, see Prevent users from
downloading, printing, or copying your
file . The capabilities.canCopy field resource determines whether the user can copy a file. For more
information, see Understand file
capabilities . The user that created the copy owns the copied file. No other sharing
settings from the source file are replicated. If the copy is created in
a shared folder, it inherits the permissions of that folder. A copied file's ownership might change and the copy might not inherit
the original file's sharing settings. These settings might need to be
reset.

  The

  `DownloadRestrictionsMetadata`
  object of the

  `files`
  resource determines who can copy the file. For more information, see

  Prevent users from downloading, printing, or copying your file

  .

  The

  `capabilities.canCopy`
  field resource determines whether the user can copy a file. For more information, see

  Understand file capabilities

  .

  The user that created the copy owns the copied file. No other sharing settings from the source file are replicated. If the copy is created in a shared folder, it inherits the permissions of that folder.

  A copied file's ownership might change and the copy might not inherit the original file's sharing settings. These settings might need to be reset.

- File management : Some files, like third-party
shortcuts , can never be copied. You can only copy a file into one parent folder. Specifying multiple
parents isn't supported. If the parents field isn't
specified, the file inherits any discoverable parents from the source
file. Even though a folder is a type of file, you can't copy a folder.
Instead, create a destination folder and set the parents field of the
existing files to the destination folder. You can then delete the
original source folder. Unless a new filename is specified, the copy method produces a file
with the same name as the original. Excessive use of copy can lead to exceeding your Drive API
quota limits. For more information, see Usage
limits .

  Some files, like

  third-party shortcuts

  , can never be copied.

  You can only copy a file into one parent folder. Specifying multiple parents isn't supported. If the

  `parents`
  field isn't specified, the file inherits any discoverable parents from the source file.

  Even though a folder is a type of file, you can't copy a folder. Instead, create a destination folder and set the

  `parents`
  field of the existing files to the destination folder. You can then delete the original source folder.

  Unless a new filename is specified, the

  `copy`
  method produces a file with the same name as the original.

  Excessive use of

  `copy`
  can lead to exceeding your Drive API quota limits. For more information, see

  Usage limits

  .




## Related topics


Here are a few next steps you might try:


- To upload file data when you create or update a file, see Upload file
data .

- To create a file in a specific folder, see Create a file in a specific
folder .

- To move files, see Move files between
folders .

- To work with file metadata, see Manage file metadata .

- To delete a file, see Trash or delete files and
folders .

## Upload file data

_Source: https://developers.google.com/workspace/drive/api/guides/manage-uploads_

The Google Drive API lets you upload file data when you create or update a File . For information about how to create a
metadata-only file, such as a folder, see Create metadata-only files .


There are three types of uploads you can perform:


- Simple upload ( uploadType=media ) : Use this upload type to transfer a
small media file (5 MB or less) without supplying metadata. To perform a
simple upload, refer to Perform a simple upload .

- Multipart upload ( uploadType=multipart ) : "Use this upload type to
transfer a small file (5 MB or less) along with metadata that describes the
file, in a single request. To perform a multipart upload, refer to Perform
a multipart upload .

- Resumable upload ( uploadType=resumable ) : Use this upload type for
large files (greater than 5 MB) and when there's a high chance of network
interruption, such as when creating a file from a mobile app. Resumable
uploads are also a good choice for most applications because they also work
for small files at a minimal cost of one additional HTTP request per upload.
To perform a resumable upload, refer to Perform a resumable
upload .



The Google API client libraries implement at least one of these types of
uploads. Refer to the client library
documentation for additional details about how to
use each of the types.


Note:

In the Drive API documentation,

media

refers to all available files with MIME types supported for upload to Drive. For a list of supported MIME types, refer to

Google Workspace and Drive supported MIME types

.

Note:

Users can upload any file type to Drive using the Drive UI and Drive attempts to detect and automatically set the MIME type. If the MIME type can't be detected, the MIME type is set to

`application/octet-stream`
.


## Use PATCH vs. PUT


As a refresher, the HTTP verb PATCH supports a partial file resource update
whereas the HTTP verb PUT supports full resource replacement. Note that PUT can introduce breaking changes when adding a new field to an existing resource.


When uploading a file resource, use the following guidelines:


- Use the HTTP verb documented on the API reference for the initial request of
a resumable upload or for the only request of a simple or multipart upload.

- Use PUT for all subsequent requests for a resumable upload once the
request has started. These requests are uploading content no matter the
method being called.




## Perform a simple upload


To perform a simple upload, use the create method on the files resource with uploadType=media .


Note:

If you're using the older Drive API v2, use the

`files.insert`
method. You can find code samples in

GitHub

. Learn how to

migrate to Drive API v3

.

The following shows how to perform a simple upload:



### HTTP


1. Create a POST request to the method's /upload URI with the query
parameter of uploadType=media : POST https://www.googleapis.com/upload/drive/v3/files?uploadType=media

2. Add the file's data to the request body.

3. Add these HTTP headers: Content-Type . Set to the MIME media type of the object being
uploaded. Content-Length . Set to the number of bytes you upload. If you use
chunked transfer encoding, this header is not required.

  `Content-Type`
  . Set to the MIME media type of the object being uploaded.

  `Content-Length`
  . Set to the number of bytes you upload. If you use chunked transfer encoding, this header is not required.

4. Send the request. If the request succeeds, the server returns the HTTP
200 OK status code along with the file's metadata. {HTTP}



Note:

To update an existing file, use

`PATCH`
.

When you perform a simple upload, basic metadata is created and some attributes
are inferred from the file, such as the MIME type or modifiedTime . You can use
a simple upload in cases where you have small files and file metadata isn't
important.



## Perform a multipart upload


A multipart upload request lets you upload metadata and data in the same
request. Use this option if the data you send is small enough to upload again,
in its entirety, if the connection fails.


To perform a multipart upload, use the create method on the files resource with uploadType=multipart .


Note:

If you're using the older Drive API v2, use the

`files.insert`
method. You can find code samples in

GitHub

. Learn how to

migrate to Drive API v3

.

The following shows how to perform a multipart upload:



### Java


drive/snippets/drive_v3/src/main/java/UploadBasic.java

View on GitHub

Code

````
import
 
com.google.api.client.googleapis.json.GoogleJsonResponseException
;


import
 
com.google.api.client.http.FileContent
;


import
 
com.google.api.client.http.HttpRequestInitializer
;


import
 
com.google.api.client.http.javanet.NetHttpTransport
;


import
 
com.google.api.client.json.gson.GsonFactory
;


import
 
com.google.api.services.drive.Drive
;


import
 
com.google.api.services.drive.DriveScopes
;


import
 
com.google.api.services.drive.model.File
;


import
 
com.google.auth.http.HttpCredentialsAdapter
;


import
 
com.google.auth.oauth2.GoogleCredentials
;


import
 
java.io.IOException
;


import
 
java.util.Arrays
;



/* Class to demonstrate use of Drive insert file API */


public
 
class
 
UploadBasic
 
{



  
/**


   * Upload new file.


   *


   * @return Inserted file metadata if successful, {@code null} otherwise.


   * @throws IOException if service account credentials file not found.


   */


  
public
 
static
 
String
 
uploadBasic
()
 
throws
 
IOException
 
{


    
// Load pre-authorized user credentials from the environment.


    
// TODO(developer) - See https://developers.google.com/identity for


    
// guides on implementing OAuth2 for your application.


    
GoogleCredentials
 
credentials
 
=
 
GoogleCredentials
.
getApplicationDefault
()


        
.
createScoped
(
Arrays
.
asList
(
DriveScopes
.
DRIVE_FILE
));


    
HttpRequestInitializer
 
requestInitializer
 
=
 
new
 
HttpCredentialsAdapter
(


        
credentials
);



    
// Build a new authorized API client service.


    
Drive
 
service
 
=
 
new
 
Drive
.
Builder
(
new
 
NetHttpTransport
(),


        
GsonFactory
.
getDefaultInstance
(),


        
requestInitializer
)


        
.
setApplicationName
(
"Drive samples"
)


        
.
build
();


    
// Upload file photo.jpg on drive.


    
File
 
fileMetadata
 
=
 
new
 
File
();


    
fileMetadata
.
setName
(
"photo.jpg"
);


    
// File's content.


    
java
.
io
.
File
 
filePath
 
=
 
new
 
java
.
io
.
File
(
"files/photo.jpg"
);


    
// Specify media type and file-path for file.


    
FileContent
 
mediaContent
 
=
 
new
 
FileContent
(
"image/jpeg"
,
 
filePath
);


    
try
 
{


      
File
 
file
 
=
 
service
.
files
().
create
(
fileMetadata
,
 
mediaContent
)


          
.
setFields
(
"id"
)


          
.
execute
();


      
System
.
out
.
println
(
"File ID: "
 
+
 
file
.
getId
());


      
return
 
file
.
getId
();


    
}
 
catch
 
(
GoogleJsonResponseException
 
e
)
 
{


      
// TODO(developer) - handle error appropriately


      
System
.
err
.
println
(
"Unable to upload file: "
 
+
 
e
.
getDetails
());


      
throw
 
e
;


    
}


  
}


}
````



### Python


drive/snippets/drive-v3/file_snippet/upload_basic.py

View on GitHub

Code

````
import
 
google.auth


from
 
googleapiclient.discovery
 
import
 
build


from
 
googleapiclient.errors
 
import
 
HttpError


from
 
googleapiclient.http
 
import
 
MediaFileUpload




def
 
upload_basic
():


  
"""Insert new file.


  Returns : Id's of the file uploaded



  Load pre-authorized user credentials from the environment.


  TODO(developer) - See https://developers.google.com/identity


  for guides on implementing OAuth2 for the application.


  """

  
creds
,
 
_
 
=
 
google
.
auth
.
default
()


  
try
:

    
# create drive api client

    
service
 
=
 
build
(
"drive"
,
 
"v3"
,
 
credentials
=
creds
)


    
file_metadata
 
=
 
{
"name"
:
 
"download.jpeg"
}

    
media
 
=
 
MediaFileUpload
(
"download.jpeg"
,
 
mimetype
=
"image/jpeg"
)

    
# pylint: disable=maybe-no-member

    
file
 
=
 
(

        
service
.
files
()

        
.
create
(
body
=
file_metadata
,
 
media_body
=
media
,
 
fields
=
"id"
)

        
.
execute
()

    
)

    
print
(
f
'File ID: 
{
file
.
get
(
"id"
)
}
'
)


  
except
 
HttpError
 
as
 
error
:

    
print
(
f
"An error occurred: 
{
error
}
"
)

    
file
 
=
 
None


  
return
 
file
.
get
(
"id"
)




if
 
__name__
 
==
 
"__main__"
:

  
upload_basic
()
````



### Node.js


drive/snippets/drive_v3/file_snippets/upload_basic.js

View on GitHub

Code

````
import
 
fs
 
from
 
'node:fs'
;


import
 
{
GoogleAuth
}
 
from
 
'google-auth-library'
;


import
 
{
google
}
 
from
 
'googleapis'
;



/**


 * Uploads a file to Google Drive.


 * @return {Promise<string|null|undefined>} The ID of the uploaded file.


 */


async
 
function
 
uploadBasic
()
 
{


  
// Authenticate with Google and get an authorized client.


  
// TODO (developer): Use an appropriate auth mechanism for your app.


  
const
 
auth
 
=
 
new
 
GoogleAuth
({


    
scopes
:
 
'https://www.googleapis.com/auth/drive'
,


  
});



  
// Create a new Drive API client (v3).


  
const
 
service
 
=
 
google
.
drive
({
version
:
 
'v3'
,
 
auth
});



  
// The request body for the file to be uploaded.


  
const
 
requestBody
 
=
 
{


    
name
:
 
'photo.jpg'
,


    
fields
:
 
'id'
,


  
};



  
// The media content to be uploaded.


  
const
 
media
 
=
 
{


    
mimeType
:
 
'image/jpeg'
,


    
body
:
 
fs
.
createReadStream
(
'files/photo.jpg'
),


  
};



  
// Upload the file.


  
const
 
file
 
=
 
await
 
service
.
files
.
create
({


    
requestBody
,


    
media
,


  
});



  
// Print the ID of the uploaded file.


  
console
.
log
(
'File Id:'
,
 
file
.
data
.
id
);


  
return
 
file
.
data
.
id
;


}
````



### PHP


drive/snippets/drive_v3/src/DriveUploadBasic.php

View on GitHub

Code

````
<
?php


use Google\Client;


use Google\Service\Drive;


# TODO - PHP client currently chokes on fetching start page token


function uploadBasic()


{


    try {


        $client = new Client();


        $client->useApplicationDefaultCredentials();


        $client->addScope(Drive::DRIVE);


        $driveService = new Drive($client);


        $fileMetadata = new Drive\DriveFile(array(


        'name' => 'photo.jpg'));


        $content = file_get_contents('../files/photo.jpg');


        $file = $driveService->files->create($fileMetadata, array(


            'data' => $content,


            'mimeType' => 'image/jpeg',


            'uploadType' => 'multipart',


            'fields' => 'id'));


        printf("File ID: %s\n", $file->id);


        return $file->id;


    } catch(Exception $e) {


        echo "Error Message: ".$e;


    } 



}
````



### .NET


drive/snippets/drive_v3/DriveV3Snippets/UploadBasic.cs

View on GitHub

Code

````
using
 
Google.Apis.Auth.OAuth2
;


using
 
Google.Apis.Drive.v3
;


using
 
Google.Apis.Services
;



namespace
 
DriveV3Snippets


{


    
// Class to demonstrate use of Drive insert file API


    
public
 
class
 
UploadBasic


    
{


        
/// <summary>


        
/// Upload new file.


        
/// </summary>


        
/// <param name="filePath">Image path to upload.</param>


        
/// <returns>Inserted file metadata if successful, null otherwise.</returns>


        
public
 
static
 
string
 
DriveUploadBasic
(
string
 
filePath
)


        
{


            
try


            
{


                
/* Load pre-authorized user credentials from the environment.


                 TODO(developer) - See https://developers.google.com/identity for


                 guides on implementing OAuth2 for your application. */


                
GoogleCredential
 
credential
 
=
 
GoogleCredential
.
GetApplicationDefault
()


                    
.
CreateScoped
(
DriveService
.
Scope
.
Drive
);



                
// Create Drive API service.


                
var
 
service
 
=
 
new
 
DriveService
(
new
 
BaseClientService
.
Initializer


                
{


                    
HttpClientInitializer
 
=
 
credential
,


                    
ApplicationName
 
=
 
"Drive API Snippets"


                
});



                
// Upload file photo.jpg on drive.


                
var
 
fileMetadata
 
=
 
new
 
Google
.
Apis
.
Drive
.
v3
.
Data
.
File
()


                
{


                    
Name
 
=
 
"photo.jpg"


                
};


                
FilesResource
.
CreateMediaUpload
 
request
;


                
// Create a new file on drive.


                
using
 
(
var
 
stream
 
=
 
new
 
FileStream
(
filePath
,


                           
FileMode
.
Open
))


                
{


                    
// Create a new file, with metadata and stream.


                    
request
 
=
 
service
.
Files
.
Create
(


                        
fileMetadata
,
 
stream
,
 
"image/jpeg"
);


                    
request
.
Fields
 
=
 
"id"
;


                    
request
.
Upload
();


                
}



                
var
 
file
 
=
 
request
.
ResponseBody
;


                
// Prints the uploaded file id.


                
Console
.
WriteLine
(
"File ID: "
 
+
 
file
.
Id
);


                
return
 
file
.
Id
;


            
}


            
catch
 
(
Exception
 
e
)


            
{


                
// TODO(developer) - handle error appropriately


                
if
 
(
e
 
is
 
AggregateException
)


                
{


                    
Console
.
WriteLine
(
"Credential Not found"
);


                
}


                
else
 
if
 
(
e
 
is
 
FileNotFoundException
)


                
{


                    
Console
.
WriteLine
(
"File not found"
);


                
}


                
else


                
{


                    
throw
;


                
}


            
}


            
return
 
null
;


        
}


    
}


}
````



### HTTP


1. Create a POST request to the method's /upload URI with the query
parameter of uploadType=multipart : POST https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart

2. Create the body of the request. Format the body according to the
multipart/related content type RFC 2387 ,
which contains two parts: Metadata. The metadata must come first and must have a Content-Type header set to application/json; charset=UTF-8 . Add the file's metadata
in JSON format. Media. The media must come second and must have a Content-Type header
of any MIME type. Add the file's data to the media part. Identify each part with a boundary string, preceded by two hyphens. In
addition, add two hyphens after the final boundary string.

  Metadata. The metadata must come first and must have a

  `Content-Type`
  header set to

  `application/json;`
  `charset=UTF-8`
  . Add the file's metadata in JSON format.

  Media. The media must come second and must have a

  `Content-Type`
  header of any MIME type. Add the file's data to the media part.

3. Add these top-level HTTP headers: Content-Type . Set to multipart/related and include the boundary
string you're using to identify the different parts of the request. For
example: Content-Type: multipart/related; boundary=foo_bar_baz Content-Length . Set to the total number of bytes in the request body.

  `Content-Type`
  . Set to

  `multipart/related`
  and include the boundary string you're using to identify the different parts of the request. For example:

  `Content-Type: multipart/related; boundary=foo_bar_baz`
  `Content-Length`
  . Set to the total number of bytes in the request body.

4. Send the request.



To create or update the metadata portion only, without the associated data,
send a POST or PATCH request to the standard resource endpoint: https://www.googleapis.com/drive/v3/files If the request succeeds,
the server returns the HTTP 200 OK status code along with the file's
metadata.


Note:

To update an existing file, use

`PATCH`
.

When creating files, they should specify a file extension in the file's name field. For example, when creating a photo JPEG file, you might specify something
like "name": "photo.jpg" in the metadata. Subsequent calls to the get method return the read-only fileExtension property containing the extension originally specified in the name field.



## Perform a resumable upload


A resumable upload lets you resume an upload operation after a communication
failure interrupts the flow of data. Because you don't have to restart large
file uploads from the start, resumable uploads can also reduce your bandwidth
usage if there's a network failure.


Resumable uploads are useful when your file sizes might vary greatly or when
there's a fixed time limit for requests (such as mobile OS background tasks and
certain App Engine requests). You might also use resumable uploads for
situations where you want to show an upload progress bar.


A resumable upload consists of several high-level steps:


1. Send the initial request and retrieve the resumable session URI.

2. Upload the data and monitor upload state.

3. (optional) If the upload is disturbed, resume the upload.




### Send the initial request


To initiate a resumable upload, use the create method on the files resource with uploadType=resumable .


Note:

If you're using the older Drive API v2, use the

`files.insert`
method. You can find code samples in

GitHub

. Learn how to

migrate to Drive API v3

.


### HTTP


1. Create a POST request to the method's /upload URI with the query
parameter of uploadType=resumable : POST
https://www.googleapis.com/upload/drive/v3/files?uploadType=resumable If the initiation request succeeds, the response includes a 200 OK HTTP status code. In addition, it includes a Location header that
specifies the resumable session URI: HTTP/1.1 200 OK
Location: https://www.googleapis.com/upload/drive/v3/files?uploadType=resumable&upload_id=xa298sd_sdlkj2
Content-Length: 0 Save the resumable session URI so you can upload the file data and query
the upload status. A resumable session URI expires after one week. Note: To update an existing file, use PUT .

2. If you have metadata for the file, add the metadata to the request body
in JSON format. Otherwise, leave the request body empty.

3. Add these HTTP headers: X-Upload-Content-Type . Optional. Set to the MIME type of the file
data, which is transferred in subsequent requests. If the MIME type
of the data is not specified in the metadata or through this header,
the object is served as application/octet-stream. X-Upload-Content-Length . Optional. Set to the number of bytes of
file data, which is transferred in subsequent requests. Content-Type . Required if you have metadata for the file. Set to application/json; charset=UTF-8 . Content-Length . Required unless you use chunked transfer encoding.
Set to the number of bytes in the body of this initial request.

  `X-Upload-Content-Type`
  . Optional. Set to the MIME type of the file data, which is transferred in subsequent requests. If the MIME type of the data is not specified in the metadata or through this header, the object is served as

  `application/octet-stream.`
  `X-Upload-Content-Length`
  . Optional. Set to the number of bytes of file data, which is transferred in subsequent requests.

  `Content-Type`
  . Required if you have metadata for the file. Set to

  `application/json;`
  `charset=UTF-8`
  .

  `Content-Length`
  . Required unless you use chunked transfer encoding. Set to the number of bytes in the body of this initial request.

4. Send the request. If the session initiation request succeeds, the
response includes a 200 OK HTTP status code. In addition, the response
includes a Location header that specifies the resumable session URI.
Use the resumable session URI to upload the file data and query the
upload status. A resumable session URI expires after one week.

5. Copy and save the resumable session URL.

6. Continue to Upload the content .




### Upload the content


There are two ways to upload a file with a resumable session:


- Upload content in a single request : Use this approach when the file can
be uploaded in one request, if there's no fixed time limit for any single
request, or you don't need to display an upload progress indicator. This
approach is best because it requires fewer requests and results in better
performance.

- Upload the content in multiple chunks : Use this approach if you must
reduce the amount of data transferred in any single request. You might need
to reduce data transferred when there's a fixed time limit for individual
requests, as can be the case for certain classes of App Engine requests.
This approach is also useful if you must provide a customized indicator to
show the upload progress.




### HTTP - single request


1. Create a PUT request to the resumable session URI.

2. Add the file's data to the request body.

3. Add a Content-Length HTTP header, set to the number of bytes in the file.

4. Send the request. If the upload request is interrupted, or if you receive a 5xx response, follow the procedure in Resume an interrupted upload .




### HTTP - multiple requests


1. Create a PUT request to the resumable session URI.

2. Add the chunk's data to the request body. Create chunks in multiples of
256 KB (256 x 1024 bytes) in size, except for the final chunk that completes
the upload. Keep the chunk size as large as possible so that the upload is
efficient.

3. Add these HTTP headers: Content-Length . Set to the number of bytes in the current chunk. Content-Range . Set to show which bytes in the file you upload. For
example, Content-Range: bytes 0-524287/2000000 shows that you upload the
first 524,288 bytes (256 x 1024 x 2) in a 2,000,000 byte file.

  `Content-Length`
  . Set to the number of bytes in the current chunk.

  `Content-Range`
  . Set to show which bytes in the file you upload. For example,

  `Content-Range: bytes 0-524287/2000000`
  shows that you upload the first 524,288 bytes (256 x 1024 x 2) in a 2,000,000 byte file.

4. Send the request, and process the response. If the upload request is
interrupted, or if you receive a 5xx response, follow the procedure in Resume an interrupted upload .

5. Repeat steps 1 through 4 for each chunk that remains in the file. Use the Range header in the response to determine where to start the next chunk. 
Don't assume that the server received all bytes sent in the previous request.



When the entire file upload is complete, you receive a 200 OK or 201 Created response, along with any metadata associated with the resource.



### Resume an interrupted upload


If an upload request is terminated before a response, or if you receive a 503
Service Unavailable response, then you must resume the interrupted upload.



### HTTP


1. To request the upload status, create an empty PUT request to the
resumable session URI.

2. Add a Content-Range header to indicate that the current position in the
file is unknown. For example, set the Content-Range to */2000000 if your
total file length is 2,000,000 bytes. If you don't know the full size of the
file, set the Content-Range to */* .

3. Send the request.

4. Process the response: A 200 OK or 201 Created response indicates that the upload was
completed, and no further action is necessary. A 308 Resume Incomplete response indicates that you must continue
to upload the file. A 404 Not Found response indicates the upload session has expired and
the upload must be restarted from the beginning.

  A

  `200 OK`
  or

  `201 Created`
  response indicates that the upload was completed, and no further action is necessary.

  A

  `308 Resume Incomplete`
  response indicates that you must continue to upload the file.

  A

  `404 Not Found`
  response indicates the upload session has expired and the upload must be restarted from the beginning.

5. If you received a 308 Resume Incomplete response, process the Range header of the response to determine which bytes the server has received. If the
response doesn't have a Range header, no bytes have been received.
For example, a Range header of bytes=0-42 indicates that the first
43 bytes of the file were received and that the next chunk to upload
would start with byte 44.

6. Now that you know where to resume the upload, continue to upload the file
beginning with the next byte. Include a Content-Range header to indicate which portion of the file you send. For
example, Content-Range: bytes 43-1999999 indicates that you
send bytes 44 through 2,000,000.




## Handle media upload errors


When you upload media, follow these best practices to handle errors:


- For 5xx errors, resume or retry uploads that fail due to connection
interruptions. For further information on handling 5xx errors, refer to 500, 502, 503, 504 errors .

- For 403 rate limit errors, retry the upload. For further information about
handling 403 rate limit errors, refer to 403 error: rateLimitExceeded .

- For any 4xx errors (including 403 ) during a resumable upload, restart
the upload. These errors indicate the upload session has expired and must be
restarted by requesting a new session URI . Upload sessions
also expire after one week of inactivity.




## Import to Google Docs types


When you create a file in Drive, you might want to convert the
file into a Google Workspace file type, such as Google Docs or
Sheets. For example, maybe you want to transform a document from
your favorite word processor into a Docs to take advantage of its
features.


To convert a file to a specific Google Workspace file type, specify the
Google Workspace mimeType when creating the file.


Note:

If you're using the older Drive API v2, include the

`convert`
query parameter of the

`insert`
method and specify the Google Workspace

`mimeType`
when creating the file.

The following shows how to convert a CSV file to a Google Workspace sheet:


Note:

If you're using the older Drive API v2, you can find code samples in

GitHub

. Learn how to

migrate to Drive API v3

.


### Java


drive/snippets/drive_v3/src/main/java/UploadWithConversion.java

View on GitHub

Code

````
import
 
com.google.api.client.googleapis.json.GoogleJsonResponseException
;


import
 
com.google.api.client.http.FileContent
;


import
 
com.google.api.client.http.HttpRequestInitializer
;


import
 
com.google.api.client.http.javanet.NetHttpTransport
;


import
 
com.google.api.client.json.gson.GsonFactory
;


import
 
com.google.api.services.drive.Drive
;


import
 
com.google.api.services.drive.DriveScopes
;


import
 
com.google.api.services.drive.model.File
;


import
 
com.google.auth.http.HttpCredentialsAdapter
;


import
 
com.google.auth.oauth2.GoogleCredentials
;


import
 
java.io.IOException
;


import
 
java.util.Arrays
;



/* Class to demonstrate Drive's upload with conversion use-case. */


public
 
class
 
UploadWithConversion
 
{



  
/**


   * Upload file with conversion.


   *


   * @return Inserted file id if successful, {@code null} otherwise.


   * @throws IOException if service account credentials file not found.


   */


  
public
 
static
 
String
 
uploadWithConversion
()
 
throws
 
IOException
 
{


    
// Load pre-authorized user credentials from the environment.


    
// TODO(developer) - See https://developers.google.com/identity for


    
// guides on implementing OAuth2 for your application.


    
GoogleCredentials
 
credentials
 
=
 
GoogleCredentials
.
getApplicationDefault
()


        
.
createScoped
(
Arrays
.
asList
(
DriveScopes
.
DRIVE_FILE
));


    
HttpRequestInitializer
 
requestInitializer
 
=
 
new
 
HttpCredentialsAdapter
(


        
credentials
);



    
// Build a new authorized API client service.


    
Drive
 
service
 
=
 
new
 
Drive
.
Builder
(
new
 
NetHttpTransport
(),


        
GsonFactory
.
getDefaultInstance
(),


        
requestInitializer
)


        
.
setApplicationName
(
"Drive samples"
)


        
.
build
();



    
// File's metadata.


    
File
 
fileMetadata
 
=
 
new
 
File
();


    
fileMetadata
.
setName
(
"My Report"
);


    
fileMetadata
.
setMimeType
(
"application/vnd.google-apps.spreadsheet"
);



    
java
.
io
.
File
 
filePath
 
=
 
new
 
java
.
io
.
File
(
"files/report.csv"
);


    
FileContent
 
mediaContent
 
=
 
new
 
FileContent
(
"text/csv"
,
 
filePath
);


    
try
 
{


      
File
 
file
 
=
 
service
.
files
().
create
(
fileMetadata
,
 
mediaContent
)


          
.
setFields
(
"id"
)


          
.
execute
();


      
System
.
out
.
println
(
"File ID: "
 
+
 
file
.
getId
());


      
return
 
file
.
getId
();


    
}
 
catch
 
(
GoogleJsonResponseException
 
e
)
 
{


      
// TODO(developer) - handle error appropriately


      
System
.
err
.
println
(
"Unable to move file: "
 
+
 
e
.
getDetails
());


      
throw
 
e
;


    
}


  
}


}
````



### Python


drive/snippets/drive-v3/file_snippet/upload_with_conversion.py

View on GitHub

Code

````
import
 
google.auth


from
 
googleapiclient.discovery
 
import
 
build


from
 
googleapiclient.errors
 
import
 
HttpError


from
 
googleapiclient.http
 
import
 
MediaFileUpload




def
 
upload_with_conversion
():


  
"""Upload file with conversion


  Returns: ID of the file uploaded



  Load pre-authorized user credentials from the environment.


  TODO(developer) - See https://developers.google.com/identity


  for guides on implementing OAuth2 for the application.


  """

  
creds
,
 
_
 
=
 
google
.
auth
.
default
()


  
try
:

    
# create drive api client

    
service
 
=
 
build
(
"drive"
,
 
"v3"
,
 
credentials
=
creds
)


    
file_metadata
 
=
 
{

        
"name"
:
 
"My Report"
,

        
"mimeType"
:
 
"application/vnd.google-apps.spreadsheet"
,

    
}

    
media
 
=
 
MediaFileUpload
(
"report.csv"
,
 
mimetype
=
"text/csv"
,
 
resumable
=
True
)

    
# pylint: disable=maybe-no-member

    
file
 
=
 
(

        
service
.
files
()

        
.
create
(
body
=
file_metadata
,
 
media_body
=
media
,
 
fields
=
"id"
)

        
.
execute
()

    
)

    
print
(
f
'File with ID: "
{
file
.
get
(
"id"
)
}
" has been uploaded.'
)


  
except
 
HttpError
 
as
 
error
:

    
print
(
f
"An error occurred: 
{
error
}
"
)

    
file
 
=
 
None


  
return
 
file
.
get
(
"id"
)




if
 
__name__
 
==
 
"__main__"
:

  
upload_with_conversion
()
````



### Node.js


drive/snippets/drive_v3/file_snippets/upload_with_conversion.js

View on GitHub

Code

````
import
 
fs
 
from
 
'node:fs'
;


import
 
{
GoogleAuth
}
 
from
 
'google-auth-library'
;


import
 
{
google
}
 
from
 
'googleapis'
;



/**


 * Uploads a file to Google Drive and converts it to a Google Sheet.


 * @return {Promise<string|null|undefined>} The ID of the uploaded file.


 */


async
 
function
 
uploadWithConversion
()
 
{


  
// Authenticate with Google and get an authorized client.


  
// TODO (developer): Use an appropriate auth mechanism for your app.


  
const
 
auth
 
=
 
new
 
GoogleAuth
({


    
scopes
:
 
'https://www.googleapis.com/auth/drive'
,


  
});



  
// Create a new Drive API client (v3).


  
const
 
service
 
=
 
google
.
drive
({
version
:
 
'v3'
,
 
auth
});



  
// The metadata for the file to be uploaded and converted.


  
const
 
fileMetadata
 
=
 
{


    
name
:
 
'My Report'
,


    
// The MIME type to convert the file to.


    
mimeType
:
 
'application/vnd.google-apps.spreadsheet'
,


  
};



  
// The media content to be uploaded.


  
const
 
media
 
=
 
{


    
mimeType
:
 
'text/csv'
,


    
body
:
 
fs
.
createReadStream
(
'files/report.csv'
),


  
};



  
// Upload the file with conversion.


  
const
 
file
 
=
 
await
 
service
.
files
.
create
({


    
requestBody
:
 
fileMetadata
,


    
media
,


    
fields
:
 
'id'
,


  
});



  
// Print the ID of the uploaded file.


  
console
.
log
(
'File Id:'
,
 
file
.
data
.
id
);


  
return
 
file
.
data
.
id
;


}
````



### PHP


drive/snippets/drive_v3/src/DriveUploadWithConversion.php

View on GitHub

Code

````
<
?php


use Google\Client;


use Google\Service\Drive;


function uploadWithConversion()


{


    try {


        $client = new Client();


        $client->useApplicationDefaultCredentials();


        $client->addScope(Drive::DRIVE);


        $driveService = new Drive($client);


        $fileMetadata = new Drive\DriveFile(array(


            'name' => 'My Report',


            'mimeType' => 'application/vnd.google-apps.spreadsheet'));


        $content = file_get_contents('../files/report.csv');


        $file = $driveService->files->create($fileMetadata, array(


            'data' => $content,


            'mimeType' => 'text/csv',


            'uploadType' => 'multipart',


            'fields' => 'id'));


        printf("File ID: %s\n", $file->id);


        return $file->id;


    } catch(Exception $e) {


        echo "Error Message: ".$e;


    }



}
````



### .NET


drive/snippets/drive_v3/DriveV3Snippets/UploadWithConversion.cs

View on GitHub

Code

````
using
 
Google.Apis.Auth.OAuth2
;


using
 
Google.Apis.Drive.v3
;


using
 
Google.Apis.Services
;



namespace
 
DriveV3Snippets


{


    
// Class to demonstrate Drive's upload with conversion use-case.


    
public
 
class
 
UploadWithConversion


    
{


        
/// <summary>


        
/// Upload file with conversion.


        
/// </summary>


        
/// <param name="filePath">Id of the spreadsheet file.</param>


        
/// <returns>Inserted file id if successful, null otherwise.</returns>


        
public
 
static
 
string
 
DriveUploadWithConversion
(
string
 
filePath
)


        
{


            
try


            
{


                
/* Load pre-authorized user credentials from the environment.


                 TODO(developer) - See https://developers.google.com/identity for


                 guides on implementing OAuth2 for your application. */


                
GoogleCredential
 
credential
 
=
 
GoogleCredential
.
GetApplicationDefault
()


                    
.
CreateScoped
(
DriveService
.
Scope
.
Drive
);



                
// Create Drive API service.


                
var
 
service
 
=
 
new
 
DriveService
(
new
 
BaseClientService
.
Initializer


                
{


                    
HttpClientInitializer
 
=
 
credential
,


                    
ApplicationName
 
=
 
"Drive API Snippets"


                
});



                
// Upload file My Report on drive.


                
var
 
fileMetadata
 
=
 
new
 
Google
.
Apis
.
Drive
.
v3
.
Data
.
File
()


                
{


                    
Name
 
=
 
"My Report"
,


                    
MimeType
 
=
 
"application/vnd.google-apps.spreadsheet"


                
};


                
FilesResource
.
CreateMediaUpload
 
request
;


                
// Create a new drive.


                
using
 
(
var
 
stream
 
=
 
new
 
FileStream
(
filePath
,


                           
FileMode
.
Open
))


                
{


                    
// Create a new file, with metadata and stream.


                    
request
 
=
 
service
.
Files
.
Create
(


                        
fileMetadata
,
 
stream
,
 
"text/csv"
);


                    
request
.
Fields
 
=
 
"id"
;


                    
request
.
Upload
();


                
}



                
var
 
file
 
=
 
request
.
ResponseBody
;


                
// Prints the uploaded file id.


                
Console
.
WriteLine
(
"File ID: "
 
+
 
file
.
Id
);


                
return
 
file
.
Id
;


            
}


            
catch
 
(
Exception
 
e
)


            
{


                
// TODO(developer) - handle error appropriately


                
if
 
(
e
 
is
 
AggregateException
)


                
{


                    
Console
.
WriteLine
(
"Credential Not found"
);


                
}


                
else
 
if
 
(
e
 
is
 
FileNotFoundException
)


                
{


                    
Console
.
WriteLine
(
"File not found"
);


                
}


                
else


                
{


                    
throw
;


                
}


            
}


            
return
 
null
;


        
}


    
}


}
````


To see if a conversion is available, check the importFormats field of the about resource before creating the file. Supported
conversions are available dynamically in this array. Some common import formats
are:


| From | To |

| --- | --- |

| Microsoft Word, OpenDocument Text, HTML, RTF, plain text | Google Docs |

| Microsoft Excel, OpenDocument Spreadsheet, CSV, TSV, plain text | Google Sheets |

| Microsoft PowerPoint, OpenDocument Presentation | Google Slides |

| JPEG, PNG, GIF, BMP, PDF | Google Docs (embeds the image in a Doc) |

| Plain text (special MIME type), JSON | Google Apps Script |



When you upload and convert media during an update request to a
Docs, Sheets, or Slides file, the
full contents of the document are replaced.


When you convert an image to a Docs, Drive uses
Optical Character Recognition (OCR) to convert the image to text. You can
improve the quality of the OCR algorithm by specifying the applicable BCP
47 language code in the ocrLanguage parameter.
The extracted text appears in the document alongside the embedded image.



## Use a pre-generated ID to upload files


The Drive API lets you retrieve a list of pre-generated file IDs that
can be used to create, copy, and upload resources. For more information, see Generate IDs to use with your files .


You can safely retry uploads with pre-generated IDs if there's an indeterminate
server error or timeout. If the file action is successful, subsequent retries
return a 409 Conflict HTTP status code response and duplicate files aren't
created.


Note that pre-generated IDs aren't supported for the creation of
Google Workspace files, except for the application/vnd.google-apps.drive-sdk and application/vnd.google-apps.folder MIME
types . Similarly, uploads referencing a conversion
to a Google Workspace file format aren't supported.



## Define indexable text for unknown file types


Users can use the Drive UI to find document content. You can also
use the list method on the files resource and the fullText field to search for
content from your app. For more information, see Search for files and
folders .


Drive automatically indexes documents for search when it
recognizes the file type, including text documents, PDFs, images with text, and
other common types. If your app saves other types of files (such as drawings,
video, and shortcuts), you can improve the discoverability by supplying
indexable text in the contentHints.indexableText field of the file.


For more information about indexable text, see Manage file metadata .

## Download and export files

_Source: https://developers.google.com/workspace/drive/api/guides/manage-downloads_

The Google Drive API supports several types of download and export actions, as
listed in the following table:


| Download actions | Blob file content using the files.get method with the alt=media URL parameter. Blob file content at an earlier version using the revisions.get method with the alt=media URL parameter. Blob file content in a browser using the webContentLink field. Blob file content using the files.download method during long-running operations. This is the only way to download Google Vids files. | Blob file content using the files.get method with the alt=media URL parameter. | Blob file content at an earlier version using the revisions.get method with the alt=media URL parameter. | Blob file content in a browser using the webContentLink field. | Blob file content using the files.download method during long-running operations. This is the only way to download Google Vids files. |

| --- | --- | --- | --- | --- | --- |

| Blob file content using the files.get method with the alt=media URL parameter. |

| Blob file content at an earlier version using the revisions.get method with the alt=media URL parameter. |

| Blob file content in a browser using the webContentLink field. |

| Blob file content using the files.download method during long-running operations. This is the only way to download Google Vids files. |

| Export actions | Google Workspace document content in a format that your app can handle, using the files.export method. Google Workspace document content in a browser using the exportLinks field. Google Workspace document content at an earlier version in a browser using the exportLinks field. Google Workspace document content using the files.download method during long-running operations. | Google Workspace document content in a format that your app can handle, using the files.export method. | Google Workspace document content in a browser using the exportLinks field. | Google Workspace document content at an earlier version in a browser using the exportLinks field. | Google Workspace document content using the files.download method during long-running operations. |

| Google Workspace document content in a format that your app can handle, using the files.export method. |

| Google Workspace document content in a browser using the exportLinks field. |

| Google Workspace document content at an earlier version in a browser using the exportLinks field. |

| Google Workspace document content using the files.download method during long-running operations. |



Before you download or export file content, verify that users can download the
file using the capabilities.canDownload field on the files resource.


For descriptions of the file types mentioned here, including blob and
Google Workspace files, see File types .


The rest of this guide provides detailed instructions for performing these types
of download and export actions.



## Download blob file content


To download a blob file stored on Drive, use the files.get method with the ID of the file to download and the alt=media URL parameter. The alt=media URL parameter tells the server that a
download of content is being requested as an alternative response format.


The alt=media URL parameter is a system
parameter available
across all Google REST APIs. If you use a client library for the
Drive API, you don't need to explicitly set this parameter.


The following code sample shows how to use the files.get method to download a
file with the Drive API client libraries.


Note:

If you're using the older Drive API v2, you can find code samples in

GitHub

. Learn how to

migrate to Drive API v3

.


### Java


drive/snippets/drive_v3/src/main/java/DownloadFile.java

View on GitHub

Code

````
import
 
com.google.api.client.googleapis.json.GoogleJsonResponseException
;


import
 
com.google.api.client.http.HttpRequestInitializer
;


import
 
com.google.api.client.http.javanet.NetHttpTransport
;


import
 
com.google.api.client.json.gson.GsonFactory
;


import
 
com.google.api.services.drive.Drive
;


import
 
com.google.api.services.drive.DriveScopes
;


import
 
com.google.auth.http.HttpCredentialsAdapter
;


import
 
com.google.auth.oauth2.GoogleCredentials
;


import
 
java.io.ByteArrayOutputStream
;


import
 
java.io.IOException
;


import
 
java.io.OutputStream
;


import
 
java.util.Arrays
;



/* Class to demonstrate use-case of drive's download file. */


public
 
class
 
DownloadFile
 
{



  
/**


   * Download a Document file in PDF format.


   *


   * @param realFileId file ID of any workspace document format file.


   * @return byte array stream if successful, {@code null} otherwise.


   * @throws IOException if service account credentials file not found.


   */


  
public
 
static
 
ByteArrayOutputStream
 
downloadFile
(
String
 
realFileId
)
 
throws
 
IOException
 
{


        
/* Load pre-authorized user credentials from the environment.


           TODO(developer) - See https://developers.google.com/identity for


          guides on implementing OAuth2 for your application.*/


    
GoogleCredentials
 
credentials
 
=
 
GoogleCredentials
.
getApplicationDefault
()


        
.
createScoped
(
Arrays
.
asList
(
DriveScopes
.
DRIVE_FILE
));


    
HttpRequestInitializer
 
requestInitializer
 
=
 
new
 
HttpCredentialsAdapter
(


        
credentials
);



    
// Build a new authorized API client service.


    
Drive
 
service
 
=
 
new
 
Drive
.
Builder
(
new
 
NetHttpTransport
(),


        
GsonFactory
.
getDefaultInstance
(),


        
requestInitializer
)


        
.
setApplicationName
(
"Drive samples"
)


        
.
build
();



    
try
 
{


      
OutputStream
 
outputStream
 
=
 
new
 
ByteArrayOutputStream
();



      
service
.
files
().
get
(
realFileId
)


          
.
executeMediaAndDownloadTo
(
outputStream
);



      
return
 
(
ByteArrayOutputStream
)
 
outputStream
;


    
}
 
catch
 
(
GoogleJsonResponseException
 
e
)
 
{


      
// TODO(developer) - handle error appropriately


      
System
.
err
.
println
(
"Unable to move file: "
 
+
 
e
.
getDetails
());


      
throw
 
e
;


    
}


  
}


}
````



### Python


drive/snippets/drive-v3/file_snippet/download_file.py

View on GitHub

Code

````
import
 
io



import
 
google.auth


from
 
googleapiclient.discovery
 
import
 
build


from
 
googleapiclient.errors
 
import
 
HttpError


from
 
googleapiclient.http
 
import
 
MediaIoBaseDownload




def
 
download_file
(
real_file_id
):


  
"""Downloads a file


  Args:


      real_file_id: ID of the file to download


  Returns : IO object with location.



  Load pre-authorized user credentials from the environment.


  TODO(developer) - See https://developers.google.com/identity


  for guides on implementing OAuth2 for the application.


  """

  
creds
,
 
_
 
=
 
google
.
auth
.
default
()


  
try
:

    
# create drive api client

    
service
 
=
 
build
(
"drive"
,
 
"v3"
,
 
credentials
=
creds
)


    
file_id
 
=
 
real_file_id


    
# pylint: disable=maybe-no-member

    
request
 
=
 
service
.
files
()
.
get_media
(
fileId
=
file_id
)

    
file
 
=
 
io
.
BytesIO
()

    
downloader
 
=
 
MediaIoBaseDownload
(
file
,
 
request
)

    
done
 
=
 
False

    
while
 
done
 
is
 
False
:

      
status
,
 
done
 
=
 
downloader
.
next_chunk
()

      
print
(
f
"Download 
{
int
(
status
.
progress
()
 
*
 
100
)
}
."
)


  
except
 
HttpError
 
as
 
error
:

    
print
(
f
"An error occurred: 
{
error
}
"
)

    
file
 
=
 
None


  
return
 
file
.
getvalue
()




if
 
__name__
 
==
 
"__main__"
:

  
download_file
(
real_file_id
=
"1KuPmvGq8yoYgbfW74OENMCB5H0n_2Jm9"
)
````



### Node.js


drive/snippets/drive_v3/file_snippets/download_file.js

View on GitHub

Code

````
import
 
{
GoogleAuth
}
 
from
 
'google-auth-library'
;


import
 
{
google
}
 
from
 
'googleapis'
;



/**


 * Downloads a file from Google Drive.


 * @param {string} fileId The ID of the file to download.


 * @return {Promise<number>} The status of the download.


 */


async
 
function
 
downloadFile
(
fileId
)
 
{


  
// Authenticate with Google and get an authorized client.


  
// TODO (developer): Use an appropriate auth mechanism for your app.


  
const
 
auth
 
=
 
new
 
GoogleAuth
({


    
scopes
:
 
'https://www.googleapis.com/auth/drive'
,


  
});



  
// Create a new Drive API client (v3).


  
const
 
service
 
=
 
google
.
drive
({
version
:
 
'v3'
,
 
auth
});



  
// Download the file.


  
const
 
file
 
=
 
await
 
service
.
files
.
get
({


    
fileId
,


    
alt
:
 
'media'
,


  
});



  
// Print the status of the download.


  
console
.
log
(
file
.
status
);


  
return
 
file
.
status
;


}
````



### PHP


drive/snippets/drive_v3/src/DriveDownloadFile.php

View on GitHub

Code

````
<
?php


use Google\Client;


use Google\Service\Drive;


function downloadFile()


 {


    try {



      $client = new Client();


      $client->useApplicationDefaultCredentials();


      $client->addScope(Drive::DRIVE);


      $driveService = new Drive($client);


      $realFileId = readline("Enter File Id: ");


      $fileId = '0BwwA4oUTeiV1UVNwOHItT0xfa2M';


      $fileId = $realFileId;


      $response = $driveService->files->get($fileId, array(


          'alt' => 'media'));


      $content = $response->getBody()->getContents();


      return $content;



    } catch(Exception $e) {


      echo "Error Message: ".$e;


    }



}
````



### .NET


drive/snippets/drive_v3/DriveV3Snippets/DownloadFile.cs

View on GitHub

Code

````
using
 
Google.Apis.Auth.OAuth2
;


using
 
Google.Apis.Download
;


using
 
Google.Apis.Drive.v3
;


using
 
Google.Apis.Services
;



namespace
 
DriveV3Snippets


{


    
// Class to demonstrate use-case of drive's download file.


    
public
 
class
 
DownloadFile


    
{


        
/// <summary>


        
/// Download a Document file in PDF format.


        
/// </summary>


        
/// <param name="fileId">file ID of any workspace document format file.</param>


        
/// <returns>byte array stream if successful, null otherwise.</returns>


        
public
 
static
 
MemoryStream
 
DriveDownloadFile
(
string
 
fileId
)


        
{


            
try


            
{


                
/* Load pre-authorized user credentials from the environment.


                 TODO(developer) - See https://developers.google.com/identity for 


                 guides on implementing OAuth2 for your application. */


                
GoogleCredential
 
credential
 
=
 
GoogleCredential


                    
.
GetApplicationDefault
()


                    
.
CreateScoped
(
DriveService
.
Scope
.
Drive
);



                
// Create Drive API service.


                
var
 
service
 
=
 
new
 
DriveService
(
new
 
BaseClientService
.
Initializer


                
{


                    
HttpClientInitializer
 
=
 
credential
,


                    
ApplicationName
 
=
 
"Drive API Snippets"


                
});



                
var
 
request
 
=
 
service
.
Files
.
Get
(
fileId
);


                
var
 
stream
 
=
 
new
 
MemoryStream
();



                
// Add a handler which will be notified on progress changes.


                
// It will notify on each chunk download and when the


                
// download is completed or failed.


                
request
.
MediaDownloader
.
ProgressChanged
 
+=


                    
progress
 
=
>

                    
{


                        
switch
 
(
progress
.
Status
)


                        
{


                            
case
 
DownloadStatus
.
Downloading
:


                            
{


                                
Console
.
WriteLine
(
progress
.
BytesDownloaded
);


                                
break
;


                            
}


                            
case
 
DownloadStatus
.
Completed
:


                            
{


                                
Console
.
WriteLine
(
"Download complete."
);


                                
break
;


                            
}


                            
case
 
DownloadStatus
.
Failed
:


                            
{


                                
Console
.
WriteLine
(
"Download failed."
);


                                
break
;


                            
}


                        
}


                    
};


                
request
.
Download
(
stream
);



                
return
 
stream
;


            
}


            
catch
 
(
Exception
 
e
)


            
{


                
// TODO(developer) - handle error appropriately


                
if
 
(
e
 
is
 
AggregateException
)


                
{


                    
Console
.
WriteLine
(
"Credential Not found"
);


                
}


                
else


                
{


                    
throw
;


                
}


            
}


            
return
 
null
;


        
}


    
}


}
````


This code sample uses a library method that adds the alt=media URL parameter
to the underlying HTTP request.


File downloads started from your app must be authorized with a scope that allows
read access to the file content. For example, an app using the drive.readonly.metadata scope isn't authorized to download the file contents.
This code sample uses the restricted “drive” file scope that allows users to
view and manage all of your Drive files. To learn more about
Drive scopes, refer to Choose Google Drive API
scopes .


Users with owner permissions (for my Drive files) or organizer permissions (for shared drive files) can restrict downloading
through the DownloadRestrictionsMetadata object. For more information, see Prevent users from downloading, printing, or
copying your file .


Files identified as abusive (such as harmful software) are only downloadable by the file owner.
Additionally, the get query parameter acknowledgeAbuse=true must be included
to indicate that the user has acknowledged the risk of downloading potentially
unwanted software or other abusive files. Your application should interactively
warn the user before using this query parameter.



### Partial download


Partial download involves downloading only a specified portion of a file. You
can specify the portion of the file you want to download by using a byte
range with the Range header. For example:


````
Range
:
 
bytes
=
500
-
999
````


Note:

Partial downloads are not supported while exporting Google Workspace documents.


## Download blob file content at an earlier version


You can only download blob file content revisions that are marked as "Keep Forever".
If you want to download a revision, set it to "Keep Forever" first.
For more information, see Specify revisions to save from auto delete .


To download the content of blob files at an earlier version, use the revisions.get method with the ID of the
file to download, the ID of the revision, and the alt=media URL parameter. The alt=media URL parameter tells the server that a download of content is being
requested as an alternative response format. Similar to files.get , the revisions.get method also accepts the optional query parameter acknowledgeAbuse and the Range header. For more information, see Manage
long-running operations .


The request protocol is shown here.


````
GET https://www.googleapis.com/drive/v3/files/{
FILE_ID
}/revisions/{
REVISION_ID
}?alt=media
````



## Download blob file content in a browser


To download the content of blob files stored on Drive within a
browser, instead of through the API, use the webContentLink field of the files resource. If the user has download access to the file,
a link for downloading the file and its contents is returned. You can either
redirect a user to this URL, or offer it as a clickable link.



## Download blob file content during long-running operations


To download the content of blob files during long-running operations, use the files.download method with the ID of the
file to download. You can optionally set the ID of the revision. This is the
only way to download Google Vids files. For more information, see Manage
long-running operations .



## Export Google Workspace document content


To export Google Workspace document byte content, use the files.export method with the ID of the file to export and
the correct MIME type . Exported content is
limited to 10 MB.


The following code sample shows how to use the files.export method to export a
Google Workspace document in PDF format using the Drive API client
libraries:


Note:

If you're using the older Drive API v2, you can find code samples in

GitHub

. Learn how to

migrate to Drive API v3

.


### Java


drive/snippets/drive_v3/src/main/java/ExportPdf.java

View on GitHub

Code

````
import
 
com.google.api.client.googleapis.json.GoogleJsonResponseException
;


import
 
com.google.api.client.http.HttpRequestInitializer
;


import
 
com.google.api.client.http.javanet.NetHttpTransport
;


import
 
com.google.api.client.json.gson.GsonFactory
;


import
 
com.google.api.services.drive.Drive
;


import
 
com.google.api.services.drive.DriveScopes
;


import
 
com.google.auth.http.HttpCredentialsAdapter
;


import
 
com.google.auth.oauth2.GoogleCredentials
;


import
 
java.io.ByteArrayOutputStream
;


import
 
java.io.IOException
;


import
 
java.io.OutputStream
;


import
 
java.util.Arrays
;



/* Class to demonstrate use-case of drive's export pdf. */


public
 
class
 
ExportPdf
 
{



  
/**


   * Download a Document file in PDF format.


   *


   * @param realFileId file ID of any workspace document format file.


   * @return byte array stream if successful, {@code null} otherwise.


   * @throws IOException if service account credentials file not found.


   */


  
public
 
static
 
ByteArrayOutputStream
 
exportPdf
(
String
 
realFileId
)
 
throws
 
IOException
 
{


    
// Load pre-authorized user credentials from the environment.


    
// TODO(developer) - See https://developers.google.com/identity for


    
// guides on implementing OAuth2 for your application.


    
GoogleCredentials
 
credentials
 
=
 
GoogleCredentials
.
getApplicationDefault
()


        
.
createScoped
(
Arrays
.
asList
(
DriveScopes
.
DRIVE_FILE
));


    
HttpRequestInitializer
 
requestInitializer
 
=
 
new
 
HttpCredentialsAdapter
(


        
credentials
);



    
// Build a new authorized API client service.


    
Drive
 
service
 
=
 
new
 
Drive
.
Builder
(
new
 
NetHttpTransport
(),


        
GsonFactory
.
getDefaultInstance
(),


        
requestInitializer
)


        
.
setApplicationName
(
"Drive samples"
)


        
.
build
();



    
OutputStream
 
outputStream
 
=
 
new
 
ByteArrayOutputStream
();


    
try
 
{


      
service
.
files
().
export
(
realFileId
,
 
"application/pdf"
)


          
.
executeMediaAndDownloadTo
(
outputStream
);



      
return
 
(
ByteArrayOutputStream
)
 
outputStream
;


    
}
 
catch
 
(
GoogleJsonResponseException
 
e
)
 
{


      
// TODO(developer) - handle error appropriately


      
System
.
err
.
println
(
"Unable to export file: "
 
+
 
e
.
getDetails
());


      
throw
 
e
;


    
}


  
}


}
````



### Python


drive/snippets/drive-v3/file_snippet/export_pdf.py

View on GitHub

Code

````
import
 
io



import
 
google.auth


from
 
googleapiclient.discovery
 
import
 
build


from
 
googleapiclient.errors
 
import
 
HttpError


from
 
googleapiclient.http
 
import
 
MediaIoBaseDownload




def
 
export_pdf
(
real_file_id
):


  
"""Download a Document file in PDF format.


  Args:


      real_file_id : file ID of any workspace document format file


  Returns : IO object with location



  Load pre-authorized user credentials from the environment.


  TODO(developer) - See https://developers.google.com/identity


  for guides on implementing OAuth2 for the application.


  """

  
creds
,
 
_
 
=
 
google
.
auth
.
default
()


  
try
:

    
# create drive api client

    
service
 
=
 
build
(
"drive"
,
 
"v3"
,
 
credentials
=
creds
)


    
file_id
 
=
 
real_file_id


    
# pylint: disable=maybe-no-member

    
request
 
=
 
service
.
files
()
.
export_media
(

        
fileId
=
file_id
,
 
mimeType
=
"application/pdf"

    
)

    
file
 
=
 
io
.
BytesIO
()

    
downloader
 
=
 
MediaIoBaseDownload
(
file
,
 
request
)

    
done
 
=
 
False

    
while
 
done
 
is
 
False
:

      
status
,
 
done
 
=
 
downloader
.
next_chunk
()

      
print
(
f
"Download 
{
int
(
status
.
progress
()
 
*
 
100
)
}
."
)


  
except
 
HttpError
 
as
 
error
:

    
print
(
f
"An error occurred: 
{
error
}
"
)

    
file
 
=
 
None


  
return
 
file
.
getvalue
()




if
 
__name__
 
==
 
"__main__"
:

  
export_pdf
(
real_file_id
=
"1zbp8wAyuImX91Jt9mI-CAX_1TqkBLDEDcr2WeXBbKUY"
)
````



### Node.js


drive/snippets/drive_v3/file_snippets/export_pdf.js

View on GitHub

Code

````
import
 
{
GoogleAuth
}
 
from
 
'google-auth-library'
;


import
 
{
google
}
 
from
 
'googleapis'
;



/**


 * Exports a Google Doc as a PDF.


 * @param {string} fileId The ID of the file to export.


 * @return {Promise<number>} The status of the export request.


 */


async
 
function
 
exportPdf
(
fileId
)
 
{


  
// Authenticate with Google and get an authorized client.


  
// TODO (developer): Use an appropriate auth mechanism for your app.


  
const
 
auth
 
=
 
new
 
GoogleAuth
({


    
scopes
:
 
'https://www.googleapis.com/auth/drive'
,


  
});



  
// Create a new Drive API client (v3).


  
const
 
service
 
=
 
google
.
drive
({
version
:
 
'v3'
,
 
auth
});



  
// Export the file as a PDF.


  
const
 
result
 
=
 
await
 
service
.
files
.
export
({


    
fileId
,


    
mimeType
:
 
'application/pdf'
,


  
});



  
// Print the status of the export.


  
console
.
log
(
result
.
status
);


  
return
 
result
.
status
;


}
````



### PHP


drive/snippets/drive_v3/src/DriveExportPdf.php

View on GitHub

Code

````
<
?php


use Google\Client;


use Google\Service\Drive;


function exportPdf()


{


    try {


        $client = new Client();


        $client->useApplicationDefaultCredentials();


        $client->addScope(Drive::DRIVE);


        $driveService = new Drive($client);


        $realFileId = readline("Enter File Id: ");


        $fileId = '1ZdR3L3qP4Bkq8noWLJHSr_iBau0DNT4Kli4SxNc2YEo';


        $fileId = $realFileId;


        $response = $driveService->files->export($fileId, 'application/pdf', array(


            'alt' => 'media'));


        $content = $response->getBody()->getContents();


        return $content;



    }  catch(Exception $e) {


         echo "Error Message: ".$e;


    }



}
````



### .NET


drive/snippets/drive_v3/DriveV3Snippets/ExportPdf.cs

View on GitHub

Code

````
using
 
Google.Apis.Auth.OAuth2
;


using
 
Google.Apis.Download
;


using
 
Google.Apis.Drive.v3
;


using
 
Google.Apis.Services
;



namespace
 
DriveV3Snippets


{


    
// Class to demonstrate use of Drive export pdf


    
public
 
class
 
ExportPdf


    
{


        
/// <summary>


        
/// Download a Document file in PDF format.


        
/// </summary>


        
/// <param name="fileId">Id of the file.</param>


        
/// <returns>Byte array stream if successful, null otherwise</returns>


        
public
 
static
 
MemoryStream
 
DriveExportPdf
(
string
 
fileId
)


        
{


            
try


            
{


                
/* Load pre-authorized user credentials from the environment.


                 TODO(developer) - See https://developers.google.com/identity for 


                 guides on implementing OAuth2 for your application. */


                
GoogleCredential
 
credential
 
=
 
GoogleCredential
.
GetApplicationDefault
()


                    
.
CreateScoped
(
DriveService
.
Scope
.
Drive
);



                
// Create Drive API service.


                
var
 
service
 
=
 
new
 
DriveService
(
new
 
BaseClientService
.
Initializer


                
{


                    
HttpClientInitializer
 
=
 
credential
,


                    
ApplicationName
 
=
 
"Drive API Snippets"


                
});



                
var
 
request
 
=
 
service
.
Files
.
Export
(
fileId
,
 
"application/pdf"
);


                
var
 
stream
 
=
 
new
 
MemoryStream
();


                
// Add a handler which will be notified on progress changes.


                
// It will notify on each chunk download and when the


                
// download is completed or failed.


                
request
.
MediaDownloader
.
ProgressChanged
 
+=


                    
progress
 
=
>

                    
{


                        
switch
 
(
progress
.
Status
)


                        
{


                            
case
 
DownloadStatus
.
Downloading
:


                            
{


                                
Console
.
WriteLine
(
progress
.
BytesDownloaded
);


                                
break
;


                            
}


                            
case
 
DownloadStatus
.
Completed
:


                            
{


                                
Console
.
WriteLine
(
"Download complete."
);


                                
break
;


                            
}


                            
case
 
DownloadStatus
.
Failed
:


                            
{


                                
Console
.
WriteLine
(
"Download failed."
);


                                
break
;


                            
}


                        
}


                    
};


                
request
.
Download
(
stream
);


                
return
 
stream
;


            
}


            
catch
 
(
Exception
 
e
)


            
{


                
// TODO(developer) - handle error appropriately


                
if
 
(
e
 
is
 
AggregateException
)


                
{


                    
Console
.
WriteLine
(
"Credential Not found"
);


                
}


                
else


                
{


                    
throw
;


                
}


            
}


            
return
 
null
;


        
}


    
}


}
````


This code sample uses the restricted drive scope that allows users to view and
manage all of your Drive files. To learn more about
Drive scopes, refer to Choose Google Drive API
scopes .


The code sample also declares the export MIME type as application/pdf . For a
complete list of all export MIME types supported for each Google Workspace
document, refer to Export MIME types for Google Workspace
documents .



## Export Google Workspace document content in a browser


To export Google Workspace document content within a browser, use the exportLinks field of the files resource. Depending on the document type, a link to
download the file and its contents is returned for every MIME type available.
You can either redirect a user to a URL, or offer it as a clickable link.



## Export Google Workspace document content at an earlier version in a browser


To export Google Workspace document content at an earlier version within a
browser, use the revisions.get method with
the ID of the file to download and the ID of the revision to generate an export
link from which you can perform the download. If the user has download access to
the file, a link for downloading the file and its contents is returned. You can
either redirect a user to this URL, or offer it as a clickable link.



## Export Google Workspace document content during long-running operations


To export Google Workspace document content during long-running operations,
use the files.download method with the ID
of the file to download and the ID of the revision. For more information, see Manage long-running operations .



## Limit how files are shared


- Protect file content

- Export MIME types for Google Workspace documents

## Manage file revisions

_Source: https://developers.google.com/workspace/drive/api/guides/manage-revisions_

This guide explains how to use the revisions resource to manage file revisions, such as getting a file revision and
publishing a Google Workspace revision. The Google Drive API also lets you
download revisions. For more details about revision terminology, see Changes
and revisions overview .


To access the revision history, a user must have the role of owner , organizer , fileOrganizer , or writer .


To specify the fields to return in the response, you can set the fields system parameter with any method of the revisions resource. If
you omit the parameter, the server returns a default set of fields. For example,
the revisions.list method only returns the id , mimeType , kind , and modifiedTime fields. To return different fields, see Return specific fields .



## Specify revisions to save from auto delete


Google Drive automatically deletes older revisions that are no longer of
interest to the user.


A blob file revision can be set to "Keep
Forever" meaning the revision cannot be automatically purged. Up to 200
revisions can be set to "Keep Forever" and they count towards your storage
limit. The head revision is never auto-purged.


Any blob file revision, other than the head revision, that's not designated as
"Keep Forever" is purgeable. Purgeable revisions are typically preserved for 30
days, but can be purged earlier if a file has 100 revisions that aren't
designated as "Keep Forever" and a new revision is uploaded.


You can set the boolean keepForever field of the revisions resource to true to mark revisions that you
don't want Drive to purge. Once a blob file revision is set to
"Keep Forever", it can only be downloaded or deleted. For more information, see Download a revision or Delete a
revision .


If you're using the older Drive API v2, use the pinned field of the revisions resource instead of keepForever .



## Get a file revision


To get a file revision's metadata or content, use the get method on the revisions resource with the fileId and revisionId path parameters. If you don't know the revision ID, you can list
all revisions on a file using the list method.


The method returns the revision's metadata as an instance of a revisions resource.


To acknowledge the risk of downloading known malware or other abusive files, set the acknowledgeAbuse query parameter to true . This field is only applicable when
the alt=media parameter is set and the user is either the file owner or an
organizer of the shared drive in which the file resides.



## List a file's revisions


To list a file's revisions, use the list method on the revisions resource with the fileId path parameter. The method returns a list of file revisions.


Pass the following query parameters to customize pagination of, or filter,
revisions:


- pageSize : The maximum number of revisions to return per page.

- pageToken : A page token, received from a previous list call. Provide this
token to retrieve the subsequent page.




## Update a file revision


To update a revision on a file, use the update method on the revisions resource with the fileId and revisionId path
parameters.


The method returns an instance of a revisions resource.



## Download a revision


You can only download blob file content revisions marked as "Keep Forever". If
you want to download a revision, make sure to set it to "Keep Forever" first.
For more information, see Specify revisions to save from auto
delete .


To download a blob file content revision or to export a Google Workspace
document content revision, see Download and export
files .



## Delete a file revision


To permanently delete a file revision, use the delete method on the revisions resource with the fileId and revisionId path
parameters.


You can only delete revisions for blob files with binary content in
Drive, such as images, videos, and PDFs. You can delete a blob
file revision when it's marked as "Keep Forever." Revisions for other files,
such as a Google Docs or Sheets, and the last remaining
revision of the binary file, can't be deleted.



## Publish a revision


To publish a Google Docs, Google Sheets, and Google Slides revision, set
the published property for that file in the revisions resource. This property can't be set
for Google Sites revisions using Drive API.


Published revisions don't reflect changes made to a file unless the publishAuto property is set. If the property is set to true , newer revisions
of a file are automatically published, overwriting the previous ones.
Slides and Drawings only support automatic
re-publishing and require the publishAuto property to be set to true . For
Sites files, publishAuto is always false .


If the file is created in a Google Workspace domain, the publishedOutsideDomain property indicates whether the revision is accessible
by anyone or if it's restricted to users of the domain. For Sites
files, this property indicates whether a type=anyone permission exists. For
more information, see the type field on the permissions resource.


Automatic publishing is also controlled by the "Automatically republish when
changes are made" checkbox in the UI of Docs and
Sheets. For more information, see Make Google Docs,
Sheets, Slides & Forms
public .



## Related topics


- Download and export files

- Roles and permissions

## Create and populate folders

_Source: https://developers.google.com/workspace/drive/api/guides/folder_

Folders are files that only contain metadata and can be used to organize files
in Google Drive. They have the following properties:


- A folder is a file with the MIME type application/vnd.google-apps.folder and it has no extension.

- The alias root can be used to refer to the root folder anywhere a file ID
is provided.



For more information about Drive folder limits, see File and
folder limits .


This guide explains how to perform some basic folder-related tasks.



## Create a folder


To create a folder, use the files.create() method with the mimeType of application/vnd.google-apps.folder and a name .
The following code sample shows how to create a folder using a client library:


Note:

If you're using the older Drive API v2, use the

`files.insert`
method. You can find code samples in

GitHub

. Learn how to

migrate to Drive API v3

.


### Java


drive/snippets/drive_v3/src/main/java/CreateFolder.java

View on GitHub

Code

````
import
 
com.google.api.client.googleapis.json.GoogleJsonResponseException
;


import
 
com.google.api.client.http.HttpRequestInitializer
;


import
 
com.google.api.client.http.javanet.NetHttpTransport
;


import
 
com.google.api.client.json.gson.GsonFactory
;


import
 
com.google.api.services.drive.Drive
;


import
 
com.google.api.services.drive.DriveScopes
;


import
 
com.google.api.services.drive.model.File
;


import
 
com.google.auth.http.HttpCredentialsAdapter
;


import
 
com.google.auth.oauth2.GoogleCredentials
;


import
 
java.io.IOException
;


import
 
java.util.Arrays
;



/* Class to demonstrate use of Drive's create folder API */


public
 
class
 
CreateFolder
 
{




  
/**


   * Create new folder.


   *


   * @return Inserted folder id if successful, {@code null} otherwise.


   * @throws IOException if service account credentials file not found.


   */


  
public
 
static
 
String
 
createFolder
()
 
throws
 
IOException
 
{


    
// Load pre-authorized user credentials from the environment.


    
// TODO(developer) - See https://developers.google.com/identity for


    
// guides on implementing OAuth2 for your application.


    
GoogleCredentials
 
credentials
 
=
 
GoogleCredentials
.
getApplicationDefault
()


        
.
createScoped
(
Arrays
.
asList
(
DriveScopes
.
DRIVE_FILE
));


    
HttpRequestInitializer
 
requestInitializer
 
=
 
new
 
HttpCredentialsAdapter
(


        
credentials
);



    
// Build a new authorized API client service.


    
Drive
 
service
 
=
 
new
 
Drive
.
Builder
(
new
 
NetHttpTransport
(),


        
GsonFactory
.
getDefaultInstance
(),


        
requestInitializer
)


        
.
setApplicationName
(
"Drive samples"
)


        
.
build
();


    
// File's metadata.


    
File
 
fileMetadata
 
=
 
new
 
File
();


    
fileMetadata
.
setName
(
"Test"
);


    
fileMetadata
.
setMimeType
(
"application/vnd.google-apps.folder"
);


    
try
 
{


      
File
 
file
 
=
 
service
.
files
().
create
(
fileMetadata
)


          
.
setFields
(
"id"
)


          
.
execute
();


      
System
.
out
.
println
(
"Folder ID: "
 
+
 
file
.
getId
());


      
return
 
file
.
getId
();


    
}
 
catch
 
(
GoogleJsonResponseException
 
e
)
 
{


      
// TODO(developer) - handle error appropriately


      
System
.
err
.
println
(
"Unable to create folder: "
 
+
 
e
.
getDetails
());


      
throw
 
e
;


    
}


  
}


}
````



### Python


drive/snippets/drive-v3/file_snippet/create_folder.py

View on GitHub

Code

````
import
 
google.auth


from
 
googleapiclient.discovery
 
import
 
build


from
 
googleapiclient.errors
 
import
 
HttpError




def
 
create_folder
():


  
"""Create a folder and prints the folder ID


  Returns : Folder Id



  Load pre-authorized user credentials from the environment.


  TODO(developer) - See https://developers.google.com/identity


  for guides on implementing OAuth2 for the application.


  """

  
creds
,
 
_
 
=
 
google
.
auth
.
default
()


  
try
:

    
# create drive api client

    
service
 
=
 
build
(
"drive"
,
 
"v3"
,
 
credentials
=
creds
)

    
file_metadata
 
=
 
{

        
"name"
:
 
"Invoices"
,

        
"mimeType"
:
 
"application/vnd.google-apps.folder"
,

    
}


    
# pylint: disable=maybe-no-member

    
file
 
=
 
service
.
files
()
.
create
(
body
=
file_metadata
,
 
fields
=
"id"
)
.
execute
()

    
print
(
f
'Folder ID: "
{
file
.
get
(
"id"
)
}
".'
)

    
return
 
file
.
get
(
"id"
)


  
except
 
HttpError
 
as
 
error
:

    
print
(
f
"An error occurred: 
{
error
}
"
)

    
return
 
None




if
 
__name__
 
==
 
"__main__"
:

  
create_folder
()
````



### Node.js


drive/snippets/drive_v3/file_snippets/create_folder.js

View on GitHub

Code

````
import
 
{
GoogleAuth
}
 
from
 
'google-auth-library'
;


import
 
{
google
}
 
from
 
'googleapis'
;



/**


 * Creates a new folder in Google Drive.


 * @return {Promise<string|null|undefined>} The ID of the created folder.


 */


async
 
function
 
createFolder
()
 
{


  
// Authenticate with Google and get an authorized client.


  
// TODO (developer): Use an appropriate auth mechanism for your app.


  
const
 
auth
 
=
 
new
 
GoogleAuth
({


    
scopes
:
 
'https://www.googleapis.com/auth/drive'
,


  
});



  
// Create a new Drive API client (v3).


  
const
 
service
 
=
 
google
.
drive
({
version
:
 
'v3'
,
 
auth
});



  
// The metadata for the new folder.


  
const
 
fileMetadata
 
=
 
{


    
name
:
 
'Invoices'
,


    
mimeType
:
 
'application/vnd.google-apps.folder'
,


  
};



  
// Create the new folder.


  
const
 
file
 
=
 
await
 
service
.
files
.
create
({


    
requestBody
:
 
fileMetadata
,


    
fields
:
 
'id'
,


  
});



  
// Print the ID of the new folder.


  
console
.
log
(
'Folder Id:'
,
 
file
.
data
.
id
);


  
return
 
file
.
data
.
id
;


}
````



### PHP


drive/snippets/drive_v3/src/DriveCreateFolder.php

View on GitHub

Code

````
<
?php


use Google\Client;


use Google\Service\Drive;


function createFolder()


{


    try {


        $client = new Client();


        $client->useApplicationDefaultCredentials();


        $client->addScope(Drive::DRIVE);


        $driveService = new Drive($client);


        $fileMetadata = new Drive\DriveFile(array(


            'name' => 'Invoices',


            'mimeType' => 'application/vnd.google-apps.folder'));


        $file = $driveService->files->create($fileMetadata, array(


            'fields' => 'id'));


        printf("Folder ID: %s\n", $file->id);


        return $file->id;



    }catch(Exception $e) {


       echo "Error Message: ".$e;


    }


}
````



### .NET


drive/snippets/drive_v3/DriveV3Snippets/CreateFolder.cs

View on GitHub

Code

````
using
 
Google.Apis.Auth.OAuth2
;


using
 
Google.Apis.Drive.v3
;


using
 
Google.Apis.Services
;



namespace
 
DriveV3Snippets


{


    
// Class to demonstrate use of Drive create folder API.


    
public
 
class
 
CreateFolder


    
{


        
/// <summary>


        
/// Creates a new folder.


        
/// </summary>


        
/// <returns>created folder id, null otherwise</returns>


        
public
 
static
 
string
 
DriveCreateFolder
()


        
{


            
try


            
{


                
/* Load pre-authorized user credentials from the environment.


                 TODO(developer) - See https://developers.google.com/identity for 


                 guides on implementing OAuth2 for your application. */


                
GoogleCredential
 
credential
 
=
 
GoogleCredential
.
GetApplicationDefault
()


                    
.
CreateScoped
(
DriveService
.
Scope
.
Drive
);



                
// Create Drive API service.


                
var
 
service
 
=
 
new
 
DriveService
(
new
 
BaseClientService
.
Initializer


                
{


                    
HttpClientInitializer
 
=
 
credential
,


                    
ApplicationName
 
=
 
"Drive API Snippets"


                
});



                
// File metadata


                
var
 
fileMetadata
 
=
 
new
 
Google
.
Apis
.
Drive
.
v3
.
Data
.
File
()


                
{


                    
Name
 
=
 
"Invoices"
,


                    
MimeType
 
=
 
"application/vnd.google-apps.folder"


                
};



                
// Create a new folder on drive.


                
var
 
request
 
=
 
service
.
Files
.
Create
(
fileMetadata
);


                
request
.
Fields
 
=
 
"id"
;


                
var
 
file
 
=
 
request
.
Execute
();


                
// Prints the created folder id.


                
Console
.
WriteLine
(
"Folder ID: "
 
+
 
file
.
Id
);


                
return
 
file
.
Id
;


            
}


            
catch
 
(
Exception
 
e
)


            
{


                
// TODO(developer) - handle error appropriately


                
if
 
(
e
 
is
 
AggregateException
)


                
{


                    
Console
.
WriteLine
(
"Credential Not found"
);


                
}


                
else


                
{


                    
throw
;


                
}


            
}


            
return
 
null
;


        
}


    
}


}
````



## Create a file in a specific folder


To create a file in a specific folder, use the files.create() method and specify the folder ID in the parents property of the file.


The parents property holds the ID of the parent folder containing the file.
The parents property can be used when creating files in a top-level folder or
any other folder.


A file can only have one parent folder. Specifying multiple parents isn't
supported. If the parents field isn't specified, the file is placed directly
in the user's My Drive folder.


The following code sample shows how to create a file in a specific folder using
a client library:


Note:

If you're using the older Drive API v2, use the

`files.insert`
method. You can find code samples in

GitHub

. Learn how to

migrate to Drive API v3

.


### Java


drive/snippets/drive_v3/src/main/java/UploadToFolder.java

View on GitHub

Code

````
import
 
com.google.api.client.googleapis.json.GoogleJsonResponseException
;


import
 
com.google.api.client.http.FileContent
;


import
 
com.google.api.client.http.HttpRequestInitializer
;


import
 
com.google.api.client.http.javanet.NetHttpTransport
;


import
 
com.google.api.client.json.gson.GsonFactory
;


import
 
com.google.api.services.drive.Drive
;


import
 
com.google.api.services.drive.DriveScopes
;


import
 
com.google.api.services.drive.model.File
;


import
 
com.google.auth.http.HttpCredentialsAdapter
;


import
 
com.google.auth.oauth2.GoogleCredentials
;


import
 
java.io.IOException
;


import
 
java.util.Arrays
;


import
 
java.util.Collections
;



/* Class to demonstrate Drive's upload to folder use-case. */


public
 
class
 
UploadToFolder
 
{



  
/**


   * Upload a file to the specified folder.


   *


   * @param realFolderId Id of the folder.


   * @return Inserted file metadata if successful, {@code null} otherwise.


   * @throws IOException if service account credentials file not found.


   */


  
public
 
static
 
File
 
uploadToFolder
(
String
 
realFolderId
)
 
throws
 
IOException
 
{


    
// Load pre-authorized user credentials from the environment.


    
// TODO(developer) - See https://developers.google.com/identity for


    
// guides on implementing OAuth2 for your application.


    
GoogleCredentials
 
credentials
 
=
 
GoogleCredentials
.
getApplicationDefault
()


        
.
createScoped
(
Arrays
.
asList
(
DriveScopes
.
DRIVE_FILE
));


    
HttpRequestInitializer
 
requestInitializer
 
=
 
new
 
HttpCredentialsAdapter
(


        
credentials
);



    
// Build a new authorized API client service.


    
Drive
 
service
 
=
 
new
 
Drive
.
Builder
(
new
 
NetHttpTransport
(),


        
GsonFactory
.
getDefaultInstance
(),


        
requestInitializer
)


        
.
setApplicationName
(
"Drive samples"
)


        
.
build
();



    
// File's metadata.


    
File
 
fileMetadata
 
=
 
new
 
File
();


    
fileMetadata
.
setName
(
"photo.jpg"
);


    
fileMetadata
.
setParents
(
Collections
.
singletonList
(
realFolderId
));


    
java
.
io
.
File
 
filePath
 
=
 
new
 
java
.
io
.
File
(
"files/photo.jpg"
);


    
FileContent
 
mediaContent
 
=
 
new
 
FileContent
(
"image/jpeg"
,
 
filePath
);


    
try
 
{


      
File
 
file
 
=
 
service
.
files
().
create
(
fileMetadata
,
 
mediaContent
)


          
.
setFields
(
"id, parents"
)


          
.
execute
();


      
System
.
out
.
println
(
"File ID: "
 
+
 
file
.
getId
());


      
return
 
file
;


    
}
 
catch
 
(
GoogleJsonResponseException
 
e
)
 
{


      
// TODO(developer) - handle error appropriately


      
System
.
err
.
println
(
"Unable to upload file: "
 
+
 
e
.
getDetails
());


      
throw
 
e
;


    
}


  
}


}
````



### Python


drive/snippets/drive-v3/file_snippet/upload_to_folder.py

View on GitHub

Code

````
import
 
google.auth


from
 
googleapiclient.discovery
 
import
 
build


from
 
googleapiclient.errors
 
import
 
HttpError


from
 
googleapiclient.http
 
import
 
MediaFileUpload




def
 
upload_to_folder
(
folder_id
):


  
"""Upload a file to the specified folder and prints file ID, folder ID


  Args: Id of the folder


  Returns: ID of the file uploaded



  Load pre-authorized user credentials from the environment.


  TODO(developer) - See https://developers.google.com/identity


  for guides on implementing OAuth2 for the application.


  """

  
creds
,
 
_
 
=
 
google
.
auth
.
default
()


  
try
:

    
# create drive api client

    
service
 
=
 
build
(
"drive"
,
 
"v3"
,
 
credentials
=
creds
)


    
file_metadata
 
=
 
{
"name"
:
 
"photo.jpg"
,
 
"parents"
:
 
[
folder_id
]}

    
media
 
=
 
MediaFileUpload
(

        
"download.jpeg"
,
 
mimetype
=
"image/jpeg"
,
 
resumable
=
True

    
)

    
# pylint: disable=maybe-no-member

    
file
 
=
 
(

        
service
.
files
()

        
.
create
(
body
=
file_metadata
,
 
media_body
=
media
,
 
fields
=
"id"
)

        
.
execute
()

    
)

    
print
(
f
'File ID: "
{
file
.
get
(
"id"
)
}
".'
)

    
return
 
file
.
get
(
"id"
)


  
except
 
HttpError
 
as
 
error
:

    
print
(
f
"An error occurred: 
{
error
}
"
)

    
return
 
None




if
 
__name__
 
==
 
"__main__"
:

  
upload_to_folder
(
folder_id
=
"1s0oKEZZXjImNngxHGnY0xed6Mw-tvspu"
)
````



### Node.js


drive/snippets/drive_v3/file_snippets/upload_to_folder.js

View on GitHub

Code

````
import
 
fs
 
from
 
'node:fs'
;


import
 
{
GoogleAuth
}
 
from
 
'google-auth-library'
;


import
 
{
google
}
 
from
 
'googleapis'
;



/**


 * Uploads a file to the specified folder.


 * @param {string} folderId The ID of the folder to upload the file to.


 * @return {Promise<string>} The ID of the uploaded file.


 */


async
 
function
 
uploadToFolder
(
folderId
)
 
{


  
// Authenticate with Google and get an authorized client.


  
// TODO (developer): Use an appropriate auth mechanism for your app.


  
const
 
auth
 
=
 
new
 
GoogleAuth
({


    
scopes
:
 
'https://www.googleapis.com/auth/drive'
,


  
});



  
// Create a new Drive API client (v3).


  
const
 
service
 
=
 
google
.
drive
({
version
:
 
'v3'
,
 
auth
});



  
// The request body for the file to be uploaded.


  
const
 
requestBody
 
=
 
{


    
name
:
 
'photo.jpg'
,


    
parents
:
 
[
folderId
],


  
};



  
// The media content to be uploaded.


  
const
 
media
 
=
 
{


    
mimeType
:
 
'image/jpeg'
,


    
body
:
 
fs
.
createReadStream
(
'files/photo.jpg'
),


  
};



  
// Upload the file to the specified folder.


  
const
 
file
 
=
 
await
 
service
.
files
.
create
({


    
requestBody
,


    
media
,


    
fields
:
 
'id'
,


  
});



  
// Print the ID of the uploaded file.


  
console
.
log
(
'File Id:'
,
 
file
.
data
.
id
);


  
if
 
(
!
file
.
data
.
id
)
 
{


    
throw
 
new
 
Error
(
'File ID not found.'
);


  
}


  
return
 
file
.
data
.
id
;


}
````



### PHP


drive/snippets/drive_v3/src/DriveUploadToFolder.php

View on GitHub

Code

````
<
?php


use Google\Client;


use Google\Service\Drive;


function uploadToFolder($folderId)


{


    try {


        $client = new Client();


        $client->useApplicationDefaultCredentials();


        $client->addScope(Drive::DRIVE);


        $driveService = new Drive($client);


        $fileMetadata = new Drive\DriveFile(array(


            'name' => 'photo.jpg',


            'parents' => array($folderId)


        ));


        $content = file_get_contents('../files/photo.jpg');


        $file = $driveService->files->create($fileMetadata, array(


            'data' => $content,


            'mimeType' => 'image/jpeg',


            'uploadType' => 'multipart',


            'fields' => 'id'));


        printf("File ID: %s\n", $file->id);


        return $file->id;


    } catch (Exception $e) {


        echo "Error Message: " . $e;


    }


}


require_once 'vendor/autoload.php';


uploadToFolder();
````



### .NET


drive/snippets/drive_v3/DriveV3Snippets/UploadToFolder.cs

View on GitHub

Code

````
using
 
Google.Apis.Auth.OAuth2
;


using
 
Google.Apis.Drive.v3
;


using
 
Google.Apis.Services
;



namespace
 
DriveV3Snippets


{


    
// Class to demonstrate use of Drive upload to folder.


    
public
 
class
 
UploadToFolder


    
{


        
/// <summary>


        
/// Upload a file to the specified folder.


        
/// </summary>


        
/// <param name="filePath">Image path to upload.</param>


        
/// <param name="folderId">Id of the folder.</param>


        
/// <returns>Inserted file metadata if successful, null otherwise</returns>


        
public
 
static
 
Google
.
Apis
.
Drive
.
v3
.
Data
.
File
 
DriveUploadToFolder


            
(
string
 
filePath
,
 
string
 
folderId
)


        
{


            
try


            
{


                
/* Load pre-authorized user credentials from the environment.


                 TODO(developer) - See https://developers.google.com/identity for


                 guides on implementing OAuth2 for your application. */


                
GoogleCredential
 
credential
 
=
 
GoogleCredential
.
GetApplicationDefault
()


                    
.
CreateScoped
(
DriveService
.
Scope
.
Drive
);



                
// Create Drive API service.


                
var
 
service
 
=
 
new
 
DriveService
(
new
 
BaseClientService
.
Initializer


                
{


                    
HttpClientInitializer
 
=
 
credential
,


                    
ApplicationName
 
=
 
"Drive API Snippets"


                
});



                
// Upload file photo.jpg in specified folder on drive.


                
var
 
fileMetadata
 
=
 
new
 
Google
.
Apis
.
Drive
.
v3
.
Data
.
File
()


                
{


                    
Name
 
=
 
"photo.jpg"
,


                    
Parents
 
=
 
new
 
List<string>


                    
{


                        
folderId


                    
}


                
};


                
FilesResource
.
CreateMediaUpload
 
request
;


                
// Create a new file on drive.


                
using
 
(
var
 
stream
 
=
 
new
 
FileStream
(
filePath
,


                           
FileMode
.
Open
))


                
{


                    
// Create a new file, with metadata and stream.


                    
request
 
=
 
service
.
Files
.
Create
(


                        
fileMetadata
,
 
stream
,
 
"image/jpeg"
);


                    
request
.
Fields
 
=
 
"id"
;


                    
request
.
Upload
();


                
}


                
var
 
file
 
=
 
request
.
ResponseBody
;


                
// Prints the uploaded file id.


                
Console
.
WriteLine
(
"File ID: "
 
+
 
file
.
Id
);


                
return
 
file
;


            
}


            
catch
 
(
Exception
 
e
)


            
{


                
// TODO(developer) - handle error appropriately


                
if
 
(
e
 
is
 
AggregateException
)


                
{


                    
Console
.
WriteLine
(
"Credential Not found"
);


                
}


                
else
 
if
 
(
e
 
is
 
FileNotFoundException
)


                
{


                    
Console
.
WriteLine
(
"File not found"
);


                
}


                
else
 
if
 
(
e
 
is
 
DirectoryNotFoundException
)


                
{


                    
Console
.
WriteLine
(
"Directory Not found"
);


                
}


                
else


                
{


                    
throw
;


                
}


            
}


            
return
 
null
;


        
}


    
}


}
````



## Move files between folders


To move files, you must update the ID of the parents property.


To add or remove parents for an existing file, use the files.update() method with either the addParents and removeParents query parameters.


A file can only have one parent folder. Specifying multiple parents isn't
supported.


Warning:

Even though a folder is a type of file, you can't move a folder from My Drive into a shared drive by updating the

`addParents`
parameter. Attempting to do so returns a

`teamDrivesFolderMoveInNotSupported`
HTTP status code response. For more information and potential workarounds, see

Resolve errors

The following code sample shows how to move a file between folders using a
client library:



### Java


drive/snippets/drive_v3/src/main/java/MoveFileToFolder.java

View on GitHub

Code

````
import
 
com.google.api.client.googleapis.json.GoogleJsonResponseException
;


import
 
com.google.api.client.http.HttpRequestInitializer
;


import
 
com.google.api.client.http.javanet.NetHttpTransport
;


import
 
com.google.api.client.json.gson.GsonFactory
;


import
 
com.google.api.services.drive.Drive
;


import
 
com.google.api.services.drive.DriveScopes
;


import
 
com.google.api.services.drive.model.File
;


import
 
com.google.auth.http.HttpCredentialsAdapter
;


import
 
com.google.auth.oauth2.GoogleCredentials
;


import
 
java.io.IOException
;


import
 
java.util.Arrays
;


import
 
java.util.List
;



/* Class to demonstrate use case for moving file to folder.*/


public
 
class
 
MoveFileToFolder
 
{




  
/**


   * @param fileId   Id of file to be moved.


   * @param folderId Id of folder where the fill will be moved.


   * @return list of parent ids for the file.


   */


  
public
 
static
 
List<String>
 
moveFileToFolder
(
String
 
fileId
,
 
String
 
folderId
)


      
throws
 
IOException
 
{


        
/* Load pre-authorized user credentials from the environment.


        TODO(developer) - See https://developers.google.com/identity for


        guides on implementing OAuth2 for your application.*/


    
GoogleCredentials
 
credentials
 
=
 
GoogleCredentials
.
getApplicationDefault
()


        
.
createScoped
(
Arrays
.
asList
(
DriveScopes
.
DRIVE_FILE
));


    
HttpRequestInitializer
 
requestInitializer
 
=
 
new
 
HttpCredentialsAdapter
(


        
credentials
);


    
// Build a new authorized API client service.


    
Drive
 
service
 
=
 
new
 
Drive
.
Builder
(
new
 
NetHttpTransport
(),


        
GsonFactory
.
getDefaultInstance
(),


        
requestInitializer
)


        
.
setApplicationName
(
"Drive samples"
)


        
.
build
();



    
// Retrieve the existing parents to remove


    
File
 
file
 
=
 
service
.
files
().
get
(
fileId
)


        
.
setFields
(
"parents"
)


        
.
execute
();


    
StringBuilder
 
previousParents
 
=
 
new
 
StringBuilder
();


    
for
 
(
String
 
parent
 
:
 
file
.
getParents
())
 
{


      
previousParents
.
append
(
parent
);


      
previousParents
.
append
(
','
);


    
}


    
try
 
{


      
// Move the file to the new folder


      
file
 
=
 
service
.
files
().
update
(
fileId
,
 
null
)


          
.
setAddParents
(
folderId
)


          
.
setRemoveParents
(
previousParents
.
toString
())


          
.
setFields
(
"id, parents"
)


          
.
execute
();



      
return
 
file
.
getParents
();


    
}
 
catch
 
(
GoogleJsonResponseException
 
e
)
 
{


      
// TODO(developer) - handle error appropriately


      
System
.
err
.
println
(
"Unable to move file: "
 
+
 
e
.
getDetails
());


      
throw
 
e
;


    
}


  
}


}
````



### Python


drive/snippets/drive-v3/file_snippet/move_file_to_folder.py

View on GitHub

Code

````
import
 
google.auth


from
 
googleapiclient.discovery
 
import
 
build


from
 
googleapiclient.errors
 
import
 
HttpError




def
 
move_file_to_folder
(
file_id
,
 
folder_id
):


  
"""Move specified file to the specified folder.


  Args:


      file_id: Id of the file to move.


      folder_id: Id of the folder


  Print: An object containing the new parent folder and other meta data


  Returns : Parent Ids for the file



  Load pre-authorized user credentials from the environment.


  TODO(developer) - See https://developers.google.com/identity


  for guides on implementing OAuth2 for the application.


  """

  
creds
,
 
_
 
=
 
google
.
auth
.
default
()


  
try
:

    
# call drive api client

    
service
 
=
 
build
(
"drive"
,
 
"v3"
,
 
credentials
=
creds
)


    
# pylint: disable=maybe-no-member

    
# Retrieve the existing parents to remove

    
file
 
=
 
service
.
files
()
.
get
(
fileId
=
file_id
,
 
fields
=
"parents"
)
.
execute
()

    
previous_parents
 
=
 
","
.
join
(
file
.
get
(
"parents"
))

    
# Move the file to the new folder

    
file
 
=
 
(

        
service
.
files
()

        
.
update
(

            
fileId
=
file_id
,

            
addParents
=
folder_id
,

            
removeParents
=
previous_parents
,

            
fields
=
"id, parents"
,

        
)

        
.
execute
()

    
)

    
return
 
file
.
get
(
"parents"
)


  
except
 
HttpError
 
as
 
error
:

    
print
(
f
"An error occurred: 
{
error
}
"
)

    
return
 
None




if
 
__name__
 
==
 
"__main__"
:

  
move_file_to_folder
(

      
file_id
=
"1KuPmvGq8yoYgbfW74OENMCB5H0n_2Jm9"
,

      
folder_id
=
"1jvTFoyBhUspwDncOTB25kb9k0Fl0EqeN"
,

  
)
````



### Node.js


drive/snippets/drive_v3/file_snippets/move_file_to_folder.js

View on GitHub

Code

````
import
 
{
GoogleAuth
}
 
from
 
'google-auth-library'
;


import
 
{
google
}
 
from
 
'googleapis'
;



/**


 * Moves a file to a new folder in Google Drive.


 * @param {string} fileId The ID of the file to move.


 * @param {string} folderId The ID of the folder to move the file to.


 * @return {Promise<number>} The status of the move operation.


 */


async
 
function
 
moveFileToFolder
(
fileId
,
 
folderId
)
 
{


  
// Authenticate with Google and get an authorized client.


  
// TODO (developer): Use an appropriate auth mechanism for your app.


  
const
 
auth
 
=
 
new
 
GoogleAuth
({


    
scopes
:
 
'https://www.googleapis.com/auth/drive'
,


  
});



  
// Create a new Drive API client (v3).


  
const
 
service
 
=
 
google
.
drive
({
version
:
 
'v3'
,
 
auth
});



  
// Get the file's metadata to retrieve its current parents.


  
const
 
file
 
=
 
await
 
service
.
files
.
get
({


    
fileId
,


    
fields
:
 
'parents'
,


  
});



  
// Get the current parents as a comma-separated string.


  
const
 
previousParents
 
=
 
(
file
.
data
.
parents
 
??
 
[]).
join
(
','
);



  
// Move the file to the new folder.


  
const
 
result
 
=
 
await
 
service
.
files
.
update
({


    
fileId
,


    
addParents
:
 
folderId
,


    
removeParents
:
 
previousParents
,


    
fields
:
 
'id, parents'
,


  
});



  
// Print the status of the move operation.


  
console
.
log
(
result
.
status
);


  
return
 
result
.
status
;


}
````



### PHP


drive/snippets/drive_v3/src/DriveMoveFileToFolder.php

View on GitHub

Code

````
<
?php


use Google\Client;


use Google\Service\Drive;


use Google\Service\Drive\DriveFile;


function moveFileToFolder($fileId,$folderId)


{


    try {


        $client = new Client();


        $client->useApplicationDefaultCredentials();


        $client->addScope(Drive::DRIVE);


        $driveService = new Drive($client);


        $emptyFileMetadata = new DriveFile();


        // Retrieve the existing parents to remove


        $file = $driveService->files->get($fileId, array('fields' => 'parents'));


        $previousParents = join(',', $file->parents);


        // Move the file to the new folder


        $file = $driveService->files->update($fileId, $emptyFileMetadata, array(


            'addParents' => $folderId,


            'removeParents' => $previousParents,


            'fields' => 'id, parents'));


        return $file->parents;


    } catch(Exception $e) {


        echo "Error Message: ".$e;


    }


}
````



### .NET


drive/snippets/drive_v3/DriveV3Snippets/MoveFileToFolder.cs

View on GitHub

Code

````
using
 
Google
;


using
 
Google.Apis.Auth.OAuth2
;


using
 
Google.Apis.Drive.v3
;


using
 
Google.Apis.Services
;



namespace
 
DriveV3Snippets


{


    
// Class to demonstrate use-case of Drive move file to folder.


    
public
 
class
 
MoveFileToFolder


    
{


        
/// <summary>


        
/// Move specified file to the specified folder.


        
/// </summary>


        
/// <param name="fileId">Id of file to be moved.</param>


        
/// <param name="folderId">Id of folder where the fill will be moved.</param>


        
/// <returns>list of parent ids for the file, null otherwise.</returns>


        
public
 
static
 
IList<string>
 
DriveMoveFileToFolder
(
string
 
fileId
,


            
string
 
folderId
)


        
{


            
try


            
{


                
/* Load pre-authorized user credentials from the environment.


                 TODO(developer) - See https://developers.google.com/identity for 


                 guides on implementing OAuth2 for your application. */


                
GoogleCredential
 
credential
 
=
 
GoogleCredential
.
GetApplicationDefault
()


                    
.
CreateScoped
(
DriveService
.
Scope
.
Drive
);



                
// Create Drive API service.


                
var
 
service
 
=
 
new
 
DriveService
(
new
 
BaseClientService
.
Initializer


                
{


                    
HttpClientInitializer
 
=
 
credential
,


                    
ApplicationName
 
=
 
"Drive API Snippets"


                
});



                
// Retrieve the existing parents to remove


                
var
 
getRequest
 
=
 
service
.
Files
.
Get
(
fileId
);


                
getRequest
.
Fields
 
=
 
"parents"
;


                
var
 
file
 
=
 
getRequest
.
Execute
();


                
var
 
previousParents
 
=
 
String
.
Join
(
","
,
 
file
.
Parents
);


                
// Move the file to the new folder


                
var
 
updateRequest
 
=


                    
service
.
Files
.
Update
(
new
 
Google
.
Apis
.
Drive
.
v3
.
Data
.
File
(),


                        
fileId
);


                
updateRequest
.
Fields
 
=
 
"id, parents"
;


                
updateRequest
.
AddParents
 
=
 
folderId
;


                
updateRequest
.
RemoveParents
 
=
 
previousParents
;


                
file
 
=
 
updateRequest
.
Execute
();



                
return
 
file
.
Parents
;


            
}


            
catch
 
(
Exception
 
e
)


            
{


                
// TODO(developer) - handle error appropriately


                
if
 
(
e
 
is
 
AggregateException
)


                
{


                    
Console
.
WriteLine
(
"Credential Not found"
);


                
}


                
else
 
if
 
(
e
 
is
 
GoogleApiException
)


                
{


                    
Console
.
WriteLine
(
"File or Folder not found"
);


                
}


                
else


                
{


                    
throw
;


                
}


            
}


            
return
 
null
;


        
}


    
}


}
````


Note:

If you're using the earlier Drive API v2, the

`children`
and

`parents`
resources can also facilitate the reorganization of files and folders.


## File and folder limits


Drive files and folders have some storage limits.



### User-item limit


Each user can have up to 500 million items that were created by that account.
When the limit is reached, the user can no longer create or upload items in
Drive. They can still view and edit existing items. To create
files again, users must permanently delete items or use a different account. For
more information, see Trash or delete files and
folders .


Objects that count toward this limit are:


- Items created or uploaded by the user in Drive

- Items created by the user but now owned by someone else

- Items in the trash

- Shortcuts

- Third-party shortcuts



Objects that don't count toward this limit are:


- Permanently-deleted items

- Items shared with the user but owned by someone else

- Items owned by the user but created by someone else



Attempts to add more than 500 million items returns an activeItemCreationLimitExceeded HTTP status code response.


Note that service accounts can't own any files. Instead, they must upload files
and folders into shared drives, or use OAuth 2.0 to upload items on behalf
of a human user.



### Folder-item limit


Each folder in a user's My Drive has a limit of 500,000 items.
This limit doesn't apply to the root folder of My Drive. Items
that count toward this limit are:


- Folders

- Files. All file types, regardless of file ownership.

- Shortcuts. Counts as a single item within a folder, even if the item it
points to isn't within that folder. For more information, see Create a
shortcut to a Drive file .

- Third-party shortcuts. Counts as a single item within a folder, even if the
item it points to isn't within that folder. For more information, see Create a shortcut file to content stored by your
app .



For more information about folder limits, see Folder limits in
Google Drive .



### Folder-depth limit


A user's My Drive can't contain more than 100 levels of nested
folders. This means that a child folder cannot be stored under a folder that's
more than 99 levels deep. This limitation only applies to child folders. A child
file with a MIME type other than application/vnd.google-apps.folder is exempt from this limitation.


For example, in the following diagram a new folder can be nested inside folder
number 99 but not inside folder number 100. However, folder number 100 can store
files like any other Drive folder:


Attempts to add more than 100 levels of folders returns a myDriveHierarchyDepthLimitExceeded HTTP status code response.


Note:

There's no

`files`
field in the Google Drive API that can return the depth of a folder. To determine the folder depth, you must manually ascend the folder hierarchy.


## Related topics


- Create and manage files

- Manage file metadata

- File and folder limits in shared drives

## Trash or delete files and folders

_Source: https://developers.google.com/workspace/drive/api/guides/delete_

You can remove Google Drive files and folders from both your My
Drive and shared drives. You have two options to do this: trash
or delete.


You can move files and folders into the trash and then restore them (within 30
days of trashing them). Deleting files and folders removes them permanently from
Drive. If you trash, restore, or permanently delete multiple
files or folders at once, it might take time for you to notice the changes.


Note:

For this document, assume the term "files" means both files and folders. Folders are files that only contain metadata and can be used to organize files in Drive. Specifically, a folder is a file with no extension and a

MIME type

of

`application/vnd.google-apps.folder`
. For more information, see

Create metadata-only files

.

This guide explains how you can dispose of files in Drive.



## Use the fields parameter


If you want to specify the fields to return in the response, you can set the fields system
parameter with any method of the files resource. If you omit the fields parameter, the
server returns a default set of fields specific to the method. For example, the list method returns only the kind , id , name , mimeType , and resourceKey fields for each file. To return different
fields, see Return specific fields .



## Trash


To remove Drive files, you can move them to the trash. Files in
the trash are automatically deleted after 30 days. You can restore files from
your trash before the 30-day period.


Only the file owner can trash a file, and other users can't view files in the
owner's trash. If you attempt to trash a file you don't own, you receive an insufficientFilePermissions error. For more information, see Permissions .


To verify you're the file owner, call the get method on the files resource with the fileId path parameter and the fields parameter set to the boolean ownedByMe field. The ownedByMe field
isn't populated for files in shared drives because they're owned by the shared
drive, not individual users. For more information about the fields parameter,
see Use the fields parameter .


If you're not the file owner but still want a copy of the trashed file, do one
of the following:


- Make a copy of the file.

- Contact the owner to have them restore it from the trash.




### Move a file to the trash


To move a file to the trash, use the update method on the files resource with the fileId path parameter and set the boolean trashed field to true . To
trash a shared drive file, you must also set the boolean supportsAllDrives query
parameter to true . For more information, see Implement shared drive
support .


If successful, the response
body contains an instance of the files resource.


Note:

If you're using the previous Drive API v2 version, use the

`trash`
method on the

`files`
resource. Learn how to

migrate to Drive API v3

.

The following code sample shows how to use the fileId to mark the file as
trashed:



### Python


````
body_value
 
=
 
{
'trashed'
:
 
True
}



response
 
=
 
drive_service
.
files
()
.
update
(
fileId
=
"
FILE_ID
"
,
 
body
=
body_value
)
.
execute
()
````



### Node.js


````
const
 
body_value
 
=
 
{


  
'trashed'
:
 
true


};



const
 
response
 
=
 
await
 
drive_service
.
files
.
update
({


      
fileId
:
 
'
FILE_ID
'
,


      
requestBody
:
 
body_value
,


    
});


    
return
 
response
;
````


Replace FILE_ID with the fileId of the file that you want to
trash.



### Determine a trashed file's properties


When a file is trashed, you can retrieve additional file properties. You can use
the get method on the files resource with the fileId path parameter and use one
of the following trashed fields in the fields parameter. For more information
about the fields parameter, see Use the fields parameter .


The following fields are populated for all files:


- trashed : Whether the file
was trashed, either explicitly or from a trashed parent folder. Note that
while using trashed with the update method sets the file's status, the get method retrieves the file's status.

- explicitlyTrashed :
Whether the file was explicitly trashed, as opposed to recursively trashed,
from a parent folder.



The following fields are only populated for files located within a shared drive:


- trashedTime : The time
that the item was trashed in RFC
3339 date-time format. If
you're using the previous Drive API v2 version, this field is
called trashedDate .

- trashingUser : If the
file was explicitly trashed, the user who trashed it.




### Recover a file from the trash


To recover a file from the trash, use the update method on the files resource with the fileId path parameter and set the
boolean trashed field to false . To untrash a shared drive file, you also must set the boolean supportsAllDrives query
parameter to true . For more information, see Implement shared drive
support .


If successful, the response
body contains an instance of the files resource.


Note:

If you're using the previous Drive API v2 version, use the

`untrash`
method on the

`files`
resource. Learn how to

migrate to Drive API v3

.

The following code sample shows how to use the fileId to mark the file as
untrashed:



### Python


````
body_value
 
=
 
{
'trashed'
:
 
False
}



response
 
=
 
drive_service
.
files
()
.
update
(
fileId
=
"
FILE_ID
"
,
 
body
=
body_value
)
.
execute
()
````



### Node.js


````
const
 
body_value
 
=
 
{


  
'trashed'
:
 
false


};



const
 
response
 
=
 
await
 
drive_service
.
files
.
update
({


      
fileId
:
 
'
FILE_ID
'
,


      
requestBody
:
 
body_value
,


    
});


    
return
 
response
;
````


Replace FILE_ID with the fileId of the file that you want to
untrash.



## Empty trash


You can permanently delete all Drive files the user has moved to
the trash using the emptyTrash method on the files resource. To empty the trash of a shared drive, you
must also set the driveId query parameter to the shared drive ID.


If successful, the response
body contains an empty JSON
object.


Note:

If you're using the previous Drive API v2 version, use the

`emptyTrash`
method on the

`files`
resource. Learn how to

migrate to Drive API v3

.

The following code sample shows how to use the fileId to permanently delete
all files in the trash:



### Python


````
response
 
=
 
drive_service
.
files
()
.
emptyTrash
()
.
execute
()
````



### Node.js


````
 
const
 
response
 
=
 
await
 
drive_service
.
files
.
emptyTrash
({


    
});


    
return
 
response
;
````



## Delete


You can permanently delete a Drive file without moving it to the
trash. After you delete a file, anyone you've shared the file with loses access
to it. If you want others to retain access to the file, you can transfer
ownership to someone else before deletion.


To delete a shared drive file, the user must have role=organizer on the parent
folder. If you're deleting a folder, all descendants owned by the user are also
deleted. For more information, see Permissions .


To permanently delete a user-owned file without moving it to the trash, use the delete method on the files resource. To delete a shared drive file, you must also
set the boolean supportsAllDrives query
parameter to true . For more information, see Implement shared drive
support .


If successful, the response
body contains an empty JSON
object.


Note:

If you're using the previous Drive API v2 version, use the

`delete`
method on the

`files`
resource. Learn how to

migrate to Drive API v3

.

The following code sample shows how to use the fileId to delete the file:



### Python


````
response
 
=
 
drive_service
.
files
()
.
delete
(
fileId
=
"
FILE_ID
"
)
.
execute
()
````



### Node.js


````
 
const
 
response
 
=
 
await
 
drive_service
.
files
.
delete
({


      
fileId
:
 
'
FILE_ID
'


    
});


    
return
 
response
;
````


Replace FILE_ID with the fileId of the file that you want to
delete.



## Permissions


The following table shows the role permissions required to trash or delete files
and folders. For a complete list of roles and the operations permitted by each,
refer to Roles and permissions .


| Permitted operation | owner | organizer | fileOrganizer | writer | commenter | reader |

| --- | --- | --- | --- | --- | --- | --- |

| Move files and folders into the trash |  |  |  |  |  |  |

| Recover files and folders from the trash |  |  |  |  |  |  |

| Empty the trash |  |  |  |  |  |  |

| Delete a file or folder |  |  |  |  |  |  |

| Delete files and folders in a shared drive [*] |  |  |  |  |  |  |

| Delete an empty shared drive |  |  |  |  |  |  |



[*]

Requires the

`organizer`
role on a direct or indirect parent, as opposed to the role being present on the item.


### Capabilities


A files resource contains a collection of boolean capabilities fields that indicate the capabilities the user has on this file.


To check the capabilities, call the get method
on the files resource with the fileId path parameter and use one of the
following capabilities fields in the fields parameter. For more information about the fields parameter, see Use the fields parameter .


The following fields are populated for all files:


- capabilities.canTrash :
Whether the current user can move this file to trash.

- capabilities.canUntrash :
Whether the current user can restore this file from trash.

- capabilities.canDelete :
Whether the current user can delete this file.

- capabilities.canRemoveChildren :
Whether the current user can remove children from this folder. This is false when the item isn't a folder.



The following fields are only populated for files located within a shared drive:


- capabilities.canTrashChildren :
Whether the current user can trash children of this folder. This is false when the item isn't a folder.

- capabilities.canDeleteChildren :
Whether the current user can delete children of this folder. This is false when the item isn't a folder.




## File and folder limits


Drive files and folders, along with shared drive folders, have
some storage limits.


Generally, after the item limit is reached, the only way to create more space is
to permanently delete items or use a
different account. Moving files to the trash isn't enough to free up space.


For more information on file and folder limits, see the following:


- File and folder limits in files

- Folder limits in shared drives




## Related topics


- Delete files in Google Drive

- Shared drive versus My Drive API differences

- Roles and permissions

## Search for files and folders

_Source: https://developers.google.com/workspace/drive/api/guides/search-files_

This guide explains how the Google Drive API supports several ways to search files
and folders.


You can use the list method on the files resource to return all or some of a
Drive user's files and folders. The list method can also be
used to retrieve the fileId required for some resource methods (such as the get method and the update ) method.



## Use the fields parameter


If you want to specify the fields to return in the response, you can set the fields system
parameter with any method of the files resource. If you omit the fields parameter, the
server returns a default set of fields specific to the method. For example, the list method returns only the kind , id , name , mimeType , and resourceKey fields for each file. To return different
fields, see Return specific fields .



## Get a file


To get a file, use the get method on the files resource with the fileId path parameter.
If you don't know the file ID, you can list all files using the list method.


The method returns the file as an instance of a files resource. If you provide
the alt=media query parameter, then the response includes the file contents in
the response body. To download or export the file, see Download and export
files .


To acknowledge the risk of downloading known malware or other abusive files, set the acknowledgeAbuse query parameter to true . This field is only applicable when
the alt=media parameter is set and the user is either the file owner or an
organizer of the shared drive in which the file resides.



## Search for all files and folders on the current user's My Drive


Use the list method without any parameters to return all files and folders.


````
GET https://www.googleapis.com/drive/v3/files
````



## Search for specific files or folders on the current user's My Drive


To search for a specific set of files or folders, use the query string q field
with the list method to filter the files to
return by combining one or more search terms.


The query string syntax contains the following three parts:


query_term operator values


Where:


- query_term is the query term or field to search upon.

- operator specifies the condition for the query term.

- values are the specific values you want to use to filter your search
results.



For example, the following query string filters the search to only return
folders by setting the MIME type :


````
q: mimeType = 'application/vnd.google-apps.folder'
````


To view all file query terms, see File-specific query terms .


To view all query operators that you can use to construct a query, see Query
operators .



### Query string examples


The following table lists examples of some basic query strings. The actual code
differs depending on the client library you use for your search.


Important:

The following query terms use fields from the

Drive API v3

. Some resource fields changed between v2 and v3. For example,

`name`
replaces

`title`
. If you're using

Drive API v2

, adjust these queries to use the v2 fields. For more information, see

Drive API v2 and v3 comparison reference

.

You must also escape special characters in your file names to make sure the
query works correctly. For example, if a filename contains both an apostrophe
( ' ) and a backslash ( "\" ) character, use a backslash to escape them: name
contains 'quinn\'s paper\\essay' .


Note:

These examples use the unencoded

`q`
parameter, where

`name = 'hello'`
is encoded as

`name+%3d+%27hello%27`
. Client libraries handle this encoding automatically.

| What you want to query | Example |

| --- | --- |

| Files with the name "hello" | name = 'hello' |

| Files with a name containing the words "hello" and "goodbye" | name contains 'hello' and name contains 'goodbye' |

| Files with a name that does not contain the word "hello" | not name contains 'hello' |

| Files that contain the text "important" and in the trash | fullText contains 'important' and trashed = true |

| Files that contain the word "hello" | fullText contains 'hello' |

| Files that don't have the word "hello" | not fullText contains 'hello' |

| Files that contain the exact phrase "hello world" | fullText contains '"hello world"' |

| Files with a query that contains the "\" character (for example, "\authors") | fullText contains '\\authors' |

| Files that are folders | mimeType = 'application/vnd.google-apps.folder' |

| Files that are not folders | mimeType != 'application/vnd.google-apps.folder' |

| Files modified after a given date (default time zone is UTC) | modifiedTime > '2012-06-04T12:00:00' |

| Image or video files modified after a specific date | modifiedTime > '2012-06-04T12:00:00' and (mimeType contains 'image/' or mimeType contains 'video/') |

| Files that are starred | starred = true |

| Files within a collection (for example, the folder ID in the parents collection) | '1234567' in parents |

| Files in an application data folder in a collection | 'appDataFolder' in parents |

| Files for which user "test@example.org" is the owner | 'test@example.org' in owners |

| Files for which user "test@example.org" has write permission | 'test@example.org' in writers |

| Files for which members of the group "group@example.org" have write permission | 'group@example.org' in writers |

| Files shared with the authorized user with "hello" in the name | sharedWithMe and name contains 'hello' |

| Files with a custom file property visible to all apps | properties has { key='mass' and value='1.3kg' } |

| Files with a custom file property private to the requesting app | appProperties has { key='additionalID' and value='8e8aceg2af2ge72e78' } |

| Files that have not been shared with anyone or domains (only private, or shared with specific users or groups) | visibility = 'limited' |




### Filter search results with a client library


The following code sample shows how to use a client library to filter search
results to file names and IDs of JPEG files. This sample uses the mimeType query term to narrow results to files of type image/jpeg . It also sets spaces to drive to further narrow the search to the Drive
space . When nextPageToken returns null ,
there are no more results.


Note:

If you're using the older Drive API v2, you can find code samples in

GitHub

. Learn how to

migrate to Drive API v3

.


### Java


drive/snippets/drive_v3/src/main/java/SearchFile.java

View on GitHub

Code

````
import
 
com.google.api.client.http.HttpRequestInitializer
;


import
 
com.google.api.client.http.javanet.NetHttpTransport
;


import
 
com.google.api.client.json.gson.GsonFactory
;


import
 
com.google.api.services.drive.Drive
;


import
 
com.google.api.services.drive.DriveScopes
;


import
 
com.google.api.services.drive.model.File
;


import
 
com.google.api.services.drive.model.FileList
;


import
 
com.google.auth.http.HttpCredentialsAdapter
;


import
 
com.google.auth.oauth2.GoogleCredentials
;


import
 
java.io.IOException
;


import
 
java.util.ArrayList
;


import
 
java.util.Arrays
;


import
 
java.util.List
;



/* Class to demonstrate use-case of search files. */


public
 
class
 
SearchFile
 
{



  
/**


   * Search for specific set of files.


   *


   * @return search result list.


   * @throws IOException if service account credentials file not found.


   */


  
public
 
static
 
List<File>
 
searchFile
()
 
throws
 
IOException
 
{


           
/*Load pre-authorized user credentials from the environment.


           TODO(developer) - See https://developers.google.com/identity for


           guides on implementing OAuth2 for your application.*/


    
GoogleCredentials
 
credentials
 
=
 
GoogleCredentials
.
getApplicationDefault
()


        
.
createScoped
(
Arrays
.
asList
(
DriveScopes
.
DRIVE_FILE
));


    
HttpRequestInitializer
 
requestInitializer
 
=
 
new
 
HttpCredentialsAdapter
(


        
credentials
);



    
// Build a new authorized API client service.


    
Drive
 
service
 
=
 
new
 
Drive
.
Builder
(
new
 
NetHttpTransport
(),


        
GsonFactory
.
getDefaultInstance
(),


        
requestInitializer
)


        
.
setApplicationName
(
"Drive samples"
)


        
.
build
();



    
List<File>
 
files
 
=
 
new
 
ArrayList<File>
();



    
String
 
pageToken
 
=
 
null
;


    
do
 
{


      
FileList
 
result
 
=
 
service
.
files
().
list
()


          
.
setQ
(
"mimeType='image/jpeg'"
)


          
.
setSpaces
(
"drive"
)


          
.
setFields
(
"nextPageToken, files(id, title)"
)


          
.
setPageToken
(
pageToken
)


          
.
execute
();


      
for
 
(
File
 
file
 
:
 
result
.
getFiles
())
 
{


        
System
.
out
.
printf
(
"Found file: %s (%s)\n"
,


            
file
.
getName
(),
 
file
.
getId
());


      
}



      
files
.
addAll
(
result
.
getFiles
());



      
pageToken
 
=
 
result
.
getNextPageToken
();


    
}
 
while
 
(
pageToken
 
!=
 
null
);



    
return
 
files
;


  
}


}
````



### Python


drive/snippets/drive-v3/file_snippet/search_file.py

View on GitHub

Code

````
import
 
google.auth


from
 
googleapiclient.discovery
 
import
 
build


from
 
googleapiclient.errors
 
import
 
HttpError




def
 
search_file
():


  
"""Search file in drive location



  Load pre-authorized user credentials from the environment.


  TODO(developer) - See https://developers.google.com/identity


  for guides on implementing OAuth2 for the application.


  """

  
creds
,
 
_
 
=
 
google
.
auth
.
default
()


  
try
:

    
# create drive api client

    
service
 
=
 
build
(
"drive"
,
 
"v3"
,
 
credentials
=
creds
)

    
files
 
=
 
[]

    
page_token
 
=
 
None

    
while
 
True
:

      
# pylint: disable=maybe-no-member

      
response
 
=
 
(

          
service
.
files
()

          
.
list
(

              
q
=
"mimeType='image/jpeg'"
,

              
spaces
=
"drive"
,

              
fields
=
"nextPageToken, files(id, name)"
,

              
pageToken
=
page_token
,

          
)

          
.
execute
()

      
)

      
for
 
file
 
in
 
response
.
get
(
"files"
,
 
[]):

        
# Process change

        
print
(
f
'Found file: 
{
file
.
get
(
"name"
)
}
, 
{
file
.
get
(
"id"
)
}
'
)

      
files
.
extend
(
response
.
get
(
"files"
,
 
[]))

      
page_token
 
=
 
response
.
get
(
"nextPageToken"
,
 
None
)

      
if
 
page_token
 
is
 
None
:

        
break


  
except
 
HttpError
 
as
 
error
:

    
print
(
f
"An error occurred: 
{
error
}
"
)

    
files
 
=
 
None


  
return
 
files




if
 
__name__
 
==
 
"__main__"
:

  
search_file
()
````



### Node.js


drive/snippets/drive_v3/file_snippets/search_file.js

View on GitHub

Code

````
import
 
{
GoogleAuth
}
 
from
 
'google-auth-library'
;


import
 
{
google
}
 
from
 
'googleapis'
;



/**


 * Searches for files in Google Drive.


 * @return {Promise<object[]>} A list of files.


 */


async
 
function
 
searchFile
()
 
{


  
// Authenticate with Google and get an authorized client.


  
// TODO (developer): Use an appropriate auth mechanism for your app.


  
const
 
auth
 
=
 
new
 
GoogleAuth
({


    
scopes
:
 
'https://www.googleapis.com/auth/drive'
,


  
});



  
// Create a new Drive API client (v3).


  
const
 
service
 
=
 
google
.
drive
({
version
:
 
'v3'
,
 
auth
});



  
// Search for files with the specified query.


  
const
 
result
 
=
 
await
 
service
.
files
.
list
({


    
q
:
 
"mimeType='image/jpeg'"
,


    
fields
:
 
'nextPageToken, files(id, name)'
,


    
spaces
:
 
'drive'
,


  
});



  
// Print the name and ID of each found file.


  
(
result
.
data
.
files
 
??
 
[]).
forEach
((
file
)
 
=
>
 
{


    
console
.
log
(
'Found file:'
,
 
file
.
name
,
 
file
.
id
);


  
});



  
return
 
result
.
data
.
files
 
??
 
[];


}
````



### PHP


drive/snippets/drive_v3/src/DriveSearchFiles.php

View on GitHub

Code

````
<
?php


use Google\Client;


use Google\Service\Drive;


function searchFiles()


{


    try {


        $client = new Client();


        $client->useApplicationDefaultCredentials();


        $client->addScope(Drive::DRIVE);


        $driveService = new Drive($client);


        $files = array();


        $pageToken = null;


        do {


            $response = $driveService->files->listFiles(array(


                'q' => "mimeType='image/jpeg'",


                'spaces' => 'drive',


                'pageToken' => $pageToken,


                'fields' => 'nextPageToken, files(id, name)',


            ));


            foreach ($response->files as $file) {


                printf("Found file: %s (%s)\n", $file->name, $file->id);


            }


            array_push($files, $response->files);



            $pageToken = $response->pageToken;


        } while ($pageToken != null);


        return $files;


    } catch(Exception $e) {


       echo "Error Message: ".$e;


    }


}
````



## Search for files with a custom file property


To search for files with a custom file property, use either the properties or
the appProperties search query term with a key and value. For example, to
search for a custom file property that's private to the requesting app called additionalID with a value of 8e8aceg2af2ge72e78 :


````
appProperties has { key='additionalID' and value='8e8aceg2af2ge72e78' }
````


For more information, see Add custom file
properties .



## Search for files with a specific label or field value


To search for files with specific labels, use the labels search query term
with a specific label ID. For example: 'labels/ LABEL_ID ' in
labels . If successful, the response body contains all file instances where the
label's applied.


To search for files without a specific label ID: Not
'labels/ LABEL_ID ' in labels .


You can also search for files based on specific field values. For example, to
search for files with a text value: labels/ LABEL_ID .text_field_id =' TEXT ' .


For more information, see Search for files with a specific label or field
value .



## Search the corpora


Searches that call the list method use the corpora of user by default. To search
other corpora, such as files shared with a domain , set the corpora parameter.


Multiple corpora may be searched in a single query, though incomplete results
might be returned if the combined corpora is too large. If incompleteSearch is true in the response body, then all documents weren't returned. If this
occurs, you should narrow your query by choosing a different corpora such as user or drive .



## Related topics


- Search for shared drives

- Search query terms and operators

- Google Workspace and Google Drive supported MIME types

- Roles and permissions

- Search for files with a specific label or field value

## Share files, folders, and drives

_Source: https://developers.google.com/workspace/drive/api/guides/manage-sharing_

Every Google Drive file, folder, and shared drive have associated permissions resources. Each resource
identifies the permission for a specific type ( user , group , domain , anyone ) and role ( owner , organizer , fileOrganizer , writer , commenter , reader ). For example, a
file might have a permission granting a specific user ( type=user ) read-only
access ( role=reader ) while another permission grants members of a specific
group ( type=group ) the ability to add comments to a file ( role=commenter ).


For a complete list of roles and the operations permitted by each, see Roles
and permissions .


Note:

The list of all permission resources associated with a file, folder, or shared drive, is known as an

Access Control List (ACL)

.


## How permissions work


Permission lists for a folder propagate downward. All child files and folders
inherit permissions from the parent. Whenever permissions or the hierarchy is
changed, the propagation occurs recursively through all nested folders. For
example, if a file exists in a folder and that folder is then moved within
another folder, the permissions on the new folder propagate to the file. If the
new folder grants the file user a new role, such as "writer," it overrides their
old role.


Conversely, if a file inherits role=writer from a folder, and is moved to
another folder that provides a "reader" role, the file now inherits role=reader .


Inherited permissions can't be removed from a file or folder in a shared drive.
Instead these permissions must be adjusted on the direct or indirect parent from
which they were inherited. Inherited permissions can be removed from items under
"My Drive" or "Shared with me."


Conversely, inherited permissions can be overridden on a file or folder in My
Drive. So, if a file inherits role=writer from a My
Drive folder, you can set role=reader on the file to lower its
permission level.


Concurrent permissions operations on the same file aren't supported. Only the
last update is applied.


Warning:

In "My Drive" and "Shared with me," propagation might stop if a different user owns the child file or folder and the file or folder has more restrictive permissions that override the propagation. For example, a parent folder might have

`type=group`
and

`role=commenter`
, but a child folder has

`type=group`
(with the same email) and

`role=reader`
. Since

`reader`
is more restrictive than

`commenter`
, the child folder's permission overrides propagation from the parent folder.


## Understand file capabilities


The permissions resource doesn't ultimately
determine the current user's ability to perform actions on a file or folder.
Instead, the files resource contains a collection
of boolean capabilities fields used to indicate whether an action can be performed on a file or folder.
The Google Drive API sets these fields based on the current user's permissions resource associated with the file or folder.


For example, when Alex logs into your app and tries to share a file, Alex's role
is checked for permissions on the file. If the role allows them to share a file,
the capabilities related to the file, such as canShare , are set relative to
the role. If Alex wants to share the file, your app checks the capabilities to
ensure canShare is set to true .



### Get file capabilities


When your app opens a file, it should check the file's capabilities and render
the UI to reflect the permissions of the current user. For example, if the user
doesn't have the canComment capability on the file, the ability to comment
should be disabled in the UI.


To check the capabilities, call the get method on the files resource with the fileId path parameter and the fields parameter set to the capabilities field. For
further information on returning fields using the fields parameter, see Return specific fields .


The following code sample shows how to verify user permissions. The response returns a list of capabilities the user has on the file. Each capability corresponds to a fine-grained action that a user can take. Some fields are only populated for items in shared drives.


Request


````
GET https://www.googleapis.com/drive/v3/files/
FILE_ID
?fields=capabilities
````


Response


````
{


  
"capabilities"
:
 
{


    
"canAcceptOwnership"
:
 
false
,


    
"canAddChildren"
:
 
false
,


    
"canAddMyDriveParent"
:
 
false
,


    
"canChangeCopyRequiresWriterPermission"
:
 
true
,


    
"canChangeItemDownloadRestriction"
:
 
true
,


    
"canChangeSecurityUpdateEnabled"
:
 
false
,


    
"canChangeViewersCanCopyContent"
:
 
true
,


    
"canComment"
:
 
true
,


    
"canCopy"
:
 
true
,


    
"canDelete"
:
 
true
,


    
"canDisableInheritedPermissions"
:
 
false
,


    
"canDownload"
:
 
true
,


    
"canEdit"
:
 
true
,


    
"canEnableInheritedPermissions"
:
 
true
,


    
"canListChildren"
:
 
false
,


    
"canModifyContent"
:
 
true
,


    
"canModifyContentRestriction"
:
 
true
,


    
"canModifyEditorContentRestriction"
:
 
true
,


    
"canModifyOwnerContentRestriction"
:
 
true
,


    
"canModifyLabels"
:
 
true
,


    
"canMoveChildrenWithinDrive"
:
 
false
,


    
"canMoveItemIntoTeamDrive"
:
 
true
,


    
"canMoveItemOutOfDrive"
:
 
true
,


    
"canMoveItemWithinDrive"
:
 
true
,


    
"canReadLabels"
:
 
true
,


    
"canReadRevisions"
:
 
true
,


    
"canRemoveChildren"
:
 
false
,


    
"canRemoveContentRestriction"
:
 
false
,


    
"canRemoveMyDriveParent"
:
 
true
,


    
"canRename"
:
 
true
,


    
"canShare"
:
 
true
,


    
"canTrash"
:
 
true
,


    
"canUntrash"
:
 
true


  
}


}
````



## Scenarios for sharing Drive resources


There are five different types of sharing scenarios:


1. To share a file in My Drive, the user must have role=writer or role=owner . If the writersCanShare boolean value is set to false for the file, the user must have role=owner . If the user with role=writer has temporary access governed by an
expiration date and time, they can't share the file. For more
information, see Set an expiration date to limit item
access .

  If the writersCanShare boolean value is set to false for the file, the user must have role=owner .


  If the user with role=writer has temporary access governed by an
expiration date and time, they can't share the file. For more
information, see Set an expiration date to limit item
access .


2. To share a folder in My Drive, the user must have role=writer or role=owner . If the writersCanShare boolean value is set to false for the file,
the user must have the more permissive role=owner . Temporary access (governed by an expiration date and time) is only
allowed on folders with role=reader . For more information, see
see Set an expiration date to limit item access .

  If the writersCanShare boolean value is set to false for the file,
the user must have the more permissive role=owner .


  Temporary access (governed by an expiration date and time) is only
allowed on folders with role=reader . For more information, see
see Set an expiration date to limit item access .


3. To share a file in a shared drive, the user must have role=writer , role=fileOrganizer , or role=organizer . The writersCanShare setting doesn't apply to items in shared drives.
It's treated as if it's always set to true .

  The

  `writersCanShare`
  setting doesn't apply to items in shared drives. It's treated as if it's always set to

  `true`
  .

4. To share a folder in a shared drive, the user must have role=organizer . If the sharingFoldersRequiresOrganizerPermission restriction on a shared drive is set to false , users with role=fileOrganizer can share folders in that shared drive.

  If the

  `sharingFoldersRequiresOrganizerPermission`
  restriction on a shared drive is set to

  `false`
  , users with

  `role=fileOrganizer`
  can share folders in that shared drive.

5. To manage shared drive membership, the user must have role=organizer . Only
users and groups can be members of shared drives.




## Use the fields parameter


If you want to specify the fields to return in the response, you can set the fields system
parameter with any method of the permissions resource. If you omit the fields parameter, the server returns a default set of fields specific to the method.
For example, the list method returns
only the id , type , kind , and role fields for each file. To return
different fields, see Return specific fields .



## Create a permission


The following two fields are necessary when creating a permission:


- type : The type identifies the permission scope ( user , group , domain , or anyone ). A
permission with type=user applies to a specific user whereas a permission
with type=domain applies to everyone in a specific domain.

- role : The role field identifies operations the type can perform. For example, a
permission with type=user and role=reader grants a specific user
read-only access to the file or folder. Or, a permission with type=domain and role=commenter lets everyone in the domain add comments to a file. For
a complete list of roles and the operations permitted by each, refer to Roles and permissions .



When you create a permission where type=user or type=group , you must also
provide an emailAddress to tie the specific user or group to the permission.


When you create a permission where type=domain , you must also provide a domain to tie a
specific domain to the permission.


To create a permission:


1. Use the create method on the permissions resource with the fileId path parameter for the associated file or folder.

2. In the request body, specify the type and role .

3. If type=user or type=group , provide an emailAddress . If type=domain ,
provide a domain .



The following code sample shows how to create a permission. The response returns an instance of a permissions resource, including the assigned permissionId .


Request


````
POST https://www.googleapis.com/drive/v3/files/
FILE_ID
/permissions
````


````
{


  
"requests"
:
 
[


    
{


        
"type"
:
 
"user"
,


        
"role"
:
 
"commenter"
,


        
"emailAddress"
:
 
"alex@altostrat.com"


    
}


  
]


}
````


Response


````
{


    
"kind"
:
 
"drive#permission"
,


    
"id"
:
 
"
PERMISSION_ID
"
,


    
"type"
:
 
"user"
,


    
"role"
:
 
"commenter"


}
````



### Use target audiences


Target audiences are groups of people—such as departments or teams—that you can
recommend for users to share their items with. You can encourage users to share
items with a more specific or limited audience rather than your entire
organization. Target audiences can help you improve the security and privacy of
your data, and make it easier for users to share appropriately. For more
information, see About target
audiences .


To use target audiences:


1. In the Google Admin console, go to Menu menu > Directory > Target audiences . Go to Target audiences You must be signed in using an account with super administrator privileges for this task.

2. In the Target audiences list , click the name of the target audience. To
create a target audience, see Create a target
audience

3. Copy the unique ID from the target audience URL: https://admin.google.com/ac/targetaudiences/ ID .

4. Create a permission with type=domain , and set the domain field to ID .audience.googledomains.com .



To view how users interact with target audiences, see User experience for link
sharing .



## Get a permission


To get a permission, use the get method
on the permissions resource with the fileId and permissionId path parameters. If you don't know the permission
ID, you can list all permissions using the list method.


The following code sample shows how to get a permission by ID. The response returns an instance of a permissions resource.


Request


````
GET https://www.googleapis.com/drive/v3/files/
FILE_ID
/permissions
PERMISSION_ID
````


Response


````
{


  
"kind"
:
 
"drive#permissionList"
,


  
"permissions"
:
 
[


    
{


      
"kind"
:
 
"drive#permission"
,


      
"id"
:
 
"
PERMISSION_ID
"
,


      
"type"
:
 
"user"
,


      
"role"
:
 
"commenter"


    
}


  
]


}
````



## List all permissions


To list permissions for a file, folder, or shared drive, use the list method on the permissions resource with the fileId path parameter.


Pass the following query
parameters to customize
pagination of, or to filter, permissions:


- pageSize : The maximum number of permissions to return per page. If not set
for files in a shared drive, at most 100 results are returned. If not set
for files that aren't in a shared drive, the entire list is returned.

- pageToken : A page token, received from a previous list call. Provide this
token to retrieve the subsequent page.

- supportsAllDrives : Whether the requesting app supports both My Drives and
shared drives.

- useDomainAdminAccess : Set to true to issue the request as a domain
administrator. If the fileId parameter refers to a shared drive and the
requester is an administrator of the domain to which the shared drive
belongs. For more information, see Manage shared drives as domain
administrators .

- includePermissionsForView : The additional view's permissions to include in
the response. Only published is supported.



The following code sample shows how to get all permissions. The response returns a list of permissions for a file, folder, or shared drive.


Request


````
GET https://www.googleapis.com/drive/v3/files/
FILE_ID
/permissions
````


Response


````
{


  
"kind"
:
 
"drive#permissionList"
,


  
"permissions"
:
 
[


    
{


      
"id"
:
 
"
PERMISSION_ID
"
,


      
"type"
:
 
"user"
,


      
"kind"
:
 
"drive#permission"
,


      
"role"
:
 
"commenter"


    
}


  
]


}
````



## Update permissions


To update permissions on a file or folder, you can change the assigned role. For
more information on finding the role source, see Determine the role
source .


1. Call the update method on the permissions resource with the fileId path parameter set to the associated file, folder, or shared drive and the permissionId path parameter set to the permission to change. To find the permissionId , use the list method
on the permissions resource with the fileId path parameter. Note: The permissionId represents the user or group to which the
permission is granted, such as alex@altostrat.com or hiking-club@altostrat.com . The permissionId remains the same for that
user or group across all files, folders, and shared drives.

2. In the request, identify the new role .



You can grant permissions on individual files or folders in a shared drive even
if the user or group is already a member. For example, Alex has role=commenter as part of their membership to a shared drive. However, your app can grant Alex role=writer for a file in a shared drive. In this case, because the new role
is more permissive than the role granted through their membership, the new
permission becomes the effective role for the file or folder.


You can apply updates through patch semantics, meaning you can make partial
modifications to a resource. You must explicitly set the fields that you intend
to modify in your request. Any fields not included in the request retain their
existing values. For more information, see Working with partial resources .


The following code sample shows how to change permissions on a file or folder from commenter to writer . The response returns an instance of a permissions resource.


Request


````
PATCH https://www.googleapis.com/drive/v3/files/
FILE_ID
/permissions/
PERMISSION_ID
````


````
{
  "requests": [
    {
        "role": "writer"
    }
  ]
}
````


Response


````
{


  
"kind"
:
 
"drive#permission"
,


  
"id"
:
 
"
PERMISSION_ID
"
,


  
"type"
:
 
"user"
,


  
"role"
:
 
"writer"


}
````



### Determine the role source


To change the role on a file or folder, you must know the source of the role.
For shared drives, the source of a role can be based on membership to the shared
drive, the role on a folder, or the role on a file.


To determine the role source for a shared drive, or items within that drive,
call the get method on the permissions resource with the fileId and permissionId path parameters, and the fields parameter set to the permissionDetails field.


To find the permissionId , use the list method on the permissions resource with the fileId path parameter. To fetch the permissionDetails field on the list request, set the fields parameter to permissions/permissionDetails .


This field enumerates all inherited and direct file permissions for the user,
group, or domain.


The following code sample shows how to determine the role source. The response returns the permissionDetails of a permissions resource. The inheritedFrom field provides the ID of the item from which the permission is inherited.


Request


````
GET https://www.googleapis.com/drive/v3/files/
FILE_ID
/permissions/
PERMISSION_ID
?fields=permissionDetails&supportsAllDrives=true
````


Response


````
{
  "permissionDetails": [
    {
      "permissionType": "member",
      "role": "commenter",
      "inheritedFrom": "
INHERITED_FROM_ID
",
      "inherited": true
    },
    {
      "permissionType": "file",
      "role": "writer",
      "inherited": false
    }
  ]
}
````



## Update multiple permissions with batch requests


We strongly recommend using batch
requests to modify multiple
permissions.


The following is an example of performing a batch permission modification with a
client library.


Note:

If you're using the older Drive API v2, you can find code samples in

GitHub

. Learn how to

migrate to Drive API v3

.


### Java


drive/snippets/drive_v3/src/main/java/ShareFile.java

View on GitHub

Code

````
import
 
com.google.api.client.googleapis.batch.BatchRequest
;


import
 
com.google.api.client.googleapis.batch.json.JsonBatchCallback
;


import
 
com.google.api.client.googleapis.json.GoogleJsonError
;


import
 
com.google.api.client.googleapis.json.GoogleJsonResponseException
;


import
 
com.google.api.client.http.HttpHeaders
;


import
 
com.google.api.client.http.HttpRequestInitializer
;


import
 
com.google.api.client.http.javanet.NetHttpTransport
;


import
 
com.google.api.client.json.gson.GsonFactory
;


import
 
com.google.api.services.drive.Drive
;


import
 
com.google.api.services.drive.DriveScopes
;


import
 
com.google.api.services.drive.model.Permission
;


import
 
com.google.auth.http.HttpCredentialsAdapter
;


import
 
com.google.auth.oauth2.GoogleCredentials
;


import
 
java.io.IOException
;


import
 
java.util.ArrayList
;


import
 
java.util.Arrays
;


import
 
java.util.List
;



/* Class to demonstrate use-case of modify permissions. */


public
 
class
 
ShareFile
 
{



  
/**


   * Batch permission modification.


   * realFileId file Id.


   * realUser User Id.


   * realDomain Domain of the user ID.


   *


   * @return list of modified permissions if successful, {@code null} otherwise.


   * @throws IOException if service account credentials file not found.


   */


  
public
 
static
 
List<String>
 
shareFile
(
String
 
realFileId
,
 
String
 
realUser
,
 
String
 
realDomain
)


      
throws
 
IOException
 
{


        
/* Load pre-authorized user credentials from the environment.


         TODO(developer) - See https://developers.google.com/identity for


         guides on implementing OAuth2 for your application.application*/


    
GoogleCredentials
 
credentials
 
=
 
GoogleCredentials
.
getApplicationDefault
()


        
.
createScoped
(
Arrays
.
asList
(
DriveScopes
.
DRIVE_FILE
));


    
HttpRequestInitializer
 
requestInitializer
 
=
 
new
 
HttpCredentialsAdapter
(


        
credentials
);



    
// Build a new authorized API client service.


    
Drive
 
service
 
=
 
new
 
Drive
.
Builder
(
new
 
NetHttpTransport
(),


        
GsonFactory
.
getDefaultInstance
(),


        
requestInitializer
)


        
.
setApplicationName
(
"Drive samples"
)


        
.
build
();



    
final
 
List<String>
 
ids
 
=
 
new
 
ArrayList<String>
();




    
JsonBatchCallback<Permission>
 
callback
 
=
 
new
 
JsonBatchCallback<Permission>
()
 
{


      
@Override


      
public
 
void
 
onFailure
(
GoogleJsonError
 
e
,


                            
HttpHeaders
 
responseHeaders
)


          
throws
 
IOException
 
{


        
// Handle error


        
System
.
err
.
println
(
e
.
getMessage
());


      
}



      
@Override


      
public
 
void
 
onSuccess
(
Permission
 
permission
,


                            
HttpHeaders
 
responseHeaders
)


          
throws
 
IOException
 
{


        
System
.
out
.
println
(
"Permission ID: "
 
+
 
permission
.
getId
());



        
ids
.
add
(
permission
.
getId
());



      
}


    
};


    
BatchRequest
 
batch
 
=
 
service
.
batch
();


    
Permission
 
userPermission
 
=
 
new
 
Permission
()


        
.
setType
(
"user"
)


        
.
setRole
(
"writer"
);



    
userPermission
.
setEmailAddress
(
realUser
);


    
try
 
{


      
service
.
permissions
().
create
(
realFileId
,
 
userPermission
)


          
.
setFields
(
"id"
)


          
.
queue
(
batch
,
 
callback
);



      
Permission
 
domainPermission
 
=
 
new
 
Permission
()


          
.
setType
(
"domain"
)


          
.
setRole
(
"reader"
);



      
domainPermission
.
setDomain
(
realDomain
);



      
service
.
permissions
().
create
(
realFileId
,
 
domainPermission
)


          
.
setFields
(
"id"
)


          
.
queue
(
batch
,
 
callback
);



      
batch
.
execute
();



      
return
 
ids
;


    
}
 
catch
 
(
GoogleJsonResponseException
 
e
)
 
{


      
// TODO(developer) - handle error appropriately


      
System
.
err
.
println
(
"Unable to modify permission: "
 
+
 
e
.
getDetails
());


      
throw
 
e
;


    
}


  
}


}
````



### Python


drive/snippets/drive-v3/file_snippet/share_file.py

View on GitHub

Code

````
import
 
google.auth


from
 
googleapiclient.discovery
 
import
 
build


from
 
googleapiclient.errors
 
import
 
HttpError




def
 
share_file
(
real_file_id
,
 
real_user
,
 
real_domain
):


  
"""Batch permission modification.


  Args:


      real_file_id: file Id


      real_user: User ID


      real_domain: Domain of the user ID


  Prints modified permissions



  Load pre-authorized user credentials from the environment.


  TODO(developer) - See https://developers.google.com/identity


  for guides on implementing OAuth2 for the application.


  """

  
creds
,
 
_
 
=
 
google
.
auth
.
default
()


  
try
:

    
# create drive api client

    
service
 
=
 
build
(
"drive"
,
 
"v3"
,
 
credentials
=
creds
)

    
ids
 
=
 
[]

    
file_id
 
=
 
real_file_id


    
def
 
callback
(
request_id
,
 
response
,
 
exception
):

      
if
 
exception
:

        
# Handle error

        
print
(
exception
)

      
else
:

        
print
(
f
"Request_Id: 
{
request_id
}
"
)

        
print
(
f
'Permission Id: 
{
response
.
get
(
"id"
)
}
'
)

        
ids
.
append
(
response
.
get
(
"id"
))


    
# pylint: disable=maybe-no-member

    
batch
 
=
 
service
.
new_batch_http_request
(
callback
=
callback
)

    
user_permission
 
=
 
{

        
"type"
:
 
"user"
,

        
"role"
:
 
"writer"
,

        
"emailAddress"
:
 
"user@example.com"
,

    
}

    
batch
.
add
(

        
service
.
permissions
()
.
create
(

            
fileId
=
file_id
,

            
body
=
user_permission
,

            
fields
=
"id"
,

        
)

    
)

    
domain_permission
 
=
 
{

        
"type"
:
 
"domain"
,

        
"role"
:
 
"reader"
,

        
"domain"
:
 
"example.com"
,

    
}

    
domain_permission
[
"domain"
]
 
=
 
real_domain

    
batch
.
add
(

        
service
.
permissions
()
.
create
(

            
fileId
=
file_id
,

            
body
=
domain_permission
,

            
fields
=
"id"
,

        
)

    
)

    
batch
.
execute
()


  
except
 
HttpError
 
as
 
error
:

    
print
(
f
"An error occurred: 
{
error
}
"
)

    
ids
 
=
 
None


  
return
 
ids




if
 
__name__
 
==
 
"__main__"
:

  
share_file
(

      
real_file_id
=
"1dUiRSoAQKkM3a4nTPeNQWgiuau1KdQ_l"
,

      
real_user
=
"gduser1@workspacesamples.dev"
,

      
real_domain
=
"workspacesamples.dev"
,

  
)
````



### Node.js


drive/snippets/drive_v3/file_snippets/share_file.js

View on GitHub

Code

````
import
 
{
GoogleAuth
}
 
from
 
'google-auth-library'
;


import
 
{
google
}
 
from
 
'googleapis'
;



/**


 * Shares a file with a user and a domain.


 * @param {string} fileId The ID of the file to share.


 * @param {string} targetUserEmail The email address of the user to share with.


 * @param {string} targetDomainName The domain to share with.


 * @return {Promise<Array<string>>} A promise that resolves to an array of permission IDs.


 */


async
 
function
 
shareFile
(
fileId
,
 
targetUserEmail
,
 
targetDomainName
)
 
{


  
// Authenticate with Google and get an authorized client.


  
// TODO (developer): Use an appropriate auth mechanism for your app.


  
const
 
auth
 
=
 
new
 
GoogleAuth
({


    
scopes
:
 
'https://www.googleapis.com/auth/drive'
,


  
});



  
// Create a new Drive API client (v3).


  
const
 
service
 
=
 
google
.
drive
({
version
:
 
'v3'
,
 
auth
});



  
/** @type {Array<string>} */


  
const
 
permissionIds
 
=
 
[];



  
// The permissions to create.


  
const
 
permissions
 
=
 
[


    
{


      
type
:
 
'user'
,


      
role
:
 
'writer'
,


      
emailAddress
:
 
targetUserEmail
,
 
// e.g., 'user@partner.com'


    
},


    
{


      
type
:
 
'domain'
,


      
role
:
 
'writer'
,


      
domain
:
 
targetDomainName
,
 
// e.g., 'example.com'


    
},


  
];



  
// Iterate through the permissions and create them one by one.


  
for
 
(
const
 
permission
 
of
 
permissions
)
 
{


    
const
 
result
 
=
 
await
 
service
.
permissions
.
create
({


      
requestBody
:
 
permission
,


      
fileId
,


      
fields
:
 
'id'
,


    
});



    
if
 
(
result
.
data
.
id
)
 
{


      
permissionIds
.
push
(
result
.
data
.
id
);


      
console
.
log
(
`Inserted permission id: 
${
result
.
data
.
id
}
`
);


    
}
 
else
 
{


      
throw
 
new
 
Error
(
'Failed to create permission'
);


    
}


  
}


  
return
 
permissionIds
;


}
````



### PHP


drive/snippets/drive_v3/src/DriveShareFile.php

View on GitHub

Code

````
<
?php


use Google\Client;


use Google\Service\Drive;


function shareFile()


{


    try {


        $client = new Client();


        $client->useApplicationDefaultCredentials();


        $client->addScope(Drive::DRIVE);


        $driveService = new Drive($client);


        $realFileId = readline("Enter File Id: ");


        $realUser = readline("Enter user email address: ");


        $realDomain = readline("Enter domain name: ");


        $ids = array();


            $fileId = '1sTWaJ_j7PkjzaBWtNc3IzovK5hQf21FbOw9yLeeLPNQ';


            $fileId = $realFileId;


            $driveService->getClient()->setUseBatch(true);


            try {


                $batch = $driveService->createBatch();



                $userPermission = new Drive\Permission(array(


                    'type' => 'user',


                    'role' => 'writer',


                    'emailAddress' => 'user@example.com'


                ));


                $userPermission['emailAddress'] = $realUser;


                $request = $driveService->permissions->create(


                    $fileId, $userPermission, array('fields' => 'id'));


                $batch->add($request, 'user');


                $domainPermission = new Drive\Permission(array(


                    'type' => 'domain',


                    'role' => 'reader',


                    'domain' => 'example.com'


                ));


                $userPermission['domain'] = $realDomain;


                $request = $driveService->permissions->create(


                    $fileId, $domainPermission, array('fields' => 'id'));


                $batch->add($request, 'domain');


                $results = $batch->execute();



                foreach ($results as $result) {


                    if ($result instanceof Google_Service_Exception) {


                        // Handle error


                        printf($result);


                    } else {


                        printf("Permission ID: %s\n", $result->id);


                        array_push($ids, $result->id);


                    }


                }


            } finally {


                $driveService->getClient()->setUseBatch(false);


            }


            return $ids;


    } catch(Exception $e) {


        echo "Error Message: ".$e;


    }



}
````



### .NET


drive/snippets/drive_v3/DriveV3Snippets/ShareFile.cs

View on GitHub

Code

````
using
 
Google.Apis.Auth.OAuth2
;


using
 
Google.Apis.Drive.v3
;


using
 
Google.Apis.Drive.v3.Data
;


using
 
Google.Apis.Requests
;


using
 
Google.Apis.Services
;



namespace
 
DriveV3Snippets


{


    
// Class to demonstrate use-case of Drive modify permissions.


    
public
 
class
 
ShareFile


    
{


        
/// <summary>


        
/// Batch permission modification.


        
/// </summary>


        
/// <param name="realFileId">File id.</param>


        
/// <param name="realUser">User id.</param>


        
/// <param name="realDomain">Domain id.</param>


        
/// <returns>list of modified permissions, null otherwise.</returns>


        
public
 
static
 
IList<String>
 
DriveShareFile
(
string
 
realFileId
,
 
string
 
realUser
,
 
string
 
realDomain
)


        
{


            
try


            
{


                
/* Load pre-authorized user credentials from the environment.


                 TODO(developer) - See https://developers.google.com/identity for


                 guides on implementing OAuth2 for your application. */


                
GoogleCredential
 
credential
 
=
 
GoogleCredential
.
GetApplicationDefault
()


                    
.
CreateScoped
(
DriveService
.
Scope
.
Drive
);



                
// Create Drive API service.


                
var
 
service
 
=
 
new
 
DriveService
(
new
 
BaseClientService
.
Initializer


                
{


                    
HttpClientInitializer
 
=
 
credential
,


                    
ApplicationName
 
=
 
"Drive API Snippets"


                
});



                
var
 
ids
 
=
 
new
 
List<String>
();


                
var
 
batch
 
=
 
new
 
BatchRequest
(
service
);


                
BatchRequest
.
OnResponse<Permission>
 
callback
 
=
 
delegate
(


                    
Permission
 
permission
,


                    
RequestError
 
error
,


                    
int
 
index
,


                    
HttpResponseMessage
 
message
)


                
{


                    
if
 
(
error
 
!=
 
null
)


                    
{


                        
// Handle error


                        
Console
.
WriteLine
(
error
.
Message
);


                    
}


                    
else


                    
{


                        
Console
.
WriteLine
(
"Permission ID: "
 
+
 
permission
.
Id
);


                    
}


                
};


                
Permission
 
userPermission
 
=
 
new
 
Permission
()


                
{


                    
Type
 
=
 
"user"
,


                    
Role
 
=
 
"writer"
,


                    
EmailAddress
 
=
 
realUser


                
};



                
var
 
request
 
=
 
service
.
Permissions
.
Create
(
userPermission
,
 
realFileId
);


                
request
.
Fields
 
=
 
"id"
;


                
batch
.
Queue
(
request
,
 
callback
);



                
Permission
 
domainPermission
 
=
 
new
 
Permission
()


                
{


                    
Type
 
=
 
"domain"
,


                    
Role
 
=
 
"reader"
,


                    
Domain
 
=
 
realDomain


                
};


                
request
 
=
 
service
.
Permissions
.
Create
(
domainPermission
,
 
realFileId
);


                
request
.
Fields
 
=
 
"id"
;


                
batch
.
Queue
(
request
,
 
callback
);


                
var
 
task
 
=
 
batch
.
ExecuteAsync
();


                
task
.
Wait
();


                
return
 
ids
;


            
}


            
catch
 
(
Exception
 
e
)


            
{


                
// TODO(developer) - handle error appropriately


                
if
 
(
e
 
is
 
AggregateException
)


                
{


                    
Console
.
WriteLine
(
"Credential Not found"
);


                
}


                
else


                
{


                    
throw
;


                
}


            
}


            
return
 
null
;


        
}


    
}


}
````



## Delete a permission


To revoke access to a file or folder, call the delete method on the permissions resource with the fileId and
the permissionId path parameters set to delete the permission.


For items in "My Drive," it's possible to delete an inherited
permission. Deleting an inherited permission revokes access to the item and
child items, if any.


For items in a shared drive, inherited permissions cannot be revoked. Update or
delete the permission on the parent file or folder instead.


The delete method is also used to delete permissions directly applied to a
shared drive file or folder.


The following code sample shows how to revoke access by deleting a permissionId . If successful, the response body is an empty JSON object. To confirm the permission is removed, use the list method on the permissions resource with the fileId path parameter.


Request


````
DELETE https://www.googleapis.com/drive/v3/files/
FILE_ID
/permissions/
PERMISSION_ID
````



## Set an expiration date to limit item access


When you're working with people on a sensitive project, you might want to
restrict their access to certain items in Drive after a period of
time. For files and folders, you can set an expiration date to
limit or remove access to that item.


To set the expiration date:


- Use the create method on the permissions resource and set the expirationTime field (along with the other required fields). For more information, see Create a permission .

- Use the update method on the permissions resource and set the expirationTime field (along with the
other required fields). For more information, see Update
permissions .



The expirationTime field denotes when the permission expires using RFC 3339
date-time . Expiration times have
the following restrictions:


- They can only be set on user and group permissions.

- Time must be in the future.

- The time cannot be more than one year in the future.

- Only the reader role is eligible for expiring access on a folder.



Note:

If you're using the older Drive API v2, use the

`expirationDate`
field. Learn how to

migrate to Drive API v3

.

For more information about expiration date, see the following articles:


- Set an expiration date for file access

- Add an expiration date




## Related topics


- Manage pending access proposals

- Manage folders with limited and expansive access

- Transfer file ownership

- Protect file content

- Access link-shared drive files using resource keys

- Roles and permissions

## Manage pending access proposals

_Source: https://developers.google.com/workspace/drive/api/guides/pending-access_

An access proposal is a proposal from a requester to an approver to grant a
recipient access to a Google Drive item.


An approver can review and act on all unresolved access proposals across
Drive files. This means you can speed up the approval process by
programmatically querying for access proposals and then resolving them. It also
allows proposals to be viewed in aggregate by an approver.


The Google Drive API provides the accessproposals resource so you can view
and resolve pending access proposals. The methods of the accessproposals resource work on files, folders, the files within a shared drive but not on
the shared drive.


The following terms are specific to access proposals:


- Requester : The user initiating the access proposal to a
Drive item.

- Recipient : The user receiving the additional permissions on a file if
the access proposal is granted. Many times the recipient is the same as the
requester but not always.

- Approver : The user responsible for approving (or denying) the access
proposal. This is typically because they're an owner on the document or they
have the ability to share the document.



Important:

Access proposals can't be created using the Drive API. Users must request access using the Drive UI. For more information, see

Get permission to open a file or folder

.


## Use the fields parameter


If you want to specify the fields to return in the response, you can set the fields system
parameter with any method of the accessproposals resource. If you omit the fields parameter, the server returns a default set of fields specific to the method. To
return different fields, see Return specific
fields .



## Get a pending access proposal


To get an access proposal, use the get method on the accessproposals resource with the fileId and proposalId path parameters. If you don't know the proposal ID, you can list pending access
proposals using the list method.



## List pending access proposals


To list all pending access proposals on a Drive item, call the list method on the accessproposals resource and include the fileId path parameter.


Only approvers on a file can list the pending proposals on a file. An approver
is a user with the can_approve_access_proposals capability on the file. If the
requester isn't an approver, an empty list is returned. For more information
about capabilities , see Understand file
capabilities .


The response body consists of an accessproposals object representing a list of unresolved access
proposals on the file.


The accessproposals object includes info about each proposal such as the
requester, the recipient, and the message that the requester added. It also
includes a RoleAndView object that groups the requester's proposed role with a view . Since role is a repeated field, multiples could exist for each proposal. For example, a
proposal might have an RoleAndView object of role=reader and view=published , plus an additional RoleAndView object with only the role=writer value. For more information, see Views .


Pass the following query parameters to customize pagination of, or filter,
access proposals:


- pageToken : A page token, received from a previous list call. Provide this
token to retrieve the subsequent page.

- pageSize : The maximum number of access proposals to return per page.




## Resolve pending access proposals


To resolve all pending access proposals on a Drive
item, call the resolve method on
the accessproposals resource and include
the fileId and proposalId path parameters.


The resolve method includes an action query parameter that denotes the
action to take on the proposal. The Action object tracks the
state change of the proposal so we know if it's being accepted or denied.


The resolve method also includes the optional query parameters of role and view . The only supported roles are writer , commenter , and reader . If the
role isn't specified, it defaults to reader . For more information, see Roles
and permissions . An additional optional query
parameter of sendNotification lets you send an email notification to the
requester when the proposal is accepted or denied.


Just as with the list method, users resolving the proposal must have the can_approve_access_proposals capability on the file. For more information
about capabilities , see Understand file
capabilities .


Proposals are resolved using the same patterns listed under Scenarios for
sharing Drive
resources . If there are
multiple proposals for the same user, but with different roles, the following
applies:


- If one proposal is accepted and one is denied, the accepted role applies to
the Drive item.

- If both proposals are accepted at the same time, the proposal with the
higher permission (for example, role=writer versus role=reader ) is
applied. The other access proposal is removed from the item.



After sending a proposal to the resolve method, the sharing action is
complete. The resolved access proposal is no longer returned through the list method. Once the proposal is accepted, the user must use the permissions resource to update permissions on a file or
folder. For more information, see Update
permissions .



## Related topics


- Share files, folders, and drives

## Manage limited and expansive access

_Source: https://developers.google.com/workspace/drive/api/guides/limited-expansive-access_

A user owns a My Drive folder. The folder might contain multiple
users with access to different files. This restrictive access model means
different users could see different lists of items within the same folder. A
user with access to the parent My Drive folder but not to an item
within that folder has "restricted access". It creates a situation where it's
difficult to know who has access within the hierarchy.


Conversely, shared drive files are owned by the shared drive. Shared drives have
an expansive model so every user has the same list of items within the same
folder.


The introduction of folders with limited access replicates the expansive
access model from shared drives to My Drive. With this change,
folders with limited access are the one exception that allows restricting access
to a specific subfolder in both My Drive and shared drives.


This guide explains how you can manage folders with limited access and expansive
access in Google Drive.



## About folders with limited access


Folders with limited access allow you to restrict folders to specific users.
Only users you directly add to the folder's permissions can open it and access
its content. Users with inherited access to the shared My Drive
folder or shared drive folder (through access from a parent folder) can see the
restricted folder in Drive but can't open it. This feature better
aligns the sharing behavior of items in both My Drive and shared
drives, letting you organize folders with sensitive content alongside more
broadly shared content.


Folders with limited access are available in both My Drive and
shared drives. The owner role in My Drive and the organizer role in shared drives can always access folders with limited access. To modify
the list of folder users, no special permissions are required. Roles that can
share folders can update the member lists. To learn more about roles and
permissions, see Roles and permissions and Shared
drives overview .


Note that although folders are a type of
file, limited access isn't available for files.



### Set limited access on a folder


While users with direct folder permissions can access a folder with limited
access, only the owner role in My Drive and the organizer role in shared drives can enable or disable limited access.


Additionally, if a user with the writer role in My Drive has
the writersCanShare boolean field on the files resource set to true , they can also turn the feature on or off.


To limit access to a folder, set the boolean inheritedPermissionsDisabled field on the files resource to true . When true , only the owner role, the organizer role, and users with direct folder permissions can access it.


To turn inherited permissions back on, set inheritedPermissionsDisabled to false .



### Verify permission to limit access on a folder


To check if you can limit access to a folder or not, inspect the boolean values
of the capabilities.canDisableInheritedPermissions and capabilities.canEnableInheritedPermissions fields on the files resource. These settings confirm if you have
permission to limit access to a folder through the inheritedPermissionsDisabled field.


For more information about capabilities , see Understand file capabilities .



### List children of a folder with limited access


To check if you can list the children of a folder, use the capabilities.canListChildren boolean field.


The returned value is always false when the item isn't a folder or if the
requester's access to the folder's contents was removed by setting inheritedPermissionsDisabled to false .


If your access to the folder's contents was removed, you can still access the
folder metadata with the files.get() and files.list() methods. To confirm access is
limited, check the response body to see if the item is a folder with the MIME
type application/vnd.google-apps.folder and the capabilities.canListChildren field is set to false. If you try to list the
children of such a folder, the result is always empty.



### Access folder with limited access metadata


Folders with limited access let you view folder metadata if you have no access to the folder contents.


When using the permissions resource to
determine a user's access, both My Drive and shared drive folders
that only grant access to the metadata contain the following values in the
response body: inheritedPermissionsDisabled=true and view=metadata . The role
is always set to reader . The view field is only populated for permissions
that belong to a view . For more information, see Views .


All the entries in the permissionDetails field have the inherited field set
to true to denote the permission is inherited and that direct access to the
folder contents hasn't been granted.


To grant access to both the folder contents and metadata, set the inheritedPermissionsDisabled field to false or update the role to reader or higher.


Finally, if a permission was first limited by turning off inheritance on a
folder ( inheritedPermissionsDisabled=true ), and then the permission was added
back directly to the folder, the values in the response body become inheritedPermissionsDisabled=true with the view field as unset. If the
folder is in a shared drive, the permissionDetails list has an entry with the inherited field set to false to denote the permission isn't inherited. This
permission grants access to both folder contents and metadata like any other
permission.



### Delete folders with limited access


You can delete folders with limited access using the files.delete() method on the files resource.


In My Drive, only the item's owner can delete a folder hierarchy.
If a user deletes a hierarchy with folders that have limited access and are
owned by others, these folders move to the owner's My Drive.


If the user has the owner role, the entire hierarchy gets deleted.


In shared drives, the organizer role can delete hierarchies even if they
contain folders with limited access. If the fileOrganizer role deletes a
hierarchy that contains folders with limited access, the result depends on if
they were added back as fileOrganizer on the folders with limited access. If
they were, the entire hierarchy gets deleted. If not, the folders with limited
access move to the shared drive's root folder.



## About expansive access


The introduction of folders with limited access broadens the expansive access
model from shared drives to My Drive. Once the access model is
rolled out, having access to a folder means at least the same level of access to
everything in that folder hierarchy. Folders with limited access are the one
exception that allows restricting access to a specific subfolder in both My
Drive and shared drives. This also means that unless your folder
has limited access, you can no longer remove access that's inherited from the
parent folder. Doing so means Drive API returns an error response. To
define more granular access control within a hierarchy, you can set limited
access on the folder.



### Adapt to expansive access


To make it easier for developers to adapt to expansive access, several
improvements were made to the Google Drive API:


1. The permissionDetails[] field on the permissions resource is now
populated for items in My Drive. Previously, the fields were
either unset or replicated from the teamDrivePermissionDetails field where
appropriate. Only the permissionType and inherited fields in
My Drive are populated. The permissionDetails[].inherited field indicates if a permission is
inherited from the item's parent. It lets you detect if certain roles (such
as reader ) are inherited from the parent, and if a higher role (such as writer ) is granted on the item directly. When viewing the permissions for an item, the permissionDetails[] field
might contain multiple entries. If present, there's one entry for the
permission directly on the item for that scope, and then entries for the
inherited or member permissions on the item.

2. Developers can opt in to expansive access API behavior in My
Drive ahead of any future mandatory enforcement. You can set
the enforceExpansiveAccess request parameter to true so that future
changes to expansive access don't affect your app. Opting in now means the API operates the same for items in My
Drive as it already does for items in shared drives. For
example, any attempt to restrict access below the inherited role fails when
calling permissions.update() .
Similarly, a call to permissions.delete() fails if the permission is inherited.




### Detect and prevent restricted access


Your app might be creating restricted access (where a user has access to the
parent My Drive folder but not to a file within that folder) on
your My Drive folders when using the permissions.update() or permissions.delete() methods.


When using these methods, you can review the fields on the permissions resource to see where a request might create restricted access and avoid sending
such requests. To detect this situation, use the enforceExpansiveAccess field on your request.


Additionally, if your app has already created restricted access on your folders,
you can take the following steps:


1. Traverse the folder hierarchy to remove the restricted access. In its place,
you should set limited folder access .

2. If the item you're trying to unshare is a file, you can create an
intermediate folder, set limited access on it, and move the file inside the
new folder.

3. If you don't want to use limited access folders but must remove some access,
you can move the file to a private folder (such as the My
Drive root folder). You can then create a
shortcut to the item's original location so
users can still use it.




## Related topics


- Share files, folders, and drives

- How file access works in shared drives

- Learn about folders with limited access

## Transfer file ownership

_Source: https://developers.google.com/workspace/drive/api/guides/transfer-file_

You own the files that you create or upload on Google Drive. You can transfer
ownership of these files to another account.



## Transfer file ownership to another Google Workspace account in the same organization


Ownership of files existing in "My Drive" can be transferred from
one Google Workspace
account to another account in the same organization. An organization that owns a shared
drive owns the files within it. Therefore, ownership transfers are not supported
for files and folders in shared drives. Organizers of a shared drive can move
items from that shared drive and into their own "My Drive" which
transfers the ownership to them.


To transfer ownership of a file in "My Drive", do one of the
following:


- Create a file permission
granting a specific user ( type=user ) owner access ( role=owner ).

- Update an existing file permission with role=owner and transfer ownership
to the specified user ( transferOwnership=true ).



Note:

When a file is transferred, the previous owner's role is downgraded to

`writer`
.


## Transfer file ownership from one consumer account to another


Ownership of files can be transferred between one consumer
account to another. However, Drive doesn't transfer ownership of a file
between the two consumer accounts until the prospective owner explicitly
consents to the transfer. To transfer file ownership from one consumer account
to another:


1. The current owner initiates an ownership transfer by creating or updating
the prospective owner's file permission. The permission must include these
settings: role=writer , type=user , and pendingOwner=true . If the
current owner is creating a permission for the prospective owner, an email
notification is sent to the prospective owner indicating that they're being
asked to assume ownership of the file.

2. The prospective owner accepts the ownership transfer request by creating or
updating their file permission. The permission must include these settings: role=owner and transferOwnership=true . If the prospective owner is
creating a new permission, an email notification is sent to the previous
owner indicating that ownership has been transferred.



When a file is transferred, the previous owner's role is downgraded to writer .


Note:

Service accounts don't have storage quota in Drive, so ownership transfers to service accounts will fail.


## Related topics


- Share files, folders, and drives

## Protect file content from modification

_Source: https://developers.google.com/workspace/drive/api/guides/content-restrictions_

The Google Drive API supports several ways to prevent file modification, including
file content restriction and prohibiting the option to download, print, or copy
files.



## Make files read-only with Drive content restrictions


You can add a content restriction to a Google Drive file to prevent users from
doing the following:


- Modifying the title

- Making content edits

- Uploading a revision

- Adding or modifying comments



A content restriction isn't an access restriction. While users cannot modify the
file's content, other operations are still allowed, based on their access level.
For example, a user with edit access can still move an item or change its
sharing settings.


To add or remove a content restriction on a file in Drive, a user
must have the associated permissions . For a
file or folder in My Drive or a shared drive with the capabilities.canModifyEditorContentRestriction , you must have role=writer assigned. For a file or folder in My Drive or a shared drive with
an ownerRestricted content restriction, you must own the file or have role=organizer . To view an item with a content restriction, users must have role=reader or higher. For a complete list of roles, see Roles and
permissions . To update permissions on a file, see Update permissions .


You can use the contentRestrictions.readOnly boolean field on the files resource to set a content
restriction. Note that setting a content restriction on an item overwrites the
existing one.



### Scenarios for content restrictions


A content restriction on a Drive item signals to users that the
contents shouldn't be changed. This can be for some of the following reasons:


- Pausing work on a collaborative document during review or audit periods.

- Setting an item to a finalized state, such as approved.

- Preventing changes during a sensitive meeting.

- Prohibiting external changes for workflows handled by automated systems.

- Restricting edits by Google Apps Script and Google Workspace add-ons.

- Avoiding accidental edits to a document.



Note though that while content restrictions can help manage content, it's not
meant to prevent users with sufficient permissions from continuing to work on an
item. Additionally, it isn't a way to create an immutable record.
Drive content restrictions are mutable, so a content restriction
on an item doesn't guarantee that the item never changes.



### Manage files with content restrictions


Google Docs, Google Sheets, and Google Slides, as well as all other files,
can contain content restrictions.


A content restriction on an item prevents changes to its title and content,
including:


- Comments and suggestions (on Docs, Sheets,
Slides, and binary files)

- Revisions of a binary file

- Text and formatting in Docs

- Text or formulas in Sheets, a Sheets layout,
and instances in Sheets

- All content in Slides, as well as the order and number of the
slides



Important:

The preceding doesn't include the results of calculations in Sheets, so the displayed contents of a sheet with a content restriction might change if there are formulas in a sheet that reference external data sources.

Certain file types can't contain a content restriction. A few examples are:


- Google Forms

- Google Sites

- Google Drawings

- Shortcuts and third-party shortcuts. For more information, see Create a
shortcut file to content stored by your
app and Create a shortcut to a
Drive file .




### Add a content restriction


To add a file content restriction, use the files.update method with the contentRestrictions.readOnly field set to true . Add an optional reason for
why you're adding the restriction, such as "Finalized contract." The following
code sample shows how to add a content restriction:



### Java


````
File
 
updatedFile
 
=


  
new
 
File
()


      
.
setContentRestrictions
(


          
ImmutableList
.
of
(
new
 
ContentRestriction
().
setReadOnly
(
true
).
setReason
(
"Finalized contract."
));



File
 
response
 
=
 
driveService
.
files
().
update
(
"
FILE_ID
"
,
 
updatedFile
).
setFields
(
"contentRestrictions"
).
execute
();
````



### Python


````
content_restriction
 
=
 
{
'readOnly'
:
 
True
,
 
'reason'
:
'Finalized contract.'
}



response
 
=
 
drive_service
.
files
()
.
update
(
fileId
=
"
FILE_ID
"
,
 
body
 
=
 
{
'contentRestrictions'
 
:
 
[
content_restriction
]},
 
fields
 
=
 
"contentRestrictions"
)
.
execute
();
````



### Node.js


````
/**


* Set a content restriction on a file.


* @return{obj} updated file


**/


async
 
function
 
addContentRestriction
()
 
{


  
// Get credentials and build service


  
// TODO (developer) - Use appropriate auth mechanism for your app



  
const
 
{
GoogleAuth
}
 
=
 
require
(
'google-auth-library'
);


  
const
 
{
google
}
 
=
 
require
(
'googleapis'
);



  
const
 
auth
 
=
 
new
 
GoogleAuth
({
scopes
:
 
'https://www.googleapis.com/auth/drive'
});


  
const
 
service
 
=
 
google
.
drive
({
version
:
 
'v3'
,
 
auth
});


  
const
 
contentRestriction
 
=
 
{


    
'readOnly'
:
 
True
,


    
'reason'
:
 
'Finalized contract.'
,


  
};


  
const
 
updatedFile
 
=
 
{


    
'contentRestrictions'
:
 
[
contentRestriction
],


  
};


  
try
 
{


    
const
 
response
 
=
 
await
 
service
.
files
.
update
({


      
fileId
:
 
'
FILE_ID
'
,


      
resource
:
 
updatedFile
,


      
fields
:
 
'contentRestrictions'
,


    
});


    
return
 
response
;


  
}
 
catch
 
(
err
)
 
{


    
// TODO (developer) - Handle error


    
throw
 
err
;


  
}


}
````


Replace FILE_ID with the fileId of the file that you want to
modify.


When you run the sample code, the file is content restricted and a lock symbol
( lock ) appears beside the filename within
the Google Drive user interface
(UI) . The file is now read-only.


Figure 1.

A file with a content restriction within a Drive file list.


### Remove a content restriction


To remove a file content restriction, use the files.update method with the contentRestrictions.readOnly field set to false . The following code sample
shows how to remove a content restriction:



### Java


````
File
 
updatedFile
 
=


new
 
File
()


    
.
setContentRestrictions
(


        
ImmutableList
.
of
(
new
 
ContentRestriction
().
setReadOnly
(
false
));



File
 
response
 
=
 
driveService
.
files
().
update
(
"
FILE_ID
"
,
 
updatedFile
).
setFields
(
"contentRestrictions"
).
execute
();
````



### Python


````
content_restriction
 
=
 
{
'readOnly'
:
 
False
}



response
 
=
 
drive_service
.
files
()
.
update
(
fileId
=
"
FILE_ID
"
,
 
body
 
=
 
{
'contentRestrictions'
 
:
 
[
content_restriction
]},
 
fields
 
=
 
"contentRestrictions"
)
.
execute
();
````



### Node.js


````
/**


* Remove a content restriction on a file.


* @return{obj} updated file


**/


async
 
function
 
removeContentRestriction
()
 
{


  
// Get credentials and build service


  
// TODO (developer) - Use appropriate auth mechanism for your app



  
const
 
{
GoogleAuth
}
 
=
 
require
(
'google-auth-library'
);


  
const
 
{
google
}
 
=
 
require
(
'googleapis'
);



  
const
 
auth
 
=
 
new
 
GoogleAuth
({
scopes
:
 
'https://www.googleapis.com/auth/drive'
});


  
const
 
service
 
=
 
google
.
drive
({
version
:
 
'v3'
,
 
auth
});


  
const
 
contentRestriction
 
=
 
{


    
'readOnly'
:
 
False
,


  
};


  
const
 
updatedFile
 
=
 
{


    
'contentRestrictions'
:
 
[
contentRestriction
],


  
};


  
try
 
{


    
const
 
response
 
=
 
await
 
service
.
files
.
update
({


      
fileId
:
 
'
FILE_ID
'
,


      
resource
:
 
updatedFile
,


      
fields
:
 
'contentRestrictions'
,


    
});


    
return
 
response
;


  
}
 
catch
 
(
err
)
 
{


    
// TODO (developer) - Handle error


    
throw
 
err
;


  
}


}
````


Replace FILE_ID with the fileId of the file that you want to
modify.


When you run the sample code, the file is no longer content restricted.


You can also use the Drive UI to remove a content restriction and
allow content editing (provided you have the correct permissions). There are two
options to do this:


1. In Drive, right-click the file with a content restriction and
click Unlock lock_open . Figure 2. Remove a file content restriction within a Drive file list.

2. Open the file with a content restriction and click (Locked mode) lock > Unlock file . Figure 3. Remove a file content restriction within a document.




### Check for a content restriction


To check for a content restriction, use the files.get method with the contentRestrictions returned field. The following code sample shows how to
check the status of a content restriction:



### Java


````
File
 
response
 
=
 
driveService
.
files
().
get
(
"
FILE_ID
"
).
setFields
(
"contentRestrictions"
).
execute
();
````



### Python


````
response
 
=
 
drive_service
.
files
()
.
get
(
fileId
=
"
FILE_ID
"
,
 
fields
 
=
 
"contentRestrictions"
)
.
execute
();
````



### Node.js


````
/**


* Get content restrictions on a file.


* @return{obj} updated file


**/


async
 
function
 
fetchContentRestrictions
()
 
{


  
// Get credentials and build service


  
// TODO (developer) - Use appropriate auth mechanism for your app



  
const
 
{
GoogleAuth
}
 
=
 
require
(
'google-auth-library'
);


  
const
 
{
google
}
 
=
 
require
(
'googleapis'
);



  
const
 
auth
 
=
 
new
 
GoogleAuth
({
scopes
:
 
'https://www.googleapis.com/auth/drive'
});


  
const
 
service
 
=
 
google
.
drive
({
version
:
 
'v3'
,
 
auth
});


  
try
 
{


    
const
 
response
 
=
 
await
 
service
.
files
.
get
({


      
fileId
:
 
'
FILE_ID
'
,


      
fields
:
 
'contentRestrictions'
,


    
});


    
return
 
response
;


  
}
 
catch
 
(
err
)
 
{


    
// TODO (developer) - Handle error


    
throw
 
err
;


  
}


}
````


Replace FILE_ID with the fileId of the file that you want to
check.


When you run the sample code, the method returns a ContentRestriction resource if present.



### Add a content restriction only the file owner can modify


To add a file content restriction so only file owners can toggle the mechanism,
use the files.update method with the contentRestrictions.ownerRestricted boolean field set to true . The following
code sample shows how to add a content restriction for file owners only:



### Java


````
File
 
updatedFile
 
=


  
new
 
File
()


      
.
setContentRestrictions
(


          
ImmutableList
.
of
(
new
 
ContentRestriction
().
setReadOnly
(
true
).
setOwnerRestricted
(
true
).
setReason
(
"Finalized contract."
));



File
 
response
 
=
 
driveService
.
files
().
update
(
"
FILE_ID
"
,
 
updatedFile
).
setFields
(
"contentRestrictions"
).
execute
();
````



### Python


````
content_restriction
 
=
 
{
'readOnly'
:
 
True
,
 
'ownerRestricted'
:
 
True
,
 
'reason'
:
'Finalized contract.'
}



response
 
=
 
drive_service
.
files
()
.
update
(
fileId
=
"
FILE_ID
"
,
 
body
 
=
 
{
'contentRestrictions'
 
:
 
[
content_restriction
]},
 
fields
 
=
 
"contentRestrictions"
)
.
execute
();
````



### Node.js


````
/**


* Set an owner restricted content restriction on a file.


* @return{obj} updated file


**/


async
 
function
 
addOwnerRestrictedContentRestriction
()
 
{


  
// Get credentials and build service


  
// TODO (developer) - Use appropriate auth mechanism for your app



  
const
 
{
GoogleAuth
}
 
=
 
require
(
'google-auth-library'
);


  
const
 
{
google
}
 
=
 
require
(
'googleapis'
);



  
const
 
auth
 
=
 
new
 
GoogleAuth
({
scopes
:
 
'https://www.googleapis.com/auth/drive'
});


  
const
 
service
 
=
 
google
.
drive
({
version
:
 
'v3'
,
 
auth
});


  
const
 
contentRestriction
 
=
 
{


    
'readOnly'
:
 
True
,


    
'ownerRestricted'
:
 
True
,


    
'reason'
:
 
'Finalized contract.'
,


  
};


  
const
 
updatedFile
 
=
 
{


    
'contentRestrictions'
:
 
[
contentRestriction
],


  
};


  
try
 
{


    
const
 
response
 
=
 
await
 
service
.
files
.
update
({


      
fileId
:
 
'
FILE_ID
'
,


      
resource
:
 
updatedFile
,


      
fields
:
 
'contentRestrictions'
,


    
});


    
return
 
response
;


  
}
 
catch
 
(
err
)
 
{


    
// TODO (developer) - Handle error


    
throw
 
err
;


  
}


}
````


Replace FILE_ID with the fileId of the file that you want to
modify.


When you run the sample code, the file is content restricted and only file
owners can remove it. If you're the file owner, an active lock symbol ( lock ) appears beside the filename within the Drive user interface
(UI) . If you're not the owner, the
lock symbol is dimmed.


To remove the ownerRestricted flag, use the files.update method with the contentRestrictions.ownerRestricted field set to false .


Important:

A My Drive file has a single owner so only they can modify the content restriction. A shared drive owns the shared drive file, so any user with

`role=organizer`
permissions on the shared drive can modify or remove the

`ownerRestricted`
flag.


### Content restriction capabilities


A files resource contains a collection of boolean capabilities fields used to indicate whether an action can be performed on a
file.


Content restrictions contain the following capabilities :


- capabilities.canModifyEditorContentRestriction : Whether the current user
can add or modify a content restriction .

- capabilities.canModifyOwnerContentRestriction : Whether the current user
can add or modify an owner content restriction .

- capabilities.canRemoveContentRestriction : Whether the current user can
remove the applied content restriction (if present).



For more information, see Understand file
capabilities .


For an example of retrieving file capabilities , see Get file capabilities .



## Prevent users from downloading, printing, or copying your file


You can limit how users can download, print, and copy files within
Drive, Docs, Sheets, and
Slides.


To determine whether the user can change owner or organizer-applied download
restrictions of a file, check the capabilities.canChangeItemDownloadRestriction boolean field. If capabilities.canChangeItemDownloadRestriction is set to true , download
restrictions can be applied to the file. For more information, see Understand
file capabilities .


To apply download restrictions to a file, set the downloadRestrictions field using the files.update method. You can set the field
using the DownloadRestrictionsMetadata object.


The DownloadRestrictionsMetadata object has two fields: itemDownloadRestriction and effectiveDownloadRestrictionWithContext . Both
fields are readable but only the itemDownloadRestriction can be set. The itemDownloadRestriction field returns a DownloadRestriction object. The DownloadRestriction object has two separate boolean fields: restrictedForReaders and restrictedForWriters .


When setting the itemDownloadRestriction field the download restriction of the
file is applied directly by the owner or organizer. It doesn't account for
shared drive settings or data loss prevention (DLP) rules. For more information,
see About DLP .


If you update the itemDownloadRestriction field by setting the restrictedForWriters field to true , it implies that restrictedForReaders is true . Similarly, setting restrictedForWriters to true and restrictedForReaders to false is equivalent to setting both restrictedForWriters and restrictedForReaders to true .


For the effectiveDownloadRestrictionWithContext field the download restriction
is applied to the file and it accounts for all restriction settings and DLP
rules.


The effectiveDownloadRestrictionWithContext field can be set to either restrictedForWriters or restrictedForReaders . If there's any download or
copy restriction settings for the corresponding roles from file settings, shared
drive settings, or DLP rules (including those ones with context), then the value
is set to true , otherwise it's false .



### Backward compatibility


We recommend that you use the DownloadRestriction object to
enforce how users can download, print, and copy files.


If you want to use the copyRequiresWriterPermission boolean field, the functionality is different for both reading from and writing
to the field.


The retrieved value of the copyRequiresWriterPermission field reflects whether
users with the role=commenter or role=reader permission can download, print,
or copy files within Drive. The field value reflects the
combination of file settings, shared drive settings, or DLP rules. However,
context evaluation for DLP rules isn't included.


Setting the copyRequiresWriterPermission field to false updates both the restrictedForWriters and restrictedForReaders fields to false . This means
download or copy restriction settings are removed for all users.


Warning:

You should only use the legacy

`copyRequiresWriterPermission`
field

or

the

`DownloadRestriction`
object to set download, print, and copy restrictions. The fields are not meant to be used together as the two field values might conflict.


### Fields that control download, print, and copy features


The following table lists files resource fields
that affect download, print, and copy functionality:


| Field | Description | Version |

| --- | --- | --- |

| capabilities.canCopy | Whether the current user can copy a file. | v2 & v3 |

| capabilities.canDownload | Whether the current user can download a file. | v2 & v3 |

| capabilities.canChangeCopyRequiresWriterPermission | Whether the current user can change the copyRequiresWriterPermission restriction of a file. | v2 & v3 |

| capabilities.canChangeItemDownloadRestriction | Whether the current user can change the download restriction of a file. | v3 only |

| copyRequiresWriterPermission | Whether the options to copy, print, or download this file, should be disabled for readers and commenters. | v2 & v3 |

| downloadRestrictions | The download restrictions applied on a file. | v3 only |



Note:

Within the

`files`
resource several download and copy fields are marked as deprecated. This means the field is obsolete. However, a deprecated field might still be available and functional through the deprecated phase. Continued or future use of deprecated fields is discouraged. Developers should plan to migrate to the preferred alternative mentioned in the deprecated field's description.


## Related topics


- Roles and permissions

## Access link-shared files using resource keys

_Source: https://developers.google.com/workspace/drive/api/guides/resource-keys_

You can share Google Drive files and folders with others using the Drive UI or through the Google Drive API . When you share from
Drive, you can control whether people can edit, comment on, or
only open the file.


A resource key helps protect your file from unintended access. Resource keys
are an additional parameter that are passed so users can access certain files
that have been shared using a link. Users who haven't viewed the file before
must provide the resource key to gain access. Those who have recently viewed the
file, or have direct access, don't need the resource key to access the file.


A Drive file that's shared with a link can only be discovered by
users that can access the file as a result of a type=user or type=group permissions resource. Requests from users
that only have access to these link-shared files using a type=domain or type=anyone permission might require a resource key.


For more information about permissions, see Share files, folders and drives . For a complete list of roles and the operations
permitted by each, see Roles & permissions .



## Read the resource key from the file


The Drive API returns a file's resource key on the read-only resourceKey field of the files resource.


If the file is a Drive shortcut , the
resource key for the shortcut target is returned on the read-only shortcutDetails.targetResourceKey field.


Fields in the files resource that return URLs,
such as exportLinks , webContentLink , and webViewLink , also include the resourceKey . Clients that integrate with the Drive UI can also
use resourceKeys within the state parameter. For more information, see Download and export
files .



## Set the resource key on the request


Resource keys for any files referenced by requests to the Drive API
are set on the X-Goog-Drive-Resource-Keys HTTP header.


Requests to the Drive API can specify one or more resource keys with
the X-Goog-Drive-Resource-Keys HTTP header.



### Syntax


A file ID and resource key pair are set on the header using a forward slash
( / ) separator. The header is built by combining all the file ID and resource
key pairs using comma ( , ) separators.


For example, consider a request to move file fileId1 from folder fileId2 to
folder fileId3 . Assume the resource keys for these three files are resourceKey1 , resourceKey2 , and resourceKey3 , respectively. The header
built from these values using a forward slash and comma separators is:


````
    X-Goog-Drive-Resource-Keys: fileId1/resourceKey1,fileId2/resourceKey2,fileId3/resourceKey3
````



### Related topics


- Share files, folders and drives

- Download and export files

- Protect file content

- Configure a Drive UI integration

## Store application-specific data

_Source: https://developers.google.com/workspace/drive/api/guides/appdata_

The application data folder is a special hidden folder that your app can use
to store application-specific data, such as configuration files. The application
data folder is automatically created when you attempt to create a file in it.
Use this folder to store any files that the user shouldn't directly interact
with. This folder is only accessible by your app and its contents are hidden
from the user and from other Google Drive apps.


The application data folder is deleted when a user uninstalls your app from
their My Drive. Users can also delete your app's data folder manually.



## Application data folder scope


Before you can access the application data folder, you must request access to
the https://www.googleapis.com/auth/drive.appdata non-sensitive scope. For
more information about scopes and how to request access to them, refer to Choose Google Drive API scopes . For more
information about specific OAuth 2.0 scopes, see OAuth 2.0 Scopes for Google
APIs .



## How the application data folder differs from Drive backup folders


The application data folder is separate from your Drive backup
folder.


The application data folder is a configuration folder that's created per
third-party app and each third-party app can store data in it. Only the
application that created the data in the appDataFolder can access it. The
folder can't be accessed using the Drive user interface (UI).


Your Drive backup
folder is a reserved folder that
Drive writes device backups to and it's visible in the
Drive UI.



## Constraints on the application data folder


The following constraints are enforced when working with the application data
folder:


- You can't share files or folders inside the application data folder.
Attempting to do so generates a notSupportedForAppDataFolderFiles error
with the following error message: "Method not supported for files within the
Application Data folder."

- You can't move files in the appDataFolder between storage locations
(spaces). Attempting to do so generates a notSupportedForAppDataFolderFiles error with the following error message:
"Method not supported for files within the Application Data folder." For
more information, see File
organization .

- You can't trash files or folders inside the application data folder.
Attempting to do so generates a notSupportedForAppDataFolderFiles error
with the following error message: "Files within the Application Data folder
cannot be trashed."




## Create a file in the application data folder


To create a file in the application data folder, specify appDataFolder in the parents property of the file and use the files.create method to create the file in
the folder.


The following code sample shows how to insert a file into a folder using a
client library and a curl command.


Note:

If you're using the older Drive API v2, you can find code samples in

GitHub

. Learn how to

migrate to Drive API v3

.


### Java


drive/snippets/drive_v3/src/main/java/UploadAppData.java

View on GitHub

Code

````
import
 
com.google.api.client.googleapis.json.GoogleJsonResponseException
;


import
 
com.google.api.client.http.FileContent
;


import
 
com.google.api.client.http.HttpRequestInitializer
;


import
 
com.google.api.client.http.javanet.NetHttpTransport
;


import
 
com.google.api.client.json.gson.GsonFactory
;


import
 
com.google.api.services.drive.Drive
;


import
 
com.google.api.services.drive.DriveScopes
;


import
 
com.google.api.services.drive.model.File
;


import
 
com.google.auth.http.HttpCredentialsAdapter
;


import
 
com.google.auth.oauth2.GoogleCredentials
;


import
 
java.io.IOException
;


import
 
java.util.Arrays
;


import
 
java.util.Collections
;



/**


 * Class to demonstrate use-case of create file in the application data folder.


 */


public
 
class
 
UploadAppData
 
{



  
/**


   * Creates a file in the application data folder.


   *


   * @return Created file's Id.


   */


  
public
 
static
 
String
 
uploadAppData
()
 
throws
 
IOException
 
{


        
/*Load pre-authorized user credentials from the environment.


        TODO(developer) - See https://developers.google.com/identity for


        guides on implementing OAuth2 for your application.*/


    
GoogleCredentials
 
credentials
 
=
 
null
;


    
try
 
{


      
credentials
 
=
 
GoogleCredentials
.
getApplicationDefault
()


          
.
createScoped
(
Arrays
.
asList
(
DriveScopes
.
DRIVE_APPDATA
));


    
}
 
catch
 
(
IOException
 
e
)
 
{


      
e
.
printStackTrace
();


    
}


    
HttpRequestInitializer
 
requestInitializer
 
=
 
new
 
HttpCredentialsAdapter
(


        
credentials
);



    
// Build a new authorized API client service.


    
Drive
 
service
 
=
 
new
 
Drive
.
Builder
(
new
 
NetHttpTransport
(),


        
GsonFactory
.
getDefaultInstance
(),


        
requestInitializer
)


        
.
setApplicationName
(
"Drive samples"
)


        
.
build
();


    
try
 
{


      
// File's metadata.


      
File
 
fileMetadata
 
=
 
new
 
File
();


      
fileMetadata
.
setName
(
"config.json"
);


      
fileMetadata
.
setParents
(
Collections
.
singletonList
(
"appDataFolder"
));


      
java
.
io
.
File
 
filePath
 
=
 
new
 
java
.
io
.
File
(
"files/config.json"
);


      
FileContent
 
mediaContent
 
=
 
new
 
FileContent
(
"application/json"
,
 
filePath
);


      
File
 
file
 
=
 
service
.
files
().
create
(
fileMetadata
,
 
mediaContent
)


          
.
setFields
(
"id"
)


          
.
execute
();


      
System
.
out
.
println
(
"File ID: "
 
+
 
file
.
getId
());


      
return
 
file
.
getId
();


    
}
 
catch
 
(
GoogleJsonResponseException
 
e
)
 
{


      
// TODO(developer) - handle error appropriately


      
System
.
err
.
println
(
"Unable to create file: "
 
+
 
e
.
getDetails
());


      
throw
 
e
;


    
}


  
}



}
````



### Python


drive/snippets/drive-v3/app_data_snippet/upload_appdata.py

View on GitHub

Code

````
import
 
google.auth


from
 
googleapiclient.discovery
 
import
 
build


from
 
googleapiclient.errors
 
import
 
HttpError


from
 
googleapiclient.http
 
import
 
MediaFileUpload




def
 
upload_appdata
():


  
"""Insert a file in the application data folder and prints file Id.


  Returns : ID's of the inserted files



  Load pre-authorized user credentials from the environment.


  TODO(developer) - See https://developers.google.com/identity


  for guides on implementing OAuth2 for the application.


  """

  
creds
,
 
_
 
=
 
google
.
auth
.
default
()


  
try
:

    
# call drive api client

    
service
 
=
 
build
(
"drive"
,
 
"v3"
,
 
credentials
=
creds
)


    
# pylint: disable=maybe-no-member

    
file_metadata
 
=
 
{
"name"
:
 
"abc.txt"
,
 
"parents"
:
 
[
"appDataFolder"
]}

    
media
 
=
 
MediaFileUpload
(
"abc.txt"
,
 
mimetype
=
"text/txt"
,
 
resumable
=
True
)

    
file
 
=
 
(

        
service
.
files
()

        
.
create
(
body
=
file_metadata
,
 
media_body
=
media
,
 
fields
=
"id"
)

        
.
execute
()

    
)

    
print
(
f
'File ID: 
{
file
.
get
(
"id"
)
}
'
)


  
except
 
HttpError
 
as
 
error
:

    
print
(
f
"An error occurred: 
{
error
}
"
)

    
file
 
=
 
None


  
return
 
file
.
get
(
"id"
)




if
 
__name__
 
==
 
"__main__"
:

  
upload_appdata
()
````



### Node.js


drive/snippets/drive_v3/appdata_snippets/upload_appdata.js

View on GitHub

Code

````
import
 
fs
 
from
 
'node:fs'
;


import
 
{
GoogleAuth
}
 
from
 
'google-auth-library'
;


import
 
{
google
}
 
from
 
'googleapis'
;



/**


 * Uploads a file to the application data folder.


 * @return {Promise<string>} The ID of the uploaded file.


 */


async
 
function
 
uploadAppdata
()
 
{


  
// Authenticate with Google and get an authorized client.


  
// TODO (developer): Use an appropriate auth mechanism for your app.


  
const
 
auth
 
=
 
new
 
GoogleAuth
({


    
scopes
:
 
'https://www.googleapis.com/auth/drive.appdata'
,


  
});



  
// Create a new Drive API client (v3).


  
const
 
service
 
=
 
google
.
drive
({
version
:
 
'v3'
,
 
auth
});



  
// The metadata for the file to be uploaded.


  
const
 
fileMetadata
 
=
 
{


    
name
:
 
'config.json'
,


    
parents
:
 
[
'appDataFolder'
],


  
};



  
// The media content to be uploaded.


  
const
 
media
 
=
 
{


    
mimeType
:
 
'application/json'
,


    
body
:
 
fs
.
createReadStream
(
'files/config.json'
),


  
};



  
// Upload the file to the application data folder.


  
const
 
file
 
=
 
await
 
service
.
files
.
create
({


    
requestBody
:
 
fileMetadata
,


    
media
,


    
fields
:
 
'id'
,


  
});



  
// Print the ID of the uploaded file.


  
console
.
log
(
'File Id:'
,
 
file
.
data
.
id
);


  
if
 
(
!
file
.
data
.
id
)
 
{


    
throw
 
new
 
Error
(
'File ID not found.'
);


  
}


  
return
 
file
.
data
.
id
;


}
````



### PHP


drive/snippets/drive_v3/src/DriveUploadAppData.php

View on GitHub

Code

````
<
?php


use Google\Client;


use Google\Service\Drive;


function uploadAppData()


{


   try {


    $client = new Client();


    $client->useApplicationDefaultCredentials();


    $client->addScope(Drive::DRIVE);


    $client->addScope(Drive::DRIVE_APPDATA);


    $driveService = new Drive($client);


    $fileMetadata = new Drive\DriveFile(array(


        'name' => 'config.json',


        'parents' => array('appDataFolder')


    ));


    $content = file_get_contents('../files/config.json');


    $file = $driveService->files->create($fileMetadata, array(


        'data' => $content,


        'mimeType' => 'application/json',


        'uploadType' => 'multipart',


        'fields' => 'id'));


    printf("File ID: %s\n", $file->id);


    return $file->id;



   } catch(Exception $e) {


     echo "Error Message: ".$e;


   }  


}
````



### .NET


drive/snippets/drive_v3/DriveV3Snippets/UploadAppData.cs

View on GitHub

Code

````
using
 
Google.Apis.Auth.OAuth2
;


using
 
Google.Apis.Drive.v3
;


using
 
Google.Apis.Services
;



namespace
 
DriveV3Snippets


{


    
// Class of demonstrate the use of Drive upload app data. 


    
public
 
class
 
UploadAppData


    
{


        
/// <summary>


        
/// Insert a file in the application data folder and prints file Id.


        
/// </summary>


        
/// <param name="filePath">File path to upload.</param>


        
/// <returns>ID's of the inserted files, null otherwise.</returns>


        
public
 
static
 
string
 
DriveUploadAppData
(
string
 
filePath
)


        
{


            
try


            
{


                
/* Load pre-authorized user credentials from the environment.


                 TODO(developer) - See https://developers.google.com/identity for


                 guides on implementing OAuth2 for your application. */


                
GoogleCredential
 
credential
 
=
 
GoogleCredential
.
GetApplicationDefault
()


                    
.
CreateScoped
(
DriveService
.
Scope
.
DriveAppdata
);



                
// Create Drive API service.


                
var
 
service
 
=
 
new
 
DriveService
(
new
 
BaseClientService
.
Initializer


                
{


                    
HttpClientInitializer
 
=
 
credential
,


                    
ApplicationName
 
=
 
"Drive API Snippets"


                
});


                
var
 
fileMetadata
 
=
 
new
 
Google
.
Apis
.
Drive
.
v3
.
Data
.
File
()


                
{


                    
Name
 
=
 
"config.json"
,


                    
Parents
 
=
 
new
 
List<string>
()


                    
{


                        
"appDataFolder"


                    
}


                
};


                
FilesResource
.
CreateMediaUpload
 
request
;


                
using
 
(
var
 
stream
 
=
 
new
 
FileStream
(
filePath
,


                           
FileMode
.
Open
))


                
{


                    
request
 
=
 
service
.
Files
.
Create
(


                        
fileMetadata
,
 
stream
,
 
"application/json"
);


                    
request
.
Fields
 
=
 
"id"
;


                    
request
.
Upload
();


                
}



                
var
 
file
 
=
 
request
.
ResponseBody
;


                
// Prints the file id.


                
Console
.
WriteLine
(
"File ID: "
 
+
 
file
.
Id
);


                
return
 
file
.
Id
;


            
}


            
catch
 
(
Exception
 
e
)


            
{


                
// TODO(developer) - handle error appropriately


                
if
 
(
e
 
is
 
AggregateException
)


                
{


                    
Console
.
WriteLine
(
"Credential Not found"
);


                
}


                
else


                
{


                    
throw
;


                
}


            
}


            
return
 
null
;


        
}


    
}


}
````



### curl


Request :


````
curl
 
--request
 
POST
 
\


'https://content.googleapis.com/drive/v3/files'
 
\


    
-H
 
'authorization: Bearer 
ACCESS_TOKEN
'
 
\


    
-H
 
'content-type: application/json'
 
\


    
-H
 
'x-origin: https://explorer.apis.google.com'
 
\


    
--data-raw
 
'{"name": "config.json", "parents":["appDataFolder"]}'
````


Replace ACCESS_TOKEN with your app's OAuth
2.0 token.


Response :


````
{


    
"kind"
:
 
"drive#file"
,


    
"id"
:
 
FILE_ID
,


    
"name"
:
 
"config.json"
,


    
"mimeType"
:
 
"application/json"


}
````


For further information on creating files in folders, refer to Create and
populate folders .



## Search for files in the application data folder


To search for files in the application data folder, set the spaces field to appDataFolder and use the files.list method.


The following code sample shows how to search for files in the application data
folder using a client library and a curl command.


Note:

If you're using the older Drive API v2, you can find code samples in

GitHub

. Learn how to

migrate to Drive API v3

.


### Java


drive/snippets/drive_v3/src/main/java/ListAppData.java

View on GitHub

Code

````
import
 
com.google.api.client.googleapis.json.GoogleJsonResponseException
;


import
 
com.google.api.client.http.HttpRequestInitializer
;


import
 
com.google.api.client.http.javanet.NetHttpTransport
;


import
 
com.google.api.client.json.gson.GsonFactory
;


import
 
com.google.api.services.drive.Drive
;


import
 
com.google.api.services.drive.DriveScopes
;


import
 
com.google.api.services.drive.model.File
;


import
 
com.google.api.services.drive.model.FileList
;


import
 
com.google.auth.http.HttpCredentialsAdapter
;


import
 
com.google.auth.oauth2.GoogleCredentials
;


import
 
java.io.IOException
;


import
 
java.util.Arrays
;



/**


 * Class to demonstrate use-case of list 10 files in the application data folder.


 */


public
 
class
 
ListAppData
 
{



  
/**


   * list down files in the application data folder.


   *


   * @return list of 10 files.


   */


  
public
 
static
 
FileList
 
listAppData
()
 
throws
 
IOException
 
{


        
/*Load pre-authorized user credentials from the environment.


        TODO(developer) - See https://developers.google.com/identity for


        guides on implementing OAuth2 for your application.*/


    
GoogleCredentials
 
credentials
 
=
 
null
;


    
try
 
{


      
credentials
 
=
 
GoogleCredentials
.
getApplicationDefault
()


          
.
createScoped
(
Arrays
.
asList
(
DriveScopes
.
DRIVE_APPDATA
));


    
}
 
catch
 
(
IOException
 
e
)
 
{


      
e
.
printStackTrace
();


    
}


    
HttpRequestInitializer
 
requestInitializer
 
=
 
new
 
HttpCredentialsAdapter
(


        
credentials
);



    
// Build a new authorized API client service.


    
Drive
 
service
 
=
 
new
 
Drive
.
Builder
(
new
 
NetHttpTransport
(),


        
GsonFactory
.
getDefaultInstance
(),


        
requestInitializer
)


        
.
setApplicationName
(
"Drive samples"
)


        
.
build
();


    
try
 
{


      
FileList
 
files
 
=
 
service
.
files
().
list
()


          
.
setSpaces
(
"appDataFolder"
)


          
.
setFields
(
"nextPageToken, files(id, name)"
)


          
.
setPageSize
(
10
)


          
.
execute
();


      
for
 
(
File
 
file
 
:
 
files
.
getFiles
())
 
{


        
System
.
out
.
printf
(
"Found file: %s (%s)\n"
,


            
file
.
getName
(),
 
file
.
getId
());


      
}



      
return
 
files
;


    
}
 
catch
 
(
GoogleJsonResponseException
 
e
)
 
{


      
// TODO(developer) - handle error appropriately


      
System
.
err
.
println
(
"Unable to list files: "
 
+
 
e
.
getDetails
());


      
throw
 
e
;


    
}


  
}



}
````



### Python


drive/snippets/drive-v3/app_data_snippet/list_appdata.py

View on GitHub

Code

````
import
 
google.auth


from
 
googleapiclient.discovery
 
import
 
build


from
 
googleapiclient.errors
 
import
 
HttpError




def
 
list_appdata
():


  
"""List all files inserted in the application data folder


  prints file titles with Ids.


  Returns : List of items



  Load pre-authorized user credentials from the environment.


  TODO(developer) - See https://developers.google.com/identity


  for guides on implementing OAuth2 for the application.


  """

  
creds
,
 
_
 
=
 
google
.
auth
.
default
()


  
try
:

    
# call drive api client

    
service
 
=
 
build
(
"drive"
,
 
"v3"
,
 
credentials
=
creds
)


    
# pylint: disable=maybe-no-member

    
response
 
=
 
(

        
service
.
files
()

        
.
list
(

            
spaces
=
"appDataFolder"
,

            
fields
=
"nextPageToken, files(id, name)"
,

            
pageSize
=
10
,

        
)

        
.
execute
()

    
)

    
for
 
file
 
in
 
response
.
get
(
"files"
,
 
[]):

      
# Process change

      
print
(
f
'Found file: 
{
file
.
get
(
"name"
)
}
, 
{
file
.
get
(
"id"
)
}
'
)


  
except
 
HttpError
 
as
 
error
:

    
print
(
f
"An error occurred: 
{
error
}
"
)

    
response
 
=
 
None


  
return
 
response
.
get
(
"files"
)




if
 
__name__
 
==
 
"__main__"
:

  
list_appdata
()
````



### Node.js


drive/snippets/drive_v3/appdata_snippets/list_appdata.js

View on GitHub

Code

````
/**


 * Copyright 2022 Google LLC


 *


 * Licensed under the Apache License, Version 2.0 (the "License");


 * you may not use this file except in compliance with the License.


 * You may obtain a copy of the License at


 *


 *     https://www.apache.org/licenses/LICENSE-2.0


 *


 * Unless required by applicable law or agreed to in writing, software


 * distributed under the License is distributed on an "AS IS" BASIS,


 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.


 * See the License for the specific language governing permissions and


 * limitations under the License.


 */




import
 
{
GoogleAuth
}
 
from
 
'google-auth-library'
;


import
 
{
google
}
 
from
 
'googleapis'
;



/**


 * Lists all files in the application data folder.


 * @return {Promise<object[]>} A list of files.


 */


async
 
function
 
listAppdata
()
 
{


  
// Authenticate with Google and get an authorized client.


  
// TODO (developer): Use an appropriate auth mechanism for your app.


  
const
 
auth
 
=
 
new
 
GoogleAuth
({


    
scopes
:
 
'https://www.googleapis.com/auth/drive.appdata'
,


  
});



  
// Create a new Drive API client (v3).


  
const
 
service
 
=
 
google
.
drive
({
version
:
 
'v3'
,
 
auth
});



  
// List the files in the application data folder.


  
const
 
result
 
=
 
await
 
service
.
files
.
list
({


    
spaces
:
 
'appDataFolder'
,


    
fields
:
 
'nextPageToken, files(id, name)'
,


    
pageSize
:
 
100
,


  
});



  
// Print the name and ID of each file.


  
(
result
.
data
.
files
 
??
 
[]).
forEach
((
file
)
 
=
>
 
{


    
console
.
log
(
'Found file:'
,
 
file
.
name
,
 
file
.
id
);


  
});



  
return
 
result
.
data
.
files
 
??
 
[];


}



export
 
{
listAppdata
};
````



### PHP


drive/snippets/drive_v3/src/DriveListAppData.php

View on GitHub

Code

````
<
?php


use Google\Client;


use Google\Service\Drive;


function listAppData()


{


    try {


        $client = new Client();


        $client->useApplicationDefaultCredentials();


        $client->addScope(Drive::DRIVE);


        $driveService = new Drive($client);


        $response = $driveService->files->listFiles(array(


            'spaces' => 'appDataFolder',


            'fields' => 'nextPageToken, files(id, name)',


            'pageSize' => 10


        ));


        foreach ($response->files as $file) {


            printf("Found file: %s (%s)", $file->name, $file->id);


        }


        return $response->files;



    }catch(Exception $e) {


        echo "Error Message: ".$e;


    }



}
````



### .NET


drive/snippets/drive_v3/DriveV3Snippets/ListAppData.cs

View on GitHub

Code

````
using
 
Google.Apis.Auth.OAuth2
;


using
 
Google.Apis.Drive.v3
;


using
 
Google.Apis.Drive.v3.Data
;


using
 
Google.Apis.Services
;



namespace
 
DriveV3Snippets


{


    
// Class to demonstrate use-case of Drive's list files in the application data folder.


    
public
 
class
 
ListAppData


    
{


        
/// <summary>


        
/// List down files in the application data folder.


        
/// </summary>


        
/// <returns>list of 10 files, null otherwise.</returns>


        
public
 
static
 
FileList
 
DriveListAppData
()


        
{


            
try


            
{


                
/* Load pre-authorized user credentials from the environment.


                 TODO(developer) - See https://developers.google.com/identity for


                 guides on implementing OAuth2 for your application. */


                
GoogleCredential
 
credential
 
=
 
GoogleCredential
.
GetApplicationDefault
()


                    
.
CreateScoped
(
DriveService
.
Scope
.
DriveAppdata
);



                
// Create Drive API service.


                
var
 
service
 
=
 
new
 
DriveService
(
new
 
BaseClientService
.
Initializer


                
{


                    
HttpClientInitializer
 
=
 
credential
,


                    
ApplicationName
 
=
 
"Drive API Snippets"


                
});



                
var
 
request
 
=
 
service
.
Files
.
List
();


                
request
.
Spaces
 
=
 
"appDataFolder"
;


                
request
.
Fields
 
=
 
"nextPageToken, files(id, name)"
;


                
request
.
PageSize
 
=
 
10
;


                
var
 
result
 
=
 
request
.
Execute
();


                
foreach
 
(
var
 
file
 
in
 
result
.
Files
)


                
{


                    
// Prints the list of 10 file names.


                    
Console
.
WriteLine
(
"Found file: {0} ({1})"
,
 
file
.
Name
,
 
file
.
Id
);


                
}


                
return
 
result
;


            
}


            
catch
 
(
Exception
 
e
)


            
{


                
// TODO(developer) - handle error appropriately


                
if
 
(
e
 
is
 
AggregateException
)


                
{


                    
Console
.
WriteLine
(
"Credential Not found"
);


                
}


                
else


                
{


                    
throw
;


                
}


            
}


            
return
 
null
;


        
}


    
}


}
````



### curl


Request :


````
curl
 
\


    
-X
 
GET
 
\


    
-H
 
"Authorization: Bearer 
ACCESS_TOKEN
"
 
\


    
"https://www.googleapis.com/drive/v3/files?spaces=appDataFolder&fields=files(id,name,mimeType,size,modifiedTime)"
````


Replace ACCESS_TOKEN with your app's OAuth
2.0 token.


Response :


````
{


    
"files"
:
 
[


        
{


            
"mimeType"
:
 
"application/json"
,


            
"size"
:
 
"256"
,


            
"id"
:
 
FILE_ID
,


            
"name"
:
 
"config.json"
,


            
"modifiedTime"
:
 
"2025-04-03T23:40:05.860Z"


        
},


        
{


            
"mimeType"
:
 
"text/plain"
,


            
"size"
:
 
"128"
,


            
"id"
:
 
FILE_ID
,


            
"name"
:
 
"user_settings.txt"
,


            
"modifiedTime"
:
 
"2025-04-02T17:52:29.020Z"


        
}


    
]


}
````



## Download files from the application data folder


To download a file from the application data folder, use the files.get method with the alt=media URL parameter to
retrieve the file contents in the response body. For more information, and to
view code samples, go to Download blob file
content .


The following code sample shows how to download files in the application data
folder using a curl command. The response body will vary depending on what's
saved.



### curl


Request :


````
curl
 
\


    
-X
 
GET
 
\


    
-H
 
"Authorization: Bearer 
ACCESS_TOKEN
"
 
\


    
"https://www.googleapis.com/drive/v3/files/
FILE_ID
?alt=media"
````


Replace the following:


- ACCESS_TOKEN : Your app's OAuth
2.0 token.

- FILE_ID : The ID of the file you want to download.

## Manage file metadata

_Source: https://developers.google.com/workspace/drive/api/guides/file_

This document covers important considerations for naming files and working with
metadata like indexable text and thumbnails. To insert and retrieve files, see
the files resource.



## Specify file names and extensions


Apps should specify a file extension in the title property when inserting files
with the Google Drive API. For example, an operation to insert a JPEG file should
specify something like "name": "cat.jpg" in the metadata.


Subsequent GET responses can include the read-only fileExtension property
populated with the extension originally specified in the name property. When a
Google Drive user requests to download a file, or when the file is downloaded
through the sync client, Drive builds a full filename (with
extension) based on the title. In cases where the extension is missing,
Drive attempts to determine the extension based on the file's
MIME type.



## Save indexable text


Note:

Beginning October 31, 2022, indexable text can be shown in result snippets and it will affect search results in more places, including Cloud Search and the search overlay in Drive and Gmail.

Drive automatically indexes documents for search when it
recognizes the file type, including text documents, PDFs, images with text, and
other common types. If your app saves other types of files (such as drawings,
video, and shortcuts), you can improve the discoverability by supplying
indexable text in the contentHints.indexableText field of the file.


Indexable text is indexed as HTML. If you save the indexable text string <section attribute="value1">Here's some text</section> , then "Here's some
text" is indexed, but "value1" isn't. Because of this, saving XML as indexable
text isn't as useful as saving HTML.


When specifying indexableText , also keep in mind:


- The size limit for contentHints.indexableText is 128 KB.

- Capture the key terms and concepts that you expect a user to search.

- Don't try to sort text in order of importance because the indexer does that
efficiently for you.

- Your application should update the indexable text with each save.

- Make sure the text is related to the file's content or metadata.



This last point might seem obvious, but it's important. It's not a good idea to
add commonly searched terms to force a file to appear in search results. This
can frustrate users, and might even motivate them to delete the file.



## Upload thumbnails


Drive automatically generates thumbnails for many common file
types, such as Google Docs, Sheets, and Slides.
Thumbnails help the user to better identify Drive files.


For file types that Drive can't generate a standard thumbnail
for, you can provide a thumbnail image generated by your application. During
file creation or update, upload a thumbnail by setting the contentHints.thumbnail field on the files resource.


Specifically:


- Set the contentHints.thumbnail.image field to the URL and filename safe
base64-encoded image (see RFC 4648 section
5 ).

- Set the contentHints.thumbnail.mimeType field to the appropriate MIME type
for the thumbnail.



If Drive can generate a thumbnail from the file, it uses the
automatically generated one and ignores any you might have uploaded. If it can't
generate a thumbnail, it uses the one you provide.


Thumbnails should adhere to these rules:


- Can be uploaded in PNG, GIF, or JPG formats.

- The recommended width is 1600 pixels.

- The minimum width is 220 pixels.

- The maximum file size is 2 MB.

- They should be updated by your application with each save.



Important:

Thumbnails are invalidated each time the file content changes. When providing thumbnails, it's important to upload new thumbnails each time the content is modified. Metadata changes don't invalidate thumbnails.

For more information, see the files resource.



## Retrieve thumbnails


You can retrieve metadata, including thumbnails, for Drive files.
Thumbnail information is housed in the thumbnailLink field of the files resource.



### Return a specific thumbnail


The following code sample shows a files.get method request with
multiple fields as a query parameter to return the thumbnailLink metadata for
a specific file. For more information, see Return specific fields for a
file .


````
GET https://www.googleapis.com/drive/v3/files/
FILE_ID
?fields=id,name,mimeType,thumbnailLink
````


Replace FILE_ID with the fileId of the file that you want to
find.


If available, the request returns a short-lived URL to the file's thumbnail.
Typically, the link lasts for several hours. The field is only populated when
the requesting app can access the file's content. If the file isn't shared
publicly, the URL returned in thumbnailLink must be fetched using a credentialed request .



### Return a list of thumbnails


The following code sample shows a files.list method request with
multiple fields as a query parameter to return the thumbnailLink metadata for
a list of files. For more information, see Search for files and
folders .


````
GET https://www.googleapis.com/drive/v3/files/?fields=files(id,name,mimeType,thumbnailLink)
````


To restrict the search results to a specific file type, apply a query string to
set the MIME type. For example, the following code sample shows how to limit the
list to Google Sheets files. For more information on MIME types, see Google Workspace and Google Drive supported MIME
types .


````
GET https://www.googleapis.com/drive/v3/files/q=mimeType='application/vnd.google-apps.spreadsheet'&fields=files(id,name,mimeType,thumbnailLink)
````

## Add custom file properties

_Source: https://developers.google.com/workspace/drive/api/guides/properties_

Custom file properties are key-value pairs used to store custom metadata for a
Google Drive file (such as tags), IDs from other data stores, information
shared between workflow applications, and so on. For example, you can add file
properties to all documents generated by the sales department in Q1.


To add properties visible to all applications, use the properties field of the files resource. To add properties
restricted to your app, use the appProperties field of the files resource.


Note:

If you're using the older version of Google Drive API (v2), utilize the

`properties`
resource to add properties to your app using

`properties.insert`
. For a complete list of differences between versions, see the

Drive API v2 & v3 comparison reference

.

Properties can also be used in search
expressions .


This is the structure of a typical property that might be used to store a
Drive file's database ID on the file.



### Drive API v3


````
"appProperties": {
  "additionalID": "
ID
",
}
````



### Drive API v2


````
{
  'key':        'additionalID',
  'value':      '
ID
',
  'visibility': 'PRIVATE'
}
````



## Working with custom file properties


The section explains how to perform some custom file property-related tasks that
affect all applications.


Note:

The Google Drive UI doesn't include a built-in way for you to edit custom properties.


### Add or update custom file properties


To add or update properties visible to all applications, use the files.update method to set the properties field of the files resource.


````
PATCH https://www.googleapis.com/drive/v3/files/
FILE_ID
````


````
{
  "properties": {
    "name": "wrench",
    "mass": "1.3kg",
    "count": "3"
  }
}
````


You can also add a custom property to a file using the advanced
Drive service in Google Apps Script. For more information, see Adding custom
properties .



### Get or list custom file properties


To view properties visible to all applications, use the files.get method to retrieve the
custom file properties for the file.


````
GET https://www.googleapis.com/drive/v3/files/
FILE_ID
?fields=properties
````


The response consists of a properties object that contains a collection of
key-value pairs.


````
{
  "properties": {
    "name": "wrench",
    "mass": "1.3kg",
    "count": "3"
  }
}
````



### Delete custom file properties


To delete property values visible to all applications, use the files.update method to set the properties field of the files resource to null.


````
PATCH https://www.googleapis.com/drive/v3/files/
FILE_ID
````


````
{
  "name": null
}
````


To view the change, call the files.get method to retrieve the properties object for the file.


````
{
  "properties": {
    "mass": "1.3kg",
    "count": "3"
  }
}
````



## Limits of custom file properties


Custom properties have the following limits:


- Maximum of 100 custom properties per file, totaled from all sources.

- Maximum of 30 public properties per file, totaled from all sources.

- Maximum of 30 private properties per file from any one application.

- Maximum of 124 bytes per property string (including both key and value) in
UTF-8 encoding. For example, a property with a key that's 10 characters long
can only have 114 characters in the value. Similarly, a property that
requires 100 characters for the value can use up to 24 characters for the
key.



For more information, see the files resource. For Drive API v2, see the properties resource.



## Access private custom file properties


You can only retrieve private properties using the appProperties field through
an authenticated request that uses an access token obtained with an OAuth 2.0
client ID. You cannot use an API key to retrieve private properties.

## Manage comments and replies

_Source: https://developers.google.com/workspace/drive/api/guides/manage-comments_

Comments are user-provided feedback on a file, such as a reader of a
word-processing document suggesting how to rephrase a sentence. There are two
types of comments: anchored comments and unanchored comments . An anchored
comment is associated with a specific location, such as a sentence in a
word-processing document, within a specific version of a document. Conversely,
an unanchored comment is just associated with the document.


Replies are attached to comments and represent a user's response to the
comment. The Drive API lets your users add comments and replies to
documents created by your app. Collectively, a comment with replies is known as
a discussion .



## Use the fields parameter


For all methods (excluding delete ) on the comments resource, you must set the fields system
parameter to
specify the fields to return in the response. In most Drive
resource methods this action is only required to return non-default fields, but
it's mandatory for the comments resource. If you omit the fields parameter,
the method returns an error. For more information, see Return specific fields .



## Comment constraints


The following constraints are enforced when working with anchored and unanchored
comments with the Drive API:


| Comment type | File type |

| --- | --- |

| Anchored | Developers can can define their own format for the anchor specification. The anchor is saved and returned when retrieving the comment, however Google Workspace editor apps treat these comments as un-anchored comments. |

| Unanchored | Supported on Google Workspace documents, which will show them in the "All Comments" view. Unanchored comments are not shown on PDFs rendered in the Drive file previewer, though they are saved and can be retrieved through the Drive API. |




## Add an anchored comment to the latest revision of a document


When you add a comment, you might want to anchor it to a region in the file. An anchor defines a region in a file to which a comment refers. The comments resource defines the anchor field as a JSON string.


Important:

Anchors are immutable, and their position relative to the content of a document cannot be guaranteed between revisions. We recommend you use anchors in documents where the position doesn't change, such as image files or read-only documents.

To add an anchored comment:


1. (Optional). Call the list method on
the revisions resource to list every revisionID for a document. Only follow this step if you want to anchor a
comment to any revision other than the latest revision. If you want to use
the latest revision, use head for the revisionID .

2. Call the create method on the comments resource with the fileID parameter, a comments resource containing the comment, and a JSON anchor
string containing the revisionID ( r ) and region ( a ).



The following code sample shows how to create an anchored comment:



### Python


````
from
 
google.oauth2.credentials
 
import
 
Credentials


from
 
googleapiclient.errors
 
import
 
HttpError



# --- Configuration ---


# The ID of the file to comment on.


# Example: '1_aBcDeFgHiJkLmNoPqRsTuVwXyZ'


FILE_ID
 
=
 
'FILE_ID'



# The text content of the comment.


COMMENT_TEXT
 
=
 
'This is an example of an anchored comment.'



# The line number to anchor the comment to.


# Note: Line numbers are based on the revision.


ANCHOR_LINE
 
=
 
10


# --- End of user-configuration section ---



SCOPES
 
=
 
[
"https://www.googleapis.com/auth/drive"
]



creds
 
=
 
Credentials
.
from_authorized_user_file
(
"token.json"
,
 
SCOPES
)



def
 
create_anchored_comment
():


    
"""


    Create an anchored comment on a specific line in a Google Doc.



    Returns:


        The created comment object or None if an error occurred.


    """

    
try
:

        
# Build the Drive API service

        
service
 
=
 
build
(
"drive"
,
 
"v3"
,
 
credentials
=
creds
)


        
# Define the anchor region for the comment.

        
# For Google Docs, the region is typically defined by 'line' and 'revision'.

        
# Other file types might use different region classifiers.

        
anchor
 
=
 
{

            
'region'
:
 
{

                
'kind'
:
 
'drive#commentRegion'
,

                
'line'
:
 
ANCHOR_LINE
,

                
'rev'
:
 
'head'

            
}

        
}


        
# The comment body.

        
comment_body
 
=
 
{

            
'content'
:
 
COMMENT_TEXT
,

            
'anchor'
:
 
anchor

        
}


        
# Create the comment request.

        
comment
 
=
 
(

            
service
.
comments
()

            
.
create
(
fileId
=
FILE_ID
,
 
fields
=
"*"
,
 
body
=
comment_body
)

            
.
execute
()

        
)


        
print
(
f
"Comment ID: 
{
comment
.
get
(
'id'
)
}
"
)

        
return
 
comment


    
except
 
HttpError
 
as
 
error
:

        
print
(
f
"An error occurred: 
{
error
}
"
)

        
return
 
None



create_anchored_comment
()
````


The Drive API returns an instance of the comments resource object
which includes the anchor string.


Note:

We recommend you check that a user has the correct permissions to add comments. Further, only the creator of a comment or a reply can delete or edit a comment or a reply. Errors occur when a person in a non-creator role tries to delete or edit a comment. To avoid these errors, check the

`author.me`
field of the

comments

resource.


## Add an unanchored comment


To add an unanchored comment, call the create method with the fileId parameter and a comments resource containing the comment.


The comment is inserted as plain text, but the response body provides an htmlContent field
containing content formatted for display.


The following code sample shows how to create an unanchored comment:



### Python


````
from
 
google.oauth2.credentials
 
import
 
Credentials


from
 
googleapiclient.errors
 
import
 
HttpError



# --- Configuration ---


# The ID of the file to comment on.


# Example: '1_aBcDeFgHiJkLmNoPqRsTuVwXyZ'


FILE_ID
 
=
 
'FILE_ID'



# The text content of the comment.


COMMENT_TEXT
 
=
 
'This is an example of an unanchored comment.'


# --- End of user-configuration section ---



SCOPES
 
=
 
[
"https://www.googleapis.com/auth/drive"
]



creds
 
=
 
Credentials
.
from_authorized_user_file
(
"token.json"
,
 
SCOPES
)



def
 
create_unanchored_comment
():


    
"""


    Create an unanchored comment on a specific line in a Google Doc.



    Returns:


        The created comment object or None if an error occurred.


    """

    
try
:

        
# Build the Drive API service

        
service
 
=
 
build
(
"drive"
,
 
"v3"
,
 
credentials
=
creds
)


        
# The comment body. For an unanchored comment,

        
# omit the 'anchor' property.

        
comment_body
 
=
 
{

            
'content'
:
 
COMMENT_TEXT

        
}


        
# Create the comment request.

        
comment
 
=
 
(

            
service
.
comments
()

            
.
create
(
fileId
=
FILE_ID
,
 
fields
=
"*"
,
 
body
=
comment_body
)

            
.
execute
()

        
)


        
print
(
f
"Comment ID: 
{
comment
.
get
(
'id'
)
}
"
)

        
return
 
comment


    
except
 
HttpError
 
as
 
error
:

        
print
(
f
"An error occurred: 
{
error
}
"
)

        
return
 
None



create_unanchored_comment
()
````


Important:

We recommend you check that a user has the correct permissions to add comments. Further, only the creator of a comment or a reply can delete or edit a comment or a reply. Errors occur when a user in a non-creator role tries to delete or edit a comment. To avoid these errors, check the

`author.me`
field of the

`comments`
resource to make sure the user making the request is the author of the comment and then verify their permissions relative to the comment.


## Add a reply to a comment


To add a reply to a comment, use the create method on the replies resource with the fileId and commentId parameters. The request body uses the content field to add the
reply.


The reply is inserted as plain text, but the response body provides an htmlContent field containing content formatted for display.


The method returns the fields listed in the fields field.


Request


In this example, we provide the fileId and commentId path parameters and multiple fields.


````
POST https://www.googleapis.com/drive/v3/files/
FILE_ID
/comments/
COMMENT_ID
/replies?fields=id,comment
````


Request body


````
{
  "content": "This is a reply to a comment."
}
````



### Resolve a comment


A comment can only be resolved by posting a reply to a comment.


To resolve a comment, use the create method on the replies resource with the fileId and commentId parameters.


The request body uses the action field to resolve
the comment. You can also set the content field to add a reply that closes the
comment.


When a comment is resolved, Drive marks the comments resource
as resolved: true . Unlike deleted comments , resolved
comments can include the htmlContent or content fields.


When your app resolves a comment, your UI should indicate that the comment has
been addressed. For example, your app might:


- Disallow further replies and dim all previous replies plus the original
comment.

- Hide resolved comments.



Request


In this example, we provide the fileId and commentId path parameters and multiple fields.


````
POST https://www.googleapis.com/drive/v3/files/
FILE_ID
/comments/
COMMENT_ID
/replies?fields=id,comment
````


Request body


````
{
  "action": "resolve",
  "content": "This comment has been resolved."
}
````



## Get a comment


To get a comment on a file, use the get method on the comments resource with the fileId and commentId parameters. If you don't know the comment ID, you can list all comments using the list method.


The method returns an instance of a comments resource.


To include deleted comments in the results, set the includedDeleted query
parameter to true .


Request


In this example, we provide the fileId and commentId path parameters and multiple fields.


````
GET https://www.googleapis.com/drive/v3/files/
FILE_ID
/comments/
COMMENT_ID
?fields=id,comment,modifiedTime,resolved
````



## List comments


To list comments on a file, use the list method on the comments resource with the fileId parameter. The method returns a list of comments.


Pass the following query parameters to customize pagination of, or filter,
comments:


- includeDeleted : Set to true to include deleted comments. Deleted
comments don't include the htmlContent or content fields.

- pageSize : The maximum number of comments to return per page.

- pageToken : A page token, received from a previous list call. Provide this
token to retrieve the subsequent page.

- startModifiedTime : The minimum value of the modifiedTime field for the
result comments.



Request


In this example, we provide the fileId path parameter, the includeDeleted query parameter, and multiple fields.


````
GET https://www.googleapis.com/drive/v3/files/
FILE_ID
/comments?includeDeleted=true&fields=(id,comment,kind,modifiedTime,resolved)
````



## Update a comment


To update a comment on a file, use the update method on the comments resource with the fileId and commentId parameters. The request body uses the content field to update the comment.


The boolean resolved field on the comments resource is read-only. A comment can only be resolved by
posting a reply to a comment. For more information, see Resolve a
comment .


The method returns the fields listed in the fields query parameter.


Request


In this example, we provide the fileId and commentId path parameters and multiple fields.


````
PATCH https://www.googleapis.com/drive/v3/files/
FILE_ID
/comments/
COMMENT_ID
?fields=id,comment
````


Request body


````
{
  "content": "This comment is now updated."
}
````



## Delete a comment


To delete a comment on a file, use the delete method on the comments resource with the fileId and commentId parameters.


When a comment is deleted, Drive marks the comment resource as deleted: true . Deleted comments don't include the htmlContent or content fields.


Request


In this example, we provide the fileId and commentId path parameters.


````
DELETE https://www.googleapis.com/drive/v3/files/
FILE_ID
/comments/
COMMENT_ID
````



## Related topics


- Files and folders overview

- Manage file revisions

## Create a shortcut to a Drive file

_Source: https://developers.google.com/workspace/drive/api/guides/shortcuts_

Shortcuts are files that link to other files or folders on Google Drive.
Shortcuts have these characteristics:


- An application/vnd.google-apps.shortcut MIME type. For more information,
see Google Workspace & Google Drive supported MIME
types .

- The ACL for a shortcut inherits the ACL of the parent. The shortcut's ACL
cannot be changed directly.

- A targetId pointing to the target file or folder, also referred to as the
"target."

- A targetMimeType indicating the MIME type for the target. The targetMimeType is used to determine the type icon to display. The target's
MIME type is copied to the targetMimeType field when the shortcut is
created.

- The targetId and targetMimeType fields are part of the shortcutDetails field within the file resource.

- A shortcut can only have one parent. If a shortcut file is required in other
Drive locations, the shortcut file can be copied to the
additional locations.

- When the target is deleted, or when the current user loses access to the
target, the user's shortcut pointing to the target breaks.

- The title of a shortcut can differ from the target. When a shortcut is
created, the title of the target is used as the title of the shortcut. After
creation, the shortcut's title and target's title can be changed
independently. If the target's name is changed, previously created shortcuts
retain the old title.

- The MIME type of a shortcut can become stale. While rare, a blob file's MIME
type changes when a revision of a different type is uploaded, but any
shortcuts pointing to the updated file retain the original MIME type. For
example, if you upload a JPG file to Drive, then upload an
AVI revision, Drive identifies the change and updates the
thumbnail for the actual file. However, the shortcut continues to have a JPG
thumbnail.

- In Google Account Data
Export also known as Google Takeout, shortcuts are represented as Netscape
bookmark files containing links to the target.



For more information, see Find files & folders with Google Drive
shortcuts .


Important:

Previously, shortcuts were the term for files that pointed to content stored by an application. That type of "shortcut" was renamed to

third-party shortcut

. For further information, see

Create a shortcut file to content stored by your app

.


## Create a shortcut


To create a shortcut, set the MIME type to application/vnd.google-apps.shortcut , set the targetId to the file or folder
the shortcut should link to, and call files.create to create a shortcut.


Note:

If you're using V2 of the API, use

`files.insert`
.

The following examples show how to create a shortcut using a client library:



### Python


````
file_metadata
 
=
 
{

    
'name'
:
 
'
FILE_NAME
'
,

    
'mimeType'
:
 
'text/plain'


}


file
 
=
 
drive_service
.
files
()
.
create
(
body
=
file_metadata
,
 
fields
=
'id'
)
.
execute
()


print
(
'File ID: 
%s
'
 
%
 
file
.
get
(
'id'
))


shortcut_metadata
 
=
 
{

     
'Name'
:
 
'
SHORTCUT_NAME
'
,

     
'mimeType'
:
 
'application/vnd.google-apps.shortcut'
,

     
'shortcutDetails'
:
 
{

        
'targetId'
:
 
file
.
get
(
'id'
)

     
}


}


shortcut
 
=
 
drive_service
.
files
()
.
create
(
body
=
shortcut_metadata
,

                                    
fields
=
'id,shortcutDetails'
)
.
execute
()


print
(
'File ID: 
%s
, Shortcut Target ID: 
%s
, Shortcut Target MIME type: 
%s
'
 
%
 
(

    
shortcut
.
get
(
'id'
),

    
shortcut
.
get
(
'shortcutDetails'
)
.
get
(
'targetId'
),

    
shortcut
.
get
(
'shortcutDetails'
)
.
get
(
'targetMimeType'
)))
````



### Node.js


````
var
 
fileMetadata
 
=
 
{


  
'name'
:
 
'
FILE_NAME
'
,


  
'mimeType'
:
 
'text/plain'


};


drive
.
files
.
create
({


  
'resource'
:
 
fileMetadata
,


  
'fields'
:
 
'id'


},
 
function
 
(
err
,
 
file
)
 
{


  
if
 
(
err
)
 
{


    
// Handle error


    
console
.
error
(
err
);


  
}
 
else
 
{


    
console
.
log
(
'File Id: '
 
+
 
file
.
id
);


    
shortcutMetadata
 
=
 
{


      
'name'
:
 
'
SHORTCUT_NAME
'
,


      
'mimeType'
:
 
'application/vnd.google-apps.shortcut'


      
'shortcutDetails'
:
 
{


        
'targetId'
:
 
file
.
id


      
}


    
};


    
drive
.
files
.
create
({


      
'resource'
:
 
shortcutMetadata
,


      
'fields'
:
 
'id,name,mimeType,shortcutDetails'


    
},
 
function
(
err
,
 
shortcut
)
 
{


      
if
 
(
err
)
 
{


        
// Handle error


        
console
.
error
(
err
);


      
}
 
else
 
{


        
console
.
log
(
'Shortcut Id: '
 
+
 
shortcut
.
id
 
+


                    
', Name: '
 
+
 
shortcut
.
name
 
+


                    
', target Id: '
 
+
 
shortcut
.
shortcutDetails
.
targetId
 
+


                    
', target MIME type: '
 
+
 
shortcut
.
shortcutDetails
.
targetMimeType
);


      
}


    
}


  
}


});
````


Replace the following:


- FILE_NAME : the file name requiring a shortcut.

- SHORTCUT_NAME : the name for this shortcut.



By default, the shortcut is created on the current user's My
Drive and shortcuts are only created for files or folders for
which the current user has access.



## Search for a shortcut


To search for a shortcut, use the query string q with files.list to filter the shortcuts to
return.


mimeType operator values


Where:


- query_term is the query term or field to search upon. To view the query
terms that can be used to filter shared drives, refer to Search query
terms .

- operator specifies the condition for the query term. To view which
operators you can use with each query term, refer to Query operators .

- values are the specific values you want to use to filter your search
results.



For example, the following query string filters the search to return all
shortcuts to spreadsheet files:


````
q
:
 
mimeType
=
'application/vnd.google-apps.shortcut'
 
AND
 
shortcutDetails
.
targetMimeType
=
'application/vnd.google-apps.spreadsheet'
````

## Create shortcut files to external app content

_Source: https://developers.google.com/workspace/drive/api/guides/third-party-shortcuts_

Third-party shortcuts in Google Drive are metadata-only files that link to
other files on external, third-party owned, storage systems. These shortcuts act
as reference links to the "content" files stored by an application outside of
Drive, usually in a different datastore or cloud storage system.


To create a third-party shortcut, use the files.create method of
the Google Drive API and set the MIME type to application/vnd.google-apps.drive-sdk . Don't upload any content when creating
the file. For more information, see Google Workspace
and Google Drive supported MIME
types .


You cannot upload or download third-party shortcuts.


Note:

If you're using the older Drive API v2, you can find code samples in

GitHub

. Learn how to

migrate to Drive API v3

.

The following code samples show how to create a third-party shortcut using a
client library:



### Java


drive/snippets/drive_v3/src/main/java/CreateShortcut.java

View on GitHub

Code

````
import
 
com.google.api.client.googleapis.json.GoogleJsonResponseException
;


import
 
com.google.api.client.http.HttpRequestInitializer
;


import
 
com.google.api.client.http.javanet.NetHttpTransport
;


import
 
com.google.api.client.json.gson.GsonFactory
;


import
 
com.google.api.services.drive.Drive
;


import
 
com.google.api.services.drive.DriveScopes
;


import
 
com.google.api.services.drive.model.File
;


import
 
com.google.auth.http.HttpCredentialsAdapter
;


import
 
com.google.auth.oauth2.GoogleCredentials
;


import
 
java.io.IOException
;


import
 
java.util.Arrays
;



/* Class to demonstrate Drive's create shortcut use-case */


public
 
class
 
CreateShortcut
 
{



  
/**


   * Creates shortcut for file.


   *


   * @throws IOException if service account credentials file not found.


   */


  
public
 
static
 
String
 
createShortcut
()
 
throws
 
IOException
 
{


        
/* Load pre-authorized user credentials from the environment.


        TODO(developer) - See https://developers.google.com/identity for


        guides on implementing OAuth2 for your application.*/


    
GoogleCredentials
 
credentials
 
=
 
GoogleCredentials
.
getApplicationDefault
()


        
.
createScoped
(
Arrays
.
asList
(
DriveScopes
.
DRIVE_FILE
));


    
HttpRequestInitializer
 
requestInitializer
 
=
 
new
 
HttpCredentialsAdapter
(


        
credentials
);


    
// Build a new authorized API client service.


    
Drive
 
service
 
=
 
new
 
Drive
.
Builder
(
new
 
NetHttpTransport
(),


        
GsonFactory
.
getDefaultInstance
(),


        
requestInitializer
)


        
.
setApplicationName
(
"Drive samples"
)


        
.
build
();


    
try
 
{


      
// Create Shortcut for file.


      
File
 
fileMetadata
 
=
 
new
 
File
();


      
fileMetadata
.
setName
(
"Project plan"
);


      
fileMetadata
.
setMimeType
(
"application/vnd.google-apps.drive-sdk"
);



      
File
 
file
 
=
 
service
.
files
().
create
(
fileMetadata
)


          
.
setFields
(
"id"
)


          
.
execute
();


      
System
.
out
.
println
(
"File ID: "
 
+
 
file
.
getId
());


      
return
 
file
.
getId
();


    
}
 
catch
 
(
GoogleJsonResponseException
 
e
)
 
{


      
// TODO(developer) - handle error appropriately


      
System
.
err
.
println
(
"Unable to create shortcut: "
 
+
 
e
.
getDetails
());


      
throw
 
e
;


    
}


  
}


}
````



### Python


drive/snippets/drive-v3/file_snippet/create_shortcut.py

View on GitHub

Code

````
import
 
google.auth


from
 
googleapiclient.discovery
 
import
 
build


from
 
googleapiclient.errors
 
import
 
HttpError




def
 
create_shortcut
():


  
"""Create a third party shortcut



  Load pre-authorized user credentials from the environment.


  TODO(developer) - See https://developers.google.com/identity


  for guides on implementing OAuth2 for the application.


  """

  
creds
,
 
_
 
=
 
google
.
auth
.
default
()


  
try
:

    
# create drive api client

    
service
 
=
 
build
(
"drive"
,
 
"v3"
,
 
credentials
=
creds
)

    
file_metadata
 
=
 
{

        
"name"
:
 
"Project plan"
,

        
"mimeType"
:
 
"application/vnd.google-apps.drive-sdk"
,

    
}


    
# pylint: disable=maybe-no-member

    
file
 
=
 
service
.
files
()
.
create
(
body
=
file_metadata
,
 
fields
=
"id"
)
.
execute
()

    
print
(
f
'File ID: 
{
file
.
get
(
"id"
)
}
'
)


  
except
 
HttpError
 
as
 
error
:

    
print
(
f
"An error occurred: 
{
error
}
"
)

  
return
 
file
.
get
(
"id"
)




if
 
__name__
 
==
 
"__main__"
:

  
create_shortcut
()
````



### PHP


drive/snippets/drive_v3/src/DriveCreateShortcut.php

View on GitHub

Code

````
<
?php


use Google\Client;


use Google\Service\Drive;


use Google\Service\Drive\DriveFile;


function createShortcut()


{


    try {



        $client = new Client();


        $client->useApplicationDefaultCredentials();


        $client->addScope(Drive::DRIVE);


        $driveService = new Drive($client);


        $fileMetadata = new DriveFile(array(


            'name' => 'Project plan',


            'mimeType' => 'application/vnd.google-apps.drive-sdk'));


        $file = $driveService->files->create($fileMetadata, array(


            'fields' => 'id'));


        printf("File ID: %s\n", $file->id);


        return $file->id;



    } catch(Exception $e) {


        echo "Error Message: ".$e;


    }



}
````



### .NET


drive/snippets/drive_v3/DriveV3Snippets/CreateShortcut.cs

View on GitHub

Code

````
using
 
Google.Apis.Auth.OAuth2
;


using
 
Google.Apis.Drive.v3
;


using
 
Google.Apis.Services
;



namespace
 
DriveV3Snippets


{


    
// Class to demonstrate Drive's create shortcut use-case


    
public
 
class
 
CreateShortcut


    
{


        
/// <summary>


        
/// Create a third party shortcut.


        
/// </summary>


        
/// <returns>newly created shortcut file id, null otherwise.</returns>


        
public
 
static
 
string
 
DriveCreateShortcut
()


        
{


            
try


            
{


                
/* Load pre-authorized user credentials from the environment.


                 TODO(developer) - See https://developers.google.com/identity for 


                 guides on implementing OAuth2 for your application. */


                
GoogleCredential
 
credential
 
=
 
GoogleCredential


                    
.
GetApplicationDefault
()


                    
.
CreateScoped
(
DriveService
.
Scope
.
Drive
);



                
// Create Drive API service.


                
var
 
service
 
=
 
new
 
DriveService
(
new
 
BaseClientService
.
Initializer


                
{


                    
HttpClientInitializer
 
=
 
credential
,


                    
ApplicationName
 
=
 
"Drive API Snippets"


                
});



                
// Create Shortcut for file.


                
var
 
fileMetadata
 
=
 
new
 
Google
.
Apis
.
Drive
.
v3
.
Data
.
File
()


                
{


                    
Name
 
=
 
"Project plan"
,


                    
MimeType
 
=
 
"application/vnd.google-apps.drive-sdk"


                
};


                
var
 
request
 
=
 
service
.
Files
.
Create
(
fileMetadata
);


                
request
.
Fields
 
=
 
"id"
;


                
var
 
file
 
=
 
request
.
Execute
();


                
// Prints the shortcut file id.


                
Console
.
WriteLine
(
"File ID: "
 
+
 
file
.
Id
);


                
return
 
file
.
Id
;


            
}


            
catch
 
(
Exception
 
e
)


            
{


                
// TODO(developer) - handle error appropriately


                
if
 
(
e
 
is
 
AggregateException
)


                
{


                    
Console
.
WriteLine
(
"Credential Not found"
);


                
}


                
else


                
{


                    
throw
;


                
}


            
}


            
return
 
null
;


        
}


    
}


}
````



### Node.js


drive/snippets/drive_v3/file_snippets/create_shortcut.js

View on GitHub

Code

````
import
 
{
GoogleAuth
}
 
from
 
'google-auth-library'
;


import
 
{
google
}
 
from
 
'googleapis'
;



/**


 * Creates a shortcut to a third-party resource.


 * @return {Promise<string|null|undefined>} The shortcut ID.


 */


async
 
function
 
createShortcut
()
 
{


  
// Authenticate with Google and get an authorized client.


  
// TODO (developer): Use an appropriate auth mechanism for your app.


  
const
 
auth
 
=
 
new
 
GoogleAuth
({


    
scopes
:
 
'https://www.googleapis.com/auth/drive'
,


  
});



  
// Create a new Drive API client (v3).


  
const
 
service
 
=
 
google
.
drive
({
version
:
 
'v3'
,
 
auth
});



  
// The metadata for the new shortcut.


  
const
 
fileMetadata
 
=
 
{


    
name
:
 
'Project plan'
,


    
mimeType
:
 
'application/vnd.google-apps.drive-sdk'
,


  
};



  
// Create the new shortcut.


  
const
 
file
 
=
 
await
 
service
.
files
.
create
({


    
requestBody
:
 
fileMetadata
,


    
fields
:
 
'id'
,


  
});



  
// Print the ID of the new shortcut.


  
console
.
log
(
'File Id:'
,
 
file
.
data
.
id
);


  
return
 
file
.
data
.
id
;


}
````



## How third-party shortcuts work


When you create a third-party shortcut using the files.create method, it uses
a POST request to insert the metadata and create a shortcut to your app's
content:


````
POST https://www.googleapis.com/drive/v3/files
Authorization: 
AUTHORIZATION_HEADER


{
  "title": "
FILE_TITLE
",
  "mimeType": "application/vnd.google-apps.drive-sdk"
}
````


When the third-party shortcut is clicked, the user is redirected to the external
site where the file is housed. The Drive file ID is contained in
the state parameter. For more
information, see Handle an Open URL for app-specific
documents .


The third-party app or website is then responsible for matching the file ID in
the state parameter to the content housed within their system.



## Add custom thumbnails and indexable text


To increase the discoverability of files associated with third-party shortcuts,
you can upload both thumbnail images and indexable text when inserting or
modifying the file metadata. For more information, see Manage file metadata .



## Related topics


- Create a shortcut to a Drive file

- Configure a Drive UI integration

- Google Workspace and Google Drive supported MIME types

## Return user info

_Source: https://developers.google.com/workspace/drive/api/guides/user-info_

Google Drive provides two options to gather information about
Drive users:


- Using the about resource, you can retrieve
information about the user, the user's Drive settings, and
their system capabilities.

- Using the apps resource, you can retrieve a
list of the user's installed apps, with information about each app's
supported MIME types, file extensions, and other details.



This guide explains how you can retrieve user info in Drive.



## Get details about a user


To return information on a Drive user as an instance of about , use the get method. The returned values are measured
in bytes.


You must set the fields system
parameter on
the get method to specify the fields to return in the response. In most
Drive methods this action is only required to return non-default
fields but it's mandatory for the about resource. If you omit the parameter,
the method returns an error. For more information, see Return specific fields .


Note:

If you're using the previous Drive API v2 version, setting the

`fields`
parameter in the

`get`
method isn't required. Learn how to

migrate to Drive API v3

.

The following code sample shows how to provide multiple fields as a query parameter in the request. The response returns the field values for the request.


Request


````
GET https://www.googleapis.com/drive/v3/about/?fields=kind,user,storageQuota
````


Response


````
{
  "kind": "drive#about",
  "user": {
    "kind": "drive#user",
    "displayName": "
DISPLAY_NAME
",
    "photoLink": "
PHOTO_LINK
",
    "me": true,
    "permissionId": "
PERMISSION_ID
",
    "emailAddress": "
EMAIL_ADDRESS
"
  },
  "storageQuota": {
    "usage": "10845031958",
    "usageInDrive": "2222008387",
    "usageInDriveTrash": "91566"
  }
}
````


The response includes the following values:


- DISPLAY_NAME : the user's name in plain text.

- PHOTO_LINK : the URL of the user's profile photo.

- PERMISSION_ID : the user's ID within the Permission resources.

- EMAIL_ADDRESS : the user's email address




## List user apps


Google Drive apps are listed in the Google Workspace Marketplace and
are used to make Drive more convenient such as the Google Docs
app or an add-on used within Docs to
sign documents. For more information, see Use Google Drive
apps .


To return a list of all the user's installed apps as an instance of apps , use the list method
without any parameters.


If you want to specify the fields to return in the response, you can set the fields system
parameter . If
you don't specify the fields parameter, the server returns a default set of
fields. For more information, see Return specific fields .


Note:

If you're using the previous Drive API v2 version, the response body also includes the

`etag`
field. Learn how to

migrate to Drive API v3

.

The following code sample shows how to return a list of all the user's installed apps in the request. The response returns the field values for the request.


Request


````
GET https://www.googleapis.com/drive/v3/apps
````


Response


````
{
  "kind": "drive#appList",
  "selfLink": "https://www.googleapis.com/drive/v3/apps",
  "items": [
    {
      "kind": "drive#app",
      "id": "
ID
",
      "name": "Google Sheets",
      "supportsCreate": true,
      "supportsImport": true,
      "supportsMultiOpen": false,
      "supportsOfflineCreate": true,
      "productUrl": "https://chrome.google.com/webstore/detail/felcaaldnbdncclmgdcncolpebgiejap",
      "productId": "
PRODUCT_ID
"
    }
  ],
  "defaultAppIds": [
    "
ID
"
  ]
}
````


The response includes the following values:


- ID : the app ID.

- PRODUCT_ID : the product listing ID for this app.




### List user apps with query parameters


To find a specific app, use one or more of the optional query parameters:


- appFilterExtensions : Filter the search results using a comma-separated
list of file extensions. Apps within the app query scope that can open the
listed file extensions are included in the response. If appFilterMimeTypes are also provided, a union of the two resulting app lists is returned.
Examples of extensions include docx for Microsoft Word and pptx for
Microsoft PowerPoint. For more examples of file extensions, see Export MIME
types for Google Workspace documents . The following code sample shows how to provide multiple file extensions as a
query parameter: GET
https://www.googleapis.com/drive/v3/apps?appFilterExtensions=docx,pptx .

- appFilterMimeTypes : Filter the search results using a comma-separated list
of MIME types. Apps within the app query scope that can open the listed MIME
types are included in the response. If appFilterExtensions are also
provided, a union of the two resulting app lists is returned. Examples of
MIME types include application/vnd.google-apps.form for Google Forms and application/vnd.google-apps.site for Google Sites. For more examples of
MIME types, see Google Workspace and Google Drive supported MIME
types . The following code sample shows how to provide multiple MIME types as a
query parameter: GET
https://www.googleapis.com/drive/v3/apps?appFilterMimeTypes=application/vnd.google-apps.form,application/vnd.google-apps.site .

- languageCode : Filter the search results using a language or locale code,
as defined by BCP 47, with some extensions from Unicode's LDML
format . Examples of language codes
include en-us for English (United States) and fr-ca for French (Canada). The following code sample shows how to provide multiple language codes as a
query parameter: GET
https://www.googleapis.com/drive/v3/apps?languageCode=en-us,fr-ca .




## Get user app by ID


To download the detailed app info as an instance of apps , use the get method with the app ID.


The following code sample shows how to provide an appId as a query parameter in the request. The response returns the field values for the request.


Request


````
GET https://www.googleapis.com/drive/v3/apps/
APP_ID
````


Response


````
{
  "kind": "drive#app",
  "id": "
ID
",
  "name": "Google Sheets",
  "supportsCreate": true,
  "supportsImport": true,
  "supportsMultiOpen": false,
  "supportsOfflineCreate": true,
  "productUrl": "https://chrome.google.com/webstore/detail/felcaaldnbdncclmgdcncolpebgiejap",
  "productId": "
PRODUCT_ID
"
}
````


The response includes the following values:


- ID : the app ID.

- PRODUCT_ID : the product listing ID for this app.




## Related topics


Here are a few next steps you might try:


- To create a file in Drive, see Create and manage files .

- To upload file data when you create or update a file, see Upload file
data .

- To download and export files, see Download and export
files .

## Monitor Drive changes overview

_Source: https://developers.google.com/workspace/drive/api/guides/change-overview_

Google Drive maintains an automatic history of modifications, which can help
users track file changes and content revisions. In the revision history, users
can see what edits have been made and can revert to a specific version of a file
with specific edits.


The following terms are relevant to the changes and revisions resources of the
Google Drive API:


Access Control List (ACL)

The list of all permission resources associated with a file, folder, or shared drive.

Change

An alteration made to a file's content or metadata of a file or shared drive.

User change log

A record of all changes that a user made to every editable file in their My
Drive, such as a Google Docs, Sheets, or a
Slides. For members of a shared drive, the user change log
also includes entries about shared drive membership, user access levels to
items in that shared drive, and shared drive name changes.


Note:

Even if several users can access the same file, not all changes to that file are reflected in every users' change log. For example, when a user opens the file for the first time, or marks the file as Starred, those changes only appear in that users' change log. As another example, when a file's ACL is changed, it's only reflected in the change log of the following users: The file's owner, any service accounts on the ACL, and any users directly impacted by the ACL change.

Shared drive change log

A record of all changes to a shared drive, such as additions or removals of
users, and all changes to items on that shared drive. A change to an item
within a shared drive appears in both the user change log and shared drive
change log.


Change log entry

A record of a change made to a file's content or metadata of a file or shared
drive. A change log entry indicates the user who made the change, the
timestamp, and an ID. There can only be one entry per file or shared drive
in the change log at a time. Each time that file or shared drive changes, a
new ID is created for that entry, and it replaces the previous entry.


Revision

A version of the file representing a change to the file's contents (not
metadata). Each revision can be accessed using the revisions resource within the Drive API.


Head revision

The most current version of a file. The headRevisionId can be accessed using
the files resource within the
Drive API. The headRevisionId is only available for blob files
in Drive.


Blob revision

A version of an unmodifiable binary file, such as an image, video, or PDF. If
the blob revision is the only revision of the binary file, it cannot be
deleted. A new blob can be uploaded as a new revision , which becomes the
new head revision of that file.


Any blob file revision, other than the head revision, that's not designated
as "Keep Forever" is purgeable. Purgeable revisions are typically preserved
for 30 days, but can be purged earlier if a file has 100 revisions that
aren't designated as "Keep Forever" and a new revision is uploaded.


For more information on setting blob revisions as "Keep Forever", see Specify revisions to save from auto
delete .


Revision history

A record of all revisions of a file in chronological order. A change to a
Docs, Sheets, or Slides file
gets a new revision. Each time the content changes, Drive
creates a new revision history entry for that file. However, these editor
file revisions may be merged together, so the API response might not show
all changes to a file.



## Related topics


- To identify where the change you want to track is recorded, see Identify
which change log to track .

- To set up change tracking for users and shared drives, see Track changes
for users and shared drives .

- To download a blob file content revision or to export a Google Workspace
document content revision, see Download and export
files .

- To publish a revision, see Manage file
revisions .

- To set up change notifications, see Notifications for resource changes .

## Identify which change log to track

_Source: https://developers.google.com/workspace/drive/api/guides/about-changelogs_

The user and shared drive change logs are defined in the Changes and revisions overview . This guide provides more information about individual change log entries and tips for when to track changes in either the user change log or the shared drive change log.



## Change entry after file moves to a shared drive


After a file is moved to a shared drive, that shared drive change log continues logging changes for that file, not the user change log. You should then query the shared drive change log to detect new changes to that item.



## Change entry for individual items in a shared drive


If a non-member is granted file access to individual items in a shared drive,
changes to those items are tracked in the user change log, not the shared drive change log. This behavior is the same as non-shared drive items that are shared directly with users.



## Change entry for lost access permission


If a user loses access permission to a file, the change log entry will say deleted .
However, the file is still available to other users who still have permission to access the file. If the item is deleted for all users, it will get marked deleted in all user change logs.


When a file moves between user corpora it may also appear deleted even though the user still retains access to the file. If you query change logs for multiple corpora, use the includeCorpusRemovals parameter in Changes.list to disambiguate corpus moves from loss of access.
For definitions of different corpora, see Files and folders overview .

## Track changes for users and shared drives

_Source: https://developers.google.com/workspace/drive/api/guides/about-changes_

For Google Drive apps that need to keep track of changes to items in Drive, the Changes collection provides an efficient way to
detect changes. The collection works by providing the current state of each
item, if and only if the item has changed since a given point in time.


Google Drive keeps a change log for each user and shared drive. Each has
their own record of changes to items that are of interest to them.


To track changes for all items visible to a user, both the user change log and the
change logs for all shared drives the user is a member of need to be replayed.



## Enable change entries


A change entry represents the state of the file or shared drive at a given point
in time. A change does not provide a delta between revisions. Applications
that need to know which properties have changed should persist the
previously known state of the item and compare.


Since changes represent the current state of an item, individual change
entries may be invalidated and replaced with a newer change entry for
the corresponding item.



## Tombstones


Change entries for items no longer available to a user are marked as deleted in the change entry. Only the ID of the item is available in the change entry.


Note:

Because change logs are scoped to a user or shared drive, a deleted item may still physically exist and be accessible by other users. The change entry does not distinguish between loss of access and deletion. When a file moves between corpora it may also appear as a delete even though the user still retains access to the file. If querying change logs for multiple corpora, use the

`includeCorpusRemovals`
query parameter to disambiguate corpus moves from loss of access.


## Track shared drives


Each shared drive has its own change log. Even though a user may be a member
of a shared drive, certain changes are only reflected in the shared drive change
log and never in the user’s change log. If a file belongs to a shared drive,
even if the file still appeared on the user’s change log at some point in the
past, replaying the user’s change log alone won't correctly update the file's
status. Instead you must replay the shared drive’s change log to capture all
changes.



### What is included in a user's change log


A user’s change log includes changes to shared drives they're a member of as well
as changes to files in the user's corpus. For more information about corpora, see Changes and revisions overview .


These shared drive changes appear on the user’s change log:


- The user becomes a member of a shared drive.

- The user is no longer a member of a shared drive.

- There is a directly relevant change to a shared drive in which the user is a
member, for example: The user’s access level on that shared drive changed. The shared drive is renamed.

  The user’s access level on that shared drive changed.

  The shared drive is renamed.



When a user becomes a member of a shared drive, a single change event
for the shared drive appears in the user's change log. This implies
access to all items in the shared drive. The user does not receive changes for
items contained inside the shared drive when they become a member.


Members of a shared drive may see change events for items in a shared drive based
on their usage. However, applications should not rely on these events when the
user is a member of the shared drive. Instead, use the shared drive's change log to
track changes.


If a non-member is granted file access to individual items in a shared drive,
changes to those items are tracked in the user's change log. This is the same
as non-shared Drive items that are shared directly with users.



### Changes that appear on a shared drive change log


If a user is a member of a shared drive, they can access that shared drive's change
log which contains:


- Any changes to the shared drive itself, such as addition or removal of a member

- Direct changes to the items contained in the shared drive.




### Syncing permissions and capabilities


Permission changes to shared drive or items inside a shared drive are only
reflected on the item itself. While all direct or indirect children of that
item will inherit this change there will not be a separate entry in the change
log for each of those items. Clients must either
propagate the new capabilities or refetch each item if a parent has
changed in order to fully reconstruct the changes.

## Retrieve and process changes

_Source: https://developers.google.com/workspace/drive/api/guides/manage-changes_

For Google Drive apps that must track changes to files, the changes collection provides an efficient
way to detect all file changes, including those shared with a user. If the file
has changed, the collection provides the current state of each file.



## Get start page token


To request the page token for the current state of the account, use the changes.getStartPageToken .
Store and use this token in your initial call to changes.list .


To retrieve the current page token:



### Java


drive/snippets/drive_v3/src/main/java/FetchStartPageToken.java

View on GitHub

Code

````
import
 
com.google.api.client.googleapis.json.GoogleJsonResponseException
;


import
 
com.google.api.client.http.HttpRequestInitializer
;


import
 
com.google.api.client.http.javanet.NetHttpTransport
;


import
 
com.google.api.client.json.gson.GsonFactory
;


import
 
com.google.api.services.drive.Drive
;


import
 
com.google.api.services.drive.DriveScopes
;


import
 
com.google.api.services.drive.model.StartPageToken
;


import
 
com.google.auth.http.HttpCredentialsAdapter
;


import
 
com.google.auth.oauth2.GoogleCredentials
;


import
 
java.io.IOException
;


import
 
java.util.Arrays
;



/* Class to demonstrate use-case of Drive's fetch start page token */


public
 
class
 
FetchStartPageToken
 
{



  
/**


   * Retrieve the start page token for the first time.


   *


   * @return Start page token as String.


   * @throws IOException if file is not found


   */


  
public
 
static
 
String
 
fetchStartPageToken
()
 
throws
 
IOException
 
{


        
/*Load pre-authorized user credentials from the environment.


        TODO(developer) - See https://developers.google.com/identity for


        guides on implementing OAuth2 for your application. */



    
GoogleCredentials
 
credentials
 
=
 
GoogleCredentials
.
getApplicationDefault
()


        
.
createScoped
(
Arrays
.
asList
(
DriveScopes
.
DRIVE_FILE
));


    
HttpRequestInitializer
 
requestInitializer
 
=
 
new
 
HttpCredentialsAdapter
(


        
credentials
);



    
// Build a new authorized API client service.


    
Drive
 
service
 
=
 
new
 
Drive
.
Builder
(
new
 
NetHttpTransport
(),


        
GsonFactory
.
getDefaultInstance
(),


        
requestInitializer
)


        
.
setApplicationName
(
"Drive samples"
)


        
.
build
();


    
try
 
{


      
StartPageToken
 
response
 
=
 
service
.
changes
()


          
.
getStartPageToken
().
execute
();


      
System
.
out
.
println
(
"Start token: "
 
+
 
response
.
getStartPageToken
());



      
return
 
response
.
getStartPageToken
();


    
}
 
catch
 
(
GoogleJsonResponseException
 
e
)
 
{


      
// TODO(developer) - handle error appropriately


      
System
.
err
.
println
(
"Unable to fetch start page token: "
 
+
 
e
.
getDetails
());


      
throw
 
e
;


    
}


  
}



}
````



### Python


drive/snippets/drive-v3/change_snippet/fetch_start_page_token.py

View on GitHub

Code

````
import
 
google.auth


from
 
googleapiclient.discovery
 
import
 
build


from
 
googleapiclient.errors
 
import
 
HttpError




def
 
fetch_start_page_token
():


  
"""Retrieve page token for the current state of the account.


  Returns & prints : start page token



  Load pre-authorized user credentials from the environment.


  TODO(developer) - See https://developers.google.com/identity


  for guides on implementing OAuth2 for the application.


  """

  
creds
,
 
_
 
=
 
google
.
auth
.
default
()


  
try
:

    
# create drive api client

    
service
 
=
 
build
(
"drive"
,
 
"v3"
,
 
credentials
=
creds
)


    
# pylint: disable=maybe-no-member

    
response
 
=
 
service
.
changes
()
.
getStartPageToken
()
.
execute
()

    
print
(
f
'Start token: 
{
response
.
get
(
"startPageToken"
)
}
'
)


  
except
 
HttpError
 
as
 
error
:

    
print
(
f
"An error occurred: 
{
error
}
"
)

    
response
 
=
 
None


  
return
 
response
.
get
(
"startPageToken"
)




if
 
__name__
 
==
 
"__main__"
:

  
fetch_start_page_token
()
````



### PHP


drive/snippets/drive_v3/src/DriveFetchStartPageToken.php

View on GitHub

Code

````
<
?php


use Google\Client;


use Google\Service\Drive;


# TODO - PHP client currently chokes on fetching start page token


function fetchStartPageToken()


{


    try {


        $client = new Client();


        $client->useApplicationDefaultCredentials();


        $client->addScope(Drive::DRIVE);


        $driveService = new Drive($client);


        $response = $driveService->changes->getStartPageToken();


        printf("Start token: %s\n", $response->startPageToken);


        return $response->startPageToken;


    } catch(Exception $e) {


        echo "Error Message: ".$e;


    }



}
````



### .NET


drive/snippets/drive_v3/DriveV3Snippets/FetchStartPageToken.cs

View on GitHub

Code

````
using
 
Google.Apis.Auth.OAuth2
;


using
 
Google.Apis.Drive.v3
;


using
 
Google.Apis.Services
;



namespace
 
DriveV3Snippets


{


    
// Class to demonstrate use-case of Drive's fetch start page token


    
public
 
class
 
FetchStartPageToken


    
{


        
/// <summary>


        
/// Retrieve the starting page token.


        
/// </summary>


        
/// <returns>start page token as String, null otherwise.</returns>


        
public
 
static
 
string
 
DriveFetchStartPageToken
()


        
{


            
try


            
{


                
/* Load pre-authorized user credentials from the environment.


                 TODO(developer) - See https://developers.google.com/identity for


                 guides on implementing OAuth2 for your application. */


                
GoogleCredential
 
credential
 
=
 
GoogleCredential
.
GetApplicationDefault
()


                    
.
CreateScoped
(
DriveService
.
Scope
.
Drive
);



                
// Create Drive API service.


                
var
 
service
 
=
 
new
 
DriveService
(
new
 
BaseClientService
.
Initializer


                
{


                    
HttpClientInitializer
 
=
 
credential
,


                    
ApplicationName
 
=
 
"Drive API Snippets"


                
});



                
var
 
response
 
=
 
service
.
Changes
.
GetStartPageToken
().
Execute
();


                
// Prints the token value.


                
Console
.
WriteLine
(
"Start token: "
 
+
 
response
.
StartPageTokenValue
);


                
return
 
response
.
StartPageTokenValue
;


            
}


            
catch
 
(
Exception
 
e
)


            
{


                
// TODO(developer) - handle error appropriately


                
if
 
(
e
 
is
 
AggregateException
)


                
{


                    
Console
.
WriteLine
(
"Credential Not found"
);


                
}


                
else


                
{


                    
throw
;


                
}


            
}


            
return
 
null
;


        
}


    
}


}
````



### Node.js


drive/snippets/drive_v3/change_snippets/fetch_start_page_token.js

View on GitHub

Code

````
import
 
{
GoogleAuth
}
 
from
 
'google-auth-library'
;


import
 
{
google
}
 
from
 
'googleapis'
;



/**


 * Fetches the start page token for the current state of the account.


 * @return {Promise<string>} The start page token.


 */


async
 
function
 
fetchStartPageToken
()
 
{


  
// Authenticate with Google and get an authorized client.


  
// TODO (developer): Use an appropriate auth mechanism for your app.


  
const
 
auth
 
=
 
new
 
GoogleAuth
({


    
scopes
:
 
'https://www.googleapis.com/auth/drive.appdata'
,


  
});



  
// Create a new Drive API client (v3).


  
const
 
service
 
=
 
google
.
drive
({
version
:
 
'v3'
,
 
auth
});



  
// Fetch the start page token.


  
const
 
res
 
=
 
await
 
service
.
changes
.
getStartPageToken
({});


  
const
 
token
 
=
 
res
.
data
.
startPageToken
;


  
console
.
log
(
'start token: '
,
 
token
);


  
if
 
(
!
token
)
 
{


    
throw
 
new
 
Error
(
'Start page token not found.'
);


  
}


  
return
 
token
;


}
````



## Get changes


To retrieve the list of changes for the currently signed in user, send a GET request to the changes collection, as detailed in the changes.list .


Entries in the changes collection are in chronological order (the oldest
changes appear first). The includeRemoved and restrictToMyDrive query
parameters determine whether the response should include removed or shared
items.



### Java


drive/snippets/drive_v3/src/main/java/FetchChanges.java

View on GitHub

Code

````
import
 
com.google.api.client.googleapis.json.GoogleJsonResponseException
;


import
 
com.google.api.client.http.HttpRequestInitializer
;


import
 
com.google.api.client.http.javanet.NetHttpTransport
;


import
 
com.google.api.client.json.gson.GsonFactory
;


import
 
com.google.api.services.drive.Drive
;


import
 
com.google.api.services.drive.DriveScopes
;


import
 
com.google.api.services.drive.model.ChangeList
;


import
 
com.google.auth.http.HttpCredentialsAdapter
;


import
 
com.google.auth.oauth2.GoogleCredentials
;


import
 
java.io.IOException
;


import
 
java.util.Arrays
;



/* Class to demonstrate use-case of Drive's fetch changes in file. */


public
 
class
 
FetchChanges
 
{


  
/**


   * Retrieve the list of changes for the currently authenticated user.


   *


   * @param savedStartPageToken Last saved start token for this user.


   * @return Saved token after last page.


   * @throws IOException if file is not found


   */


  
public
 
static
 
String
 
fetchChanges
(
String
 
savedStartPageToken
)
 
throws
 
IOException
 
{



        
/*Load pre-authorized user credentials from the environment.


        TODO(developer) - See https://developers.google.com/identity for


        guides on implementing OAuth2 for your application.*/


    
GoogleCredentials
 
credentials
 
=
 
GoogleCredentials
.
getApplicationDefault
()


        
.
createScoped
(
Arrays
.
asList
(
DriveScopes
.
DRIVE_FILE
));


    
HttpRequestInitializer
 
requestInitializer
 
=
 
new
 
HttpCredentialsAdapter
(


        
credentials
);



    
// Build a new authorized API client service.


    
Drive
 
service
 
=
 
new
 
Drive
.
Builder
(
new
 
NetHttpTransport
(),


        
GsonFactory
.
getDefaultInstance
(),


        
requestInitializer
)


        
.
setApplicationName
(
"Drive samples"
)


        
.
build
();


    
try
 
{


      
// Begin with our last saved start token for this user or the


      
// current token from getStartPageToken()


      
String
 
pageToken
 
=
 
savedStartPageToken
;


      
while
 
(
pageToken
 
!=
 
null
)
 
{


        
ChangeList
 
changes
 
=
 
service
.
changes
().
list
(
pageToken
)


            
.
execute
();


        
for
 
(
com
.
google
.
api
.
services
.
drive
.
model
.
Change
 
change
 
:
 
changes
.
getChanges
())
 
{


          
// Process change


          
System
.
out
.
println
(
"Change found for file: "
 
+
 
change
.
getFileId
());


        
}


        
if
 
(
changes
.
getNewStartPageToken
()
 
!=
 
null
)
 
{


          
// Last page, save this token for the next polling interval


          
savedStartPageToken
 
=
 
changes
.
getNewStartPageToken
();


        
}


        
pageToken
 
=
 
changes
.
getNextPageToken
();


      
}



      
return
 
savedStartPageToken
;


    
}
 
catch
 
(
GoogleJsonResponseException
 
e
)
 
{


      
// TODO(developer) - handle error appropriately


      
System
.
err
.
println
(
"Unable to fetch changes: "
 
+
 
e
.
getDetails
());


      
throw
 
e
;


    
}


  
}


}
````



### Python


drive/snippets/drive-v3/change_snippet/fetch_changes.py

View on GitHub

Code

````
import
 
google.auth


from
 
googleapiclient.discovery
 
import
 
build


from
 
googleapiclient.errors
 
import
 
HttpError




def
 
fetch_changes
(
saved_start_page_token
):


  
"""Retrieve the list of changes for the currently authenticated user.


      prints changed file's ID


  Args:


      saved_start_page_token : StartPageToken for the current state of the


      account.


  Returns: saved start page token.



  Load pre-authorized user credentials from the environment.


  TODO(developer) - See https://developers.google.com/identity


  for guides on implementing OAuth2 for the application.


  """

  
creds
,
 
_
 
=
 
google
.
auth
.
default
()

  
try
:

    
# create drive api client

    
service
 
=
 
build
(
"drive"
,
 
"v3"
,
 
credentials
=
creds
)


    
# Begin with our last saved start token for this user or the

    
# current token from getStartPageToken()

    
page_token
 
=
 
saved_start_page_token

    
# pylint: disable=maybe-no-member


    
while
 
page_token
 
is
 
not
 
None
:

      
response
 
=
 
(

          
service
.
changes
()
.
list
(
pageToken
=
page_token
,
 
spaces
=
"drive"
)
.
execute
()

      
)

      
for
 
change
 
in
 
response
.
get
(
"changes"
):

        
# Process change

        
print
(
f
'Change found for file: 
{
change
.
get
(
"fileId"
)
}
'
)

      
if
 
"newStartPageToken"
 
in
 
response
:

        
# Last page, save this token for the next polling interval

        
saved_start_page_token
 
=
 
response
.
get
(
"newStartPageToken"
)

      
page_token
 
=
 
response
.
get
(
"nextPageToken"
)


  
except
 
HttpError
 
as
 
error
:

    
print
(
f
"An error occurred: 
{
error
}
"
)

    
saved_start_page_token
 
=
 
None


  
return
 
saved_start_page_token




if
 
__name__
 
==
 
"__main__"
:

  
# saved_start_page_token is the token number

  
fetch_changes
(
saved_start_page_token
=
209
)
````



### PHP


drive/snippets/drive_v3/src/DriveFetchChanges.php

View on GitHub

Code

````
<
?php


use Google\Client;


use Google\Service\Drive;


# TODO - PHP client currently chokes on fetching start page token


function fetchChanges()


{


    try {


        $client = new Client();


        $client->useApplicationDefaultCredentials();


        $client->addScope(Drive::DRIVE);


        $driveService = new Drive($client);


        # Begin with our last saved start token for this user or the


        # current token from getStartPageToken()


        $savedStartPageToken = readLine("Enter Start Page Token: ");


        $pageToken = $savedStartPageToken;


        while ($pageToken != null) {


            $response = $driveService->changes->listChanges($pageToken, array(


                'spaces' => 'drive'


            ));


            foreach ($response->changes as $change) {


                // Process change


                printf("Change found for file: %s", $change->fileId);


            }


            if ($response->newStartPageToken != null) {


                // Last page, save this token for the next polling interval


                $savedStartPageToken = $response->newStartPageToken;


            }


            $pageToken = $response->nextPageToken;


        }


        echo $savedStartPageToken;


    } catch(Exception $e) {


        echo "Error Message: ".$e;


    }



}


require_once 'vendor/autoload.php';
````



### .NET


drive/snippets/drive_v3/DriveV3Snippets/FetchChanges.cs

View on GitHub

Code

````
using
 
Google.Apis.Auth.OAuth2
;


using
 
Google.Apis.Drive.v3
;


using
 
Google.Apis.Services
;



namespace
 
DriveV3Snippets


{


    
// Class to demonstrate use-case of Drive's fetch changes in file.


    
public
 
class
 
FetchChanges


    
{


        
/// <summary>


        
/// Retrieve the list of changes for the currently authenticated user.


        
/// prints changed file's ID


        
/// </summary>


        
/// <param name="savedStartPageToken">last saved start token for this user.</param>


        
/// <returns>saved token for the current state of the account, null otherwise.</returns>


        
public
 
static
 
string
 
DriveFetchChanges
(
string
 
savedStartPageToken
)


        
{


            
try


            
{


                
/* Load pre-authorized user credentials from the environment.


                 TODO(developer) - See https://developers.google.com/identity for


                 guides on implementing OAuth2 for your application. */


                
GoogleCredential
 
credential
 
=
 
GoogleCredential
.
GetApplicationDefault
()


                    
.
CreateScoped
(
DriveService
.
Scope
.
Drive
);



                
// Create Drive API service.


                
var
 
service
 
=
 
new
 
DriveService
(
new
 
BaseClientService
.
Initializer


                
{


                    
HttpClientInitializer
 
=
 
credential
,


                    
ApplicationName
 
=
 
"Drive API Snippets"


                
});



                
// Begin with our last saved start token for this user or the


                
// current token from GetStartPageToken()


                
string
 
pageToken
 
=
 
savedStartPageToken
;


                
while
 
(
pageToken
 
!=
 
null
)


                
{


                    
var
 
request
 
=
 
service
.
Changes
.
List
(
pageToken
);


                    
request
.
Spaces
 
=
 
"drive"
;


                    
var
 
changes
 
=
 
request
.
Execute
();


                    
foreach
 
(
var
 
change
 
in
 
changes
.
Changes
)


                    
{


                        
// Process change


                        
Console
.
WriteLine
(
"Change found for file: "
 
+
 
change
.
FileId
);


                    
}



                    
if
 
(
changes
.
NewStartPageToken
 
!=
 
null
)


                    
{


                        
// Last page, save this token for the next polling interval


                        
savedStartPageToken
 
=
 
changes
.
NewStartPageToken
;


                    
}


                    
pageToken
 
=
 
changes
.
NextPageToken
;


                
}


                
return
 
savedStartPageToken
;


            
}


            
catch
 
(
Exception
 
e
)


            
{


                
// TODO(developer) - handle error appropriately


                
if
 
(
e
 
is
 
AggregateException
)


                
{


                    
Console
.
WriteLine
(
"Credential Not found"
);


                
}


                
else


                
{


                    
throw
;


                
}


            
}


            
return
 
null
;


        
}


    
}


}
````



### Node.js


drive/snippets/drive_v3/change_snippets/fetch_changes.js

View on GitHub

Code

````
import
 
{
GoogleAuth
}
 
from
 
'google-auth-library'
;


import
 
{
google
}
 
from
 
'googleapis'
;



/**


 * Fetches the list of changes for the currently authenticated user.


 * @param {string} savedStartPageToken The page token obtained from `fetch_start_page_token.js`.


 */


async
 
function
 
fetchChanges
(
savedStartPageToken
)
 
{


  
// Authenticate with Google and get an authorized client.


  
// TODO (developer): Use an appropriate auth mechanism for your app.


  
const
 
auth
 
=
 
new
 
GoogleAuth
({


    
scopes
:
 
'https://www.googleapis.com/auth/drive.readonly'
,


  
});



  
// Create a new Drive API client (v3).


  
const
 
service
 
=
 
google
.
drive
({
version
:
 
'v3'
,
 
auth
});



  
// The page token for the next page of changes.


  
let
 
pageToken
 
=
 
savedStartPageToken
;



  
// Loop to fetch all changes, handling pagination.


  
do
 
{


    
const
 
result
 
=
 
await
 
service
.
changes
.
list
({


      
pageToken
:
 
savedStartPageToken
,


      
fields
:
 
'*'
,


    
});



    
// Process the changes.


    
(
result
.
data
.
changes
 
??
 
[]).
forEach
((
change
)
 
=
>
 
{


      
console
.
log
(
'change found for file: '
,
 
change
.
fileId
);


    
});



    
// Update the page token for the next iteration.


    
pageToken
 
=
 
result
.
data
.
newStartPageToken
 
??
 
''
;


  
}
 
while
 
(
pageToken
);


}
````


The changes collection in the response might contain a nextPageToken . If the nextPageToken is listed, it can be used to gather the
next page of changes. If it's not listed, the client application should store
the newStartPageToken in the response for future use. With the page token
stored, the client application is prepared to query again for future changes.



## Receive notifications


Use the changes.watch method to
subscribe to updates in the change log. Notifications don't contain details
about the changes. Instead, they indicate that new changes are available. To
retrieve the actual changes, poll the change feed as described in Get
changes .


Note:

While not documented in

`changes.watch`
, the method does require a

`pageToken`
parameter similar to

`changes.list`
. This can be retrieved from

`changes.getStartPageToken`
.

For more information, see Notifications for resource changes .

## Receive notifications for resource changes

_Source: https://developers.google.com/workspace/drive/api/guides/push_

This document describes how to use push notifications that inform your
application when a resource changes.



## Overview


The Google Drive API provides push notifications that let you monitor
  changes in resources. You can use this feature to improve the performance of
  your application. It lets you eliminate the extra network and compute
  costs involved with polling resources to determine if they have changed.
  Whenever a watched resource changes, the Google Drive API notifies your
  application.


To use push notifications, you must do two things:


- Set up your receiving URL or "webhook" callback receiver. This
    is an HTTPS server that handles the API notification messages that are
    triggered when a resource changes.

- Set up a ( notification channel ) for each resource endpoint you want to
    watch. A channel specifies routing information for notification
    messages. As part of the channel setup, you must identify the specific URL where
    you want to receive notifications. Whenever a channel's resource changes,
    the Google Drive API sends a notification message as a POST request to that URL.



Currently, the Google Drive API supports notifications for changes to
  the files and changes methods.



## Create notification channels


To request push notifications, you must set up a notification channel
  for each resource you want to monitor. After your notification channels are set
  up, the Google Drive API informs your application when any watched resource
  changes.



### Make watch requests


Each watchable Google Drive API resource has an associated watch method at a URI of the following form:


````
https://www.googleapis.com/
API_NAME
/
API_VERSION
/
RESOURCE_PATH
/watch
````


To set up a notification channel for messages about changes to a
    particular resource, send a POST request to the watch method for the resource.


Each notification channel is associated both with a particular user and
    a particular resource (or set of resources). A watch request
    won't be successful unless the current user
    
    
    or service account
    
    
    owns or has permission to access this resource.



#### Examples


The following code sample shows how to use a channels resource to start watching for changes to a single files resource using the files.watch method:


````
POST https://www.googleapis.com/drive/v3/files/
fileId
/watch
Authorization: Bearer 
CURRENT_USER_AUTH_TOKEN

Content-Type: application/json

{
  "id": "01234567-89ab-cdef-0123456789ab", // Your channel ID.
  "type": "web_hook",
  "address": "https://mydomain.com/notifications", // Your receiving URL.
  ...
  "token": "target=myApp-myFilesChannelDest", // (Optional) Your files channel token.
  "expiration": 1426325213000 // (Optional) Your requested channel expiration date and time.
}
````


The following code sample shows how to use a channels resource to start watching for all changes using the changes.watch method:


````
POST https://www.googleapis.com/drive/v3/changes/watch
Authorization: Bearer 
CURRENT_USER_AUTH_TOKEN

Content-Type: application/json

{
  "id": "4ba78bf0-6a47-11e2-bcfd-0800200c9a77", // Your channel ID.
  "type": "web_hook",
  "address": "https://mydomain.com/notifications", // Your receiving URL.
  ...
  "token": "target=myApp-myChangesChannelDest", // (Optional) Your changes channel token.
  "expiration": 1426325213000 // (Optional) Your requested channel expiration date and time.
}
````



#### Required properties


With each watch request, you must provide these fields:


- An id property string that uniquely identifies this
          new notification channel within your project. We recommend using
          a universally unique identifier
          ( UUID ) or any similar
          unique string. Maximum length: 64 characters. The ID value you set is echoed back in the X-Goog-Channel-Id HTTP header of every notification
          message that you receive for this channel. A type property string set to the value web_hook . An address property string set to the URL that listens
          and responds to notifications for this notification channel. This is
          your webhook callback URL, and it must use HTTPS. Note that the Google Drive API is able to send notifications to
          this HTTPS address only if there's a valid SSL certificate installed
          on your web server. Invalid certificates include: Self-signed certificates. Certificates signed by an untrusted source. Certificates that have been revoked. Certificates that have a subject that doesn't match the target
            hostname.




#### Optional properties


You can also specify these optional fields with your watch request:


- A token property that specifies an arbitrary string
          value to use as a channel token. You can use notification channel
          tokens for various purposes. For example, you can use the
          token to verify that each incoming message is for a channel that your
          application created—to ensure that the notification is not being
          spoofed—or to route the message to the right destination within
          your application based on the purpose of this channel. Maximum length:
          256 characters. The token is included in the X-Goog-Channel-Token HTTP header in every notification
          message that your application receives for this channel. If you use notification channel tokens, we recommend that you: Use an extensible encoding format, such as URL query
            parameters. Example: forwardTo=hr&createdBy=mobile Don't include sensitive data such as OAuth tokens. Note: If you must send highly-sensitive
          data, make sure it's encrypted before adding it to the
          token.

  Use an extensible encoding format, such as URL query
            parameters. Example: forwardTo=hr&createdBy=mobile


  Don't include sensitive data such as OAuth tokens.


- An expiration property string set to a Unix timestamp (in milliseconds) of the date and time when you want the Google Drive API to
            stop sending messages for this notification channel. If a channel has an expiration time, it's included as the value
            of the X-Goog-Channel-Expiration HTTP header (in human-readable
            format) in every notification message that your
            application receives for this channel.



Note:

For Google Drive API, the maximum expiration time is 86400 seconds (1 day) after the current time for the

`files`
resource and 604800 seconds (1 week) for

`changes`
. If you don’t set the

`expiration`
property in your request, the expiration time defaults to 3600 seconds after the current time.

For more details on the request, refer to the watch method
    for the files and changes methods in the API Reference.



#### Watch response


If the watch request successfully creates a notification
      channel, it returns an HTTP 200 OK status code.


The message body of the watch response provides information about the
      notification channel you just created, as shown in the example below.


````
{
  "kind": "api#channel",
  "id": "01234567-89ab-cdef-0123456789ab"", // ID you specified for this channel.
  "resourceId": "o3hgv1538sdjfh", // ID of the watched resource.
  "resourceUri": "https://www.googleapis.com/drive/v3/files/o3hgv1538sdjfh", // Version-specific ID of the watched resource.
  "token": "target=myApp-myFilesChannelDest", // Present only if one was provided.
  "expiration": 1426325213000, // Actual expiration date and time as UNIX timestamp (in milliseconds), if applicable.
}
````


In addition to the properties you sent as part of your request, the
      returned information also includes the resourceId and resourceUri to identify the resource being watched on this
      notification channel.


Note:

The

`resourceId`
property is a stable, version-independent identifier for the resource. The

`resourceUri`
property is the canonical URI of the watched resource in the context of the current API version, so it's version-specific.

You can pass the returned information to other notification channel
      operations, such as when you want to stop receiving
      notifications .


For more details on the response, refer to the watch method for the files and changes methods in the API Reference.



#### Sync message


After creating a notification channel to watch a resource, the
      Google Drive API sends a sync message to indicate that
      notifications are starting. The X-Goog-Resource-State HTTP
      header value for these messages is sync . Due to network
      timing issues, it's possible to receive the sync message
      even before you receive the watch method response.


It's safe to ignore the sync notification, but you can
      also use it.  For example, if you decide you don't want to keep
      the channel, you can use the X-Goog-Channel-ID and X-Goog-Resource-ID values in a call to stop receiving notifications . You can also use the sync notification to do some initialization to prepare for
      later events.


The format of sync messages the Google Drive API sends to
      your receiving URL is shown below.


````
POST https://mydomain.com/notifications // Your receiving URL.
X-Goog-Channel-ID: channel-ID-value
X-Goog-Channel-Token: channel-token-value
X-Goog-Channel-Expiration: expiration-date-and-time // In human-readable format. Present only if the channel expires.
X-Goog-Resource-ID: identifier-for-the-watched-resource
X-Goog-Resource-URI: version-specific-URI-of-the-watched-resource
X-Goog-Resource-State: sync
X-Goog-Message-Number: 1
````


Sync messages always have an X-Goog-Message-Number HTTP
      header value of 1 . Each subsequent notification for this channel has
      a message number that's larger than the previous one, though the message
      numbers will not be sequential.



### Renew notification channels


A notification channel can have an expiration time, with a value
    determined either by your request or by any Google Drive API internal limits
    or defaults (the more restrictive value is used).  The channel's expiration
    time, if it has one, is included as a Unix timestamp (in milliseconds) in the information returned by the watch method.  In addition, the
    expiration date and time is included  (in human-readable format) in every
    notification message your application receives for this channel in the X-Goog-Channel-Expiration HTTP header.


Currently, there's no automatic way to renew a notification channel. When
    a channel is close to its expiration, you must replace it with a new one by calling
    the watch method. As always, you must use a unique value for
    the id property of the new channel. Note that there's likely
    to be an "overlap" period of time when the two notification channels for the
    same resource are active.



## Receive notifications


Whenever a watched resource changes, your application receives a
  notification message describing the change. The Google Drive API sends these
  messages as HTTPS POST requests to the URL you specified as the address property for this notification
  channel.


Note:

Notification delivery HTTPS requests specify a user agent of

`APIs-Google`
and respect robots.txt directives, as described in

APIs Google User Agent

.


### Interpret the notification message format


All notification messages include a set of HTTP headers that have X-Goog- prefixes.
    Some types of notifications can also include a
    message body.



#### Headers


Notification messages posted by the Google Drive API to your receiving
      URL include the following HTTP headers:


| Header | Description |

| --- | --- |

| Always present |

| X-Goog-Channel-ID | UUID or other unique string you provided to identify this notification channel. |

| X-Goog-Message-Number | Integer that identifies this message for this notification channel. Value is always 1 for sync messages. Message numbers increase for each subsequent message on the channel, but they're not sequential. |

| X-Goog-Resource-ID | An opaque value identifying the watched resource. This ID is stable across API versions. |

| X-Goog-Resource-State | The new resource state that triggered the notification. Possible values: sync , add , remove , update , trash , untrash , or change . |

| X-Goog-Resource-URI | An API-version-specific identifier for the watched resource. |

| Sometimes present |

| X-Goog-Changed | Additional details about the changes. Possible values: content , parents , children , or permissions . Not provided with sync messages. |

| X-Goog-Channel-Expiration | Date and time of notification channel expiration, expressed in human-readable format. Only present if defined. |

| X-Goog-Channel-Token | Notification channel token that was set by your application, and that you can use to verify the notification source. Only present if defined. |



Notification messages for files and changes are empty.



#### Examples


Change notification message for files resources, which doesn't include a request body:


````
POST https://mydomain.com/notifications // Your receiving URL.
Content-Type: application/json; utf-8
Content-Length: 0
X-Goog-Channel-ID: 4ba78bf0-6a47-11e2-bcfd-0800200c9a66
X-Goog-Channel-Token: 398348u3tu83ut8uu38
X-Goog-Channel-Expiration: Tue, 19 Nov 2013 01:13:52 GMT
X-Goog-Resource-ID:  ret08u3rv24htgh289g
X-Goog-Resource-URI: https://www.googleapis.com/drive/v3/files/ret08u3rv24htgh289g
X-Goog-Resource-State:  update
X-Goog-Changed: content,properties
X-Goog-Message-Number: 10
````


Change notification message for changes resources, which includes a request body:


````
POST https://mydomain.com/notifications // Your receiving URL.
Content-Type: application/json; utf-8
Content-Length: 118
X-Goog-Channel-ID: 8bd90be9-3a58-3122-ab43-9823188a5b43
X-Goog-Channel-Token: 245t1234tt83trrt333
X-Goog-Channel-Expiration: Tue, 19 Nov 2013 01:13:52 GMT
X-Goog-Resource-ID:  ret987df98743md8g
X-Goog-Resource-URI: https://www.googleapis.com/drive/v3/changes
X-Goog-Resource-State:  changed
X-Goog-Message-Number: 23

{
  "kind": "drive#changes"
}
````



### Respond to notifications


To indicate success, you can return any of the following status codes: 200 , 201 , 202 , 204 , or 102 .


If your service uses Google's API client library and returns 500 , 502 , 503 , or 504 , the Google Drive API
      retries with exponential backoff .
      Every other return status code is considered to be a message failure.



### Understand Google Drive API notification events


This section provides details on the notification messages you can
    receive when using push notifications with the Google Drive API.


| X-Goog-Resource-State | Applies to | Delivered when |

| --- | --- | --- |

| sync | files , changes | A channel was successfully created. You can expect to start receiving notifications for it. |

| add | files | A resource was created or shared. |

| remove | files | An existing resource was deleted or unshared. |

| update | files | One or more properties (metadata) of a resource have been updated. |

| trash | files | A resource has been moved to the trash. |

| untrash | files | A resource has been removed from the trash. |

| change | changes | One or more changelog items have been added. |



Additional resource state events might be added to this list over time. You might receive unexpected event types. Your event handlers should gracefully ignore these.


For update events, the X-Goog-Changed HTTP header might be provided. That header contains a comma-separated list that describes the types of changes that have occurred.


| Change type | Indicates |

| --- | --- |

| content | The resource content has been updated. |

| properties | One or more resource properties have been updated. |

| parents | One or more resource parents have been added or removed. |

| children | One or more resource children have been added or removed. |

| permissions | The resource permissions have been updated. |



Example with X-Goog-Changed header:


````
X-Goog-Resource-State: update
X-Goog-Changed: content, permissions
````



## Stop notifications


The expiration property controls when the notifications stop automatically. You can
  choose to stop receiving notifications for a particular channel before it
  expires by calling the stop method at
  
  the following URI:


````
https://www.googleapis.com/drive/v3/channels/stop
````


This method requires that you provide at least the channel's id and the resourceId properties, as shown in the
  example below. Note that if the Google Drive API has several types of
  resources that have watch methods, there's only one stop method.


Only users with the right permission can stop a channel. In particular:


- If the channel was created by a regular user account, only the same
    user from the same client (as identified by the OAuth 2.0 client IDs from the
    auth tokens) who created the channel can stop the channel.

- If the channel was created by a service account, any user from the same
    client can stop the channel.



The following code sample shows how to stop receiving notifications:


````
POST https://www.googleapis.com/drive/v3/channels/stop
  
Authorization: Bearer 
CURRENT_USER_AUTH_TOKEN

Content-Type: application/json

{
  "id": "4ba78bf0-6a47-11e2-bcfd-0800200c9a66",
  "resourceId": "ret08u3rv24htgh289g"
}
````

## Overview of Drive apps

_Source: https://developers.google.com/workspace/drive/api/guides/about-apps_

The Google Drive user interface
(UI) is a
Google-provided application where Drive users can create,
organize, discover, and share content stored on Google Drive. You can
integrate your Drive-enabled app with the Drive UI
to take advantage of these features. There are two integrations that you can
perform:


- Using the Drive UI's "New" button .

- Using the Drive UI's "Open with" menu item .




## Drive UI's "New" button


If you want Drive UI users to call your app to create a file,
integrate your app with the Drive UI's "New" button.


The "New" button lets users open your application or other editor-style apps,
such as Google Docs and Google Sheets, to create a new document.


Figure 1.

Using Drive UI's "New" button.


## Drive UI's "Open with" menu item


If you want Drive UI users to open documents with your app,
integrate your app with the Drive UI's "Open with" menu item.


When a user right-clicks on a file in the Drive UI, a context
menu opens. The right-click menu contains an "Open with" item letting the user
select an application to open the file.


Figure 2.

Using Drive UI's "Open with" menu item.


## Related topics


For instructions on how to begin your integration, continue to Configure a
Drive UI integration .

## Configure a Drive UI integration

_Source: https://developers.google.com/workspace/drive/api/guides/enable-sdk_

To display your app in Google Drive when a user creates or opens a file, you
must first set up a Drive user interface (UI) integration.
Configuration is also required to list your app in the Google Workspace Marketplace .



## Enable the Drive API


Before using Google APIs, you must turn them on in a Google Cloud
project. You can turn on one or more APIs in a single Google Cloud
project.


To get started integrating with the Google Drive UI, you must enable the
Drive API. This gives you access to the API and the UI integration
features.


- In the Google Cloud console, enable the Google Drive API. Enable the API




## Set up Drive UI integration


1. In the Google API Console, go to Menu menu > APIs & Services > Enabled APIs & services . Go to Enabled APIs & services

2. At the bottom of the APIs & Services dashboard, click Google Drive API . The
Google Drive API configuration page appears.

3. Select the Drive UI integration tab.

4. (Optional) Enter a name in the Application name field. The application
name is displayed to users in the Manage Apps tab in Drive
settings.

5. (Optional) Enter a short, one-line description in the Short description field. The short description is displayed to users in the Manage Apps tab in
Drive settings.

6. (Optional) Enter a full description in the Long description field.

7. Upload one or more Application icons to display in a user's list of
connected Drive apps and in the "Open with" context menu.
Icons should be in PNG format with a transparent background. Icons can take
up to 24 hours to appear in Drive. Note: Document icons are deprecated. Your application icon appears next
to shortcut and third-party shortcut files. A set of standard icons is used
for other file types.

8. To use Drive UI's "Open with" menu
item , enter the URL to your app in the Open URL field. This URL is used by the "Open With" context menu. This URL must contain a fully qualified domain name; localhost doesn't
work. This URL should be accessible to the intended users of your application.
If you have multiple application versions, such as one for public
release and one for restricted release to select users, each version
should use a unique URL. You can then create different app
configurations for each version. You must verify ownership of this URL before you can list your app in the Google Workspace Marketplace. By default, a state query parameter is appended to this URL to pass
data from the Drive UI to your app. For information on
the contents of the state parameter, see The state parameter . Warning: The option to automatically show the OAuth 2.0 consent screen is
deprecated. Don't check this box. The application must start all authorization
requests.

  This URL must contain a fully qualified domain name;

  `localhost`
  doesn't work.

  This URL should be accessible to the intended users of your application. If you have multiple application versions, such as one for public release and one for restricted release to select users, each version should use a unique URL. You can then create different app configurations for each version.

  You must

  verify ownership of this URL

  before you can list your app in the Google Workspace Marketplace.

  By default, a

  `state`
  query parameter is appended to this URL to pass data from the Drive UI to your app. For information on the contents of the

  `state`
  parameter, see

  The

  `state`
  parameter

  .

9. (Optional) Enter default MIME types and file extensions in the Default MIME types and Default file extensions fields. Default MIME
types and file extensions represent files your app is uniquely built to
open. For example, your app might open a built-in format for layering and
editing images. Only include standard media
types and make sure they're free of typos and misspellings. If your app only opens
shortcut or third-party shortcut files, you can leave MIME type blank.

10. (Optional) Enter secondary MIME types and file extensions in the Secondary
MIME types and Secondary file extensions fields. Secondary MIME types
and file extensions represent files your app can open, but are not specific
to your app. For example, your app might be an image-editing app that opens
PNG and JPG images. Only include standard media
types and make sure they're free of typos and misspellings. If your app only opens
shortcut or third-party shortcut files, you can leave MIME type blank. Note: If a user installs multiple Drive apps that can open a
file, the most-recently installed app is used until the user chooses another
app.

11. To use Drive UI's "New"
button and have users create a file with
your app, check the Creating files box. The New URL and optional Document name fields appear. This URL must contain a fully qualified domain name; localhost doesn't
work. You must verify ownership of this
URL before you can list your app in the Google Workspace Marketplace. By default, a state query parameter is appended to this URL to pass
data from the Drive UI to your app. For information on
the contents of the state parameter, see The state parameter .

  This URL must contain a fully qualified domain name;

  `localhost`
  doesn't work.

  You must

  verify ownership of this URL

  before you can list your app in the Google Workspace Marketplace.

  By default, a

  `state`
  query parameter is appended to this URL to pass data from the Drive UI to your app. For information on the contents of the

  `state`
  parameter, see

  The

  `state`
  parameter

  .

12. Enter a URL in the New URL field. This URL is used by the "New" button
to redirect the user to your application. Note: Leave the Document name field blank. This field is no longer used.

13. (Optional) If you want your app to open Google Workspace-supported files,
check the Importing box.

14. (Optional) If your app must manage files on shared drives, check the Shared drives support box. For further information on how to support
shared drives in your app, see Implement shared drive
support .

15. Click Submit .




## Request the drive.install scope


To allow apps to appear as an option in the "Open with" or the "New" menu,
request the https://www.googleapis.com/auth/drive.install scope to integrate
with the Drive UI. When requesting this scope, users receive a
dialog similar to this:


Figure 1.

The installation dialog when using scopes for Drive UI.

For more information about scopes you can request for Drive apps,
and how to request them, see API-specific authorization and authentication
information .


Note:

If you

publish your Drive app

to the Google Workspace Marketplace, users and domain administrators can search for and install the app directly from the

Google Workspace Marketplace

.


### The state parameter


By default, a state parameter is appended to both the Open URL and the New URL
to pass data from the Drive UI to your app. This parameter
contains a JSON-encoded string with template variables and data about the
request to your app. The variables included depend on the type of URL used (Open
URL or New URL):


| Template variable | Description | URL application |

| --- | --- | --- |

| {ids} | A comma-separated list of file IDs being opened. | Open URL |

| {exportIds} | A comma-separated list of file IDs being exported. Used only when opening Google Workspace files. | Open URL |

| {resourceKeys} | A JSON dictionary of file IDs mapped to their respective resource keys. | Open URL |

| {folderId} | The ID of the parent folder. | New URL |

| {folderResourceKey} | The resource key of the parent folder. | New URL |

| {userId} | The profile ID that identifies the user. | Open URL and New URL |

| {action} | The action being performed. The value is open when using an Open URL or create when using a New URL. | Open URL and New URL |



The state parameter is URL-encoded, so your app must handle the escape
characters and parse it as JSON. Apps can detect the create value in the state parameter to verify a request to create a file.



#### Example state information in JSON for a New URL


The state information for a New URL is:


````
{
  "action":"create",
  "folderId":"
FOLDER_ID
",
  "folderResourceKey":"
FOLDER_RESOURCE_KEY
",
  "userId":"
USER_ID
"
}
````



#### Example state information in JSON for an Open URL


The state information for an Open URL is:


````
{
  "ids": ["
ID
"],
  "resourceKeys":{"
RESOURCE_KEYS
":"
RESOURCE_KEYS
"},
  "action":"open",
  "userId":"
USER_ID
"
}
````


The IDs and resource keys are used to fetch file metadata and download file
content. Once your app has the file ID and an access token, it can check
permissions, fetch the file metadata, and download the file content as described
in the files.get method.


Note:

All apps, including apps opening files from shortcuts and third-party shortcuts, should call the

`files.get`
method to check the user's permissions for a document. Apps should warn read-only users when they're opening a file they cannot edit or save (instead of letting them spend time editing, and then displaying an error on save).


## Related topics


An installed app must be able to create, manage, and open actions launched from
the Drive UI. To learn more, see Integrate with
Drive UI's "New" button or Integrate with Drive UI's "Open with" context
menu .

## Integrate with Drive UI's New button

_Source: https://developers.google.com/workspace/drive/api/guides/integrate-create_

When a user clicks Drive UI's "New"
button and selects an app in the
Drive UI, Drive redirects the user to that app's New URL
defined in Configure a Drive UI
integration .


Your app then receives a default set of template variables within a state parameter. The default state information for a New URL is:


````
{
  "action":"create",
  "folderId":"
FOLDER_ID
",
  "folderResourceKey":"
FOLDER_RESOURCE_KEY
",
  "userId":"
USER_ID
"
}
````


This output includes the following values:


- create : The action being performed. The value is create when a user
clicks Drive UI's "New"
button .

- FOLDER_ID : The ID of the parent folder.

- FOLDER_RESOURCE_KEY : The resource key of the parent folder.

- USER_ID : The profile ID that uniquely identifies the
    user.



Your app must act on this request by following these steps:


1. Verify that the action field has a value of create .

2. Use the userId value to create a new session for the user. For more
information on signed-in users, see Users & new events .

3. Use the files.create method to
create a file resource. If folderId was set on the request, set the parents field to the folderId value.

4. If folderResourceKey was set on the request, set the X-Goog-Drive-Resource-Keys request header. For more information on
resource keys, see Access link-shared files using resource
keys .



The state parameter is URL-encoded, so your app must handle the escape
characters and parse it as JSON.



## Users & new events


Drive apps should treat all "create" events as potential
sign-ins. Some users might have multiple accounts, so the user ID in the state parameter might not match the current session. If the user ID in the state parameter doesn't match the current session, end the current session for your
app and sign in as the requested user.

## Integrate with Drive UI's Open with context menu

_Source: https://developers.google.com/workspace/drive/api/guides/integrate-open_

When a user selects a file and clicks the Drive UI's "Open with"
menu  item , Drive redirects
the user to that app's Open URL defined in Configure a Drive UI
integration .


If you checked the "Importing" box when you configured a Drive UI
integration, the user can select a combination of app-specific and
Google Workspace files to open. When you configure a Drive UI
integration, app-specific files are defined in the "Default MIME types" and
"Default file extensions" fields, whereas Google Workspace
files are defined in the "Secondary MIME types" and "Secondary file extensions"
fields.


For each file that the user wants to open, Drive checks the MIME
types against your defined default and secondary MIME types:


- For MIME types defined in the "Default MIME types" field, the file ID is
passed to your app. For information on how to handle app-specific files,
see Handle an Open URL for app-specific documents .

- For MIME types defined in the "Secondary MIME types" field, the
Drive UI displays a dialog asking the user what file type to
convert the Google Workspace file to. For example, if you select a
Google Docs file in the Drive UI and the "Secondary MIME
types" field suggests your app supports text/plain or application/pdf, the
Drive UI asks the user if they want to convert to Plain Text
or PDF. For information on how to handle Google Workspace
files, see Handle an Open URL for Google Workspace documents .
For a list of Google Workspace documents and MIME type conversion formats,
see Export MIME types for Google Workspace
documents .




## Handle an Open URL for app-specific documents


As mentioned in Configure a Drive UI
integration ,
your app receives template variables with information for your app to open
the file. Your app receives a default set of template variables
within a state parameter. The
default state information for an app-specific Open URL is:


````
{
  "ids": ["
ID
"],
  "resourceKeys":{"
RESOURCE_KEYS
":"
RESOURCE_KEYS
"},
  "action":"open",
  "userId":"
USER_ID
"
}
````


This output includes the following values:


- ID : The ID of the parent folder.

- RESOURCE_KEYS : A JSON dictionary of file IDs mapped to
their respective resource keys.

- open : The action being performed. The value is open when using an Open
URL.

- USER_ID : The profile ID that uniquely identifies the user.



Your app must act on this request by following these steps:


1. Verify that the action field has a value of open and the ids field is
present.

2. Use the userId value to create a new session for the user. For more
information on signed-in users, see Users & new events .

3. Use the files.get method to check
permissions, fetch file metadata, and download the file content using
the ID values.

4. If resourceKeys was set on the request, set the X-Goog-Drive-Resource-Keys request header. For more information on
resource keys, see Access link-shared files using resource
keys .



The state parameter is URL-encoded, so your app must handle the escape
characters and parse it as JSON.


Note:

All apps, including apps opening files from shortcuts and third-party shortcuts, should call the

`files.get`
method to check the user's permissions for a document. Apps should warn read-only users when they're opening a file they cannot edit or save (instead of letting them spend time editing, and then displaying an error on save).


## Handle an Open URL for Google Workspace documents


As mentioned in Configure a Drive UI
integration , your app receives a default set of
template variables within a state parameter. The default state information
for a Google Workspace Open URL is:


````
{


  
"exportIds"
:
 
[
"
ID
"
],


  
"resourceKeys"
:{
"
RESOURCE_KEYS
"
:
"
RESOURCE_KEYS
"
},


  
"action"
:
"open"
,


  
"userId"
:
"
USER_ID
"


}
````


This output includes the following values:


- EXPORT_ID : A comma-separated list of file IDs being
exported. Used only when opening Google Workspace files.

- RESOURCE_KEYS : A JSON dictionary of file IDs mapped to
their respective resource keys.

- open : The action being performed. The value is open when using an Open
URL.

- USER_ID : The profile ID that identifies the user.



Your app must act on this request by following these steps:


1. Verify that this is a request to open a file by detecting both the open value in the state field and the presence of the exportIds field.

2. Use the files.get method to check
permissions, fetch file metadata, and determine the MIME type using the EXPORT_ID values.

3. Convert the file content using the files.export method. The following
code sample shows how to export a Google Workspace document to the
requested MIME type.

4. If resourceKey was set on the request, set the X-Goog-Drive-Resource-Keys request header. For more information on
resource keys, see Access link-shared files using resource
keys . Java drive/snippets/drive_v3/src/main/java/ExportPdf.java View on GitHub import com.google.api.client.googleapis.json.GoogleJsonResponseException ; import com.google.api.client.http.HttpRequestInitializer ; import com.google.api.client.http.javanet.NetHttpTransport ; import com.google.api.client.json.gson.GsonFactory ; import com.google.api.services.drive.Drive ; import com.google.api.services.drive.DriveScopes ; import com.google.auth.http.HttpCredentialsAdapter ; import com.google.auth.oauth2.GoogleCredentials ; import java.io.ByteArrayOutputStream ; import java.io.IOException ; import java.io.OutputStream ; import java.util.Arrays ; /* Class to demonstrate use-case of drive's export pdf. */ public class ExportPdf { /** * Download a Document file in PDF format. * * @param realFileId file ID of any workspace document format file. * @return byte array stream if successful, {@code null} otherwise. * @throws IOException if service account credentials file not found. */ public static ByteArrayOutputStream exportPdf ( String realFileId ) throws IOException { // Load pre-authorized user credentials from the environment. // TODO(developer) - See https://developers.google.com/identity for // guides on implementing OAuth2 for your application. GoogleCredentials credentials = GoogleCredentials . getApplicationDefault () . createScoped ( Arrays . asList ( DriveScopes . DRIVE_FILE )); HttpRequestInitializer requestInitializer = new HttpCredentialsAdapter ( credentials ); // Build a new authorized API client service. Drive service = new Drive . Builder ( new NetHttpTransport (), GsonFactory . getDefaultInstance (), requestInitializer ) . setApplicationName ( "Drive samples" ) . build (); OutputStream outputStream = new ByteArrayOutputStream (); try { service . files (). export ( realFileId , "application/pdf" ) . executeMediaAndDownloadTo ( outputStream ); return ( ByteArrayOutputStream ) outputStream ; } catch ( GoogleJsonResponseException e ) { // TODO(developer) - handle error appropriately System . err . println ( "Unable to export file: " + e . getDetails ()); throw e ; } } } Python drive/snippets/drive-v3/file_snippet/export_pdf.py View on GitHub import io import google.auth from googleapiclient.discovery import build from googleapiclient.errors import HttpError from googleapiclient.http import MediaIoBaseDownload def export_pdf ( real_file_id ): """Download a Document file in PDF format. Args: real_file_id : file ID of any workspace document format file Returns : IO object with location Load pre-authorized user credentials from the environment. TODO(developer) - See https://developers.google.com/identity for guides on implementing OAuth2 for the application. """ creds , _ = google . auth . default () try : # create drive api client service = build ( "drive" , "v3" , credentials = creds ) file_id = real_file_id # pylint: disable=maybe-no-member request = service . files () . export_media ( fileId = file_id , mimeType = "application/pdf" ) file = io . BytesIO () downloader = MediaIoBaseDownload ( file , request ) done = False while done is False : status , done = downloader . next_chunk () print ( f "Download { int ( status . progress () * 100 ) } ." ) except HttpError as error : print ( f "An error occurred: { error } " ) file = None return file . getvalue () if __name__ == "__main__" : export_pdf ( real_file_id = "1zbp8wAyuImX91Jt9mI-CAX_1TqkBLDEDcr2WeXBbKUY" ) Node.js drive/snippets/drive_v3/file_snippets/export_pdf.js View on GitHub import { GoogleAuth } from 'google-auth-library' ; import { google } from 'googleapis' ; /** * Exports a Google Doc as a PDF. * @param {string} fileId The ID of the file to export. * @return {Promise<number>} The status of the export request. */ async function exportPdf ( fileId ) { // Authenticate with Google and get an authorized client. // TODO (developer): Use an appropriate auth mechanism for your app. const auth = new GoogleAuth ({ scopes : 'https://www.googleapis.com/auth/drive' , }); // Create a new Drive API client (v3). const service = google . drive ({ version : 'v3' , auth }); // Export the file as a PDF. const result = await service . files . export ({ fileId , mimeType : 'application/pdf' , }); // Print the status of the export. console . log ( result . status ); return result . status ; } PHP drive/snippets/drive_v3/src/DriveExportPdf.php View on GitHub < ?php use Google\Client; use Google\Service\Drive; function exportPdf() { try { $client = new Client(); $client->useApplicationDefaultCredentials(); $client->addScope(Drive::DRIVE); $driveService = new Drive($client); $realFileId = readline("Enter File Id: "); $fileId = '1ZdR3L3qP4Bkq8noWLJHSr_iBau0DNT4Kli4SxNc2YEo'; $fileId = $realFileId; $response = $driveService->files->export($fileId, 'application/pdf', array( 'alt' => 'media')); $content = $response->getBody()->getContents(); return $content; }  catch(Exception $e) { echo "Error Message: ".$e; } }



Display converted files as read-only or present a dialog letting the user to
save the file as the new file type.


The state parameter is URL-encoded, so your app must handle the escape
characters and parse it as JSON.



## Users & new events


Drive apps should treat all "open with" events as potential
sign-ins. Some users might have multiple accounts, so the user ID in the state parameter might not match the current session. If the user ID in the state parameter doesn't match the current session, end the current session for your
app and sign in as the requested user.



## Related topics


In addition to opening an application from Google Drive UI, applications can
display a file picker to select content from within an app. For more
information, see the Google Picker .

## Display the Google Picker

_Source: https://developers.google.com/workspace/drive/api/guides/picker_

The Google Picker is a "File Open" dialog for information stored on
Google Drive. You can use the Google Picker API for web
apps or the Google Picker API for
desktop apps to allow users to
open or upload Drive files. The Google Picker API is separate from
the Google Drive API.


Note:

To allow users to open Drive files from a mobile app, refer to

Google APIs for Android

or

Google APIs for iOS

.

## Add the Save to Drive button

_Source: https://developers.google.com/workspace/drive/api/guides/savetodrive_

The "Save to Drive" button allows users to save files to Drive from your
website. For example, suppose your web site lists several instruction
manuals (PDFs) that users can download. The "Save to Drive" button can be
placed alongside each manual allowing users to save manuals to their My Drive.


When the user clicks the button, the file is downloaded from the data source and
uploaded to Google Drive as data is received. Because
the download is made in the context of the user's browser, this process
allows the user to authenticate the action to save files using their
established browser session.



## Supported browsers


The "Save to Drive" button supports these browsers.



## Add the "Save to Drive" button to a page


To create an instance of the "Save to Drive" button, add the following script to
your web page:


````
<script src="https://apis.google.com/js/platform.js" async defer></script>
<div class="g-savetodrive"
   data-src="//example.com/path/to/myfile.pdf"
   data-filename="My Statement.pdf"
   data-sitename="My Company Name">
</div>
````


Where:


- class is a required parameter that must be set to g-savetodrive if you
are using a standard HTML tag.

- data-src is a required parameter containing the URL of the file to be
saved. URLs can be absolute or relative. The data-src URL can be served from the same domain, subdomain, and
protocol as the domain where the button is hosted. You must use matching
protocols between the page and the data source. Data URIs and file:// URLs are not supported. Due to the browser's same origin policy, this URL must be served from
the same domain as the page upon which it is placed, or be accessible
using Cross Origin Resource Sharing (CORS). If the button and resource are
on different domains, refer to Handle buttons and resources on different domains .(#domain). To serve the file when the same page is served by both http and https,
specify the resource without a protocol such as data-src="//example.com/files/file.pdf" , which uses the appropriate
protocol based on how the hosting page was accessed.

  URLs can be absolute or relative.

  The

  `data-src`
  URL can be served from the same domain, subdomain, and protocol as the domain where the button is hosted. You must use matching protocols between the page and the data source.

  Data URIs and

  `file://`
  URLs are not supported.

  Due to the browser's same origin policy, this URL must be served from the same domain as the page upon which it is placed, or be accessible using Cross Origin Resource Sharing (CORS). If the button and resource are on different domains, refer to

  Handle buttons and resources on different domains

  .(#domain).

  To serve the file when the same page is served by both http and https, specify the resource without a protocol such as

  `data-src="//example.com/files/file.pdf"`
  , which uses the appropriate protocol based on how the hosting page was accessed.

- data-filename is a required parameter containing the name used for the
save file.

- data-sitename is a required parameter containing the name of the web site
providing the file.



You may place these attributes on any HTML element. However, the most commonly
used elements are div , span , or button . Each of these elements displays
slightly differently while the page is loading because the browser renders the
element before the "Save to Drive" JavaScript re-renders the element.


This script must be loaded using the HTTPS protocol and can be included
from any point on the page without restriction. You can also load the script
asynchronously for improved performance.


Note:

The button is rendered inline. The "Save to Drive" button can be wrapped in another element to make the initial layout look similar to the final layout.

Note:

If the user navigates away from the page before the download is complete, the data is discarded and no file is created in Google Drive.


## Use multiple buttons on a page


You can place multiple "Save to Drive" buttons on the same page. For example,
you might have a button at the top and at the bottom of a long page.


If the data-src and data-filename parameters are the same for multiple
buttons, saving from one button causes all similar buttons to display the same
progress information. If multiple different buttons are clicked, they save
sequentially.



### Handle buttons and resources on different domains


If your "Save to Drive" button is on a separate page from the data source, the
request to save the file must use Cross Origin Resource Sharing (CORS) to access
the resource. CORS is a mechanism allowing a web application at one domain
to access resources from a server at a different domain.


For example, if a "Save to Drive" button is placed on a page at http://example.com/page.html , and the data source is specified as data-src="https://otherserver.com/files/file.pdf" , the button will fail to
access the PDF unless the browser can use CORS to access the resource.


The data-src URL can be served from another domain but the responses
from the HTTP server needs to support HTTP OPTION requests and
include the following special HTTP headers:


````
Access-Control-Allow-Origin: *
Access-Control-Allow-Headers: Range
Access-Control-Expose-Headers: Cache-Control, Content-Encoding, Content-Range
````


Access-Control-Allow-Origin can have the value * to allow CORS from any
domain or can alternatively specify the domains that have access to the
resource via CORS, like http://example.com/page.html . If you don't
have a server to host your content, consider using Google App Engine .


For more information, refer to your server documentation on how to enable CORS
from the origin serving your "Save to Drive" button. For more information on
enabling your server for CORS, refer to I want to add CORS support to my server .



## JavaScript API


The "Save to Drive" button JavaScript defines two button-rendering functions under the gapi.savetodrive namespace. If you disable automatic rendering you must call one of these functions
 by setting parsetags to explicit .


| Method | Description |

| --- | --- |

| gapi.savetodrive. render ( container , parameters ) | Renders the specified container as a "Save to Drive" button widget. container The container to render as the "Save to Drive" button. Specify either the ID of the container (string) or the DOM element itself. parameters An object containing "Save to Drive" tag attributes as key=value pairs, without the data- prefixes. For example, {"src": "//example.com/path/to/myfile.pdf", "filename": "My Statement.pdf", "sitename": "My Company Name"} . |

| gapi.savetodrive. go ( opt_container ) | Renders all "Save to Drive" tags and classes in the specified container. This function should be used only if parsetags is set to explicit , which you might do for performance reasons. opt_container The container containing the "Save to Drive" button tags to render. Specify either the ID of the container (string) or the DOM element itself. If the opt_container parameter is omitted, all "Save to Drive" tags on the page are rendered. |




### Example "Save to Drive" JavaScript with explicit load


````
<
!DOCTYPE html
>

    
<
html
>

      
<
head
>

        
<
title>Save
 
to
 
Drive
 
Demo
:
 
Explicit
 
Load
<
/
title
>

        
<
link
 
rel
=
"canonical"
 
href
=
"http://www.example.com"
>

        
<
script
 
src
=
"https://apis.google.com/js/platform.js"
 
async
 
defer
>

          
{
parsetags
:
 
'explicit'
}


        
<
/
script
>

      
<
/
head
>

      
<
body
>

        
<
div
 
id
=
"container"
>

          
<
div
 
class
=
"g-savetodrive"


             
data
-
src
=
"//example.com/path/to/myfile.pdf"


             
data
-
filename
=
"My Statement.pdf"


             
data
-
sitename
=
"My Company Name"
>

          
<
div
>

        
<
/
div
>

        
<
script
 
type
=
"text/javascript"
>

          
gapi
.
savetodrive
.
go
(
'container'
);


        
<
/
script
>

      
<
/
body
>

    
<
/
html
>
````



### Example "Save to Drive" JavaScript with explicit render


````
    
<
!
DOCTYPE
 
html
>

    
<
html
>

      
<
head
>

        
<
title>Save
 
to
 
Drive
 
Demo
:
 
Explicit
 
Render
<
/
title
>

        
<
link
 
rel
=
"canonical"
 
href
=
"http://www.example.com"
>

        
<
script
>

          
window
.
___gcfg
 
=
 
{


            
parsetags
:
 
'explicit'


          
}
;


        
<
/
script
>

        
<
script
 
src
=
"https://apis.google.com/js/platform.js"
 
async
 
defer
><
/
script
>

      
<
/
head
>

      
<
body
>

        
<
a
 
href
=
"javascript:void(0)"
 
id
=
"render-link"
>
Render
 
the
 
Save
 
to
 
Drive
 
button
<
/
a
>

        
<
div
 
id
=
"savetodrive-div"
><
/
div
>

        
<
script
>

          
function
 
renderSaveToDrive
()
 
{


            
gapi.savetodrive.render('savetodrive-div',
 
{


              
src
:
 
'//example.com/path/to/myfile.pdf'
,


              
filename
:
 
'My Statement.pdf'
,


              
sitename
:
 
'My Company Name'


            
}
);


          
}


          
document
.
getElementById
(
'render-link'
)
.
addEventListener
(
'click'
,
 
renderSaveToDrive
);


        
<
/
script
>

      
<
/
body
>

    
<
/
html
>
````



## Localize the "Save to Drive" button


If your web page supports a specific language, set the window.___gcfg.lang variable to that language. If not set, the user's Google Drive language is used.


For available language code values, see the list of supported language codes .


````
    
<
!
DOCTYPE
 
html
>

    
<
html
>

      
<
head
>

        
<
title>Save
 
to
 
Drive
 
Demo
:
 
Async
 
Load
 
with
 
Language
<
/
title
>

        
<
link
 
rel
=
"canonical"
 
href
=
"http://www.example.com"
>

      
<
/
head
>

      
<
body
>

        
<
div
 
class
=
"g-savetodrive"


             
data
-
src
=
"//example.com/path/to/myfile.pdf"


             
data
-
filename
=
"My Statement.pdf"


             
data
-
sitename
=
"My Company Name"
>

        
<
/
div
>


        
<
script
 
type
=
"text/javascript"
>

          
window
.
___gcfg
 
=
 
{


            
lang
:
 
'
en
-
US
'


          
};


        
<
/
script
>

        
<
script
 
src
 
=
 
'
https
:
//apis.google.com/js/platform.js' async defer></script>



      
<
/
body
>

    
<
/
html
>
````



## Troubleshooting


If you get an XHR error when downloading your data-src URL, verify that
the resource actually exists, and that you do not have a CORS issue.


If large files are truncated to 2MB, it is likely that your server is not
exposing Content-Range, likely a CORS issue.

## Add the Share button

_Source: https://developers.google.com/workspace/drive/api/guides/share-button_

To allow users to share Drive files directly from your app, you can use the
Google Drive sharing dialog. This modal dialog is invoked
from your app to allow sharing of items on Drive. Figure 1 shows the Google Docs
Share button and the resulting sharing dialog.


Figure 1.

Share button and dialog.

To enable the Drive sharing dialog, add the dialog script and a launch button
or other launching mechanism to your UI.



### Add the dialog script


To create an instance of the sharing dialog, add the following script to your
launching page:


````
<
head
>

...

<
script
 
type
=
"text/javascript"
 
src
=
"https://apis.google.com/js/api.js"
><
/
script
>
<
script
 
type
=
"text/javascript"
>

    
init
 
=
 
function
()
 
{


        
s
 
=
 
new
 
gapi
.
drive
.
share
.
ShareClient
();


        
s
.
setOAuthToken
(
'<OAUTH_TOKEN>'
);


        
s
.
setItemIds
([
'<FILE_ID>'
]);


    
}


    
window
.
onload
 
=
 
function
()
 
{


        
gapi
.
load
(
'drive-share'
,
 
init
);


    
}

<
/
script
>
<
/
head
>
````


Where:


- <OAUTH_TOKEN> should be replaced with the authorized user's OAuth2 access token .

- <FILE_ID> should be replaced with the id of the file to share.




### Add a launch button


In your UI, add a line of code similar to the following:


````
<button onclick="s.showSettingsDialog()">Share</button>
````


This code calls the showSettingsDialog() function when the Share button is
clicked.


Note:

For the dialog to work as expected, third-party party cookies must be enabled and the user must be currently signed in to the Google account matching the identity of the oauth token.

## Shared drives overview

_Source: https://developers.google.com/workspace/drive/api/guides/about-shareddrives_

A shared drive is an organizational structure within Google Drive that lives
parallel to My Drive .
Shared drives support files owned by an organization rather than an individual
user. An individual file can be organized within a shared drive or My
Drive, but not both. However, Drive
shortcuts can be used to point to files or folders
from shared drives to My Drive, or the other way around.



## Access control


Shared drives use a permission model similar to other content in
Drive. Unlike files in My Drive, a group of users
owns content within a shared drive. For more information about permissions, see Share files, folders, and drives .



### Permission propagation


Like items in My Drive, permissions on parent items propagate
downward to their children. However, within a shared drive, permissions are
strictly expansive. For example, a user that has role=commenter for a shared
drive cannot have their access level reduced at another point within the folder
hierarchy. However, their access can be increased for a certain set of files.


Shared drive files must have exactly one parent. This means that shared drive
files belong to a single shared drive and are located in a single location
within that shared drive. Having a single location simplifies permission rules
for shared drive files.



### Compare member and file access


There are two classes of permissions in
shared drives:


- Member permissions are for users who have been granted access to the
shared drive, either directly or through a group. Members can view the
shared drive metadata, such as the shared drive's name. Members have access
to all files within the shared drive, with the access level depending on the role given to the member, such as commenter or reader .

- File access permissions are for users who have been granted access to a
subset of files within the shared drive. For example, sharing a single file
to a user creates a file access permission.



An individual user can be a member of a shared drive and have file access
permissions for files contained within the shared drive. A file access
permission might be superseded if the user's membership in the shared drive
grants them a greater level of access.


File permissions are revoked when the user is no longer a member of the shared
drive, or if their member access level is reduced. Users also lose access to any
files and folders in the shared drive that were directly shared with them.



### Roles for shared drives


As with items in My Drive, each user in a shared drive is granted
access with a specific role. These roles are used for shared drives:


- The fileOrganizer role allows users to organize files within a shared
drive and to move content into the trash.

- The organizer role grants the same privileges as the fileOrganizer . It
also allows users to permanently remove content and modify shared drive name
and membership.

- The writer role allows users to add files to shared drives and to share a
shared drive item.



The owner role isn't allowed in shared drives.


For more information about roles and operations allowed in a shared drive, see Roles and permissions .



### Members and organizer rules


Shared drives have both the organizerCount and memberCount fields. The
values for these fields can decide who can access the shared drive. The
following are the rules for organizerCount and memberCount fields:


- Only administrators can manage a shared drive with an organizerCount of
zero.

- Only administrators can access a shared drive with a memberCount of zero.

- Only administrators can access a shared drive with an organizerCount or memberCount greater than zero. This applies only if the remaining
permissions are for empty groups or external users that were added before
turning off sharing outside the domain.

- The organizerCount and memberCount fields don't distinguish between
members of the organization and external members.

- Entities written on the file permission can access files inside a shared
drive with a memberCount of zero.



Note:

Service accounts don't have storage quota and can't own any files. Instead, they must upload files and folders into shared drives, or use OAuth 2.0 to upload items on behalf of a human user.

For more information, see Search for shared
drives .



## Related topics


- Manage folders with limited and expansive access

- Create a shortcut to a Drive file

- How file access works in shared drives

## Implement shared drive support

_Source: https://developers.google.com/workspace/drive/api/guides/enable-shareddrives_

Shared drives follow different organization, sharing, and ownership models from
My Drive. If your app is going to create and manage files on
shared drives, you must implement shared drive support in your app. The
complexity of your implementation depends on the functionality of your app.


To begin, you must include the supportsAllDrives=true query parameter in your
requests when your app performs the following operations:



### Drive API v3


- files.get

- files.list

- files.create

- files.update

- files.copy

- files.delete

- changes.list

- changes.getStartPageToken

- permissions.list

- permissions.get

- permissions.create

- permissions.update

- permissions.delete




### Drive API v2


- files.get

- files.list

- files.insert

- files.update

- files.patch

- files.copy

- files.trash

- files.untrash

- files.delete

- files.touch

- children.insert

- parents.insert

- changes.list

- changes.getStartPageToken

- changes.get

- permissions.list

- permissions.get

- permissions.insert

- permissions.update

- permissions.patch

- permissions.delete



The supportsAllDrives=true parameter informs Google Drive that your
application is designed to handle files on shared drives.


Applications that read or modify permissions, track changes, or search across
multiple corpora require additional shared drive capabilities. The remainder of
this document highlights additional changes required to perform these tasks.



## Search for content on a shared drive


Use the list method on the files resource to find user files in shared drives. To
search for a shared drive, see Search for shared
drives .


The list method contains the following shared drive-specific query parameters:


- driveId : ID of the shared drive to search.

- corpora : Bodies of items (files or documents) to which the query applies.
Supported bodies are user , domain , drive , and allDrives . Prefer user or drive to allDrives for efficiency. By default, corpora is set
to user .

- includeItemsFromAllDrives : Whether both My Drive and shared
drive items should be included in results. If not present or set to false,
then shared drive items are not returned.

- supportsAllDrives : Whether the requesting application supports both My
Drive and shared drive. If false, shared drive items are not
included in the response.



The following query modes are specific to shared drives:


| includeItemsFromAllDrives | corpora | Query description |

| --- | --- | --- |

| true | user | Queries files that the user has accessed, including both shared drive and My Drive files. |

| true | domain | Queries files that are shared to the domain, including both shared drive and My Drive files. |

| true | drive | Queries all items in the specified shared drive. The driveId must be specified in the request. |

| true | allDrives | Queries files that the user has accessed and all shared drives in which they're a member. Note that the response might include incompleteSearch:true , indicating that some corpora were not searched for this request. |




## Track changes on a shared drive


Use the list method on the changes resource to track changes on a shared drive. For
more information, see Track changes for users and shared
drives .


The list method contains the following shared drive-specific query parameters:


- driveId : The shared drive from which changes are returned. If specified,
the change IDs refer to changes to items within the shared drive providing
the current state of a file. To refer to a specific shared drive change,
both the shared drive ID and change ID must be used as an identifier.

- includeItemsFromAllDrives : Whether shared drive files or changes should be
included in the list of changes.

- supportsAllDrives : Whether the requesting application supports shared
drives. If false, then shared drive items, including both shared drives and
files within a shared drive, aren't returned.



The following query modes are specific to shared drives:


| includeItemsFromAllDrives | driveId | Query description |

| --- | --- | --- |

| true | No | Changes are reflective of changes to files inside or outside of shared drives that the user has accessed, as well as changes to shared drives in which the user is a member. |

| true | Yes | Changes are reflective of changes to the particular shared drive that was specified and items inside that shared drive. |



Note:

If you're using the older Drive API v2, the

`get`
and

`list`
methods have several parameters specific to shared drives.

For additional details about change log behavior, see Track changes for users
and shared drives .



## Enable shared drive support in the Drive UI


To access shared drive content using the Drive UI, make sure you
have checked the Shared drives support box on the Drive UI integration tab
of the Google Drive API in the Google Cloud console . For more
information, see Configure a Drive UI integration .



## Use the Google Picker with shared drives


The Google Picker supports selecting items in shared
drives. For details about enabling shared drive support and adding shared drives
views in the picker, see the Google Picker API .



## Related topics


- Manage shared drives

## Manage shared drives

_Source: https://developers.google.com/workspace/drive/api/guides/manage-shareddrives_

This guide contains tasks related to managing shared drives, such as creating
shared drives and managing members and permissions, using the Google Drive API.


If you want to specify the fields to return in the response, you can set the fields system
parameter with any method of the drives resource. If you
don't specify the fields parameter, the server returns a default set of fields
specific to the method. For example, the list method returns only the kind , id ,
and name fields for each shared drive. For more information, see Return
specific fields .


To learn more about shared drive folder limits, see Shared drive folder
limits .



## Create a shared drive


To create a shared drive, use the create method on the drives resource with the requestId parameter.


The requestId parameter identifies the logical attempt for idempotent creation
of a shared drive. If the request times out or returns an indeterminate backend
error, the same request can be repeated and won't create duplicates. The requestId and body of the request must remain the same.


Note:

If you're using the earlier Drive API v2, use the

`insert`
method. You can find code samples in

GitHub

.

The following code sample shows how to create a shared drive:



### Java


drive/snippets/drive_v3/src/main/java/CreateDrive.java

View on GitHub

Code

````
import
 
com.google.api.client.googleapis.json.GoogleJsonResponseException
;


import
 
com.google.api.client.http.HttpRequestInitializer
;


import
 
com.google.api.client.http.javanet.NetHttpTransport
;


import
 
com.google.api.client.json.gson.GsonFactory
;


import
 
com.google.api.services.drive.DriveScopes
;


import
 
com.google.api.services.drive.model.Drive
;


import
 
com.google.auth.http.HttpCredentialsAdapter
;


import
 
com.google.auth.oauth2.GoogleCredentials
;


import
 
java.io.IOException
;


import
 
java.util.Arrays
;


import
 
java.util.UUID
;



/* class to demonstrate use-case of Drive's create drive. */


public
 
class
 
CreateDrive
 
{



  
/**


   * Create a drive.


   *


   * @return Newly created drive id.


   * @throws IOException if service account credentials file not found.


   */


  
public
 
static
 
String
 
createDrive
()
 
throws
 
IOException
 
{


        
/*Load pre-authorized user credentials from the environment.


        TODO(developer) - See https://developers.google.com/identity for


        guides on implementing OAuth2 for your application.*/


    
GoogleCredentials
 
credentials
 
=


        
GoogleCredentials
.
getApplicationDefault
().
createScoped
(
Arrays
.
asList
(
DriveScopes
.
DRIVE
));


    
HttpRequestInitializer
 
requestInitializer
 
=
 
new
 
HttpCredentialsAdapter
(


        
credentials
);



    
// Build a new authorized API client service.


    
com
.
google
.
api
.
services
.
drive
.
Drive
 
service
 
=


        
new
 
com
.
google
.
api
.
services
.
drive
.
Drive
.
Builder
(
new
 
NetHttpTransport
(),


            
GsonFactory
.
getDefaultInstance
(),


            
requestInitializer
)


            
.
setApplicationName
(
"Drive samples"
)


            
.
build
();



    
Drive
 
driveMetadata
 
=
 
new
 
Drive
();


    
driveMetadata
.
setName
(
"Project Resources"
);


    
String
 
requestId
 
=
 
UUID
.
randomUUID
().
toString
();


    
try
 
{


      
Drive
 
drive
 
=
 
service
.
drives
().
create
(
requestId
,


              
driveMetadata
)


          
.
execute
();


      
System
.
out
.
println
(
"Drive ID: "
 
+
 
drive
.
getId
());



      
return
 
drive
.
getId
();


    
}
 
catch
 
(
GoogleJsonResponseException
 
e
)
 
{


      
// TODO(developer) - handle error appropriately


      
System
.
err
.
println
(
"Unable to create drive: "
 
+
 
e
.
getDetails
());


      
throw
 
e
;


    
}


  
}


}
````



### Python


drive/snippets/drive-v3/drive_snippet/create_drive.py

View on GitHub

Code

````
import
 
uuid



import
 
google.auth


from
 
googleapiclient.discovery
 
import
 
build


from
 
googleapiclient.errors
 
import
 
HttpError




def
 
create_drive
():


  
"""Create a drive.


  Returns:


      Id of the created drive



  Load pre-authorized user credentials from the environment.


  TODO(developer) - See https://developers.google.com/identity


  for guides on implementing OAuth2 for the application.


  """

  
creds
,
 
_
 
=
 
google
.
auth
.
default
()


  
try
:

    
# create drive api client

    
service
 
=
 
build
(
"drive"
,
 
"v3"
,
 
credentials
=
creds
)


    
drive_metadata
 
=
 
{
"name"
:
 
"Project Resources"
}

    
request_id
 
=
 
str
(
uuid
.
uuid4
())

    
# pylint: disable=maybe-no-member

    
drive
 
=
 
(

        
service
.
drives
()

        
.
create
(
body
=
drive_metadata
,
 
requestId
=
request_id
,
 
fields
=
"id"
)

        
.
execute
()

    
)

    
print
(
f
'Drive ID: 
{
drive
.
get
(
"id"
)
}
'
)


  
except
 
HttpError
 
as
 
error
:

    
print
(
f
"An error occurred: 
{
error
}
"
)

    
drive
 
=
 
None


  
return
 
drive
.
get
(
"id"
)




if
 
__name__
 
==
 
"__main__"
:

  
create_drive
()
````



### Node.js


drive/snippets/drive_v3/drive_snippets/create_drive.js

View on GitHub

Code

````
import
 
{
GoogleAuth
}
 
from
 
'google-auth-library'
;


import
 
{
google
}
 
from
 
'googleapis'
;


import
 
{
v4
 
as
 
uuid
}
 
from
 
'uuid'
;



/**


 * Creates a new shared drive.


 * @return {Promise<string>} The ID of the created shared drive.


 */


async
 
function
 
createDrive
()
 
{


  
// Authenticate with Google and get an authorized client.


  
// TODO (developer): Use an appropriate auth mechanism for your app.


  
const
 
auth
 
=
 
new
 
GoogleAuth
({


    
scopes
:
 
'https://www.googleapis.com/auth/drive'
,


  
});



  
// Create a new Drive API client (v3).


  
const
 
service
 
=
 
google
.
drive
({
version
:
 
'v3'
,
 
auth
});



  
// The metadata for the new shared drive.


  
const
 
driveMetadata
 
=
 
{


    
name
:
 
'Project resources'
,


  
};



  
// A unique request ID to avoid creating duplicate shared drives.


  
const
 
requestId
 
=
 
uuid
();



  
// Create the new shared drive.


  
const
 
Drive
 
=
 
await
 
service
.
drives
.
create
({


    
requestBody
:
 
driveMetadata
,


    
requestId
,


    
fields
:
 
'id'
,


  
});



  
// Print the ID of the new shared drive.


  
console
.
log
(
'Drive Id:'
,
 
Drive
.
data
.
id
);


  
if
 
(
!
Drive
.
data
.
id
)
 
{


    
throw
 
new
 
Error
(
'Drive ID not found.'
);


  
}


  
return
 
Drive
.
data
.
id
;


}
````



### PHP


drive/snippets/drive_v3/src/DriveCreateDrive.php

View on GitHub

Code

````
<
?php


use Google\Client;


use Google\Service\Drive;


use Ramsey\Uuid\Uuid;


function createDrive()


{


    try {


        $client = new Client();


        $client->useApplicationDefaultCredentials();


        $client->addScope(Drive::DRIVE);


        $driveService = new Drive($client);



        $driveMetadata = new Drive\Drive(array(


                'name' => 'Project Resources'));


        $requestId = Uuid::uuid4()->toString();


        $drive = $driveService->drives->create($requestId, $driveMetadata, array(


                'fields' => 'id'));


        printf("Drive ID: %s\n", $drive->id);


        return $drive->id;


    } catch(Exception $e)  {


        echo "Error Message: ".$e;


    }  



}
````



### .NET


drive/snippets/drive_v3/DriveV3Snippets/CreateDrive.cs

View on GitHub

Code

````
using
 
Google.Apis.Auth.OAuth2
;


using
 
Google.Apis.Drive.v3
;


using
 
Google.Apis.Drive.v3.Data
;


using
 
Google.Apis.Services
;



namespace
 
DriveV3Snippets


{


    
// Class to demonstrate use of Drive's create drive.


    
public
 
class
 
CreateDrive


    
{


        
/// <summary>


        
/// Create a drive.


        
/// </summary>


        
/// <returns>newly created drive Id.</returns>


        
public
 
static
 
string
 
DriveCreateDrive
()


        
{


            
try


            
{


                
/* Load pre-authorized user credentials from the environment.


                 TODO(developer) - See https://developers.google.com/identity for


                 guides on implementing OAuth2 for your application. */


                
GoogleCredential
 
credential
 
=
 
GoogleCredential
.
GetApplicationDefault
()


                    
.
CreateScoped
(
DriveService
.
Scope
.
Drive
);



                
// Create Drive API service.


                
var
 
service
 
=
 
new
 
DriveService
(
new
 
BaseClientService
.
Initializer


                
{


                    
HttpClientInitializer
 
=
 
credential
,


                    
ApplicationName
 
=
 
"Drive API Snippets"


                
});



                
var
 
driveMetadata
 
=
 
new
 
Drive
()


                
{


                    
Name
 
=
 
"Project Resources"


                
};


                
var
 
requestId
 
=
 
Guid
.
NewGuid
().
ToString
();


                
var
 
request
 
=
 
service
.
Drives
.
Create
(
driveMetadata
,
 
requestId
);


                
request
.
Fields
 
=
 
"id"
;


                
var
 
drive
 
=
 
request
.
Execute
();


                
Console
.
WriteLine
(
"Drive ID: "
 
+
 
drive
.
Id
);


                
return
 
drive
.
Id
;


            
}


            
catch
 
(
Exception
 
e
)


            
{


                
// TODO(developer) - handle error appropriately


                
if
 
(
e
 
is
 
AggregateException
)


                
{


                    
Console
.
WriteLine
(
"Credential Not found"
);


                
}


                
else


                
{


                    
throw
;


                
}


            
}


            
return
 
null
;


        
}


    
}


}
````


Calls to the create method are
idempotent.


If the shared drive was successfully created on a previous request or due to a
retry, the method returns an instance of the drives resource. Sometimes, such
as after a prolonged time or if the body of the request has changed, a 409 error might be returned indicating the requestId must be discarded.



## Get a shared drive


To get metadata for a shared drive, use the get method on the drives resource with the driveId path parameter. If you
don't know the drive ID, you can list all shared drives using the list method.


The get method returns a shared drive as an instance of a drives resource.


To issue the request as a domain administrator, set the useDomainAdminAccess query parameter to true . For more information, see Manage shared drives as
domain administrators .



## List shared drives


To list a user's shared drives, use the list method on the drives resource. The method returns
a list of shared drives.


Pass the following query parameters to customize pagination of, or to filter,
shared drives:


- pageSize : The maximum number of shared drives to return per page.

- pageToken : A page token, received from a previous list call. Provide this
token to retrieve the subsequent page.

- q : Query string for searching shared drives. For more information, see Search for shared drives .

- useDomainAdminAccess : Set to true to issue the request as a domain
administrator to return all shared drives of the domain in which the
requester is an administrator. For more information, see Manage shared
drives as domain administrators .




## Update a shared drive


To update the metadata for a shared drive, use the update method on the drives resource with the driveId path
parameter.


The method returns a shared drive as an instance of a drives resource.


To issue the request as a domain administrator, set the useDomainAdminAccess query parameter to true . For more information, see Manage shared drives as
domain administrators .



## Hide and unhide a shared drive


To hide a shared drive from the default view, use the hide method on the drives resource with the driveId parameter.


When a shared drive is hidden, Drive marks the shared drive
resource as hidden=true . Hidden shared drives don't appear in the
Drive UI or in the list of returned files.


To restore a shared drive to the default view, use the unhide method on the drives resource with the driveId parameter.


Both methods return a shared drive as an instance of a drives resource.



## Delete a shared drive


To permanently delete a shared drive, use the delete method on the drives resource with the driveId parameter.


Before deleting a shared drive, all content in the shared drive must be moved to
the trash or deleted. The user must also have role=organizer on the shared
drive folder. For more information, see Trash or delete files and folders .


Pass the following query parameters to filter shared drives:


- useDomainAdminAccess : Set to true to issue the request as a domain
administrator to return all shared drives of the domain in which the
requester is an administrator. For more information, see Manage shared
drives as domain administrators .

- allowItemDeletion : Set to true to delete items within the shared drive.
Only supported when useDomainAdminAccess is also set to true .




## Add or remove shared drive members


Add or remove shared drive members using the permissions resource.


To add a member, create the permission on the shared drive. Permission methods
can also be used on individual files within a shared drive to grant members
additional privileges or allow non-members to collaborate on specific items.


For more information and sample code, see Share files, folders, and drives .



## Manage shared drives as domain administrators


Apply the useDomainAdminAccess parameter with the drives and permissions resources to manage shared drives across an organization.


Users calling these methods with useDomainAdminAccess=true must have the Drive and Docs administrator
privilege .
Administrators can search for shared
drives or update permissions for shared
drives owned by their organization, regardless of the administrator's membership
in any given shared drive.


When using service accounts, you might have to impersonate an authenticated
administrator using service account
impersonation .
Note that service accounts do not belong to your Google Workspace domain,
unlike user accounts. If you share Google Workspace assets, like documents or
events, with your entire Google Workspace domain, they're not shared with
service accounts. For more information, see Service accounts
overview .



### Recover a shared drive that doesn't have an organizer


The following code sample shows how to recover shared drives that no longer have
an organizer.



### Java


drive/snippets/drive_v3/src/main/java/RecoverDrive.java

View on GitHub

Code

````
import
 
com.google.api.client.http.HttpRequestInitializer
;


import
 
com.google.api.client.http.javanet.NetHttpTransport
;


import
 
com.google.api.client.json.gson.GsonFactory
;


import
 
com.google.api.services.drive.DriveScopes
;


import
 
com.google.api.services.drive.model.Drive
;


import
 
com.google.api.services.drive.model.DriveList
;


import
 
com.google.api.services.drive.model.Permission
;


import
 
com.google.auth.http.HttpCredentialsAdapter
;


import
 
com.google.auth.oauth2.GoogleCredentials
;


import
 
java.io.IOException
;


import
 
java.util.ArrayList
;


import
 
java.util.Arrays
;


import
 
java.util.List
;



/* class to demonstrate use-case of Drive's shared drive without an organizer. */


public
 
class
 
RecoverDrive
 
{



  
/**


   * Find all shared drives without an organizer and add one.


   *


   * @param realUser User's email id.


   * @return All shared drives without an organizer.


   * @throws IOException if shared drive not found.


   */


  
public
 
static
 
List<Drive>
 
recoverDrives
(
String
 
realUser
)


      
throws
 
IOException
 
{


        
/*Load pre-authorized user credentials from the environment.


        TODO(developer) - See https://developers.google.com/identity for


        guides on implementing OAuth2 for your application.*/


    
GoogleCredentials
 
credentials
 
=


        
GoogleCredentials
.
getApplicationDefault
().
createScoped
(
Arrays
.
asList
(
DriveScopes
.
DRIVE
));


    
HttpRequestInitializer
 
requestInitializer
 
=
 
new
 
HttpCredentialsAdapter
(


        
credentials
);



    
// Build a new authorized API client service.


    
com
.
google
.
api
.
services
.
drive
.
Drive
 
service
 
=


        
new
 
com
.
google
.
api
.
services
.
drive
.
Drive
.
Builder
(
new
 
NetHttpTransport
(),


            
GsonFactory
.
getDefaultInstance
(),


            
requestInitializer
)


            
.
setApplicationName
(
"Drive samples"
)


            
.
build
();


    
List<Drive>
 
drives
 
=
 
new
 
ArrayList<Drive>
();



    
// Find all shared drives without an organizer and add one.


    
// Note: This example does not capture all cases. Shared drives


    
// that have an empty group as the sole organizer, or an


    
// organizer outside the organization are not captured. A


    
// more exhaustive approach would evaluate each shared drive


    
// and the associated permissions and groups to ensure an active


    
// organizer is assigned.


    
String
 
pageToken
 
=
 
null
;


    
Permission
 
newOrganizerPermission
 
=
 
new
 
Permission
()


        
.
setType
(
"user"
)


        
.
setRole
(
"organizer"
);



    
newOrganizerPermission
.
setEmailAddress
(
realUser
);




    
do
 
{


      
DriveList
 
result
 
=
 
service
.
drives
().
list
()


          
.
setQ
(
"organizerCount = 0"
)


          
.
setFields
(
"nextPageToken, drives(id, name)"
)


          
.
setUseDomainAdminAccess
(
true
)


          
.
setPageToken
(
pageToken
)


          
.
execute
();


      
for
 
(
Drive
 
drive
 
:
 
result
.
getDrives
())
 
{


        
System
.
out
.
printf
(
"Found drive without organizer: %s (%s)\n"
,


            
drive
.
getName
(),
 
drive
.
getId
());


        
// Note: For improved efficiency, consider batching


        
// permission insert requests


        
Permission
 
permissionResult
 
=
 
service
.
permissions
()


            
.
create
(
drive
.
getId
(),
 
newOrganizerPermission
)


            
.
setUseDomainAdminAccess
(
true
)


            
.
setSupportsAllDrives
(
true
)


            
.
setFields
(
"id"
)


            
.
execute
();


        
System
.
out
.
printf
(
"Added organizer permission: %s\n"
,


            
permissionResult
.
getId
());



      
}



      
drives
.
addAll
(
result
.
getDrives
());



      
pageToken
 
=
 
result
.
getNextPageToken
();


    
}
 
while
 
(
pageToken
 
!=
 
null
);



    
return
 
drives
;


  
}


}
````



### Python


drive/snippets/drive-v3/drive_snippet/recover_drives.py

View on GitHub

Code

````
import
 
google.auth


from
 
googleapiclient.discovery
 
import
 
build


from
 
googleapiclient.errors
 
import
 
HttpError




def
 
recover_drives
(
real_user
):


  
"""Find all shared drives without an organizer and add one.


  Args:


      real_user:User ID for the new organizer.


  Returns:


      drives object



  Load pre-authorized user credentials from the environment.


  TODO(developer) - See https://developers.google.com/identity


  for guides on implementing OAuth2 for the application.


  """

  
creds
,
 
_
 
=
 
google
.
auth
.
default
()

  
try
:

    
# create drive api client

    
service
 
=
 
build
(
"drive"
,
 
"v3"
,
 
credentials
=
creds
)


    
drives
 
=
 
[]


    
# pylint: disable=maybe-no-member

    
page_token
 
=
 
None

    
new_organizer_permission
 
=
 
{

        
"type"
:
 
"user"
,

        
"role"
:
 
"organizer"
,

        
"emailAddress"
:
 
"user@example.com"
,

    
}

    
new_organizer_permission
[
"emailAddress"
]
 
=
 
real_user


    
while
 
True
:

      
response
 
=
 
(

          
service
.
drives
()

          
.
list
(

              
q
=
"organizerCount = 0"
,

              
fields
=
"nextPageToken, drives(id, name)"
,

              
useDomainAdminAccess
=
True
,

              
pageToken
=
page_token
,

          
)

          
.
execute
()

      
)

      
for
 
drive
 
in
 
response
.
get
(
"drives"
,
 
[]):

        
print
(

            
"Found shared drive without organizer: "

            
f
"
{
drive
.
get
(
'title'
)
}
, 
{
drive
.
get
(
'id'
)
}
"

        
)

        
permission
 
=
 
(

            
service
.
permissions
()

            
.
create
(

                
fileId
=
drive
.
get
(
"id"
),

                
body
=
new_organizer_permission
,

                
useDomainAdminAccess
=
True
,

                
supportsAllDrives
=
True
,

                
fields
=
"id"
,

            
)

            
.
execute
()

        
)

        
print
(
f
'Added organizer permission: 
{
permission
.
get
(
"id"
)
}
'
)


      
drives
.
extend
(
response
.
get
(
"drives"
,
 
[]))

      
page_token
 
=
 
response
.
get
(
"nextPageToken"
,
 
None
)

      
if
 
page_token
 
is
 
None
:

        
break


  
except
 
HttpError
 
as
 
error
:

    
print
(
f
"An error occurred: 
{
error
}
"
)


  
return
 
drives




if
 
__name__
 
==
 
"__main__"
:

  
recover_drives
(
real_user
=
"gduser1@workspacesamples.dev"
)
````



### Node.js


drive/snippets/drive_v3/drive_snippets/recover_drives.js

View on GitHub

Code

````
import
 
{
GoogleAuth
}
 
from
 
'google-auth-library'
;


import
 
{
google
}
 
from
 
'googleapis'
;



/**


 * Finds all shared drives without an organizer and adds one.


 * @param {string} userEmail The email of the user to assign ownership to.


 * @return {Promise<object[]>} A list of the recovered drives.


 */


async
 
function
 
recoverDrives
(
userEmail
)
 
{


  
// Authenticate with Google and get an authorized client.


  
// TODO (developer): Use an appropriate auth mechanism for your app.


  
const
 
auth
 
=
 
new
 
GoogleAuth
({


    
scopes
:
 
'https://www.googleapis.com/auth/drive'
,


  
});



  
// Create a new Drive API client (v3).


  
const
 
service
 
=
 
google
.
drive
({
version
:
 
'v3'
,
 
auth
});



  
// The permission to add to the shared drive.


  
const
 
newOrganizerPermission
 
=
 
{


    
type
:
 
'user'
,


    
role
:
 
'organizer'
,


    
emailAddress
:
 
userEmail
,
 
// e.g., 'user@example.com'


  
};



  
// List all shared drives with no organizers.


  
const
 
result
 
=
 
await
 
service
.
drives
.
list
({


    
q
:
 
'organizerCount = 0'
,


    
fields
:
 
'nextPageToken, drives(id, name)'
,


    
useDomainAdminAccess
:
 
true
,


  
});



  
// Add the new organizer to each found shared drive.


  
for
 
(
const
 
drive
 
of
 
result
.
data
.
drives
 
??
 
[])
 
{


    
if
 
(
!
drive
.
id
)
 
{


      
continue
;


    
}



    
console
.
log
(
'Found shared drive without organizer:'
,
 
drive
.
name
,
 
drive
.
id
);


    
await
 
service
.
permissions
.
create
({


      
requestBody
:
 
newOrganizerPermission
,


      
fileId
:
 
drive
.
id
,


      
useDomainAdminAccess
:
 
true
,


      
supportsAllDrives
:
 
true
,


      
fields
:
 
'id'
,


    
});


  
}


  
return
 
result
.
data
.
drives
 
??
 
[];


}
````



### PHP


drive/snippets/drive_v3/src/DriveRecoverDrives.php

View on GitHub

Code

````
<
?php


use Google\Client;


use Google\Service\Drive;


use Ramsey\Uuid\Uuid;


function recoverDrives()


{


   try {


    $client = new Client();


    $client->useApplicationDefaultCredentials();


    $client->addScope(Drive::DRIVE);


    $driveService = new Drive($client);



    $realUser = readline("Enter user email address: ");



    $drives = array();


    // Find all shared drives without an organizer and add one.


    // Note: This example does not capture all cases. Shared drives


    // that have an empty group as the sole organizer, or an


    // organizer outside the organization are not captured. A


    // more exhaustive approach would evaluate each shared drive


    // and the associated permissions and groups to ensure an active


    // organizer is assigned.


    $pageToken = null;


    $newOrganizerPermission = new Drive\Permission(array(


        'type' => 'user',


        'role' => 'organizer',


        'emailAddress' => 'user@example.com'


    ));


    $newOrganizerPermission['emailAddress'] = $realUser;


    do {


        $response = $driveService->drives->listDrives(array(


            'q' => 'organizerCount = 0',


            'fields' => 'nextPageToken, drives(id, name)',


            'useDomainAdminAccess' => true,


            'pageToken' => $pageToken


        ));


        foreach ($response->drives as $drive) {


            printf("Found shared drive without organizer: %s (%s)\n",


                $drive->name, $drive->id);


            $permission = $driveService->permissions->create($drive->id,


                $newOrganizerPermission,


                array(


                    'fields' => 'id',


                    'useDomainAdminAccess' => true,


                    'supportsAllDrives' => true


                ));


            printf("Added organizer permission: %s\n", $permission->id);


        }


        array_push($drives, $response->drives);


        $pageToken = $response->pageToken;


    } while ($pageToken != null);


    return $drives;


   } catch(Exception $e) {


      echo "Error Message: ".$e;


   }


}
````



### .NET


drive/snippets/drive_v3/DriveV3Snippets/RecoverDrives.cs

View on GitHub

Code

````
using
 
Google.Apis.Auth.OAuth2
;


using
 
Google.Apis.Drive.v3
;


using
 
Google.Apis.Drive.v3.Data
;


using
 
Google.Apis.Services
;



namespace
 
DriveV3Snippets


{


    
// Class to demonstrate use-case of Drive's shared drive without an organizer.


    
public
 
class
 
RecoverDrives


    
{


        
/// <summary>


        
/// Find all shared drives without an organizer and add one.


        
/// </summary>


        
/// <param name="realUser">User ID for the new organizer.</param>


        
/// <returns>all shared drives without an organizer.</returns>


        
public
 
static
 
IList<Drive>
 
DriveRecoverDrives
(
string
 
realUser
)


        
{


            
try


            
{


                
/* Load pre-authorized user credentials from the environment.


                 TODO(developer) - See https://developers.google.com/identity for


                 guides on implementing OAuth2 for your application. */


                
GoogleCredential
 
credential
 
=
 
GoogleCredential
.
GetApplicationDefault
()


                    
.
CreateScoped
(
DriveService
.
Scope
.
Drive
);



                
// Create Drive API service.


                
var
 
service
 
=
 
new
 
DriveService
(
new
 
BaseClientService
.
Initializer


                
{


                    
HttpClientInitializer
 
=
 
credential
,


                    
ApplicationName
 
=
 
"Drive API Snippets"


                
});



                
var
 
drives
 
=
 
new
 
List<Drive>
();


                
// Find all shared drives without an organizer and add one.


                
// Note: This example does not capture all cases. Shared drives


                
// that have an empty group as the sole organizer, or an


                
// organizer outside the organization are not captured. A


                
// more exhaustive approach would evaluate each shared drive


                
// and the associated permissions and groups to ensure an active


                
// organizer is assigned.


                
string
 
pageToken
 
=
 
null
;


                
var
 
newOrganizerPermission
 
=
 
new
 
Permission
()


                
{


                    
Type
 
=
 
"user"
,


                    
Role
 
=
 
"organizer"
,


                    
EmailAddress
 
=
 
realUser


                
};



                
do


                
{


                    
var
 
request
 
=
 
service
.
Drives
.
List
();


                    
request
.
UseDomainAdminAccess
 
=
 
true
;


                    
request
.
Q
 
=
 
"organizerCount = 0"
;


                    
request
.
Fields
 
=
 
"nextPageToken, drives(id, name)"
;


                    
request
.
PageToken
 
=
 
pageToken
;


                    
var
 
result
 
=
 
request
.
Execute
();


                    
foreach
 
(
var
 
drive
 
in
 
result
.
Drives
)


                    
{


                        
Console
.
WriteLine
((
"Found abandoned shared drive: {0} ({1})"
,


                            
drive
.
Name
,
 
drive
.
Id
));


                        
// Note: For improved efficiency, consider batching


                        
// permission insert requests


                        
var
 
permissionRequest
 
=
 
service
.
Permissions
.
Create
(


                            
newOrganizerPermission
,


                            
drive
.
Id


                        
);


                        
permissionRequest
.
UseDomainAdminAccess
 
=
 
true
;


                        
permissionRequest
.
SupportsAllDrives
 
=
 
true
;


                        
permissionRequest
.
Fields
 
=
 
"id"
;


                        
var
 
permissionResult
 
=
 
permissionRequest
.
Execute
();


                        
Console
.
WriteLine
(
"Added organizer permission: {0}"
,
 
permissionResult
.
Id
);


                    
}



                    
pageToken
 
=
 
result
.
NextPageToken
;


                
}
 
while
 
(
pageToken
 
!=
 
null
);



                
return
 
drives
;


            
}


            
catch
 
(
Exception
 
e
)


            
{


                
// TODO(developer) - handle error appropriately


                
if
 
(
e
 
is
 
AggregateException
)


                
{


                    
Console
.
WriteLine
(
"Credential Not found"
);


                
}


                
else


                
{


                    
throw
;


                
}


            
}


            
return
 
null
;


        
}


    
}


}
````



## Prevent users from downloading, printing, or copying your file


You can limit how users can download, print, and copy files within shared
drives.


To determine whether the user can change organizer-applied download restrictions
of a shared drive, check the capabilities.canChangeDownloadRestriction boolean field. If capabilities.canChangeDownloadRestriction is set to true , download
restrictions can be applied to the shared drive. For more information, see Understand file capabilities .


The drives resource contains a collection of
boolean restrictions fields used to indicate whether an action can be performed on a shared drive.
Restrictions apply to a shared drive or items inside a shared drive.
Restrictions can be set using the drives.update method.


To apply download restrictions to a shared drive, a shared drive manager can set
the restrictions.downloadRestriction field of the drives resource using the DownloadRestriction object.
Setting the restrictedForReaders boolean field to true declares that both
download and copy are restricted for readers. Setting the restrictedForWriters boolean field to true declares that both download and copy are restricted for
writers. Note that if the restrictedForWriters field is true , download and
copy is also restricted for readers. Similarly, setting restrictedForWriters to true and restrictedForReaders to false is equivalent to setting both restrictedForWriters and restrictedForReaders to true .



### Backward compatibility


With the introduction of the DownloadRestriction object, the functionality of the restrictions.copyRequiresWriterPermission boolean field has been updated.


Now, setting restrictions.copyRequiresWriterPermission to true updates the restrictedForReaders boolean field of the DownloadRestriction object to true to declare that
both download and copy are restricted for readers.


Setting the copyRequiresWriterPermission field to false updates both the restrictedForWriters and restrictedForReaders fields to false . This means
download or copy restriction settings are removed for all users.


Warning:

You should only use the legacy

`copyRequiresWriterPermission`
field

or

the

`DownloadRestriction`
object to set download, print, and copy restrictions. The fields are not meant to be used together as the two field values might conflict.


### Fields that control download, print, and copy features


The following table lists drives resource fields
that affect download, print, and copy functionality:


| Field | Description | Version |

| --- | --- | --- |

| capabilities.canCopy | Whether the current user can copy files in a shared drive. | v2 & v3 |

| capabilities.canDownload | Whether the current user can download files in a shared drive. | v2 & v3 |

| capabilities.canChangeCopyRequiresWriterPermission | Whether the current user can change the copyRequiresWriterPermission restriction of a shared drive. | v2 & v3 |

| capabilities.canResetDriveRestrictions | Whether the current user can reset the shared drive restrictions to defaults. | v2 & v3 |

| capabilities.canChangeDownloadRestriction | Whether the current user can change the download restriction of a shared drive. | v3 only |

| restrictions.copyRequiresWriterPermission | Whether the options to copy, print, or download files inside a shared drive are disabled for readers and commenters. When true , it sets the similarly named field to true for any file inside this shared drive. | v2 & v3 |

| restrictions.downloadRestriction | The download restrictions applied by shared drive managers. | v3 only |




## Folder limits


Shared drive folders have some storage limits. For information, see Shared
drive limits in
Google Drive .



### Item cap


Each user's shared drive has a limit of 500,000 items, including files, folders,
and shortcuts.


When the limit is reached, the shared drive can no longer accept items. To
resume receiving files, users must permanently delete items from the shared
drive. Note that items in the trash count toward the limit, but
permanently-deleted items don't. For more information, see Trash or delete
files and folders .



### Folder-depth limit


A folder in a shared drive can't contain more than 100 levels of nested folders.
This means that a child folder cannot be stored under a folder that's more than
99 levels deep. This limitation only applies to child folders.


Attempts to add more than 100 levels of folders returns a teamDriveHierarchyTooDeep HTTP status code response.


Note:

If you want to determine the folder depth of a resource, you must manually ascend the folder hierarchy.


## Related topics


- File and folder limits in files

- Roles and permissions

## Search for shared drives

_Source: https://developers.google.com/workspace/drive/api/guides/search-shareddrives_

To search for a specific set of shared drives, use the query string q field
with drives.list to filter the drives to
return by combining one or more search terms.


A query string contains the following three parts:


query_term operator values


Where:


- query_term is the query term or field to search upon. Note: Most query terms require useDomainAdminAccess=true . For more
information about this flag, see drives.list .

- operator specifies the condition for the query term.

- values are the specific values you want to use to filter your search
results.



To view the query terms and operators that you can use to filter shared drives,
see Search query terms and operators .


For example, the following query string filters the search to only return shared
drives with the name "Google Drive API resources."


````
q: name = 'Google Drive API resources' & useDomainAdminAccess=false
````



## Query string examples


The following table lists examples of some basic query strings for shared
drives. The actual code differs depending on the client library you use for your
search.


You must also escape special characters in your file names to make sure the
query works correctly. For example, if a filename contains both an apostrophe
( ' ) and a backslash ( "\" ) character, use a backslash to escape them: name
contains 'quinn\'s paper\\essay' .


Note:

These examples show the unencoded

`q`
parameter, where

`organizerCount =
0`
is encoded as

`organizerCount+%3d+0`
. Client libraries handle this encoding automatically.

| What you want to query | Example | useDomainAdminAccess setting |

| --- | --- | --- |

| Shared drives created after June 1, 2017 | createdTime > '2017-06-01T12:00:00' | true |

| Shared drives visible in the default view | hidden = false | false |

| Shared drives with more than one member | memberCount > 1 | true |

| Shared drives with the word 'confidential' in the title and 20 or more members | name contains 'confidential' and memberCount >= 20 | true |

| Shared drives with the word 'confidential' in the title among all shared drives of the organization | name contains 'confidential' and orgUnitId = 'C03az79cb' | true |

| Shared drives with the word 'confidential' in the title among all shared drives that the user is a member of | name contains 'confidential' | false |

| Shared drives with no assigned organizer | organizerCount = 0 | true |

| Shared drives that don't contain the organizational unit ID | orgUnitId != 'C03az79cb' | true |




## Query multiple terms with parentheses


You can use parentheses to group multiple query terms together. For example, to
search for shared drives created after a specific date and that either have more
than five organizers or more than 20 members, use this query:


````
createdTime > '2019-01-01T12:00:00' and (organizerCount > 5 or
memberCount > 20)
````


This search returns all shared drives created after January 1st, 2019 and that
have more than five organizers or more than 20 members.


The Drive API evaluates and and or operators from left to right,
so the same search without parentheses would return:


- Only shared drives with more than five organizers that were created after
January 1st, 2019.

- All shared drives with more than 20 members, even those created before
January 1st, 2019.




## Related topics


- Search for files and folders

- Search query terms and operators

## Labels overview

_Source: https://developers.google.com/workspace/drive/api/guides/about-labels_

Labels are metadata that you define to help users organize, find, and apply
policy to files in Google Drive. The Drive API allows developers to
apply labels to files and folders, set label field values, read labels and field
values on files, and search for files using metadata terms defined by the custom
label taxonomy.


Drive labels can support business processes by attaching metadata
to files and folders. Common uses for labels are:


- Classify content to follow an information governance strategy —Create a
label to identify sensitive content or data that requires special handling.
For example, you might create a badged label (a label with color-coded
option values) titled "Sensitivity" with the values of "Top Secret,"
"Confidential," and "Public."

- Apply policy to items in Drive —Create labels to manage
Drive content throughout its lifecycle and ensure it adheres
to your organization's record keeping practices. For example, use labels to
manage a data loss policy (DLP) whereby users can't download files with a
"Sensitivity" label set to "Top Secret".

- Curate and find files —Create labels to increase searchability of your
company's content by letting people in your organization find items based on
labels and their fields. For example, apply a "Signature Status" label set
to "Awaiting Signature" to all contracts awaiting signature by a specific
date. Drive search can then return these contracts when
someone searches "awaiting signature".



Below is a list of common terms used by Drive labels:


Label

Structured metadata placed on a Drive file.
Drive users can assign labels and set label field values
for files. Labels are composed of:


Label name

The resource name of the label. The

label ID

is part of the Label name. Depending on the request, the name is in the form of either:

`labels/{id}`
or

`labels/{id}@{revisionId}`
. For more information, see

Label revision

below.

Label ID

A globally unique identifier for the label. The ID is part of the label name, but unlike the name, it's consistent between revisions.

Field

An individual typed, settable component of a label. A label can have zero or
more fields associated with it. Selection and user fields can be set with
multiple values if the field is configured with ListOptions in the Google Drive Labels API .


Field type

The data type of the value associated with the

field

. Configurable as integer, dateString, text, user, or selection. The type chosen impacts both the valid values applicable to Drive items and the search query options available.

Label taxonomy

The configured label fields available to users for application to
Drive files. Readable and writable through the
Drive Labels API. Also known as the label schema.


Label revision

An instance of the label. Anytime a label is created, updated, published, or
deprecated, the label revision increments.


Draft revision

The revision number of the current draft instance of the label. You can make several updates to a label, each incrementing its draft revision number, without affecting the published revision. The ability to have draft labels lets you test label updates before publishing.

Published revision

The revision number of the published version of a label. The published label is the instance of the label available to users.


## Related topics


- To learn about using labels in Drive, see Set a label field
on a file .

- Learn more about the Drive Labels API .

## Set label field values

_Source: https://developers.google.com/workspace/drive/api/guides/set-label_

This page describes how to set a label Field on a single
Google Drive file.


To add metadata to a file by setting a file label, use the files.modifyLabels method. The request body contains an instance of ModifyLabelsRequest to modify the set of labels on a file. The request might contain several
modifications that are applied atomically. That is, if any modifications aren't
valid, then the entire update is unsuccessful and none of the (potentially
dependent) changes are applied.


The ModifyLabelsRequest contains an instance of LabelModification which is a modification to a label on a file. It might also contain an instance
of FieldModification which is a modification to a label's field.


If successful, the response
body contains
the labels added or updated by the request. These exist within a modifiedLabels object of type Label .



## Example


The following code sample shows how to use the fieldId of a text field to set
a value for this Field on a
file. When a label Field is initially set on a file, it applies the label to
the file. You can then unset a single field or remove all fields associated with
the label. For more information, see Unset a label field on a
file and Remove a label from a
file .



### Java


````
LabelFieldModification
 
fieldModification
 
=


new
 
LabelFieldModification
().
setFieldId
(
"
FIELD_ID
"
).
setSetTextValues
(
ImmutableList
.
of
(
"
VALUE
"
));



ModifyLabelsRequest
 
modifyLabelsRequest
 
=


  
new
 
ModifyLabelsRequest
()


      
.
setLabelModifications
(


          
ImmutableList
.
of
(


              
new
 
LabelModification
()


                
.
setLabelId
(
"
LABEL_ID
"
)


                
.
setFieldModifications
(
ImmutableList
.
of
(
fieldModification
))));



ModifyLabelsResponse
 
modifyLabelsResponse
 
=
 
driveService
.
files
().
modifyLabels
(
"
FILE_ID
"
,
 
modifyLabelsRequest
).
execute
();
````



### Python


````
field_modification
 
=
 
{
'fieldId'
:
'
FIELD_ID
'
,
'setTextValues'
:[
'
VALUE
'
]}


label_modification
 
=
 
{
'labelId'
:
'
LABEL_ID
'
,
 
'fieldModifications'
:[
field_modification
]}



modified_labels
 
=
 
drive_service
.
files
()
.
modifyLabels
(
fileId
=
"
FILE_ID
"
,
 
body
 
=
 
{
'labelModifications'
 
:
 
[
label_modification
]})
.
execute
()
````



### Node.js


````
/**


* Set a label with a text field on a Drive file


* @return{obj} updated label data


**/


async
 
function
 
setLabelTextField
()
 
{


  
// Get credentials and build service


  
// TODO (developer) - Use appropriate auth mechanism for your app



  
const
 
{
GoogleAuth
}
 
=
 
require
(
'google-auth-library'
);


  
const
 
{
google
}
 
=
 
require
(
'googleapis'
);



  
const
 
auth
 
=
 
new
 
GoogleAuth
({
scopes
:
 
'https://www.googleapis.com/auth/drive'
});


  
const
 
service
 
=
 
google
.
drive
({
version
:
 
'v3'
,
 
auth
});


  
const
 
fieldModification
 
=
 
{


    
'fieldId'
:
 
'
FIELD_ID
'
,


    
'setTextValues'
:
 
[
'
VALUE
'
],


  
};


  
const
 
labelModification
 
=
 
{


    
'labelId'
:
 
'
LABEL_ID
'
,


    
'fieldModifications'
:
 
[
fieldModification
],


  
};


  
const
 
labelModificationRequest
 
=
 
{


    
'labelModifications'
:
 
[
labelModification
],


  
};


  
try
 
{


    
const
 
updateResponse
 
=
 
await
 
service
.
files
.
modifyLabels
({


      
fileId
:
 
'
FILE_ID
'
,


      
resource
:
 
labelModificationRequest
,


    
});


    
return
 
updateResponse
;


  
}
 
catch
 
(
err
)
 
{


    
// TODO (developer) - Handle error


    
throw
 
err
;


  
}


}
````


Replace the following:


- FIELD_ID : The fieldId of the field to modify. To locate
the fieldId , retrieve the label using the Google Drive Labels API .

- VALUE : The new value for this field.

- LABEL_ID : The labelId of the label to modify.

- FILE_ID : The fileId of the file for which the labels are
modified.




## Notes


- To set a label with no fields, apply labelModifications with no fieldModifications present.

- To set values for selection field options, use the Choice id of the value
that you can get by fetching the label schema in the Drive Labels API .

- Only a Field that supports lists of values can have multiple values set,
otherwise you'll receive a 400: Bad Request error response.

- Set the proper value type for the selected Field (such as integer, text,
user, etc.), otherwise you'll receive a 400: Bad Request error response.
You can retrieve the field data type using the Drive Labels API .

## Unset label field values

_Source: https://developers.google.com/workspace/drive/api/guides/unset-label_

This page describes how to unset a label Field on a single
Google Drive file.


To remove metadata from a file by unsetting a file label, use the files.modifyLabels method. The request body contains an instance of ModifyLabelsRequest to modify the set of labels on a file. The request might contain several
modifications that are applied atomically. That is, if any modifications aren't
valid, then the entire update is unsuccessful and none of the (potentially
dependent) changes are applied.


The ModifyLabelsRequest contains an instance of LabelModification which is a modification to a label on a file. It might also contain an instance
of FieldModification which is a modification to a label's field. To unset the values for the field,
set FieldModification.unsetValues to True .


If successful, the response
body contains
the labels added or updated by the request. These exist within a modifiedLabels object of type Label .



## Example


The following code sample shows how to use the fieldId and labelId to unset
the field values on the associated fileId . For example, if a label contains
both text and user fields, unsetting the text field removes it from the label
but leaves the user field untouched. Whereas removing a label deletes both the
text and user fields associated with the label. For more information, see Remove a label from a file .



### Java


````
LabelFieldModification
 
fieldModification
 
=


  
new
 
LabelFieldModification
().
setFieldId
(
"
FIELD_ID
"
).
setUnsetValues
(
true
);



ModifyLabelsRequest
 
modifyLabelsRequest
 
=


  
new
 
ModifyLabelsRequest
()


      
.
setLabelModifications
(


          
ImmutableList
.
of
(


              
new
 
LabelModification
()


                
.
setLabelId
(
"
LABEL_ID
"
)


                
.
setFieldModifications
(
ImmutableList
.
of
(
fieldModification
))));



ModifyLabelsResponse
 
modifyLabelsResponse
 
=
 
driveService
.
files
().
modifyLabels
(
"
FILE_ID
"
,
 
modifyLabelsRequest
).
execute
();
````



### Python


````
field_modification
 
=
 
{
'fieldId'
:
'
FIELD_ID
'
,
'unsetValues'
:
True
}


label_modification
 
=
 
{
'labelId'
:
'
LABEL_ID
'
,
 
'fieldModifications'
:[
field_modification
]}



modified_labels
 
=
 
drive_service
.
files
()
.
modifyLabels
(
fileId
=
"
FILE_ID
"
,
 
body
 
=
 
{
'labelModifications'
 
:
 
[
label_modification
]})
.
execute
();
````



### Node.js


````
/**


* Unset a label with a field on a Drive file


* @return{obj} updated label data


**/


async
 
function
 
unsetLabelField
()
 
{


  
// Get credentials and build service


  
// TODO (developer) - Use appropriate auth mechanism for your app



  
const
 
{
GoogleAuth
}
 
=
 
require
(
'google-auth-library'
);


  
const
 
{
google
}
 
=
 
require
(
'googleapis'
);



  
const
 
auth
 
=
 
new
 
GoogleAuth
({
scopes
:
 
'https://www.googleapis.com/auth/drive'
});


  
const
 
service
 
=
 
google
.
drive
({
version
:
 
'v3'
,
 
auth
});


  
const
 
fieldModification
 
=
 
{


    
'fieldId'
:
 
'
FIELD_ID
'
,


    
'unsetValues'
:
 
True
,


  
};


  
const
 
labelModification
 
=
 
{


    
'labelId'
:
 
'
LABEL_ID
'
,


    
'fieldModifications'
:
 
[
fieldModification
],


  
};


  
const
 
labelModificationRequest
 
=
 
{


    
'labelModifications'
:
 
[
labelModification
],


  
};


  
try
 
{


    
const
 
updateResponse
 
=
 
await
 
service
.
files
.
modifyLabels
({


      
fileId
:
 
'
FILE_ID
'
,


      
resource
:
 
labelModificationRequest
,


    
});


    
return
 
updateResponse
;


  
}
 
catch
 
(
err
)
 
{


    
// TODO (developer) - Handle error


    
throw
 
err
;


  
}


}
````


Replace the following:


- FIELD_ID : The fieldId of the field to modify. To locate
the fieldId , retrieve the label using the Google Drive Labels API .

- LABEL_ID : The labelId of the label to modify.

- FILE_ID : The fileId of the file for which the labels are
modified.

## Remove labels from files

_Source: https://developers.google.com/workspace/drive/api/guides/remove-label_

This page describes how to remove a label on a single Google Drive file.


To remove the file label metadata from a file, use the files.modifyLabels method. The request body contains an instance of ModifyLabelsRequest to modify the set of labels on a file. The request might contain several
modifications that are applied atomically. That is, if any modifications aren't
valid, then the entire update is unsuccessful and none of the (potentially
dependent) changes are applied.


The ModifyLabelsRequest contains an instance of LabelModification which is a modification to a label on a file. It might also contain an instance
of FieldModification which is a modification to a label's field. To remove the label from the file,
set FieldModification.removeLabel to True .


If successful, the response
body contains
the labels added or updated by the request. These exist within a modifiedLabels object of type Label .



## Example


The following code sample shows how to use the labelId to remove all fields
associated with the label using the fileId . For example, if a label contains
both text and user fields, removing a label deletes both the text and user 
fields associated with the label. Whereas, unsetting the text field removes it 
from the label but leaves the user field untouched. For more information, see Unset a label field on a file .



### Java


````
ModifyLabelsRequest
 
modifyLabelsRequest
 
=


  
new
 
ModifyLabelsRequest
()


      
.
setLabelModifications
(


          
ImmutableList
.
of
(


              
new
 
LabelModification
()


                
.
setLabelId
(
"
LABEL_ID
"
)


                
.
setRemoveLabel
(
true
)));



ModifyLabelsResponse
 
modifyLabelsResponse
 
=
 
driveService
.
files
().
modifyLabels
(
"
FILE_ID
"
,
 
modifyLabelsRequest
).
execute
();
````



### Python


````
label_modification
 
=
 
{
'labelId'
:
'
LABEL_ID
'
,
 
'removeLabel'
:
 
True
]}



modified_labels
 
=
 
drive_service
.
files
()
.
modifyLabels
(
fileId
=
"
FILE_ID
"
,
 
body
 
=
 
{
'labelModifications'
 
:
 
[
label_modification
]})
.
execute
();
````



### Node.js


````
/**


* Remove a label on a Drive file


* @return{obj} updated label data


**/


async
 
function
 
removeLabel
()
 
{


  
// Get credentials and build service


  
// TODO (developer) - Use appropriate auth mechanism for your app



  
const
 
{
GoogleAuth
}
 
=
 
require
(
'google-auth-library'
);


  
const
 
{
google
}
 
=
 
require
(
'googleapis'
);



  
const
 
auth
 
=
 
new
 
GoogleAuth
({
scopes
:
 
'https://www.googleapis.com/auth/drive'
});


  
const
 
service
 
=
 
google
.
drive
({
version
:
 
'v3'
,
 
auth
});


  
const
 
labelModification
 
=
 
{


    
'labelId'
:
 
'
LABEL_ID
'
,


    
'removeLabel'
:
 
True
,


  
};


  
const
 
labelModificationRequest
 
=
 
{


    
'labelModifications'
:
 
[
labelModification
],


  
};


  
try
 
{


    
const
 
updateResponse
 
=
 
await
 
service
.
files
.
modifyLabels
({


      
fileId
:
 
'
FILE_ID
'
,


      
resource
:
 
labelModificationRequest
,


    
});


    
return
 
updateResponse
;


  
}
 
catch
 
(
err
)
 
{


    
// TODO (developer) - Handle error


    
throw
 
err
;


  
}
````


Replace the following:


- LABEL_ID : The labelId of the label to modify. To locate
the labels on a file, use the files.listLabels method.

- FILE_ID : The fileId of the file for which the labels are
modified.

## List labels applied to files

_Source: https://developers.google.com/workspace/drive/api/guides/list-labels_

Your organization can have multiple labels, with labels having any number of
fields. This page describes how to list all labels on a single Google Drive
file.


To list the file labels, use the files.listLabels method. The
request body must be empty. The method also takes the optional query parameter maxResults to set the maximum number of labels to return per page. If not set,
100 results are returned.


If successful, the response
body contains the
list of labels applied to a file. These exist within an items object of type Label .



## Example


The following code sample shows how to use the label's fileId to retrieve the
correct labels.



### Java


````
List<Label>
 
labelList
 
=


labelsDriveClient
.
files
().
listLabels
(
"
FILE_ID
"
).
execute
().
getItems
();
````



### Python


````
label_list_response
 
=
 
drive_service
.
files
()
.
listLabels
(
fileId
=
"
FILE_ID
"
)
.
execute
();
````



### Node.js


````
/**


* Lists all the labels on a Drive file


* @return{obj} a list of Labels


**/


async
 
function
 
listLabels
()
 
{


  
// Get credentials and build service


  
// TODO (developer) - Use appropriate auth mechanism for your app



  
const
 
{
GoogleAuth
}
 
=
 
require
(
'google-auth-library'
);


  
const
 
{
google
}
 
=
 
require
(
'googleapis'
);



  
const
 
auth
 
=
 
new
 
GoogleAuth
({
scopes
:
 
'https://www.googleapis.com/auth/drive'
});


  
const
 
service
 
=
 
google
.
drive
({
version
:
 
'v3'
,
 
auth
});


  
try
 
{


    
const
 
labelListResponse
 
=
 
await
 
service
.
files
.
listLabels
({


      
fileId
:
 
'
FILE_ID
'
,


    
});


    
return
 
labelListResponse
;


  
}
 
catch
 
(
err
)
 
{


    
// TODO (developer) - Handle error


    
throw
 
err
;


  
}


}
````


Replace FILE_ID with the fileId of the file for which you
want the list of labels.

## Return specific labels from a file

_Source: https://developers.google.com/workspace/drive/api/guides/return-labels_

This page describes how to return specific labels from a Google Drive file
resource.


To specify which labels that you want to retrieve, use the files.get method or any method that
returns a file resource . The request
body must be empty.


If successful, the response
body contains an instance
of File .



## Example


The following code sample shows how to use the fileId , plus the labelId , to
return the set of specific labels. The includeLabels object is a comma-separated list of IDs. The labelInfo object in the fields parameter contains labels set on the file and requested within includeLabels .



### Java


````
File
 
file
 
=
 
driveService
.
files
().
get
(
"
FILE_ID
"
).
setIncludeLabels
(
"
LABEL_ID
,
LABEL_ID
"
).
setFields
(
"labelInfo"
).
execute
();
````



### Python


````
file
 
=
 
drive_service
.
files
()
.
get
(
fileId
=
"
FILE_ID
"
,
 
includeLabels
=
"
LABEL_ID
,
LABEL_ID
"
,
 
fields
=
"labelInfo"
)
.
execute
();
````



### Node.js


````
/**


* Get a Drive file with specific labels


* @return{obj} file with labelInfo


**/


async
 
function
 
getFileWithSpecificLabels
()
 
{


  
// Get credentials and build service


  
// TODO (developer) - Use appropriate auth mechanism for your app



  
const
 
{
GoogleAuth
}
 
=
 
require
(
'google-auth-library'
);


  
const
 
{
google
}
 
=
 
require
(
'googleapis'
);



  
const
 
auth
 
=
 
new
 
GoogleAuth
({
scopes
:
 
'https://www.googleapis.com/auth/drive'
});


  
const
 
service
 
=
 
google
.
drive
({
version
:
 
'v3'
,
 
auth
});


  
try
 
{


    
const
 
file
 
=
 
await
 
service
.
files
.
get
({


      
fileId
:
 
'
FILE_ID
'
,


      
includeLabels
:
 
'
LABEL_ID
,
LABEL_ID
'
,


      
fields
:
'labelInfo'
,


    
});


    
return
 
file
;


  
}
 
catch
 
(
err
)
 
{


    
// TODO (developer) - Handle error


    
throw
 
err
;


  
}


}
````


Replace the following:


- FILE_ID : The fileId of the file containing the labels.

- LABEL_ID : The labelId of a label to return. To locate
the labels on a file, use the files.listLabels method.




## Notes


- Any method returning a file
resource supports the includeLabels field and query parameter. For example, files.copy , files.list , and files.update .

## Search files by label or field

_Source: https://developers.google.com/workspace/drive/api/guides/search-labels_

This page describes how to search for files with a specific label or field value
applied.



## Label field types


Google Drive label fields are strongly typed with each type supporting
different indexing and search semantics. The following table shows the available
data types.


| Type | Label type options | Supported search operators |

| --- | --- | --- |

| Text | TextOptions | is null, is not null, =, contains, starts with |

| Long Text | LongTextOptions | is null, is not null, contains |

| Integer | IntegerOptions | is null, is not null, =, !=, <, >, <=, >= |

| Date | DateOptions | is null, is not null, =, !=, <, >, <=, >= |

| Selection | SelectionOptions | is null, is not null, =, != |

| User | UserOptions | is null, is not null, =, != |

| Selection List | SelectionOptions (with max_entries > 1) | is null, is not null, in, not in |

| User List | UserOptions (with max_entries > 1) | is null, is not null, in, not in |




### Search examples


Note:

In the examples below, readable strings are used for clarity. Actual resource names and field IDs must be used instead. For example,

`labels/contract.execution_date`
might look something like this:

`labels/837d7f5de85137b86e52.491d`
.

1. Search based on the presence of a label or field


You can search for items where a specific label has (or has not) been applied:


- 'labels/contract' in labels

- not 'labels/contract' in labels



You can also search for items where a specific field has (or has not) been set:


- labels/contract.comment IS NOT NULL

- labels/contract.comment IS NULL



Note:

Searching for files without any fields set returns items that the label has not been applied to. You can combine the queries above to find items where the label is applied, but doesn't contain a value for a specific field:

`'labels/contract' in labels AND labels/contract.comment IS NULL`
.

2. Search based on single-valued fields


You can write search queries to match expected field values. The following table
shows the valid field queries:


| What you want to query | Query string |

| --- | --- |

| Items where comment is set to "hello" | labels/contract.comment = 'hello' |

| Files where comment starts with "hello" | labels/contract.comment STARTS WITH 'hello' |

| Files where status is executed | labels/contract.status = 'executed' |

| Files where status is not executed | labels/contract.status != 'executed' |

| Files where execution_date is before a specific date | labels/contract.execution_date < '2020-06-22' |

| Files where value_usd (integer) is less than a specific value | labels/contract.value_usd < 2000 |

| Files where client_contact is set to a specific email address | labels/contract.client_contact = 'alex@altostrat.com' |



3. Search based on fields with multivalued fields (such as
ListOptions.max_entries > 1)


Fields that support multiple values can only be queried using the IN operator:


- ' EMAIL_ADDRESS ' IN labels/project.project_leads

- NOT ' EMAIL_ADDRESS ' IN labels/project.project_leads




## Example


The following code sample shows how to use one or more labelId to list all
files with a specific label or field value from a Drive file
resource . It also uses the files.list method. The request body must
be empty.


If you want to include labelInfo in the response, you also must specify:


- includeLabels as a comma-separated list of IDs.

- labelInfo in the fields parameter to denote that you want the labelInfo returned within includeLabels .



If successful, the response
body contains the list
of files.



### Java


````
List<File>
 
fileList
 
=
 
driveService
.
files
().
list
().
setIncludeLabels
(
"
LABEL_1_ID
,
LABEL_2_ID
"
).
setFields
(
"items(labelInfo, id)"
).
setQ
(
"'labels/
LABEL_1_ID
' in labels and 'labels/
LABEL_2_ID
' in labels"
).
execute
().
getItems
();
````



### Python


````
file_list
 
=
 
drive_service
.
files
()
.
list
(
includeLabels
=
"
LABEL_1_ID
,
LABEL_2_ID
"
,
 
q
=
"'labels/
LABEL_1_ID
' in labels and 'labels/
LABEL_2_ID
' in labels"
,
 
fields
=
"items(labelInfo, id)"
)
.
execute
();
````



### Node.js


````
/**


* Search for Drive files with specific labels


* @return{obj} file list with labelInfo


**/


async
 
function
 
searchForFileWithLabels
()
 
{


  
// Get credentials and build service


  
// TODO (developer) - Use appropriate auth mechanism for your app



  
const
 
{
GoogleAuth
}
 
=
 
require
(
'google-auth-library'
);


  
const
 
{
google
}
 
=
 
require
(
'googleapis'
);



  
const
 
auth
 
=
 
new
 
GoogleAuth
({
scopes
:
 
'https://www.googleapis.com/auth/drive'
});


  
const
 
service
 
=
 
google
.
drive
({
version
:
 
'v3'
,
 
auth
});


  
try
 
{


    
const
 
fileList
 
=
 
await
 
service
.
files
.
list
({


      
includeLabels
:
 
'
LABEL_1_ID
,
LABEL_2_ID
'
,


      
q
:
 
'\'labels/
LABEL_1_ID
\' in labels and \'labels/
LABEL_2_ID
\' in labels'
,


      
fields
:
'files(labelInfo, id)'
,


    
});


    
return
 
file
;


  
}
 
catch
 
(
err
)
 
{


    
// TODO (developer) - Handle error


    
throw
 
err
;


  
}
````


Replace the following:


- LABEL_1_ID : The first labelId of a label to return.

- LABEL_2_ID : The second labelId of a label to return.

## Use the fields parameter

_Source: https://developers.google.com/workspace/drive/api/guides/fields-parameter_

This document explains how to use the fields parameter in Google Drive.


To return the exact fields you need, and to improve performance, use the fields system
parameter in
your method call.


For information on other system parameters that apply to Drive API,
see Alternative system parameters .



## How the fields parameter works


The fields parameter uses a FieldMask for response filtering. Field masks are used to specify a subset of fields that
a request should return. Using a field mask is good design practice to make sure
that you don't request unnecessary data, which in turn helps avoid unnecessary
processing time.


If you don't specify the fields parameter, the server returns a default set of
fields specific to the method. For example, the list method on the files method only returns the kind , id , name , and mimeType fields. The get method on the permissions resource returns a different set
of default fields.


For all methods of the about , comments (excluding delete ), and replies (excluding delete ) resources you must set the fields parameter. These methods don't return a default set of fields.


After a server processes a valid request that includes the fields parameter,
it returns an HTTP 200 OK status code, along with the requested data. If the
fields parameter has an error or is otherwise invalid, the server returns an HTTP 400 Bad Request status code, along with an error message stating what's
wrong with your fields selection. For example, files.list(fields='files(id,capabilities,canAddChildren)') yields an error of
"Invalid field selection canAddChildren." The correct fields parameter for this
example is files.list(fields='files(id,capabilities/canAddChildren)') .


To determine the fields you can return using the fields parameter, visit the
documentation page of the resource you're querying. For example, to see what
fields you can return for a file, refer to the files resource documentation.
For more file-specific query terms, see Search query terms and operators .


Important:

Use query parameters that support data pagination (such as

`maxResults`
and

`nextPageToken`
) to reduce the results of each query to a manageable size. Otherwise, the performance gains possible with a

partial response

might not be realized.


## Field parameter format rules


The format of the fields request parameter value is loosely based on XPath
syntax. The following are formatting rules for the fields parameter. All these
rules use examples related to the files.get method.


- Use a comma-separated list to select multiple fields, such as 'name,
mimeType' .

- Use a/b to select field b that's nested within field a , such as 'capabilities/canDownload' . For more information, see Fetch the fields of
a nested resource .

- Use a sub-selector to request a set of specific sub-fields of arrays or
objects by placing expressions in parentheses "()". For example, 'permissions(id)' returns only the permission ID for each element in the
permissions array.

- To return all fields in an object, use an asterisk ( * ) as a wildcard in
field selections. For example, 'permissions/permissionDetails/*' selects
all available permission details fields per permission. Note that using the
wildcard can lead to negative performance impacts on the request.



Request


In this example, we provide the file ID path parameter and multiple fields as a query parameter in the request. The response returns the field values for the file ID.


````
GET https://www.googleapis.com/drive/v3/files/
FILE_ID
?fields=name,starred,shared
````


Response


````
{
  "name": "File1",
  "starred": false,
  "shared": true
  }
}
````



## Fetch the fields of a nested resource


When a field refers to another resource, you can specify which fields of the
nested resource should be fetched.


For example, to retrieve the role field (nested resource) of the permissions resource, use any of the following options:


- permissions.get with fields=role .

- permissions.get with fields=* to show all permissions fields.

- files.get with fields=permissions(role) or fields=permissions/role .

- files.get with fields=permissions to show all permissions fields.

- changes.list with fields=changes(file(permissions(role))) .



To retrieve multiple fields, use a comma-separated list. For example, files.list with fields=files(id,name,createdTime,modifiedTime,size) .


Request


In this example, we provide the file ID path parameter and multiple fields, including certain fields of the nested permissions resource, as a query parameter in the request. The response returns the field values for the file ID.


````
GET
 
https
:
//www.googleapis.com/drive/v3/files/
FILE_ID
?fields=name,starred,shared,permissions(kind,type,role)
````


Response


````
{


  
"name"
:
 
"File1"
,


  
"starred"
:
 
false
,


  
"shared"
:
 
true
,


  
"permissions"
:
 
[


    
{


      
"kind"
:
 
"drive#permission"
,


      
"type"
:
 
"user"
,


      
"role"
:
 
"owner"


    
}


  
]


}
````



## Alternative system parameters


Query parameters that apply to all Google Drive API operations are documented at System Parameters .


Note:

Per-user quotas are always enforced by the Drive API, and the user's identity is determined from the access token passed in the request. The

`quotaUser`
and

`userIp`
parameters can only be used for anonymous requests against public files.


## Related topics


- Resolve errors

- Troubleshoot authentication and authorization issues

- Improve performance

## Improve Drive API performance

_Source: https://developers.google.com/workspace/drive/api/guides/performance_

This document covers some techniques you can use to improve the performance of your application. In some cases, examples from other APIs or generic APIs are used to illustrate the ideas presented. However, the same concepts are applicable to the Google Drive API.



## Compression using gzip


An easy and convenient way to reduce the bandwidth needed for each request is to enable gzip compression. Although this requires additional CPU time to uncompress the results, the trade-off with network costs usually makes it very worthwhile.


In order to receive a gzip-encoded response you must do two things: Set an Accept-Encoding header, and modify your user agent to contain the string gzip . Here is an example of properly formed HTTP headers for enabling gzip compression:


````
Accept-Encoding:
 
gzip


User-Agent:
 
my
 
program
 (
gzip
)
````



## Working with partial resources


Another way to improve the performance of your API calls is by sending and receiving only the portion of the  data that you're interested in. This lets your application avoid transferring, parsing, and storing unneeded fields, so it can use resources including network, CPU, and memory more efficiently.


There are two types of partial requests:


- Partial response : A request where you specify which fields to include in the response (use the fields request parameter).

- Patch : An update request where you send only the fields you want to change (use the PATCH HTTP verb).



More details on making partial requests are provided in the following sections.



### Partial response


By default, the server sends back the full representation of a resource after processing requests. For better performance, you can ask the server to send only the fields you really need and get a partial response instead.


To request a partial response, use the fields request parameter to specify the fields you want returned. You can use this parameter with any request that returns response data.


Note that the fields parameter only affects the response data; it does not affect the data that you need to send, if any. To reduce the amount of data you send when modifying resources, use a patch request.



#### Example



### Patch (partial update)


You can also avoid sending unnecessary data when modifying resources. To send updated data only for the specific fields that you’re changing, use the HTTP PATCH verb. The patch semantics described in this document are different (and simpler) than they were for the older, GData implementation of partial update.


The short example below shows how using patch minimizes the data you need to send to make a small update.



#### Example



#### Handling the response to a patch


After processing a valid patch request, the API returns a 200 OK HTTP response code along with the complete representation of the modified resource. If ETags are used by the API, the server updates ETag values when it successfully processes a patch request, just as it does with PUT .


The patch request returns the entire resource representation unless you use the fields parameter to reduce the amount of data it returns.


If a patch request results in a new resource state that is syntactically or semantically invalid, the server returns a 400 Bad Request or 422 Unprocessable Entity HTTP status code, and the resource state remains unchanged. For example, if you attempt to delete the value for a required field, the server returns an error.



#### Alternate notation when PATCH HTTP verb is not supported


If your firewall does not allow HTTP PATCH requests, then do an HTTP POST request and set the override header to PATCH , as shown below:


````
POST https://www.googleapis.com/...
X-HTTP-Method-Override: PATCH
...
````



#### Difference between patch and update


In practice, when you send data for an update request that uses the HTTP PUT verb, you only need to send those fields which are either required or optional; if you send values for fields that are set by the server, they are ignored. Although this might seem like another way to do a partial update, this approach has some limitations. With updates that use the HTTP PUT verb, the request fails if you don't supply required parameters, and it clears previously set data if you don't supply optional parameters.


It's much safer to use patch for this reason. You only supply data for the fields you want to change; fields that you omit are not cleared. The only exception to this rule occurs with repeating elements or arrays: If you omit all of them, they stay just as they are; if you provide any of them, the whole set is replaced with the set that you provide.



## Batch requests


This document shows how to batch API calls together to reduce the number of HTTP connections
your client has to make. This document is specifically about making a batch request by sending an
HTTP request. If, instead, you're using a Google client library to make a batch request, see the client library's documentation . Overview Each HTTP connection your client makes results in a certain amount of overhead. The Google Drive API supports batching, to allow your client to put several API calls into a single HTTP request. Examples of situations when you might want to use batching: Retrieving metadata for a large number of files. Updating metadata or properties in bulk. Changing permissions for a large number of files, such as adding a new user or group. Synchronizing local client data for the first time or after being offline for an extended time. In each case, instead of sending each call separately, you can group them together into a single HTTP request. All the inner requests must go to the same Google API. You're limited to 100 calls in a single batch request. If you must make more calls than that, use multiple batch requests. Note : The batch system for the Google Drive API uses the same syntax as the OData batch processing system, but the semantics differ. Additional constraints include: Batch requests with more than 100 calls might cause an error. There's an 8,000 character limit on the length of the URL for each inner request. Google Drive doesn't support batch operations for media, either for upload or download, or for exporting files. Batch details A batch request consists of multiple API calls combined into one HTTP request, which can be sent to the batchPath specified in the API discovery document . The default path is /batch/ api_name / api_version . This section describes the batch syntax in detail; later, there's an example . Note : A set of n requests batched together counts toward your usage limit as n requests, not as one request. The batch request is separated into a set of requests before processing. Format of a batch request A batch request is a single standard HTTP request containing multiple Google Drive API calls, using the multipart/mixed content type. Within that main HTTP request, each of the parts contains a nested HTTP request. Each part begins with its own Content-Type: application/http HTTP header. It can also have an optional Content-ID header. However, the part headers are just there to mark the beginning of the part; they're separate from the nested request. After the server unwraps the batch request into separate requests, the part headers are ignored. The body of each part is a complete HTTP request, with its own verb, URL, headers, and body. The HTTP request must only contain the path portion of the URL; full URLs are not allowed in batch requests. The HTTP headers for the outer batch request, except for the Content- headers such as Content-Type , apply to every request in the batch. If you specify a given HTTP header in both the outer request and an individual call, then the individual call header's value overrides the outer batch request header's value. The headers for an individual call apply only to that call. For example, if you provide an Authorization header for a specific call, then that header applies only to that call. If you provide an Authorization header for the outer request, then that header applies to all of the individual calls unless they override it with Authorization headers of their own. When the server receives the batched request, it applies the outer request's query parameters and headers (as appropriate) to each part, and then treats each part as if it were a separate HTTP request. Response to a batch request The server's response is a single standard HTTP response with a multipart/mixed content type; each part is the response to one of the requests in the batched request, in the same order as the requests. Like the parts in the request, each response part contains a complete HTTP response, including a status code, headers, and body. And like the parts in the request, each response part is preceded by a Content-Type header that marks the beginning of the part. If a given part of the request had a Content-ID header, then the corresponding part of the response has a matching Content-ID header, with the original value preceded by the string response- , as shown in the following example. Note : The server might perform your calls in any order. Don't count on their being executed in the order in which you specified them. If you want to ensure that two calls occur in a given order, you can't send them in a single request; instead, send the first one by itself, then wait for the response to the first one before sending the second one. Example The following example shows the use of batching with the Google Drive API. Example batch request POST https://www.googleapis.com/batch/drive/v3
Accept-Encoding: gzip
User-Agent: Google-HTTP-Java-Client/1.20.0 (gzip)
Content-Type: multipart/mixed; boundary= END_OF_PART Content-Length: 963 -- END_OF_PART Content-Length: 337
Content-Type: application/http
content-id: 1
content-transfer-encoding: binary POST https://www.googleapis.com/drive/v3/files/ fileId /permissions?fields=id
Authorization: Bearer authorization_token Content-Length: 70
Content-Type: application/json; charset=UTF-8 {
  "emailAddress":"example@appsrocks.com",
  "role":"writer",
  "type":"user"
}
-- END_OF_PART Content-Length: 353
Content-Type: application/http
content-id: 2
content-transfer-encoding: binary POST https://www.googleapis.com/drive/v3/files/ fileId /permissions?fields=id&sendNotificationEmail=false
Authorization: Bearer authorization_token Content-Length: 58
Content-Type: application/json; charset=UTF-8 {
   "domain":"appsrocks.com",
   "role":"reader",
   "type":"domain"
}
-- END_OF_PART -- Example batch response This is the response to the example request in the previous section. HTTP/1.1 200 OK
Alt-Svc: quic=":443"; p="1"; ma=604800
Server: GSE
Alternate-Protocol: 443:quic,p=1
X-Frame-Options: SAMEORIGIN
Content-Encoding: gzip
X-XSS-Protection: 1; mode=block
Content-Type: multipart/mixed; boundary=batch_6VIxXCQbJoQ_AATxy_GgFUk
Transfer-Encoding: chunked
X-Content-Type-Options: nosniff
Date: Fri, 13 Nov 2015 19:28:59 GMT
Cache-Control: private, max-age=0
Vary: X-Origin
Vary: Origin
Expires: Fri, 13 Nov 2015 19:28:59 GMT


--batch_6VIxXCQbJoQ_AATxy_GgFUk
Content-Type: application/http
Content-ID: response-1


HTTP/1.1 200 OK
Content-Type: application/json; charset=UTF-8
Date: Fri, 13 Nov 2015 19:28:59 GMT
Expires: Fri, 13 Nov 2015 19:28:59 GMT
Cache-Control: private, max-age=0
Content-Length: 35


{
 "id": "12218244892818058021i"
}


--batch_6VIxXCQbJoQ_AATxy_GgFUk
Content-Type: application/http
Content-ID: response-2


HTTP/1.1 200 OK
Content-Type: application/json; charset=UTF-8
Date: Fri, 13 Nov 2015 19:28:59 GMT
Expires: Fri, 13 Nov 2015 19:28:59 GMT
Cache-Control: private, max-age=0
Content-Length: 35


{
 "id": "04109509152946699072k"
}


--batch_6VIxXCQbJoQ_AATxy_GgFUk--

## Resolve Drive API errors

_Source: https://developers.google.com/workspace/drive/api/guides/handle-errors_

The Google Drive API returns two levels of error information:


- HTTP error codes and header messages.

- A JSON object in the response body with additional details that can help you
determine how to handle the error.



Google Drive apps should catch and handle all errors that might be encountered
when using the REST API. This guide provides instructions about how to resolve
specific Drive API errors.



## HTTP status code summary


| Error code | Description |

| --- | --- |

| 200 - OK | The request is successful (this is the standard response for successful HTTP requests). |

| 400 - Bad Request | The request cannot be fulfilled due to a client error in the request. |

| 401 - Unauthorized | The request contains invalid credentials. |

| 403 - Forbidden | The request was received and understood, but the user doesn't have permission to perform the request. |

| 404 - Not Found | The requested page couldn't be found. |

| 429 - Too Many Requests | Too many requests to the API. |

| 500, 502, 503, 504 - Server Errors | Unexpected error arises while processing the request. |




## 400 errors


These errors mean that the request was unacceptable, often due to a missing
required parameter.



### badRequest


This error can occur from any one of the following issues in your code:


- A required field or parameter hasn't been provided.

- The value supplied or a combination of provided fields is invalid.

- You tried to add a duplicate parent to a Drive file.

- You tried to add a parent that would create a cycle in the directory graph.



Note:

This list isn't exhaustive, other cases can cause a 400 error.

The following JSON sample is a representation of this error:


````
{


  
"error"
:
 
{


    
"code"
:
 
400
,


    
"errors"
:
 
[


      
{


        
"domain"
:
 
"global"
,


        
"location"
:
 
"orderBy"
,


        
"locationType"
:
 
"parameter"
,


        
"message"
:
 
"Sorting is not supported for queries with fullText terms. Results are always in descending relevance order."
,


        
"reason"
:
 
"badRequest"


      
}


    
],


    
"message"
:
 
"Sorting is not supported for queries with fullText terms. Results are always in descending relevance order."


  
}


}
````


To fix this error, check the message field and adjust your code accordingly.



### illegalKeepForeverModification


This error occurs when trying to set a blob file revision marked as "Keep
Forever" to false . The following JSON sample is a representation of this
error:


````
{


 
"error"
:
 
{


  
"errors"
:
 
[


   
{


    
"domain"
:
 
"global"
,


    
"reason"
:
 
"illegalKeepForeverModification"
,


    
"message"
:
 
"Bad Request. Cannot update a revision to false that is marked as keepForever."


   
}


  
],


  
"code"
:
 
400
,


  
"message"
:
 
"Bad Request. Cannot update a revision to false that is marked as keepForever."


 
}


}
````


To fix this error, permanently delete a blob file revision to remove the "Keep
Forever" setting.



### invalidSharingRequest


This error occurs for several reasons. To determine the cause, evaluate the reason field of the returned JSON. This error most commonly occurs because:


- Sharing succeeded, but the notification email wasn't correctly delivered.

- The Access Control List (ACL) change isn't allowed for this user.



The message field indicates the actual error.



#### Share succeeded, but the notification email wasn't correctly delivered


The following JSON sample is a representation of this error:


````
{


  
"error"
:
 
{


    
"errors"
:
 
[


      
{


        
"domain"
:
 
"global"
,


        
"reason"
:
 
"invalidSharingRequest"
,


        
"message"
:
 
"Bad Request. User message: \"Sorry, the items were successfully shared but emails could not be sent to email@domain.com.\""


      
}


    
],


    
"code"
:
 
400
,


    
"message"
:
 
"Bad Request"


  
}


}
````


To fix this error, inform the user (sharer) they were unable to share because
the notification email couldn't be sent to the destination email address. The
user should make sure they have the correct email address and that it can
receive email.



#### The ACL change isn't allowed for this user


The following JSON sample is a representation of this error:


````
{


  
"error"
:
 
{


    
"errors"
:
 
[


      
{


        
"domain"
:
 
"global"
,


        
"reason"
:
 
"invalidSharingRequest"
,


        
"message"
:
 
"Bad Request. User message: \"ACL change not allowed.\""


      
}


    
],


    
"code"
:
 
400
,


    
"message"
:
 
"Bad Request"


  
}


}
````


To fix this error, check the sharing
settings of the Google Workspace
domain to which the file belongs. The settings might prohibit sharing outside of
the domain or sharing a shared drive might not be permitted.



## 401 errors


These errors mean the request doesn't contain a valid access token.



### authError


This error occurs when the access token that you're using is either expired or
invalid. This error can also be caused by missing authorization for the
requested scopes. The following JSON sample is a representation of this error:


````
{


  
"error"
:
 
{


    
"errors"
:
 
[


      
{


        
"domain"
:
 
"global"
,


        
"reason"
:
 
"authError"
,


        
"message"
:
 
"Invalid Credentials"
,


        
"locationType"
:
 
"header"
,


        
"location"
:
 
"Authorization"
,


      
}


    
],


    
"code"
:
 
401
,


    
"message"
:
 
"Invalid Credentials"


  
}


}
````


To fix this error, refresh the access token using the long-lived refresh token.
If this fails, direct the user through the OAuth flow, as described in Choose
Google Drive API scopes .



### fileNotDownloadable


This error occurs when you try to use the revisions.get method with the alt=media URL parameter on a Google Workspace document. The following JSON
sample is a representation of this error:


````
{


  
"error"
:
 
{


    
"errors"
:
 
[


      
{


        
"domain"
:
 
"global"
,


        
"reason"
:
 
"fileNotDownloadable"
,


        
"message"
:
 
"Only files with binary content can be downloaded. Use Export with Docs Editors files."


      
}


    
],


    
"code"
:
 
403
,


    
"message"
:
 
"Only files with binary content can be downloaded. Use Export with Docs Editors files."


  
}


}
````


To fix this error, try any of the following:


- Remove the alt=media URL parameter if you want to view the metadata of a
particular revision, such as the mimetype.

- Use the files.export method to export Google Workspace document byte
content. For more information, see Export Google Workspace document
content .




## 403 errors


These errors mean that a usage limit has been exceeded or the user doesn't have
the correct privileges. To determine the cause, evaluate the reason field of
the returned JSON.


For information about Drive API limits, refer to Usage limits . For information about Drive folder
limits, refer to File and folder limits .



### activeItemCreationLimitExceeded


An activeItemCreationLimitExceeded error occurs when the limit for the number
of items created per account has been exceeded. Each user can have up to 500
million items created by an account. For more information, see User-item
limit .


````
{


 
"error"
:
 
{


  
"errors"
:
 
[


   
{


    
"domain"
:
 
"global"
,


    
"reason"
:
 
"activeItemCreationLimitExceeded"
,


    
"message"
:
 
"This account has exceeded the creation limit of 500 million items. To create more items, permanently delete some items."


   
}


  
],


  
"code"
:
 
403
,


  
"message"
:
 
"This account has exceeded the creation limit of 500 million items. To create more items, permanently delete some items."


 
}


}
````


To fix this error:


1. Inform the user that Drive prevents accounts from creating
more than 500 million items.

2. If the user must create items in this same account, instruct them to
permanently delete some objects. Otherwise, they can use a different account
that already meets the requirement.




### appNotAuthorizedToFile


This error occurs when your app isn't on the ACL for the file. This error
prevents the user from opening the file with your app. The following JSON sample
is a representation of this error:


````
{


  
"error"
:
 
{


    
"errors"
:
 
[


      
{


        
"domain"
:
 
"global"
,


        
"reason"
:
 
"appNotAuthorizedToFile"
,


        
"message"
:
 
"The user has not granted the app {appId} {verb} access to the file {fileId}."


      
}


    
],


    
"code"
:
 
403
,


    
"message"
:
 
"The user has not granted the app {appId} {verb} access to the file {fileId}."


  
}


}
````


To fix this error, try any of the following:


- Open the Google Drive picker and prompt the user to open the file.

- Instruct the user to open the file using the Open with context menu in the Drive
UI of your app.

- Use the files.get method to check the isAppAuthorized field on the files resource
to verify that your app created or opened the file.




### cannotModifyInheritedTeamDrivePermission


This error occurs when a user tries to modify the inherited permissions of an
item within a shared drive. Inherited permissions can't be removed from an item
in a shared drive. The following JSON sample is a representation of this error:


````
{


  
"error"
:
 
{


    
"errors"
:
 
[


      
{


        
"domain"
:
 
"global"
,


        
"reason"
:
 
"cannotModifyInheritedTeamDrivePermission"
,


        
"message"
:
 
"Cannot update or delete an inherited permission on a shared drive item."


      
}


    
],


    
"code"
:
 
403
,


    
"message"
:
 
"Cannot update or delete an inherited permission on a shared drive item."


  
}


}
````


To fix this error, a user must adjust the permissions on the direct or indirect
parent item from which they were inherited. For more information, see How
permissions work . You can
also retrieve the permissions resource to
see whether the permissions on this shared drive item are inherited or applied
directly.



### dailyLimitExceeded


This error occurs when the API limit for your project was reached. The following
JSON sample is a representation of this error:


````
{


  
"error"
:
 
{


    
"errors"
:
 
[


      
{


        
"domain"
:
 
"usageLimits"
,


        
"reason"
:
 
"dailyLimitExceeded"
,


        
"message"
:
 
"Daily Limit Exceeded"


      
}


    
],


    
"code"
:
 
403
,


    
"message"
:
 
"Daily Limit Exceeded"


  
}


}
````


This error appears when the application's owner has set a quota limit to cap
usage of a particular resource. To fix this error, remove any usage caps for
the "Queries per day"
quota .



### domainPolicy


This error occurs when the policy for the user's domain doesn't allow access to
Drive by your app. The following JSON sample is a representation
of this error:


````
{


  
"error"
:
 
{


    
"errors"
:
 
[


      
{


        
"domain"
:
 
"global"
,


        
"reason"
:
 
"domainPolicy"
,


        
"message"
:
 
"The domain administrators have disabled Drive apps."


      
}


    
],


    
"code"
:
 
403
,


    
"message"
:
 
"The domain administrators have disabled Drive apps."


  
}


}
````


To fix this error:


1. Inform the user that the domain doesn't allow your app to access files in
Drive.

2. Instruct the user to contact the domain administrator to request access for
your app.




### downloadRestrictedForRevision


This error occurs when the user cannot download a blob file revision. The
following JSON sample is a representation of this error:


````
{


  
"error"
:
 
{


    
"errors"
:
 
[


      
{


        
"domain"
:
 
"global"
,


        
"reason"
:
 
"download_restricted_for_revision"
,


        
"message"
:
 
"This revision cannot be downloaded by the authenticated user."


      
}


    
],


    
"code"
:
 
403
,


    
"message"
:
 
"This revision cannot be downloaded by the authenticated user."


  
}


}
````


To fix this error, inform the user that the only way to download blob file
revisions is if they're marked as "Keep Forever". For more information, see Specify revisions to save from auto
delete .



### fileOwnerNotMemberOfTeamDrive


This error occurs when attempting to move a file into a shared drive and the
file owner isn't a member. The following JSON sample is a representation of this
error:


````
{


  
"error"
:
 
{


    
"errors"
:
 
[


      
{


        
"domain"
:
 
"global"
,


        
"reason"
:
 
"fileOwnerNotMemberOfTeamDrive"
,


        
"message"
:
 
"Cannot move a file into a shared drive as a writer when the owner of the file is not a member of that shared drive."


      
}


    
],


    
"code"
:
 
403
,


    
"message"
:
 
"Cannot move a file into a shared drive as a writer when the owner of the file is not a member of that shared drive."


  
}


}
````


To fix this error:


1. Add the member to the shared drive with role=owner . For more information,
see Share files, folders, and drives .

2. Add the file to the shared drive. For more information, see Create and
populate folders .




### fileWriterTeamDriveMoveInDisabled


This error occurs when a domain administrator hasn't allowed users with role=writer to move items into a shared drive. The user attempting to move the
items has fewer permissions than allowed on the destination shared drive. The
following JSON sample is a representation of this error:


````
{


  
"error"
:
 
{


    
"errors"
:
 
[


      
{


        
"domain"
:
 
"global"
,


        
"reason"
:
 
"fileWriterTeamDriveMoveInDisabled"
,


        
"message"
:
 
"The domain administrator has not allowed writers to move items into a shared drive."


      
}


    
],


    
"code"
:
 
403
,


    
"message"
:
 
"The domain administrator has not allowed writers to move items into a shared drive."


  
}


}
````


To fix this error, use the same administrator user account on both the source
and destination shared drives.



### insufficientFilePermissions


This error occurs when the user doesn't have write access to a file, and your
app is attempting to modify the file. The following JSON sample is a
representation of this error:


````
{


  
"error"
:
 
{


    
"errors"
:
 
[


      
{


        
"domain"
:
 
"global"
,


        
"reason"
:
 
"insufficientFilePermissions"
,


        
"message"
:
 
"The user does not have sufficient permissions for file {fileId}."


      
}


    
],


    
"code"
:
 
403
,


    
"message"
:
 
"The user does not have sufficient permissions for file {fileId}."


  
}


}
````


To fix this error, instruct the user to contact the file's owner and request
edit access. You can also check user access levels in the metadata retrieved by
the files.get method and display a read-only
UI when permissions are missing.



### myDriveHierarchyDepthLimitExceeded


A myDriveHierarchyDepthLimitExceeded error occurs when the limit for the
number of nested folder levels has been exceeded. A user's My
Drive can't contain more than 100 levels of nested folders. For
more information, see Folder-depth limit .


````
{
 "error": {
  "errors": [
   {
    "domain": "global",
    "reason": "myDriveHierarchyDepthLimitExceeded",
    "message": "Your My Drive can't contain more than 100 levels of folders. For details, see https://developers.google.com/workspace/drive/api/guides/handle-errors#nested-folder-levels."
   }
  ],
  "code": 403,
  "message": "Your My Drive can't contain more than 100 levels of folders. For details, see https://developers.google.com/workspace/drive/api/guides/handle-errors#nested-folder-levels."
 }
}
````


To fix this error:


1. Inform the user that Drive prevents placing folders more than
100 levels deep.

2. If the user must create another nested folder, instruct them to reorganize
the intended parent folder to be fewer than 100 levels deep or use a
different parent folder that already meets the requirement.




### numChildrenInNonRootLimitExceeded


This error occurs when the limit for a folder's number of children (folders,
files, and shortcuts) has been exceeded. There's a 500,000 item limit for
folders, files, and shortcuts directly in a folder. Items nested in subfolders
don't count against this 500,000 item limit. For more information on
Drive folder limits, refer to Folder limits in
Google Drive .


The following JSON sample is a representation of this error:


````
{


 
"error"
:
 
{


  
"errors"
:
 
[


   
{


    
"domain"
:
 
"global"
,


    
"reason"
:
 
"numChildrenInNonRootLimitExceeded"
,


    
"message"
:
 
"The limit for this folder's number of children (files and folders) has been exceeded."


   
}


  
],


  
"code"
:
 
403
,


  
"message"
:
 
"The limit for this folder's number of children (files and folders) has been exceeded."


 
}


}
````


To fix this error, try any of the following:


- Inform the user that Drive prevents folders with more than
500,000 items.

- If the user must add more items to the full folder, instruct them to
reorganize the folder to contain fewer than 500,000 items or use a similar
folder that already contains fewer items.




### rateLimitExceeded


This error occurs when the project's rate limit has been reached. This limit
varies depending on the type of request. The following JSON sample is a
representation of this error:


````
{


 
"error"
:
 
{


  
"errors"
:
 
[


   
{


    
"domain"
:
 
"usageLimits"
,


    
"message"
:
 
"Rate Limit Exceeded"
,


    
"reason"
:
 
"rateLimitExceeded"
,


   
}


  
],


  
"code"
:
 
403
,


  
"message"
:
 
"Rate Limit Exceeded"


 
}


}
````


To fix this error, try any of the following:


- Raise the per-user quota in the Google Cloud project. For more information, request a quota increase .

- Batch requests to bundle
multiple API calls into one HTTP request.

- Use exponential backoff to retry the
request.




### sharingRateLimitExceeded


This error occurs when the user reaches a sharing limit and is often linked with
an email limit. The following JSON sample is a representation of this error:


````
{


 
"error"
:
 
{


  
"errors"
:
 
[


   
{


    
"domain"
:
 
"global"
,


    
"message"
:
 
"Rate limit exceeded. User message: \"These item(s) could not be shared because a rate limit was exceeded: filename"
,


    
"reason"
:
 
"sharingRateLimitExceeded"
,


   
}


  
],


  
"code"
:
 
403
,


  
"message"
:
 
"Rate Limit Exceeded"


 
}


}
````


To fix this error:


1. Don't send emails when sharing large amounts of files.

2. If one user is making numerous requests on behalf of many users of a
Google Workspace account, consider a service account with domain-wide
delegation using the quotaUser parameter .




### storageQuotaExceeded


This error occurs when the user reaches their storage limit. The following JSON
sample is a representation of this error:


````
{


 
"error"
:
 
{


  
"errors"
:
 
[


   
{


    
"domain"
:
 
"global"
,


    
"message"
:
 
"The user's Drive storage quota has been exceeded."
,


    
"reason"
:
 
"storageQuotaExceeded"
,


   
}


  
],


  
"code"
:
 
403
,


  
"message"
:
 
"The user's Drive storage quota has been exceeded."


 
}


}
````


To fix this error:


1. Review your Drive account storage limits. For more
information, refer to Google Workspace storage and upload
limits .

2. Manage your storage in Drive, Gmail &
Google Photos .

3. Buy more Google storage .



Note:

Service accounts don't have storage quota and can't own any files. Instead, they must upload files and folders into shared drives, or use OAuth 2.0 to upload items on behalf of a human user.


### teamDriveFileLimitExceeded


This error occurs when a user attempts to exceed the strict item limit on a
shared drive. Each folder in a user's shared drive has a limit of 500,000 items,
including files, folders, and shortcuts. This limit is based on item count, not
storage use. For more information, see Shared drive limits in
Google Drive .


The following JSON sample is a representation of this error:


````
{


  
"error"
:
 
{


    
"errors"
:
 
[


      
{


        
"domain"
:
 
"global"
,


        
"reason"
:
 
"teamDriveFileLimitExceeded"
,


        
"message"
:
 
"The file limit for this shared drive has been exceeded."


      
}


    
],


    
"code"
:
 
403
,


    
"message"
:
 
"The file limit for this shared drive has been exceeded."


  
}


}
````


To fix this error, reduce the number of items in the shared drive. Shared drives
with too many files might be difficult to organize and search.



### teamDriveHierarchyTooDeep


A teamDriveHierarchyTooDeep error occurs when the limit for the number of
shared drive nested folder levels has been exceeded. A user's shared drive can't
contain more than 100 levels of nested folders. For more information, see Folder-depth limit .


````
{
 "error": {
  "errors": [
   {
    "domain": "global",
    "reason": "teamDriveHierarchyTooDeep",
    "message": "The shared drive hierarchy depth will exceed the limit."
   }
  ],
  "code": 403,
  "message": "The shared drive hierarchy depth will exceed the limit."
 }
}
````


To fix this error:


1. Inform the user that shared drives prevents placing folders more than
100 levels deep.

2. If the user must create another nested folder, instruct them to reorganize
the intended parent folder to be fewer than 100 levels deep or use a
different parent folder that already meets the requirement.




### teamDriveMembershipRequired


This error occurs when a user attempts to access a shared drive in which they're
not a member. The following JSON sample is a representation of this error:


````
{


  
"error"
:
 
{


    
"errors"
:
 
[


      
{


        
"domain"
:
 
"global"
,


        
"reason"
:
 
"teamDriveMembershipRequired"
,


        
"message"
:
 
"The attempted action requires shared drive membership."


      
}


    
],


    
"code"
:
 
403
,


    
"message"
:
 
"The attempted action requires shared drive membership."


  
}


}
````


To fix this error, try any of the following:


1. Ask the manager of the shared drive to add you with the appropriate
permissions for the action you must perform.

2. Review Drive's roles and
permissions to learn who can access and manage
shared drives. Additional information about access levels can also be found
at Create a shared
drive .




### teamDrivesFolderMoveInNotSupported


This error occurs when a user attempts to move a folder from My
Drive into a shared drive. The following JSON sample is a
representation of this error:


````
{


  
"error"
:
 
{


    
"errors"
:
 
[


      
{


        
"domain"
:
 
"global"
,


        
"reason"
:
 
"teamDrivesFolderMoveInNotSupported"
,


        
"message"
:
 
"Moving folders into shared drives is not supported."


      
}


    
],


    
"code"
:
 
403
,


    
"message"
:
 
"Moving folders into shared drives is not supported."


  
}


}
````


To fix this error, try any of the following:


- Move the individual items from the folder into a shared drive using the
Drive API. Set the supportsAllDrives=true parameter to denote the
support of both My Drive and shared drives.

- If you must move the folder into a shared drive, use the
Drive UI. For more information, see Move folders into shared
drives as an admin .




### teamDrivesParentLimit


This error occurs when a user attempts to add more than one parent to an item in
a shared drive. The following JSON sample is a representation of this error:


````
{


  
"error"
:
 
{


    
"errors"
:
 
[


      
{


        
"domain"
:
 
"global"
,


        
"reason"
:
 
"teamDrivesParentLimit"
,


        
"message"
:
 
"A shared drive item must have exactly one parent."


      
}


    
],


    
"code"
:
 
403
,


    
"message"
:
 
"A shared drive item must have exactly one parent."


  
}


}
````


To fix this error, use Drive shortcuts to add multiple links to a
file. Although a shortcut can only have one parent, a shortcut file can be
copied to the additional locations. For more information, see Create a shortcut
to a Drive file .



### UrlLeaseLimitExceeded


This error occurs when trying to save Google Play game data through your
application. The following JSON sample is a representation of this error:


````
{


 
"error"
:
 
{


  
"errors"
:
 
[


   
{


    
"domain"
:
 
"usageLimits"
,


    
"reason"
:
 
"UrlLeaseLimitExceeded"
,


    
"message"
:
 
"Too many pending uploads for this snapshot. Please finish or cancel some before creating more."


   
}


  
],


  
"code"
:
 
403
,


  
"message"
:
 
"Too many pending uploads for this snapshot. Please finish or cancel some before creating more."


 
}


}
````


To fix this error, complete or cancel any uploads for a snapshot before creating
more.



### userRateLimitExceeded


This error occurs when the per-user limit has been reached. This might be a
limit from the Google Cloud console or a limit from the Drive
backend. The following JSON sample is a representation of this error:


````
{


 
"error"
:
 
{


  
"errors"
:
 
[


   
{


    
"domain"
:
 
"usageLimits"
,


    
"reason"
:
 
"userRateLimitExceeded"
,


    
"message"
:
 
"User Rate Limit Exceeded"


   
}


  
],


  
"code"
:
 
403
,


  
"message"
:
 
"User Rate Limit Exceeded"


 
}


}
````


To fix this error, try any of the following:


- Raise the per-user quota in the Google Cloud project. For more information, request a quota increase .

- If one user is making numerous requests on behalf of many users of a
Google Workspace account, consider a service account with domain-wide
delegation using the quotaUser parameter .

- Use exponential backoff to retry the
request.



For information about Drive API limits, refer to Usage limits .



## 404 errors


These errors mean that the requested resource isn't accessible or doesn't exist.



### notFound


This error occurs when the user doesn't have read access to a file, or the file
doesn't exist. The following JSON sample is a representation of this error:


````
{


  
"error"
:
 
{


    
"errors"
:
 
[


      
{


        
"domain"
:
 
"global"
,


        
"reason"
:
 
"notFound"
,


        
"message"
:
 
"File not found {fileId}"


      
}


    
],


    
"code"
:
 
404
,


    
"message"
:
 
"File not found: {fileId}"


  
}


}
````


To fix this error:


1. If the file is located in a shared drive, and you're using the files.get method, make sure the supportsAllDrives query parameter is set to true .

2. Inform the user that they don't have read access to the file or the file
doesn't exist.

3. Instruct the user to contact the file's owner and request permission to the
file.




## 429 errors


These errors mean that too many requests were sent to the API too quickly.



### rateLimitExceeded


This error occurs when the user has sent too many requests in a given amount of
time. The following JSON sample is a representation of this error:


````
{


  
"error"
:
 
{


    
"errors"
:
 
[


      
{


        
"domain"
:
 
"usageLimits"
,


        
"reason"
:
 
"rateLimitExceeded"
,


        
"message"
:
 
"Rate Limit Exceeded"


      
}


    
],


    
"code"
:
 
429
,


    
"message"
:
 
"Rate Limit Exceeded"
s


  
}


}
````


To fix this error, use exponential backoff to retry the request.



## 500, 502, 503, 504 errors


These errors occur when an unexpected server error arises while processing the
request. Various issues can cause these errors, including a request's timing
overlapping with another request or a request for an unsupported action, such as
attempting to update permissions for a single page in Google Sites instead of
the entire site.


The following is a list of 5xx errors:


- 500 Backend error

- 502 Bad Gateway

- 503 Service Unavailable

- 504 Gateway Timeout



To fix this error, use exponential backoff to retry the request.



## Related topics


- Improve performance

- Troubleshoot authentication and authorization issues
