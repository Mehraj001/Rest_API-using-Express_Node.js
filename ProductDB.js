const connectDB=require("./db/connect");
const ProductJson=require('./product.json');
const Product=require('./models/product');
require("dotenv").config();

const start=async()=>{
      try {
          await connectDB(process.env.MONGO_URL);
          await Product.create(ProductJson);
          console.log("successfully inserted into Database");
      } catch (error) {
            console.log(error);
      }
}
start();


//kaise json file ka data database k andhar krte hai 
//1:
