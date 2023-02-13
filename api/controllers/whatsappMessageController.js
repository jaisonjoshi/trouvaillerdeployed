const axios = require('axios')
const mongoose=require('mongoose')
const Bid=require('../models/bidModel')
const Hotel=require('../models/hotelModel')
const User=require('../models/userModel')


const header = {
    headers:{
        Authorization: 'Bearer EAAMkPj4omZCIBAApZCCLnV1qKpfDgAqOdZAT5s9anfWVfN5AO4jby7BwRul8ZB4ZAGFxnXfcnazNGtzeaZAmRj9ZCZCCH1IszaE0zHKMyLQ8EWLVHmVvZCoYxUlimwWmi7SRlmQitN4QZB6aUbb3tPHVsOmM2zow7pxkVZCCS75e2nniz5vVpjeZCaZC7',
        Accept: 'application/json'
    }
}
const sendMsg = async (destination) => {
<<<<<<< HEAD
    //console.log(destination,"ypu are seacrching for")
    const body = { "messaging_product":  "whatsapp",
    "to":  "919562523642",
    "type":  "template",
    "template": {  
        "name":  "sample_shipping_confirmation",
        "language": {  
            "code":  "en_US" 
         }, 
         "components":[{
            "type": "body",
            "parameters":[
            {
                "type": "text",
                "text" : "h"
            }
        ]
    } ]
=======
>>>>>>> 1cab1a8f5fb5bb957d54471a0822a730f3bfbec0
    
    
    const getVendorPhone = async () => {
        let vendorNums = [];
        const hote = await Hotel.find({ locations: { "$in" : [destination]} });
        //console.log(hote,"set")
        await Promise.all(hote.map((h)=>{
            User.findById(h.vendorid).then((res)=>{
                if(!vendorNums.includes(res.phone)){
                    vendorNums.push(res.phone)
                    const body = { "messaging_product":  "whatsapp",
                                    "to":  "91"+ res.phone,
                                    "type":  "template",
                                    "template": {  
                                        "name":  "sample_shipping_confirmation",
                                        "language": {  
                                            "code":  "en_US" 
                                        }, 
                                        "components":[{
                                            "type": "body",
                                            "parameters":[
                                            {
                                                "type": "text",
                                                "text" : "hello"
                                            }
                                        ]
                                    } ]
                                    
                                    }

                                    }
                    
                    axios.post('https://graph.facebook.com/v15.0/107724862224943/messages',body, header)
                    .then((res)=> (
                        console.log("msg success", res)
                    ))
                    .catch((err)=> (
                        console.log("error happened",err)
                    ))
                }
            })
        }))
       

       


    }
    getVendorPhone();
   
    
}

const sendUsrMsg = async (userphone) => {
    const body = { "messaging_product":  "whatsapp",
    "to":  "91"+ userphone,
    "type":  "template",
    "template": {  
        "name":  "sample_shipping_confirmation",
        "language": {  
            "code":  "en_US" 
        }, 
        "components":[{
            "type": "body",
            "parameters":[
            {
                "type": "text",
                "text" : "hello"
            }
        ]
    } ]
    
    }

    }
    axios.post('https://graph.facebook.com/v15.0/107724862224943/messages',body, header)
                    .then((res)=> (
                        console.log("msg success", res)
                    ))
                    .catch((err)=> (
                        console.log("error happened",err)
                    ))
}
module.exports = {
    sendMsg,
    sendUsrMsg
}