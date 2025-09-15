import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import BackgroundImage from './assets/background.jpg';
import { Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';

const App: React.FC = () => {
  return (
  <div className="bg-black text-gray-300 antialiased relative">
      {/* Background Image Container */}
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-fixed"
        style={{ 
          backgroundImage: `url(${BackgroundImage})`,
          zIndex: 0,
          backgroundPosition: '30% 50%'
        }}
      >
        {/* Very light dark overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Projects />
                <Contact />
              </>
            } />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </main>
      </div>
      
      {/* Vercel Analytics */}
      <Analytics />
    </div>
  );
};

export default App;