const clgModel = require("../models/collegeModel");
const homePage=(req,res)=>{
    res.render("home");
}
const aboutPage=(req,res)=>{
    res.render("about");
}
const coursePage=(req,res)=>{
    res.render("course");
}
const facultyPage=(req,res)=>{
    res.render("faculty");
    }
const contactPage=(req,res)=>{
    res.render("contact");
}
const insertPage=(req,res)=>{
    res.render("insert");
}
const dataSave=(req,res)=>{
    const {rno,nm,ct,fs}=req.body;

    const mydata=new clgModel({
        rollno:rno,
        name:nm,
        city:ct,
        fees:fs
    })
    mydata.save();
        res.render("insert");
}
module.exports={
    homePage,
    aboutPage,
    coursePage,
    facultyPage,
    contactPage,
    insertPage,
    dataSave
}