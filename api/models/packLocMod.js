const mongoose=require('mongoose')
const Schema=mongoose.Schema

const packLocScheme = new Scheme({
    locations:{
        type:[String]
    }
})

module.exports = mongoose.model('PackLocations', packLocScheme)
