import React, { useState } from 'react';
import { Check, Sparkles, HelpCircle, ArrowRight } from './icons';
import { PRICING_PACKAGES } from '../data/weddingData';
import { DecorativeCorner } from './svg/WeddingMotifs';
import SectionHeader from './SectionHeader';

export default function PricingSection({ onSelectPackage }) {
  const [currency, setCurrency] = useState('INR'); // 'INR' or 'USD'

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-[#f3f0ff] via-[#eae6fc] to-[#f3f0ff] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badge="Transparent Atelier Pricing"
          title="Curated Packages for Every Celebration"
          subtitle="All suites include unlimited guest sharing, mobile-optimized formats, and dedicated review rounds."
          showDivider={false}
        />

        <div className="text-center -mt-8 mb-16">
          {/* Currency Toggle */}
          <div className="inline-flex items-center p-1 rounded-full bg-white/90 border border-[#c8c1ee] mt-4">
            <button
              onClick={() => setCurrency('INR')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                currency === 'INR'
                  ? 'bg-charcoal text-ivory-100 shadow-xs'
                  : 'text-charcoal-muted hover:text-charcoal'
              }`}
            >
              INR (₹) India
            </button>
            <button
              onClick={() => setCurrency('USD')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                currency === 'USD'
                  ? 'bg-charcoal text-ivory-100 shadow-xs'
                  : 'text-charcoal-muted hover:text-charcoal'
              }`}
            >
              USD ($) International
            </button>
          </div>
        </div>

        {/* 3 Pricing Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 items-stretch">
          {PRICING_PACKAGES.map((pkg) => {
            const displayPrice = currency === 'INR' ? pkg.priceINR : pkg.priceUSD;
            const isPopular = pkg.popular;

            return (
              <div
                key={pkg.id}
                className={`relative rounded-3xl p-8 sm:p-9 flex flex-col justify-between transition-all duration-500 ${
                  isPopular
                    ? 'bg-gradient-to-b from-[#FFFDF9] to-[#FAF2EE] border-2 border-gold shadow-2xl scale-102 lg:-translate-y-2'
                    : 'bg-white border border-blush-200 shadow-xs hover:shadow-xl'
                }`}
              >
                {/* Popular Highlight Badge */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full text-xs uppercase tracking-widest font-semibold bg-charcoal text-ivory-100 shadow-md border border-gold flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-gold" />
                      {pkg.badge}
                    </span>
                  </div>
                )}

                {/* Decorative Corners for Luxury Tier */}
                {pkg.id === 'luxury' && (
                  <>
                    <DecorativeCorner className="absolute top-3 left-3 w-6 h-6 text-gold/60" />
                    <div className="absolute top-3 right-3 scale-x-[-1]">
                      <DecorativeCorner className="w-6 h-6 text-gold/60" />
                    </div>
                  </>
                )}

                {/* Package Top Details */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs uppercase tracking-widest text-charcoal-muted font-medium">
                      {pkg.badge}
                    </span>
                    <span className="text-[11px] font-sans px-2.5 py-0.5 rounded-full bg-blush-100 text-blush-900 font-medium">
                      {pkg.delivery}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl text-charcoal font-normal mb-2">
                    {pkg.name}
                  </h3>

                  <p className="text-xs text-charcoal-muted min-h-[36px] font-light leading-relaxed mb-6">
                    {pkg.tagline}
                  </p>

                  {/* Price Tag with Configurable note */}
                  <div className="py-5 border-y border-blush-200/80 mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="font-serif text-4xl sm:text-5xl font-medium text-charcoal tracking-tight">
                        {displayPrice}
                      </span>
                      <span className="text-xs text-charcoal-muted font-sans">
                        / complete suite
                      </span>
                    </div>
                    <p className="text-[11px] text-charcoal-muted mt-1 italic font-serif">
                      Configurable tier • One-time investment for unlimited sharing
                    </p>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 mb-8">
                    <span className="text-xs font-semibold uppercase tracking-wider text-charcoal-soft block mb-3">
                      Package Inclusions:
                    </span>
                    <ul className="space-y-2.5">
                      {pkg.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-charcoal-soft">
                          <div className="p-0.5 rounded-full bg-blush-100 text-gold-deep mt-0.5 flex-shrink-0">
                            <Check className="w-3 h-3 text-gold-deep" />
                          </div>
                          <span className="leading-relaxed">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <div className="pt-4 border-t border-blush-100">
                  <button
                    onClick={() => onSelectPackage(pkg)}
                    className={`w-full py-3.5 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300 shadow-sm flex items-center justify-center gap-2 group ${
                      isPopular
                        ? 'bg-charcoal text-ivory-100 hover:bg-blush-700 shadow-md'
                        : 'bg-ivory-50 hover:bg-ivory-100 text-charcoal border border-blush-300 hover:border-gold'
                    }`}
                  >
                    <span>{pkg.buttonText}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-gold group-hover:translate-x-1 transition-transform" />
                  </button>
                  <p className="text-center text-[10px] text-charcoal-muted mt-2">
                    Direct WhatsApp draft consultation included
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pricing Guarantee Note */}
        <div className="mt-14 text-center">
          <p className="text-xs text-charcoal-muted max-w-xl mx-auto">
            Need custom physical prints, wedding websites with automated RSVP forms, or multilingual guest variants? 
            <button
              onClick={() => onSelectPackage({ name: 'Custom Enterprise Suite' })}
              className="text-blush-700 underline font-medium ml-1 hover:text-charcoal"
            >
              Talk to our Creative Director
            </button>
          </p>
        </div>

      </div>
    </section>
  );
}
