const mongoose=require('mongoose')
const Schema=mongoose.Schema
const interestDataSchema=new Schema({
    name:{
        type:String,
        required:true
    },
     phone:{
        type:String,
        required:true
    }, 
   
     email:{
        type:String,
        required:false
    }, 
    destination:{
        type:[String],
        required:true
    }, 
    month:{
        type:[String]
        
    },
    noOfPeople: {
        type:String,
        required:true
    },
    travellingWith:{
        type:String,
        required:true
    },
    
    description:{
        type:[String],
        required:true

    },
    salaried:{
        type:String,
        
    }, 
    itr:{
        type:String,
        required:true
    },
    
    

},{timestamps:true})
//giving a name workout to schema  model
module.exports=mongoose.model('InterestData',interestDataSchema)
//featured:{
  //  type:Boolean,
    //default:false
//}
