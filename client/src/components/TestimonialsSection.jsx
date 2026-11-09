import React from 'react';
import { Star, Sparkles, Quote, MapPin, CheckCircle2 } from './icons';
import { TESTIMONIALS } from '../data/weddingData';
import { DecorativeCorner } from './svg/WeddingMotifs';
import SectionHeader from './SectionHeader';

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#f3f0ff] via-[#eae6fc] to-[#f3f0ff] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badge="Love Notes & Celebrations"
          title="Cherished by Couples Worldwide"
          subtitle="Read how our bespoke digital invitations brought joy, elegance, and effortless coordination to real celebrations across India, the UK, the US, and Dubai."
        />

        {/* Testimonials Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="relative bg-white/95 rounded-3xl p-8 sm:p-9 border border-blush-200 shadow-xs hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
            >
              {/* Subtle Decorative Corner */}
              <div className="absolute top-3 right-3 opacity-60">
                <DecorativeCorner className="w-5 h-5 text-gold" />
              </div>

              <div>
                {/* Rating & Verified Tag */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 text-[11px] font-sans text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/60 font-medium">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified Couple
                  </span>
                </div>

                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-blush-200 mb-3" />

                {/* Testimonial Quote */}
                <p className="font-serif text-base sm:text-lg text-charcoal leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              {/* Couple Info & Invitation Thumbnail */}
              <div className="pt-6 border-t border-blush-100 flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <img
                    src={t.avatar}
                    alt={t.couple}
                    className="w-12 h-12 rounded-full object-cover border-2 border-gold/50 shadow-xs"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="font-serif text-lg font-medium text-charcoal">
                      {t.couple}
                    </h4>
                    <p className="text-xs text-charcoal-muted flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-blush-500" />
                      {t.location} • <span className="font-serif italic">{t.date}</span>
                    </p>
                  </div>
                </div>

                {/* Invitation Design Tag Badge */}
                <div className="text-right hidden sm:block">
                  <span className="text-[10px] uppercase tracking-wider text-charcoal-muted block">
                    Custom Suite
                  </span>
                  <span className="text-xs font-serif font-medium text-blush-700">
                    {t.invitationDesign}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Editorial note indicating placeholder content for actual client reviews */}
        <p className="text-center text-[11px] text-charcoal-muted/70 mt-10 font-serif italic">
          * Representative sample reviews from recent wedding commissions. Ready to be updated with your studio's client stories.
        </p>

      </div>
    </section>
  );
}
