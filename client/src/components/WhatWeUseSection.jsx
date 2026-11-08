import React, { useState } from 'react';
import { Sparkles, CheckCircle2, ArrowRight } from './icons';
import { DecorativeCorner } from './svg/WeddingMotifs';

export const BRANDS = [
  {
    id: 'framer',
    index: '01 / 08',
    name: 'FRAMER',
    role: 'Interactive Motion & Spring Physics',
    description: 'High-fidelity gesture physics, seamless reactive components, and editorial layout fluidity.',
    logo: 'https://framerusercontent.com/images/oxUWU2jLhf3X7vFMvvWQLrvtg.svg',
    tag: 'Motion Engine'
  },
  {
    id: 'google',
    index: '02 / 08',
    name: 'GOOGLE',
    role: 'Maps Navigation & Calendar Cloud',
    description: '1-tap GPS directions directly to banquet hall gates and automatic Google Calendar event reminders.',
    logo: 'https://framerusercontent.com/images/GrUgwzE0FkyfEyoukD7rX6BYLI.svg',
    tag: 'Navigation & Sync'
  },
  {
    id: 'meta',
    index: '03 / 08',
    name: 'META',
    role: 'WhatsApp & Instagram Broadcasting',
    description: 'Instant WhatsApp concierge delivery, family group invitations, and high-res vertical story formats.',
    logo: 'https://framerusercontent.com/images/FMtXuBx54vZkq98wFzLqOFvSv30.svg',
    tag: 'Broadcasting'
  },
  {
    id: 'apple',
    index: '04 / 08',
    name: 'APPLE',
    role: 'Retina Typography & iOS Gestures',
    description: 'Native Apple Calendar event integration, fluid iOS touch scrolling, and pixel-crisp display rendering.',
    logo: 'https://framerusercontent.com/images/caZkXLl6Ju2aFJ52ZRqbel1eo.svg',
    tag: 'Display Standards'
  },
  {
    id: 'openai',
    index: '05 / 08',
    name: 'OPENAI',
    role: 'AI Translation & Poetic Rhyming',
    description: 'Assisted sacred Sanskrit shloka interpretations, personalized couple story verse, and editorial phrasing.',
    logo: 'https://framerusercontent.com/images/zGn1XqlRekQQ1rqh6UQV3cp9rk.svg',
    tag: 'AI Artistry'
  },
  {
    id: 'tesla',
    index: '06 / 08',
    name: 'TESLA',
    role: 'Speed & Minimalist Architecture',
    description: 'Obsessive performance optimization, zero bloat, and instantaneous mobile loading speeds worldwide.',
    logo: 'https://framerusercontent.com/images/tZ37dPy7lpmPnFVgpQdIUyc58k.svg',
    tag: 'Performance'
  },
  {
    id: 'spotify',
    index: '07 / 08',
    name: 'SPOTIFY',
    role: 'Ceremony Audio & Music Scoring',
    description: 'High-fidelity audio streaming integration for emotional bridal entries, sangeet tracks, and shehnai tunes.',
    logo: 'https://framerusercontent.com/images/4T3OTh0OK3yNNFwdL6Y8DSk9e8.svg',
    tag: 'Audio Scoring'
  },
  {
    id: 'nike',
    index: '08 / 08',
    name: 'NIKE',
    role: 'Aesthetic Identity & Craft Standards',
    description: 'Iconic typography balance, bold visual clarity, and precision-crafted design principles.',
    logo: 'https://framerusercontent.com/images/7JG0ZfLdH9nlPffFea6M6Ts0HrU.svg',
    tag: 'Design Philosophy'
  }
];

export default function WhatWeUseSection({ onOpenBooking }) {
  const [activeBrand, setActiveBrand] = useState(BRANDS[0]);

  return (
    <section id="what-we-use" className="py-24 bg-gradient-to-b from-[#f3f0ff] via-[#eae6fc] to-[#f3f0ff] relative overflow-hidden">
      {/* Dreamy Ambient Jellyfish Glow */}
      <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] rounded-full bg-pink-300/15 blur-[120px] pointer-events-none -z-0" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[#c8c1ee]/30 blur-[100px] pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 border border-[#c8c1ee] text-[#0b0b10] text-xs tracking-[0.2em] uppercase font-semibold shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            What We Use • Modern Tech Stack
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0b0b10] font-normal tracking-tight">
            Crafted with World-Class Tools & Platforms
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#0b0b10]/70 font-light leading-relaxed">
            We unite the world's most innovative design engines, cloud sync services, and multimedia standards to create your bespoke wedding invitation suite.
          </p>
          <div className="w-24 h-[1.5px] bg-[#D8B879] mx-auto mt-4" />
        </div>

        {/* Brand Selector Pills (Quick Filter on Mobile & Tablet) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {BRANDS.map((brand) => (
            <button
              key={brand.id}
              onClick={() => setActiveBrand(brand)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeBrand.id === brand.id
                  ? 'bg-[#0b0b10] text-[#f3f0ff] shadow-md scale-105 border border-[#D8B879]'
                  : 'bg-white/80 text-[#0b0b10]/70 hover:bg-white border border-[#c8c1ee]/60 hover:text-[#0b0b10]'
              }`}
            >
              <span>{brand.name}</span>
            </button>
          ))}
        </div>

        {/* 8 Brand Logo Cards Grid (Matching Framer Brand-Logo-Images Component) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BRANDS.map((item) => {
            const isSelected = activeBrand.id === item.id;
            return (
              <div
                key={item.id}
                onClick={() => setActiveBrand(item)}
                className={`group relative bg-white/90 backdrop-blur-sm rounded-3xl p-7 border transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 cursor-pointer ${
                  isSelected
                    ? 'border-[#D8B879] shadow-xl ring-2 ring-[#D8B879]/30 bg-white'
                    : 'border-[#c8c1ee]/60 hover:border-[#D8B879]/60 shadow-xs hover:shadow-xl'
                }`}
              >
                {/* Decorative Corner Accent on Hover */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-70 transition-opacity">
                  <DecorativeCorner className="w-4 h-4 text-gold" />
                </div>

                <div>
                  {/* Framer Index Format: 01 / 08   BRAND */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#0b0b10]/75">
                      {item.index} &nbsp; {item.name}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-blush-700 bg-pink-100/70 px-2 py-0.5 rounded-full border border-pink-200">
                      {item.tag}
                    </span>
                  </div>

                  {/* Logo Center Display Box */}
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-[#FAF8FF] border border-[#c8c1ee]/50 flex items-center justify-center p-4 mb-6 group-hover:scale-110 group-hover:bg-white group-hover:border-[#D8B879] transition-all duration-300 shadow-2xs">
                    <img
                      src={item.logo}
                      alt={`${item.name} logo`}
                      className="w-10 h-10 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                      loading="lazy"
                    />
                  </div>

                  {/* Role Title */}
                  <h3 className="font-serif text-lg text-[#0b0b10] font-normal tracking-wide mb-2 text-center">
                    {item.role}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-[#0b0b10]/70 font-light leading-relaxed text-center">
                    {item.description}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-[#c8c1ee]/30 flex items-center justify-center text-[11px] font-mono text-[#D8B879] font-medium group-hover:underline">
                  <span>✦ Integrated in Your Suite</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-16 bg-white/90 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-[#c8c1ee]/70 shadow-lg text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ede9fe] text-[#2A1F5C] text-xs font-semibold uppercase tracking-wider">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Harmonized Production Suite</span>
          </div>
          
          <h3 className="font-serif text-2xl sm:text-3xl text-[#0b0b10] font-normal">
            High-Tech Precision, Heirloom Devotion
          </h3>

          <p className="text-xs sm:text-sm text-[#0b0b10]/75 font-light leading-relaxed max-w-2xl mx-auto">
            We don't send static PDFs. We combine interactive web standards, Google GPS precision, and audio scoring to ensure every guest is enchanted from the moment they open their invitation.
          </p>

          <div className="pt-2">
            <button
              onClick={() => onOpenBooking && onOpenBooking()}
              className="px-8 py-3.5 rounded-full bg-[#0b0b10] hover:bg-[#2c293e] text-white text-xs uppercase tracking-widest font-semibold transition-all duration-300 shadow-md hover:scale-105 active:scale-95 cursor-pointer inline-flex items-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span>Commission Your Bespoke Suite</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
