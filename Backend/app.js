const express = require('express');
const app = express();

// to create the express server and adding the port number and env's 

const dotenv = require('dotenv');
const path = require('path');
dotenv.config({path: path.join(__dirname, 'config', 'config.env')});

// import database
const connectDatabase = require('./config/Connectdatabase')
connectDatabase();

// middleware to convert the data to json from the server
app.use(express.json())

// importing the routes
const products = require('./Routes/products')
const orders = require('./Routes/order')

// api versioning
app.use('/api/v1/', products)
app.use('/api/v1/', orders)


// creating the api using express
app.listen(process.env.PORT, () => {
  console.log(
    `server listening port ${process.env.PORT} in ${process.env.NODE_ENV}`
  );
});
