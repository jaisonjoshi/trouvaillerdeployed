const mongoose=require('mongoose')
const Schema=mongoose.Schema


const reviewSchema=new Schema({
    reviewnote:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    place:{
        type:String,
        required:true
    },
    image:{
        type:[String]
    },
    rating:{
        type:Number,
        min:0,
        max:5
    }
    
   
    
    
   
   

},{timestamps:true})
//giving a name workout to schema  model
module.exports=mongoose.model('Review',reviewSchema)
