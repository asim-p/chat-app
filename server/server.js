//required things
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

//dotenv require
require('dotenv').config()

//create app instance
const app = express()

//get PORT from .env (8000 if cannot be found)
const PORT = process.env.PORT || 8000

//get MongoDB URL
const dbURL = process.env.dbURL

//middlewares

/*  cors middleware (basically tells backend to not deny frontend's api request)
    default no argument: accepts all requests
    here we specify to only allow GET and POST requests from localhost:3000 */
app.use(cors({
    origin:'http://localhost:3000/',
    methods:['GET','POST']
}))

/* express.json() middleware basically parse json to javascript object */
app.use(express.json())

//connect to MongoDB
mongoose.connect(dbURL)
    .then(()=>{console.log("Database connected!")})
    .catch((err)=>{console.log("Error while connecting to database\n", err)})


// GET requests
app.get('/',(req,res)=>{
    res.json({ message: 'Server working!' });})
    
//listen for requests
app.listen(PORT,()=>{
    console.log(`Listening to port ${PORT}`);
});