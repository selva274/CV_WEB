const express=require('express');
const certificate_data =require( "./datas/certification.json");
const homedatas=require("./datas/home_datas.json");
const projects_data=require("./datas/projects.json");
const app=express();
const port=3000;
//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/datas",express.static('datas'));

app.set("view engine",'ejs');
//http protoco;
app.get("/",(req,res)=>{
    res.render("home",{data:homedatas});
});

app.get("/certification",(req,res)=>[
    res.render("certification",{data:certificate_data})
]);

app.get("/projects",(req,res)=>{
    res.render("projects",{data:projects_data});
})
//port specification
app.listen(process.env.PORT||port,()=>{
    console.log("server connected");
});