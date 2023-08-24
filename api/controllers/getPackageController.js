import React from 'react';
import fs from 'fs'
import path from 'path';
const ReactDOMServer = require('react-dom/server');
const App = require('../client/src/App').default
const Package = require('../models/packageModel')
const mongoose = require('mongoose')



const getPackagePage = async (req,res)=>{
    const {id} = req.params;
    const pack = await Package.findOne({_id: id})
    const reactApp = ReactDOMServer.renderToString(<App />)
    console.log(reactApp)
    const templateFile = path.resolve('./client/build/index.html')
    fs.readFile(templateFile, 'utf-8', (err, data)=>{
        console.log(data)
        if(err){
            return res.send("error")
        }
        data = data.replace('<div id="root"></div>', `<div id="root">${reactApp}</div>`)
        data =  data.replace(/\$TITLE/g, pack.title)
        data =  data.replace(/\$DESC/g, pack.description.split('.').slice(0, 2).join('. ') + '.')
        data =  data.replace(/\$URL/g, `https://trouvailler.com/product/package/${pack._id}`)
        data =  data.replace(/\$IMGURL/g, pack.images[0])


        return res.send(data)

    })


}


module.exports = {getPackagePage}