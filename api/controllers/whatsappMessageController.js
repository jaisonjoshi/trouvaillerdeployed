const axios = require('axios')
const mongoose=require('mongoose')
const Bid=require('../models/bidModel')
const Hotel=require('../models/hotelModel')
const User=require('../models/userModel')

require('dotenv').config()

const header = {
    headers:{
        Authorization: process.env.WHATSAPP_TOKEN,
        Accept: 'application/json'
    }
}
const sendMsg = async (destination) => {
    
    
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
                                                "text" : destination
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

const sendUsrMsg = async (userphone, destination) => {
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
                "text" : destination
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

const sendUsracceptedMsg = async (userphone) => {
    const body = { "messaging_product":  "whatsapp",
    "to":  "91"+ userphone,
    "type":  "template",
    "template": {  
        "name":  "sample_shipping_confirmation",
        "language": {  
            "code":  "en_US" 
        }
    
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
    sendUsrMsg,
    sendUsracceptedMsg
}