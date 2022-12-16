const Package=require('../models/packageModel')
const mongoose=require('mongoose')

//get all workout
//inside 'find' you can pass params if you need filtered result
const getPackages = async(req,res)=>{
    const package = await Package.find(req.query).sort({createdAt:-1})
    res.status(200).json(package)
}
//get a single workout
const getPackage = async(req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such package exists'})
    }
    const package=await Package.findById(id)
    if(!package){
        return res.status(404).json({error:'No such package found'})
    }

  res.status(200).json(package)
}


const countPackage = async (req,res) => {
    
    const packageCount = await Package.countDocuments({});
    res.status(200).json(packageCount)

}

//create a single workout--changes with params
const createPackage = async (req,res)=>{
    const {
        title,
        duration,
        location,
        images,
        description,
        rating,
        cheapestPrice,
        features,
        shedule,
        offers
        } = req.body
        //add to db
    try{
    
    const package = await Package.create({
        title,
        duration,
        location,
        images,
        description,
        rating,
        cheapestPrice,
        features,
        shedule,
        offers
    
    })
    res.status(200).json({package})}
    //res.json({mssg:'post a new workouts'})
    catch(error){
        res.status(500).json({error:error.message})
    }
}

//delete a workout
const deletePackage = async (req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such package to delete'})
    }
    const package = await Package.findOneAndDelete({_id:id})
    if(!package){
        return res.status(400).json({error:'No such package found'})  
    }
    res.status(200).json(package)
}

//update a workout
const updatePackage = async (req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such Pacakge to delete'})
    }
    const package = await Package.findOneAndUpdate({_id:id},{
        ...req.body
    })
    if(!package){
        return res.status(400).json({error:'No such package found'})  
    }
    res.status(200).json(package)
}
//exports
module.exports={
    createPackage,
    getPackage,
    getPackages,
    deletePackage,
    updatePackage,
    countPackage
}