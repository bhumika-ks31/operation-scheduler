import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="bg-gray-800 px-6 py-4 shadow-md flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-400">HealthCare+</h1>

      <ul className="flex gap-6 items-center text-sm text-white">
        <Link to="/" className="hover:text-blue-300">Home</Link>
        <Link to="/about" className="hover:text-blue-300">About</Link>
        <Link to="/appointment" className="hover:text-blue-300">Appointment</Link>

        {isLoggedIn && (
          <Link to="/appointments" className="hover:text-blue-300">scheduler</Link>
        )}

        {!isLoggedIn ? (
          <>
            <Link to="/login" className="hover:text-blue-300">Login</Link>
            <Link to="/signup" className="hover:text-blue-300">Signup</Link>
          </>
        ) : (
          <button
            onClick={handleLogout}
            className="bg-red-500 px-3 py-1 rounded text-black hover:bg-red-600 transition"
          >
            Logout
          </button>
        )}
      </ul>
    </nav>
  );
}
