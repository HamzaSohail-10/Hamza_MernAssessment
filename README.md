# MERN Assessment

By using **Express.js** and **MongoDB**, Create an API that includes basic CRUD operations and user authentication using **JWT**.


## Features

- **User Authentication**: Implemented via JWT with `signup` and `login` endpoints.
- **CRUD Operations for Tasks**: Allows users to create, read, update, and delete tasks.
- **JWT Token-based Authentication**: Ensures that only authenticated users can create, update, and delete tasks.


### Note

I use MongoDB compass to do this project and my environment variable **MONGO_URI** is set according to this.


### Prerequisites

Before you starting the project, make sure you have the following installed on your machine:

1. **Node.js** (LTS version recommended) - [Download and Install Node.js](https://nodejs.org/)
2. **MongoDB** - [Download and Install MongoDB](https://www.mongodb.com/try/download/community) or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for a cloud-based database.
3. **MongoDB Compass** - Optional, but recommended for managing and inspecting your MongoDB database. [Download MongoDB Compass](https://www.mongodb.com/products/compass)
4. **Postman** - To test the API endpoints. [Download Postman](https://www.postman.com/downloads/)


### Starting the Project

### 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone <repository-url>
cd Hamza_MernAssessment
npm install
```

### 2. Check the .env file

Setup the value of variables in the .env file according to your need.

### 3. Run the Application

After setting up the environment variables,

```bash
npm start

npm run dev
```

Note: **npm run dev** is for development mode

### 4. Testing API's

API's by default will be running on **http://localhost:3000**.
Postman and other platform can be used to test the api's.

All **Api's** are listed down;

**SignUp User**: http://localhost:3000/api/user/signup

**Login User**: http://localhost:3000/api/user/login

**Get All Tasks**: http://localhost:3000/api/tasks

**Post New Task**: http://localhost:3000/api/tasks

**Get One Task By ID**: http://localhost:3000/api/tasks/(id_of_task)

**Put Api for Task**: http://localhost:3000/api/tasks/(id_of_task)

**Patch Api for Task**: http://localhost:3000/api/tasks/(id_of_task)

**Delete Api for Task**: http://localhost:3000/api/tasks/(id_of_task)


Note: **Task** API's **(POST, PUT, PATCH, and DELETE)** needs authentication, so after login set the token in the **Authorization Header**(Bearer Token).
