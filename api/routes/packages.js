const express=require('express')
const router=express.Router()


const Package = require('../models/packageModel')
const { createPackage,
    getPackage,
    getPackages,
    deletePackage,updatePackage,countPackage
}=require('../controllers/packageController')
const {verifyAdmin}=require('../utils/verifyToken')

//from server,/api/workout/users will be path

//get request ,get all request
router.get('/',getPackages)
//to get single workout
router.get('/find/:id',getPackage)
router.get('/count',countPackage)

//post a new request
router.post('/',createPackage)
//delete a new request
// router.delete('/:id',(req,res)=>{
//     res.json({mssg:'delete a workouts'})
// })

router.delete('/:id',deletePackage)
//update a workout
// router.patch('/:id',(req,res)=>{
//     res.json({mssg:'update a workouts'})
// })
router.patch('/:id',updatePackage)
module.exports=router