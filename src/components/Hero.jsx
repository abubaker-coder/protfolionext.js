'use client';
import React, { useState , useEffect } from "react";
import My from '../pics/my - Copy.jpg'


function Hero() {
    const [text, setText] = useState("");
    const [score, setScore] = useState(0);
    const [isTyping, setIsTyping] = useState(true);
    const [showGame, setShowGame] = useState(false);
    const [codeBlocks, setCodeBlocks] = useState([]);
    const fullText = "Frontend Developer";
  
    useEffect(() => {
      let currentIndex = 0;
      const intervalId = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          setTimeout(() => {
            setText("");
            currentIndex = 0;
            setIsTyping((prev) => !prev);
          }, 2000);
        }
      }, 150);
      return () => clearInterval(intervalId);
    }, [isTyping]);
  
    useEffect(() => {
      const blocks = [
        { id: 1, content: "<div>", points: 5 },
        { id: 2, content: "const", points: 10 },
        { id: 3, content: "useState", points: 15 },
      ];
      setCodeBlocks(blocks.sort(() => Math.random() - 0.5));
    }, []);
  
    const handleCodeBlockClick = (points) => {
      setScore((prev) => prev + points);
      setCodeBlocks((prev) => prev.filter((block) => block.points !== points));
    };
  
    return (
      <div className="text-center z-10 relative flex flex-col md:flex-row items-center justify-center gap-8 px-4 transform-style-preserve-3d min-h-screen">
        <div className="absolute inset-0 overflow-hidden">
          <div className="cube-wrapper">
            {[...Array.from({ length: 20 })].map((_, i) => (
              <div
                key={i}
                className="cube"
                style={{
                  "--delay": `${Math.random() * 2}s`,
                  "--size": `${Math.random() * 40 + 20}px`,
                  "--x": `${Math.random() * 100}%`,
                  "--y": `${Math.random() * 100}%`,
                  "--rotation": `${Math.random() * 360}deg`,
                }}
              ></div>
            ))}
          </div>
        </div>
        <div
          className="md:order-2 transform-style-preserve-3d relative z-10"
          style={{ transform: "translateZ(50px)" }}
        >
          <div className="w-[200px] h-[200px] rounded-full overflow-hidden border-4 border-[#70BA65] shadow-lg transform hover:scale-105 transition-transform duration-300">
            <img
              src={My}
              alt="Profile picture showing a professional developer taking a selfie"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div
          className="md:order-1 text-left transform-style-preserve-3d relative z-10"
          style={{ transform: "translateZ(30px)" }}
        >
          <h1 className="font-roboto text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            Abubakar Nadeem
          </h1>
          <div className="h-8">
            <p className="font-roboto text-xl md:text-2xl text-[#70BA65]">
              {text}
            </p>
          </div>
          <p className="font-roboto mt-6 text-lg md:text-xl max-w-2xl">
            Based in Lahore, crafting exceptional digital experiences through
            clean code and creative solutions
          </p>
          <div className="mt-8 space-x-4">
            <button
              onClick={() => setShowGame(!showGame)}
              className="bg-[#70BA65] text-white px-6 py-3 rounded-full font-roboto hover:bg-opacity-90 transition-all transform hover:translateZ(20px)"
            >
              {showGame ? "Hide Game" : "Play Code"}
            </button>
            <button className="border-2 border-[#70BA65] text-[#70BA65] px-6 py-3 rounded-full font-roboto hover:bg-[#70BA65] hover:text-white transition-all transform hover:translateZ(20px)">
              Contact Me
            </button>
          </div>
          {showGame && (
            <div className="mt-8 transform-style-preserve-3d">
              <p className="text-xl mb-4">Score: {score}</p>
              <div className="flex flex-wrap justify-center gap-4">
                {codeBlocks.map((block) => (
                  <div
                    key={block.id}
                    onClick={() => handleCodeBlockClick(block.points)}
                    className="code-block cursor-pointer bg-[#70BA65] bg-opacity-20 p-4 rounded-lg hover:bg-opacity-30 transition-all transform hover:scale-105"
                  >
                    <p className="font-mono">{block.content}</p>
                    <small>+{block.points} points</small>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <style jsx global>{`
          .cube-wrapper {
            position: absolute;
            width: 100%;
            height: 100%;
            transform-style: preserve-3d;
            perspective: 1000px;
          }
          .cube {
            position: absolute;
            width: var(--size);
            height: var(--size);
            left: var(--x);
            top: var(--y);
            background: rgba(112, 186, 101, 0.1);
            border: 1px solid rgba(112, 186, 101, 0.3);
            transform-style: preserve-3d;
            animation: float 6s infinite ease-in-out var(--delay);
            transform: rotateX(var(--rotation)) rotateY(var(--rotation));
          }
          @keyframes float {
            0%, 100% {
              transform: translateZ(0) rotateX(var(--rotation)) rotateY(var(--rotation));
            }
            50% {
              transform: translateZ(100px) rotateX(calc(var(--rotation) + 180deg)) rotateY(calc(var(--rotation) + 180deg));
            }
          }
        `}</style>
      </div>
    );
  }

export default Hero;