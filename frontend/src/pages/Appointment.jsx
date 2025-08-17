import React, { useState } from 'react';
import axios from 'axios';

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    doctor: "",
    operationType: "",
    fee: "",
    date: "",
    time: "",
    message: ""
  });

  const doctors = [
    { name: "Dr. Smith", specialty: "Cardiologist" },
    { name: "Dr. Patel", specialty: "Eye Specialist" },
    { name: "Dr. Sharma", specialty: "Orthopedic" },
    { name: "Dr. Khan", specialty: "Neurosurgeon" }
  ];

  const operations = [
    { type: "Eye Operation", fee: 5000 },
    { type: "Heart Surgery", fee: 25000 },
    { type: "Knee Replacement", fee: 15000 },
    { type: "Brain Surgery", fee: 50000 }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "operationType") {
      const selectedOp = operations.find(op => op.type === value);
      setFormData((prev) => ({
        ...prev,
        [name]: value,
        fee: selectedOp ? selectedOp.fee : ""
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/appointment", formData);
      alert("✅ Appointment booked successfully!");
      setFormData({
        name: "",
        email: "",
        doctor: "",
        operationType: "",
        fee: "",
        date: "",
        time: "",
        message: ""
      });
    } catch (error) {
      alert("❌ Failed to book appointment.");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen w-screen bg-gray-900 text-white flex items-center justify-center px-4">
      <div className="w-full max-w-3xl bg-gray-800 p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-blue-400 mb-8">Operation Scheduler</h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Patient Name"
            required
            className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Patient Email"
            required
            className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <select
            name="doctor"
            value={formData.doctor}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Doctor</option>
            {doctors.map((doc, index) => (
              <option key={index} value={`${doc.name} - ${doc.specialty}`}>
                {doc.name} ({doc.specialty})
              </option>
            ))}
          </select>

          <select
            name="operationType"
            value={formData.operationType}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Operation Type</option>
            {operations.map((op, index) => (
              <option key={index} value={op.type}>
                {op.type} (₹{op.fee})
              </option>
            ))}
          </select>

          <input
            type="number"
            name="fee"
            value={formData.fee}
            readOnly
            placeholder="Fee (INR)"
            className="w-full p-3 rounded bg-gray-600 text-gray-300 placeholder-gray-400 outline-none"
          />

          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="flex-1 p-3 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="sm:w-40 p-3 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Additional Message"
            rows="3"
            className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 transition p-3 rounded text-black font-semibold"
          >
            Book Operation
          </button>
        </form>
      </div>
    </div>
  );
};

export default Appointment;
