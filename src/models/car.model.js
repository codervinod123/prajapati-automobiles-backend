import mongoose,{Schema} from "mongoose";

const carSchema=new Schema({
            
    title:{
        type:String,
        required:true   
    },
    carImages:[
        {
            type:String,  //will upload images on cloudinary
            required:true
        }
    ],
    fuelType:{
        type:String,
        required:true,
        default:"Diesel" 
    },
    transmission:{
        type:String,
        required:true,
        default:"Manual"  
    },
    drivenKM:{
         type:Number,
         required:true,
         default:0
    },
    testDrive:{
        type:Boolean,
        default:true
    },
    price:{
        type:Number,
        required:true
    },
    model:{
        type:Number,
        required:true
    },
    regYear:{
        type:Number,
        required:true
    },
    ownerNumber:{
        type:Number,
        required:true
    },
    insauranceVal:{
        type:Number
    },
    location:{
        type:String,
        required:true
    },
    color:{
        type:String,
        required:true
    },
    carCondition:[
        {
         type:String,
         required:true
        }
    ]



},
{
    timestamps:true
}
)


const Car=mongoose.model("Car",carSchema);
export {Car};