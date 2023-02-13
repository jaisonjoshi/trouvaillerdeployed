const Locations = require('../models/locationModel')
const mongoose=require('mongoose')


const getLocations = async (req,res) => {
    try{
    const locations = await Locations.find({})
    res.status(200).json(locations)}
    catch(error){
        res.status(500).json({ error: 'Server Error' });
    }
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
        //console.log(err)
        res.status(500).json({ error: 'Server Error' });
    }
}
const updateLocations = async (req, res) => {
    try{
    const location = await Locations.findOneAndUpdate({_id:id},{
        ...req.body
    })
    res.status(200).json(location)
    }
    catch(error){
    res.status(500).json({ error: 'Server Error' });
        }

}


module.exports = {getLocations, updateLocations, createLocations}