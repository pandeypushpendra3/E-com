require("dotenv").config();

const productData = require("./data/product");
const Product = require("./models/product");
const connectDB = require("./config/db");

connectDB();

const importData = async()=>{
    try{
        await Product.deleteMany({});
        await Product.insertMany(productData);
console.log("Data imported success");
process.exit();

    }
    catch(error){
console.error("Error with data import");
process.exit(1);
}
};

importData();