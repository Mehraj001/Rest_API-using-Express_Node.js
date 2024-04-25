const model=require('../models/product');
const getAllProducts=async(req,res)=>{
      const mudata= await model.find({name:"Iphone1"});
      res.status(200).json(mudata);
};
const getAllProductsTexting=async(req,res)=>{
      res.status(200).json({msg:"I am gettAll Products Testing"});
};

module.exports={getAllProducts,getAllProductsTexting};