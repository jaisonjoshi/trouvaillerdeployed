const Package=require('../models/packageModel')
const mongoose=require('mongoose')
/* const PackLocations = require('../models/packLocMod')
 */
//get all workout
//inside 'find' you can pass params if you need filtered result
const getPackages = async(req,res)=>{
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10; 
    let {min,max,destinations,category,offers,...others}=req.query;
         min = parseInt(req.query.min) || 1;
         max = parseInt(req.query.max) || 99999;
 
    const query = {}
    if(destinations) query.locations = {$in: [destinations]}
    if(category) query.category = {$in: category.split(',')}
    if(min) query.cheapestPrice = {$gt: min, $lt: max}
    if(max) query.cheapestPrice = {$gt: min, $lt: max}
    if(offers) query.offers = offers
    
    const pack = await Package.find(query).limit(limit).skip((page - 1) * limit).sort({createdAt: -1}).catch(err=>console.log(err))
    //console.log(query)
    res.status(200).json(pack)

    
}


//get a single pkg
const getPackage = async(req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such package exists'})
    }
    const pack=await Package.findById(id)
    if(!pack){
        return res.status(404).json({error:'No such package found'})
    }

  res.status(200).json(pack)
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
        schedule,
        offers,offertitle,offerdescription, offerprice,
        category
        } = req.body
        //add to db
    try{
    
    const pack = await Package.create({
        title,
        duration,
        location,
        images,
        description,
        rating,
        cheapestPrice,
        features,activities,locations,
        schedule,
        offers,offertitle,offerdescription, offerprice,
        category
    
    })
  /*   await PackLocations.findOneAndUpdate(
        "64cfcdf74a34e292f5ae4645",
        { $addToSet: { 
                  locations:{$each: locations}
                } 
        }) */
    res.status(200).json({pack})}
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
    try{
    const pack = await Package.findOneAndDelete({_id:id})
    if(!pack){
        return res.status(400).json({error:'No such package found'})  
    }
    res.status(200).json(pack)
    }
    catch(error)
    {
        res.status(500).json({ error: 'Server Error' }); 
    }

}

//update a workout
const updatePackage = async (req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such Pacakge to delete'})
    }
    try{
    const pack = await Package.findOneAndUpdate({_id:id},{
        ...req.body
    })
    
    if(!pack){
        return res.status(400).json({error:'No such package found'})  
    }
    res.status(200).json(pack)
    }
    catch(error){
        res.status(500).json({ error: "server error" });
    }

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
