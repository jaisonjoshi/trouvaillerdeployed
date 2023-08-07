const PackLocations = require('../models/packLocMod')
const mongoose=require('mongoose')


const getPackLocations = async (req,res) => {
    try{
    const locations = await PackLocations.find({})
    res.status(200).json(locations)}
    catch(error){
        res.status(500).json({ error: 'Server Error' });
    }
}


const createPackLocations = async (req,res) => {
    const {locations} = req.body
    try{
        const locationsbag = await PackLocations.create({
            locations
            
        })
        res.status(200).json({locationsbag})
    }
    catch(err){
        //console.log(err)
        res.status(500).json({ error: 'Server Error' });
    }
}

const updatePackLocations = async (req, res) => {
    const id= req.params.id
    try{
        const { newLocation } = req.body;
        if (!newLocation) {
            return res.status(400).json({ error: 'New location is required.' });
          }
          const location = await PackLocations.findByIdAndUpdate(
            id,
            { $push: { locations: newLocation } }, // Use $push to add the new location to the locations array
            { new: true } // Return the updated document
          );
    res.status(200).json(location)
    }
    catch(error){
    res.status(500).json({ error: 'Server Error' });
        }

}

module.exports = {getPackLocations, createPackLocations, updatePackLocations}