// // // import dotenv, express, cors

// loads .env file content into process.env
require("dotenv").config()
const dns = require("node:dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);
const express = require("express")
const cors = require("cors")
const router = require('./Routes/route')
require('./Config/db')


//create server using express
const bookServer = express()

//use cors in the server
bookServer.use(cors())

//parse : parses json and only looks at requests where the Content-Type header matches the type option.
//application specific middleware
bookServer.use(express.json())  //the incoming request get parsed through express.json()

//use router to receive request
bookServer.use(router)

//port
const PORT = process.env.PORT

bookServer.listen(PORT,() => {

    console.log(`Book Server Started Running at PORT:${PORT}`);
    
})

//response should get in the localhost:3000 so we are using GET() method
bookServer.get('/',(req,res) => {
    res.status(200).send('<h1 style=color:blue>Book-Server Started Running Successfully...</h1>')
})


// bookServer.post('/',(req,res) => {
//     res.status(200).send('Send Request')
// })