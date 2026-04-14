const express = require("express");
const mongoose=require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());
async function connectDB(){
    try{
        await mongoose.connect();
        console.log("DB connected successfully");
    }
    catch(error){
        console.log("error:",error)
    }
}
connectDB();
const userSchema=new mongoose.Schema({
    name:String,
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true}
})
const User= mongoose.model("User",userSchema);
app.post("/signup",async(req,res)=>{
    const {name,email,password}=req.boby;
    const exist =await User.findOne({email});
    if(exist){
        return res.send("user already exist");
    }
    const hashedPassword = await bcrypt.hash(password,10);
    const user = new User({name,email,passwaord:hashedPassword});
    await user.save();
    res.send("signUp successful");
})
app.post("/login",async(req,res)=>{
    const {email,password}=req.boby;
    const user=await User.findOne({email});
    if(!user){
        return res.send("no user Found");
    }
    const exist = await bcrypt.compare(password,user.password);
    if(!exit){
        return res.send("Please entre correct password");
    }
    const token=jwt.sign({id:user._id},"mySecretkey",{expiresIn:"1h"});
    res.json({
        message:"Login successful",
        token
    })
})
app.listen(3000);