import React, { useState } from 'react';
import { MessageCircle, Sparkles, X } from './icons';
import { BRAND_INFO } from '../data/weddingData';

export default function FloatingConcierge({ onOpenEnquiry, isVisible = true }) {
  const [showTooltip, setShowTooltip] = useState(true);

  if (!isVisible) return null;

  return (
    <aside aria-label="Quick Concierge Actions" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5 transition-all duration-500 animate-fadeIn">
      {/* Friendly Tooltip Pill */}
      {showTooltip && (
        <div className="bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-xl border border-blush-300 max-w-xs animate-fadeIn flex items-start gap-2.5">
          <div className="p-1.5 rounded-full bg-blush-100 text-gold-deep flex-shrink-0">
            <Sparkles className="w-4 h-4 text-gold" />
          </div>
          <div className="text-xs">
            <p className="font-semibold text-charcoal">Planning a wedding?</p>
            <p className="text-charcoal-muted font-light text-[11px] leading-tight mt-0.5">
              Chat with our design director on WhatsApp for instant proofs & ideas.
            </p>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-charcoal-muted hover:text-charcoal p-0.5"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Buttons */}
      <div className="flex items-center gap-2">
        {/* Create Invitation Pill */}
        <button
          onClick={() => onOpenEnquiry()}
          className="hidden sm:inline-flex items-center gap-2 px-4 py-3 rounded-full bg-charcoal text-ivory-100 text-xs uppercase tracking-wider font-semibold shadow-xl hover:bg-blush-700 transition-all duration-300 border border-gold/40 hover:scale-105"
        >
          <Sparkles className="w-3.5 h-3.5 text-gold animate-pulse" />
          <span>Create Card</span>
        </button>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${BRAND_INFO.contact.whatsappClean}?text=Hello%20Rivayat%20Studio!%20I%20would%20like%20to%20inquire%20about%20a%20digital%20wedding%20invitation.`}
          target="_blank"
          rel="noopener noreferrer"
          title="Direct WhatsApp Concierge"
          className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 ring-4 ring-white/80"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-7 h-7" />
        </a>
      </div>
    </aside>
  );
}
