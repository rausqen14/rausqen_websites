import React, { useState, useEffect } from 'react';
import { Project } from '../types';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { ShinyText } from './ShinyText';

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const { t } = useTheme();
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const images = [project.imageUrl, ...(project.images || [])];

  // Auto-slide effect when hovered
  useEffect(() => {
    if (!isHovered || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 1700); // 1.7 seconds

    return () => clearInterval(interval);
  }, [isHovered, images.length]);

  // Reset to first image when not hovered
  useEffect(() => {
    if (!isHovered) {
      setCurrentImageIndex(0);
    }
  }, [isHovered]);

  return (
    <div
      onClick={() => onClick(project)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group cursor-pointer relative bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-[2.5rem] overflow-hidden hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-300 flex flex-col h-full shadow-sm hover:shadow-2xl hover:shadow-black/5 dark:hover:shadow-white/5"
    >
      {/* Image Container - h-32 on mobile, h-40 on desktop */}
      <div className="relative h-32 sm:h-40 overflow-hidden bg-neutral-200 dark:bg-neutral-800">
        {/* Skeleton Loader */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-neutral-200 dark:bg-neutral-800 animate-pulse z-0" />
        )}

        <div className="absolute inset-0 bg-neutral-900/10 dark:bg-neutral-900/30 group-hover:bg-transparent transition-colors z-10 duration-500" />

        <img
          src={images[currentImageIndex]}
          alt={project.title}
          loading="lazy"
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-full object-cover transform group-hover:scale-105 transition-all duration-700 ease-in-out grayscale group-hover:grayscale-0 ${isLoaded ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'
            }`}
        />

        {/* View Details Overlay */}
        <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
          <span className="flex items-center gap-2 text-white text-lg font-bold tracking-wide transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            {t.projects.viewDetails}
            <ArrowUpRight size={20} />
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8 flex flex-col flex-grow">
        <div className="flex justify-between items-start gap-4 mb-3">
          <h3 className="text-xl font-display font-bold text-neutral-900 dark:text-white leading-tight group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
            <ShinyText text={project.titleKey ? t.projects.titles[project.titleKey as keyof typeof t.projects.titles] : project.title} />
          </h3>
        </div>

        {/* Description */}
        <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-6 flex-grow leading-relaxed line-clamp-5">
          {project.description}
        </p>

        {/* Tech Stack Mini (First 3) */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium text-neutral-700 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-800 rounded-full border border-neutral-200 dark:border-neutral-700"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 text-xs font-medium text-neutral-500 dark:text-neutral-400">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};