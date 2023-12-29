const mongoose=require('mongoose')
const Schema=mongoose.Schema

const schedule = new Schema({
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
    locationTags:{
        type:[String]
    },
    duration:{
        type:String,
        required:true
    },
    durationText:{
        type:String,
        required:true

    },
    cheapestPrice:{
        type:Number,
        required:true
    },
    features:{
        type:[String],
        required:false
    } ,
    activities:{
        type:[String],
        required: false
    },
    offers:{
        type:Boolean,
        required:false,
        default:false,
    },
    offertitle:{
        type:String
    },
    offerdescription:{
        type:String
    },
    offerprice:{
        type:String
    },
    rating:{
        type:Number,
        min:0,
        max:6
    },
    images :{
        type:[String],
    },
    schedule : {
        type:[schedule],
        required: true
    },
    category : {
        type:String,
        required: false
    }
    
    
   
    
    
   
   

},{timestamps:true})
module.exports=mongoose.model('Package',packageSchema)
