const express = require('express')
const router = express.Router();

const Package = require('../models/packageModel')

const {getPackagePage} = require('../controllers/getPackageController')


router.get('/:id', getPackagePage)

module.exports = router