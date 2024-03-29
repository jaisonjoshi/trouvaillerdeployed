const User=require('../models/userModel')
const bcrypt = require("bcryptjs");

	
	const updateUser = async (req,res,next)=>{
		const username_c = await User.findOne({ username: req.body.username });
		const email_c = await User.findOne({ email: req.body.email});
		if(username_c)
		{
		  return res.status(403).json({error:'Username cannot be same'})  
		}
		if(email_c)
		{
		  return res.status(405).json({error:'Email cannot be same'})  
		}

			if(req.body.password){
				const salt = await bcrypt.genSaltSync(10);
				req.body.password=await bcrypt.hashSync(req.body.password, salt)
			}
	try {
	const updatedUser = await User.findByIdAndUpdate(
	req.params.id,
	{ $set:req.body,
	},
	{ new: true }
	);
	if(!updatedUser){
		return res.status(400).json({error:'No such user found!'}) 
	}
	res.status(200).json(updatedUser);
	} 
	catch (error) {
		res.status(500).json({ error: 'Server Error' });
	}
	
}

	 const deleteUser = async (req,res,next)=>{
	try {
	await User.findByIdAndDelete(req.params.id);
	res.status(200).json("User has been deleted.");
	} catch (err) {
	next(err);
	}
	}
	const getUser = async (req,res,next)=>{
	try {
	const user = await User.findById(req.params.id);
	res.status(200).json(user);
	} catch (err) {
	next(err);
	}
	}
	const getUsers = async (req,res,next)=>{
	try {
	const users = await User.find(req.query);
	res.status(200).json(users);
	} catch (err) {
	next(err);
	}
	}

	const countVendors = async (req,res,next) => {
		try{
			const vendorCount = await User.countDocuments({isVendor: true})
			res.status(200).json(vendorCount);

		} catch (err) {
			next(err);
			}
	}
	const countUsers = async (req,res,next) => {
		try{
			const userCount = await User.countDocuments({isVendor: false, isAdmin:false})
			res.status(200).json(userCount);

		} catch (err) {
			next(err);
			}
	}

	module.exports={
		updateUser,
		deleteUser,
		getUser,
		getUsers,
		countUsers,countVendors
	}