const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

// middleware
app.use(cookieParser());

// set cookie
app.get("/setcookie", (req, res) => {
    res.cookie("name", "shagun", {
        maxAge: 1000 * 60 * 2, // 2 minutes
    });
    res.send("Cookie set successfully");
});

// get cookie
app.get("/getcookie", (req, res) => {
    const cookies = req.cookies;
    console.log(cookies);
    res.send(cookies);
});

// delete cookie
app.get("/deletecookie", (req, res) => {
    res.clearCookie("name");
    res.send("Cookie deleted successfully");
});

// server start
app.listen(3001, () => {
    console.log("Server running on port 3001");
});