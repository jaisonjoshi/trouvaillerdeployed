require('dotenv').config()


const express=require('express')
const mongoose=require('mongoose')
const {createServer} = require("http")

const hotelRoutes=require('./routes/hotels')
const roomRoutes=require('./routes/rooms')
const bidRoutes=require('./routes/bids')
const packageRoutes = require('./routes/packages')
const reviewRoutes=require('./routes/reviews')
//const offerRoutes = require('./routes/offers')
const authRoutes=require('./routes/auth')
const userRoutes=require('./routes/users')
const locationsRoutes = require('./routes/locations')
const cookieParser=require('cookie-parser')

const cors = require('cors');


const app=express()


app.use(cookieParser())
const httpServer = createServer(app);



app.use(express.json())

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(()=>{
        httpServer.listen(8080, ()=> {
            console.log("server is up");
     })
           console.log("db is connected")})
    .catch((error)=>{
        console.log(error)
        process.exit(1)
    })

app.use(cors({credentials:true}));

app.use('/api/hotels',hotelRoutes)
app.use('/api/rooms',roomRoutes)
app.use('/api/bids',bidRoutes)
app.use('/api/packages', packageRoutes)
app.use('/api/reviews',reviewRoutes)
//app.use('/api/offers', offerRoutes)
app.use('/api/auth',authRoutes)
app.use('/api/user',userRoutes)
app.use('/api/locations',locationsRoutes)
