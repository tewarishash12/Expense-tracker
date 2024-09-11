const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const verify = new Schema({
    username:{type:String, required:true, unique:true, trim:true},
    email:{type:String, required:true, unique:true, trim:true, lowercase:true},
    password:{type:String, required:true}
})

const Verification = mongoose.model('User', verify);

module.exports = Verification;