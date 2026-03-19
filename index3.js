const express = require("express");
const app = express();
app.use(express.json());
const user = [
    { id: 1, name:"shagun", branch:"CSE", city: "Pune"},
    { id: 2, name:"sona", branch:"IT", city: "Mumbai"},
    { id: 3, name:"shagu", branch:"CS", city: "Delhi"},
];

app.get("/users",(req,res)=>{
    const html=`
    <ul>
      ${users.map(user=>`<li>${user.name} has branch ${user.branch}</li>`).join("")}
    </ul>
    `;
    res.send(html);
});

app.get("/names",(req,res)=>{
    const html=`
    <ul>
      ${users.map(user=>`<li>my name is ${user.name} and I am from ${user.city} and I am in {user.branch} branch</li>`).join("")}
    </ul>
    `;
    res.send(html);
})

app.get("/api/users",(req,res) =>{
    return res.json(users);
});

app.get("/api/users/:id",(req,res)=>{
    const id = req.params.id;
    const user=users.find(user=>user.id==id);
    if(!user){
        return res.status(404).json({message:"User not found"});
    }
    else{
        return res.json(user);
    }
});
app.post("/api/users",(req , res)=>{
    const newUser={
        id:users.length+1,
        ...req.boby
    }
    users.push(newUser);
    return res.json(users);
})

app.listen(3003);