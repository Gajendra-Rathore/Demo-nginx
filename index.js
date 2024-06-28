import express from 'express';

const app = express();

app.get("/",(req,res)=>{
    res.send("Hello, world!");
})

app.get("/api",(req,res)=>{
    res.json({success:true})
})

app.listen(3000,()=>{
    console.log("listening on port 3000");
})