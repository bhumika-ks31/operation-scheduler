const express = require("express");
const router = express.Router();
const Appointment = require("../models/Appointment");

// Create Appointment
router.post("/", async (req, res) => {
  try {
    const newAppointment = new Appointment(req.body);
    await newAppointment.save();
    res.status(201).json({ message: "Appointment booked" });
  } catch (err) {
    console.error("POST Error:", err.message);
    res.status(500).json({ error: "Server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Appointment.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "Appointment not found" });
    }
    res.status(200).json({ message: "Appointment deleted" });
  } catch (err) {
    console.error("Delete error:", err.message);
    res.status(500).json({ message: "Server error" });
  }
});


// Get All Appointments
router.get("/", async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.json(appointments);
  } catch (err) {
    console.error("GET Error:", err.message);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
