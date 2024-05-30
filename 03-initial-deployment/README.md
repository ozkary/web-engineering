# Initial Deployment

Once the application is running locally we would like to be able to publish this application to a server and make it available to the world. We would ideally like to publish our application when we push changes to a specific GitHub branch. In real projects, planning has to be done, so we can support a branching strategy that can enable our deployments. The concept is to create multiple environments like: dev,qa,stg,prd, We can use those prefixes before the app name to identify the environment. This can enable us for parallel development and QA of the application on different environments. To enable this approach let's learn about what is app deployment and hosting, branching strategy and CI/CD process.


## Exercise - Cloud Deployment 

### GitHub Branch Configuration for deployments

Here are the instructions with CLI commands to create a new branch named `dev-nextjs-dashboard` and push it to the origin (remote repository on GitHub) from your main branch:

**1. Create the New Branch:**

```bash
git checkout -b dev-nextjs-dashboard
```

This command performs two actions:

* `git checkout`: Switches your working directory to the specified branch.
* `-b dev-nextjs-dashboard`: Creates a new branch named `dev-nextjs-dashboard` if it doesn't already exist and then switches to it.

**2. Push the Branch to Origin:**

```bash
git push origin dev-nextjs-dashboard
```

This command pushes your newly created branch `dev-nextjs-dashboard` to the remote repository named `origin` (which typically refers to your GitHub repository).

**Explanation:**

* `git push`: This command tells Git to push local branches to a remote repository.
* `origin`: This refers to the remote repository you configured earlier (usually your GitHub repository). You can verify the remote name using `git remote -v`.
* `dev-nextjs-dashboard`: This is the name of the branch you want to push to the remote repository.

**Additional Notes:**

* Make sure you have added and committed any changes you want to include in the new branch before pushing it.
* If you encounter any errors while pushing, such as the branch already existing on the remote repository, you might need to address them before a successful push.

By following these steps, you'll successfully create a new branch named `dev-nextjs-dashboard` locally and push it to your remote repository for deployment purposes. You can repeat this process to create additional branch environments (qa, stg, prd) later on.  

### Deploy to the cloud
  
**1. Setting Up Vercel Integration (One-Time Setup):**

* Go to your Vercel account ([https://vercel.com/](https://vercel.com/)) or create one if you don't have one already.
* Click on "Import Project" and choose "GitHub" as the import method.
* Connect your Vercel account to your GitHub account by authorizing access.
* Select the repository containing your Next.js application.

**2. Switching Deployment Target Branch:**

* Vercel will likely default to deploying from your main branch. To change this:
    * **Using Vercel Dashboard:**
        * In your Vercel dashboard, navigate to the imported project.
        * Click on "Settings" in the project menu.
        * Under the "Deployment" section, locate the "Build from" setting.
        * Select the branch you want to deploy from (in this case, `dev-nextjs-dashboard`).
        * Click "Save".

 **3. Specifying the Root Folder (For Non-Root App Folders):**

If your Next.js application folder is located within a subdirectory like ./apps/nextjs-dashboard, you need to specify the root folder during deployment. Here are two ways to achieve this:

* **Using Vercel Dashboard:**
  * In your Vercel dashboard, navigate to the imported project.
  * Click on "Settings" in the project menu.
  * Under the "Build" section, locate the "Root Directory" setting.
  * Enter the relative path to your application folder (e.g., apps/nextjs-dashboard).
  * Click "Save".

**4. Deploying Your App from the Dev Branch:**

* After setting the deployment target branch, any push to your `dev-nextjs-dashboard` branch will trigger a deployment on Vercel.
* You can push your changes to this branch using the following command:

```bash
git push origin dev-nextjs-dashboard
```

**Explanation:**

* Pushing to your `dev-nextjs-dashboard` branch now triggers Vercel to build and deploy your application from that specific branch. 
* Vercel's GitHub integration automates this process, ensuring your application reflects the code in your chosen branch.

By following these steps, you'll establish Vercel integration with your GitHub repository and configure it to deploy your Next.js application from your desired development branch (`dev-nextjs-dashboard` in this case). 

> Important Note: Vercel manages deployments through its own integration with GitHub. This process does not involve creating a separate GitHub Action. Vercel's bots handle deployment automatically when you push changes to your designated branch.