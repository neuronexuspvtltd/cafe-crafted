import React from 'react';

interface CoffeeRingPatternProps {
  className?: string;
  size?: number;
  variant?: 'light' | 'dark' | 'green';
  opacity?: number;
}

export const CoffeeRingPattern: React.FC<CoffeeRingPatternProps> = ({
  className = '',
  size = 360,
  variant = 'green',
  opacity = 0.06,
}) => {
  const strokeColor = 
    variant === 'dark' ? '#3A2922' : 
    variant === 'light' ? '#F5F0E7' : 
    '#00563D';

  return (
    <div 
      className={`pointer-events-none absolute select-none animate-float-slow ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 300 300" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer irregular coffee stain ring */}
        <circle 
          cx="150" 
          cy="150" 
          r="135" 
          stroke={strokeColor} 
          strokeWidth="2.5" 
          strokeDasharray="8 4 12 2 4 8" 
        />
        {/* Inner concentric ring */}
        <circle 
          cx="150" 
          cy="150" 
          r="126" 
          stroke={strokeColor} 
          strokeWidth="1.2" 
          strokeDasharray="20 6 3 9" 
        />
        {/* Subtle inner drip texture */}
        <circle 
          cx="150" 
          cy="150" 
          r="110" 
          stroke={strokeColor} 
          strokeWidth="0.8" 
          strokeDasharray="1 15" 
        />
        {/* Organic hand-drawn accents */}
        <path 
          d="M 60 150 C 70 80, 220 70, 240 150 C 230 220, 80 230, 60 150 Z" 
          stroke={strokeColor} 
          strokeWidth="0.6" 
          strokeDasharray="4 12"
        />
      </svg>
    </div>
  );
};
