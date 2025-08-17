import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        
        {/* Column 1: Logo & Tagline */}
        <div>
          <h1 className="text-2xl font-bold text-blue-400 mb-3">HealthCare+</h1>
          <p className="text-sm leading-6">
            Empowering lives with advanced healthcare and compassionate service. <br />
            Your health, our priority.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-3 text-white">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-blue-400 hover:pl-2 transition-all duration-300">Home</a></li>
            <li><a href="/about" className="hover:text-blue-400 hover:pl-2 transition-all duration-300">About</a></li>
            <li><a href="/appointment" className="hover:text-blue-400 hover:pl-2 transition-all duration-300">Appointment</a></li>
            <li><a href="/login" className="hover:text-blue-400 hover:pl-2 transition-all duration-300">Logout</a></li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h2 className="text-lg font-semibold mb-3 text-white">Contact Us</h2>
          <p className="text-sm">📍 123 MediCity, Health Road, India</p>
          <p className="text-sm">📞 +91 98765 43210</p>
          <p className="text-sm">✉️ support@healthcareplus.com</p>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} HealthCare+. All rights reserved.</p>
        <p className="mt-2 text-gray-400">
          💻 Developed with ❤️ by <span className="text-blue-400 font-semibold">Bhumika Kashyap</span>
        </p>
      </div>
    </footer>
  );
}
