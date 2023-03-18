const express=require('express');
const app=express();
const port=3000;
//middleware
app.use(express.json());
app.set("view engine",'ejs');
app.get("/",(req,res)=>[
    res.render("home")
])
app.listen(process.env.PORT||port,()=>{
    console.log("server connected");
})