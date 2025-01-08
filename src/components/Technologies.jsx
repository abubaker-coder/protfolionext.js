'use client';
import React, { useState , useEffect } from "react";


function Technologies() {
    const [cardRotation, setCardRotation] = useState({ x: 0, y: 0 });
  
    const handleMouseMove = (e) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;
      setCardRotation({ x: rotateX, y: rotateY });
    };
  
    const handleMouseLeave = () => {
      setCardRotation({ x: 0, y: 0 });
    };
  
    return (
      <div className="py-20 bg-opacity-5 bg-[#70BA65] transform-style-preserve-3d">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center transform translate-z-[50px]">
            Technologies I Work With
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 perspective-1000">
            {[
              "HTML5",
              "CSS3",
              "JavaScript",
              "React",
              "Tailwind",
              "Material-UI",
            ].map((tech, index) => (
              <div
                key={index}
                className="tech-card flex flex-col items-center justify-center p-8 rounded-lg bg-opacity-10 bg-[#70BA65] hover:bg-opacity-20 transition-all transform-style-preserve-3d hover:translate-z-[100px]"
                style={{
                  transform: `rotateX(${cardRotation.x}deg) rotateY(${cardRotation.y}deg) translateZ(50px)`,
                  transition: "transform 0.3s ease",
                }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <i
                  className={`fab fa-${tech.toLowerCase()} text-5xl mb-4 text-[#70BA65] transform translate-z-[30px]`}
                ></i>
                <p className="text-center font-bold transform translate-z-[20px]">
                  {tech}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  export default Technologies;