import mongoose,{Schema} from "mongoose";

const userSchems=Schema({

});

const User=mongoose.model("User",userSchems);
export default userSchems;