'use client';
import React, { useState , useEffect } from "react";




function Projects() {
    const [hoveredIndex, setHoveredIndex] = useState(null);
  
    return (
      <section id="projects" className="w-full py-20 transform-style-preserve-3d">
        <div className="max-w-7xl mx-auto px-4 perspective-[1000px]">
          <h2 className="text-4xl font-bold mb-12 text-center text-[#70BA65] relative transform translate-z-20">
            Featured Projects
            <div className="absolute w-20 h-1 bg-[#70BA65] bottom-[-10px] left-1/2 transform -translate-x-1/2"></div>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transform-style-preserve-3d">
            {[
              {
                image: "/project1.jpg",
                alt: "E-commerce website dashboard showing product analytics",
                title: "E-commerce Dashboard",
                description:
                  "A modern e-commerce dashboard with real-time analytics and inventory management.",
                tech: ["React", "Tailwind", "Node.js"],
              },
              {
                image: "/project2.jpg",
                alt: "Social media app interface showing user profiles and posts",
                title: "Social Connect",
                description:
                  "A social media platform focused on connecting professionals in tech industry.",
                tech: ["Next.js", "GraphQL", "MongoDB"],
              },
              {
                image: "/project3.jpg",
                alt: "Weather application showing forecast and climate data",
                title: "Weather Forecast",
                description:
                  "A weather application with detailed forecasts and climate data visualization.",
                tech: ["React", "D3.js", "API"],
              },
            ].map((project, index) => (
              <div
                key={index}
                className="project-card bg-opacity-10 bg-[#70BA65] rounded-xl overflow-hidden shadow-lg transition-all duration-500 transform-style-preserve-3d hover:translate-z-[100px]"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  transform:
                    hoveredIndex === index
                      ? "rotateY(10deg) rotateX(5deg)"
                      : "rotateY(0) rotateX(0)",
                  transition: "transform 0.5s ease",
                }}
              >
                <div className="relative h-[200px] overflow-hidden transform-style-preserve-3d">
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500 translate-z-[50px]"
                  />
                  <div className="absolute inset-0 bg-[#70BA65] opacity-20 hover:opacity-0 transition-opacity duration-500 translate-z-[60px]"></div>
                </div>
                <div className="p-6 transform translate-z-[70px] bg-opacity-90 backdrop-blur-sm">
                  <h3 className="text-xl font-bold mb-3 transform translate-z-[80px]">
                    {project.title}
                  </h3>
                  <p className="text-sm mb-4 transform translate-z-[80px]">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4 transform translate-z-[80px]">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs rounded-full bg-[#70BA65] bg-opacity-20 hover:translate-z-[90px] transition-transform"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center transform translate-z-[80px]">
                    <a
                      href="#"
                      className="text-[#70BA65] hover:text-opacity-80 transition-colors hover:translate-z-[90px]"
                    >
                      <i className="fas fa-external-link-alt mr-2"></i>Live Demo
                    </a>
                    <a
                      href="#"
                      className="text-[#70BA65] hover:text-opacity-80 transition-colors hover:translate-z-[90px]"
                    >
                      <i className="fab fa-github mr-2"></i>Source
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  export default Projects;