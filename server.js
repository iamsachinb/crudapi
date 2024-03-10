const express = require("express");//import express
const mongoose = require("mongoose");
const product = require("./models/productModel");

const app = express()//create ab express app
app.use(express.json())//a middleware to use json files by our app we get from req.body
const PORT = 7000;
mongoose.connect("mongodb+srv://notimetostudy2003:cWAY2wTFnQSTsd0m@sachinapi.sma7zdn.mongodb.net/sachinapi?retryWrites=true&w=majority&appName=sachinapi")
//here between <password> put password remove the tag symbol as well
//if there is any error then this is due to incorrect passwordd
//also if u change password in mongoose atlas then dont forget to save the changes before trying thzat in code
.then(()=>{
    console.log("connected to mongodb");
    app.listen(PORT,()=>{
        
        //1st connect to db then connect to the app
    })
}).catch((error)=>{
    console.log(error);
})
app.get("/",(req,res)=>{
  res.json("docker volumes changed along with the problems solved");
})

//get specific prodyuct
app.get("/products/:id",async(req,res)=>{
    try{
    const {id} = req.params;
    const productss = await product.findById(id);
    res.json(productss);
    }
    catch(error){
        console.log(error);
    }
})

//get all the products
app.get("/products",async(req,res)=>{
    const products = await product.find({});//finds all the products
    res.json(products);
})

//adding a product to the database
app.post("/products",async(req,res)=>{
    // res.send(req.body);
    try{
      const productc = await product.create(req.body);//adding a entry into database
      res.status(200).json(productc); 
    }
    catch(error){
        console.log(error);
    }
})

//update the product
app.put("/products/:id",async(req,res)=>{
    try{
        const {id} = req.params;
        const products = await product.findByIdAndUpdate(id,req.body);
        if(!products){
            res.send("product is not found");
        }
        res.status(200).json(products);
    }
    catch(error){
        console.log(error);
    }
})

//delete a product

app.delete("/products/:id",async(req,res)=>{
    try{
      const id = req.params.id;//const { id } = req.params; or const id = req.params.id;
      //both are same in this context
      const products = await product.findByIdAndDelete(id);
      if(!products){
        res.send("not found ");
      }
      else{
        res.send(products);
      }
    }
    catch(error){
        console.log(error);
    }
})
