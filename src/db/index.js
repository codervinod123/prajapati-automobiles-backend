import mongoose, { mongo } from "mongoose";
import { DB_NAME } from "../constants.js";

const connect_DB=async()=>{
     console.log("Hello from backend connection")
     try {
          const connectingInstance=await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
          console.log("Connected successfully");
      } catch (error) {
            console.log(error)
            process.exit(1);
      }
}

export default connect_DB