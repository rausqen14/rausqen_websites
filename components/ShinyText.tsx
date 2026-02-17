import React from 'react';

interface ShinyTextProps {
  text: string;
  className?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  uppercase?: boolean;
}

export const ShinyText: React.FC<ShinyTextProps> = ({ text, className = "", tag = 'span', uppercase = false }) => {
  const Tag = tag;
  
  // Use English locale for uppercase to avoid Turkish character issues
  const displayText = uppercase ? text.toUpperCase() : text;

  return (
    <Tag
      className={`
        inline-block bg-clip-text text-transparent 
        bg-gradient-to-r 
        from-neutral-600 via-black to-neutral-600 
        dark:from-neutral-400 dark:via-white dark:to-neutral-400 
        bg-[length:200%_auto] animate-shine px-2 pt-2 leading-tight
        will-change-[background-position] transform-gpu
        ${className}
      `}
    >
      {displayText}
    </Tag>
  );
};