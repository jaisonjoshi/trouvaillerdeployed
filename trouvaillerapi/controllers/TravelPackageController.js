const mongoose = require('mongoose')
const TravelPackages = require('../models/travelPackages')
const Packages = require('../models/packageModel')


//Data migration Function - only use this for developemnt purpose and this function directly interacts with data. so careful
const createdb = async (req,res) => {
    const existingPackages = await  Packages.find({})
    existingPackages.map(async (item,ind)=>{
        
        const newpack = {
            uploaded: false,
            title:"",
            
        }
        newpack.title = item.title
        newpack.titleImage = item.images[0]
        newpack.images = item.images.slice(1)
        newpack.shortDescription = ""
        newpack.descriptionTitle = ""
        newpack.description = item.description
        newpack.price = item.cheapestPrice
        newpack.duration = item.duration
        newpack.shortDuration = ""
        newpack.category = item.category
        newpack.location = item.location
        newpack.locationTags = []
        newpack.schedule = item.schedule
        newpack.seo = {
            title:"",
            description:"",
            keywords:""
          }
        newpack.cardTags = {
            cardTag1:"",
            cardTag2:""
          }
        newpack.activities = []
        newpack.places = []
        newpack.featured = {
            featured: false,
            order:0
        }
        newpack.inclusions = []
        newpack.exclusions = []
        await TravelPackages.create(newpack)
        console.log(ind)
    })
} 



const getPackages =  async (req, res) => {
    const {uploaded} = req.query
     const query = {}
    if(uploaded) query.uploaded = uploaded;
    const packages =  await TravelPackages.find(query)
    res.status(200).json(packages)
}
const getPackage = async(req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such package exists'})
    }
    const pack=await TravelPackages.findById(id)
    if(!pack){
        return res.status(404).json({error:'No such package found'})
    }

  res.status(200).json(pack)
}

const createPackage = async (req, res) => {
    
    try {
        const package = await TravelPackages.create(req.body)
        res.status(200).json(package)

    } catch (error) {
        
    }
}

const updatePackage = async (req,res)=>{
    console.log("hello there")
    const {id}=req.params
    console.log(req.body)
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such Pacakge to delete'})
    }
    try{
    const pack = await TravelPackages.findOneAndUpdate({_id:id},{
        ...req.body
    })
    
    if(!pack){
        return res.status(400).json({error:'No such package found'})  
    }
    res.status(200).json(pack)
    }
    catch(error){
        res.status(500).json({ error: "server error" });
    }

}

module.exports = {createPackage,getPackages,createdb, getPackage, updatePackage}