const Review=require('../models/reviewModel')
const mongoose=require('mongoose')

//get all 
//inside 'find' you can pass params if you need filtered result
const getReviews = async(req,res)=>{
    const review = await Review.find(req.query).limit(req.query.limit).sort({rating:-1})
    res.status(200).json(review)
}


const getReview = async(req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such package exists'})
    }
    const review=await Review.findById(id)
    if(!review){
        return res.status(404).json({error:'No such package found'})
    }

  res.status(200).json(review)
}


//create a single one--changes with params
const createReview = async (req,res)=>{
    const { author,
        place,
        image,
        reviewnote,
        rating
        } = req.body
        //add to db
    try{
    
    const review = await Review.create({ author,
        place,
        image,
        reviewnote,
        rating})
    res.status(200).json({review})}
    
    catch(error){
        res.status(500).json({error:error.message})
    }
}

//delete 

const deleteReview = async (req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such package to delete'})
    }
    const review = await Review.findOneAndDelete({_id:id})
    if(!review){
        return res.status(400).json({error:'No such package found'})  
    }
    res.status(200).json(review)
}

//update

const updateReview = async (req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such Pacakge to delete'})
    }
    const review = await Review.findOneAndUpdate({_id:id},{
        ...req.body
    })
    if(!review){
        return res.status(400).json({error:'No such package found'})  
    }
    res.status(200).json(review)
}

//exports
module.exports={
    createReview,
    getReviews,
    getReview,
   deleteReview,
   updateReview
}