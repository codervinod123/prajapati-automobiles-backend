import mongoose,{Mongoose, Schema} from "mongoose";

const userSchems=new Schema({
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

const User=mongoose.model("User",userSchems);
export {User};