import mongoose from "mongoose";


const user=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
    },
    age:{
        type:Number
    },
    college:{
        type:String
    }

})


export default mongoose.model("User",user);
