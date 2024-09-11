const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');
const transRoutes = require('./routes/transRoutes')

app.use(cors());
require('dotenv').config();

// Database attributes are defined here

const USER_NAME = process.env.USER_NAME;
const PASSWORD = process.env.PASSWORD;
const DB_NAME = process.env.DB_NAME;

const dbURI = `mongodb+srv://${USER_NAME}:${PASSWORD}@merncluster0.fq4t0.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=mernCluster0`

mongoose.connect(dbURI)
.then((res)=>{
    console.log("Database has been connected");
})
.catch((err)=>{
    console.log(err.message);
})

// routes are defined here
app.use('/auth', authRoutes);
app.use('/transaction', transRoutes)

app.listen(3010, (req,res)=>{
    console.log("Server has started", "http://localhost:3010/");
});

app.get("/", (req,res)=>{
    res.send("Server is at home page");
})