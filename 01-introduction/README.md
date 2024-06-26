# Web Engineering Fundaments with React - Introduction

## What is ReactJS

ReactJS, or React, is a popular JavaScript framework for building user interfaces (UI). At its core, the UI uses HTML markup for the elements like tables, divs, input fields. To add behavior, we use JavaScript , or TypeScript, to bind and respond to UI events like buttons clients and input entry. This framework lets us create reusable UI components that manage their own state and update automatically when the data is changed by the user. The components are built using HTML elements with a specific behavior, like a login form, data grid, chatbot interface and any other UI composite component that handles a single responsibility.

Some of the key features of React include:

**Focus on components:** React is all about breaking down the UI into independent, reusable pieces called components. Each component can handle its own data and logic, making your code modular and easier to maintain.

**Declarative:** We describe what the UI should look like, and React takes care of figuring out how to make it happen. This makes our code more predictable and easier to debug.

**Virtual DOM:** React uses a virtual DOM, which is a lightweight in-memory representation of the UI. This allows it to efficiently update only the parts that have changed, leading to smoother performance.

**Popularity:** React is one of the most popular JavaScript libraries in the world, with a large and active community. This means there are plenty of resources available to help you learn and build amazing things with it.

**Here are some of the things React can be used for:**

- Building web applications (single-page, server-rendered)
- Creating mobile apps (with React Native)
- Developing desktop applications (with Electron)
- Building user interfaces for other platforms (like wearables and VR)

If you're interested in learning more about React, here are some resources you can check out:

- **The official React website:** [https://react.dev/](https://react.dev/)
- **The React documentation:** [https://legacy.reactjs.org/docs/getting-started.html](https://legacy.reactjs.org/docs/getting-started.html)

In addition to building the UI, React applications have other areas of concern. This include areas like routing, code split, API integration, HTML rendering. Before, development teams had to spend a lot of time adding code to handle those concerns. Now, the approach is to use a framework that works well with React and handle those concerns for us, thus allowing development teams to focus on the app custom functionality instead of cross-cutting app concerns.

## What is Next.js

 Next.js is a powerful React framework that offers a range of features and optimizations to streamline the development of full-stack React applications. It simplifies common tasks, improves developer experience, and provides a solid foundation for building scalable and maintainable web applications. Here's how it can help us build better React apps:

> &#128077; Use React Components for the user interface, and Next.js for features and optimizations

**1. Simplified Application Structure and Routing:**

- **Pages-based Routing:** Next.js provides a straightforward routing system based on file system structure. Each page or view in our app is represented by a React component file in the `pages` directory, making it easy to organize and navigate our app.
- **Automatic Code Splitting:** It intelligently splits our code into smaller bundles for individual pages, ensuring that only necessary code is loaded for each request. This leads to faster initial load times and improved performance.

**2. Enhanced Performance and SEO:**

- **Server-Side Rendering (SSR):** Next.js can render your React components on the server, delivering the fully rendered HTML to the browser. This improves SEO, as search engines can easily index the content, and enhances user experience by reducing loading times and eliminating potential JavaScript loading issues.
- **Static Site Generation (SSG):** It can also pre-render the entire app at build time, generating static HTML files that can be directly served from a CDN. This results in even faster loading times and further improves SEO, as search engines can easily crawl and index all content.

**3. Built-in Features for Common Tasks:**

- **API Routes:** You can create API endpoints directly within your Next.js app using serverless functions, eliminating the need for a separate backend server for many use cases.
- **Image Optimization:** It provides built-in support for image optimization, ensuring that images are properly sized and formatted for web delivery, leading to faster loading and reduced bandwidth usage.
- **CSS Support:** Next.js supports CSS Modules for scoped styling, as well as global CSS and CSS-in-JS solutions for more flexible styling options.

**4. Developer Experience:**

- **Fast Refresh:** Next.js features Fast Refresh, which allows us to see changes you make to our React components reflected in the browser nearly instantly, without losing component state, significantly improving development speed and efficiency.
- **TypeScript Support:** It offers built-in TypeScript support, enabling type checking and improving code maintainability.

**5. Scalability and Flexibility:**

- **Incremental Adoption:** We can gradually adopt Next.js features into your existing React projects as needed, making it easy to integrate into existing workflows.
- **Customization:** It provides the ability to extend and customize its functionality through plugins and custom configurations, allowing us to tailor it to specific project requirements.

Next.js depends on the Node.js runtime environment. It enables server-side JavaScript execution, which is crucial for Next.js's key features like SSR, API routes, and the development environment. Without Node.js, Next.js couldn't deliver its performance, SEO, and developer experience benefits.

## What is Node.js

Node.js is a powerful JavaScript runtime environment that executes JavaScript code outside of a web browser. It allows us to use JavaScript for server-side scripting and building server-side applications.

We use [Node.js](https://nodejs.org/en) for a wide range of tasks, including:

- Building web servers and APIs
- Running scripts and automation tasks
- Developing real-time applications
- Creating server-rendered React applications 
  - Using Next.js and other frameworks

## What is NPM and NPX

Node Package Manager (NPM) is a tool for the Node.js runtime. It enable us to install, uninstall and update JavaScript packages globally in the workstation or locally in a project workspace. 

Node Package Execute (NPX) is a tool for executing packages from the NPM registry without installing them globally. The NPM registry is a public collection of open-source JavaScript packages that are used for web development projects.

## Visual Studio Code (VS Code)?

Visual Studio Code (VS Code) is a popular source code editor that combines the ease of use of a text editor with powerful features for developers. While it's not a full-fledged Integrated Development Environment (IDE) like its cousin Visual Studio, VS Code offers a high degree of customization and extensibility thanks to:

* **Microsoft Backing:** Developed and maintained by Microsoft, VS Code benefits from the resources of a major tech company.
* **Large Community:** A vibrant developer community contributes extensions that add a wide range of functionalities to VS Code, enhancing the development experience for various programming languages and frameworks.

**Why VS Code for This Project?**

While you're free to use any IDE you prefer, VS Code offers several advantages for this project:

* **Flexibility:**  VS Code is lightweight and customizable, making it adaptable to different development workflows.
* **Built-in Terminal:**  The ability to open a terminal window within VS Code eliminates the need to switch between separate applications for code editing and command-line tasks (like using `git` or `npm`).
* **Unified Interface:**  Having both your code and terminal windows within VS Code provides a streamlined development experience, allowing you to focus on your work without context switching.

In summary, VS Code provides a powerful and flexible platform for development, making it a great choice for this project.

> &#128073; Whenever we are running commands from the CLI, open a terminal window within your IDE environment. 
