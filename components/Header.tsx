import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  const allNavLinks = [
    { href: '/portfolio', label: 'PORTFOLIO' },
    { href: '#contact', label: 'CONTACT' },
  ];

  // Portfolio sayfasında sadece Contact butonunu göster
  const navLinks = location.pathname === '/portfolio' 
    ? allNavLinks.filter(link => link.href === '#contact')
    : allNavLinks;

  // Safari tespiti
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  const headerClass = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? (isSafari ? 'bg-black/50 border-b border-gray-800' : 'bg-black/50 backdrop-blur-sm border-b border-gray-800') : 'bg-transparent'}`;
  return (
    <header className={headerClass}>
      <div className="px-4 md:px-8 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-medium text-white tracking-widest uppercase">
          Omer Faruk Koc
        </Link>
        <nav className="hidden md:flex space-x-0">
          {navLinks.map((link) => (
            link.href.startsWith('/') ? (
              <a key={link.href} href={link.href} className="text-white hover:text-white transition-all duration-300 tracking-widest text-sm px-4 py-2 rounded-sm hover:bg-black/30 hover:backdrop-blur-[2px] border border-transparent hover:border-white/15">
                {link.label}
              </a>
            ) : (
              <a key={link.href} href={link.href} className="text-white hover:text-white transition-all duration-300 tracking-widest text-sm px-4 py-2 rounded-sm hover:bg-black/30 hover:backdrop-blur-[2px] border border-transparent hover:border-white/15">
                {link.label}
              </a>
            )
          ))}
        </nav>
        <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                </svg>
            </button>
        </div>
      </div>
      {isMenuOpen && (
    <div className={`md:hidden bg-black/80${isSafari ? '' : ' backdrop-blur-sm'}`}> 
      <nav className="flex flex-col items-center py-4 space-y-4">
        {navLinks.map((link) => (
          link.href.startsWith('/') ? (
            <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-white hover:text-white transition-all duration-300 text-lg px-6 py-3 rounded-sm hover:bg-black/30 hover:backdrop-blur-[2px] border border-transparent hover:border-white/15">
              {link.label}
            </a>
          ) : (
            <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-white hover:text-white transition-all duration-300 text-lg px-6 py-3 rounded-sm hover:bg-black/30 hover:backdrop-blur-[2px] border border-transparent hover:border-white/15">
              {link.label}
            </a>
          )
        ))}
      </nav>
    </div>
      )}
    </header>
  );
};

export default Header;