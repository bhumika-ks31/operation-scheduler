const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

const authRoutes = require("./routes/auth");        // ✅ Import auth route
const appointmentRoute = require("./routes/appointment"); // ✅ Import appointment route

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/appointment", appointmentRoute);

// MongoDB connection
console.log("🟡 Connecting to MongoDB...");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(process.env.PORT || 5000, () => {
      console.log(`✅ Server running on port ${process.env.PORT || 5000}`);
    });
  })
  .catch((err) => {
    console.error("❌ DB Error:", err.message);
  });
