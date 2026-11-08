import React from 'react';
import { ArrowUpRight, Sparkles } from './icons';
import { COLLECTIONS } from '../data/weddingData';
import { DecorativeCorner } from './svg/WeddingMotifs';

export default function CollectionsSection({ onSelectCollection, onOpenEnquiry }) {
  return (
    <section id="collections" className="py-24 bg-gradient-to-b from-[#f3f0ff] via-[#eae6fc] to-[#f3f0ff] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 border border-[#c8c1ee] text-[#0b0b10] text-xs tracking-[0.2em] uppercase font-medium">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            Curated Stationery Suites
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal font-normal tracking-tight">
            Find the Perfect Invitation for Your Celebration
          </h2>
          <p className="font-sans text-base sm:text-lg text-charcoal-muted font-light leading-relaxed">
            From traditional Vedic rituals to contemporary destination galas, explore twelve signature design aesthetics crafted for modern couples.
          </p>
          <div className="w-24 h-[1px] bg-gold mx-auto mt-4" />
        </div>

        {/* 12 Curated Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {COLLECTIONS.map((col, idx) => (
            <div
              key={col.id}
              className="group relative bg-white/95 rounded-2xl border border-[#c8c1ee]/70 overflow-hidden shadow-xs hover:shadow-xl hover:border-gold transition-all duration-500 flex flex-col justify-between"
            >
              {/* Image & Preview Container */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-blush-100/40">
                <img
                  src={col.image}
                  alt={col.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Ornate Corner Accent */}
                <div className="absolute top-3 left-3 opacity-80">
                  <DecorativeCorner className="w-6 h-6 text-ivory-100" />
                </div>

                {/* Badge Tag */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full text-[11px] uppercase tracking-wider font-semibold bg-ivory-100/90 text-charcoal shadow-sm backdrop-blur-xs">
                    {col.tag}
                  </span>
                </div>

                {/* Collection Title Overlay on Image */}
                <div className="absolute bottom-4 left-4 right-4 text-ivory-100">
                  <span className="text-[10px] tracking-[0.25em] uppercase text-gold font-sans font-medium block">
                    Collection {String(idx + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-serif text-2xl font-normal tracking-wide text-ivory-100">
                    {col.title}
                  </h3>
                </div>
              </div>

              {/* Card Content & Details */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-blush-700 font-semibold mb-1.5">
                    {col.subtitle}
                  </h4>
                  <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed font-light">
                    {col.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-blush-100 flex items-center justify-between text-xs text-charcoal-muted">
                  <span className="font-serif italic text-charcoal-soft">
                    {col.popularFor}
                  </span>
                  <button
                    onClick={() => onSelectCollection(col)}
                    className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-charcoal hover:text-blush-700 transition-colors group-hover:translate-x-0.5"
                  >
                    <span>Explore Suite</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-gold group-hover:rotate-45 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bespoke Custom Invitation Callout */}
        <div className="mt-16 bg-gradient-to-r from-blush-100/60 via-ivory-100 to-blush-100/60 rounded-2xl p-8 border border-gold/40 text-center max-w-4xl mx-auto shadow-sm">
          <h3 className="font-serif text-2xl text-charcoal mb-2">
            Have a Bespoke Vision in Mind?
          </h3>
          <p className="text-sm text-charcoal-muted max-w-xl mx-auto mb-5 font-light">
            Our atelier crafts completely custom invitations tailored to your theme, destination venue sketches, cross-cultural heritage, and personal story.
          </p>
          <button
            onClick={() => onOpenEnquiry('Bespoke Custom Theme')}
            className="px-6 py-2.5 rounded-full bg-charcoal text-ivory-100 text-xs tracking-[0.2em] uppercase font-semibold hover:bg-blush-700 transition-colors shadow-sm"
          >
            Request Bespoke Consultation
          </button>
        </div>

      </div>
    </section>
  );
}
