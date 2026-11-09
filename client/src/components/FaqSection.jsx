import React, { useState } from 'react';
import { Plus, Minus, Sparkles, HelpCircle } from './icons';
import { FAQS } from '../data/weddingData';
import SectionHeader from './SectionHeader';
import AnimatedContent from './AnimatedContent';

export default function FaqSection({ onOpenEnquiry }) {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-[#f3f0ff] via-[#eae6fc] to-[#f3f0ff] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badge="Curated Answers"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about commissioning, customizing, and broadcasting your bespoke e-wedding invitations."
        />

        {/* Accordion List with Staggered Motion */}
        <AnimatedContent
          distance={40}
          stagger={0.06}
          duration={0.7}
          ease="power3.out"
          threshold={0.08}
          className="space-y-4"
        >
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`rounded-2xl transition-all duration-300 border ${
                  isOpen
                    ? 'bg-white border-gold/60 shadow-md ring-1 ring-gold/20'
                    : 'bg-white/70 hover:bg-white border-blush-200 shadow-xs'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg sm:text-xl text-charcoal font-medium">
                    {faq.q}
                  </span>
                  <div
                    className={`p-2 rounded-full transition-transform duration-300 flex-shrink-0 ${
                      isOpen
                        ? 'bg-charcoal text-ivory-100 rotate-180'
                        : 'bg-blush-100 text-charcoal hover:bg-blush-200'
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4 text-gold-deep" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-1 border-t border-blush-100/60 animate-fadeIn">
                    <p className="font-sans text-xs sm:text-sm text-charcoal-muted font-light leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </AnimatedContent>

        {/* Still Have Questions CTA */}
        <AnimatedContent distance={30} duration={0.65} threshold={0.15}>
          <div className="mt-14 p-6 sm:p-8 bg-ivory-50 rounded-2xl border border-blush-300 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h4 className="font-serif text-xl text-charcoal">
                Have a question not listed here?
              </h4>
              <p className="text-xs text-charcoal-muted">
                Our wedding stationery concierges are available via WhatsApp to answer anytime.
              </p>
            </div>

            <button
              onClick={() => onOpenEnquiry('Direct FAQ Inquiry')}
              className="px-6 py-2.5 rounded-full bg-charcoal text-ivory-100 text-xs tracking-wider uppercase font-semibold hover:bg-blush-700 transition-colors shadow-xs whitespace-nowrap"
            >
              Ask a Concierge
            </button>
          </div>
        </AnimatedContent>

      </div>
    </section>
  );
}
