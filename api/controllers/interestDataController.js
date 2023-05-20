const InterestData=require('../models/interestData')
const mongoose=require('mongoose')


//get all workout
//inside 'find' you can pass params ifi you need filtered result
const getInterests=async(req,res)=>{


///new material
     
    const res=await InterestData.find();
   // console.log(query)
    res.status(200).json(hotel)
}
//get a single workout
/* const getHotel=async(req,res)=>{
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
} */




//create a single hotel--changes with params
const createInterest=async (req,res)=>{
    const {name,
        phone,
        email,
        destination,
        month,
        noOfPeople,
        description,
        travellingWith,
        salaried,itr}=req.body
    //add to db
    try{
    
    const hotel=await Hotel.create({name,
        phone,
        email,
        destination,
        month,
        noOfPeople,
        description,
        travellingWith,
        salaried,itr})
        

    res.status(200).json({hotel})}
    //res.json({mssg:'post a new workouts'})
    catch(error){
        res.status(500).json({error:error.message})
    }
}

//delete a hotel
const deleteInterest=async (req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such interest to delete'})
    }
    try{
    const interest=await InterestData.findOneAndDelete({_id:id})
    if(!interest){
        return res.status(400).json({error:'No such data found'})  
    }
    res.status(200).json(interest)
}
catch (error){
    res.status(500).json({ error: 'Server Error' }); 
}
}

//update a hotel

//exports
module.exports={
    createInterest,
    getInterests,
    deleteInterest,
}
