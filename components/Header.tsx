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
    isScrolled && !isPortfolioPage 
      ? 'bg-black/50 backdrop-blur-sm border-b border-gray-800' 
      : 'bg-transparent'
  }`;
  
  return (
    <header className={headerClass}>
      <div className="px-4 md:px-8 h-16 flex items-start pt-2 justify-between relative">
        {isPortfolioPage ? (
          <div className="hidden md:block">
            <Link to="/" title="Homepage" className="text-white text-3xl hover:text-gray-400 transition-colors">
              &#x276E;
            </Link>
          </div>
        ) : <div />}
        
        {location.pathname === '/' && (
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
            <Link to="/" className="text-2xl font-light text-white tracking-widest uppercase whitespace-nowrap">
              Omer Faruk Koc
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
