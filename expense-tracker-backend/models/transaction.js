const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const transactionModel = new Schema({
    name:{type:String, required:true},
    amount:{type:Number, required:true}
})

const Transaction = mongoose.model('Transaction', transactionModel);

module.exports = Transaction;