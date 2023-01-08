const express=require('express')
const router=express.Router()
const Locations = require('../models/locationModel')

const {getLocations, updateLocations, createLocations} = require('../controllers/locationController')

router.get('/', getLocations)
router.post('/', createLocations)

router.patch('/:id', updateLocations)

module.exports = router