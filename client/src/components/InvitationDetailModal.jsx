import React, { useState } from 'react';
import { X, Check, Sparkles, MessageCircle, Heart, Share2, Calendar, MapPin, Clock, ArrowRight } from './icons';
import { BRAND_INFO } from '../data/weddingData';
import WaxSeal from './svg/WaxSeal';
import { DecorativeCorner } from './svg/WeddingMotifs';

export default function InvitationDetailModal({ design, onClose, onCustomize }) {
  const [selectedColor, setSelectedColor] = useState(0);
  const [isCopied, setIsCopied] = useState(false);

  if (!design) return null;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${design.title} | Rivayat Wedding Invitations`,
        text: `Take a look at this stunning wedding invitation design: ${design.title}`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-charcoal/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative bg-ivory-100 w-full max-w-4xl rounded-2xl shadow-2xl border border-blush-300 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-ivory-100/80 hover:bg-ivory-100 text-charcoal border border-blush-200 transition-colors shadow-sm"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[90vh] overflow-y-auto">
          
          {/* Left Column: Visual Card Mockup & Showcase */}
          <div className="md:col-span-6 bg-gradient-to-b from-[#FDF8F3] to-[#F8EFF3] p-6 sm:p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-blush-200 relative">
            
            {/* Top Badges */}
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 rounded-full text-[11px] uppercase tracking-wider font-semibold bg-white/90 text-charcoal border border-blush-200 shadow-xs">
                {design.badge}
              </span>
              <span className="text-xs font-serif italic text-charcoal-muted">
                {design.category} Collection
              </span>
            </div>

            {/* Realistic Card Preview Frame */}
            <div className="relative mx-auto my-4 max-w-[280px] sm:max-w-[310px] bg-ivory-50 rounded-xl p-5 border border-gold/50 shadow-xl text-center">
              <DecorativeCorner className="absolute top-2 left-2 w-5 h-5 text-gold/60" />
              <div className="absolute top-2 right-2 scale-x-[-1]">
                <DecorativeCorner className="w-5 h-5 text-gold/60" />
              </div>

              {/* Shubh Vivah Verse */}
              <p className="text-[10px] font-serif tracking-[0.25em] text-gold uppercase mb-2">
                ॥ ॐ श्री गणेशाय नमः ॥
              </p>

              {/* Couple Name Sample */}
              <div className="my-3 py-2 border-y border-blush-200">
                <h4 className="font-serif text-2xl text-charcoal font-normal">
                  {design.coupleSample.split('&')[0]}
                </h4>
                <span className="font-script text-2xl text-gold block -my-1">&</span>
                <h4 className="font-serif text-2xl text-blush-700 font-normal">
                  {design.coupleSample.split('&')[1]}
                </h4>
              </div>

              {/* Event Sample Details */}
              <div className="space-y-1 text-xs text-charcoal-muted my-3">
                <p className="font-medium text-charcoal flex items-center justify-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-gold" />
                  {design.dateSample}
                </p>
                <p className="flex items-center justify-center gap-1 text-[11px]">
                  <MapPin className="w-3.5 h-3.5 text-blush-500" />
                  {design.venueSample}
                </p>
              </div>

              {/* Wax Seal Stamp */}
              <div className="mt-4 flex justify-center">
                <WaxSeal monogram="V" color="#865365" size={54} />
              </div>
            </div>

            {/* Color Palette Swatches */}
            <div className="pt-4 border-t border-blush-200/80 flex items-center justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-wider text-charcoal-muted font-medium mb-1">
                  Palette Tone
                </p>
                <div className="flex items-center gap-2">
                  {design.palette.map((hex, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedColor(i)}
                      className={`w-6 h-6 rounded-full border border-black/10 shadow-xs transition-transform ${
                        selectedColor === i ? 'ring-2 ring-gold scale-110' : ''
                      }`}
                      style={{ backgroundColor: hex }}
                      title={hex}
                    />
                  ))}
                </div>
              </div>

              <button
                onClick={handleShare}
                className="inline-flex items-center gap-1.5 text-xs text-charcoal-soft hover:text-blush-700 transition-colors"
              >
                <Share2 className="w-4 h-4 text-gold" />
                <span>{isCopied ? 'Link Copied!' : 'Share Design'}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Specifications, Inclusions & CTAs */}
          <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-gold mb-1">
                <span>★ {design.rating}</span>
                <span className="text-charcoal-muted">({design.reviewsCount} reviews)</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-charcoal mb-2">
                {design.title}
              </h3>

              <div className="inline-block px-3 py-1 rounded-md bg-blush-100/60 border border-blush-200 text-blush-900 font-serif text-sm font-medium mb-4">
                {design.priceQuote}
              </div>

              <p className="text-xs sm:text-sm text-charcoal-muted font-light leading-relaxed mb-5">
                {design.description}
              </p>

              {/* Key Specs */}
              <div className="grid grid-cols-2 gap-3 p-3.5 bg-ivory-50 rounded-xl border border-blush-200 text-xs mb-5">
                <div>
                  <span className="text-charcoal-muted block text-[10px] uppercase tracking-wider">Format</span>
                  <span className="font-medium text-charcoal">{design.dimensions}</span>
                </div>
                <div>
                  <span className="text-charcoal-muted block text-[10px] uppercase tracking-wider">Turnaround</span>
                  <span className="font-medium text-charcoal flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-gold" />
                    {design.leadTime}
                  </span>
                </div>
              </div>

              {/* Events Included */}
              <div className="mb-5">
                <h5 className="text-[11px] uppercase tracking-wider text-charcoal font-semibold mb-2">
                  Matching Ceremony Cards
                </h5>
                <div className="flex flex-wrap gap-2">
                  {design.eventsIncluded.map((event, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-full bg-blush-50 border border-blush-200 text-charcoal text-[11px] font-medium"
                    >
                      {event}
                    </span>
                  ))}
                </div>
              </div>

              {/* Design Features checklist */}
              <div>
                <h5 className="text-[11px] uppercase tracking-wider text-charcoal font-semibold mb-2">
                  What's Included
                </h5>
                <ul className="space-y-1.5 text-xs text-charcoal-soft">
                  {design.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2.5 pt-4 border-t border-blush-200">
              <button
                onClick={() => {
                  onClose();
                  onCustomize(design);
                }}
                className="w-full py-3.5 rounded-full bg-charcoal text-ivory-100 text-xs tracking-widest uppercase font-semibold hover:bg-blush-700 transition-colors shadow-md flex items-center justify-center gap-2 group"
              >
                <span>Customize This Design</span>
                <Sparkles className="w-4 h-4 text-gold group-hover:rotate-12 transition-transform" />
              </button>

              <a
                href={`https://wa.me/${BRAND_INFO.contact.whatsappClean}?text=Hi%20Rivayat!%20I'm%20interested%20in%20customizing%20${encodeURIComponent(design.title)}%20for%20our%20wedding.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-full border border-emerald-500/40 text-emerald-800 text-xs tracking-wider uppercase font-medium flex items-center justify-center gap-2 bg-emerald-50/50 hover:bg-emerald-50 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                Enquire via WhatsApp
              </a>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
