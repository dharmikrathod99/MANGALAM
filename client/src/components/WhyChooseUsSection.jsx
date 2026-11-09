import React from 'react';
import { Sparkles, Palette, Crown, Clock, Smartphone, Gem, Layers, Share2, CheckCircle2 } from './icons';
import { WHY_CHOOSE_US } from '../data/weddingData';
import { DecorativeCorner, WeddingBells } from './svg/WeddingMotifs';
import SectionHeader from './SectionHeader';
import AnimatedContent from './AnimatedContent';

export default function WhyChooseUsSection() {
  const iconMap = {
    Sparkles: <Sparkles className="w-5 h-5 text-gold" />,
    Palette: <Palette className="w-5 h-5 text-blush-700" />,
    Crown: <Crown className="w-5 h-5 text-gold" />,
    Clock: <Clock className="w-5 h-5 text-blush-700" />,
    Smartphone: <Smartphone className="w-5 h-5 text-gold" />,
    Gem: <Gem className="w-5 h-5 text-blush-700" />,
    Layers: <Layers className="w-5 h-5 text-gold" />,
    Share2: <Share2 className="w-5 h-5 text-emerald-600" />
  };

  return (
    <section id="why-choose-us" className="py-24 bg-gradient-to-b from-[#f3f0ff] via-[#eae6fc] to-[#f3f0ff] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <SectionHeader
          badge="The Rivayat Difference"
          title="Why Discerning Couples Choose Our Atelier"
          subtitle="We blend royal Indian heritage aesthetic sensibilities with modern digital design, delivering an heirloom-grade experience on every screen."
        />

        {/* 8 Feature Cards Grid with Staggered Scroll Motion */}
        <AnimatedContent
          distance={50}
          stagger={0.07}
          duration={0.75}
          ease="power3.out"
          threshold={0.08}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={item.id}
              className="group relative bg-white/90 rounded-2xl p-6 sm:p-7 border border-blush-200 shadow-xs hover:shadow-xl transition-all duration-500 flex flex-col justify-between hover:-translate-y-1.5"
            >
              {/* Decorative Corner Accent on Hover */}
              <div className="absolute top-2.5 right-2.5 opacity-0 group-hover:opacity-70 transition-opacity">
                <DecorativeCorner className="w-4 h-4 text-gold" />
              </div>

              <div>
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-ivory-50 border border-blush-200 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-gold transition-all duration-300">
                  {iconMap[item.icon] || <Sparkles className="w-5 h-5 text-gold" />}
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl sm:text-2xl text-charcoal font-normal mb-2.5">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="pt-4 mt-4 border-t border-blush-100/60 flex items-center justify-between text-[11px] text-charcoal-muted">
                <span className="font-serif italic text-blush-700">Standard Guarantee</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              </div>
            </div>
          ))}
        </AnimatedContent>

        {/* Feature Comparison Box: Traditional Printed vs OctoWeds Digital */}
        <AnimatedContent distance={40} duration={0.75} threshold={0.12}>
          <div className="mt-20 bg-ivory-50 rounded-2xl border border-gold/40 p-8 sm:p-10 shadow-sm max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl sm:text-3xl text-charcoal">
              Modern Elegance Meets Eco-Conscious Joy
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-muted max-w-xl mx-auto mt-1 font-light">
              Compare why thousands of couples are replacing expensive, wasteful paper printing with interactive digital suites.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-blush-100/40 border border-blush-200 space-y-2.5">
              <span className="text-xs font-semibold uppercase tracking-wider text-charcoal-muted block">
                Traditional Paper Printing
              </span>
              <ul className="text-xs text-charcoal-muted space-y-2">
                <li className="flex items-center gap-2">✕ ₹40,000 to ₹1,50,000+ for 200 boxes</li>
                <li className="flex items-center gap-2">✕ Expensive international postal courier delay</li>
                <li className="flex items-center gap-2">✕ Typo reprint delays of 2-3 weeks</li>
                <li className="flex items-center gap-2">✕ No clickable GPS map or calendar link</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-ivory-100 border border-gold shadow-xs space-y-2.5">
              <span className="text-xs font-semibold uppercase tracking-wider text-gold-deep block flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-gold" />
                Rivayat Digital Atelier
              </span>
              <ul className="text-xs text-charcoal-soft space-y-2 font-medium">
                <li className="flex items-center gap-2 text-charcoal">✓ From only ₹2,499 ($32) for unlimited guests</li>
                <li className="flex items-center gap-2 text-charcoal">✓ Delivered within 24 to 48 hours globally</li>
                <li className="flex items-center gap-2 text-charcoal">✓ Instant typo corrections & revisions</li>
                <li className="flex items-center gap-2 text-charcoal">✓ Clickable Google Maps, Spotify song & RSVP</li>
              </ul>
            </div>
          </div>
          </div>
        </AnimatedContent>

      </div>
    </section>
  );
}
