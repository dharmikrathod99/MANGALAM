import React, { useState, useEffect } from 'react';
import { Sparkles, Calendar, MapPin, Music, Volume2, VolumeX, Share2, Check, RefreshCw, Heart, ChevronDown, Download } from './icons';
import WaxSeal from './svg/WaxSeal';
import { DecorativeCorner, WeddingRings } from './svg/WeddingMotifs';
import MandalaPattern from './svg/MandalaPattern';
import { BRAND_INFO } from '../data/weddingData';
import WhatsAppGuestSimulator from './WhatsAppGuestSimulator';
import GuestRsvpDemoModal from './GuestRsvpDemoModal';
import DressCodeMoodboardModal from './DressCodeMoodboardModal';

export default function InteractiveInvitationStudio({ initialDesign, onOpenEnquiryWithData }) {
  // Live Editable Invitation State
  const [brideName, setBrideName] = useState('Ananya Sharma');
  const [groomName, setGroomName] = useState('Kabir Singhania');
  const [weddingDate, setWeddingDate] = useState('2026-12-14');
  const [weddingVenue, setWeddingVenue] = useState('The Oberoi Udaivilas');
  const [weddingCity, setWeddingCity] = useState('Udaipur, Rajasthan');
  const [weddingVerse, setWeddingVerse] = useState('॥ शुभ विवाह ॥');
  const [eventType, setEventType] = useState('Pheras & Royal Reception');
  const [activeTheme, setActiveTheme] = useState('blush'); // 'blush', 'gold', 'sage', 'wine', 'haldi'
  const [isOpen, setIsOpen] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [audioCtx, setAudioCtx] = useState(null);
  const [showWhatsAppSim, setShowWhatsAppSim] = useState(false);
  const [showRsvpDemo, setShowRsvpDemo] = useState(false);
  const [activeCardEvent, setActiveCardEvent] = useState('vivah');
  const [showDressCodeModal, setShowDressCodeModal] = useState(false);

  // Sync initial design if passed
  useEffect(() => {
    if (initialDesign) {
      if (initialDesign.coupleSample) {
        const parts = initialDesign.coupleSample.split('&');
        if (parts.length === 2) {
          setBrideName(parts[0].trim());
          setGroomName(parts[1].trim());
        }
      }
      if (initialDesign.venueSample) {
        const parts = initialDesign.venueSample.split(',');
        setWeddingVenue(parts[0].trim());
        if (parts[1]) setWeddingCity(parts.slice(1).join(',').trim());
      }
      if (initialDesign.categoryKey === 'traditional' || initialDesign.categoryKey === 'royal') {
        setActiveTheme('gold');
      } else if (initialDesign.categoryKey === 'haldi') {
        setActiveTheme('haldi');
      } else {
        setActiveTheme('blush');
      }
      // Auto open when a specific design is selected
      setIsOpen(true);
    }
  }, [initialDesign]);

  // Gentle acoustic sitar / chime harmonic synth using Web Audio API
  const playChimeSequence = () => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = audioCtx || new AudioCtx();
      if (!audioCtx) setAudioCtx(ctx);

      const notes = [
        { freq: 440.00, time: 0 },    // A4
        { freq: 554.37, time: 0.18 }, // C#5
        { freq: 659.25, time: 0.36 }, // E5
        { freq: 880.00, time: 0.54 }, // A5
        { freq: 1108.73, time: 0.76 } // C#6
      ];

      notes.forEach(({ freq, time }) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + time);
        
        gain.gain.setValueAtTime(0.001, ctx.currentTime + time);
        gain.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + time + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + time + 1.4);
        
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + time);
        osc.stop(ctx.currentTime + time + 1.5);
      });
      setIsAudioPlaying(true);
      setTimeout(() => setIsAudioPlaying(false), 2400);
    } catch (e) {
      console.log('Audio autoplay prevented');
    }
  };

  const handleEnvelopeClick = () => {
    const next = !isOpen;
    setIsOpen(next);
    if (next) {
      playChimeSequence();
    }
  };

  // Themes configurations
  const themeStyles = {
    blush: {
      name: "Blush Rose & Ivory",
      cardBg: "bg-[#FFFDF9]",
      envelopeOuter: "from-[#FDF7F9] to-[#F8DDE5]",
      accentText: "text-blush-700",
      goldBorder: "border-[#D8B879]",
      waxColor: "#865365",
      badgeBg: "bg-blush-100",
      tagText: "text-blush-900"
    },
    gold: {
      name: "Royal Champagne Gold",
      cardBg: "bg-[#FAF6EC]",
      envelopeOuter: "from-[#F8F2E2] to-[#E8D4A8]",
      accentText: "text-[#865365]",
      goldBorder: "border-[#C8A252]",
      waxColor: "#632D3F",
      badgeBg: "bg-[#F7E99A]/40",
      tagText: "text-[#43212E]"
    },
    sage: {
      name: "Sage & Jasmine Garden",
      cardBg: "bg-[#FCFDFB]",
      envelopeOuter: "from-[#F2F8F0] to-[#D9E8D3]",
      accentText: "text-[#4E6A4B]",
      goldBorder: "border-[#B0CCA7]",
      waxColor: "#4E6A4B",
      badgeBg: "bg-sage/40",
      tagText: "text-[#2F5233]"
    },
    wine: {
      name: "Deep Velvet Rose",
      cardBg: "bg-[#FDF9FA]",
      envelopeOuter: "from-[#F5E6EB] to-[#EBC0CE]",
      accentText: "text-[#643949]",
      goldBorder: "border-[#D8B879]",
      waxColor: "#43212E",
      badgeBg: "bg-blush-200",
      tagText: "text-[#43212E]"
    },
    haldi: {
      name: "Marigold Sunshine Haldi",
      cardBg: "bg-[#FFFEF5]",
      envelopeOuter: "from-[#FFFCE6] to-[#F7E99A]",
      accentText: "text-[#7A4B10]",
      goldBorder: "border-[#D8B879]",
      waxColor: "#865365",
      badgeBg: "bg-lemon/50",
      tagText: "text-[#7A4B10]"
    }
  };

  const currentTheme = themeStyles[activeTheme] || themeStyles.blush;

  const eventCards = {
    vivah: {
      key: 'vivah',
      badge: '🌸 Shubh Vivah',
      name: "The Wedding Ceremony & Pheras",
      verse: weddingVerse || "॥ शुभ विवाह ॥",
      timing: "Auspicious Muhurtham: 10:30 AM",
      subtext: "Cordially invite you to witness our sacred vows & auspicious seven pheras",
      dressCode: "Pastel Silks & Regal Indian Attire",
      themeKey: "blush"
    },
    sangeet: {
      key: 'sangeet',
      badge: '🪘 Sangeet & Cocktails',
      name: "Sangeet & Musical Gala",
      verse: "✦ A CELEBRATION OF MUSIC & DANCE ✦",
      timing: "Evening Festivities: 7:30 PM Onwards",
      subtext: "Join us for an unforgettable night of folk beats, choreography & celebratory cocktails",
      dressCode: "Midnight Glamour & Sequin Lehengas",
      themeKey: "wine"
    },
    haldi: {
      key: 'haldi',
      badge: '🌼 Haldi Ceremony',
      name: "Haldi & Phoolon ki Holi",
      verse: "✿ AUSPICIOUS TURMERIC BLESSINGS ✿",
      timing: "Morning Rituals: 10:00 AM",
      subtext: "Bless the bride & groom with organic ubtan, fragrant rose petals & joyful dholak beats",
      dressCode: "Turmeric Yellow & Mustard Florals",
      themeKey: "haldi"
    },
    mehendi: {
      key: 'mehendi',
      badge: '🌿 Henna Soiree',
      name: "Mehendi Ceremony",
      verse: "❀ HENNA HEIRLOOMS & LAUGHTER ❀",
      timing: "Afternoon High Tea: 3:30 PM",
      subtext: "Adorn your hands with fragrant bridal henna patterns amidst ghungroo melodies",
      dressCode: "Sage Green & Bohemian Pastels",
      themeKey: "sage"
    },
    reception: {
      key: 'reception',
      badge: '🥂 Grand Reception',
      name: "The Royal Wedding Reception",
      verse: "✨ AN EVENING OF TOASTS & CELEBRATION ✨",
      timing: "Grand Banquet: 8:00 PM Onwards",
      subtext: "Raise a glass with the newlyweds at an evening of dinner, dancing & live symphony",
      dressCode: "Black Tie & Couture Formals",
      themeKey: "gold"
    }
  };

  const currentEventCard = eventCards[activeCardEvent] || eventCards.vivah;

  // Format date nicely
  const formattedDate = new Date(weddingDate + 'T00:00:00').toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const getMonogram = () => {
    const b = brideName.trim().charAt(0) || 'A';
    const g = groomName.trim().charAt(0) || 'K';
    return `${b}${g}`;
  };

  // Generate downloadable digital card proof PNG
  const handleDownloadProof = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 900;
    canvas.height = 1200;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Canvas Background
    ctx.fillStyle = '#FFFDF8';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Decorative outer gold border
    ctx.strokeStyle = '#D8B879';
    ctx.lineWidth = 4;
    ctx.strokeRect(36, 36, canvas.width - 72, canvas.height - 72);

    // Inner subtle rose border
    ctx.strokeStyle = '#EBC0CE';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(48, 48, canvas.width - 96, canvas.height - 96);

    // Header Shloka
    ctx.textAlign = 'center';
    ctx.fillStyle = '#865365';
    ctx.font = '600 24px Cormorant Garamond, serif';
    ctx.fillText(currentEventCard.verse || weddingVerse, canvas.width / 2, 120);

    // Event title
    ctx.fillStyle = '#0b0b10';
    ctx.font = '600 20px DM Sans, sans-serif';
    ctx.fillText((currentEventCard.name || eventType).toUpperCase(), canvas.width / 2, 175);

    // Invitation text
    ctx.fillStyle = '#6E6266';
    ctx.font = 'italic 20px Cormorant Garamond, serif';
    ctx.fillText('Cordially invite you to celebrate the joyous union of', canvas.width / 2, 240);

    // Bride Name
    ctx.fillStyle = '#2C2225';
    ctx.font = 'bold 52px Cormorant Garamond, serif';
    ctx.fillText(brideName || 'Bride', canvas.width / 2, 335);

    // Ampersand
    ctx.fillStyle = '#D8B879';
    ctx.font = 'italic 46px Playfair Display, serif';
    ctx.fillText('&', canvas.width / 2, 395);

    // Groom Name
    ctx.fillStyle = '#2C2225';
    ctx.font = 'bold 52px Cormorant Garamond, serif';
    ctx.fillText(groomName || 'Groom', canvas.width / 2, 465);

    // Subtext
    ctx.fillStyle = '#6E6266';
    ctx.font = '16px DM Sans, sans-serif';
    ctx.fillText(currentEventCard.subtext, canvas.width / 2, 530);

    // Divider Line
    ctx.strokeStyle = '#D8B879';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2 - 120, 570);
    ctx.lineTo(canvas.width / 2 + 120, 570);
    ctx.stroke();

    // Date
    ctx.fillStyle = '#865365';
    ctx.font = 'bold 22px DM Sans, sans-serif';
    ctx.fillText(formattedDate, canvas.width / 2, 620);

    // Timing
    ctx.fillStyle = '#4A3B40';
    ctx.font = '18px DM Sans, sans-serif';
    ctx.fillText(currentEventCard.timing, canvas.width / 2, 665);

    // Venue
    ctx.fillStyle = '#0b0b10';
    ctx.font = 'bold 24px Cormorant Garamond, serif';
    ctx.fillText(weddingVenue || 'The Grand Palace', canvas.width / 2, 740);

    // City
    ctx.fillStyle = '#6E6266';
    ctx.font = '18px DM Sans, sans-serif';
    ctx.fillText(weddingCity || 'Rajasthan, India', canvas.width / 2, 780);

    // Dress Code
    ctx.fillStyle = '#865365';
    ctx.font = 'italic 17px Cormorant Garamond, serif';
    ctx.fillText(`Attire: ${currentEventCard.dressCode}`, canvas.width / 2, 840);

    // Watermark/Brand Studio footer
    ctx.fillStyle = '#D8B879';
    ctx.font = '13px DM Sans, sans-serif';
    ctx.fillText('— RIVAYAT & CO. BESPOKE WEDDING INVITATIONS —', canvas.width / 2, 1140);

    // Convert to image & trigger download
    const link = document.createElement('a');
    link.download = `Rivayat-Invitation-Proof-${(brideName.split(' ')[0] || 'Bride')}-${(groomName.split(' ')[0] || 'Groom')}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  const handleProceedWithCustomization = () => {
    onOpenEnquiryWithData({
      brideName,
      groomName,
      weddingDate,
      weddingVenue,
      weddingCity,
      theme: currentTheme.name,
      eventType
    });
  };

  return (
    <section id="interactive-preview" className="py-24 bg-gradient-to-b from-[#f3f0ff] via-[#eae6fc] to-[#f3f0ff] relative overflow-hidden">
      
      {/* Decorative Background Mandalas */}
      <div className="absolute top-10 right-10 pointer-events-none opacity-20">
        <MandalaPattern className="w-80 h-80 text-gold" />
      </div>
      <div className="absolute bottom-10 left-10 pointer-events-none opacity-15">
        <MandalaPattern className="w-72 h-72 text-blush-400" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blush-100/90 border border-gold/40 text-charcoal text-xs tracking-[0.2em] uppercase font-medium shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-gold animate-pulse" />
            Live Invitation Studio
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal font-normal tracking-tight">
            Experience Your Unfolding Love Story
          </h2>
          <p className="font-sans text-base sm:text-lg text-charcoal-muted font-light leading-relaxed">
            Personalize names, dates, and wedding venues below. Click the wax seal to experience the real unboxing magic your guests will feel on their smartphones.
          </p>
        </div>

        {/* 2-Column Studio Interface: Customizer Controls + Live Interactive Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Live Customization Form Controls */}
          <div className="lg:col-span-5 bg-white/95 rounded-2xl p-6 sm:p-8 border border-blush-200 shadow-xl space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-blush-100">
              <div>
                <h3 className="font-serif text-xl text-charcoal font-medium">
                  Personalize Live Preview
                </h3>
                <p className="text-xs text-charcoal-muted">
                  Changes appear instantly on the invitation
                </p>
              </div>
              <button
                onClick={() => {
                  setBrideName('Ananya Sharma');
                  setGroomName('Kabir Singhania');
                  setWeddingDate('2026-12-14');
                  setWeddingVenue('The Oberoi Udaivilas');
                  setWeddingCity('Udaipur, Rajasthan');
                  setActiveTheme('blush');
                }}
                className="inline-flex items-center gap-1 text-[11px] text-charcoal-muted hover:text-blush-700 transition-colors"
                title="Reset to sample data"
              >
                <RefreshCw className="w-3 h-3 text-gold" />
                <span>Reset</span>
              </button>
            </div>

            {/* Couple Names Inputs */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-charcoal-soft mb-1.5">
                  Bride's Name
                </label>
                <input
                  type="text"
                  value={brideName}
                  onChange={(e) => setBrideName(e.target.value)}
                  placeholder="e.g. Ananya"
                  className="w-full px-3 py-2 rounded-lg border border-blush-200 text-xs sm:text-sm text-charcoal focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none"
                />
              </div>
              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-charcoal-soft mb-1.5">
                  Groom's Name
                </label>
                <input
                  type="text"
                  value={groomName}
                  onChange={(e) => setGroomName(e.target.value)}
                  placeholder="e.g. Kabir"
                  className="w-full px-3 py-2 rounded-lg border border-blush-200 text-xs sm:text-sm text-charcoal focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none"
                />
              </div>
            </div>

            {/* Date & Ceremony Type */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-charcoal-soft mb-1.5">
                  Wedding Date
                </label>
                <input
                  type="date"
                  value={weddingDate}
                  onChange={(e) => setWeddingDate(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-blush-200 text-xs sm:text-sm text-charcoal focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none"
                />
              </div>
              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-charcoal-soft mb-1.5">
                  Celebration Type
                </label>
                <select
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-blush-200 text-xs sm:text-sm text-charcoal focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none bg-white"
                >
                  <option value="Pheras & Royal Reception">Pheras & Reception</option>
                  <option value="3-Day Wedding Weekend">3-Day Wedding Weekend</option>
                  <option value="Sangeet & Cocktail Soiree">Sangeet & Cocktails</option>
                  <option value="Haldi & Mehendi Fiesta">Haldi & Mehendi</option>
                  <option value="Intimate Sunset Vows">Intimate Sunset Vows</option>
                </select>
              </div>
            </div>

            {/* Venue & City */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-charcoal-soft mb-1.5">
                  Palace / Venue
                </label>
                <input
                  type="text"
                  value={weddingVenue}
                  onChange={(e) => setWeddingVenue(e.target.value)}
                  placeholder="e.g. Taj West End"
                  className="w-full px-3 py-2 rounded-lg border border-blush-200 text-xs sm:text-sm text-charcoal focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none"
                />
              </div>
              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-charcoal-soft mb-1.5">
                  City / State
                </label>
                <input
                  type="text"
                  value={weddingCity}
                  onChange={(e) => setWeddingCity(e.target.value)}
                  placeholder="e.g. Udaipur, Rajasthan"
                  className="w-full px-3 py-2 rounded-lg border border-blush-200 text-xs sm:text-sm text-charcoal focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none"
                />
              </div>
            </div>

            {/* Sacred Shloka / Blessing Option */}
            <div>
              <label className="block text-[11px] uppercase tracking-wider font-semibold text-charcoal-soft mb-1.5">
                Auspicious Heading / Shloka
              </label>
              <select
                value={weddingVerse}
                onChange={(e) => setWeddingVerse(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-blush-200 text-xs sm:text-sm text-charcoal focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none bg-white"
              >
                <option value="॥ शुभ विवाह ॥">॥ शुभ विवाह ॥ (Shubh Vivah)</option>
                <option value="॥ ॐ श्री गणेशाय नमः ॥">॥ ॐ श्री गणेशाय नमः ॥ (Lord Ganesha Invocation)</option>
                <option value="॥ वक्रतुण्ड महाकाय ॥">॥ वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ ॥</option>
                <option value="With the Blessings of the Almighty">With the Blessings of the Almighty</option>
                <option value="Together with their families">Together with their families</option>
              </select>
            </div>

            {/* Atelier Palette Theme Selector */}
            <div>
              <label className="block text-[11px] uppercase tracking-wider font-semibold text-charcoal-soft mb-2">
                Palette Theme: <span className="font-normal text-blush-700">{currentTheme.name}</span>
              </label>
              <div className="grid grid-cols-5 gap-2">
                {[
                  { key: 'blush', name: 'Blush', hex: '#F8DDE5' },
                  { key: 'gold', name: 'Gold', hex: '#D8B879' },
                  { key: 'sage', name: 'Sage', hex: '#D9E8D3' },
                  { key: 'wine', name: 'Wine', hex: '#865365' },
                  { key: 'haldi', name: 'Haldi', hex: '#F7E99A' },
                ].map((th) => (
                  <button
                    key={th.key}
                    onClick={() => setActiveTheme(th.key)}
                    className={`h-11 rounded-xl border flex flex-col items-center justify-center transition-all ${
                      activeTheme === th.key
                        ? 'ring-2 ring-charcoal scale-105 border-transparent shadow-sm'
                        : 'border-blush-200 hover:scale-102'
                    }`}
                    style={{ backgroundColor: th.hex }}
                    title={th.name}
                  >
                    <span className="text-[10px] font-semibold text-charcoal/80">
                      {th.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Action Button: Customize This Design */}
            <div className="pt-2 space-y-3">
              <button
                onClick={handleProceedWithCustomization}
                className="w-full py-3.5 rounded-full bg-charcoal text-ivory-100 text-xs tracking-widest uppercase font-semibold hover:bg-blush-700 transition-colors shadow-lg flex items-center justify-center gap-2 group"
              >
                <span>Customize This Design</span>
                <Sparkles className="w-4 h-4 text-gold group-hover:rotate-12 transition-transform" />
              </button>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => setShowWhatsAppSim(true)}
                  className="px-3 py-2.5 rounded-xl border border-emerald-500/40 bg-emerald-50/60 hover:bg-emerald-50 text-emerald-900 text-[11px] font-medium flex items-center justify-center gap-1.5 transition-all shadow-xs"
                >
                  <Share2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp View</span>
                </button>
                <button
                  type="button"
                  onClick={() => setShowRsvpDemo(true)}
                  className="px-3 py-2.5 rounded-xl border border-blush-300 bg-blush-50 hover:bg-blush-100 text-blush-900 text-[11px] font-medium flex items-center justify-center gap-1.5 transition-all shadow-xs"
                >
                  <Heart className="w-3.5 h-3.5 text-blush-600 fill-blush-600" />
                  <span>Demo RSVP Form</span>
                </button>
              </div>

              {/* Download Proof Button */}
              <button
                type="button"
                onClick={handleDownloadProof}
                className="w-full py-2.5 px-3 rounded-xl border border-gold/50 bg-gold-50/60 hover:bg-gold-100/80 text-charcoal text-[11px] font-medium flex items-center justify-center gap-2 transition-all shadow-xs"
              >
                <Download className="w-3.5 h-3.5 text-gold-deep" />
                <span>Download Sample Proof (PNG)</span>
              </button>

              <div className="flex items-center justify-between text-xs text-charcoal-muted pt-1">
                <span className="flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  Free Digital Draft Proof
                </span>
                <button
                  onClick={playChimeSequence}
                  className="flex items-center gap-1 text-gold hover:text-gold-deep transition-colors"
                >
                  <Music className="w-3.5 h-3.5" />
                  <span>{isAudioPlaying ? 'Playing chime...' : 'Play Chime'}</span>
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Digital Wedding Invitation Card Mockup */}
          <div className="lg:col-span-7 flex flex-col items-center">
            
            {/* Multi-Event Switcher Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto max-w-full pb-2 mb-3 scrollbar-none">
              {Object.values(eventCards).map((evt) => (
                <button
                  key={evt.key}
                  type="button"
                  onClick={() => {
                    setActiveCardEvent(evt.key);
                    if (evt.themeKey && themes[evt.themeKey]) {
                      setActiveTheme(evt.themeKey);
                    }
                    if (!isOpen) setIsOpen(true);
                  }}
                  className={`px-3 py-1.5 rounded-full text-[11px] font-medium whitespace-nowrap transition-all ${
                    activeCardEvent === evt.key
                      ? 'bg-charcoal text-ivory-100 shadow-md scale-102 ring-1 ring-gold/50'
                      : 'bg-white/90 text-charcoal-muted hover:text-charcoal border border-blush-200'
                  }`}
                >
                  {evt.badge}
                </button>
              ))}
            </div>

            {/* Top Interactive Prompt Pill */}
            <div className="mb-4">
              <button
                onClick={handleEnvelopeClick}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-ivory-100 text-charcoal text-xs font-medium shadow-md border border-blush-300 hover:bg-blush-50 transition-all hover:scale-102"
              >
                <Sparkles className="w-3.5 h-3.5 text-gold animate-bounce" />
                <span>
                  {isOpen ? 'Tap Wax Seal to Tuck Card Back' : 'Click the Wax Seal to Open Invitation'}
                </span>
              </button>
            </div>

            {/* The Envelope Mockup Frame */}
            <div className="relative w-full max-w-[380px] sm:max-w-[420px] select-none">
              
              {/* Outer Envelope Wrapper */}
              <div
                onClick={handleEnvelopeClick}
                className={`relative rounded-3xl p-4 sm:p-5 transition-all duration-700 bg-gradient-to-b ${currentTheme.envelopeOuter} border ${currentTheme.goldBorder} shadow-2xl cursor-pointer`}
              >
                
                {/* Background Pattern on Envelope Flap */}
                <div className="absolute inset-0 opacity-15 pointer-events-none overflow-hidden rounded-3xl">
                  <MandalaPattern className="w-96 h-96 -top-20 -left-20 text-gold" />
                </div>

                {/* The Sliding Inside Invitation Card */}
                <div
                  className={`relative z-10 ${currentTheme.cardBg} rounded-2xl border-2 ${currentTheme.goldBorder} p-6 sm:p-7 text-center transition-all duration-700 ease-out shadow-xl ${
                    isOpen
                      ? '-translate-y-28 scale-102 ring-2 ring-gold/40 shadow-2xl'
                      : 'translate-y-0 scale-98 opacity-95'
                  }`}
                  onClick={(e) => {
                    // Let card also trigger or toggle
                    e.stopPropagation();
                    handleEnvelopeClick();
                  }}
                >
                  {/* Ornate Frame Corners */}
                  <DecorativeCorner className="absolute top-3 left-3 w-6 h-6 text-gold/70" />
                  <div className="absolute top-3 right-3 scale-x-[-1]">
                    <DecorativeCorner className="w-6 h-6 text-gold/70" />
                  </div>
                  <div className="absolute bottom-3 left-3 scale-y-[-1]">
                    <DecorativeCorner className="w-6 h-6 text-gold/70" />
                  </div>
                  <div className="absolute bottom-3 right-3 scale-[-1]">
                    <DecorativeCorner className="w-6 h-6 text-gold/70" />
                  </div>

                  {/* Sacred Auspicious Heading */}
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="h-[1px] w-6 bg-gold/60" />
                    <span className="text-[12px] font-serif tracking-[0.2em] font-semibold text-gold-deep">
                      {currentEventCard.verse || weddingVerse}
                    </span>
                    <span className="h-[1px] w-6 bg-gold/60" />
                  </div>

                  <p className="text-[10px] uppercase tracking-[0.25em] text-charcoal-muted mb-1 font-sans">
                    With the grace of our ancestors
                  </p>

                  {/* Interlocking Rings SVG Motif */}
                  <div className="flex justify-center my-1">
                    <WeddingRings className="w-10 h-7" />
                  </div>

                  {/* Couple Names */}
                  <div className="my-2 py-2 border-y border-blush-200">
                    <h3 className="font-serif text-3xl sm:text-4xl text-charcoal font-normal tracking-wide">
                      {brideName || 'Bride'}
                    </h3>
                    <span className="font-script text-3xl sm:text-4xl text-gold block -my-1.5">&</span>
                    <h3 className={`font-serif text-3xl sm:text-4xl ${currentTheme.accentText} font-normal tracking-wide`}>
                      {groomName || 'Groom'}
                    </h3>
                  </div>

                  <p className="text-xs font-serif italic text-charcoal-soft mb-2">
                    {currentEventCard.subtext || "Cordially invite you to share our joy at the auspicious ceremonies"}
                  </p>

                  {/* Event Ceremony & Timing Pill */}
                  <div className={`inline-block ${currentTheme.badgeBg} border ${currentTheme.goldBorder} rounded-full px-4 py-1.5 mb-2`}>
                    <p className={`text-xs font-semibold tracking-wider uppercase ${currentTheme.tagText}`}>
                      {currentEventCard.name}
                    </p>
                    <p className="text-[10px] text-charcoal-soft font-sans tracking-wide">
                      {formattedDate} • {currentEventCard.timing}
                    </p>
                  </div>

                  {/* Ceremony & Venue Details */}
                  <div className="space-y-1 text-xs text-charcoal-muted">
                    <p className="font-semibold text-charcoal text-sm font-serif">
                      {weddingVenue || 'Grand Palace Venue'}
                    </p>
                    <p className="flex items-center justify-center gap-1 text-[11px]">
                      <MapPin className="w-3.5 h-3.5 text-blush-500" />
                      {weddingCity || 'City, India'}
                    </p>
                    {/* Clickable Dress code guide trigger */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowDressCodeModal(true);
                      }}
                      className="inline-flex items-center gap-1 text-[11px] font-medium text-gold-deep hover:text-gold hover:underline pt-1 cursor-pointer"
                    >
                      <span>Attire: {currentEventCard.dressCode}</span>
                      <span className="text-[10px] bg-gold/15 px-1.5 py-0.5 rounded-full">Guide ↗</span>
                    </button>
                  </div>

                  {/* Interactive Action Indicators on Card */}
                  <div className="mt-4 pt-2.5 border-t border-dashed border-blush-200 flex items-center justify-between text-[10px] text-charcoal-muted">
                    <span className="flex items-center gap-1 font-serif italic text-charcoal-soft">
                      RSVP Requested
                    </span>
                    <span className="text-gold font-medium flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> Clickable Maps & Calendar
                    </span>
                  </div>
                </div>

                {/* Wax Seal placed over envelope bottom */}
                <div className="relative z-20 mt-4 flex flex-col items-center">
                  <div className="relative -mt-6">
                    <WaxSeal monogram={getMonogram()} color={currentTheme.waxColor} size={70} />
                    {!isOpen && (
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <span className="animate-ping w-14 h-14 rounded-full border border-gold/50 opacity-40" />
                      </div>
                    )}
                  </div>
                  <p className="text-xs text-charcoal-muted mt-2 font-serif italic tracking-wide">
                    {isOpen ? 'Tap wax seal to fold card' : 'Tap wax seal to open'}
                  </p>
                </div>

              </div>

            </div>

            {/* Bottom Sharing & Customization Tip */}
            <div className="mt-8 text-center text-xs text-charcoal-muted max-w-sm">
              <p>
                ★ Delivered as an interactive mobile link, high-resolution PDF for printing, and 9:16 vertical video for instant WhatsApp and Instagram broadcasting.
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* Guest WhatsApp View Simulation Modal */}
      <WhatsAppGuestSimulator
        isOpen={showWhatsAppSim}
        onClose={() => setShowWhatsAppSim(false)}
        invitationData={{
          brideName,
          groomName,
          weddingDate,
          weddingVenue,
          weddingCity,
          theme: currentTheme.name
        }}
      />

      {/* Interactive Guest RSVP Experience Modal */}
      <GuestRsvpDemoModal
        isOpen={showRsvpDemo}
        onClose={() => setShowRsvpDemo(false)}
        coupleNames={`${brideName} & ${groomName}`}
      />

      {/* Guest Dress Code & Attire Moodboard Modal */}
      <DressCodeMoodboardModal
        isOpen={showDressCodeModal}
        onClose={() => setShowDressCodeModal(false)}
        activeEvent={currentEventCard.name || activeCardEvent}
      />
    </section>
  );
}
