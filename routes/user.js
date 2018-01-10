const express = require('express');
const router = express.Router();
const user = require('../models/user');


router.post('/signup',(req,res)=>
{
	if(req.body.name!=null && req.body.phonenumber!=null&& req.body.username!=null && req.body.email!=null && req.body.password!=null){
	user.findOne({ $or:[{email:req.body.email},{username:req.body.username}]},function(err,user)
	{
		if(user)
		{
			res.status(200)
			   .json({succes : false,msg :'user already exists'});

		}
	

else{
	let newuser = new user({
		name:req.body.name,
		email:req.body.email,
		phoneno:req.body.phoneno,
		password:req.body.password
	}); 

	users.create(newuser,(err,users)=>
	{
		if(err)
		{
			res
			   .json({success : false,msg :'failed to Register'});

		}
		else
		{
			res.json({success : true,msg :'User registered'});
		}

	});
}
});
}
});

router.post('/login',	(req,res)=>{
	var email = req.body.email;
	var	password = req.body.password;
	
	user
		.findOne({
			email : req.body.email,
			password : req.body.password
		},(err,user)=>{
			if(err)
			{
				res
				   .json({success : false,msg :'ERROR OCCURED'});
			}
			if(!user)
			{
				res
				   .json({success : false,msg :'Check email/password combination'});
			}
			else{
				res.json({success:true,msg:'Successful Loggedin'});
			}
		})
});

module.exports=router;