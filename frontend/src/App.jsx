import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/about";
import Appointment from "./pages/Appointment";
import Scheduler from "./pages/scheduler";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedARoute";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function AppWrapper() {
  const location = useLocation();
  const hideNavbarFooter =
    location.pathname === "/login" || location.pathname === "/signup";

  return (
    <>
      {!hideNavbarFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/about" element={<About />} />
        <Route path="/appointment" element={<ProtectedRoute><Appointment /></ProtectedRoute>} />
        <Route path="/scheduler" element={<ProtectedRoute><Scheduler /></ProtectedRoute>} />
        <Route path="/appointments" element={<Navigate to="/scheduler" replace />} /> {/* ✅ redirect fix */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      {!hideNavbarFooter && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}
