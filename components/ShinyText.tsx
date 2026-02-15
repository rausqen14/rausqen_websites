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
        inline-block text-neutral-800 dark:text-neutral-200
        ${className}
      `}
    >
      {displayText}
    </Tag>
  );
};