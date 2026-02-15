import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const KaggleIcon = ({ size = 24 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <text 
      x="50%" 
      y="50%" 
      dy="0"
      dominantBaseline="central" 
      textAnchor="middle" 
      fontFamily="'Plus Jakarta Sans', sans-serif"
      fontSize="22"
      fontWeight="bold"
    >
      k
    </text>
  </svg>
);

export const SocialSidebar: React.FC = () => {
  const iconSize = 24;

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-6">
      {/* Top Line */}
      <div className="w-px h-24 bg-gradient-to-b from-transparent to-neutral-300 dark:to-neutral-700" />
      
      {/* Container with background removed */}
      <div className="flex flex-col gap-6">
        <SocialLink href={SOCIAL_LINKS.github} label="GitHub">
            <Github size={iconSize} />
        </SocialLink>
        
        <SocialLink href={SOCIAL_LINKS.linkedin} label="LinkedIn">
            <Linkedin size={iconSize} />
        </SocialLink>
        
        <SocialLink href={SOCIAL_LINKS.kaggle} label="Kaggle">
            <KaggleIcon size={iconSize} />
        </SocialLink>
      </div>

      {/* Bottom Line */}
      <div className="w-px h-24 bg-gradient-to-t from-transparent to-neutral-300 dark:to-neutral-700" />
    </div>
  );
};

const SocialLink: React.FC<{ href: string; children: React.ReactNode; label: string }> = ({ href, children, label }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative p-2 text-neutral-400 hover:text-black dark:text-neutral-500 dark:hover:text-white transition-all duration-300 hover:scale-125"
      aria-label={label}
    >
      <span className="relative z-10">{children}</span>
      
      {/* Tooltip Label - Background removed, just text */}
      <span className="absolute right-full top-1/2 -translate-y-1/2 mr-4 text-sm font-bold text-neutral-800 dark:text-neutral-200 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap">
        {label}
      </span>
    </a>
  );
};