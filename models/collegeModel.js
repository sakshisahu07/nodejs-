
const mongoose=require("mongoose");

const clgSchema=new mongoose.Schema({
    rollno:Number,
    name:String,
    city:String,
    fees:Number
})

module.exports=mongoose.model("college",clgSchema);