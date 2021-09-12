const mongoose = require('mongoose')

const usershcema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        trim:true,
        min:5,
        max:15
    },
    lastname:{
        type:String,
        required:true,
        trim:true,
        min:5,
        max:15
    },
    username:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        index:true,
        lowercase:true
    },
    mobile:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        index:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true,
    },
})

const Userdata = mongoose.model('userdata',usershcema)
module.exports = Userdata