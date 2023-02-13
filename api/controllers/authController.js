const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require('dotenv').config();
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID);




const { generateToken } = require("../utils/verifyToken");
//import { createError } from "../utils/error.js";
const LocalStorage = require("node-localstorage").LocalStorage,
  localStorage = new LocalStorage("./scratch");
// const passportLocalMongoose = require("passport-local-mongoose");
// const GoogleStrategy = require("passport-google-oauth20").Strategy;
// const findOrCreate = require("mongoose-findorcreate");

const register = async (req, res, next) => {
  try {

    const username_c = await User.findOne({ username: req.body.username });
    const email_c = await User.findOne({ email: req.body.email});
    if(username_c)
    {
      return res.status(403).json({error:'Username cannot be same'})  
    }
    if(email_c)
    {
      return res.status(405).json({error:'Email cannot be same'})  
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    // User.plugin(passportLocalMongoose);
    // User.plugin(findOrCreate);

    const newUser = new User({
      ...req.body,
      password: hash,
    });
    //google
    // passport.use(newUser.createStrategy());passport.serializenewUser(function(user, done) {
    //   done(null, user.id);
    // });passport.deserializenewUser(function(id, done) {
    //   newUser.findById(id, function(err, user) {
    //     done(err, user);
    //   });
    // });passport.use(new GoogleStrategy({
    //     clientID: process.env.CLIENT_ID,
    //     clientSecret: process.env.CLIENT_SECRET,
    //     callbackURL: "http://localhost:8080/auth/google/callback",
    //     userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
    //   },
    //   function(accessToken, refreshToken, profile, cb) {
    //     newUser.findOrCreate({ googleId: profile.id, username: profile.id }, function (err, user) {
    //       return cb(err, user);
    //     });
    //   }
    // ));
    //

    await newUser.save();
    res.status(200).send("User has been created.");
  } catch (err) {
 
          res.status(500).json({error: "Sorry! An unexpected error occurred."})

  }
};
const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    //if (!user) return next(createError(404, "User not found!"));
    if (!user) return next(res.status(404).json({ error: "User not found" }));

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)
      //return next(createError(400, "Wrong password or username!"));
      return next(
        res.status(404).json({ error: "Wrong password or username!" })
      );

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin, isVendor: user.isVendor },
      process.env.JWT
    );

    const { password, isAdmin, isVendor, ...otherDetails } = user._doc;
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ details: { ...otherDetails }, isAdmin, isVendor });
  } catch (error) {
    res.status(500).json({ error: "server error" })
  }
};

// const verify = async (req,res,next)=>{//

 

//   const ticket = await client.verifyIdToken({
//       idToken: token,
//       audience: process.env.CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
//       // Or, if multiple clients access the backend:
//       //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
//   });
//   const payload = ticket.getPayload();
//   const userid = payload['sub'];
//   // If request specified a G Suite domain:
//   // const domain = payload['hd'];

// //verify().catch(console.error);


// }

const googlelogin = async (req, res, next) => {
 
 

      //update user or create
	try {
	const updatedUser = await User.findOneAndUpdate(
    { google_id: req.body.google_id },
	{ $set:req.body	},
  { upsert: true, new: true },
	);
	//res.status(200).json(updatedUser);
  if (!updatedUser) return next(res.status(404).json({ error: "User not found" }));
	

  const token = jwt.sign(
    { id: updatedUser._id, isAdmin: updatedUser.isAdmin, isVendor: updatedUser.isVendor },
    process.env.JWT
  );

  const { google_id, isAdmin, isVendor, ...otherDetails } = updatedUser._doc;
  res.cookie("access_token", token, {
      httpOnly: true,
    }).status(200).json({ details: { ...otherDetails }, isAdmin, isVendor,google_id });
  }

	catch (err) {
	res.status(500).json(err);
	}
  //login automatically and navigate to home upon success
    }
  

 
  //   


const logout = (req, res) => {
  const maxAge = 0;
  const token = generateToken("2839373889", "logout");
  res.cookie("jwt", token, {
    httpOnly: true,
    maxAge: maxAge,
  });
  res.json({ message: "successfully logged out" });
  localStorage.removeItem("user");

  //res.redirect('/')
};


module.exports = {
  register,
  login,
  logout,
  googlelogin,
  //verify,
};
