import React from 'react';

export function StepIllustrationOne({ className = "w-28 h-28" }) {
  // Step 1: Choose Your Design
  return (
    <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <radialGradient id="step1Glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F8DDE5" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#FFFDF8" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="80" cy="80" r="72" fill="url(#step1Glow)" />
      
      {/* Back card */}
      <rect x="36" y="32" width="68" height="96" rx="6" fill="#FFFDF8" stroke="#D8B879" strokeWidth="1.5" transform="rotate(-8 70 80)" />
      {/* Front card */}
      <rect x="56" y="28" width="68" height="96" rx="6" fill="#FFFDF8" stroke="#865365" strokeWidth="1.8" transform="rotate(6 90 76)" filter="drop-shadow(0 4px 10px rgba(134,83,101,0.12))" />
      
      {/* Front Card Content */}
      <g transform="rotate(6 90 76)">
        <circle cx="90" cy="52" r="10" stroke="#D8B879" strokeWidth="0.8" fill="#F8DDE5" fillOpacity="0.5" />
        <line x1="72" y1="74" x2="108" y2="74" stroke="#865365" strokeWidth="2" strokeLinecap="round" />
        <line x1="78" y1="82" x2="102" y2="82" stroke="#D8B879" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="75" y1="94" x2="105" y2="94" stroke="#D9E8D3" strokeWidth="1.5" strokeLinecap="round" />
      </g>

      {/* Floating Sparkles & Swatches */}
      <circle cx="35" cy="50" r="8" fill="#F7E99A" stroke="#D8B879" strokeWidth="1" />
      <circle cx="130" cy="95" r="9" fill="#D9E8D3" stroke="#B0CCA7" strokeWidth="1" />
      <path d="M125 40 L125 48 M121 44 L129 44" stroke="#D8B879" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function StepIllustrationTwo({ className = "w-28 h-28" }) {
  // Step 2: Share Your Details (Parchment & Pen)
  return (
    <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <radialGradient id="step2Glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F7E99A" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#FFFDF8" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="80" cy="80" r="72" fill="url(#step2Glow)" />

      {/* Scroll Sheet */}
      <rect x="42" y="28" width="76" height="104" rx="4" fill="#FFFDF8" stroke="#D8B879" strokeWidth="1.6" filter="drop-shadow(0 4px 12px rgba(216,184,121,0.15))" />
      <line x1="56" y1="46" x2="104" y2="46" stroke="#865365" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="56" y1="60" x2="94" y2="60" stroke="#EDE2D5" strokeWidth="2" strokeLinecap="round" />
      <line x1="56" y1="72" x2="100" y2="72" stroke="#EDE2D5" strokeWidth="2" strokeLinecap="round" />
      <line x1="56" y1="84" x2="88" y2="84" stroke="#EDE2D5" strokeWidth="2" strokeLinecap="round" />
      <circle cx="62" cy="104" r="5" fill="#EBC0CE" />
      <circle cx="78" cy="104" r="5" fill="#D9E8D3" />

      {/* Elegant Stylus / Feather Pen */}
      <g transform="translate(100, 48) rotate(42)">
        <path d="M0 0 L4 55 L0 68 L-4 55 Z" fill="#D8B879" stroke="#9A7426" strokeWidth="1" />
        <circle cx="0" cy="8" r="4" fill="#865365" />
      </g>

      {/* Small Red Heart */}
      <path d="M125 118 C121 112 113 115 116 122 C119 127 125 131 125 131 C125 131 131 127 134 122 C137 115 129 112 125 118 Z" fill="#865365" />
    </svg>
  );
}

export function StepIllustrationThree({ className = "w-28 h-28" }) {
  // Step 3: Personalize Your Invitation (Artisan Crest & Sparkles)
  return (
    <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <radialGradient id="step3Glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#EBC0CE" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#FFFDF8" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="80" cy="80" r="72" fill="url(#step3Glow)" />

      {/* Ornate Frame */}
      <rect x="40" y="32" width="80" height="96" rx="8" fill="#FFFDF8" stroke="#D8B879" strokeWidth="1.8" />
      <rect x="46" y="38" width="68" height="84" rx="4" stroke="#EBC0CE" strokeWidth="1" strokeDasharray="3 3" />
      
      {/* Central Royal Monogram Seal */}
      <circle cx="80" cy="74" r="20" fill="#865365" stroke="#D8B879" strokeWidth="1.5" />
      <path d="M80 62 L80 86 M72 74 L88 74" stroke="#FFFDF8" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="80" cy="74" r="14" stroke="#D8B879" strokeWidth="0.8" strokeDasharray="2 2" />

      {/* Sparkling Stars around */}
      <g transform="translate(32, 40)">
        <path d="M0 -6 L0 6 M-6 0 L6 0" stroke="#D8B879" strokeWidth="1.8" strokeLinecap="round" />
      </g>
      <g transform="translate(130, 48)">
        <path d="M0 -8 L0 8 M-8 0 L8 0" stroke="#D8B879" strokeWidth="2" strokeLinecap="round" />
      </g>
      <g transform="translate(125, 115)">
        <circle cx="0" cy="0" r="3.5" fill="#F7E99A" stroke="#D8B879" strokeWidth="1" />
      </g>
    </svg>
  );
}

export function StepIllustrationFour({ className = "w-28 h-28" }) {
  // Step 4: Receive & Share (Mobile with Envelope & WhatsApp vibes)
  return (
    <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <radialGradient id="step4Glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#D9E8D3" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#FFFDF8" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="80" cy="80" r="72" fill="url(#step4Glow)" />

      {/* Smartphone silhouette */}
      <rect x="52" y="24" width="56" height="112" rx="10" fill="#2C2225" />
      <rect x="55" y="30" width="50" height="100" rx="6" fill="#FFFDF8" />
      <circle cx="80" cy="27" r="1.5" fill="#EDE2D5" />

      {/* Screen Invitation preview */}
      <rect x="60" y="44" width="40" height="52" rx="3" fill="#F8DDE5" stroke="#D8B879" strokeWidth="1" />
      <line x1="68" y1="56" x2="92" y2="56" stroke="#865365" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="72" y1="63" x2="88" y2="63" stroke="#D8B879" strokeWidth="1" strokeLinecap="round" />
      <circle cx="80" cy="76" r="4" fill="#865365" />

      {/* Share rays & WhatsApp green bubble badge */}
      <circle cx="106" cy="106" r="15" fill="#25D366" stroke="#FFFDF8" strokeWidth="2" filter="drop-shadow(0 2px 6px rgba(37,211,102,0.4))" />
      <path d="M101 103 C101 99 111 99 111 103 C111 107 106 109 106 112" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <circle cx="106" cy="115" r="1" fill="#FFFFFF" />

      {/* Little hearts floating */}
      <path d="M38 68 C35 64 29 66 31 71 C33 74 38 77 38 77 C38 77 43 74 45 71 C47 66 41 64 38 68 Z" fill="#EBC0CE" />
      <path d="M125 55 C122 51 116 53 118 58 C120 61 125 64 125 64 C125 64 130 61 132 58 C134 53 128 51 125 55 Z" fill="#865365" />
    </svg>
  );
}

