import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { Moon, Sun, Mail } from 'lucide-react';
import { APP_NAME } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const { theme, toggleTheme, language, setLanguage, t } = useTheme();

  const navItems = [
    { label: t.nav.home, path: '/' },
    { label: t.nav.projects, path: '/projects' },
  ];

  // Save scroll position before navigation
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Get current path key
    const currentPath = location.pathname.replace(/^\//, '').replace(/^#\//, '') || 'home';
    const key = `scrollPos_${currentPath}`;
    // Save current scroll position
    sessionStorage.setItem(key, window.scrollY.toString());
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 flex justify-center pt-6 px-4 pointer-events-none">
      <div className="relative pointer-events-auto w-full max-w-6xl backdrop-blur-xl bg-white/80 dark:bg-black/80 border border-neutral-200/50 dark:border-neutral-700/50 rounded-full px-6 py-3 flex justify-between items-center shadow-lg transition-all duration-300">

        {/* Logo / Brand Area */}
        <div className="flex items-center gap-2 font-display font-bold text-black dark:text-white">
          <span className="tracking-tight text-xl pl-2">RausQen</span>
        </div>

        {/* Navigation Links (Centered) */}
        <div className="hidden md:flex gap-8 items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={handleNavClick}
                className={`
                  text-base transition-colors duration-200
                  ${isActive
                    ? 'text-black dark:text-white font-bold'
                    : 'text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white font-medium'}
                `}
              >
                {item.label}
              </NavLink>
            );
          })}
        </div>

        {/* Controls (Right) */}
        <div className="flex items-center gap-1 sm:gap-2">

          {/* Contact Link */}
          <a
            href="mailto:rausqen@hotmail.com"
            className="text-sm font-medium text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors flex items-center gap-2"
          >
            <span className="hidden md:block">{t.hero.contactMe}</span>
            <div className="md:hidden w-10 h-10 flex items-center justify-center">
              <Mail size={20} />
            </div>
          </a>

          <div className="w-px h-6 bg-neutral-300/50 dark:bg-neutral-700/50 mx-1 hidden md:block" />

          {/* Language Toggle */}
          <button
            onClick={() => setLanguage(language === 'en' ? 'tr' : 'en')}
            className="w-10 h-10 flex items-center justify-center font-sans font-bold text-base text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-all duration-300 hover:scale-110"
            title="Switch Language"
          >
            {language.toUpperCase()}
          </button>

          {/* Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.1, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 flex items-center justify-center text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white"
            title="Toggle Theme"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={theme}
                initial={{ y: -10, opacity: 0, rotate: -30 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                exit={{ y: 10, opacity: 0, rotate: 30 }}
                transition={{ duration: 0.2 }}
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>

      </div>

      {/* Mobile Navigation (Bottom) */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 pointer-events-auto z-50">
        <div className="flex gap-6 bg-white/80 dark:bg-black/80 backdrop-blur-xl px-8 py-4 rounded-full border border-neutral-200/50 dark:border-neutral-700/50 shadow-xl">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={handleNavClick}
                className={`
                    text-sm transition-colors duration-200 whitespace-nowrap
                    ${isActive
                    ? 'text-black dark:text-white font-bold'
                    : 'text-neutral-600 dark:text-neutral-300 font-medium'}
                    `}
              >
                {item.label}
              </NavLink>
            );
          })}
        </div>
      </div>
    </nav>
  );
};