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
    try{
    const location = await PackLocations.findOneAndUpdate({_id:id},{
        ...req.body
    })
    res.status(200).json(location)
    }
    catch(error){
    res.status(500).json({ error: 'Server Error' });
        }

}

module.exports = {getPackLocations, createPackLocations, updatePackLocations}