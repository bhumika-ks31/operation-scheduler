const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User"); // No need to import mongoose again

router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json("Email already registered");
    const hashed = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashed });
    await newUser.save();
    res.status(201).json("Signup successful");
  } catch (err) {
    res.status(500).json("Signup failed");
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json("User not found");
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json("Wrong credentials");

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({ token, name: user.name });
  } catch (err) {
    res.status(500).json("Login failed");
  }
});

module.exports = router;
