const Hotel=require('../models/hotelModel')
const mongoose=require('mongoose')
const Locations = require('../models/locationModel')


//get all workout
//inside 'find' you can pass params ifi you need filtered result
const getHotels=async(req,res)=>{
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    let {min,max,destinations,type,offers,vendorid,...others}=req.query;
///new material
        min = parseInt(req.query.min) || 1;
         max = parseInt(req.query.max) || 99999;

         const query = {}
         if(type) query.type = type
         if(offers) query.offers = offers
         if(destinations) query.locations = {$in: [destinations]}
         if(min) query.cheapestPrice = {$gt: min, $lt: max}
         if(max) query.cheapestPrice = {$gt: min, $lt: max}
         if(vendorid) query.vendorid = vendorid
  
    const hotel=await Hotel.find(query).limit(limit).skip((page - 1) * limit).sort({createdAt: -1}).catch(err=>console.log(err))
   // console.log(query)
    res.status(200).json(hotel)
}
//get a single workout
const getHotel=async(req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such hotel exists'})
    }
    const hotel=await Hotel.findById(id)
    if(!hotel){
        return res.status(404).json({error:'No such hotel found'})
    }
    console.log(hotel)
  res.status(200).json(hotel)
}


const countHotel = async (req,res) => {
    
        const hotelCount = await Hotel.countDocuments({});
        res.status(200).json(hotelCount)
    
}

//create a single hotel--changes with params
const createHotel=async (req,res)=>{
    const {title,
        type,
        location,
        address,
        rooms,
        images,
        description,
        rating,
        cheapestPrice,locations,features,offertitle, offerdescription, offerprice,offers,
        facilities,vendorid}=req.body
    //add to db
    try{
    
    const hotel=await Hotel.create({title,
        type,//includes villa,hotels.apartments
        location,
        address,
        rooms,
        images,
        description,
        rating,
        cheapestPrice,locations,features,offerdescription,offerprice,offertitle,offers,
        facilities,vendorid})
        await Locations.findOneAndUpdate(
            "63fc915beabe1f26084c3703",
            { $addToSet: { 
                      locations:{$each: locations}
                    } 
            })

    res.status(200).json({hotel})}
    //res.json({mssg:'post a new workouts'})
    catch(error){
        res.status(500).json({error:error.message})
    }
}

//delete a hotel
const deleteHotel=async (req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such hotel to delete'})
    }
    try{
    const hotel=await Hotel.findOneAndDelete({_id:id})
    if(!hotel){
        return res.status(400).json({error:'No such hotel found'})  
    }
    res.status(200).json(hotel)
}
catch (error){
    res.status(500).json({ error: 'Server Error' }); 
}
}

//update a hotel
const updateHotel=async (req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such hotel to delete'})
    }
    try{
    const hotel=await Hotel.findOneAndUpdate({_id:id},{
        ...req.body
    })
    await Locations.findOneAndUpdate(
        "63fc915beabe1f26084c3703",
        { $addToSet: { 
                  locations:{$each: req.body.locations}
                } 
        })
    if(!hotel){
        return res.status(400).json({error:'No such hotel found'})  
    }
    res.status(200).json(hotel)
    }
    catch(error){
       // console.error(error);
        res.status(500).json({ error: 'Server Error' });
    }
}
//exports
module.exports={
    createHotel,
    getHotels,
    getHotel,
    deleteHotel,
    updateHotel,
    countHotel
}
