const mongoose=require('mongoose')
const Schema=mongoose.Schema
const locationSchema = new Schema({
    locations:{
        type: [String],
    }
})

module.exports = mongoose.model('Locations', locationSchema)
