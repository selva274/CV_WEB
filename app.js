const express=require('express');
const certificate_data =require( "./datas/certification.json");
const homedatas=require("./datas/home_datas.json");
const projects_data=require("./datas/projects.json");
const path=require("path");
const app=express();
const port=3000;
//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/datas",express.static('datas'));
app.use('/stylesheet',express.static('stylesheet'))

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
})
//port specification
app.listen(process.env.PORT||port,()=>{
    console.log("server connected");
});