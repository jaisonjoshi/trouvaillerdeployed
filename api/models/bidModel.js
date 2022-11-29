const mongoose=require('mongoose')
const Schema=mongoose.Schema
const Accepted = new Schema({
    vendorname:{type:String,},vendorid:{type:String},vendoremail:{type:String},vendorphone:{type:String}
})
const bidSchema=new Schema({
    destination:{
        type:String,
        required:true
    },
    categories:{
        type:String,
        required:true
    },
    ac:{
        type:String,
        required:true
    },
    checkIn:{
        type:String,
        required:true
    },
    checkOut:{
        type:String,
        required:true
    },
    accomodation:{
        type:Number,
        required:true
    },
    roomCount:{
        type:Number,
        required:true
        
    },
    maxAmount: {
        type:Number,
        required:true
    },
    accepted : {
        type: [Accepted],
        
    },
    username:{
        type:String,
        default:true
    },
    userid: {
        type:String,
        default:true
    },
    useremail:{
        type:String,
        default:true
    },
    userphone:{
        type: String,
        default:true
    }
},{timestamps:true})
//giving a name workout to schema  model
module.exports=mongoose.model('Bid',bidSchema)
//featured:{
  //  type:Boolean,
    //default:false
//}