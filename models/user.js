var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	name:String,
	username:String,
	email:String,
	phoneno:Number,
	password:String


});

module.exports=mongoose.model('user',userSchema);