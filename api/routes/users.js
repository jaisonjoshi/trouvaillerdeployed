
const express=require('express');
const {
  updateUser,
  deleteUser,
  getUser,
  getUsers,countUsers,countVendors
} =require('../controllers/userController');
const { verifyAdmin, verifyToken, verifyUser } =require('../utils/verifyToken');
 
const router=express.Router();
//UPDATE
router.patch("/:id", updateUser);

//DELETE
router.delete("/:id", verifyUser, deleteUser);

//GET
router.get("/find/:id", getUser);
router.get("/countvendors", countVendors);
router.get("/countusers", countUsers);


//GET ALL
router.get("/", getUsers);

module.exports=router
