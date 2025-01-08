'use client';

import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Technologies from "@/components/Technologies";
import React, { useEffect , useState } from "react";
import Sun from '../pics/sun.svg';



function MainComponent() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div
      className={`min-h-screen ${isDarkMode ? "bg-[#121212] text-gray-100" : "bg-gray-50 text-gray-900"}`}
    >
      <nav className="fixed w-full top-0 z-50 bg-opacity-90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a
                href="#"
                className="text-xl sm:text-2xl font-bold text-[#70BA65]"
              >
                AN
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
              {[
                "Home",
                "Technologies",
                "Services",
                "Projects",
                "About",
                "Contact",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => scrollToSection(e, item.toLowerCase())}
                  className="text-sm lg:text-base hover:text-[#70BA65] transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <i
                  className={`fas fa-${isDarkMode ? "sun" : "moon"} text-[#70BA65] text-sm sm:text-base`}
                ></i>
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <i
                  className={`fas fa-${isMenuOpen ? "times" : "bars"} text-[#70BA65] text-sm sm:text-base`}
                ></i>
              </button>
            </div>
          </div>
          {isMenuOpen && (
            <div className="md:hidden py-2 sm:py-4">
              {[
                "Home",
                "Technologies",
                "Services",
                "Projects",
                "About",
                "Contact",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => scrollToSection(e, item.toLowerCase())}
                  className="block py-2 text-sm sm:text-base hover:text-[#70BA65] transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>
      <main className="relative overflow-hidden">
        <div className="min-h-screen flex flex-col items-center justify-center relative mt-16 sm:mt-20">
          <Hero />
          <About isDarkMode={isDarkMode} />
          <Services />
          <Technologies />
          <Projects />
          <Contact />
        </div>
      </main>
    </div>
  );
}





export default MainComponent;