const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

async function connectDB() {
    try {
        await mongoose.connect("mongodb://localhost:27017/myDatabase3");
        console.log("DB connected successfully");
    } catch (error) {
        console.log("connection error:", error);
        process.exit(1);
    }
}

connectDB();

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String
});

const User = mongoose.model("User", userSchema);

app.post("/users", async (req, res) => {
    const user = await User.create(req.body);
    res.json(user);
});

app.get("/users", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get("/users/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) return res.status(404).json({ error: "User not found" });

        res.json(user);
    } catch (err) {
        res.status(500).json({ error: "Invalid user id" });
    }
});

app.put("/users/:id", async (req, res) => {
    const user = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.json(user);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
}
)