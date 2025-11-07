import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaDownload, FaCheckCircle } from 'react-icons/fa';
// Social Icons from Lucide React
import { Github, Linkedin, Globe } from 'lucide-react'; 

const App = () => {
  // FINAL FIX: base URL ব্যবহার করে অ্যাসেট পাথ তৈরি করা হলো। 
  // এটি নিশ্চিত করে যে GitHub Pages-এ '/Fakhrul-portfolio/' পাথটি স্বয়ংক্রিয়ভাবে ছবির নামের আগে যোগ হবে।
  // ছবির আসল পাথ: public/image/Fakhrul-H.jpg
  const imagePath = `${import.meta.env.BASE_URL}image/Fakhrul-H.jpg`;
  
  // CV এর আসল পাথ: public/Fakhrul.pdf
  const cvPath = `${import.meta.env.BASE_URL}Fakhrul.pdf`; 

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50 font-sans">
      {/* Sidebar */}
      <aside className="bg-[#1E5F74] text-white w-full md:w-[500px] md:fixed md:h-screen p-8 space-y-8 shadow-xl">
        {/* Profile */}
        <div className="flex flex-col items-center mb-8">
          <img
            src={imagePath} // ফিক্সড পাথ
            alt="MD. FAKRUL HASSAN"
            className="w-36 h-36 rounded-full object-cover border-4 border-white mb-4 shadow-lg"
            // onError: যদি ছবি লোড না হয়, একটি প্লেসহোল্ডার দেখাবে।
            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/150x150/0f4c75/ffffff?text=Fakrul" }}
          />
          <h1 className="text-3xl font-extrabold tracking-wide">MD. FAKRUL HASSAN</h1>
          <h2 className="text-xl font-light opacity-80">Full Stack Developer</h2>
        </div>

        {/* Contact Info */}
        <div className="space-y-3 mb-8 border-t border-b border-white/30 py-4">
          <p className="flex items-center text-base">
            <FaEnvelope className="w-5 mr-3 text-center" />
            ifakrul231@gmail.com
          </p>
          <p className="flex items-center text-base">
            <FaPhone className="w-5 mr-3 text-center" />
            01987668401
          </p>
          <p className="flex items-center text-base">
            <FaMapMarkerAlt className="w-5 mr-3 text-center" />
            Uttor badda, Dhaka
          </p>
        </div>

        {/* Download CV Button */}
        <button
          onClick={() => window.open(cvPath, '_blank')}
          className="w-full bg-white text-[#1E5F74] py- px-4 rounded-lg font-bold shadow-md hover:bg-gray-200 transition-all duration-300 flex items-center justify-center text-lg transform hover:scale-[1.01]"
        >
          <FaDownload className="mr-3" /> Download CV
        </button>

        {/* Skills */}
        <div className="pl-4">
          <h3 className="text-2xl font-bold mb-2 border-b-2 border-white/50 pb-2">Skills</h3>
          {/* FIX: grid-cols-1 md:grid-cols-2 যোগ করা হলো যাতে Professional Skills ডানদিকে দেখা যায় */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7"> 
            {/* Technical Skills */}
            <div>
              <h4 className="font-semibold text-lg mb-3 underline underline-offset-4">Technical Expertise</h4>
              <ul className="space-y-2 text-sm">
                {[
                  "Laravel, JavaScript, C",
                  "React.js, Next.js, Node.js",
                  "Web2py, Py4Web",
                  "Tailwind CSS, Bootstrap, Redux",
                  "MySQL",
                  "Git/GitHub",
                ].map((skill, i) => (
                  <li key={i} className="flex items-start">
                    <FaCheckCircle className="text-blue-200 mt-1 mr-3 flex-shrink-0" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Professional Skills - এখন এটি ডানদিকের কলামে চলে আসবে */}
            <div>
              <h4 className="font-semibold text-lg mb-3 underline underline-offset-4">Professional Skills</h4>
              <ul className="space-y-2 text-sm">
                {["Problem Solving", "Team Collaboration", "Time Management", "Communication"].map(
                  (skill, i) => (
                    <li key={i} className="flex items-start">
                      <FaCheckCircle className="text-blue-200 mt-1 mr-3 flex-shrink-0" />
                      <span>{skill}</span>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-[500px] p-8 md:p-12 bg-white min-h-screen">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4 border-b pb-4">
          <h1 className="text-4xl font-extrabold text-gray-800">FAKRUL HASSAN</h1>
          <div className="flex gap-5 text-[#1E5F74]">
            {/* Social Icons using Lucide React */}
            <a href="https://github.com/Fakrul2003" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition transform hover:scale-110">
              <Github className="w-7 h-7" />
            </a>
            <a href="https://www.linkedin.com/in/fakrul-islam-bb4043229/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition transform hover:scale-110">
              <Linkedin className="w-7 h-7" />
            </a>
            <a href="https://fakrul2003.github.io/Fakhrul-portfolio/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition transform hover:scale-110">
              <Globe className="w-7 h-7" />
            </a>
          </div>
        </div>

        {/* Summary/Introduction */}
        <section className="mb-10">
            <h2 className="text-3xl font-bold text-[#1E5F74] pb-2 mb-4">
                Profile
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
                Highly motivated Full Stack Developer with 3+ years of experience in building scalable and efficient web applications using modern frameworks like **React.js, Next.js, and Laravel**. Proven ability to design databases (MySQL), manage state (Redux), and deliver end-to-end solutions. Dedicated to continuous learning and applying cutting-edge technology to solve complex problems.
            </p>
        </section>


        {/* Experience */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-[#1E5F74] border-b-2 border-[#1E5F74] pb-2 mb-6">
            Experience
          </h2>
          <div className="border-l-4 border-[#1E5F74] pl-4 pb-6 mb-6">
            <h3 className="text-xl font-bold text-gray-900">Associate Python Developer</h3>
            <p className="text-gray-600 italic">Jan 2025 - Present | Eon System</p>
            <ul className="mt-2 text-gray-700 list-disc pl-5 space-y-1">
                <li>Developed scalable web applications using **Web2py/Py4Web** for major clients like Hamdard, ensuring high performance and security.</li>
                <li>Actively participated in the full software development lifecycle, from requirement gathering to deployment and maintenance.</li>
                <li>Contributed to database design and optimization for improved data retrieval efficiency.</li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-[#1E5F74] border-b-2 border-[#1E5F74] pb-2 mb-6">
            Key Projects
          </h2>

          {[
            {
              title: "Restaurant Management System",
              time: "(2023 - 2024)",
              desc: "Built with authentication, order customization, admin dashboards, and profit/loss analysis.",
              tech: "React, Express, Tailwind CSS, Firebase",
              link: "https://bistro-boss-a2461.firebaseapp.com",
            },
            {
              title: "Keto Journey",
              time: "(2023)",
              desc: "A blogging platform with authentication, post creation, commenting, and responsive design.",
              tech: "React, Express, MySQL, Tailwind CSS, Firebase",
              link: "https://keto-journey.web.app/",
            },
            {
              title: "Dashboard",
              time: "(2023 - Present)",
              desc: "Web-based dashboard to manage orders, users, and provide data visualization with charts.",
              tech: "Next.js, React, Express, Tailwind CSS",
            },
            {
              title: "News Portal",
              time: "(2023 - 2024)",
              desc: "A categorized news website built with Next.js showing latest articles with details.",
              tech: "Next.js, Express, MySQL, Tailwind CSS",
              link: "https://the-dragon-news-nine.vercel.app/",
            },
          ].map((proj, i) => (
            <div key={i} className="border-l-4 border-gray-300 pl-4 pb-6 mb-6 last:border-0">
              <h3 className="text-lg font-bold text-gray-900">{proj.title} <span className="text-sm font-normal text-gray-500">{proj.time}</span></h3>
              <p className="mt-1 text-gray-700">{proj.desc}</p>
              <p className="mt-1 text-sm font-medium text-[#1E5F74]">
                Tech Stack: {proj.tech}
              </p>
              {proj.link && (
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition font-medium mt-1 inline-block"
                >
                  Live Demo →
                </a>
              )}
            </div>
          ))}
        </section>

        {/* Education */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-[#1E5F74] border-b-2 border-[#1E5F74] pb-2 mb-6">
            Education
          </h2>
          <div className="border-l-4 border-gray-300 pl-4 pb-6 mb-6">
            <h3 className="text-xl font-bold">BSc in Computer Science & Engineering</h3>
            <p className="text-gray-600">2021 - 2025 | World University of Bangladesh</p>
          </div>
          <div className="border-l-4 border-gray-300 pl-4">
            <h3 className="text-xl font-bold">Higher Secondary Certificate (Science)</h3>
            <p className="text-gray-600">2017 - 2019 | Munshirhat College, Matlab-south</p>
          </div>
        </section>

        {/* References */}
        <section>
          <h2 className="text-3xl font-bold text-[#1E5F74] border-b-2 border-[#1E5F74] pb-2 mb-6">
            References
          </h2>
          <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
            <h3 className="font-bold text-lg text-gray-900">Kazi Hassan Robin</h3>
            <p className="text-gray-700">Associate Professor & Head of CSE, World University of Bangladesh</p>
            <p className="mt-1 text-sm text-gray-600">
              Email: robin1@cse.wub.edu.bd | Phone: +8801820547352
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;