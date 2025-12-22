# Google Drive API Authentication

_Collected from Google Workspace authentication guides, retrieved 2025-11-04._



This document consolidates Drive-focused authentication requirements, including OAuth consent configuration and Drive-specific OAuth scopes.



## Configure OAuth consent for Google Workspace APIs

_Source: https://developers.google.com/workspace/guides/configure-oauth-consent_

When you use OAuth 2.0 for authorization, Google displays a consent screen to
the user including a summary of your project, its policies, and the requested
authorization scopes of access. Configuring your app's OAuth consent screen
defines what is displayed to users and app reviewers, and registers your app
so you can publish it later.


Note:


Some Google Workspace APIs, such as the Google Drive API, have documentation covering API-specific authentication and authorization information. Ensure you read that documentation before continuing with this page.


To define the level of access granted to your app, you need to identify and
declare authorization scopes . An authorization scope is an OAuth 2.0 URI string
that contains the Google Workspace app name, what kind of data it accesses, and
the level of access. Scopes are your app's requests to work with Google Workspace data, including
  users' Google Account data. When your app is installed, a user is asked to validate the scopes used
by the app. Generally, you should choose the most narrowly focused scope
possible and avoid requesting scopes that your app doesn't require. Users more
readily grant access to limited, clearly described scopes. All apps using OAuth 2.0 require a consent screen configuration, but you only
need to list scopes for apps used by people outside your Google Workspace
organization. Tip: If you don't know required consent screen information, you can use
placeholder information prior to release. For security reasons, you can't remove the OAuth 2.0 consent screen
after you've configured it. Configure OAuth consent In the Google Cloud console, go to Menu menu > Google Auth platform > Branding . Go to Branding If you have already configured the Google Auth platform, you can configure the following OAuth Consent Screen settings in Branding , Audience , and Data Access .
    If you see a message that says Google Auth platform not configured yet , click Get Started : Under App Information , in App name , enter an App name . In User support email , choose a support email address where users can contact you if they have questions about their consent. Click Next . Under Audience , select the user type for your app. Click Next . Under Contact Information , enter an Email address where you can be notified about any changes to your project. Click Next . Under Finish , review the Google API Services User Data Policy and if you agree, select I agree to the Google API Services: User Data Policy . Click Continue . Click Create . If you selected External for user type, add test users: Click Audience . Under Test users , click Add users . Enter your email address and any other authorized test users, then click Save . If you're creating an app for use outside of your Google Workspace
   organization, click Data Access > Add or Remove Scopes . We recommend the following best practices when
   selecting scopes: Select the scopes that provide the minimum level of access required by your app. For a list of
    available scopes, see OAuth 2.0 Scopes for Google APIs . Review the scopes listed in each of the three sections: non-sensitive
    scopes, sensitive scopes, and restricted scopes. For any scopes listed in the
    "Your sensitive scopes" or "Your restricted scopes" sections, try to identify
    alternative non-sensitive scopes to avoid unnecessary additional reviews. Some scopes require additional reviews by Google. For apps used only
    internally by your Google Workspace organization, scopes aren't listed on the
    consent screen and use of restricted or sensitive scopes doesn't require
    further review by Google. For more information, see Scope categories . After selecting the scopes required
    by your app, click Save . For more information about configuring OAuth consent, see Get started with the Google Auth platform . Scope categories Some scopes require additional reviews and requirements
because of the level or type of access they grant. Consider the following types
of scopes: Basic app verification required Additional app verification required Security assessment required Non-sensitive scopes (recommended) Grant access only to limited data that's immediately relevant to a specific action. check — — Sensitive scopes Grant access to personal user data, resources, or actions. check check — Restricted scopes Grant access to highly-sensitive or extensive user data or actions. check check check Next step Create access credentials for your app.

## Choose Drive API scopes

_Source: https://developers.google.com/workspace/drive/api/guides/api-specific-auth_

This document contains Google Drive API-specific authorization and
authentication information. Before reading this document, be sure to read the
Google Workspace's general authentication and authorization information at Learn about authentication and authorization .



## Configure OAuth 2.0 for authorization


Configure the OAuth consent screen and choose scopes to define what information is displayed to users and app reviewers, and register
your app so that you can publish it later.



## Drive API scopes


To define the level of access granted to your app, you need to identify and
declare authorization scopes . An authorization scope is an OAuth 2.0 URI string
that contains the Google Workspace app name, what kind of data it accesses, and
the level of access. Scopes are your app's requests to work with Google Workspace data, including
  users' Google Account data. When your app is installed, a user is asked to validate the scopes used
by the app. Generally, you should choose the most narrowly focused scope
possible and avoid requesting scopes that your app doesn't require. Users more
readily grant access to limited, clearly described scopes. When possible, we recommend using non-sensitive scopes as it grants per-file
access scope and narrows access to specific features needed by an app. If your public application uses scopes that permit access to
  certain user data, it must complete a verification process. If you see unverified
  app on the screen when testing your application, you must submit a
  verification request to remove it. Find out more about unverified apps and get answers to frequently asked questions about app verification in the Help Center. The Drive API supports the following scopes: Scope code Description Usage https://www.googleapis.com/auth/drive.appdata https://www.googleapis.com/auth/drive.appfolder View and manage the app's own configuration data in your Google Drive. Recommended Non-sensitive https://www.googleapis.com/auth/drive.install Allow apps to appear as an option in the "Open with" or the "New" menu. Recommended Non-sensitive https://www.googleapis.com/auth/drive.file Create new Drive files, or modify existing files, that you open with an app or that the user shares with an app while using the Google Picker API or the app's file picker. Recommended Non-sensitive https://www.googleapis.com/auth/drive.apps.readonly View apps authorized to access your Drive. Sensitive https://www.googleapis.com/auth/drive View and manage all your Drive files. Restricted https://www.googleapis.com/auth/drive.readonly View and download all your Drive files. Restricted https://www.googleapis.com/auth/drive.activity View and add to the activity record of files in your Drive. Restricted https://www.googleapis.com/auth/drive.activity.readonly View the activity record of files in your Drive. Restricted https://www.googleapis.com/auth/drive.meet.readonly View Drive files created or edited by Google Meet. Restricted https://www.googleapis.com/auth/drive.metadata View and manage metadata of files in your Drive. Restricted https://www.googleapis.com/auth/drive.metadata.readonly View metadata for files in your Drive. Restricted https://www.googleapis.com/auth/drive.scripts Modify your Google Apps Script scripts' behavior. Restricted The Usage column in the table above indicates the sensitivity of each scope,
according to the following definitions: Recommended / Non-sensitive : These scopes provide the smallest scope of
authorization access and only requires basic app verification. For
information on this requirement, see Verification
requirements . Recommended / Sensitive : These scopes provide access to specific Google
User Data that's authorized by the user for your app. It requires you to go
through additional app verification. For information on this requirement,
see Sensitive and Restricted Scope
Requirements . Restricted : These scopes provide wide access to Google User Data and
require you to go through a restricted scope verification process. For
information on this requirement, see Google API Services User Data
Policy and Additional Requirements
for Specific API
Scopes .
If you store restricted scope data on servers (or transmit), then you must
go through a security assessment. If your app requires access to any other Google APIs, you can add those scopes
as well. For more information about Google API scopes, see Using OAuth 2.0 to
Access Google APIs . For more information about specific OAuth 2.0 scopes, see OAuth 2.0 Scopes for
Google APIs . Where to declare scopes The Drive API requires scopes in both the Google Cloud console and when
you initiate the API in your code. In the Google Cloud console, you must declare the scopes your app needs in its OAuth
consent screen configuration. These are the highest level of permissions your
application can ever request. This serves as a formal request to Google, and the
declared scopes are what Google displays to users on the consent screen. It
allows the user to understand exactly what data and actions your app is
requesting access to. For more information, see Configure the OAuth consent
screen and choose scopes . In your code, when you initiate the API, you must explicitly request the
specific scopes you need for that session. While the Google Cloud console defines
the highest level of permissions your app is allowed to request, the code
determines the actual permissions for a given user. This helps ensure the app
only asks for the permissions needed for a specific task. Evaluate all Drive API scopes and only request the most specific
scopes required by your app's features. Users are more likely to grant access to
limited, clearly described scopes. How to declare scopes in your code You can declare one or more OAuth scopes at a time within your app's code as an
array. The following code sample shows how to declare multiple OAuth scopes: Java List<String> SCOPES = Arrays . asList ( DriveScopes . DRIVE_FILE , DriveScopes . DRIVE_METADATA_READONLY ); Python SCOPES = [ "https://www.googleapis.com/auth/drive.file" , "https://www.googleapis.com/auth/drive.metadata.readonly" , ] Node.js const SCOPES = [ 'https://www.googleapis.com/auth/drive.file' , 'https://www.googleapis.com/auth/drive.metadata.readonly' ]; OAuth verification Using certain OAuth scopes might require that your app proceed through OAuth
App Verification Help Center .
Read the OAuth app FAQs to
determine when your app should go through verification and what type of
verification is required. See also the Google Drive Terms of
Service . When to use a restricted scope For Drive, only the following application types may access
restricted scopes: Platform-specific and web apps that provide local sync or automatic backup
of users' Drive files. Productivity and educational applications whose user interface might involve
interaction with Drive files (or their metadata or
permissions). Productivity applications include task management, note
taking, workgroup communications, and classroom collaboration applications. Reporting and security applications that provide user or customer insight
into how files are shared or accessed. To continue using restricted scopes, you should prepare your app for restricted
scope
verification . Migrate an existing app from restricted scopes If you've developed a Drive app using any of the restricted
scopes, we recommend migrating your app to use a non-sensitive scope as it
grants per-file access scope and narrows access to specific features needed by
an app. Many apps work with per-file access without any changes. If you're using
your own file picker, we recommend switching to the Google Picker API which fully
supports different scopes. Benefits of the Drive file OAuth scope Using the drive.file OAuth scope and the Google Picker API optimizes both user
experience and safety for your app. The drive.file OAuth scope lets users choose which files they want to share
with your app. This gives them more control and confidence that your app's
access to their files is limited and more secure. In contrast, requiring broad
access to all Drive files could discourage users from interacting
with your app. The following are some reasons why you should use drive.file scope: Usability : The drive.file scope works with all Drive API
REST Resources which means you can use it the same way
you use broader OAuth scopes. Features : The Google Picker API provides a similar interface to the
Drive UI. This includes several views showing previews and
thumbnails of Drive files, and an inline, modal window so
users never leave the main app. Convenience : Apps can apply filters for certain Drive
file types (such as Google Docs, Sheets, and photos) when
using a filter on Google Picker
files . Also, since drive.file is non-sensitive, it allows for a more streamlined
verification process. Save refresh tokens Save refresh tokens in secure, long-term storage and continue to use them as
long as they remain valid.
