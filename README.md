# KeeperHomework App

This README provides comprehensive details about the KeeperHomework App, a web application for managing notes.
## Background

The KeeperHomework App is a dynamic web application designed to offer a seamless experience in creating, viewing, and deleting notes. Developed using React for the frontend and Node.js with Express and MongoDB for the backend, it offers a user-friendly interface that is intuitive and efficient. The application is hosted on Vercel for frontend services and Heroku for backend operations, ensuring robust and reliable access.


## Getting Started

### Installation

To install the KeeperHomework App:

1. Clone the GitHub repository.
2. Navigate to the project directory.
3. Run `npm install` to install all dependencies.
4. Use `npm build` to build the application for production.
5. Run `npm start` to start the application.
6. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
7. Or if you're using to access it locally, see the [Frontend Hosting](#frontend-hosting) section below.

## Frontend Hosting

The frontend of the KeeperHomework App is hosted on Vercel. This ensures fast loading times and a reliable user interface. Access the frontend at [KeeperHomework Frontend](https://keeper-homework-9bs9-extvns-projects.vercel.app/).

## Backend Hosting

The backend services, comprising the database and server functionalities, are hosted on Heroku. This setup guarantees a robust backend infrastructure with high availability.

By following these instructions, you can easily set up and start using the KeeperHomework App for your note management needs.

To update the backend, follow these steps:

1. Navigate to the project directory.
2. Create a new project on Heroku and set it up as needed.
3. Run `git subtree push --prefix backend heroku master` to push the backend subtree to Heroku.
4. Create a new project on Heroku and set it up as needed.
5. Enjoy!
