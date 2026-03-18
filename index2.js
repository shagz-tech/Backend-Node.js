const express = require("express");
const app=express();

const users=[
    {id: 1, name:"shagun",branch:"CSE"},
    {id: 2, name:"sona",branch:"ECS"},
];
app.get("/users",(req,res)=>{
    return res.json(users);
});
app.listen(3001);
