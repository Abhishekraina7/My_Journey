# Git and Github K Basic Concept

## Setting Git
#### Configure Username
``` git config --global user.name your_username_here ```
#### configure Email
``` git config --global user.email your_email_address_here ```
#### To check your current username and email configuration
```
git config user.name
git config user.email

```
#### If you wish to not expose your email address when you commit on GitHub, a noreply email address can be used for this purpose. Visit https://github.com/settings/emails and check the Keep my email addresses private option, now from here you can use the noreply email directly if you are using through website or if you are using command line git tool, you can easily set your noreply email using the config command above.

## Working of Git 

#### **_Modified_** (files that has been modified/changed) 
#### **_Staged_** (files that have been added to staging are files that we want to commit) 
#### **_Commit_** (files that are in staging are commited when we make a commit)
