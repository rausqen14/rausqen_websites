import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  const handleExploreProjects = () => {
    navigate('/portfolio');
  };
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center relative px-6 pt-20">
      
      {/* Left Vertical Text */}
      <div className="absolute left-4 md:left-8 top-[54%] -translate-y-1/2 hidden md:block">
          <p className="[writing-mode:vertical-rl] text-white tracking-[0.3em] text-sm uppercase cursor-default" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8), 0 0 15px rgba(255,255,255,0.3)' }}>
              Artificial Intelligence
          </p>
      </div>

      <div className="container mx-auto z-10 flex flex-col items-center justify-center flex-grow" style={{ marginTop: '-200px' }}>
  <h1 className="text-5xl md:text-7xl lg:text-8xl font-thin text-white tracking-widest cursor-default drop-shadow-2xl" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.8), 0 0 30px rgba(255,255,255,0.4), 0 0 60px rgba(255,255,255,0.2)' }}>
          RausQen
        </h1>
        <p className="mt-4 text-lg md:text-xl lg:text-2xl text-white font-light tracking-[0.3em] uppercase cursor-default" style={{ textShadow: '0 4px 15px rgba(0,0,0,0.9), 0 0 40px rgba(255,255,255,0.6), 0 0 80px rgba(255,255,255,0.3), 0 0 120px rgba(255,255,255,0.1)' }}>
          AI Engineer
        </p>
        <button 
          onClick={handleExploreProjects}
          className="mt-6 inline-block border border-white/30 text-white font-light py-3 px-10 rounded-sm tracking-widest transition-all duration-300 hover:bg-black/30 hover:backdrop-blur-[2px] hover:border-white/60"
          style={{ textShadow: '0 2px 10px rgba(0,0,0,0.8), 0 0 20px rgba(255,255,255,0.5), 0 0 40px rgba(255,255,255,0.2)' }}
        >
          EXPLORE PROJECTS
        </button>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2">
          <span className="text-white text-sm tracking-[0.3em] [writing-mode:vertical-rl] transform rotate-180" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8), 0 0 15px rgba(255,255,255,0.3)' }}>SCROLL</span>
          <div className="w-px h-6 bg-white"></div>
      </div>
    </section>
  );
};

export default Hero;