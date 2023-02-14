const Hotel=require('../models/hotelModel')

const Bid=require('../models/bidModel')
const mongoose=require('mongoose')
const {sendMsg, sendUsrMsg, sendUsracceptedMsg} = require(
    './whatsappMessageController'
)
//get all bids
//inside 'find' you can pass params if you need filtered result
const getBids=async(req,res)=>{
    const bid=await Bid.find(req.query).sort({createdAt:-1})
res.status(200).json(bid)
}


const getVendorBids = async (req,res)=> {
    let {vendorid, ...others} = req.query;
    const query = {}

    if(vendorid) query.vendorid = vendorid;
    const hotels = await Hotel.find(query);
    console.log(hotels)
    const vendorLocations = [];
    await Promise.all(hotels.map((hotel)=> {
        if(hotel.locations.length !== 0){
            hotel.locations.map((itm)=>{
                if(!vendorLocations.includes(itm)){
                    vendorLocations.push(itm)

                }
            })
        }
    }))
    console.log(vendorLocations)
    const bids = await Bid.find({destination : {$in : vendorLocations}})
    console.log(bids)
    res.status(200).json(bids)

   

}
//get a single bid
const getBid=async(req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such bid exists'})
    }
    const bid=await Bid.findById(id)
    if(!bid){
        return res.status(404).json({error:'No such hotel found'})
    }

  res.status(200).json(bid)
}

//create a single bid--changes with params
const createBid=async (req,res)=>{
    const {destination,
        categories,
        ac,
        checkIn,
        checkOut,
        accomodation,
        roomCount,
        maxAmount,
        accepted,acceptedCount,
        username,useremail,userid,userphone,closed

}=req.body
    //add to db
    try{
    
    const bid=await Bid.create({
        destination,
        categories,
        ac,
        checkIn,
        checkOut,
        accomodation,
        roomCount,
        maxAmount,closed,acceptedCount,
        accepted,username,useremail,userid,userphone})
        sendMsg(req.body.destination)
        sendUsrMsg(req.body.userphone, req.body.destination)

    res.status(200).json({bid})
    console.log("succedded whatsapp")

}
   
    //res.json({mssg:'post a new workouts'})
    catch(error){
        res.status(500).json({error:error.message})
    }
}

//delete a bid
const deleteBid=async (req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such bid to delete'})
    }
    const bid=await Bid.findOneAndDelete({_id:id})
    if(!bid){
        return res.status(400).json({error:'No such bid found'})  
    }
    res.status(200).json(bid)
}

//update a workout
const updateBid=async (req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such hotel to delete'})
    }
    const bid=await Bid.findOneAndUpdate({_id:id},{
        ...req.body
    })
    if(req.body.accepted){
        sendUsracceptedMsg(req.body.userphone)
    }
    if(!bid){
        return res.status(400).json({error:'No such hotel found'})  
    }
    res.status(200).json(bid)
}
//exports
module.exports={
    createBid,
    getBid,
    getBids,
    deleteBid,
    updateBid,
    getVendorBids
}