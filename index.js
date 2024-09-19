

const express=require("express");
const app=express();
const mongoose = require("mongoose");
const bodyparser=require("body-parser")
//body-parser middleware
app.use(bodyparser.urlencoded({ extended:true }))
app.use(bodyparser.json())

const clgRoute=require("./routes/collegeRoute");

mongoose.connect("mongodb://127.0.0.1:27017/sakshidb").then(()=>{
    console.log("MongoDB Database successfully connected!!");
})
app.set("view engine","ejs");

app.use("/",clgRoute);
app.use("/about",clgRoute);
app.use("/course",clgRoute);
app.use("/faculty",clgRoute);
app.use("/contact",clgRoute);
app.use("/insert",clgRoute);

app.listen(8000,()=>{
    console.log("App Runs on 8000 port!!")

})


