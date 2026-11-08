import React, { useState } from 'react';
import { Plus, Minus, Sparkles, HelpCircle } from './icons';
import { FAQS } from '../data/weddingData';

export default function FaqSection({ onOpenEnquiry }) {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-[#f3f0ff] via-[#eae6fc] to-[#f3f0ff] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 border border-[#c8c1ee] text-[#0b0b10] text-xs tracking-[0.2em] uppercase font-medium">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            Curated Answers
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal font-normal tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="font-sans text-base sm:text-lg text-charcoal-muted font-light leading-relaxed">
            Everything you need to know about commissioning, customizing, and broadcasting your bespoke e-wedding invitations.
          </p>
          <div className="w-24 h-[1px] bg-gold mx-auto mt-4" />
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
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
        </div>

        {/* Still Have Questions CTA */}
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

      </div>
    </section>
  );
}
