const express=require('express')
const router=express.Router()
const Hotel=require('../models/hotelModel')
const { createHotel,
    getHotels,
    getHotel,
    deleteHotel,updateHotel,countHotel
}=require('../controllers/hotelController')
const {verifyAdmin}=require('../utils/verifyToken')

//from server,/api/workout/users will be path

//get request ,get all request
router.get('/',getHotels)
//to get single workout
router.get('/find/:id',getHotel)

router.get('/count', countHotel)
//post a new request
router.post('/',createHotel)
//delete a new request
// router.delete('/:id',(req,res)=>{
//     res.json({mssg:'delete a workouts'})
// })

router.delete('/:id',deleteHotel)
//update a workout
// router.patch('/:id',(req,res)=>{
//     res.json({mssg:'update a workouts'})
// })
router.patch('/:id',updateHotel)
module.exports=router