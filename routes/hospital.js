const express = require('express');
const router = express.Router();
const hospital = require('../models/hospital');

router.get('/showall',(req,res)=>
{
	hospital.find({},(err,hospital)=>{
		if(err)
		{
			res
			   .json({success : false,msg :'failed to fetch'});
		}
		else{
			res
			   .json(hospital);
		}
	});
});
router.get('/showone/:spe',(req,res)=>{

	var stype=req.params.spe;
	console.log(stype);
	hospital.
		find({speciality:stype},function(err,hospitals)
		{
			if(err)																
			{
				res.status(400)
				   .json(err);
			}
			else
			{
				console.log(hospitals);
				res.json(hospitals);

			}
		});

});


module.exports=router;