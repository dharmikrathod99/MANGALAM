import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, Heart, Star, CheckCircle2, Volume2, VolumeX } from './icons';
import FloralVines from './svg/FloralVines';
import MandalaPattern from './svg/MandalaPattern';
import WaxSeal from './svg/WaxSeal';
import { WeddingRings, Butterfly, DecorativeCorner } from './svg/WeddingMotifs';

export default function HeroSection({ onOpenEnquiry, onExplore }) {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [isSoundOn, setIsSoundOn] = useState(false);

  // The 3 Signature Hero Lines
  const heroLines = [
    {
      part1: "Beautiful Digital Wedding Invitations,",
      part2: "Made Just for Your Big Day.",
      label: "Your Big Day",
      badge: "✦ Artisan Indian Heritage • Modern Digital Atelier"
    },
    {
      part1: "Love Deserves a",
      part2: "Beautiful Invitation.",
      label: "Love Deserves",
      badge: "✦ Heirloom Stationery Studio"
    },
    {
      part1: "Your Day. Your Story.",
      part2: "Your Invitation.",
      label: "Your Invitation",
      badge: "✦ Bespoke Multi-Event Suites"
    }
  ];
  const [activeLineIdx, setActiveLineIdx] = useState(0);

  // Auto-rotate hero lines every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLineIdx((prev) => (prev + 1) % heroLines.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroLines.length]);

  // Gentle acoustic sitar/chime Web Audio synthesis
  const playGentleChime = () => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      
      const freqs = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6 harmonized chime
      freqs.forEach((freq, index) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + index * 0.12);
        gain.gain.setValueAtTime(0.001, ctx.currentTime + index * 0.12);
        gain.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + index * 0.12 + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + index * 0.12 + 1.2);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + index * 0.12);
        osc.stop(ctx.currentTime + index * 0.12 + 1.3);
      });
    } catch (e) {
      // Audio not permitted or supported
    }
  };

  const handleEnvelopeToggle = () => {
    const nextState = !isEnvelopeOpen;
    setIsEnvelopeOpen(nextState);
    if (nextState) {
      playGentleChime();
    }
  };

  return (
    <section id="hero" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-gradient-to-b from-ivory-100 via-blush-50 to-ivory-100">
      {/* Subtle Ornamental Background Elements */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full max-w-4xl pointer-events-none opacity-40">
        <FloralVines />
      </div>

      <div className="absolute top-20 left-4 md:left-12 pointer-events-none opacity-20 animate-spin-slow">
        <MandalaPattern className="w-48 h-48 md:w-72 md:h-72 text-gold" />
      </div>

      <div className="absolute top-1/3 right-4 md:right-16 pointer-events-none opacity-20">
        <MandalaPattern className="w-40 h-40 md:w-64 md:h-64 text-blush-400" />
      </div>

      {/* Floating subtle butterflies */}
      <div className="absolute top-32 right-1/4 pointer-events-none hidden md:block animate-float-slow">
        <Butterfly className="w-8 h-8 text-gold" />
      </div>
      <div className="absolute bottom-24 left-1/5 pointer-events-none hidden md:block animate-float-reverse">
        <Butterfly className="w-6 h-6 text-blush-400" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-7">
            {/* Studio Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ivory-100 border border-gold/40 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-gold animate-ping" />
              <span className="text-xs uppercase tracking-[0.22em] text-charcoal-soft font-medium">
                {heroLines[activeLineIdx].badge}
              </span>
            </div>

            {/* Main Heading - Featuring the 3 requested lines */}
            <div className="space-y-3">
              <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-normal tracking-tight text-charcoal leading-[1.14] min-h-[120px] sm:min-h-[150px] md:min-h-[180px] transition-all duration-500">
                {heroLines[activeLineIdx].part1}{' '}
                <span className="italic font-display block mt-1.5 text-blush-700 animate-fadeIn">
                  {heroLines[activeLineIdx].part2}
                </span>
              </h1>

              {/* Responsive 3-Line Switcher Buttons */}
              <div className="flex items-center justify-center lg:justify-start gap-2 pt-1">
                {heroLines.map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveLineIdx(idx)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs transition-all ${
                      activeLineIdx === idx
                        ? 'bg-charcoal text-ivory-100 font-semibold shadow-xs ring-1 ring-gold/50'
                        : 'bg-white/80 text-charcoal-muted hover:text-charcoal border border-blush-200'
                    }`}
                  >
                    <span className="text-[10px] text-gold font-bold">0{idx + 1}</span>
                    <span className="text-[11px] font-medium">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Supporting Description */}
            <p className="font-sans text-base sm:text-lg md:text-xl text-charcoal-muted max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
              Thoughtfully designed digital wedding invitations that turn your special moments into unforgettable memories. 
              Gilded with sacred Indian motifs, romantic watercolor botanicals, and instant WhatsApp elegance.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => onOpenEnquiry()}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-charcoal text-ivory-100 text-xs sm:text-sm tracking-[0.18em] uppercase font-semibold hover:bg-blush-700 transition-all duration-300 shadow-md hover:shadow-xl flex items-center justify-center gap-3 group border border-charcoal hover:border-blush-700"
              >
                <span>Create Your Invitation</span>
                <Sparkles className="w-4 h-4 text-gold group-hover:rotate-12 transition-transform" />
              </button>

              <button
                onClick={() => onExplore()}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-ivory-100/80 hover:bg-ivory-100 text-charcoal text-xs sm:text-sm tracking-[0.18em] uppercase font-semibold border border-blush-300 hover:border-gold transition-all duration-300 shadow-xs hover:shadow-md flex items-center justify-center gap-2 group"
              >
                <span>Explore Invitations</span>
                <ArrowRight className="w-4 h-4 text-charcoal-muted group-hover:translate-x-1 group-hover:text-gold transition-all" />
              </button>
            </div>

            {/* Trust Markers / Highlights */}
            <div className="pt-6 border-t border-blush-200/80 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-left">
              <div>
                <div className="flex items-center gap-1 text-gold text-sm font-semibold">
                  <Star className="w-4 h-4 fill-gold text-gold" />
                  <span>4.9 / 5.0</span>
                </div>
                <p className="text-xs text-charcoal-muted mt-0.5">12,000+ Couples</p>
              </div>

              <div>
                <div className="text-sm font-semibold text-charcoal">
                  24–48 Hours
                </div>
                <p className="text-xs text-charcoal-muted mt-0.5">Rapid Dispatch</p>
              </div>

              <div>
                <div className="text-sm font-semibold text-emerald-700 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  WhatsApp
                </div>
                <p className="text-xs text-charcoal-muted mt-0.5">1-Tap Sharing</p>
              </div>
            </div>
          </div>

          {/* Right Column: Layered Invitation & Envelope Interactive Visual */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Decorative Ornamental Ring Behind Envelope */}
            <div className="absolute -top-10 -right-8 w-64 h-64 md:w-80 md:h-80 pointer-events-none rounded-full border border-dashed border-gold/30 -z-10 animate-spin-slow" />
            <div className="absolute -bottom-10 -left-6 w-48 h-48 pointer-events-none rounded-full bg-blush-200/50 blur-2xl -z-10" />

            {/* The Layered Interactive Envelope Container */}
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] perspective-1000">
              
              {/* Floating Helper Pill */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 text-charcoal text-[11px] font-medium shadow-md border border-blush-200">
                  <Sparkles className="w-3 h-3 text-gold" />
                  {isEnvelopeOpen ? 'Click seal to close' : 'Click wax seal to open'}
                </span>
              </div>

              {/* Envelope Body */}
              <div
                onClick={handleEnvelopeToggle}
                className="relative cursor-pointer select-none transition-all duration-700 bg-ivory-100 rounded-2xl p-4 border border-blush-300 shadow-2xl overflow-visible hover:shadow-blush-300/50"
              >
                
                {/* Envelope Outer Pocket Sleeve */}
                <div className="relative bg-gradient-to-b from-[#FAF4EC] to-[#FFFDF8] rounded-xl border border-gold/40 p-3 pt-6 min-h-[460px] flex flex-col justify-between overflow-hidden">
                  
                  {/* Ornate Stationery Corners */}
                  <DecorativeCorner className="absolute top-2 left-2 w-6 h-6 text-gold/60" />
                  <div className="absolute top-2 right-2 scale-x-[-1]">
                    <DecorativeCorner className="w-6 h-6 text-gold/60" />
                  </div>
                  <div className="absolute bottom-2 left-2 scale-y-[-1]">
                    <DecorativeCorner className="w-6 h-6 text-gold/60" />
                  </div>
                  <div className="absolute bottom-2 right-2 scale-[-1]">
                    <DecorativeCorner className="w-6 h-6 text-gold/60" />
                  </div>

                  {/* Inner Sliding Invitation Card */}
                  <div
                    className={`relative z-10 bg-ivory-50 rounded-lg border border-gold/50 p-5 text-center transition-all duration-700 ease-out shadow-lg ${
                      isEnvelopeOpen
                        ? '-translate-y-20 scale-102 ring-2 ring-gold/40 shadow-2xl'
                        : 'translate-y-0 scale-98 opacity-95'
                    }`}
                  >
                    {/* Auspicious Shubh Vivah Symbol */}
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <span className="h-[1px] w-8 bg-gold/50" />
                      <span className="text-[11px] font-serif tracking-[0.2em] text-gold-deep uppercase">
                        ॥ शुभ विवाह ॥
                      </span>
                      <span className="h-[1px] w-8 bg-gold/50" />
                    </div>

                    <p className="text-[10px] uppercase tracking-[0.25em] text-charcoal-muted">
                      Together with their families
                    </p>

                    {/* Couple Names */}
                    <div className="my-3 py-2 border-y border-blush-200">
                      <h2 className="font-serif text-3xl text-blush-700 tracking-wide font-normal">
                        Ananya
                      </h2>
                      <span className="font-script text-2xl text-gold block -my-1">&</span>
                      <h2 className="font-serif text-3xl text-charcoal tracking-wide font-normal">
                        Kabir
                      </h2>
                    </div>

                    <p className="text-xs text-charcoal-soft font-serif italic mb-3">
                      Invite you to celebrate their union of love & rituals
                    </p>

                    {/* Wedding Date Pill */}
                    <div className="inline-block bg-blush-100/70 border border-blush-300 rounded-full px-3 py-1 mb-3">
                      <span className="text-[11px] font-medium tracking-wider text-blush-900 uppercase">
                        Sunday • 14 December 2026
                      </span>
                    </div>

                    {/* Location */}
                    <div className="text-[11px] text-charcoal-muted space-y-0.5">
                      <p className="font-medium text-charcoal">The Oberoi Udaivilas</p>
                      <p>Lake Pichola, Udaipur, Rajasthan</p>
                    </div>

                    {/* Card Footer Badge */}
                    <div className="mt-4 pt-3 border-t border-dashed border-blush-200 flex items-center justify-between text-[10px] text-charcoal-muted">
                      <span className="flex items-center gap-1">
                        <Heart className="w-3 h-3 text-blush-500 fill-blush-500" />
                        Pheras & Sangeet
                      </span>
                      <span className="text-gold font-medium">Scan for Maps & RSVP</span>
                    </div>
                  </div>

                  {/* Envelope Flap with Wax Seal */}
                  <div className="relative z-20 mt-4 flex flex-col items-center">
                    
                    {/* Wax Seal placed over flap */}
                    <div className="relative -mt-6">
                      <WaxSeal monogram="AK" color="#865365" size={68} />
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <span className="animate-ping w-12 h-12 rounded-full border border-gold/40 opacity-40" />
                      </div>
                    </div>

                    <p className="text-[11px] text-charcoal-muted mt-2 tracking-wider font-serif italic">
                      {isEnvelopeOpen ? 'Tap seal to tuck in' : 'Tap to reveal card'}
                    </p>
                  </div>
                </div>

                {/* Subtle Floating decorative elements on card edges */}
                <div className="absolute -bottom-3 -right-3 bg-white p-2 rounded-full shadow-lg border border-gold/30 hidden sm:flex items-center gap-1 text-[11px] text-charcoal font-medium">
                  <Sparkles className="w-3.5 h-3.5 text-gold" />
                  <span>Interactive Audio Preview</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
