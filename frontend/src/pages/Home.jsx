import home1 from "../assets/Home.jpg";
import home2 from "../assets/Home1.jpg";
import home3 from "../assets/Home2.jpg";

export default function Home() {
  return (
    <div className="bg-gray-950 text-white min-h-screen">
      {/* Hero Section */}
      <div
        className="relative h-[90vh] bg-cover bg-center rounded-b-3xl shadow-2xl animate-fade-in"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in-up duration-700">
            Your Health, Our Priority
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6 max-w-2xl animate-fade-in-up delay-100 duration-700">
            At HealthCare+, we combine advanced technology with expert care to
            ensure a healthier tomorrow for you and your loved ones.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid md:grid-cols-3 gap-8 text-center py-20 px-4">
        {[
          ["10K+", "Patients Served"],
          ["500+", "Specialized Doctors"],
          ["24/7", "Emergency Assistance"],
        ].map(([num, label], i) => (
          <div
            key={label}
            className={`bg-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition-all duration-500 animate-fade-in-up delay-[${i * 100}ms]`}
          >
            <h3 className="text-3xl font-bold text-blue-400">{num}</h3>
            <p className="text-gray-300 mt-2">{label}</p>
          </div>
        ))}
      </div>

      {/* Zigzag Sections */}
      <div className="space-y-24 px-6 pb-20">
        {/* Section 1 - About */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img
            src={home1}
            alt="Hospital 1"
            className="rounded-2xl shadow-xl w-full transform transition duration-700 hover:scale-105 animate-slide-in-left"
          />
          <div className="space-y-4 animate-slide-in-right">
            <h2 className="text-4xl font-bold text-blue-400">
              Welcome to HealthCare+
            </h2>
            <p className="text-lg text-gray-300">
              HealthCare+ is your trusted healthcare partner, offering
              state-of-the-art facilities, skilled professionals, and a
              patient-first approach. We are committed to making quality
              healthcare accessible to all.
            </p>
          </div>
        </div>

        {/* Section 2 - Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4 order-2 md:order-1 animate-slide-in-left">
            <h2 className="text-4xl font-bold text-blue-400">
              Our Vision & Mission
            </h2>
            <p className="text-lg text-gray-300">
              We aim to redefine healthcare through innovation, compassion, and
              accessibility. Our mission is to empower communities by promoting
              preventive care and leveraging advanced medical technology.
            </p>
          </div>
          <img
            src={home2}
            alt="Hospital 2"
            className="rounded-2xl shadow-xl w-full h-[600px] object-cover object-center transform transition duration-700 hover:scale-105 order-1 md:order-2 animate-slide-in-right"
          />
        </div>

        {/* Section 3 - Why Choose Us */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img
            src={home3}
            alt="Hospital 3"
            className="rounded-2xl shadow-xl w-full h-[350px] object-cover object-top transform transition duration-700 hover:scale-105 animate-slide-in-left"
          />
          <div className="space-y-4 animate-slide-in-right">
            <h2 className="text-4xl font-bold text-blue-400">Why Choose Us?</h2>
            <ul className="list-disc list-inside text-lg text-gray-300 space-y-1">
              <li>24/7 Emergency & Ambulance Services</li>
              <li>Highly Experienced Medical Experts</li>
              <li>Affordable and Transparent Pricing</li>
              <li>Comfortable & Modern Patient Care Units</li>
              <li>AI-Powered Diagnostics for Faster Results</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
