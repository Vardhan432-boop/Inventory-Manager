import mongoose from "mongoose";
const ItemSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
    },
    quantity:{
        type:Number,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    }
},
 {
    timestamps:true
 }
)
const itemSchema=mongoose.model("item",ItemSchema);
export default itemSchema;