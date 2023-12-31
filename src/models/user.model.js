import mongoose,{Mongoose, Schema} from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema=new Schema({
             fullName:{
                type:String,
                required:true,
                trim:true,
                index:true
             },
             phone:{
                 type:Number,
                 required:true,
             },
             email:{
                type:String,
                lowercase:true,
                trim:true,
             },
             visitHistory:[
                {
                  type:Schema.Types.ObjectId,
                  ref:"Car" 
                }
            ],
             password:{
                type:String,
                required:[true , "Password is required"],
             },
             refreshToken:{
                type:String
             }
},

{
    timestamps:true 
}

);


userSchema.pre("save", async function (next){
      if(!this.isModified("password"))  return next(); // will make sure every time pass is not getting encrypted
      this.password=bcrypt.hash(this.password, 10);
      next();
});

userSchema.methods.isPasswordCorrect=async function(password){
   return await bcrypt.compare(password, this.password);
}

userSchema.methods.generateAccessToken= function(){
     return jwt.sign(
        {
           _id:   this._id,
           email: this.email,
           fullName:  this.fullName,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
           expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
        }
     )
}

userSchema.methods.generateRefreshToken= function(){
   return jwt.sign(
      {
         _id:   this._id,
      },
      process.env.REFRESH_TOKEN_SECRET,
      {
         expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
      }
   )
}


const User=mongoose.model("User",userSchema);
export {User};