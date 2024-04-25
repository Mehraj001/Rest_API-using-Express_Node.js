const mongoose=require("mongoose");
const connectDB=()=>{
      console.log("yes i am in connect in db");
      return mongoose.connect(process.env.MONGO_URL,{
            
      });
}
module.exports=connectDB;



