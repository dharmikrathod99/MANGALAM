import React, { useState } from 'react';
import OptionWheel from './OptionWheel';
import TechText from './TechText';
import { Sparkles } from './icons';

export const BRANDS = [
  {
    id: 'framer',
    index: '01 / 08',
    name: 'FRAMER',
    role: 'Interactive Motion & Spring Physics',
    description: 'High-fidelity gesture physics, seamless reactive components, and editorial layout fluidity.',
    logo: 'https://framerusercontent.com/images/oxUWU2jLhf3X7vFMvvWQLrvtg.svg',
    tag: 'Motion Engine',
    accentColor: '#0055FF'
  },
  {
    id: 'google',
    index: '02 / 08',
    name: 'GOOGLE',
    role: 'Maps Navigation & Calendar Cloud',
    description: '1-tap GPS directions directly to banquet hall gates and automatic Google Calendar event reminders.',
    logo: 'https://framerusercontent.com/images/GrUgwzE0FkyfEyoukD7rX6BYLI.svg',
    tag: 'Navigation & Sync',
    accentColor: '#4285F4'
  },
  {
    id: 'meta',
    index: '03 / 08',
    name: 'META',
    role: 'WhatsApp & Instagram Broadcasting',
    description: 'Instant WhatsApp concierge delivery, family group invitations, and high-res vertical story formats.',
    logo: 'https://framerusercontent.com/images/FMtXuBx54vZkq98wFzLqOFvSv30.svg',
    tag: 'Broadcasting',
    accentColor: '#0668E1'
  },
  {
    id: 'animation-ui',
    index: '04 / 08',
    name: 'ANIMATION UI',
    role: 'Fluid Keyframes & Micro-Interactions',
    description: 'Choreographed page choreography, spring-based scroll dynamics, and silky 60fps micro-interactions.',
    logo: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none"><rect width="100" height="100" rx="22" fill="%230b0b10"/><path d="M22 68C22 42.595 42.595 22 68 22" stroke="%23D8B879" stroke-width="6" stroke-linecap="round"/><path d="M32 78C32 52.595 52.595 32 78 32" stroke="%23A855F7" stroke-width="6" stroke-linecap="round"/><path d="M42 88C42 62.595 62.595 42 88 42" stroke="%23C084FC" stroke-width="6" stroke-linecap="round"/><circle cx="68" cy="22" r="6" fill="%23D8B879"/><circle cx="78" cy="32" r="6" fill="%23A855F7"/><circle cx="88" cy="42" r="6" fill="%23FAF5FF"/></svg>',
    tag: 'Motion Dynamics',
    accentColor: '#A855F7'
  },
  {
    id: 'openai',
    index: '05 / 08',
    name: 'OPENAI',
    role: 'AI Translation & Poetic Rhyming',
    description: 'Assisted sacred Sanskrit shloka interpretations, personalized couple story verse, and editorial phrasing.',
    logo: 'https://framerusercontent.com/images/zGn1XqlRekQQ1rqh6UQV3cp9rk.svg',
    tag: 'AI Artistry',
    accentColor: '#10A37F'
  },
  {
    id: 'blender',
    index: '06 / 08',
    name: 'BLENDER',
    role: '3D Wax Seals & Jewel Simulation',
    description: 'Photorealistic 3D envelope modeling, tactile wax seal stamps, and dynamic light reflection simulation.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Blender_logo_no_text.svg',
    tag: '3D Atelier Engine',
    accentColor: '#EA7600'
  },
  {
    id: 'spotify',
    index: '07 / 08',
    name: 'SPOTIFY',
    role: 'Ceremony Audio & Music Scoring',
    description: 'High-fidelity audio streaming integration for emotional bridal entries, sangeet tracks, and shehnai tunes.',
    logo: 'https://framerusercontent.com/images/4T3OTh0OK3yNNFwdL6Y8DSk9e8.svg',
    tag: 'Audio Scoring',
    accentColor: '#1ED760'
  },
  {
    id: 'photoshop',
    index: '08 / 08',
    name: 'ADOBE PHOTOSHOP',
    role: 'Fine-Art Retouching & Floral Artistry',
    description: 'High-resolution couple portrait retouching, archival botanical textures, and pure gold foil luster.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg',
    tag: 'Digital Atelier Art',
    accentColor: '#31A8FF'
  }
];

export default function WhatWeUseSection() {
  const [selectedIndex, setSelectedIndex] = useState(4); // Default to OpenAI as shown in user screenshot
  const activeBrand = BRANDS[selectedIndex] || BRANDS[0];

  const brandNames = BRANDS.map((b) => b.name);

  const handleWheelChange = (idx) => {
    if (idx >= 0 && idx < BRANDS.length) {
      setSelectedIndex(idx);
    }
  };

  return (
    <section id="what-we-use" className="py-24 bg-gradient-to-b from-[#f3f0ff] via-[#eae6fc] to-[#f3f0ff] relative overflow-hidden">
      {/* Dreamy Ambient Jellyfish Glow */}
      <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] rounded-full bg-pink-300/15 blur-[120px] pointer-events-none -z-0" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[#c8c1ee]/30 blur-[100px] pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/70 backdrop-blur-xs border border-[#c8c1ee] text-[#0b0b10] text-xs tracking-[0.2em] uppercase font-semibold shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            What We Use • Modern Tech Stack
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0b0b10] font-normal tracking-tight">
            Crafted with World-Class Tools & Platforms
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#0b0b10]/70 font-light leading-relaxed">
            Drag or scroll the wheel on the left to explore the innovative engines and platforms powering your wedding invitation suite.
          </p>
          <div className="w-24 h-[1.5px] bg-[#D8B879] mx-auto mt-4" />
        </div>

        {/* 2-Column Split: Transparent OptionWheel on Left, Transparent Icon Display on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Pure Transparent Background with ONLY Text Wheel */}
          <div className="lg:col-span-7 flex flex-col justify-center bg-transparent">
            <div className="relative w-full h-[460px] sm:h-[500px] md:h-[540px] bg-transparent flex flex-col justify-center">
              <OptionWheel
                items={brandNames}
                defaultSelected={selectedIndex}
                onChange={handleWheelChange}
                textColor="#8c86a8"
                activeColor="#0b0b10"
                side="left"
                fontSize={3.4}
                spacing={1.4}
                curve={1.1}
                tilt={6}
                blur={1.8}
                fade={0.25}
                smoothing={180}
                inset={16}
                loop={true}
                draggable={true}
                className="w-full h-full bg-transparent"
              />
            </div>
          </div>

          {/* Right Column: Pure Transparent Brand Icon & Identity */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center text-center bg-transparent">
            <div className="relative w-full max-w-[360px] sm:max-w-[400px] flex flex-col items-center justify-center text-center bg-transparent">
              
              {/* Floating Atmosphere Halo Behind Icon */}
              <div
                className="absolute w-56 h-56 rounded-full blur-3xl opacity-25 pointer-events-none transition-colors duration-700 -z-0"
                style={{ backgroundColor: activeBrand.accentColor || '#D8B879' }}
              />

              {/* High-Resolution Brand Icon Display - Clean & Transparent */}
              <div className="relative z-10 w-32 h-32 sm:w-44 sm:h-44 flex items-center justify-center p-4 mb-3 transition-transform duration-500 hover:scale-105">
                <img
                  src={activeBrand.logo}
                  alt={`${activeBrand.name} logo`}
                  className="w-24 h-24 sm:w-32 sm:h-32 object-contain filter drop-shadow-md transition-all duration-300"
                  loading="lazy"
                />
              </div>

              {/* Brand Name Headline & Role */}
              <div className="relative z-10 space-y-2 mt-1">
                <span className="font-mono text-xs text-[#0b0b10]/60 uppercase tracking-[0.3em] block">
                  {activeBrand.tag}
                </span>
                <div className="w-full h-14 sm:h-16 relative flex items-center justify-center">
                  <TechText
                    key={activeBrand.id}
                    text={activeBrand.name}
                    fontFamily="'Outfit', 'Anton', sans-serif"
                    fontWeight={700}
                    fontSize={44}
                    color="#0b0b10"
                    accentColor={activeBrand.accentColor || '#D8B879'}
                    reveal="letter"
                    dashLength={3}
                    dashGap={2}
                    specks={12}
                    clickKick={true}
                    draggable={true}
                    bounce={0.4}
                    guides={false}
                    sweep={true}
                    speed={1}
                  />
                </div>
                <p className="text-sm text-[#0b0b10]/75 font-light max-w-xs mx-auto leading-relaxed pt-1">
                  {activeBrand.role}
                </p>
                <div className="pt-2">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#5a3346] tracking-wider uppercase bg-white/60 backdrop-blur-xs px-3 py-1 rounded-full border border-[#c8c1ee]/40 shadow-2xs">
                    ✦ {activeBrand.index} Platform
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
