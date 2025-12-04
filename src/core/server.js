const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('morgan');
require('dotenv').config();
const {sequelize} = require('../../models');

class Server {
    app;
    port;

    // Start server configuration when an instance of the class is created
    constructor() {
        this.app = express();
        this.port = parseInt(process.env.NODE_DOCKER_PORT, 10) || 8000;

        // Log requests to the console.
        this.app.use(logger('dev'));

        // Set the cors configuration
        const options = {
            allowedHeaders: [
                'Access-Control-Allow-Origin',
                'Origin',
                'x-requested-with',
                'Content-Type',
                'Content-Range',
                'Content-Disposition',
                'Content-Description',
            ],
            methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
            origin: [
                'http://localhost:4000',
                'http://localhost:3000',
                'http://localhost:5001',
                'http://localhost:50000',
            ],
            preflightContinue: false,
        };
        this.app.use(cors(options));

        this.app.use(express.json()); // For parsing JSON request bodies

        this.app.use(bodyParser.urlencoded({extended: true}))
        this.app.use(bodyParser.json());
    }    

    /**
     * Method for creating and starting the server
     * 
     * @param {Function} callback Function to be executed when the server starts
     */
    start(callback) {
        this.app.set('port', this.port);

        //sync database
        sequelize
            .sync()
            .then(result => {
                console.log("Database connected");
                this.app.listen(this.port, callback);
            })
            .catch(err => console.log(err));

             
    }
}

module.exports = Server;