const axios = require('axios')
const mongoose=require('mongoose')
const Bid=require('../models/bidModel')
const Hotel=require('../models/hotelModel')
const User=require('../models/userModel')


const header = {
    headers:{
        Authorization: 'Bearer EAAJujYnp37kBAFopddcy89JZBujOBC82shN4aQQPQf2qZC9XGuF4fnrY7xbyhO8mBZCq8jdLT0ApOb47nZBlJ55sqg6kNIeYVkfLP9ZAlZCMLcJFafMrbr7094bvTdaIk9eihSVDSexZApxCed2VLI5F0ZBjyoe4hJDseAmE7XdAYTFV4ZBztrFl6HzQM8a0rfpDZAYUaJJXnXrwZDZD',
        Accept: 'application/json'
    }
}
const sendMsg = async (destination) => {
    console.log(destination,"ypu are seacrching for")
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
    
    }

    }
    
    const getVendorPhone = async () => {
        let vendorNums = [];
        const hote = await Hotel.find({ locations: { "$in" : [destination]} });
        console.log(hote,"set")
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
                    axios.post('https://graph.facebook.com/v15.0/103762359272731/messages',body, header)
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


module.exports = {
    sendMsg
}