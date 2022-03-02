var mongoose = require('mongoose')
var Schema = mongoose.Schema

var userSchema = new Schema({
    name: {type:String, required:true},
    email: String,
    age: {type:Number, min:1},
    bio: String
}, {timestamps:true})

var User = mongoose.model('User', userSchema)

module.exports = User