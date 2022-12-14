const mongoose=require('mongoose')
const Schema=mongoose.Schema
const hotelSchema=new Schema({
    title:{
        type:String,
        required:true
    },
     type:{
        type:String,
        required:true
    }, 
   
     address:{
        type:String,
        required:true
    }, 
    rooms:{
        type:[String],
        required:true
    }, 
    images:{
        type:[String]
        
    },
    description: {
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    locations:{
        type:[String],
        required:true

    },
    rating:{
        type:Number,
        min:0,
        max:5
    }, 
    cheapestPrice:{
        type:Number,
        required:true
    },
     facilities:{
        type:[String],
        required:false
    } ,
    features:{
        type:[String],
        required:false
    },
    vendorid: {
        type:String

    }

},{timestamps:true})
//giving a name workout to schema  model
module.exports=mongoose.model('Hotel',hotelSchema)
//featured:{
  //  type:Boolean,
    //default:false
//}
