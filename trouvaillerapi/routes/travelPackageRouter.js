const express = require('express')
const router = express.Router()
const {createPackage, getPackages,createdb, getPackage,updatePackage} = require('../controllers/TravelPackageController')

/* router.get('/createdb', createdb)
 */


router.post('/new', createPackage)
router.get('/',getPackages)
router.get('/:id',getPackage)
router.patch('/:id',updatePackage)

module.exports = router