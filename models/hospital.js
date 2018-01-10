var mongoose = require('mongoose');

var hospitalSchema = new mongoose.Schema({
	name:String,
	address:String,
	lat:Number,
	lng:Number,
	phone1:String,
	phone2:String,
	phone3:String,
	speciality:[String],
	services:[String],
	hospital_id:String

});

module.exports=mongoose.model('hospital',hospitalSchema);