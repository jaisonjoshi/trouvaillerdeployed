const express=require('express')
const { login,register,logout,googlelogin,verify
}=require('../controllers/authController.js')




const router = express.Router();

router.post("/register", register)
router.post("/login", login)
router.get("/logout",logout)
router.post("/googlelogin", googlelogin)
//router.post("/verify", verify)



module.exports=router