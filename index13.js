const express=require("express");
const cookieParser=require("cookie-parser");
const app=express();
app.use(cookieParser());
app.get("/selcookie",(req,res)=>{
    res.cookie("name","shagun");
    res.send("cookie set successfully");
});
app.get("/getcookie",(req,res)=>{
    console.log("server running on port 3001");
});
app.listen(3001);

