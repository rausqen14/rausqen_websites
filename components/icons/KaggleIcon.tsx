
import React from 'react';

const KaggleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <text 
      x="12" 
      y="20" 
      textAnchor="middle" 
      fontSize="25" 
      fontWeight="bold" 
      fontFamily="sans-serif"
      fill="currentColor"
    >
      k
    </text>
  </svg>
);

export default KaggleIcon;
