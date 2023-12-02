const express=require('express')
const router=express.Router()

const { getPackageLocations} = require('../controllers/packageLocationsController')


router.get('/', getPackageLocations)

module.exports = router