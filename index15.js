const express = require("express");

const app = express();

app.get("/students", (req,res)=>{
    res.json({
        message:"All Students"
    });
});

app.listen(3001);