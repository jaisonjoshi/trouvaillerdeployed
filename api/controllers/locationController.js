const Locations = require('../models/locationModel')
const mongoose=require('mongoose')


const getLocations = async (req,res) => {
    const locations = await Locations.find({})
    res.status(200).json(locations)
}
const createLocations = async (req,res) => {
    const {locations} = req.body
    try{
        const locationsbag = await Locations.create({
            locations
            
        })
        res.status(200).json({locationsbag})
    }
    catch(err){
        console.log(err)
    }
}
const updateLocations = async (req, res) => {
    const location = await Locations.findOneAndUpdate({_id:id},{
        ...req.body
    })
    res.status(200).json(location)

}


module.exports = {getLocations, updateLocations, createLocations}