import mongoose from "mongoose";

  const connectDB=async()=>{
   try{
    await 
    mongoose.connect('mongodb://localhost:27017/mydatabase', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log("mongo connected")
   }catch(error){
    console.log(error)
   }
}

connectDB();

export default connectDB;