const mongoose=require('mongoose')
const Schema=mongoose.Schema

const Shedule = new Schema({
    dayTitle :{
        type:String,
        required:true
    },
    dayDesc:{
        type: String,
        required: true
    }
})

const packageSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    duration:{
        type:String,
        required:true
    },
    cheapestPrice:{
        type:String,
        required:true
    },
    features:{
        type:[String],
        required:false
    } ,
    offers:{
        type:Boolean,
        required:false
    },
    rating:{
        type:Number,
        min:0,
        max:5
    },
    images :{
        type:[String],
    },
    shedule : {
        type:[Shedule],
        required: true
    }
    
    
   
    
    
   
   

},{timestamps:true})
//giving a name workout to schema  model
module.exports=mongoose.model('Package',packageSchema)
//featured:{
  //  type:Boolean,
    //default:false
//}
