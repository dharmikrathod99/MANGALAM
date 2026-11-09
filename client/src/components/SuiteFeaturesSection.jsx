import React from 'react';
import { Smartphone, Volume2, MapPin, Calendar, Share2, Sparkles, CheckCircle2, Heart } from './icons';
import { DecorativeCorner } from './svg/WeddingMotifs';
import SectionHeader from './SectionHeader';
import AnimatedContent from './AnimatedContent';

export default function SuiteFeaturesSection({ onOpenBooking }) {
  const features = [
    {
      id: 'mobile-hd',
      icon: <Smartphone className="w-6 h-6 text-blush-700" />,
      tag: 'Touch-First Design',
      title: 'Ultra-HD Vertical Screen Format',
      description: 'Crafted specifically for modern smartphone displays with crisp vector typography, gold foil accents, and smooth vertical scrolling.'
    },
    {
      id: 'audio-scoring',
      icon: <Volume2 className="w-6 h-6 text-[#D8B879]" />,
      tag: 'Musical Atmosphere',
      title: 'Ceremony Soundtrack & Shlokas',
      description: 'Embed your favorite romantic song, traditional shehnai instrumental, or sacred Vedic mantras that play gracefully when guests open your card.'
    },
    {
      id: 'venue-maps',
      icon: <MapPin className="w-6 h-6 text-emerald-600" />,
      tag: 'Live Navigation',
      title: '1-Tap Google Maps Directions',
      description: 'Never worry about lost guests. An interactive button takes guests directly into Google Maps with the exact pin for your banquet hall or palace gate.'
    },
    {
      id: 'calendar-rsvp',
      icon: <Calendar className="w-6 h-6 text-[#5a3346]" />,
      tag: 'Calendar Integration',
      title: 'Add-to-Calendar Reminders',
      description: 'Guests can save individual ceremonies (Mehendi, Sangeet, Pheras, Reception) to Google or Apple Calendar with one tap so no one misses a moment.'
    },
    {
      id: 'multi-event',
      icon: <Sparkles className="w-6 h-6 text-gold" />,
      tag: 'Coordinated Aesthetics',
      title: 'Dedicated Multi-Event Pages',
      description: 'Separate, coordinated cards for Haldi, Mehendi, Sangeet, Vivah, and Reception, maintaining complete visual and theme harmony.'
    },
    {
      id: 'whatsapp-broadcast',
      icon: <Share2 className="w-6 h-6 text-[#25D366]" />,
      tag: 'Effortless Sharing',
      title: 'WhatsApp Broadcasting Ready',
      description: 'Optimized file weight and custom preview text ready to share instantly across family, friend, and bridesmaid WhatsApp groups.'
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-[#f3f0ff] via-[#eae6fc] to-[#f3f0ff] relative overflow-hidden">
      {/* Dreamy Ambient Jellyfish Glow */}
      <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-pink-300/20 blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-[#c8c1ee]/30 blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Section Header */}
        <SectionHeader
          badge="Every Detail Included"
          title="Interactive Features Built for Celebrations"
          subtitle="Every digital suite is built from the ground up to give your guests an effortless, unforgettable luxury experience on their phones."
        />

        {/* 6 Feature Cards Grid with Staggered Scroll Motion */}
        <AnimatedContent
          distance={55}
          stagger={0.08}
          duration={0.75}
          ease="power3.out"
          threshold={0.08}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {features.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white/90 backdrop-blur-sm rounded-3xl p-7 sm:p-8 border border-[#c8c1ee]/60 shadow-xs hover:shadow-xl hover:border-[#D8B879]/70 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              {/* Decorative Corner on Hover */}
              <div className="absolute top-3.5 right-3.5 opacity-0 group-hover:opacity-60 transition-opacity">
                <DecorativeCorner className="w-4 h-4 text-gold" />
              </div>

              <div className="space-y-4">
                {/* Header Icon + Tag */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#faf8ff] border border-[#c8c1ee]/50 flex items-center justify-center group-hover:scale-110 group-hover:border-[#D8B879] transition-all duration-300">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#0b0b10]/60 bg-[#f3f0ff] px-2.5 py-1 rounded-full border border-[#c8c1ee]/40">
                    {item.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl text-[#0b0b10] font-normal tracking-wide">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#0b0b10]/70 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </AnimatedContent>

        {/* Personalized Atelier Commitment Box */}
        <AnimatedContent distance={35} duration={0.65} threshold={0.15}>
          <div className="mt-16 bg-white/90 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-[#c8c1ee]/70 shadow-lg text-center max-w-4xl mx-auto space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ede9fe] text-[#2A1F5C] text-xs font-semibold uppercase tracking-wider">
              <Heart className="w-3.5 h-3.5 text-blush-700 fill-blush-700" />
              <span>Dedicated Artisan Commitment</span>
            </div>
            
            <h3 className="font-serif text-2xl sm:text-3xl text-[#0b0b10] font-normal">
              Personal Attention for Every Single Couple
            </h3>

            <p className="text-xs sm:text-sm text-[#0b0b10]/75 font-light leading-relaxed max-w-2xl mx-auto">
              Because we are a dedicated bespoke studio, you work directly with our senior designer. We refine colors, fonts, venue details, and wording until your celebration suite is 100% perfect.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <span className="inline-flex items-center gap-1.5 text-xs text-[#0b0b10] bg-[#FAF8FF] px-3 py-1 rounded-full border border-[#c8c1ee]/50">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> 100% Custom Tailoring
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-[#0b0b10] bg-[#FAF8FF] px-3 py-1 rounded-full border border-[#c8c1ee]/50">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Unlimited Proof Refinements
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-[#0b0b10] bg-[#FAF8FF] px-3 py-1 rounded-full border border-[#c8c1ee]/50">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Express 24-48h Drafts
              </span>
            </div>

            <div className="pt-3">
              <button
                onClick={() => onOpenBooking && onOpenBooking()}
                className="px-8 py-3.5 rounded-full bg-[#0b0b10] hover:bg-[#2c293e] text-white text-xs uppercase tracking-widest font-semibold transition-all duration-300 shadow-md hover:scale-105 active:scale-95 cursor-pointer inline-flex items-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5 text-gold" />
                <span>Book Your Custom Invitation Suite</span>
              </button>
            </div>
          </div>
        </AnimatedContent>

      </div>
    </section>
  );
}

