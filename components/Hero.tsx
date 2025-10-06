import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  const handleExploreProjects = () => {
    navigate('/portfolio');
  };
  
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-start text-center relative px-6 pt-52">
      <div className="container mx-auto z-10 flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-widest uppercase mb-4" style={{ textShadow: '0 4px 15px rgba(0,0,0,0.9), 0 0 40px rgba(255,255,255,0.6), 0 0 80px rgba(255,255,255,0.3), 0 0 120px rgba(255,255,255,0.1)' }}>
          OMER FARUK KOC
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-white font-light tracking-[0.3em] uppercase mb-6" style={{ textShadow: '0 4px 15px rgba(0,0,0,0.9), 0 0 40px rgba(255,255,255,0.6), 0 0 80px rgba(255,255,255,0.3), 0 0 120px rgba(255,255,255,0.1)' }}>
          AI Engineer
        </p>
        <p className="text-sm md:text-base lg:text-lg text-white font-light tracking-[0.2em] uppercase mb-6" style={{ textShadow: '0 4px 15px rgba(0,0,0,0.9), 0 0 40px rgba(255,255,255,0.6), 0 0 80px rgba(255,255,255,0.3), 0 0 120px rgba(255,255,255,0.1)' }}>
          The Evolution from Statistics to Artificial Intelligence
        </p>
        <button
          onClick={handleExploreProjects}
          className="border border-white/30 py-3 px-12 rounded-sm tracking-widest transition-all duration-300 hover:bg-black/30 hover:backdrop-blur-[2px] hover:border-white/60 shiny-text text-base"
          style={{ fontWeight: 550 }}
        >
          EXPLORE PROJECTS
        </button>
      </div>
    </section>
  );
};

export default Hero;
