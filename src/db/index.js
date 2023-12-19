import mongoose, { mongo } from "mongoose";
import { DB_NAME } from "../constants.js";

const connect_DB=async()=>{
      try {
          
            const connectioninstance=await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
            console.log("Connected Successfully");

      } catch (error) {
          
            console.error("Database can't connect successfully",error);
            process.exit(1);

      }
}

export default connect_DB;