const express=require('express')
const router=express.Router()
const PackLocations = require('../models/packLocMod')

const {getPackLocations, updatePackLocations, createPackLocations} = require('../controllers/packlocController')


router.get('/', getPackLocations)
router.post('/', createPackLocations)

router.patch('/:id', updatePackLocations)
module.exports = router