const express=require('express');
const certificate_data =require( "./datas/certification.json");
const homedatas=require("./datas/home_datas.json");
const projects_data=require("./datas/projects.json");
const path=require("path");
const cors=require('cors');
require('dotenv').config({path:"./config.env"});
const {connectTodb,getDb} =require("./db");
const mongoose=require('mongoose');
const app=express();
const port=3000||process.env.port;
const db=require("./db")
//DB connection

connectTodb((err)=>{
  if(!err){
   
    db=getDb();
  }
});
////
 
app.listen(port,()=>{
    db.connectTodb(function(err){
        if(err)
            console.err(err);
        })
        console.log("server connected");
 
});
app.get("/my",(req,res)=>{
     let books=[];
     db.collection("beast").find()
      .forEach(element => {
        books.push(element);
    }) .then(()=>{
    res.status(200).json(books);
 })
  
})


//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/datas",express.static('datas'));
app.use('/stylesheet',express.static('stylesheet'));
//view engine specs
app.set("view engine",'ejs');

//varialbles
const name=homedatas.Name;
const bio=homedatas.bio;
const des=homedatas.des;
//http protoco;
app.get("/",(req,res)=>{
    res.render("home",{Name:name,bio:bio,des:des});
});

app.get("/certification",(req,res)=>[
    res.render("certification",{data:certificate_data,Name:name,bio:bio})
]);

app.get("/projects",(req,res)=>{
    res.render("projects",{data:projects_data,Name:name,bio:bio});
});
app.get("/about",(req,res)=>{
    res.render("about",{data:projects_data,Name:name,bio:bio});
});
//port specification
