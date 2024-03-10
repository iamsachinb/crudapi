const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");
//to interact with database we need to use the mongoose package0


//defining product schema
const productSchema = mongoose.Schema({
    
    name : {
        type : String,
        required : [true,"please enter a value"]
    },
    quantity :{
       type : Number, 
       default : 0,
       required : true
    },
    price:{
        type : Number,
        required: true
    },
    image:{
        type : String,
        required:false
    },
   
},
{
    Timestamp:true
})

const product = mongoose.model("product",productSchema);
//now we created a model named product

module.exports = product;//careful with this syntax