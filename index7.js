const express=require("express");
const app=express();

// logging middleware

app.use((req,res,next)=>{
    console.log(req.method)
    console.log(req.url);
    next();
});
// auth middleware
function auth(req,res,next){
    const token=true;
    if(token==="myscrrettokken"){
        next();
    }
    else{
        res.status(401).send("Unauthorized");
    }
}

app.get("/",(req,res)=>{
    res.send("Hello World");
});
app.get("/dashboard",auth,(req,res)=>{
    res.send("Welcome to the dashboard")
})

app.get("/profile",(req,res)=>{
    throw new Error ("Something went wrong");
})
app.use((err,req,res,next)=>{
    console.error(err.message);
    res.status(500).send("Internal Server Error");
})
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})


