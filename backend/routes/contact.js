// routes/contact.js
const router = require("express").Router();
const Contact = require("../models/Contact");

router.post("/send", async (req, res) => {
  try {
    const data = new Contact(req.body);
    await data.save();
    res.status(201).json("Message sent");
  } catch (err) {
    res.status(500).json("Message send error");
  }
});

module.exports = router;
