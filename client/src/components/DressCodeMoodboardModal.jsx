import React from 'react';
import { X, Sparkles, Check } from './icons';

export default function DressCodeMoodboardModal({ isOpen, onClose, activeEvent = "Vivah" }) {
  if (!isOpen) return null;

  const dressCodes = {
    vivah: {
      title: "Shubh Vivah (Wedding Pheras)",
      time: "Morning / Sunset Auspicious Muhurtham",
      paletteName: "Regal Pastels, Blush Rose & Gold",
      colors: ["#F8DDE5", "#EBC0CE", "#D8B879", "#FFFDF8", "#865365"],
      women: "Silk Banarasi Sarees, Embroidered Pastel Lehengas, Heritage Gold Jewelry",
      men: "Ivory or Blush Silk Sherwani, Churidar, Embroidered Safa (Turban)",
      note: "Traditional Indian attire is warmly encouraged for the sacred ceremony."
    },
    sangeet: {
      title: "Sangeet & Musical Soiree",
      time: "8:00 PM Onwards",
      paletteName: "Midnight Jewel Tones & Glittering Gold",
      colors: ["#2C2225", "#865365", "#D8B879", "#C8A252", "#FAF5EA"],
      women: "Glittering Sequin Lehengas, Indo-Western Gowns, Statement Jewelry",
      men: "Bandhgala Suits, Modern Tuxedos, Embroidered Silk Jackets",
      note: "Wear comfortable footwear to dance the night away!"
    },
    haldi: {
      title: "Haldi & Phoolon ki Holi",
      time: "10:30 AM Morning",
      paletteName: "Turmeric Yellow, Mustard & Marigold Orange",
      colors: ["#F7E99A", "#FCF5CC", "#D8B879", "#FFFDF8", "#E2CE66"],
      women: "Yellow Chiffon / Georgette Sarees, Floral Jewelry, Light Kurtas",
      men: "Yellow Linen or Cotton Kurta Pajama, Nehru Jacket",
      note: "Expect splashes of organic turmeric paste and fragrant rose petals!"
    },
    mehendi: {
      title: "Mehendi Ceremony",
      time: "4:00 PM Afternoon",
      paletteName: "Sage Green, Olive & Botanical Pastels",
      colors: ["#D9E8D3", "#B0CCA7", "#4E6A4B", "#FFFDF8", "#F8DDE5"],
      women: "Green Shararas, Floral Anarkalis, Bohemian Jhumkas",
      men: "Sage or Mint Green Pathani Suits, Floral Printed Kurtas",
      note: "Short sleeves recommended for convenient bridal henna application."
    },
    reception: {
      title: "Grand Wedding Reception",
      time: "7:30 PM Onwards",
      paletteName: "Black Tie, Champagne & Royal Wine",
      colors: ["#2C2225", "#43212E", "#D8B879", "#FFFDF8", "#865365"],
      women: "Couture Gowns, Contemporary Pre-Draped Sarees, Diamond Accents",
      men: "Black Tie Tuxedo, Formal Dark Suits, Classic Bandhgalas",
      note: "An evening of fine champagne toasts, live jazz, and grand dinner."
    }
  };

  const currentCode = dressCodes[activeEvent.toLowerCase()] || dressCodes.vivah;

  return (
    <div
      className="fixed inset-0 z-50 bg-charcoal/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative bg-ivory-100 w-full max-w-lg rounded-3xl p-6 sm:p-8 border border-blush-300 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-ivory-50 text-charcoal-muted hover:text-charcoal border border-blush-200"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="space-y-6">
          <div className="text-center space-y-1">
            <span className="text-[10px] uppercase tracking-[0.25em] text-gold-deep font-sans font-medium">
              Guest Attire & Style Guide
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-charcoal">
              {currentCode.title}
            </h3>
            <p className="text-xs text-charcoal-muted">
              {currentCode.time}
            </p>
          </div>

          {/* Color Palette Swatches */}
          <div className="p-4 rounded-2xl bg-white border border-blush-200 space-y-2">
            <span className="text-[11px] uppercase tracking-wider font-semibold text-charcoal-muted block">
              Recommended Color Palette: <span className="text-charcoal font-medium">{currentCode.paletteName}</span>
            </span>
            <div className="flex items-center gap-2 pt-1">
              {currentCode.colors.map((hex, i) => (
                <div key={i} className="flex-1 h-9 rounded-xl border border-black/10 shadow-xs flex items-center justify-center" style={{ backgroundColor: hex }}>
                  <span className="text-[9px] font-mono text-black/60 bg-white/70 px-1 rounded opacity-0 hover:opacity-100 transition-opacity">
                    {hex}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Attire Breakdown */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-2xl bg-blush-50 border border-blush-200 space-y-1.5">
              <span className="font-serif text-sm font-semibold text-blush-900 block">
                For Women
              </span>
              <p className="text-charcoal-muted leading-relaxed font-light">
                {currentCode.women}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-ivory-50 border border-gold/40 space-y-1.5">
              <span className="font-serif text-sm font-semibold text-charcoal block">
                For Men
              </span>
              <p className="text-charcoal-muted leading-relaxed font-light">
                {currentCode.men}
              </p>
            </div>
          </div>

          {/* Etiquette Note */}
          <div className="p-3.5 rounded-xl bg-ivory-200/60 border border-blush-200 text-xs text-charcoal-soft flex items-start gap-2">
            <Sparkles className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
            <span>{currentCode.note}</span>
          </div>

          <div className="pt-2 text-center">
            <button
              onClick={onClose}
              className="px-8 py-2.5 rounded-full bg-charcoal text-ivory-100 text-xs uppercase tracking-widest font-semibold hover:bg-blush-700 transition-colors shadow-sm"
            >
              Got It, Thank You
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

