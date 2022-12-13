const User=require('../models/userModel')


	
	const updateUser = async (req,res,next)=>{
	try {
	const updatedUser = await User.findByIdAndUpdate(
	req.params.id,
	{ $set: req.body },
	{ new: true }
	);
	res.status(200).json(updatedUser);
	} catch (err) {
	next(err);
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