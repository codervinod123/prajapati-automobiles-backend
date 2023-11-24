import mongoose, { mongo } from "mongoose";
import { DB_NAME } from "../constants.js";


const connect_DB=async()=>{
     try {
        const connectionInstance=mongoose.connect("mongodb+srv://vinodpvp9369:Msmmv@123@cluster0.qzzmt3a.mongodb.net/prajapatiautomobiles");
        console.log("Connected succesfully d");
     } catch (error) {
          console.log(error);
          process.exit(1);
     }
}

export default connect_DB