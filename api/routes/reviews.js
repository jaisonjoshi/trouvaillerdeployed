const express=require('express')
const router=express.Router()
const Review=require('../models/reviewModel')
const { createReview,
    getReviews,
    //deleteReview,updateReview, getReview
}=require('../controllers/reviewController')

//from server,/api/workout/users will be path

//get request ,get all request
router.get('/',getReviews)


//router.get('/:id',getReview)
//post a new request
router.post('/',createReview)
//delete a new request
// router.delete('/:id',(req,res)=>{
//     res.json({mssg:'delete a workouts'})
// })

//router.delete('/:id',deleteReview)
//update a workout
// router.patch('/:id',(req,res)=>{
//     res.json({mssg:'update a workouts'})
// })
//router.patch('/:id',updateReview)

module.exports=router