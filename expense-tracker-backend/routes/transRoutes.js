const express = require('express');
const router = express.Router();

const Transaction = require('../models/transaction');
router.use(express.json());

router.post('/add', async(req,res)=>{
    const {name,amount} = req.body;
    if(!name || !amount)
        return res.status(400).json({error: "Name and amount are required"});

    try{
        const newTransaction = new Transaction({name,amount});
        await newTransaction.save();
        res.status(201).json({ message: 'Transaction added successfully', transaction: newTransaction });
    } catch(err) {
        res.status(500).json({error: "failed to save transaction"});
    }
})

router.get('/history', async(req,res)=>{
    try{
        const transactions = await Transaction.find();
        res.json(transactions);
    }catch(err){
        res.status(500).json({message:err.message});
    }
})

module.exports = router;