const mongoose = require("mongoose");



const productSchema= new mongoose.Schema({
    name:{type:String,requires:true},
    description:{type:String,requires:true},
    price:{type:Number,requires:true},
    countInStock:{type:Number,requires:true},
imageUrl:{type:String,required:true}
})



const Product = mongoose.model("product",productSchema);


module.exports = Product;