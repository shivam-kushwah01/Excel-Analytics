const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    username : {
        type : String ,
        required : true
    },
    password : {
        type : String ,
        required : true
    },
    email : {
        type : String 
    },
    role : {
        type : String ,
        enum : [ "user" , "admin"] ,
        default : "user"
    }
});

const User = mongoose.model('User',userSchema);

module.exports = User;