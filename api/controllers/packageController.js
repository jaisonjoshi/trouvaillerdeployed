const Package=require('../models/packageModel')
const mongoose=require('mongoose')

//get all workout
//inside 'find' you can pass params if you need filtered result
const getPackages = async(req,res)=>{
   
    let {min,max,destinations,category,offers,...others}=req.query;
         min = parseInt(req.query.min) || 1;
         max = parseInt(req.query.max) || 99999;
 
    const query = {}
    query.limit=50;
    if(destinations) query.locations = {$in: [destinations]}
    if(category) query.category = {$in: category.split(',')}
    if(min) query.cheapestPrice = {$gt: min, $lt: max}
    if(max) query.cheapestPrice = {$gt: min, $lt: max}
    if(offers) query.offers = offers
    
    const package = await Package.find(query).limit(req.query.limit).sort({createdAt: -1}).catch(err=>console.log(err))
    console.log(query)
    res.status(200).json(package)
   




    
}









//get a single pkg
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

//create a single pkg--changes with params
const createPackage = async (req,res)=>{
    const {
        title,
        duration,
        location,
        images,
        description,
        rating,
        cheapestPrice,
        features,activities,locations,
        shedule,
        offers,offertitle,offerdescription, offerprice,
        category
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
        features,activities,locations,
        shedule,
        offers,offertitle,offerdescription, offerprice,
        category
    
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
