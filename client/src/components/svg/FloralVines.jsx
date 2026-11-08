import React from 'react';

export default function FloralVines({ className = "w-full text-gold", variant = "top" }) {
  return (
    <div className={`overflow-hidden pointer-events-none ${className}`}>
      <svg
        viewBox="0 0 600 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        <defs>
          <linearGradient id="goldGradientVine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#865365" stopOpacity="0.3" />
            <stop offset="30%" stopColor="#D8B879" stopOpacity="0.9" />
            <stop offset="70%" stopColor="#D8B879" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#865365" stopOpacity="0.3" />
          </linearGradient>
          <filter id="vineGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Central Symmetrical Vine Spine */}
        <path
          d="M0 40 Q75 15, 150 40 T300 40 T450 40 T600 40"
          stroke="url(#goldGradientVine)"
          strokeWidth="1.5"
          fill="none"
        />

        {/* Center Focal Floral Crest */}
        <g transform="translate(300, 40)">
          <circle cx="0" cy="0" r="12" fill="#FFFDF8" stroke="#D8B879" strokeWidth="1.2" />
          <circle cx="0" cy="0" r="6" fill="#F8DDE5" stroke="#865365" strokeWidth="0.8" />
          <circle cx="0" cy="0" r="2" fill="#D8B879" />
          
          {/* Petals around center flower */}
          {[-45, 0, 45, 90, 135, 180, 225, 270].map((deg, idx) => (
            <ellipse
              key={idx}
              cx="0"
              cy="-14"
              rx="3"
              ry="5"
              fill="#EBC0CE"
              fillOpacity="0.8"
              stroke="#D8B879"
              strokeWidth="0.6"
              transform={`rotate(${deg})`}
            />
          ))}
        </g>

        {/* Left Sprouting Leaves & Rosebuds */}
        <g>
          {/* Leaves */}
          <path d="M90 32 C95 20, 115 22, 118 36 C110 38, 95 36, 90 32 Z" fill="#D9E8D3" stroke="#B0CCA7" strokeWidth="0.8" />
          <path d="M180 46 C185 58, 205 56, 208 42 C200 40, 185 42, 180 46 Z" fill="#D9E8D3" stroke="#B0CCA7" strokeWidth="0.8" />
          <path d="M240 34 C245 22, 265 24, 268 38 C260 40, 245 38, 240 34 Z" fill="#D9E8D3" stroke="#B0CCA7" strokeWidth="0.8" />
          
          {/* Soft Rosebuds */}
          <g transform="translate(145, 26)">
            <ellipse cx="0" cy="0" rx="5" ry="7" fill="#F8DDE5" stroke="#865365" strokeWidth="0.8" />
            <path d="M-3 2 Q0 -3 3 2" stroke="#865365" strokeWidth="0.6" fill="none" />
            <path d="M-2 4 Q0 0 2 4" stroke="#865365" strokeWidth="0.6" fill="none" />
          </g>

          <g transform="translate(225, 52)">
            <ellipse cx="0" cy="0" rx="4" ry="6" fill="#F8DDE5" stroke="#865365" strokeWidth="0.8" />
            <path d="M-2 1 Q0 -2 2 1" stroke="#865365" strokeWidth="0.6" fill="none" />
          </g>
        </g>

        {/* Right Sprouting Leaves & Rosebuds (Mirrored) */}
        <g transform="translate(600, 0) scale(-1, 1)">
          {/* Leaves */}
          <path d="M90 32 C95 20, 115 22, 118 36 C110 38, 95 36, 90 32 Z" fill="#D9E8D3" stroke="#B0CCA7" strokeWidth="0.8" />
          <path d="M180 46 C185 58, 205 56, 208 42 C200 40, 185 42, 180 46 Z" fill="#D9E8D3" stroke="#B0CCA7" strokeWidth="0.8" />
          <path d="M240 34 C245 22, 265 24, 268 38 C260 40, 245 38, 240 34 Z" fill="#D9E8D3" stroke="#B0CCA7" strokeWidth="0.8" />
          
          {/* Rosebuds */}
          <g transform="translate(145, 26)">
            <ellipse cx="0" cy="0" rx="5" ry="7" fill="#F8DDE5" stroke="#865365" strokeWidth="0.8" />
            <path d="M-3 2 Q0 -3 3 2" stroke="#865365" strokeWidth="0.6" fill="none" />
            <path d="M-2 4 Q0 0 2 4" stroke="#865365" strokeWidth="0.6" fill="none" />
          </g>

          <g transform="translate(225, 52)">
            <ellipse cx="0" cy="0" rx="4" ry="6" fill="#F8DDE5" stroke="#865365" strokeWidth="0.8" />
            <path d="M-2 1 Q0 -2 2 1" stroke="#865365" strokeWidth="0.6" fill="none" />
          </g>
        </g>

        {/* Delicate Sparkle Stars */}
        <g transform="translate(110, 52)">
          <path d="M0 -4 L0 4 M-4 0 L4 0" stroke="#D8B879" strokeWidth="1" strokeLinecap="round" />
        </g>
        <g transform="translate(490, 52)">
          <path d="M0 -4 L0 4 M-4 0 L4 0" stroke="#D8B879" strokeWidth="1" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

