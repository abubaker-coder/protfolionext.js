'use client';
import React, { useState , useEffect } from "react";


function Services() {
    return (
      <section
        id="services"
        className="w-full py-20 bg-opacity-5 bg-[#70BA65] transform-style-preserve-3d"
      >
        <div className="max-w-7xl mx-auto px-4 transform-style-preserve-3d">
          <h2 className="text-4xl font-bold mb-12 text-center text-[#70BA65] relative">
            Services
            <div className="absolute w-20 h-1 bg-[#70BA65] bottom-[-10px] left-1/2 transform -translate-x-1/2"></div>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "paint-brush",
                title: "UI/UX Design & Development",
                items: [
                  "Create modern, user-centered interfaces",
                  "Implement latest design trends",
                  "Deliver intuitive user experiences",
                ],
              },
              {
                icon: "mobile-alt",
                title: "Responsive Web Design",
                items: [
                  "Build responsive websites",
                  "Ensure consistent experience",
                  "Optimize performance",
                ],
              },
              {
                icon: "code",
                title: "Product & Application Design",
                items: [
                  "Develop custom digital solutions",
                  "Create user-friendly applications",
                  "Focus on scalable solutions",
                ],
              },
              {
                icon: "pencil-ruler",
                title: "Interactive Prototyping",
                items: [
                  "Create detailed wireframes",
                  "Design clickable prototypes",
                  "Iterate based on feedback",
                ],
              },
              {
                icon: "film",
                title: "Motion Graphics & Animation",
                items: [
                  "Implement micro-interactions",
                  "Create smooth transitions",
                  "Enhance user experience",
                ],
              },
            ].map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-opacity-10 bg-[#70BA65] backdrop-blur-lg hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-[#70BA65] text-4xl mb-4">
                  <i className={`fas fa-${service.icon}`}></i>
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <ul className="space-y-2">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-center">
                      <i className="fas fa-check-circle text-[#70BA65] mr-3"></i>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

export default Services;