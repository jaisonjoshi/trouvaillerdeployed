const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const app = express();
require('dotenv').config()

app.use(express.json())
app.use(cookieParser());




const packagelocationsRoutes = require('./routes/packageLocations')
const packageRoutes = require('./routes/packages')


app.use(cors({
    origin: ["https://trouvailler.com", "https://www.trouvailler.com", "https://admin.trouvailler.com", "https://vendor.trouvailler.com", "http://localhost:3000"],
    methods: "GET,POST,PUT,DELETE,PATCH",
    credentials: true,
    exposedHeaders: ['Access-Control-Allow-Origin']
}));



mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(8080, () => {
            console.log("server is up");
        })
        console.log("db is connected")
    })
    .catch((error) => {
        console.log(error)
        process.exit(1)
    })


    app.use('/api/packagelocations',packagelocationsRoutes)
    app.use('/api/packages', packageRoutes)

