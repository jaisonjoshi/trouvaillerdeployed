const Hotel=require('../models/hotelModel')
const mongoose=require('mongoose')

//get all workout
//inside 'find' you can pass params ifi you need filtered result
const getHotels=async(req,res)=>{


    const {min,max,...others}=req.query;
///new material

//

    
    const hotel=await Hotel.find({
        ...others,
        cheapestPrice:{$gt:min||1,$lt:max||999999}
    }).limit(req.query.limit).sort({createdAt:-1})
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

  res.status(200).json(hotel)
}


const countHotel = async (req,res) => {
    
        const hotelCount = await Hotel.countDocuments({});
        res.status(200).json(hotelCount)
    
}

//create a single workout--changes with params
const createHotel=async (req,res)=>{
    const {title,
        type,
        location,
        address,
        rooms,
        images,
        description,
        rating,
        cheapestPrice,locations,features,
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
        cheapestPrice,locations,features,
        facilities,vendorid})
    res.status(200).json({hotel})}
    //res.json({mssg:'post a new workouts'})
    catch(error){
        res.status(500).json({error:error.message})
    }
}

//delete a workout
const deleteHotel=async (req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such hotel to delete'})
    }
    const hotel=await Hotel.findOneAndDelete({_id:id})
    if(!hotel){
        return res.status(400).json({error:'No such hotel found'})  
    }
    res.status(200).json(hotel)
}

//update a workout
const updateHotel=async (req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such hotel to delete'})
    }
    const hotel=await Hotel.findOneAndUpdate({_id:id},{
        ...req.body
    })
    if(!hotel){
        return res.status(400).json({error:'No such hotel found'})  
    }
    res.status(200).json(hotel)
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