const express=require('express');
const router=express.Router();
const {getAllProducts,getAllProductsTexting}=require("../controlers/product");
router.route("/").get(getAllProducts);
router.route("/test").get(getAllProductsTexting);

module.exports=router;