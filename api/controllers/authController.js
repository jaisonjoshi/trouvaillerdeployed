const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const {generateToken}=require('../utils/verifyToken')
//import { createError } from "../utils/error.js";
const LocalStorage = require('node-localstorage').LocalStorage,
localStorage = new LocalStorage('./scratch');

const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      ...req.body,
      password: hash,
    });

    await newUser.save();
    res.status(200).send("User has been created.");
  } catch (err) {
    next(err);
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
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT
    );

    const { password, isAdmin, ...otherDetails } = user._doc;
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ details: { ...otherDetails }, isAdmin });
  } catch (err) {
    next(err);
  }
};
const logout =  (req, res) => {
  const maxAge=0;
  const token=generateToken("2839373889","logout")
	res.cookie('jwt',token,{
    httpOnly:true,
    maxAge:maxAge,
  });
  res.json({message:"successfully logged out"})
  localStorage.removeItem("user");

	//res.redirect('/')
  };
module.exports = {
  register,
  login,
  logout
};
