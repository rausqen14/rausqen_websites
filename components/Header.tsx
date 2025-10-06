import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isPortfolioPage = location.pathname === '/portfolio';

  const headerClass = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled 
      ? 'bg-black/50 backdrop-blur-sm border-b border-gray-800' 
      : 'bg-transparent'
  }`;
  
  return (
    <header className={headerClass}>
      <div className="px-4 md:px-8 h-16 flex items-start pt-2 justify-between relative">
        <div />
        
        {location.pathname === '/portfolio' && (
          <div className="absolute left-8 top-1/2 -translate-y-1/2">
            <Link to="/" className="text-2xl font-light text-white tracking-widest uppercase whitespace-nowrap" onClick={(e) => {
              e.preventDefault();
              window.location.href = '/';
            }}>
              Omer Faruk Koc
            </Link>
          </div>
        )}
        
        {location.pathname === '/' && (
          <div className="flex items-center space-x-6 h-full">
            <Link 
              to="/portfolio" 
              className="text-sm font-light text-white/80 tracking-widest uppercase hover:text-gray-300 transition-colors"
            >
              PORTFOLIO
            </Link>
            <Link 
              to="#contact" 
              className="text-sm font-light text-white/80 tracking-widest uppercase hover:text-gray-300 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              CONTACT
            </Link>
          </div>
        )}
        
        {location.pathname === '/portfolio' && (
          <div className="flex items-center space-x-6 h-full">
            <Link 
              to="#contact" 
              className="text-sm font-light text-white/60 tracking-widest uppercase hover:text-gray-300 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              CONTACT
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
