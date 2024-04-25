const express=require('express');
const app=express();
const connectDB=require("./db/connect");
const PORT=process.env.PORT||3000;
require("dotenv").config();
const product_route=require("./routes/product");


app.get("/",(req,res)=>{
       res.send("i am live")
});

app.use("/api/products",product_route)

const start=async()=>{
      try {
            await connectDB();
            app.listen(PORT,()=>{
                  console.log(`yes i am conncted ${PORT}`);
            })
      } catch (error) {
            console.log("error");
      }
}
start();
