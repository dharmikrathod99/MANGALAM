import React from 'react';

export default function MandalaPattern({ className = "w-24 h-24 text-gold", opacity = 0.85 }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity }}
    >
      <circle cx="100" cy="100" r="95" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
      <circle cx="100" cy="100" r="88" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="100" cy="100" r="72" stroke="currentColor" strokeWidth="0.8" />
      <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" />
      <circle cx="100" cy="100" r="32" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="100" cy="100" r="14" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="100" cy="100" r="4" fill="currentColor" />

      {/* 8 Radial Petals */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <g key={i} transform={`rotate(${angle} 100 100)`}>
          <path
            d="M100 12 C106 32 120 48 100 68 C80 48 94 32 100 12 Z"
            fill="currentColor"
            fillOpacity="0.08"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path
            d="M100 68 C108 78 114 88 100 100 C86 88 92 78 100 68 Z"
            fill="currentColor"
            fillOpacity="0.12"
            stroke="currentColor"
            strokeWidth="0.8"
          />
          <circle cx="100" cy="22" r="2.5" fill="currentColor" />
          <path d="M96 82 L100 86 L104 82" stroke="currentColor" strokeWidth="0.8" />
        </g>
      ))}

      {/* Secondary 8 Subtle Accents */}
      {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((angle, i) => (
        <g key={`sec-${i}`} transform={`rotate(${angle} 100 100)`}>
          <line x1="100" y1="50" x2="100" y2="85" stroke="currentColor" strokeWidth="0.7" strokeDasharray="1 2" />
          <circle cx="100" cy="46" r="1.5" fill="currentColor" />
          <path
            d="M97 60 Q100 56 103 60"
            stroke="currentColor"
            strokeWidth="0.8"
            fill="none"
          />
        </g>
      ))}
    </svg>
  );
}

