import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import { Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import backgroundImage from './assets/background.jpg';

const App: React.FC = () => {
  return (
    <div className="bg-black text-gray-300 antialiased relative">
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-fixed"
        style={{ 
          backgroundImage: `url(${backgroundImage})`,
          zIndex: 0,
          backgroundPosition: '30% 50%'
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black/0"></div>
      </div>

      <div className="relative z-10">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Contact />
              </>
            } />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </main>
      </div>
      
      <Analytics />
    </div>
  );
};

export default App;
