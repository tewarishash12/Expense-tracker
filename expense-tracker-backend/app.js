const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');

// routes are defined here
app.use('/auth', authRoutes);

app.listen(3000, (req,res)=>{
    console.log("Server has started", "http://localhost:3000/");
});

app.get("/", (req,res)=>{
    res.send("Server is at home page");
})
