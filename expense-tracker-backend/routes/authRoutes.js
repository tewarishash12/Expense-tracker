const express = require('express');
const router = express.Router();

router.get('/register', (req,res)=>{
    res.send("Welcome to signup page");
})

router.get('/login', (req,res)=>{
    res.send("Welcome to login page");
})

module.exports = router;