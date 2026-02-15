import React, { useState, useMemo, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { ShinyText } from './components/ShinyText';
import { ProjectCard } from './components/ProjectCard';
import { ProjectModal } from './components/ProjectModal';
import { SocialSidebar } from './components/SocialSidebar';
import { PROJECTS, GLOBAL_CERTIFICATES } from './constants';
import { ArrowRight, Code, Database, Layout, Layers, Cpu, Globe, Sparkles, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { useTheme } from './context/ThemeContext';
import { Project } from './types';
import { motion, AnimatePresence } from 'framer-motion';

// --- Components ---

const ScrollRestoration: React.FC = () => {
  const location = useLocation();
  
  // Get unique key for current path
  const getPathKey = (locPathname: string) => {
    const cleanPath = locPathname.replace(/^\//, '').replace(/^#\//, '') || 'home';
    return `scrollPos_${cleanPath}`;
  };

  const pathname = location.pathname;
  const key = getPathKey(pathname);

  // Restore scroll on path change - use useLayoutEffect for sync timing
  React.useLayoutEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const saved = sessionStorage.getItem(key);
    if (saved) {
      const targetScroll = parseInt(saved, 10);
      if (!isNaN(targetScroll)) {
        // Use double requestAnimationFrame for guaranteed sync
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            window.scrollTo(0, targetScroll);
          });
        });
      }
    } else if (key === 'scrollPos_home') {
      window.scrollTo(0, 0);
    }
  }, [key]);

  // Save scroll on scroll and on navigate away
  React.useEffect(() => {
    const currentKey = key;
    
    const saveScroll = () => {
      sessionStorage.setItem(currentKey, window.scrollY.toString());
    };

    window.addEventListener('scroll', saveScroll, { passive: true });
    
    // Save current position on mount
    if (window.scrollY > 0) {
      saveScroll();
    }

    // Save on hashchange (navigation)
    const handleHashChange = () => {
      saveScroll();
    };
    window.addEventListener('hashchange', handleHashChange);

    // Save on popstate (browser back/forward)
    const handlePopState = () => {
      saveScroll();
    };
    window.addEventListener('popstate', handlePopState);

    return () => {
      saveScroll();
      window.removeEventListener('scroll', saveScroll);
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handlePopState);
    };
  }, [key]);

  return null;
};



const HeroSection: React.FC = () => {
  const { t } = useTheme();

  // Modern Staggered Blur-In Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: {
      y: 30,
      opacity: 0,
      filter: 'blur(10px)'
    },
    visible: {
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 1,
        ease: [0.25, 0.4, 0.25, 1] // Custom ease-out curve
      }
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 relative pt-20 pb-20 sm:pb-24 overflow-hidden">

      {/* Background Watermark Signature */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-20 select-none pointer-events-none whitespace-nowrap">
        <span className="text-[25vw] leading-none font-display font-medium text-neutral-900/10 dark:text-neutral-800/50 tracking-tighter blur-[1px]">
          RausQen
        </span>
      </div>

      {/* Dynamic Background Elements for Hero */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1400px] h-[800px] bg-gradient-to-b from-neutral-200/40 via-neutral-100/20 to-transparent dark:from-neutral-800/40 dark:via-neutral-900/20 dark:to-transparent rounded-[100%] blur-3xl -z-10 pointer-events-none" />

      {/* Hero Content with Framer Motion */}
      <motion.div
        className="max-w-screen-xl w-full text-center space-y-10 z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="space-y-2">
          {/* Removed ShinyText, just plain text with same layout */}
          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-display font-medium tracking-tighter leading-[0.9] text-black dark:text-white flex flex-col items-center">
            <span className="block py-4 pr-4">
              {t.hero.shinyText1}
            </span>
            <span className="block py-4 pr-4 text-black dark:text-white">
              {t.hero.shinyText2}
            </span>
          </h1>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-neutral-600 dark:text-neutral-400 text-base sm:text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed font-light px-4 pt-4"
        >
          {t.hero.description}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-6 sm:pt-10"
        >
          {/* Primary Button */}
          <Link
            to="/projects"
            onClick={() => {
              // Save current scroll position before navigating
              const path = window.location.hash.replace('#/', '').replace('#', '') || 'home';
              sessionStorage.setItem(`scrollPos_${path}`, window.scrollY.toString());
            }}
            className="group relative px-10 py-4 sm:px-12 sm:py-5 bg-neutral-900 dark:bg-white text-white dark:text-black rounded-full font-semibold text-base sm:text-lg hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-3"
          >
            <span className="relative z-10">{t.hero.viewProjects}</span>
            <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </motion.div>

      {/* Tech Stack Marquee */}
      <div className="absolute bottom-12 w-full max-w-[90%] lg:max-w-[85%] lg:pr-24 mx-auto px-6 opacity-40 hover:opacity-100 transition-opacity duration-500 hidden sm:block">
        <div className="flex justify-center md:justify-between items-center text-neutral-400 dark:text-neutral-600 gap-12">
          <div className="flex gap-8 items-center">
            <Code size={28} />
            <span className="hidden md:block h-px w-32 bg-gradient-to-r from-neutral-300 to-transparent dark:from-neutral-800" />
            <Layout size={28} />
            <span className="hidden md:block h-px w-32 bg-gradient-to-r from-neutral-300 to-transparent dark:from-neutral-800" />
            <Database size={28} />
          </div>
          <span className="font-mono text-xs md:text-sm tracking-[0.3em] text-neutral-500 dark:text-neutral-500 font-bold uppercase ml-4 md:ml-0 whitespace-nowrap">AGENTIC SYSTEMS • LARGE SCALE ML • FULL STACK AI</span>
        </div>
      </div>
    </section>
  );
}

const WorkflowSection: React.FC = () => {
  const { t } = useTheme();

  const steps = [
    t.workflow.step1,
    t.workflow.step2,
    t.workflow.step3,
    t.workflow.step4,
  ];

  return (
    <section className="py-20 border-y border-neutral-200 dark:border-neutral-900 bg-neutral-50/50 dark:bg-black/50 backdrop-blur-sm relative overflow-hidden">
      <div className="max-w-[95%] lg:pr-24 mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 relative">
          {/* Progress Line Connector (Desktop) */}

          {steps.map((step, index) => (
            <div key={index} className="flex-1 w-full group relative self-stretch flex items-center">
              <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-8 rounded-3xl group-hover:border-neutral-400 dark:group-hover:border-neutral-600 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl h-full flex flex-col w-full">
                <h4 className="text-xl font-bold mb-3 text-black dark:text-white uppercase tracking-wider">
                  <ShinyText text={step.title} />
                </h4>
                <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Arrow indicator for Desktop */}
              {index < steps.length - 1 && (
                <motion.div
                  className="hidden lg:block absolute -right-8 top-[45%] -translate-y-1/2 z-20"
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <ArrowRight size={24} className="text-neutral-400 dark:text-neutral-600 group-hover:text-black dark:group-hover:text-white transition-colors" />
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServicesSection: React.FC = () => {
  const { t } = useTheme();

  const services = [
    {
      icon: <Layers size={32} />,
      title: t.services.frontend.title,
      desc: t.services.frontend.desc
    },
    {
      icon: <Cpu size={32} />,
      title: t.services.backend.title,
      desc: t.services.backend.desc
    },
    {
      icon: <Globe size={32} />,
      title: t.services.design.title,
      desc: t.services.design.desc
    }
  ];

  return (
    <section className="py-20 sm:py-32 px-6">
      <div className="max-w-[95%] lg:pr-24 mx-auto">
        <div className="mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6 text-black dark:text-white">
            <ShinyText text={t.services.title} />
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-12">
          {services.map((service, idx) => (
            <div key={idx} className="group p-8 md:p-12 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="mb-8 p-4 rounded-2xl bg-neutral-100 dark:bg-neutral-800 w-fit text-black dark:text-white group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black dark:text-white font-display">
                <ShinyText text={service.title} />
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-lg">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


import { CertificateLightbox } from './components/CertificateLightbox';

const CertificatesSection: React.FC = () => {
  const { t } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Initialize with correct value for current viewport to prevent layout shift during mount
  const [slidesToShow, setSlidesToShow] = useState(() => {
    if (typeof window === 'undefined') return 4;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 4;
  });

  // Handle responsiveness
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setSlidesToShow(1);
      else if (window.innerWidth < 1024) setSlidesToShow(2);
      else setSlidesToShow(4);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = GLOBAL_CERTIFICATES.length;
  // Maximum index is total items minus the ones already visible
  const maxIndex = Math.max(0, totalSlides - slidesToShow);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Auto-scroll logic with slower interval for smoother scrolling
  useEffect(() => {
    if (isPaused || isLightboxOpen) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isPaused, isLightboxOpen, currentIndex, slidesToShow]);

  return (
    <section className="py-20 sm:py-32 px-6 bg-neutral-100/30 dark:bg-neutral-900/10">
      <div className="max-w-[95%] lg:pr-24 mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-16">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-black dark:text-white">
              <ShinyText text={t.certificates.title} />
            </h2>
          </div>

          <div className="flex gap-4">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-black dark:text-white"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-black dark:text-white"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${currentIndex * (100 / slidesToShow)}%` }}
              transition={{ duration: 2, ease: [0.32, 0.72, 0, 1] }}
            >
              {GLOBAL_CERTIFICATES.map((cert, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 px-2 sm:px-4"
                  style={{ width: `${100 / slidesToShow}%` }}
                >
                  <div
                    onClick={() => {
                      setLightboxIndex(idx);
                      setIsLightboxOpen(true);
                    }}
                    className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-300 hover:shadow-xl flex flex-col h-full"
                  >
                    {cert.image && (
                      <div className="group/img aspect-[1.4/1] w-full overflow-hidden bg-neutral-100 dark:bg-neutral-800 cursor-zoom-in">
                        <img
                          src={cert.image}
                          alt={cert.nameKey ? (t.certificates.names as any)[cert.nameKey] : cert.name}
                          className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                          <ZoomIn size={24} className="text-white opacity-0 group-hover/img:opacity-100 transition-opacity transform scale-50 group-hover/img:scale-100 duration-300" />
                        </div>
                      </div>
                    )}
                    <div className="py-3 px-5 sm:py-5 sm:px-8 flex flex-col flex-grow bg-white dark:bg-neutral-900">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-black dark:text-white mb-1 sm:mb-2 line-clamp-2 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors font-display">
                        <ShinyText text={cert.nameKey ? (t.certificates.names as any)[cert.nameKey] : cert.name} />
                      </h3>
                      <p className="text-xs sm:text-sm md:text-base text-neutral-500 font-medium">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <CertificateLightbox
        certificates={GLOBAL_CERTIFICATES}
        initialIndex={lightboxIndex}
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
      />
    </section>
  );
};

const HomePage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="overflow-hidden"
    >
      <HeroSection />
      <WorkflowSection />
      <ServicesSection />
      <CertificatesSection />
      {/* Footer CTA removed */}
    </motion.div>
  );
};

const ProjectsPage: React.FC = () => {
  const { t } = useTheme();

  // Simple session-aware state
  const [selectedCategory, setSelectedCategory] = useState<string>(() => {
    return sessionStorage.getItem('selectedProjectCategory') || 'All';
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Keep storage in sync
  useEffect(() => {
    sessionStorage.setItem('selectedProjectCategory', selectedCategory);
  }, [selectedCategory]);

  // Extract unique categories
  const categories = ['All', ...Array.from(new Set(PROJECTS.map(p => p.category)))];

  // Filter Logic
  const filteredProjects = useMemo(() => {
    return PROJECTS.filter(project => {
      return selectedCategory === 'All' || project.category === selectedCategory;
    });
  }, [selectedCategory]);

  return (
    <main className="min-h-screen pt-32 sm:pt-40 pb-20 px-4 sm:px-6 max-w-[95%] lg:pr-28 mx-auto">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 sm:mb-20 space-y-6 sm:space-y-8"
      >
        <div>
          <h2 className="text-5xl sm:text-6xl md:text-8xl font-display font-bold mb-6 text-black dark:text-white tracking-tight">
            {t.projects.title} <br className="hidden md:block" />
            <ShinyText text={t.projects.titleSuffix} />
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl text-lg sm:text-xl leading-relaxed border-l-2 border-neutral-200 dark:border-neutral-800 pl-6 mt-8">
            {t.projects.description}
          </p>
        </div>

        {/* Filters Toolbar */}
        <div className="flex gap-8 items-center justify-start pt-10 border-t border-neutral-200 dark:border-neutral-800 overflow-x-auto pb-4 sm:pb-0 scrollbar-hide">
          {/* Category Tabs */}
          <div className="flex gap-6 sm:gap-10 w-full sm:w-auto min-w-max">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className="relative pb-3 group focus:outline-none"
              >
                <span className={`
                    text-base sm:text-lg transition-colors duration-300
                    ${selectedCategory === cat
                    ? 'text-black dark:text-white font-bold' // More distinct active state
                    : 'text-neutral-500 dark:text-neutral-500 font-medium group-hover:text-black dark:group-hover:text-white'}
                 `}>
                  {cat === 'All' ? t.projects.filterAll : cat}
                </span>

                {/* Animated Underline */}
                {selectedCategory === cat ? (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-black dark:bg-white"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                ) : (
                  // Subtle hover effect
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-black/10 dark:bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                )}
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Projects Grid with AnimatePresence */}
      {/* 
         PERFORMANCE FIX: Removed `layout` prop. 
         The `layout` prop forces frequent recalculations of bounding boxes which causes lag on tab switch.
         We only keep enter/exit animations.
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout" initial={false}>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={false}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.15 } }}
              transition={{
                duration: 0.3,
                ease: [0.23, 1, 0.32, 1], // Quick ease-out
                opacity: { duration: 0.2 }
              }}
              style={{ transformZ: 0 }} // GPU Hint
              className="h-full"
            >
              <ProjectCard
                project={project}
                onClick={setSelectedProject}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Empty State with Animation */}
      <AnimatePresence>
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="py-32 flex flex-col items-center justify-center text-center"
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="mb-6 p-6 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800"
            >
              <Sparkles size={48} className="text-neutral-400" />
            </motion.div>
            <h3 className="text-xl font-bold text-black dark:text-white mb-2">No projects found</h3>
            <p className="text-neutral-500 max-w-sm">
              We couldn't find anything in this category. Try selecting a different category.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <div className="mt-40 text-center border-t border-neutral-200 dark:border-neutral-900 pt-20">
        <h3 className="text-3xl font-display font-semibold mb-8 text-black dark:text-white">{t.projects.footer}</h3>
        <a
          href="mailto:rausqen@hotmail.com"
          className="inline-flex items-center gap-2 text-4xl sm:text-5xl md:text-7xl font-bold hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors group"
        >
          <span className="border-b-4 border-black dark:border-white pb-2">{t.projects.letsTalk}</span>
          <ArrowRight className="w-10 h-10 md:w-20 md:h-20 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
        </a>
      </div>
    </main>
  );
};

// --- Main App Component ---

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="bg-neutral-50 dark:bg-black min-h-screen text-black dark:text-white selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black transition-colors duration-300">

        {/* Modern Ambient Background */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Grain/Noise Overlay */}
          <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
          />

          {/* Subtle Gradient Spots */}
          <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-blue-100/30 dark:bg-neutral-800/20 blur-[120px] animate-float will-change-transform" style={{ transform: 'translate3d(0,0,0)' }} />
          <div className="absolute top-[40%] -right-[10%] w-[60%] h-[60%] rounded-full bg-purple-100/30 dark:bg-neutral-900/20 blur-[100px] animate-float will-change-transform" style={{ animationDelay: '2s', transform: 'translate3d(0,0,0)' }} />
        </div>

        <ScrollRestoration />
        <Navbar />
        <SocialSidebar />

        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
};

export default App;