const mongoose=require('mongoose');
const { required } = require('nodemon/lib/config');

const productSchema=new mongoose.Schema({
      name:{
            type :String,
            required:true,
      },
      price:{
            type:Number,
            required:[true,"must be provided"],
      },
      featured:{
                type:Boolean,
                default:true,
      },
      rating:{
            type:Number,
            default:4.8,
       },
       company:{
            type :String,
            enum:{
                  values:["apple","samsung","dell"],
                  message:`{VALUE} is not supported`,
            },
      },
});

module.exports=mongoose.model("Product",productSchema);