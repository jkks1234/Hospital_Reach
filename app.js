var express = require('express');
var app = express();
var port = 3203;
var config = require('./config/database')
var mongoose = require('mongoose');
var path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors');

mongoose.connect(config.database);

mongoose.connection.on('connected',()=>{
	console.log('connected to database');
});

const user = require('./routes/user');
const hospital = require('./routes/hospital');

app.use(cors());
app.use(bodyParser.json());
app.use('/user',user);
app.use('/hospital',hospital);

app.get('/',(req,res)=>{
	console.log('app working');
	res.json('ALL SET')
})

app.listen(port,()=>{
	console.log("Server started at port="+port);
}); 

console.log('hey')
