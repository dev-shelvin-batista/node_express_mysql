

# Project details
This project functions as a REST API server to connect to a MySQL database from Node.js using Sequelize, which has a user module with its routes. More modules with routes can be added. 

| |Version |
|----------------|-------------------------------|
|NPM |`11.5.2` |
|Node.js |`22.14.0`|
|Mysql ||  
|Sequelize||  
|Docker||  

## Important note  
If you want to add a new route, you must take the following into account:

- You must have a database created on the server, either local or external. In addition, you must change the database connection in the `./.env` and `config/config.json` files. The latter file is automatically generated when you start sequelize in the project.
- You must add a new sequelize model with the command `sequelize model:create --name user --attributes name:string,last_name:string,email:string,phone:string`. The attributes to be used are added in the **key:value** format separated by a comma. In this case, **user** is an example; you can change this name to another one you need to use.
- You must add a controller to the `src/controllers` folder to use the methods as routes in their respective files. You can follow the example of the file created in the `src/controller/users.js` repository, which contains a CRUD example and is used as a route in its respective `src/routes/users.js` file.
- Create a js file in the `src/routes` folder to assign the methods created in the controller created in the previous step as REST API routes. You can follow the example of the file created in the repository `src/routes/users.js`.
- After creating the routes file and assigning the methods, this file must be assigned as a module in `src/routes/index` in the **generate** method.    

## Instructions
To start this project on a local server, follow the instructions below.

- Clone the project, either with the command git clone `https://github.com/dev-shelvin-batista/node_express_mysql.git` or using a GitHub graphical tool.
- You must have a database created on the server, either local or external. In addition, you must change the database connection in the `./.env` and `config/config.json` files. The latter file is automatically generated when you start sequelize in the project.
- After cloning the repository, install the node dependencies using the command `npm install` inside the `node_express_mysql` project folder. If an error occurs, add the --force option.
- This project already has a model and migration created with sequelize, so you need to run the migration to get the table structure in the database with the command `sequelize db:migrate`. Instructions for creating a model, migration, and controller can be found in the section **Important note** . 
- If an error occurs, ensure that the database has been created and that the connection details are correctly configured in the `config/config.json` file.
- Run the command `npm run start` to start the server. By default, the url `http://localhost:4000` is used.
- This project has a file called `Collection_Test.postman_collection.json` that contains a collection with the REST API routes configured for testing after successfully starting the project as a server.

## Docker Instructions

To run the frontend project in a Docker container, follow these steps:

- Clone the project, either with the git clone command `https://github.com/dev-shelvin-batista/node_express_mysql.git` or using a GitHub graphical tool.

- Access the folder in a command terminal using the cd command.

- The project already has Docker Compose configured to create the database and backend application containers. You can create them all by running the command `docker compose up -d`, but it is recommended to create each container as a service by running the commands `docker compose up -d db` and `docker compose up -d app`.

- When you create the containers in the previous step, the database will be created in its respective container, the backend application dependencies will be installed, and the migrations already created will be executed to generate the table structure.

- The backend application container uses port **4000** by default. 

- This project has a file called `Collection_Test.postman_collection.json` that contains a collection with the REST API routes configured for testing after successfully starting the project as a server.