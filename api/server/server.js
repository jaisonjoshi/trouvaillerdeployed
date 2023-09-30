import express from 'express'
import fs from 'fs'
import path from 'path'
import React from 'react'
const ReactDOMServer = require('react-dom/server');
import App from '../src/App'
const mongoose=require('mongoose')
const Pack = require('./models/packageModel')

const app = express()

const PORT = 8080

require('dotenv').config()
const session = require("express-session");
const hotelRoutes=require('./routes/hotels')
const roomRoutes=require('./routes/rooms')
const bidRoutes=require('./routes/bids')
const packageRoutes = require('./routes/packages')
const reviewRoutes=require('./routes/reviews')
//const offerRoutes = require('./routes/offers')
const subscribeRoutes = require('./routes/subscribe')
const authRoutes=require('./routes/auth')
const userRoutes=require('./routes/users')
const locationsRoutes = require('./routes/locations')
const packlocationsRoutes = require('./routes/packlocations')
const interestRoutes = require('./routes/intrestData')
const cors = require('cors');
const cookieParser=require('cookie-parser')

app.use(cookieParser())


global.window ={}
app.use(express.json())

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(()=>{
        app.listen(8080, ()=> {
            console.log("server is up");
     })
           console.log("db is connected")})
    .catch((error)=>{
        console.log(error)
        process.exit(1)
    })


    app.use(cors({
        origin:["https://trouvailler.com","https://www.trouvailler.com", "https://admin.trouvailler.com","https://vendor.trouvailler.com", "http://localhost:3000"],
        methods:"GET,POST,PUT,DELETE,PATCH",
        credentials:true,
        exposedHeaders: ['Access-Control-Allow-Origin']
            }));


            app.use('/api/hotels',hotelRoutes)
            app.use('/api/subscribe',subscribeRoutes)

            app.use('/api/rooms',roomRoutes)
            app.use('/api/bids',bidRoutes)
            app.use('/api/packages', packageRoutes)
            app.use('/api/reviews',reviewRoutes)
            //app.use('/api/offers', offerRoutes)
            app.use('/api/auth',authRoutes)
            app.use('/api/user',userRoutes)
            app.use('/api/locations',locationsRoutes)
            app.use('/api/packlocations',packlocationsRoutes)
            app.use('/api/interests',interestRoutes)
            



app.get('/package/:id', async (req, res, next) => {
    const {id} = req.params
    const pack = await Pack.findOne({_id:id})
    console.log(pack)
    console.log(id)
    fs.readFile(path.resolve('../build/index.html'), 'utf-8', (err, data) => {
        if (err) {
            console.log(err)
            return res.status(500).send("something happened")
        }
        const [baseUrl, ...rest] = pack.images[0].split("/upload/");
        data = data.replace(/\$TITLE/g, pack.title)
        data = data.replace(/\$DESC/g, pack.description.split('.').slice(0, 2).join('. ')+ '.')
        data= data.replace(/\$URL/g, `https://trouvailler.com/product/package/${pack._id}`)
        data =data.replace(/\$IMGURL/g, `${baseUrl}/upload/c_fill,w_400/q_auto:good/${rest.join("/upload/")}`)
        return res.send(data.replace('<div id="root"></div>', `<div id="root">${ReactDOMServer.renderToString(<App />)}</div><script>
        window.initialData = ${JSON.stringify(pack)};
      </script>`))

    })
})
app.use(express.static(path.resolve(__dirname, '..', 'build'), {index:false}))

/* app.listen(PORT, ()=>{
    console.log('server up in 8080')
}) */