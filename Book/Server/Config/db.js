//for creating mongoose which connects the node.js with the mongodb

//import mongoose
const mongoose = require('mongoose')
//for getting the mongodb cluster linked connection from .env file
const connectionString = process.env.dbConnectionString

//to connect
mongoose.connect(connectionString).then(res => {

    console.log("MongoDB database successfully connected with bookStore server");
    
}).catch(error => {

    console.log("Connection Failed",error);
    
})