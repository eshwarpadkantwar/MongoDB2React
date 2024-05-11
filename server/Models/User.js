// user.js

const mongoose = require('mongoose');

const Userschema = new mongoose.Schema({
    name: String,
    age: Number,
    mail: String
});

const Usermodel = mongoose.model("users", Userschema);
module.exports = Usermodel;
