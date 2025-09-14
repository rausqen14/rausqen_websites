import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  const handleExploreProjects = () => {
    navigate('/portfolio');
  };
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center relative px-6 pt-20">

      <div className="container mx-auto z-10 flex flex-col items-center justify-center flex-grow" style={{ marginTop: '-200px' }}>
        <h1 className="text-5xl md:text-7xl lg:text-8xl text-white tracking-widest cursor-default" style={{ fontWeight: 200 }}>
          RausQen
        </h1>
        <p className="mt-4 text-base md:text-lg lg:text-xl text-white font-light tracking-[0.3em] uppercase cursor-default" style={{ textShadow: '0 4px 15px rgba(0,0,0,0.9), 0 0 40px rgba(255,255,255,0.6), 0 0 80px rgba(255,255,255,0.3), 0 0 120px rgba(255,255,255,0.1)' }}>
          AI Engineer
        </p>
        <button
          onClick={handleExploreProjects}
          className="mt-6 inline-block border border-white/30 py-3 px-10 rounded-sm tracking-widest transition-all duration-300 hover:bg-black/30 hover:backdrop-blur-[2px] hover:border-white/60 shiny-text"
          style={{ fontWeight: 550 }}
        >
          EXPLORE PROJECTS
        </button>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2">
        <span className="text-white text-xs tracking-[0.3em] [writing-mode:vertical-rl] transform rotate-180" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8), 0 0 15px rgba(255,255,255,0.3)' }}>SCROLL</span>
        <div className="w-px h-4 bg-white"></div>
      </div>
    </section>
  );
};

export default Hero;