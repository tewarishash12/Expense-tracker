const express = require('express');
const router = express.Router();
const Verification = require('../models/user');

router.use(express.json());

router.post('/register', async(req,res)=>{
    const {username, email, password} = req.body;

    if(!username || !email || !password)
        return res.status(400).send("All fields are required"); 

    try{
        const newUser = new Verification({username, email, password})
        await Verification.create(newUser);
    } catch(err){
        res.status(500).redirect('/auth/register');
    }
})

router.post('/login', (req,res)=>{
    const {email,password} = req.body;
    if(!email || !password)
        return res.status(400).send("Enter valid credentials");

    try{
        const checkUser = Verification.findOne({email});
        if(checkUser.email !== email)
            return res.status(400).send("Enter valid credentials");

        const password = checkUser.password;
        if(checkUser.password !== password)
            return res.status(400).send("Enter valid credentials");
    } catch(err){
        console.error(err.message)
    }
})



module.exports = router;