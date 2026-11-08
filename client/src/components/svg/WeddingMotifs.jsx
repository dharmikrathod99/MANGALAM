import React from 'react';

export function WeddingRings({ className = "w-10 h-10 text-gold" }) {
  return (
    <svg viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="ringGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF4D0" />
          <stop offset="50%" stopColor="#D8B879" />
          <stop offset="100%" stopColor="#9A7426" />
        </linearGradient>
      </defs>
      {/* Left Ring */}
      <circle cx="38" cy="45" r="26" stroke="url(#ringGold)" strokeWidth="5" />
      <circle cx="38" cy="45" r="22" stroke="#FFFDF8" strokeWidth="1" strokeOpacity="0.4" />
      
      {/* Right Interlocking Ring */}
      <circle cx="62" cy="42" r="26" stroke="url(#ringGold)" strokeWidth="5" />
      <circle cx="62" cy="42" r="22" stroke="#FFFDF8" strokeWidth="1" strokeOpacity="0.4" />

      {/* Diamond Solitaire on Right Ring */}
      <polygon points="62,12 68,18 62,25 56,18" fill="#FFFDF8" stroke="#D8B879" strokeWidth="1" />
      {/* Sparkle */}
      <path d="M62 6 L62 10 M58 8 L66 8" stroke="#D8B879" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function WeddingBells({ className = "w-10 h-10 text-gold" }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="bellGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF4D0" />
          <stop offset="60%" stopColor="#D8B879" />
          <stop offset="100%" stopColor="#9A7426" />
        </linearGradient>
      </defs>
      {/* Ribbon bow */}
      <path d="M50 15 C45 6, 32 8, 36 20 C42 22, 48 20, 50 15 Z" fill="#EBC0CE" stroke="#865365" strokeWidth="1" />
      <path d="M50 15 C55 6, 68 8, 64 20 C58 22, 52 20, 50 15 Z" fill="#EBC0CE" stroke="#865365" strokeWidth="1" />
      <circle cx="50" cy="16" r="3" fill="#865365" />

      {/* Left Bell */}
      <g transform="rotate(-12 40 45)">
        <path d="M38 25 C30 25, 25 45, 20 60 L56 60 C51 45, 46 25, 38 25 Z" fill="url(#bellGold)" stroke="#9A7426" strokeWidth="1.5" />
        <ellipse cx="38" cy="60" rx="18" ry="4" fill="#D8B879" stroke="#9A7426" strokeWidth="1" />
        <circle cx="38" cy="65" r="4" fill="#632D3F" stroke="#D8B879" strokeWidth="1" />
      </g>

      {/* Right Bell */}
      <g transform="rotate(12 60 50)">
        <path d="M60 28 C52 28, 47 48, 42 63 L78 63 C73 48, 68 28, 60 28 Z" fill="url(#bellGold)" stroke="#9A7426" strokeWidth="1.5" />
        <ellipse cx="60" cy="63" rx="18" ry="4" fill="#D8B879" stroke="#9A7426" strokeWidth="1" />
        <circle cx="60" cy="68" r="4" fill="#632D3F" stroke="#D8B879" strokeWidth="1" />
      </g>
    </svg>
  );
}

export function Butterfly({ className = "w-6 h-6 text-gold" }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M50 50 
           C40 20, 10 25, 15 48 
           C18 60, 35 60, 48 54 
           C35 70, 25 85, 38 88 
           C48 90, 50 70, 50 50 Z"
        fill="#F8DDE5"
        stroke="#D8B879"
        strokeWidth="1.5"
      />
      <path
        d="M50 50 
           C60 20, 90 25, 85 48 
           C82 60, 65 60, 52 54 
           C65 70, 75 85, 62 88 
           C52 90, 50 70, 50 50 Z"
        fill="#F8DDE5"
        stroke="#D8B879"
        strokeWidth="1.5"
      />
      {/* Body & Antennae */}
      <line x1="50" y1="35" x2="50" y2="75" stroke="#865365" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M50 35 Q45 22 40 24" stroke="#865365" strokeWidth="1" fill="none" />
      <path d="M50 35 Q55 22 60 24" stroke="#865365" strokeWidth="1" fill="none" />
      <circle cx="40" cy="24" r="1.5" fill="#D8B879" />
      <circle cx="60" cy="24" r="1.5" fill="#D8B879" />
    </svg>
  );
}

export function WeddingArch({ className = "w-full text-gold" }) {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="archGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#D8B879" stopOpacity="0.4" />
          <stop offset="50%" stopColor="#C8A252" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#D8B879" stopOpacity="0.4" />
        </linearGradient>
      </defs>
      
      {/* Outer Royal Indian Arch / Jharokha profile */}
      <path
        d="M60 290 L60 140 
           C60 80, 140 40, 200 15 
           C260 40, 340 80, 340 140 
           L340 290"
        stroke="url(#archGrad)"
        strokeWidth="2.5"
      />
      {/* Inner Decorative Arch */}
      <path
        d="M75 290 L75 145 
           C75 95, 145 60, 200 35 
           C255 60, 325 95, 325 145 
           L325 290"
        stroke="#EBC0CE"
        strokeWidth="1.2"
        strokeDasharray="4 3"
      />
      {/* Kalash Top Finial */}
      <path d="M194 15 C194 8, 206 8, 206 15 L200 4 Z" fill="#D8B879" />
      <circle cx="200" cy="4" r="2.5" fill="#865365" />

      {/* Delicate floral sprigs along arch crown */}
      <circle cx="160" cy="55" r="4" fill="#F8DDE5" stroke="#D8B879" strokeWidth="1" />
      <circle cx="240" cy="55" r="4" fill="#F8DDE5" stroke="#D8B879" strokeWidth="1" />
      <circle cx="120" cy="90" r="4" fill="#F8DDE5" stroke="#D8B879" strokeWidth="1" />
      <circle cx="280" cy="90" r="4" fill="#F8DDE5" stroke="#D8B879" strokeWidth="1" />
    </svg>
  );
}

export function DecorativeCorner({ className = "w-8 h-8 text-gold" }) {
  return (
    <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M4 56 L4 8 C4 5.8 5.8 4 8 4 L56 4" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 56 L12 16 C12 13.8 13.8 12 16 12 L56 12" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" strokeOpacity="0.7" />
      <circle cx="20" cy="20" r="3" fill="currentColor" fillOpacity="0.6" />
      <path d="M4 24 Q24 24 24 4" stroke="currentColor" strokeWidth="0.8" fill="none" />
    </svg>
  );
}

