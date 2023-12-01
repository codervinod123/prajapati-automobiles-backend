import dotenv from "dotenv"
import express from "express";
import connect_DB from "./db/index.js";

dotenv.config({
    path: './.env'
})

const app=express();
const PORT =process.env.PORT || 3000;
connect_DB()
.then(()=>{
     app.listen(PORT,()=>{
         console.log(`Hello from index src ${PORT}`)
     })
})
.catch((error)=>{
    console.log("Error has occured",error)
})



