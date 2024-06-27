# Getting Started

With the years, ReactJs has evolved. When we build a React app before we had to use the [Create React App](https://create-react-app.dev/docs/getting-started/) CLI tool, which is still available for download, but it is no longer the recommended way to start a new application.

## Creating a new app using Create React App

The following CLI commands allow us to build a new React App.

```bash
npx create-react-app my-app
cd my-app
npm start
```

The Create React App tool scaffolded an application with the bare minimum features, which meant that we have to implement some of the common features like:

### Web App Common Features 

- Code-splitting and Bundling
- Routing
- Data Fetching (API)
  
These features are common for Single Page Application regardless of the framework, and we often end up building our own framework to support them. To help us in the development process, the React team has decided that instead **we should use a React-powered framework like Next.js**.

> &#128077; The rest of the documentation shows how to build the React app using Next.js

## Creating a new app with Next.js

> &#128073; Make sure to use node.js version 18+

```bash

npx create-next-app@latest nextjs-dashboard --use-npm --example "https://github.com/vercel/next-learn/tree/main/dashboard/starter-example"

```

Select the following options:

- Would you like to use TypeScript? Yes
  - Enables TypeScript support 
- Would you like to use ESLint? Yes
  - Enables ESList for syntax and best practices checking
- Would you like to use Tailwind CSS? No
  - CSS framework. We use ant-design as it provides built-in components
- Would you like to use `src/` directory? No
  - Creates the src/app folder. Instead, we can use only app/
- Would you like to use App Router? (recommended) Yes
  - We want to support client side routing
- Would you like to customize the default import alias (@/*)? No 
  - The default alias, `@/*`, maps to the root of the project to avoid using long relative paths like `../../components`

> &#128073; We are using npx to run the create-next-app package because we don't want to install it globally in our workstation. The --use-npm flag ensures create-next-app uses npm for project dependencies, even though you're using npx to run the command. This enables us to be able to run npm commands from the terminal.

### Review the code

After creating the app, we should see a directory structure similar to the following:

**Directory Structure:**

```markdown
nextjs-dashboard/
├── app/
│   ├── layout.js   # Global layout component
│   ├── page.js     # Default page component
│   ├── page.module.css  # CSS styles specific to the page component
│   └── global.css  # Global CSS styles
├── public/
│   ├── favicon.ico  # Favicon icon
├── package.json     # Project dependencies and scripts
├── next.config.js   # Optional Next.js configuration file
└── node_modules/    # Installed project dependencies
```

**Description of Main Folders and Files:**

**app:**

- **layout.tsx:** Houses the global layout component, written in TypeScript, which defines the base HTML structure for all pages. It includes the `<html>` element and typically contains common elements like headers and footers.
- **page.tsx:** Contains the default page component, rendered for the root route ('/').
- **page.module.css:** Stores CSS styles scoped to the page component, ensuring style isolation.
- **global.css:** Contains global CSS styles applied throughout the entire application.

**public:**

- **favicon.ico:** Optional icon displayed in browser tabs and bookmarks.

**package.json:**

- Lists project dependencies (libraries and frameworks).
- Defines scripts for running development servers, building the application, and other tasks.

**next.config.js:**

- Optional configuration file for customizing Next.js behavior (e.g., setting up custom Webpack configurations or defining redirects).

**node_modules:**

- Contains installed project dependencies, managed by npm or yarn. (Exclude from source control)

> &#128077; TypeScript files use the `.tsx` extensions. JavaScript files use the `.js` extensions.

### How to run it!

To run the application, enter the following commands from a linux terminal:

```bash
cd nexjs-dashboard
npm ls
npm i 
npm run dev
```

- `npm ls` lists the installed dependencies. Use this to verify the installation
- `npm i` installs all the dependencies using npm
- `npm run dev` runs the application and loads it on the default browser

&#128077; if you see an error `next: not found`  run this command `npx next --version` to install next

> &#128077; If there are additional errors, and you want to start clean run `npm cache clean --force` to clear the cache or run `rm -rf node_modules` to remove the node_modules folder. After this, run `npm i` again


