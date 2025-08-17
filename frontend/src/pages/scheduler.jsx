import  React, { useEffect, useState } from "react";
import axios from "axios";

const Scheduler = () => {
  const [appointments, setAppointments] = useState([]);

  const fetchAppointments = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/appointment");
      setAppointments(res.data);
    } catch (err) {
      console.error("Error fetching appointments:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/appointment/${id}`);
      // Remove from UI
      setAppointments((prev) => prev.filter((apt) => apt._id !== id));
      alert("Appointment deleted successfully.");
    } catch (err) {
      console.error("Error deleting appointment:", err);
      alert("Failed to delete appointment.");
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  return (
    <div className="min-h-screen w-screen bg-gray-900 text-white px-4">
      <h2 className="text-3xl font-bold text-blue-400 mb-6 text-center">
        Booked Appointments
      </h2>

      {appointments.length === 0 ? (
        <p className="text-center text-gray-400">No appointments booked yet.</p>
      ) : (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {appointments.map((apt) => (
            <div
              key={apt._id}
              className="bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-700 relative"
            >
              <h3 className="text-xl font-semibold text-blue-300">{apt.firstName} {apt.lastName}</h3>
              <p><strong>Email:</strong> {apt.email}</p>
              <p><strong>Doctor:</strong> {apt.doctor}</p>
              <p><strong>Date:</strong> {apt.appointmentDate}</p>
              <p><strong>Gender:</strong> {apt.gender}</p>
              {apt.message && <p className="mt-2 text-gray-300 italic">“{apt.message}”</p>}

              <button
                onClick={() => handleDelete(apt._id)}
                className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-black px-3 py-1 text-sm rounded"
              >
                ❌ Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Scheduler;
