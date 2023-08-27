const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { OAuth2Client, UserRefreshClient } = require("google-auth-library");
const client = new OAuth2Client(process.env.CLIENT_ID);
const { body, validationResult } = require("express-validator");
var nodemailer = require('nodemailer');
const otpGenerator = require('otp-generator');
const crypto = require('crypto');

const { generateToken } = require("../utils/verifyToken");
const { default: mongoose } = require("mongoose");
//import { createError } from "../utils/error.js";
const LocalStorage = require("node-localstorage").LocalStorage,
  localStorage = new LocalStorage("./scratch");
// const passportLocalMongoose = require("passport-local-mongoose");
// const GoogleStrategy = require("passport-google-oauth20").Strategy;
// const findOrCreate = require("mongoose-findorcreate");

const register = async (req, res, next) => {
  try {
    const username_c = await User.findOne({ username: req.body.username });
    const email_c = await User.findOne({ email: req.body.email });
    
    if (email_c) {
      return res.status(405).json({ error: "Email already exists." });
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
    res.status(500).json({ error: "Sorry! An unexpected error occurred." });
  }
};
const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    //if (!user) return next(createError(404, "User not found!"));
    if (!user) return next(res.status(404).json({ error: "User not found" }));

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)
      //return next(createError(400, "Wrong password or username!"));
      return next(
        res.status(404).json({ error: "Wrong password" })
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
    res.status(500).json({ error: "server error" });
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

  try {

    const oldUser = await User.findOne({email: req.body.email})
    console.log(oldUser)
    if(!oldUser){
      const newDoc = new User(req.body);

        newDoc.save(function (err, savedDoc) {
          if (err) {
            // handle error
            res.status(502).json(err);
          } else {
            // The new document was saved
            //console.log("generate tokens and cookies here--new doc created and saved");
            const token = jwt.sign(
              {
                id: newDoc._id,
                isAdmin: newDoc.isAdmin,
                isVendor: newDoc.isVendor,
              },
              process.env.JWT
            );

            const { password, isAdmin, isVendor, ...otherDetails } =
              newDoc._doc;
            res
              .cookie("access_token", token, {
                httpOnly: true,
              })
              .status(200)
              .json({ details: { ...otherDetails }, isAdmin, isVendor });
          }
        });

    }
    else if(oldUser){
      oldUser.email = req.body.email;
        oldUser.google_id = req.body.google_id;
        oldUser.save(function (err, savedDoc) {
          if (err) {
            // handle error
            res.status(503).json(err);
          } else {
            // The existing document was updated
            //console.log("delete the updation code here and simply generate cookies");
            const token = jwt.sign(
              { id: oldUser._id, isAdmin: oldUser.isAdmin, isVendor: oldUser.isVendor },
              process.env.JWT
            );

            const { password, isAdmin, isVendor, ...otherDetails } = oldUser._doc;
            res
              .cookie("access_token", token, {
                httpOnly: true,
              })
              .status(200)
              .json({ details: { ...otherDetails }, isAdmin, isVendor });
          }
        });
    }


  }
   catch (error) {
    res.status(500).json(error);
  }
};

const logout =   (req, res) => {
  try{
  const maxAge = 0;
  const token = generateToken("2839373889", "logout");
  res.cookie("jwt", token, {
    httpOnly: true,
    maxAge: maxAge,
  });
  res.json({ message: "successfully logged out" });
  //sessionStorage.removeItem("user");
}

  catch (error) {
    res.status(500).json(error);
  }

  //res.redirect('/')
};

const forgotPassword = async (req,res) => {
  const {email} = req.body;
  try {
    const oldUser = await User.findOne({email})
    if(!oldUser){
      return res.json({status:"user not exist"})
    }
    const secret = process.env.JWT + oldUser.password;
    const token = jwt.sign({email:oldUser.email, id:oldUser._id}, secret,{expiresIn:"15m"})
    const link = `https://trouvailler.com/reset-password/${oldUser._id}/${token}}`;
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'jaisjoshi2001@gmail.com',
        pass: process.env.EMAIL_PASS
      }
    });
    
    var mailOptions = {
      from: 'jaisjoshi2001@gmail.com',
      to: oldUser.email,
      subject: 'Password reset',
      text: link
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
    res.json({status:"mail sent"})
  } catch (error) {
    
  }
}

const verifyResetPassword = async(req,res) => {
  const {id,token} = req.params;
  if(mongoose.Types.ObjectId.isValid(id)){
    const userid = mongoose.Types.ObjectId(id);
  }
  else{

    return res.send("Something happened. Please opt for a new password change request")
  }


  const oldUser = await User.findOne({_id: id});
 
  if(!oldUser){
    console.log("its perfect till now")
    return res.send("Something happened. Please opt for a new password change request")
  }
  const secret = process.env.JWT + oldUser.password;
  try {
    const verify =jwt.verify(token,secret)
    res.send("verified")
    
  } catch (error) {
    res.send("Link expired or you are not verified. Please opt for a new password change request")
  }
}

const resetPassword = async (req,res)=> {
 const {id,token} = req.params;
 const {newPassword} = req.body;
  if(mongoose.Types.ObjectId.isValid(id)){
    const userid = mongoose.Types.ObjectId(id);
  }
  else{

    return res.send("Something happened. Please opt for a new password change request")
  }


  const oldUser = await User.findOne({_id: id});
 
  if(!oldUser){
    console.log("its perfect till now")
    return res.send("Something happened. Please opt for a new password change request")
  }
  const secret = process.env.JWT + oldUser.password;
  try {
    const verify =jwt.verify(token,secret)
    const encryptedPassword = await bcrypt.hash(newPassword, 10);
    await User.updateOne(
      {
        _id:id
      },
      {
        $set:{
          password:encryptedPassword
        }
      }
    )    
    res.send("Password updated")
  } catch (error) {
    res.send("Link expired or you are not verified. Please opt for a new password change request")
  }
}


const sendVeificationMail =  async (req,res) => {
    const {email} = req.body;
    const oldUser = await User.findOne({email})
    if(oldUser){
      return res.status(405).json({status:"user already exist"})
    }
    const otpCode = otpGenerator.generate(6, { digits: true, lowerCaseAlphabets: false, upperCaseAlphabets: false, specialChars: false });
    const hashedOTP = crypto.createHash('sha256').update(otpCode).digest('hex');
    try {
      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'jaisjoshi2001@gmail.com',
          pass: process.env.EMAIL_PASS
        }
      });
      
      var mailOptions = {
        from: 'jaisjoshi2001@gmail.com',
        to: email,
        subject: 'Verify Email',
        text: `The OTP for verifying your email is ${otpCode} `
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          res.status(404).json({message:"Something happened. Please Check entered email and try again"})
        } else {
          res.status(200).json({status:hashedOTP})

        }
      });
    } catch (error) {
      res.send({status: "Something happened. Please try again"})
    }


}

module.exports = {
  register,
  login,
  logout,
  googlelogin,
  forgotPassword,
  resetPassword,
  verifyResetPassword, sendVeificationMail
  //verify,
};
