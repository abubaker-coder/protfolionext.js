'use client';
import React, { useState , useEffect } from "react";


function About({ isDarkMode }) {
    return (
      <section
        id="about"
        className={`w-full py-20 ${isDarkMode ? "bg-[#1a1a1a]" : "bg-white"}`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-[#70BA65] relative">
            About Me
            <div className="absolute w-20 h-1 bg-[#70BA65] bottom-[-10px] left-1/2 transform -translate-x-1/2"></div>
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div
              className={`${isDarkMode ? "bg-[#1a1a1a]" : "bg-white"} p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300`}
            >
              <h3 className="text-2xl font-bold mb-6 text-[#70BA65]">
                Technical Skills
              </h3>
              <ul className="space-y-4">
                {[
                  "HTML5, CSS3, JavaScript (ES6+)",
                  "React.js, Next.js",
                  "Tailwind CSS, Bootstrap",
                  "Version Control (Git)",
                  "Responsive Web Design",
                  "Cross-browser Compatibility",
                  "Performance Optimization",
                ].map((skill, index) => (
                  <li key={index} className="flex items-center">
                    <i className="fas fa-check-circle text-[#70BA65] mr-3"></i>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-8">
              <div
                className={`${isDarkMode ? "bg-[#1a1a1a]" : "bg-white"} p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300`}
              >
                <h3 className="text-2xl font-bold mb-4 text-[#70BA65]">
                  Professional Summary
                </h3>
                <p className="text-lg leading-relaxed">
                  I specialize in translating design concepts into seamless,
                  interactive user experiences. My goal is to create engaging
                  digital solutions that drive user engagement and business
                  growth.
                </p>
              </div>
              <div
                className={`${isDarkMode ? "bg-[#1a1a1a]" : "bg-white"} p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300`}
              >
                <h3 className="text-2xl font-bold mb-6 text-[#70BA65]">
                  Personal Details
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { icon: "map-marker-alt", text: "Pakistan" },
                    { icon: "language", text: "English (Fluent), Urdu (Native)" },
                    { icon: "calendar", text: "April 15, 1995" },
                    { icon: "envelope", text: "abubakar.nadeem@gmail.com" },
                    { icon: "phone", text: "+92 301-5555555" },
                    { icon: "clock", text: "Open for Freelance Projects" },
                  ].map((detail, index) => (
                    <li key={index} className="flex items-center">
                      <i
                        className={`fas fa-${detail.icon} text-[#70BA65] mr-3 w-5`}
                      ></i>
                      {detail.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  export default About;