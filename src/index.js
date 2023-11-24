import dotenv from "dotenv"
import mongoose from "mongoose";
import express from "express";
import connect_DB from "./db/index.js";

dotenv.config({
    path: './.env'
})

const app=express();

connect_DB();


