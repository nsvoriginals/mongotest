import express from 'express'
import User from './schemas/userModel.js'
import connectDB from './config/db.js'
import cors from 'cors'

const app=express()

app.use(express.json())
app.use(cors());
connectDB();

app.get('/',(req,res)=>{
    return res.send("hello there get ")
})

app.post('/submit',async(req,res)=>{
    try{
        const {name ,email,age,college}=req.body;
        const data={name ,email,age,college};
        const user=new User(data);
        await user.save();
        console.log("user updated to db")
        res.send()
    }catch(error){
        console.log("error occured",error)
        res.send("Error in db")
    }
    
})

app.get('/getusers',async(req,res)=>{
    try{
        const users=await User.find();
        res.send(users)
    }catch(error){
      console.log(error)
      res.send(error)
    }
})


app.listen(3000,()=>{
    console.log(`app running in localhost:3000`)
})