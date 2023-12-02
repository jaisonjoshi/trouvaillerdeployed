const mongoose=require('mongoose')

const Schema=mongoose.Schema

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    img: {
      type: String,
    },
     google_id: {
      type: String,
      default:"none"
    },
    phone: {
      type: String,
      required: true,
    },
     password: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    }, 
    isVendor: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports=mongoose.model('User',UserSchema)
