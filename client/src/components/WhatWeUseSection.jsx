import React, { useState } from 'react';
import OptionWheel from './OptionWheel';
import { Sparkles, CheckCircle2, ArrowRight } from './icons';
import { DecorativeCorner } from './svg/WeddingMotifs';

export const BRANDS = [
  {
    id: 'framer',
    index: '01 / 08',
    name: 'FRAMER',
    role: 'Interactive Motion & Spring Physics',
    description: 'High-fidelity gesture physics, seamless reactive components, and editorial layout fluidity that make your invitation feel alive on touch.',
    logo: 'https://framerusercontent.com/images/oxUWU2jLhf3X7vFMvvWQLrvtg.svg',
    tag: 'Motion Engine',
    accentColor: '#0055FF',
    highlights: ['60fps Touch Fluidity', 'Reactive Spring Physics', 'Smooth Page Folding']
  },
  {
    id: 'google',
    index: '02 / 08',
    name: 'GOOGLE',
    role: 'Maps Navigation & Calendar Cloud',
    description: '1-tap GPS directions directly to your banquet hall or palace gate, plus automatic Google Calendar event reminders for punctuality.',
    logo: 'https://framerusercontent.com/images/GrUgwzE0FkyfEyoukD7rX6BYLI.svg',
    tag: 'Navigation & Sync',
    accentColor: '#4285F4',
    highlights: ['1-Tap Gate Directions', 'Google Calendar Sync', 'Zero Lost Guests']
  },
  {
    id: 'meta',
    index: '03 / 08',
    name: 'META',
    role: 'WhatsApp & Instagram Broadcasting',
    description: 'Instant WhatsApp concierge delivery, family group invitations, and high-res 9:16 vertical story formats for social announcements.',
    logo: 'https://framerusercontent.com/images/FMtXuBx54vZkq98wFzLqOFvSv30.svg',
    tag: 'Broadcasting',
    accentColor: '#0668E1',
    highlights: ['1-Tap WhatsApp Forwarding', 'Instagram Story Cards', 'Family Group Broadcasts']
  },
  {
    id: 'apple',
    index: '04 / 08',
    name: 'APPLE',
    role: 'Retina Typography & iOS Gestures',
    description: 'Native Apple Calendar event integration, fluid iOS touch scrolling, and pixel-crisp display rendering on Super Retina screens.',
    logo: 'https://framerusercontent.com/images/caZkXLl6Ju2aFJ52ZRqbel1eo.svg',
    tag: 'Display Standards',
    accentColor: '#1A1819',
    highlights: ['iOS Calendar Passes', 'Retina Vector Graphics', 'Haptic Touch Sensitivity']
  },
  {
    id: 'openai',
    index: '05 / 08',
    name: 'OPENAI',
    role: 'AI Translation & Poetic Rhyming',
    description: 'Assisted sacred Sanskrit shloka interpretations, personalized couple story verse, and editorial phrasing honoring elder traditions.',
    logo: 'https://framerusercontent.com/images/zGn1XqlRekQQ1rqh6UQV3cp9rk.svg',
    tag: 'AI Artistry',
    accentColor: '#10A37F',
    highlights: ['Sanskrit Verse Meaning', 'Poetic Couple Rhymes', 'Cultural Phrasing']
  },
  {
    id: 'tesla',
    index: '06 / 08',
    name: 'TESLA',
    role: 'Speed & Minimalist Architecture',
    description: 'Obsessive performance optimization, zero bloat, and instantaneous mobile loading speeds worldwide across any cellular network.',
    logo: 'https://framerusercontent.com/images/tZ37dPy7lpmPnFVgpQdIUyc58k.svg',
    tag: 'Performance',
    accentColor: '#E82127',
    highlights: ['Sub-Second Loading', 'Zero Network Lag', 'Minimalist Clean Code']
  },
  {
    id: 'spotify',
    index: '07 / 08',
    name: 'SPOTIFY',
    role: 'Ceremony Audio & Music Scoring',
    description: 'High-fidelity audio streaming integration for emotional bridal entries, sangeet tracks, and sacred shehnai tunes.',
    logo: 'https://framerusercontent.com/images/4T3OTh0OK3yNNFwdL6Y8DSk9e8.svg',
    tag: 'Audio Scoring',
    accentColor: '#1ED760',
    highlights: ['Seamless Background Music', 'Acoustic Soundscapes', 'Bridal Entry Themes']
  },
  {
    id: 'nike',
    index: '08 / 08',
    name: 'NIKE',
    role: 'Aesthetic Identity & Craft Standards',
    description: 'Iconic typography balance, bold visual clarity, and precision-crafted design principles that stand out from ordinary cards.',
    logo: 'https://framerusercontent.com/images/7JG0ZfLdH9nlPffFea6M6Ts0HrU.svg',
    tag: 'Design Standards',
    accentColor: '#111111',
    highlights: ['Editorial Font Hierarchy', 'Bold Visual Presence', 'Iconic Luxury Feel']
  }
];

export default function WhatWeUseSection({ onOpenBooking }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 border border-[#c8c1ee] text-[#0b0b10] text-xs tracking-[0.2em] uppercase font-semibold shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            What We Use • Modern Tech Stack
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0b0b10] font-normal tracking-tight">
            Crafted with World-Class Tools & Platforms
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#0b0b10]/70 font-light leading-relaxed">
            Drag or scroll the interactive wheel on the left to explore the innovative engines and platforms powering every wedding invitation suite.
          </p>
          <div className="w-24 h-[1.5px] bg-[#D8B879] mx-auto mt-4" />
        </div>

        {/* 2-Column Split: Text & OptionWheel on Left, Large Icon on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: All Text & Interactive <OptionWheel /> */}
          <div className="lg:col-span-7 space-y-6 flex flex-col justify-center">
            
            {/* The React Bits <OptionWheel /> Component */}
            <div className="relative w-full h-[260px] sm:h-[300px] bg-white/70 backdrop-blur-md rounded-3xl border border-[#c8c1ee]/60 shadow-md p-4 overflow-hidden">
              {/* Subtle Helper Header */}
              <div className="absolute top-4 left-6 z-20 flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-[#0b0b10]/50 select-none">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D8B879] animate-ping" />
                <span>Drag or Scroll to Select Platform:</span>
              </div>

              {/* The Wheel */}
              <OptionWheel
                items={brandNames}
                defaultSelected={selectedIndex}
                onChange={handleWheelChange}
                textColor="#8c86a8"
                activeColor="#0b0b10"
                side="left"
                fontSize={2.3}
                spacing={1.4}
                curve={1}
                tilt={6}
                blur={1.8}
                fade={0.28}
                smoothing={180}
                inset={24}
                loop={true}
                draggable={true}
                className="w-full h-full pt-6"
              />
            </div>

            {/* Live Editorial Details for the Selected Brand (Left Side) */}
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-7 sm:p-8 border border-[#c8c1ee]/60 shadow-lg space-y-4 transition-all duration-300">
              {/* Index & Tag */}
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2">
                  <span className="font-mono text-sm font-bold text-[#0b0b10] tracking-wider">
                    {activeBrand.index}
                  </span>
                  <span className="h-3 w-[1px] bg-[#c8c1ee]" />
                  <span className="font-mono text-sm font-semibold tracking-widest text-[#5a3346]">
                    {activeBrand.name}
                  </span>
                </div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-blush-700 bg-pink-100/70 px-3 py-1 rounded-full border border-pink-200">
                  {activeBrand.tag}
                </span>
              </div>

              {/* Role Title */}
              <h3 className="font-serif text-2xl sm:text-3xl text-[#0b0b10] font-normal tracking-wide">
                {activeBrand.role}
              </h3>

              {/* Detailed Description */}
              <p className="text-sm text-[#0b0b10]/75 font-light leading-relaxed">
                {activeBrand.description}
              </p>

              {/* Feature Highlights Pills */}
              <div className="pt-2 flex flex-wrap gap-2">
                {activeBrand.highlights.map((highlight, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 text-xs text-[#0b0b10] bg-[#FAF8FF] px-3 py-1 rounded-full border border-[#c8c1ee]/60 shadow-2xs font-medium"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{highlight}</span>
                  </span>
                ))}
              </div>

              {/* CTA Action on Left */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => onOpenBooking && onOpenBooking()}
                  className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#0b0b10] hover:bg-[#2c293e] text-white text-xs uppercase tracking-widest font-semibold transition-all duration-300 shadow-md hover:scale-105 active:scale-95 cursor-pointer inline-flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-3.5 h-3.5 text-gold" />
                  <span>Commission Your Suite</span>
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Icon & Brand Visual Showcase (Right Side) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-6">
            
            {/* Main Interactive Icon Card */}
            <div className="relative w-full max-w-[380px] sm:max-w-[420px] bg-white/95 backdrop-blur-xl rounded-3xl p-8 sm:p-10 border border-[#c8c1ee]/70 shadow-2xl flex flex-col items-center justify-center text-center group hover:border-[#D8B879] transition-all duration-500">
              
              {/* Ornate Stationery Corners */}
              <DecorativeCorner className="absolute top-3 left-3 w-5 h-5 text-gold/60" />
              <div className="absolute top-3 right-3 scale-x-[-1]">
                <DecorativeCorner className="w-5 h-5 text-gold/60" />
              </div>
              <div className="absolute bottom-3 left-3 scale-y-[-1]">
                <DecorativeCorner className="w-5 h-5 text-gold/60" />
              </div>
              <div className="absolute bottom-3 right-3 scale-[-1]">
                <DecorativeCorner className="w-5 h-5 text-gold/60" />
              </div>

              {/* Floating Atmosphere Halo Behind Icon */}
              <div
                className="absolute w-44 h-44 rounded-full blur-3xl opacity-20 pointer-events-none transition-colors duration-500 -z-0"
                style={{ backgroundColor: activeBrand.accentColor || '#D8B879' }}
              />

              {/* High-Resolution Brand Icon Display Box */}
              <div className="relative z-10 w-32 h-32 sm:w-40 sm:h-40 rounded-3xl bg-gradient-to-b from-[#FAF8FF] to-[#F3F0FF] border border-[#c8c1ee]/70 flex items-center justify-center p-6 shadow-inner mb-6 group-hover:scale-105 transition-transform duration-300">
                <img
                  src={activeBrand.logo}
                  alt={`${activeBrand.name} logo`}
                  className="w-20 h-20 sm:w-24 sm:h-24 object-contain filter drop-shadow-sm transition-all duration-300"
                  loading="lazy"
                />
              </div>

              {/* Brand Name Headline */}
              <div className="relative z-10 space-y-1">
                <span className="font-mono text-xs text-[#0b0b10]/60 uppercase tracking-[0.25em] block">
                  Technology Partner
                </span>
                <h4 className="font-serif text-3xl sm:text-4xl text-[#0b0b10] font-normal tracking-wider">
                  {activeBrand.name}
                </h4>
              </div>

              {/* Status Badge */}
              <div className="mt-5 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#FAF8FF] border border-[#c8c1ee]/60 text-xs font-mono text-[#0b0b10] shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Live in Every Rivayat Suite</span>
              </div>
            </div>

            {/* Mini Quick-Select Thumbnails Bar (Right Side) */}
            <div className="w-full max-w-[380px] sm:max-w-[420px] bg-white/80 backdrop-blur-sm rounded-2xl p-3 border border-[#c8c1ee]/50 shadow-xs flex items-center justify-between gap-1.5">
              {BRANDS.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedIndex(idx)}
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center p-2 transition-all duration-200 cursor-pointer ${
                    selectedIndex === idx
                      ? 'bg-[#0b0b10] shadow-md scale-110 ring-2 ring-[#D8B879]'
                      : 'bg-[#FAF8FF] hover:bg-white border border-[#c8c1ee]/40 opacity-70 hover:opacity-100'
                  }`}
                  title={item.name}
                >
                  <img
                    src={item.logo}
                    alt={item.name}
                    className={`w-5 h-5 object-contain ${
                      selectedIndex === idx ? 'filter invert brightness-200' : 'filter grayscale'
                    }`}
                  />
                </button>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
