const express = require("express");
const router = express.Router();
const { getAllProducts,
    getAllProductById} = require("../controllers/products.controller");
//description GET all products from db 
// routes GET /api/products
//access Public



router.get("/",getAllProducts)

//description GET all products by id from db 
// routes GET /api/products/:id
//access Public
router.get("/:id",getAllProductById)
module.exports= router;

