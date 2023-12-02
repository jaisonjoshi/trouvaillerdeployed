const mongoose = require('mongoose');
const Schema = mongoose.Schema


const packageLocationSchema = new Schema({
    location:{
        type:String
    }
})

module.exports = mongoose.model('PackageLocations', packageLocationSchema)
