# Project Management with Git and GitHub

## What is Git?

- Git is a **version control system (VCS)**. It's a powerful tool that helps you track changes made to your code over time. Imagine it like a snapshot machine for your project. You can capture different stages of development and easily revert back to previous versions if needed. Git keeps track of who made changes, when they were made, and what those changes were. 

- **Basic Git Commands:**

Here are some of the most basic Git commands you'll encounter:

* **`git init`:** Initializes a new Git repository in your current directory. This creates the `.git` folder for storing version control data.
* **`git add <file>`:** Adds a specific file to the staging area. You can also use `git add .` to add all modified files in your current directory.
* **`git commit -m "<message>"`:** Commits the staged changes to the Git repository with a descriptive message. The message explains what changes you made in this commit.
* **`git status`:** Shows the status of your working directory. It tells you which files are modified, staged, or untracked (not yet added to Git).
* **`git log`:** Shows the history of commits made to your repository. You can see who made the commit, when it was made, and the commit message.
* **`git push origin <branch>`:** Pushes your local commits to a remote repository hosted on GitHub (or any other platform). Replace `<branch>` with the name of the branch you want to push (usually `main`).
* **`git pull origin <branch>`:** Pulls changes from the remote repository to your local repository. This is how you get updates made by other collaborators. Replace `<branch>` with the name of the branch you want to pull from (usually `main`).

- **Basic Script for Adding, Committing, and Pushing Changes:**

Here's an example to demonstrates the basic Git workflow using the terminal:

```bash
#!/bin/bash

# Add modified files to the staging area
git add .

# Check the status to ensure everything is added
git status

# Commit the staged changes with the provided message
git commit -m "$message"

# Push the changes to the remote repository on GitHub
git push origin main
```

## What is GitHub?

GitHub is a **web-based platform** built on top of Git.  It provides a user-friendly interface for interacting with Git repositories. You can create remote repositories on GitHub to store your project's code and collaborate with others. 

GitHub offers features like:
    - **Code hosting:** Store your code securely in the cloud.
    - **Version control:** Track changes and revert to previous versions.
    - **Collaboration tools:** Work with others on projects, review code changes, and manage access.
    - **Issue tracking:** Keep track of bugs and tasks.

## Exercise - Creating a New GitHub Repository and Connecting Your Next.js Dashboard Project

This guide will walk you through creating a new GitHub repository, connecting your existing Next.js dashboard project located in the `app/nextjs-dashboard` folder, and pushing your initial code to the remote repository.

### Prerequisites:

* A GitHub account (If you don't have one, sign up for free at [https://github.com/join](https://github.com/join))
* Git installed on your system (You can check by running `git --version` in your terminal)

### Steps:

1. **Create a New GitHub Repository:**

   - Go to [https://github.com/](https://github.com/) and log in to your account.
   - Click on the "+" icon in the top right corner and select "New repository".

   - Give your repository a descriptive name (e.g., `nextjs-dashboard`) and optionally add a short description.
   - Choose whether you want the repository to be public or private. Public repositories are visible to everyone, while private repositories require collaborators to be invited.
   - Click "Create repository" to create your new GitHub repo.

2. **Initialize a Git Repository in Your Project Folder:**

   - Open your terminal and navigate to the root directory of your Next.js dashboard project (the folder containing `app/nextjs-dashboard`).

   - Run the following command to initialize a new Git repository in your project directory:

     ```bash
     git init
     ```

   - This creates a hidden folder called `.git` in your project directory, which stores Git metadata for version control.

3. **Add Files to Staging:**

   - Use the `git add` command to add the files in your project to the staging area. This tells Git which files you want to include in the next commit.

   ```bash
   git add .
   ```

   - The `.` dot indicates you want to add all files in the current directory and its subdirectories.

4. **Commit Your Changes:**

   - Run the following command to commit the staged changes with a descriptive message:

     ```bash
     git commit -m "First commit: Initial Next.js dashboard project"
     ```

   - The `-m` flag specifies the commit message, which briefly describes the changes you're committing.

5. **Connect Your Local Repository to GitHub (Remote Repository):**

   - In your GitHub repository on the web interface, navigate to the "Settings" tab.
   - Under "Code & branches," look for the section titled "HTTPS clone URL". This URL represents the remote repository on GitHub where you'll push your code.

   - Copy the HTTPS clone URL.

   - In your terminal, run the following command to add the copied URL as a remote repository for your local Git repository:

     ```bash
     git remote add origin <copied_url>
     ```

   - Replace `<copied_url>` with the actual URL you copied from GitHub.

6. **Push Your Local Commits to GitHub:**

   - Now that your local repository is connected to the remote repository on GitHub, you can push your changes:

     ```bash
     git push origin main
     ```

   - The `main` branch name refers to the default branch in most modern Git repositories. If your default branch is named differently (e.g., `master`), replace `main` with your specific branch name.

**Congratulations!** You've successfully created a new GitHub repository, connected your Next.js dashboard project to it, and pushed your initial code.

