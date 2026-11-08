import React from 'react';
import { X, Send, CheckCheck, Sparkles, MapPin, Calendar, Heart, ExternalLink } from './icons';

export default function WhatsAppGuestSimulator({ isOpen, onClose, invitationData }) {
  if (!isOpen) return null;

  const {
    brideName = "Ananya",
    groomName = "Kabir",
    weddingDate = "2026-12-14",
    weddingVenue = "The Oberoi Udaivilas",
    weddingCity = "Udaipur, Rajasthan"
  } = invitationData || {};

  const formattedDate = new Date(weddingDate + 'T00:00:00').toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <div
      className="fixed inset-0 z-50 bg-charcoal/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-sm bg-[#ECE5DD] rounded-[40px] shadow-2xl border-4 border-charcoal overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Smartphone Speaker & Camera Notch */}
        <div className="bg-charcoal text-white pt-3 pb-2 px-6 flex items-center justify-between text-[11px] font-sans">
          <span>9:41</span>
          <div className="w-16 h-4 bg-charcoal-soft rounded-full mx-auto" />
          <div className="flex items-center gap-1">
            <span>5G</span>
            <span>100%</span>
          </div>
        </div>

        {/* WhatsApp App Header */}
        <div className="bg-[#075E54] text-white px-4 py-3 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
            <button onClick={onClose} className="text-white hover:text-blush-200">
              ←
            </button>
            <div className="w-9 h-9 rounded-full bg-blush-200 text-blush-900 font-serif font-bold flex items-center justify-center text-sm border border-gold">
              {brideName.charAt(0)}{groomName.charAt(0)}
            </div>
            <div>
              <h4 className="text-sm font-semibold leading-tight">
                {brideName} & {groomName}
              </h4>
              <p className="text-[10px] text-emerald-200">online</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1 rounded-full text-white/80 hover:text-white">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* WhatsApp Chat Canvas Background */}
        <div
          className="p-4 space-y-3 min-h-[440px] max-h-[500px] overflow-y-auto"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.4) 0%, transparent 80%)`
          }}
        >
          {/* Chat Date Stamp */}
          <div className="text-center">
            <span className="bg-[#D1E8E2] text-[#4A5E57] text-[10px] px-2.5 py-0.5 rounded-md font-sans uppercase tracking-wider">
              Today
            </span>
          </div>

          {/* Incoming Wedding Invitation Message Bubble */}
          <div className="bg-white rounded-2xl rounded-tl-none p-3 shadow-sm border border-black/5 max-w-[90%] space-y-2">
            
            {/* Embedded Rich Card Preview */}
            <div className="rounded-xl overflow-hidden border border-blush-200 bg-[#FFFDF8]">
              <div className="relative h-32 bg-gradient-to-r from-blush-100 via-ivory-100 to-blush-100 flex items-center justify-center p-3 text-center border-b border-blush-200">
                <div>
                  <span className="text-[9px] font-serif tracking-[0.2em] text-gold-deep block uppercase">
                    ॥ शुभ विवाह ॥
                  </span>
                  <h5 className="font-serif text-xl text-charcoal font-normal">
                    {brideName} & {groomName}
                  </h5>
                  <p className="text-[10px] text-blush-800 font-serif italic mt-0.5">
                    Together with their families
                  </p>
                </div>
              </div>

              <div className="p-2.5 bg-ivory-50 space-y-1 text-left">
                <span className="text-[9px] uppercase tracking-wider text-charcoal-muted block font-sans">
                  rivayatinvitations.com/vows
                </span>
                <p className="font-serif text-xs font-semibold text-charcoal leading-snug">
                  You are warmly invited to celebrate our Wedding
                </p>
                <p className="text-[10px] text-charcoal-muted flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-gold" /> {formattedDate}
                </p>
                <p className="text-[10px] text-charcoal-muted flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-blush-500" /> {weddingVenue}, {weddingCity}
                </p>
              </div>
            </div>

            {/* Accompanying Message Caption */}
            <p className="text-xs text-charcoal font-sans leading-relaxed">
              Dearest Family & Friends, <br />
              With the blessings of our ancestors, we invite you to be part of our most cherished milestone. Tap the link above to view our complete invitation and itinerary!
            </p>

            <div className="flex items-center justify-end gap-1 text-[10px] text-charcoal-muted pt-1">
              <span>9:42 AM</span>
              <CheckCheck className="w-3.5 h-3.5 text-[#34B7F1]" />
            </div>
          </div>

          {/* Quick RSVP Button simulated inside chat */}
          <div className="text-center pt-2">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#128C7E] text-white text-xs font-medium shadow-md">
              <Sparkles className="w-3 h-3" />
              Clickable on All Phones
            </span>
          </div>
        </div>

        {/* WhatsApp Input Bar */}
        <div className="bg-[#F0F0F0] px-3 py-2.5 flex items-center gap-2 border-t border-black/10">
          <div className="flex-1 bg-white rounded-full px-3 py-1.5 text-xs text-charcoal-muted shadow-xs">
            Type your blessings...
          </div>
          <div className="w-8 h-8 rounded-full bg-[#128C7E] text-white flex items-center justify-center shadow-xs">
            <Send className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </div>
  );
}

