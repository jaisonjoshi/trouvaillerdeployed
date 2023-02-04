require('dotenv').config()


const express=require('express')
const mongoose=require('mongoose')
const {createServer} = require("http")

//
const session = require("express-session");
//const passport = require("passport");
// const passportLocalMongoose = require("passport-local-mongoose");
// const GoogleStrategy = require("passport-google-oauth20").Strategy;
// const findOrCreate = require("mongoose-findorcreate");
//

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

//google
// app.use(session({
//     secret: "Our little secret.",
//     resave: false,
//     saveUninitialized: false
//   }));app.use(passport.initialize());
//   app.use(passport.session());
//

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

   // mongoose.set("useCreateIndex", true);

app.use(cors({
    origin:["https:trouvailler.com", "https://admin.trouvailler.com"],
    methods:"GET,POST,PUT,DELETE,PATCH",
    credentials:true}));
// app.get("/auth/google",
//   passport.authenticate("google", { scope: ["profile"] })
// );
// app.get("/auth/google/callback",
//   passport.authenticate("google", { failureRedirect: "http://localhost:3000" }),
//   function(req, res) {
//     // Successful authentication, redirect secrets.
//     res.redirect("http://localhost:3000")}
// );

app.use('/api/hotels',hotelRoutes)
app.use('/api/rooms',roomRoutes)
app.use('/api/bids',bidRoutes)
app.use('/api/packages', packageRoutes)
app.use('/api/reviews',reviewRoutes)
//app.use('/api/offers', offerRoutes)
app.use('/api/auth',authRoutes)
app.use('/api/user',userRoutes)
app.use('/api/locations',locationsRoutes)
