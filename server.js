const express = require("express");//import express
const app = express()//create ab express app
const PORT = 3000;

app.get("/",(req,res)=>{
  res.json("hi");
})

app.listen(PORT,()=>{
    console.log("hello 3000");
})