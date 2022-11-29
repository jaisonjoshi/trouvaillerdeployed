const jwt=require('jsonwebtoken')


//import { createError } from "../utils/error.js";

 const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    //return next(createError(401, "You are not authenticated!"));
    return next(res.status(401).json({error:'You are not authenticated!'}))
  }

  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return next(res.status(403).json({error:'Token is not valid!'}))
    //if (err) return next(createError(403, "Token is not valid!"));
    req.user = user;
    next();
  });
};

 const verifyUser = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return next(res.status(403).json({error:'You are not authorised!'}));
    }
  });
};

 const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return next(res.status(403).json({error:'You are not authorised!'}));
    }
  });
};


const generateToken = (id,role) => {
  const maxAge =  24 * 60;
  return jwt.sign({ id,role }, process.env.JWT, {
    expiresIn: maxAge,
  });
};

module.exports={
  verifyToken ,verifyUser,verifyAdmin,generateToken
}