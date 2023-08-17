const express=require('express')
const { login,register,logout,googlelogin,verify, forgotPassword, resetPassword, verifyResetPassword
}=require('../controllers/authController.js')




const router = express.Router();

router.post("/register", register)
router.post("/login", login)
router.get("/logout",logout)
router.post("/googlelogin", googlelogin)
router.post('/forgotPassword',forgotPassword)
router.get('/resetpassword/:id/:token', verifyResetPassword)

router.post('/resetpassword/:id/:token', resetPassword)

//router.post("/verify", verify)



module.exports=router