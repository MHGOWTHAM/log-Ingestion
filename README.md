log-Ingestor and Query Interface
Log Ingestor and Query Interface is a web application that allows users to ingest logs into a MySQL database and perform real-time searches based on various parameters such as date ranges, log levels, and search terms. This project is built using Node.js, Express, MySQL, and JavaScript.


Steps ->

Initialize a Git Repository
Run the following command to initialize a Git repository:

git init

Add Files to the Repository Add all the files in your project to the Git repository:
git add . This stages all the changes for commit.

git commit -m "Initial commit" Replace "Initial commit" with a descriptive message that summarizes the changes made in this commit.

Create a GitHub Repository Go to the GitHub website and log in to your account.Follow the instructions to create a new repository.

Connect Local Repository to GitHub Copy the HTTPS or SSH URL of your GitHub repository.

Back in your VS Code terminal, add a remote to your local Git repository that points to your GitHub repository:

git remote add origin https://github.com/yourusername/your-repository.git Replace the URL with the one you copied.

Push to GitHub Push your local repository to GitHub:
git push -u origin master This command pushes your changes to the "master" branch. If you are working with a different branch, replace "master" with your branch name.

Install dependencies:

npm install

Set up the MySQL database:

Create a new MySQL database named log. Run the SQL script provided in database.sql to create the logs table. Configure the MySQL connection:

Open server.js and update the database connection details (host, user, password) to match your local MySQL setup.

Start the server:

npm start

Open the web interface:

Open your browser and navigate to http://localhost:3000. System Design The system consists of a Node.js backend using Express for handling HTTP requests, a MySQL database for storing logs, and a front-end interface built with HTML, CSS, and JavaScript.

Features Implemented

Log Ingestion:

Logs can be ingested into the system by sending a POST request to the /logs endpoint.

Real-time Search:

Users can search for logs based on parameters such as date ranges, log levels, and search terms.

Role-Based Access:

The system currently does not implement role-based access controls. All users have access to the query interface.

Identified Issues

CORS Issue:

The current implementation may face CORS issues when trying to access the API from a different origin. You may need to configure CORS settings in the server.

Authentication:

The system does not currently implement user authentication. Consider adding authentication mechanisms for secure access.

Contributors

M H GOWTHAM gowthammh02@gmail.com 
Feel free to contribute by submitting bug reports, feature requests, or pull requests.
