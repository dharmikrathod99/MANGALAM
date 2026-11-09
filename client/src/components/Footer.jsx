import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowUpRight, Heart } from 'lucide-react';
import TechText from './TechText';

/* =========================================================================
   Component 1: LogoIcon
   Renders a square icon box with white leaf/flame vector.
   ========================================================================= */
export function LogoIcon() {
  return (
    <div className="w-8 h-8 bg-[#31A8FF] rounded-[8px] flex items-center justify-center shadow-xs">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 20C4 20 4 14 10 10C16 6 20 4 20 4C20 4 18 8 14 14C10 20 4 20 4 20Z" fill="white" />
        <path d="M4 20L10 14" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  );
}

/* =========================================================================
   Social Media Vector Icons (Clean SVGs with 100% reliability)
   ========================================================================= */
const Linkedin = ({ className = "w-5 h-5 text-slate-800" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" rx="1" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Twitter = ({ className = "w-5 h-5 text-slate-800" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const Instagram = ({ className = "w-5 h-5 text-slate-800" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

/* =========================================================================
   Hero Jellyfish / "Octopus" Companion
   Recreates the celestial floating creature from the 3D Driftlab Hero.
   ========================================================================= */
export function MiniJellyfishOctopus({ className = "w-20 h-28" }) {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
        rotate: [-1.5, 2, -1.5],
      }}
      transition={{
        duration: 4.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className={`relative select-none ${className}`}
    >
      {/* Bioluminescent Ambient Glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-b from-pink-400/35 via-purple-400/25 to-blue-400/20 blur-xl -z-10 animate-pulse" />
      
      <svg
        viewBox="0 0 100 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_8px_20px_rgba(244,114,182,0.4)]"
      >
        <defs>
          <linearGradient id="miniBellGrad" x1="50" y1="10" x2="50" y2="65" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="25%" stopColor="#fbcfe8" stopOpacity="0.85" />
            <stop offset="70%" stopColor="#c084fc" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#818cf8" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="miniOrganGrad" x1="50" y1="20" x2="50" y2="55" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#ec4899" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#d946ef" stopOpacity="0.25" />
          </linearGradient>
          <linearGradient id="miniTentGrad1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ec4899" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="miniTentGrad2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f472b6" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0.15" />
          </linearGradient>
          <filter id="miniSoftGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Translucent Bell Dome */}
        <path
          d="M 22 55 C 20 28, 30 14, 50 14 C 70 14, 80 28, 78 55 C 72 58, 65 54, 58 56 C 52 58, 48 58, 42 56 C 35 54, 28 58, 22 55 Z"
          fill="url(#miniBellGrad)"
          stroke="rgba(255,255,255,0.85)"
          strokeWidth="1.2"
        />

        {/* Bioluminescent Organ Core */}
        <ellipse cx="50" cy="36" rx="14" ry="16" fill="url(#miniOrganGrad)" filter="url(#miniSoftGlow)" />
        <ellipse cx="46" cy="30" rx="4" ry="3" fill="#ffffff" opacity="0.75" />

        {/* Ruffled Edge of Umbrella */}
        <path
          d="M 22 55 Q 26 59 30 55 Q 35 59 40 55 Q 45 59 50 55 Q 55 59 60 55 Q 65 59 70 55 Q 74 59 78 55"
          stroke="rgba(255,255,255,0.9)"
          strokeWidth="1.5"
          fill="none"
        />

        {/* Ethereal Undulating Tentacles */}
        <path
          d="M 28 56 C 24 75, 34 95, 26 120 C 24 125, 26 130, 24 135"
          stroke="url(#miniTentGrad1)"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M 35 57 C 32 78, 42 98, 36 125 C 34 130, 36 135, 33 138"
          stroke="url(#miniTentGrad2)"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M 44 57 C 40 76, 52 94, 46 118 C 42 126, 48 134, 44 140"
          stroke="url(#miniTentGrad1)"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
        <path
          d="M 52 57 C 56 75, 46 95, 54 118 C 58 126, 52 134, 56 140"
          stroke="url(#miniTentGrad1)"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
        <path
          d="M 60 57 C 64 78, 54 98, 62 125 C 64 130, 62 135, 65 138"
          stroke="url(#miniTentGrad2)"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M 68 56 C 72 75, 62 95, 70 120 C 72 125, 70 130, 72 135"
          stroke="url(#miniTentGrad1)"
          strokeWidth="2.2"
          strokeLinecap="round"
        />

        {/* Fine Floating Filaments */}
        <path
          d="M 40 58 C 36 82, 46 105, 38 130"
          stroke="rgba(255,255,255,0.75)"
          strokeWidth="1"
          strokeDasharray="2 3"
        />
        <path
          d="M 58 58 C 62 82, 52 105, 60 130"
          stroke="rgba(255,255,255,0.75)"
          strokeWidth="1"
          strokeDasharray="2 3"
        />

        {/* Sparkles / Spores */}
        <circle cx="30" cy="85" r="1.5" fill="#fbcfe8" className="animate-ping" style={{ animationDuration: '3s' }} />
        <circle cx="68" cy="92" r="1.5" fill="#c084fc" className="animate-ping" style={{ animationDuration: '2.5s' }} />
        <circle cx="48" cy="115" r="1.5" fill="#ffffff" className="animate-ping" style={{ animationDuration: '2s' }} />
      </svg>
    </motion.div>
  );
}

/* =========================================================================
   Component 2: FooterCard
   Layered Card Layout matching website theme + exact specs.
   ========================================================================= */
export function FooterCard({ onSelectCollection, onOpenEnquiry }) {
  const socialIcons = [
    { Icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
    { Icon: Twitter, label: 'Twitter', href: 'https://twitter.com' },
    { Icon: Instagram, label: 'Instagram', href: 'https://instagram.com' }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
      
      {/* Outer Gray / Lilac Body */}
      <div className="bg-[#E9EBEE] rounded-[48px] border border-slate-200/80 shadow-sm overflow-hidden relative transition-all duration-300">
        
        {/* Inner White Box */}
        <div className="bg-white rounded-[40px] m-2 shadow-sm relative overflow-hidden">
          
          {/* Subtle Ambient Radial Highlight */}
          <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#f3f0ff]/70 blur-3xl pointer-events-none -z-0" />
          
          {/* Floating Hero Jellyfish / "Octopus" Companion Inside Card */}
          <div className="absolute -top-3 right-6 sm:right-10 hidden sm:flex items-center gap-3 z-20 pointer-events-auto">
            <MiniJellyfishOctopus className="w-16 h-24 sm:w-20 sm:h-28" />
          </div>

          {/* Content Grid Space */}
          <div className="p-8 md:p-10 lg:p-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 relative z-10">
            
            {/* Brand Info Column */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Logo & Name Row */}
              <div className="flex items-center gap-2.5">
                <LogoIcon />
                <span className="text-[26px] font-bold tracking-tight text-[#0F172A]">
                  vize <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#94A3B8] ml-1.5 font-sans">× Rivayat</span>
                </span>
              </div>

              {/* Description */}
              <p className="text-[#64748B] leading-relaxed text-[16px] font-normal max-w-[320px]">
                Premium strategic solutions designed to elevate your brand presence through advanced marketing and heirloom celebrations.
              </p>

              {/* Socials Group */}
              <div className="flex items-center gap-3">
                {socialIcons.map(({ Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-[44px] h-[44px] flex items-center justify-center rounded-xl border border-slate-100 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.05)] hover:bg-slate-50 transition-all active:scale-95 group cursor-pointer"
                  >
                    <Icon className="w-5 h-5 text-slate-800 transition-transform group-hover:scale-110" />
                  </a>
                ))}
              </div>
            </div>

            {/* Product Column */}
            <div className="space-y-6">
              <h4 className="text-[14px] font-medium text-[#94A3B8]">Product</h4>
              <ul className="space-y-4">
                <li>
                  <a href="#features" className="text-[15px] font-medium text-[#1E293B] hover:text-[#31A8FF] transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="text-[15px] font-medium text-[#1E293B] hover:text-[#31A8FF] transition-colors">
                    Solutions
                  </a>
                </li>
                <li>
                  <a href="#what-we-use" className="text-[15px] font-medium text-[#1E293B] hover:text-[#31A8FF] transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#collections" className="text-[15px] font-medium text-[#1E293B] hover:text-[#31A8FF] transition-colors">
                    Updates
                  </a>
                </li>
              </ul>
            </div>

            {/* Science Column */}
            <div className="space-y-6">
              <h4 className="text-[14px] font-medium text-[#94A3B8]">Science</h4>
              <ul className="space-y-4">
                <li>
                  <a href="#how-it-works" className="text-[15px] font-medium text-[#1E293B] hover:text-[#31A8FF] transition-colors">
                    Approach
                  </a>
                </li>
                <li>
                  <a href="#driftlab-hero" className="text-[15px] font-medium text-[#1E293B] hover:text-[#31A8FF] transition-colors">
                    Identity
                  </a>
                </li>
                <li>
                  <a href="#what-we-use" className="text-[15px] font-medium text-[#1E293B] hover:text-[#31A8FF] transition-colors">
                    Research
                  </a>
                </li>
                <li>
                  <a href="#why-choose-us" className="text-[15px] font-medium text-[#1E293B] hover:text-[#31A8FF] transition-colors">
                    Metrics
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div className="space-y-6">
              <h4 className="text-[14px] font-medium text-[#94A3B8]">Company</h4>
              <ul className="space-y-4">
                <li>
                  <button
                    onClick={() => onOpenEnquiry && onOpenEnquiry()}
                    className="text-[15px] font-medium text-[#1E293B] hover:text-[#31A8FF] transition-colors text-left cursor-pointer"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <a href="#what-we-use" className="text-[15px] font-medium text-[#1E293B] hover:text-[#31A8FF] transition-colors">
                    Partners
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => onOpenEnquiry && onOpenEnquiry('Careers')}
                    className="text-[15px] font-medium text-[#1E293B] hover:text-[#31A8FF] transition-colors text-left cursor-pointer"
                  >
                    Careers
                  </button>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Legal Bar (Inside Gray Outer Wrap, OUTSIDE of White Box) */}
        <div className="px-6 sm:px-12 md:px-16 lg:px-20 py-5 flex flex-col md:flex-row justify-between items-center gap-6 text-[15px]">
          
          {/* Left Side */}
          <p className="text-[#64748B] font-medium">
            © 2025 Vize. All rights reserved.
          </p>

          {/* Right Side */}
          <div className="flex flex-row gap-8 text-[#64748B] font-medium items-center">
            <a href="#legal" className="hover:text-[#1E293B] transition-colors">
              Legal Center
            </a>
            <div className="w-[1px] h-4 bg-slate-300" />
            <a href="#terms" className="hover:text-[#1E293B] transition-colors">
              User Agreement
            </a>
          </div>

        </div>

      </div>

    </div>
  );
}

/* =========================================================================
   Component 3: Master Brand TechText Signature
   React Bits interactive kinetic wordmark with vector outlines and specks.
   ========================================================================= */
export function GlassText() {
  return (
    <div className="relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center select-none pt-4 pb-6 px-4 overflow-hidden">
      <div className="w-full h-[180px] sm:h-[220px] md:h-[260px] relative">
        <TechText
          text="RIVAYAT"
          fontFamily="'Anton', 'Outfit', sans-serif"
          fontWeight={700}
          fontSize={180}
          letterSpacing={-0.03}
          color="#0b0b10"
          accentColor="#D8B879"
          reveal="letter"
          reach={180}
          dashLength={4}
          dashGap={2}
          specks={18}
          intro="none"
          introDuration={2}
          clickKick={true}
          draggable={true}
          bounce={0.4}
          guides={false}
          sweep={true}
          speed={1}
        />
      </div>
      <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#0b0b10]/40 -mt-2">
        ✦ Interactive Atelier Wordmark • Drag or Click Letters ✦
      </p>
    </div>
  );
}

/* =========================================================================
   Final Default Export for Footer
   ========================================================================= */
export default function Footer({ onSelectCollection, onOpenEnquiry }) {
  return (
    <footer className="w-full flex flex-col items-center gap-0 pt-16 pb-8 bg-gradient-to-b from-[#f3f0ff] via-[#eae6fc] to-[#e4e0f5] relative overflow-hidden">
      
      {/* Background Glow Blobs Matching Website Lilac Theme */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-pink-300/15 blur-[120px] pointer-events-none -z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] rounded-full bg-[#c8c1ee]/25 blur-[100px] pointer-events-none -z-0" />

      {/* Layered Card Container */}
      <FooterCard onSelectCollection={onSelectCollection} onOpenEnquiry={onOpenEnquiry} />

      {/* Massive Handcrafted Glass SVG Filter Text */}
      <GlassText />

    </footer>
  );
}
