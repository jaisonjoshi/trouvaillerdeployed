const Package = require('../models/packageModel')
const mongoose = require('mongoose')

const getPackagePage = async (req,res)=>{
    const {id} = req.params;
    const package = await Package.findOne({_id: id})
    res.send(package.title)
}


module.exports = {getPackagePage}