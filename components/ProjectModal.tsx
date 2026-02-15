import React, { useEffect, useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, Sparkles, ArrowUpRight, Layers, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { Project } from '../types';
import { useTheme } from '../context/ThemeContext';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { t } = useTheme();
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Zoom for Lightbox
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const lastMousePos = useRef({ x: 0, y: 0 });

  // Reset zoom on image change
  useEffect(() => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  }, [lightboxIndex, lightboxOpen]);

  // Handle zoom with mouse wheel (zooms towards cursor)
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    // Determine new zoom level
    const delta = -e.deltaY * 0.002;
    const newZoom = Math.min(Math.max(1, zoom + delta), 4);

    // Calculate scaling ratio
    const ratio = newZoom / zoom;

    // Get mouse position relative to container center
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);

    // Calculate new pan to keep the point under cursor stationary
    // Formula: newPan = M * (1 - ratio) + oldPan * ratio
    // where M is mouse pos relative to center
    const newPan = {
      x: x * (1 - ratio) + pan.x * ratio,
      y: y * (1 - ratio) + pan.y * ratio
    };

    setZoom(newZoom);
    setPan(newZoom === 1 ? { x: 0, y: 0 } : newPan);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom > 1) {
      e.preventDefault();
      setIsDragging(true);
      lastMousePos.current = { x: e.clientX, y: e.clientY };
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const dx = e.clientX - lastMousePos.current.x;
      const dy = e.clientY - lastMousePos.current.y;
      lastMousePos.current = { x: e.clientX, y: e.clientY };
      setPan((prev) => ({ x: prev.x + dx, y: prev.y + dy }));
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);



  const images = project?.images && project.images.length > 0 ? project.images : [project?.imageUrl || ''];

  // Auto-slide effect
  useEffect(() => {
    if (!project || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3500); // 3.5 seconds

    return () => clearInterval(interval);
  }, [project, images.length]);

  // Reset loading state when project changes
  useEffect(() => {
    setIsImageLoaded(false);
    setCurrentImageIndex(0);
  }, [project]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (project || lightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project, lightboxOpen]);

  // Handle keyboard navigation for lightbox
  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxOpen(false);
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev + 1) % images.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, images.length]);

  // Handle ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!project) return null;

  // Check if githubUrl is a Kaggle link
  const isKaggleLink = project.githubUrl?.includes('kaggle.com');

  return createPortal(
    <AnimatePresence>
      <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center sm:p-6 p-0">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-neutral-200/80 dark:bg-black/80 backdrop-blur-md"
        />

        {/* Modal Container - Full width on mobile, rounded nicely */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 50 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="relative w-full h-full sm:h-auto sm:max-h-[90vh] sm:max-w-[85vw] overflow-y-auto bg-white dark:bg-neutral-900 sm:rounded-[3rem] rounded-none shadow-2xl border-0 sm:border border-neutral-200 dark:border-neutral-800 scrollbar-hide flex flex-col"
        >
          {/* Close Button - Sticky Wrapper */}
          <div className="sticky top-0 z-50 w-full h-0 flex justify-end overflow-visible pointer-events-none">
            <button
              onClick={onClose}
              className="pointer-events-auto mt-4 mr-4 sm:mt-8 sm:mr-8 p-2 text-white drop-shadow-md hover:opacity-80 transition-opacity duration-200"
            >
              <X size={32} />
            </button>
          </div>

          {/* Hero Section (Image) */}
          <div className="relative h-[200px] sm:h-[260px] md:h-[320px] w-full flex-shrink-0 bg-neutral-200 dark:bg-neutral-800">
            {/* Skeleton / Placeholder */}
            {!isImageLoaded && (
              <div className="absolute inset-0 bg-neutral-300 dark:bg-neutral-800 animate-pulse z-0" />
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/20 to-transparent z-10" />
            <img
              src={project.imageUrl}
              alt={project.title}
              decoding="async"
              onLoad={() => setIsImageLoaded(true)}
              className={`w-full h-full object-cover transition-opacity duration-700 ease-in-out ${isImageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
            />

            {/* Title Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-14 z-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight shadow-black drop-shadow-lg leading-tight">
                  {project.titleKey ? t.projects.titles[project.titleKey as keyof typeof t.projects.titles] : project.title}
                </h2>
              </motion.div>
            </div>
          </div>

          {/* Content Layout - Grid Layout for Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 p-6 sm:p-14">

            {/* Left Column: Description (Spans 8 columns) */}
            <div className="lg:col-span-8 space-y-6 sm:space-y-8">
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-neutral-900 dark:text-white flex items-center gap-3">
                {t.projects.about}
              </h3>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-lg sm:text-xl leading-relaxed text-neutral-600 dark:text-neutral-300 font-light whitespace-pre-line">
                  {project.descriptionKey ? t.projects.descriptions[project.descriptionKey as keyof typeof t.projects.descriptions] : project.description}
                </p>
              </div>
            </div>

            {/* Right Column: Technologies & Buttons (Spans 4 columns) */}
            <div className="lg:col-span-4 flex flex-col gap-8 lg:gap-10 lg:pl-10 lg:border-l border-neutral-200 dark:border-neutral-800">

              {/* Technologies */}
              <div>
                <h4 className="text-sm font-medium text-neutral-500 dark:text-neutral-400 tracking-wider mb-4 sm:mb-6 flex items-center gap-2">
                  <Layers size={18} />
                  {t.projects.technologies}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 sm:px-4 sm:py-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-800 rounded-full border border-neutral-200 dark:border-neutral-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-3 items-start pt-4 border-t border-neutral-200 dark:border-neutral-800">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-6 px-6 py-3 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white font-display font-bold text-base transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-sm hover:shadow-md w-full sm:w-auto justify-center sm:justify-start"
                  >
                    <span className="flex items-center gap-3">
                      <ExternalLink size={20} />
                      {t.projects.liveDemo}
                    </span>
                    <ArrowUpRight size={20} className="text-neutral-400" />
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-6 px-6 py-3 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white font-display font-bold text-base transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-sm hover:shadow-md w-full sm:w-auto justify-center sm:justify-start"
                  >
                    <span className="flex items-center gap-3">
                      {isKaggleLink ? (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.285.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.07.358" />
                        </svg>
                      ) : (
                        <Github size={20} />
                      )}
                      {isKaggleLink ? t.projects.notebook : t.projects.code}
                    </span>
                    <ArrowUpRight size={20} className="text-neutral-400" />
                  </a>
                )}
              </div>

              {/* Project Images Gallery */}
              {images.length > 1 && (
                <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800">
                  <h4 className="text-sm font-medium text-neutral-500 dark:text-neutral-400 tracking-wider mb-4 flex items-center gap-2">
                    <Layers size={18} />
                    {t.projects.screenshots}
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setLightboxIndex(index);
                          setLightboxOpen(true);
                        }}
                        className="relative aspect-video rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-500 transition-all duration-300 hover:scale-105 group cursor-pointer"
                      >
                        <img
                          src={image}
                          alt={`${project.title} screenshot ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                          <ExternalLink className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white" size={24} />
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

            </div>

          </div>
        </motion.div>

        {/* Lightbox */}
        {lightboxOpen && (
          <div
            className="fixed inset-0 z-[70] bg-black/95 flex items-center justify-center p-4 overflow-hidden"
            onClick={() => setLightboxOpen(false)}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxOpen(false);
              }}
              className="absolute z-50 top-4 right-4 p-2 text-white hover:opacity-80 transition-opacity"
            >
              <X size={32} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);
              }}
              className="absolute z-50 left-4 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all"
            >
              <ChevronLeft size={32} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev + 1) % images.length);
              }}
              className="absolute z-50 right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all"
            >
              <ChevronRight size={32} />
            </button>

            <div
              className="max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center overflow-hidden"
              onWheel={handleWheel}
              onMouseDown={handleMouseDown}
              style={{ cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'zoom-in' }}
            >
              <img
                src={images[lightboxIndex]}
                alt={`${project.title} screenshot ${lightboxIndex + 1}`}
                className="max-w-full max-h-full object-contain transition-transform duration-75 ease-linear will-change-transform"
                style={{
                  transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
                }}
                draggable={false}
                onClick={(e) => e.stopPropagation()}
              />
            </div>

            <div
              className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-4 py-2 rounded-full z-50"
              onClick={(e) => e.stopPropagation()}
            >
              {lightboxIndex + 1} / {images.length}
            </div>
          </div>
        )}
      </div>
    </AnimatePresence>,
    document.body
  );
};