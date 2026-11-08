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
        <div className="bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-xl border border-[#c8c1ee] max-w-xs animate-fadeIn flex items-start gap-2.5">
          <div className="p-1.5 rounded-full bg-[#ede9fe] text-gold-deep flex-shrink-0">
            <Sparkles className="w-4 h-4 text-[#D8B879]" />
          </div>
          <div className="text-xs">
            <p className="font-semibold text-[#0b0b10]">Planning your celebration?</p>
            <p className="text-[#4a4660] font-light text-[11px] leading-tight mt-0.5">
              Click Book Now to customize your design type and upload your couple photos!
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
        {/* Book Now Invitation Pill */}
        <button
          onClick={() => onOpenEnquiry()}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#0b0b10] text-[#f3f0ff] hover:bg-[#be185d] text-xs uppercase tracking-wider font-semibold shadow-2xl transition-all duration-300 border border-[#D8B879]/60 hover:scale-105 active:scale-95 cursor-pointer ring-2 ring-white/60"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#F7E99A] animate-pulse" />
          <span>Book Now</span>
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
