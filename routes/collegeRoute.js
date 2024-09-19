

const express=require("express");
const route=express.Router();

const clgController=require("../controllers/collegeController");

route.get("/",clgController.homePage);
route.get("/about",clgController.aboutPage);
route.get("/course",clgController.coursePage);
route.get("/faculty",clgController.facultyPage);
route.get("/contact",clgController.contactPage);
route.get("/insert",clgController.insertPage);
route.post("/datasave",clgController.dataSave);

module.exports=route;

