import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  const handleExploreProjects = () => {
    navigate('/portfolio');
  };
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center relative px-6">
      
      {/* Left Vertical Text */}
      <div className="absolute left-4 md:left-8 top-[54%] -translate-y-1/2 hidden md:block">
          <p className="[writing-mode:vertical-rl] text-gray-500 tracking-[0.3em] text-sm uppercase cursor-default">
              Artificial Intelligence
          </p>
      </div>

      <div className="container mx-auto z-10 flex flex-col items-center justify-center flex-grow">
  <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-widest cursor-default">
          RausQen
        </h1>
        <p className="mt-4 text-lg text-white font-light tracking-[0.3em] uppercase cursor-default">
          AI Engineer
        </p>
        <button 
          onClick={handleExploreProjects}
          className="mt-12 inline-block border border-white/30 text-white font-light py-3 px-10 rounded-sm tracking-widest transition-all duration-300 hover:bg-white/10 hover:border-white/60"
        >
          EXPLORE PROJECTS
        </button>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2">
          <span className="text-gray-500 text-sm tracking-[0.3em] [writing-mode:vertical-rl] transform rotate-180">SCROLL</span>
          <div className="w-px h-6 bg-gray-600"></div>
      </div>
    </section>
  );
};

export default Hero;