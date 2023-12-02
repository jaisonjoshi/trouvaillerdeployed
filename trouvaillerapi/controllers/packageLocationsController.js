const PackageLocations = require('../models/packageLocationsModel')



const getPackageLocations = async (req,res) => {
    try {
        const searchText =  req.query.location;

        const locations = await PackageLocations.find({location: new RegExp(searchText, 'i')}).exec();
        res.status(200).json(locations)
        
    } catch (error) {
        res.status(500).json({ error: 'Server Error' });

    }
}

module.exports = {getPackageLocations}