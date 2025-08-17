import about1 from '../assets/About.jpg';
import about2 from '../assets/About1.jpg';
import about3 from '../assets/About3.jpg';
import dept1 from '../assets/dept1.jpg';
import dept2 from '../assets/dept2.jpg';
import dept3 from '../assets/dept3.jpg';
import dept4 from '../assets/dept4.jpg';
import dept5 from '../assets/dept5.jpg';
import dept6 from '../assets/dept6.jpg';

export default function About() {
  const departments = [
    { title: 'Cardiologist', img: dept1 },
    { title: 'Gynecologist', img: dept2 },
    { title: 'Dentist', img: dept3 },
    { title: 'Neurologist', img: dept4 },
    { title: 'opthalmologist', img: dept5 },
    { title: 'Orthopedic', img: dept6 },
  ];

  return (
    <div className="bg-gray-950 text-white px-6 md:px-20 py-10 space-y-24">

      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-5xl font-bold text-blue-400 animate-slide-in-left-once">About HealthCare+</h1>
        <p className="text-gray-300 text-lg mt-4 animate-slide-in-right-once delay-200">
          Transforming lives through compassion, technology, and innovation.
        </p>
      </section>

      {/* Who We Are Section */}
      <section className="grid md:grid-cols-2 gap-10 items-center">
        <img src={about1} alt="About" className="rounded-2xl shadow-xl w-full animate-slide-in-left-once" />
        <div className="space-y-4 animate-slide-in-right-once">
          <h2 className="text-3xl font-bold text-blue-400">Who We Are</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            HealthCare+ is a trusted name in medical excellence. Our hospital is equipped with state-of-the-art facilities and staffed by professionals who care deeply about every patient’s wellbeing.
            <br /><br />
            From emergency care to regular health checkups, we offer comprehensive services across various specialties. Our legacy is built on integrity, empathy, and continuous innovation.
          </p>
        </div>
      </section>

      {/* Committed to Better Care */}
      <section className="grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-4 animate-slide-in-left-once order-2 md:order-1">
          <h2 className="text-3xl font-bold text-blue-400">Committed to Better Care</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            At HealthCare+, our mission goes beyond treating illness—we’re here to build healthier communities. We provide early diagnosis, lifestyle guidance, and mental wellness support to every patient.
            <br /><br />
            Using digital health records and AI monitoring tools, we bring seamless experiences to your fingertips. Our commitment is to make quality healthcare accessible, affordable, and patient-centric.
          </p>
        </div>
        <img src={about2} alt="Our Commitment" className="rounded-2xl shadow-xl w-full animate-slide-in-right-once order-1 md:order-2" />
      </section>

      {/* New Section: About Doctors */}
      <section className="grid md:grid-cols-2 gap-10 items-center">
        <img src={about3} alt="Doctors" className="rounded-2xl shadow-xl w-full animate-slide-in-left-once" />
        <div className="space-y-4 animate-slide-in-right-once">
          <h2 className="text-3xl font-bold text-blue-400">Our Expert Doctors</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Every doctor at HealthCare+ brings years of expertise, compassion, and commitment to healing. We hire only the most qualified specialists in each department—each one certified and internationally trained.
            <br /><br />
            Our team believes in active communication, transparent care, and personalized treatment plans that fit your lifestyle. You’re not just a patient here—you’re family.
          </p>
        </div>
      </section>

      {/* Departments */}
      <section className="text-center">
        <h2 className="text-4xl font-bold text-blue-400 mb-10 animate-fade-in">Meet Our Specialists</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {departments.map((dept, idx) => (
            <div key={idx} className="bg-gray-900 rounded-2xl p-4 shadow-lg hover:scale-105 transition duration-300 animate-fade-in">
              <img src={dept.img} alt={dept.title} className="w-full h-40 object-cover rounded-xl mb-4" />
              <h3 className="text-xl font-semibold text-blue-300">{dept.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Excellence Section */}
      <section className="text-center space-y-6">
        <h2 className="text-3xl font-bold text-blue-400 animate-fade-in">Excellence That Sets Us Apart</h2>
        <ul className="text-gray-300 text-lg space-y-2 animate-fade-in delay-200">
          <li>✔️ AI-Driven Health Monitoring</li>
          <li>✔️ Internationally Certified Doctors</li>
          <li>✔️ Seamless Online Appointments & Reports</li>
          <li>✔️ Advanced Surgical & Diagnostic Labs</li>
        </ul>
      </section>
    </div>
  );
}
