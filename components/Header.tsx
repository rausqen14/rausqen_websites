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

  // Safari tespiti
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  const headerClass = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? (isSafari ? 'bg-black/50 border-b border-gray-800' : 'bg-black/50 backdrop-blur-sm border-b border-gray-800') : 'bg-transparent'}`;
  
  return (
    <header className={headerClass}>
      <div className="px-4 md:px-8 py-4 flex items-center relative h-16">
        {location.pathname === '/' && (
          <Link to="/" className="absolute left-1/2 -translate-x-1/2 text-2xl font-light text-white tracking-widest uppercase whitespace-nowrap">
            Omer Faruk Koc
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
