# Connecting Your Application to a Database

An application requires a database to manage user data and provide dynamic information for the user interface. We'll configure a PostgreSQL database to achieve this functionality. 

**Why a Database?**

Databases are essential for web applications that need to:

* **Store and retrieve data:**  Databases provide a structured way to store large amounts of information, making it easy to add, edit, and retrieve data as needed.
* **Manage user data:**  User information like login credentials, preferences, and form submissions can be securely stored and accessed by the application.
* **Populate user interface elements:**  Data from the database can be used to pre-fill select boxes, radio buttons, and checkboxes in your user interface, providing a more efficient and personalized experience.

**PostgreSQL: A Powerful Choice**

PostgreSQL is a free and open-source object-relational database management system (ORDBMS). It offers several advantages for web applications:

* **Relational model:** Data is organized into tables with relationships between them, making it easy to query and retrieve complex information.
* **Scalability:** PostgreSQL can handle large datasets and high traffic volumes, making it suitable for growing applications.
* **Security features:** PostgreSQL offers robust security features to protect your user data from unauthorized access.

## Exercise: Setting Up PostgreSQL

In the following sections, we'll guide you through setting up and configuring a PostgreSQL database for your React application. This will involve:

1. **Installing PostgreSQL:** We'll provide instructions on how to install PostgreSQL on your development machine.
2. **Creating a Database:** You'll learn how to create a new database specific to your application.
3. **Connecting to the Database from React:** We'll explore libraries and techniques to establish a connection between your React application and the PostgreSQL database, allowing you to interact with the data.

By following these steps, you'll equip your React application with the power of a database, enabling it to manage user data and provide a richer user experience.

### Vercel Postgres

Vercel offers a serverless Postgres database solution called Vercel Postgres. It's a convenient option because it integrates directly with your Vercel projects. Here's how to create a Vercel Postgres database:

**On your Vercel dashboard:**

1. Go to your Vercel project.
2. Select the "Storage" tab.
3. Click the "Connect Store" button.
4. Choose "Postgres" from the options.
5. Give your database a descriptive name (alphanumeric characters, underscores, and hyphens allowed, up to 32 characters).
6. Select a region for your database. Ideally, choose a region close to your Vercel deployment for optimal performance.
7. Click "Create and Continue."
8. Vercel will automatically create your database. You'll see connection details displayed in the dashboard.
9. Once connected, navigate to the .env.local tab, click Show secret and Copy the Snippet. **reveal the secrets before copying them**.
10. From your IDE, open the .env.sample file, paste database information, and rename the file `.env`. Do not add this file to source control.

> &#128077; We are using the .env configuration file to store the connection information. This file should not be added to GitHub, so we need to add it to the .gitignore file as `.env`


**Connecting to the Database from your React Application:**

Once you have your database set up (either Vercel Postgres or an external provider), you'll need to connect to it from your React application. Here are some popular libraries to achieve this:

* **Vercel Postgres SDK:** If using Vercel Postgres, this official library simplifies interaction with the database. ([https://vercel.com/docs/storage/vercel-postgres/quickstart](https://vercel.com/docs/storage/vercel-postgres/quickstart))

```bash
cd nextjs-dashboard
npm i @vercel/postgres
```

> &#128077; Make sure to run this command from the folder where the project is located. This command looks for the file package.json and the scripts section in the file.

### Creating the database objects

Now that we have a database, we need to create the database objects, which are basically the core components of a database and includes objects like tables, stored procedures, views, functions as well as some key properties like primary keys, foreign keys, and table constrains.  

In order to build the table, we can run this command from a terminal:

```bash
npm run seed
```

This commands, tells npm to execute the script `seed` which is defined in the package.json file. That script uses node.js to run the javascript file.

This file creates the following tables and populates them with test data.

- invoices, customers, user, revenue

After running the command, we should see the following output on the terminal window:

```bash
Created "users" table
Seeded 1 users
Created "customers" table
Seeded 10 customers
Created "invoices" table
Seeded 15 invoices
Created "revenue" table
Seeded 12 revenue
```

 




