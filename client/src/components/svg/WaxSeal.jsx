import React from 'react';

export default function WaxSeal({ monogram = "R", color = "#865365", size = 70, className = "" }) {
  return (
    <div
      className={`inline-block relative cursor-pointer select-none transition-transform duration-300 hover:scale-105 active:scale-95 ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-lg"
      >
        <defs>
          <radialGradient id="waxGrad" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#A36B7E" />
            <stop offset="45%" stopColor={color} />
            <stop offset="90%" stopColor="#4A2633" />
            <stop offset="100%" stopColor="#2E141E" />
          </radialGradient>
          <filter id="waxInnerShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feOffset dx="1" dy="1" />
            <feGaussianBlur stdDeviation="1.5" result="offset-blur" />
            <feComposite operator="out" in="SourceGraphic" in2="offset-blur" result="inverse" />
            <feFlood floodColor="black" floodOpacity="0.5" result="color" />
            <feComposite operator="in" in="color" in2="inverse" result="shadow" />
            <feComposite operator="over" in="shadow" in2="SourceGraphic" />
          </filter>
        </defs>

        {/* Realistic Organic Wobbly Wax Edge */}
        <path
          d="M50 4 
             C64 3, 76 10, 85 20 
             C94 30, 97 44, 95 58 
             C93 72, 84 84, 71 91 
             C58 98, 42 97, 28 92 
             C15 86, 6 74, 4 60 
             C2 46, 7 32, 16 21 
             C25 10, 36 5, 50 4 Z"
          fill="url(#waxGrad)"
        />

        {/* Embossed Inner Ridge */}
        <circle
          cx="50"
          cy="50"
          r="38"
          stroke="#4A2633"
          strokeWidth="1.5"
          strokeOpacity="0.6"
          fill="none"
        />
        <circle
          cx="50"
          cy="50"
          r="37"
          stroke="#D8B879"
          strokeWidth="0.8"
          strokeOpacity="0.4"
          fill="none"
        />

        {/* Ornamental Laurel Leaf Ring */}
        <circle
          cx="50"
          cy="50"
          r="32"
          stroke="#C8A252"
          strokeWidth="0.8"
          strokeDasharray="2 3"
          strokeOpacity="0.7"
          fill="none"
        />

        {/* Centered Royal Monogram */}
        <text
          x="50"
          y="58"
          fontFamily="'Cormorant Garamond', 'Cinzel Decorative', serif"
          fontSize="28"
          fontWeight="700"
          fontStyle="italic"
          fill="#D8B879"
          textAnchor="middle"
          filter="url(#waxInnerShadow)"
          className="tracking-wider"
        >
          {monogram}
        </text>

        {/* Delicate Star Accent */}
        <circle cx="50" cy="27" r="1.5" fill="#D8B879" />
        <circle cx="50" cy="73" r="1.5" fill="#D8B879" />
      </svg>
    </div>
  );
}

