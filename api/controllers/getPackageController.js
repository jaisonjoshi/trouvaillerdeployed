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
        return res.send(data)

    })


}


module.exports = {getPackagePage}