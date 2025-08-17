const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  name: String,
  email: String,
  doctor: String,
  operationType: String,
  fee: String,
  date: String,
  time: String,
  message: String,
});

module.exports = mongoose.model("Appointment", appointmentSchema);
