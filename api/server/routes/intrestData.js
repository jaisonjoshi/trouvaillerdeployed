const express=require('express')
const router=express.Router()
const InterestData=require('../models/interestData')
const { createInterest,
    getInterests,
    deleteInterest,
}=require('../controllers/interestDataController')
const {verifyAdmin}=require('../utils/verifyToken')

//from server,/api/workout/users will be path

//get request ,get all request
router.get('/',getInterests)
//to get single workout

//post a new request
router.post('/',createInterest)
//delete a new request
// router.delete('/:id',(req,res)=>{
//     res.json({mssg:'delete a workouts'})
// })

router.delete('/:id',deleteInterest)
//update a workout
// router.patch('/:id',(req,res)=>{
//     res.json({mssg:'update a workouts'})
// })
module.exports=router