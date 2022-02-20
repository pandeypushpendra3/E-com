const Product = require("../models/product");
const getAllProducts = async (req,res)=>{
    try{
const products = await Product.find({});
res.json(products);
    }
    catch(err){
        console.error(err);
        res.status(500).json({message:"server Error"})
    }
}

const getAllProductById = async (req,res)=>{
    try{
const product = await Product.findById(req.params.id);
res.json(product);
    }
    catch(err){
        console.error(err);
        res.status(500).json({message:"server Error"})
    }
}


module.exports ={
    getAllProducts,
    getAllProductById
}
