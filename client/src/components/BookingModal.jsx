import React, { useState, useRef, useEffect } from 'react';
import { X, Sparkles, Camera, Upload, Trash2, Plus, Check, MessageCircle, Heart, Star, Calendar } from './icons';
import { BRAND_INFO } from '../data/weddingData';
import { DecorativeCorner } from './svg/WeddingMotifs';

export const DESIGN_TYPES = [
  {
    id: 'modern-minimalist',
    name: 'Modern Minimalist',
    subtitle: 'Clean lines, generous whitespace, quiet luxury',
    tag: 'Contemporary',
    color: '#865365',
    accentBg: 'bg-[#FAF6F7]',
    borderStyle: 'border-[#865365]/40',
    fontPreview: 'font-sans tracking-wide',
    icon: '✨'
  },
  {
    id: 'royal-palace',
    name: 'Royal Palace & Heritage',
    subtitle: 'Rajasthani jharokhas, palatial arches & golden crests',
    tag: 'Royalty',
    color: '#C8A252',
    accentBg: 'bg-[#FDF8EE]',
    borderStyle: 'border-[#C8A252]',
    fontPreview: 'font-serif tracking-widest',
    icon: '👑'
  },
  {
    id: 'luxury-gold-velvet',
    name: 'Luxury Gold & Velvet',
    subtitle: 'Champagne gold foil embossing & royal crimson velvet',
    tag: 'Ultra Luxury',
    color: '#D8B879',
    accentBg: 'bg-[#FFFDF7]',
    borderStyle: 'border-[#D8B879]',
    fontPreview: 'font-serif italic',
    icon: '⚜️'
  },
  {
    id: 'romantic-floral',
    name: 'Romantic Botanical Floral',
    subtitle: 'Hand-painted wild roses, cascading jasmine & pastels',
    tag: 'Romantic',
    color: '#EBC0CE',
    accentBg: 'bg-[#FCF5F7]',
    borderStyle: 'border-[#EBC0CE]',
    fontPreview: 'font-display italic',
    icon: '🌸'
  },
  {
    id: 'traditional-vedic',
    name: 'Traditional Vedic Vivah',
    subtitle: 'Sacred Sanskrit shlokas, kalash & peacock feather motifs',
    tag: 'Sacred Heritage',
    color: '#B85D19',
    accentBg: 'bg-[#FFF9F3]',
    borderStyle: 'border-[#B85D19]/40',
    fontPreview: 'font-serif font-semibold',
    icon: '🪔'
  },
  {
    id: 'haldi-sunshine',
    name: 'Haldi Sunshine Radiance',
    subtitle: 'Marigold urlis, clay pots & vibrant auspicious yellow',
    tag: 'Festive Joy',
    color: '#E0A812',
    accentBg: 'bg-[#FFFDEB]',
    borderStyle: 'border-[#E0A812]/50',
    fontPreview: 'font-serif',
    icon: '🌼'
  },
  {
    id: 'mehendi-boho',
    name: 'Bohemian Mehendi Magic',
    subtitle: 'Intricate henna scrollwork, parrots & bohemian colors',
    tag: 'Henna Chic',
    color: '#2F5233',
    accentBg: 'bg-[#F3F9F1]',
    borderStyle: 'border-[#2F5233]/40',
    fontPreview: 'font-sans',
    icon: '🌿'
  },
  {
    id: 'celestial-starlight',
    name: 'Celestial Starlight',
    subtitle: 'Midnight lilac sky, cosmic constellations & silver foil',
    tag: 'Mystic Romantic',
    color: '#5C4E75',
    accentBg: 'bg-[#F4F1F9]',
    borderStyle: 'border-[#5C4E75]/40',
    fontPreview: 'font-serif tracking-widest',
    icon: '🌙'
  },
  {
    id: 'destination-beach',
    name: 'Destination Beach & Sunset',
    subtitle: 'Coastal breezy watercolor palms & golden sunset hues',
    tag: 'Destination',
    color: '#3B7A8C',
    accentBg: 'bg-[#F2F8FA]',
    borderStyle: 'border-[#3B7A8C]/40',
    fontPreview: 'font-sans',
    icon: '🏝️'
  },
  {
    id: 'vintage-wax-seal',
    name: 'Vintage Wax Seal Classic',
    subtitle: 'Heirloom couple monogram seal & deckle-edge parchment',
    tag: 'Heirloom',
    color: '#7B4A53',
    accentBg: 'bg-[#FAF4F5]',
    borderStyle: 'border-[#7B4A53]/40',
    fontPreview: 'font-serif',
    icon: '💌'
  },
  {
    id: 'animated-cinematic',
    name: 'Animated Cinematic Video',
    subtitle: 'Interactive 3D unboxing, motion cards & musical scoring',
    tag: 'Animated',
    color: '#865365',
    accentBg: 'bg-[#FAF3F6]',
    borderStyle: 'border-[#865365]',
    fontPreview: 'font-display',
    icon: '🎬'
  },
  {
    id: 'high-fashion-vogue',
    name: 'Contemporary High-Fashion',
    subtitle: 'Vogue-style editorial typography, champagne & black noir',
    tag: 'High Fashion',
    color: '#1A1819',
    accentBg: 'bg-[#FBFBFA]',
    borderStyle: 'border-[#1A1819]/40',
    fontPreview: 'font-serif tracking-wider',
    icon: '💎'
  }
];

// Curated sample couple photos for quick instant fill
const SAMPLE_PHOTOS = [
  'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80'
];

export default function BookingModal({ isOpen, onClose, initialDesignId }) {
  const [groomName, setGroomName] = useState('');
  const [brideName, setBrideName] = useState('');
  const [selectedDesign, setSelectedDesign] = useState(initialDesignId || DESIGN_TYPES[0].id);
  const [weddingDate, setWeddingDate] = useState('');
  const [venueCity, setVenueCity] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [customNotes, setCustomNotes] = useState('');
  const [uploadedImages, setUploadedImages] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (initialDesignId) {
      setSelectedDesign(initialDesignId);
    }
  }, [initialDesignId]);

  if (!isOpen) return null;

  const currentDesign = DESIGN_TYPES.find((d) => d.id === selectedDesign) || DESIGN_TYPES[0];

  // Handle flexible image file uploads (FileReader -> dataURL)
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;

    files.forEach((file) => {
      if (!file.type.startsWith('image/')) return;
      const reader = new FileReader();
      reader.onload = (event) => {
        setUploadedImages((prev) => [
          ...prev,
          {
            id: Date.now() + Math.random().toString(36).substr(2, 9),
            url: event.target.result,
            name: file.name
          }
        ]);
      };
      reader.readAsDataURL(file);
    });

    // Reset input so user can add more photos if desired
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  // Add a sample inspiration photo
  const handleAddSamplePhoto = (url) => {
    setUploadedImages((prev) => [
      ...prev,
      {
        id: Date.now() + Math.random().toString(36).substr(2, 9),
        url,
        name: 'Curated Atelier Photo'
      }
    ]);
  };

  // Remove photo
  const handleRemovePhoto = (idToRemove) => {
    setUploadedImages((prev) => prev.filter((img) => img.id !== idToRemove));
  };

  // Form validation: Groom name, Bride name, and at least 1 image
  const hasMinOneImage = uploadedImages.length >= 1;
  const isFormValid = groomName.trim().length > 0 && brideName.trim().length > 0 && hasMinOneImage;

  // Handle Booking Submission
  const handleSubmitBooking = (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    setIsSubmitting(true);

    // Format WhatsApp message
    const message = `*🌸 NEW INVITATION BOOKING — RIVAYAT & CO. 🌸*
----------------------------------------
*Groom Name:* ${groomName}
*Bride / Wife Name:* ${brideName}
*Design Aesthetic:* ${currentDesign.name} (${currentDesign.tag})
*Wedding / Event Date:* ${weddingDate || 'To be decided'}
*City / Venue:* ${venueCity || 'Not specified'}
*Photos Attached:* ${uploadedImages.length} flexible photo(s) selected
*Special Wishlist / Notes:* ${customNotes || 'Standard luxury personalization'}
----------------------------------------
_Generated via Rivayat & Co. Bespoke Booking Suite_`;

    const encoded = encodeURIComponent(message);
    const waUrl = `https://wa.me/${BRAND_INFO.contact.whatsappClean}?text=${encoded}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setBookingSuccess(true);
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-charcoal/70 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 md:p-6 animate-fadeIn">
      <div
        className="relative w-full max-w-4xl bg-ivory-100 rounded-3xl shadow-2xl border border-gold/40 overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Banner */}
        <div className="relative bg-gradient-to-r from-[#F8DDE5] via-[#FFFDF8] to-[#F7E99A]/50 px-6 sm:px-8 py-5 border-b border-blush-200 flex items-center justify-between">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/80 border border-gold/40 text-[11px] uppercase tracking-widest text-charcoal font-semibold shadow-2xs">
              <Sparkles className="w-3 h-3 text-gold" />
              <span>Bespoke Invitation Booking</span>
            </div>
            <h2 className="font-serif text-xl sm:text-2xl text-charcoal font-normal tracking-wide">
              Book Your Invitation Suite
            </h2>
            <p className="text-xs text-charcoal-muted font-light">
              Personalize couple names, select your signature design aesthetic, and upload reference photos.
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/80 hover:bg-white text-charcoal flex items-center justify-center border border-blush-300 hover:border-gold transition-colors shadow-2xs"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {bookingSuccess ? (
          /* Booking Success State */
          <div className="p-8 sm:p-12 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 mx-auto flex items-center justify-center text-emerald-700 shadow-sm animate-bounce">
              <Check className="w-8 h-8 stroke-[2.5]" />
            </div>
            <div className="space-y-2">
              <h3 className="font-serif text-2xl sm:text-3xl text-charcoal font-normal">
                Congratulations, {groomName} & {brideName}!
              </h3>
              <p className="text-sm text-charcoal-muted max-w-md mx-auto font-light leading-relaxed">
                Your booking details and design theme (*{currentDesign.name}*) have been prepared. Our atelier concierge has received your brief on WhatsApp.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-ivory-50 border border-blush-200 max-w-md mx-auto text-left text-xs space-y-2 text-charcoal-soft">
              <div className="flex justify-between border-b border-blush-100 pb-1.5">
                <span className="text-charcoal-muted">Couple:</span>
                <span className="font-semibold text-charcoal">{groomName} & {brideName}</span>
              </div>
              <div className="flex justify-between border-b border-blush-100 pb-1.5">
                <span className="text-charcoal-muted">Design Type:</span>
                <span className="font-semibold text-charcoal">{currentDesign.name}</span>
              </div>
              <div className="flex justify-between border-b border-blush-100 pb-1.5">
                <span className="text-charcoal-muted">Photos Added:</span>
                <span className="font-semibold text-emerald-700">✓ {uploadedImages.length} Photo(s)</span>
              </div>
              {weddingDate && (
                <div className="flex justify-between">
                  <span className="text-charcoal-muted">Wedding Date:</span>
                  <span className="font-semibold text-charcoal">{weddingDate}</span>
                </div>
              )}
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => {
                  setBookingSuccess(false);
                  onClose();
                }}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-charcoal text-ivory-100 text-xs uppercase tracking-wider font-semibold hover:bg-blush-700 transition-colors"
              >
                Done / Back to Website
              </button>
            </div>
          </div>
        ) : (
          /* Main Interactive Booking Form */
          <form onSubmit={handleSubmitBooking} className="p-6 sm:p-8 space-y-6 max-h-[78vh] overflow-y-auto">
            {/* Step 1: Couple Names */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-gold/20 text-gold text-xs font-bold flex items-center justify-center">
                  1
                </span>
                <h3 className="font-serif text-lg text-charcoal font-medium">
                  Couple Information
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-medium text-charcoal-soft mb-1">
                    Your Name (Groom) <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Kabir Rathore"
                    value={groomName}
                    onChange={(e) => setGroomName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-blush-300 text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 shadow-2xs placeholder:text-charcoal-muted/50"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-medium text-charcoal-soft mb-1">
                    Wife's Name (Bride) <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Meera Singhania"
                    value={brideName}
                    onChange={(e) => setBrideName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-blush-300 text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 shadow-2xs placeholder:text-charcoal-muted/50"
                  />
                </div>
              </div>
            </div>

            {/* Step 2: Design Type Selection (10+ Different Aesthetics) */}
            <div className="space-y-3 pt-2 border-t border-blush-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-gold/20 text-gold text-xs font-bold flex items-center justify-center">
                    2
                  </span>
                  <h3 className="font-serif text-lg text-charcoal font-medium">
                    Select Design Type
                  </h3>
                </div>
                <span className="text-xs text-charcoal-muted">
                  12 Curated Styles Available
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 max-h-56 overflow-y-auto p-1 border border-blush-200/80 rounded-2xl bg-ivory-50/60">
                {DESIGN_TYPES.map((d) => {
                  const isSelected = selectedDesign === d.id;
                  return (
                    <div
                      key={d.id}
                      onClick={() => setSelectedDesign(d.id)}
                      className={`cursor-pointer p-3 rounded-xl border transition-all flex items-start gap-2.5 ${
                        isSelected
                          ? 'bg-white border-gold shadow-xs ring-1 ring-gold'
                          : 'bg-white/70 hover:bg-white border-blush-200/80'
                      }`}
                    >
                      <span className="text-xl flex-shrink-0">{d.icon}</span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-1">
                          <h4 className="text-xs font-semibold text-charcoal truncate">
                            {d.name}
                          </h4>
                          {isSelected && (
                            <Check className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                          )}
                        </div>
                        <p className="text-[10.5px] text-charcoal-muted leading-tight line-clamp-2 mt-0.5 font-light">
                          {d.subtitle}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Flexible Photo Upload (Minimum 1 Required) */}
            <div className="space-y-3 pt-2 border-t border-blush-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-gold/20 text-gold text-xs font-bold flex items-center justify-center">
                    3
                  </span>
                  <h3 className="font-serif text-lg text-charcoal font-medium">
                    Upload Photos (Minimum 1 Required)
                  </h3>
                </div>

                <div className="flex items-center gap-1.5">
                  <span
                    className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${
                      hasMinOneImage
                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                        : 'bg-amber-100 text-amber-900 border border-amber-300'
                    }`}
                  >
                    {hasMinOneImage
                      ? `✓ ${uploadedImages.length} Photo${uploadedImages.length > 1 ? 's' : ''} Added`
                      : '⚠ Minimum 1 Photo Required'}
                  </span>
                </div>
              </div>

              <p className="text-xs text-charcoal-muted font-light">
                Add your couple portrait, engagement pictures, venue sketches, or decor inspirations. You can add flexible images according to your wedding theme.
              </p>

              {/* Upload Zone & Quick Sample Picker */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                {/* Drag & Drop Upload Tile */}
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="sm:col-span-7 border-2 border-dashed border-blush-300 hover:border-gold rounded-2xl p-4 bg-white/80 hover:bg-white cursor-pointer transition-all flex flex-col items-center justify-center text-center space-y-1.5 group"
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  <div className="w-10 h-10 rounded-full bg-blush-100 text-blush-700 group-hover:scale-110 transition-transform flex items-center justify-center">
                    <Upload className="w-5 h-5 text-blush-700" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-charcoal hover:underline">
                      Click to upload photos from device
                    </span>
                    <p className="text-[10.5px] text-charcoal-muted mt-0.5">
                      JPG, PNG, WebP supported • Add 1 or multiple photos
                    </p>
                  </div>
                </div>

                {/* Quick Sample Photos Selector */}
                <div className="sm:col-span-5 p-3 rounded-2xl bg-blush-50/60 border border-blush-200 flex flex-col justify-between">
                  <span className="text-[11px] font-semibold text-charcoal uppercase tracking-wider block">
                    Or pick curated demo photos:
                  </span>
                  <div className="grid grid-cols-4 gap-1.5 mt-1.5">
                    {SAMPLE_PHOTOS.map((src, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => handleAddSamplePhoto(src)}
                        className="relative h-12 rounded-lg overflow-hidden border border-blush-300 hover:border-gold hover:scale-105 transition-all shadow-2xs group"
                        title="Add this sample photo"
                      >
                        <img src={src} alt="sample" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent flex items-center justify-center">
                          <Plus className="w-4 h-4 text-white drop-shadow-xs" />
                        </div>
                      </button>
                    ))}
                  </div>
                  <span className="text-[10px] text-charcoal-muted mt-1 block">
                    Click any thumbnail above to add as photo
                  </span>
                </div>
              </div>

              {/* Uploaded Photos Preview Strip */}
              {uploadedImages.length > 0 && (
                <div className="pt-2">
                  <span className="text-xs font-medium text-charcoal-soft block mb-2">
                    Photos for Your Invitation ({uploadedImages.length}):
                  </span>
                  <div className="flex flex-wrap gap-3">
                    {uploadedImages.map((img, idx) => (
                      <div
                        key={img.id}
                        className="relative w-24 h-24 rounded-xl overflow-hidden border-2 border-gold/70 shadow-sm group"
                      >
                        <img
                          src={img.url}
                          alt={img.name}
                          className="w-full h-full object-cover"
                        />
                        {/* Primary Badge for first photo */}
                        {idx === 0 && (
                          <span className="absolute top-1 left-1 px-1.5 py-0.5 rounded text-[8.5px] font-bold uppercase tracking-wider bg-gold text-charcoal shadow-2xs">
                            Primary
                          </span>
                        )}
                        {/* Remove Button */}
                        <button
                          type="button"
                          onClick={() => handleRemovePhoto(img.id)}
                          className="absolute bottom-1 right-1 w-6 h-6 rounded-full bg-rose-600 text-white flex items-center justify-center opacity-85 hover:opacity-100 transition-opacity shadow-sm"
                          title="Remove photo"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Step 4: Ceremony Details & Contact */}
            <div className="space-y-3 pt-2 border-t border-blush-200">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-gold/20 text-gold text-xs font-bold flex items-center justify-center">
                  4
                </span>
                <h3 className="font-serif text-lg text-charcoal font-medium">
                  Ceremony Date & WhatsApp
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-medium text-charcoal-soft mb-1">
                    Wedding Date
                  </label>
                  <input
                    type="date"
                    value={weddingDate}
                    onChange={(e) => setWeddingDate(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-white border border-blush-300 text-charcoal text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 shadow-2xs"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-medium text-charcoal-soft mb-1">
                    City / Venue
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Udaipur / Taj Lake Palace"
                    value={venueCity}
                    onChange={(e) => setVenueCity(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-white border border-blush-300 text-charcoal text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 shadow-2xs placeholder:text-charcoal-muted/50"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-medium text-charcoal-soft mb-1">
                    WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-white border border-blush-300 text-charcoal text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 shadow-2xs placeholder:text-charcoal-muted/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-medium text-charcoal-soft mb-1">
                  Customization Wishlist or Theme Notes
                </label>
                <textarea
                  rows="2"
                  placeholder="Share any specific rituals (Sangeet, Haldi, Vivah), dress codes, music preferences or special color palettes..."
                  value={customNotes}
                  onChange={(e) => setCustomNotes(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-white border border-blush-300 text-charcoal text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 shadow-2xs placeholder:text-charcoal-muted/50"
                />
              </div>
            </div>

            {/* Live Visual Card Preview */}
            <div className="pt-2 border-t border-blush-200">
              <span className="text-xs uppercase tracking-wider font-semibold text-charcoal-soft block mb-2">
                Live Preview with Your Selections:
              </span>
              <div
                className={`p-5 rounded-2xl border ${currentDesign.borderStyle} ${currentDesign.accentBg} flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left transition-all shadow-xs`}
              >
                {/* Photo in frame */}
                <div className="w-20 h-24 rounded-xl overflow-hidden border border-gold/50 shadow-xs flex-shrink-0 bg-blush-100 flex items-center justify-center">
                  {uploadedImages.length > 0 ? (
                    <img
                      src={uploadedImages[0].url}
                      alt="couple"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center text-charcoal-muted/60 p-2 text-center">
                      <Camera className="w-6 h-6 mb-1 text-gold" />
                      <span className="text-[9px]">Photo Frame</span>
                    </div>
                  )}
                </div>

                <div className="flex-1 space-y-1">
                  <div className="inline-flex items-center gap-1 text-[10px] uppercase tracking-widest text-gold font-bold">
                    <span>{currentDesign.icon}</span>
                    <span>{currentDesign.name} • {currentDesign.tag}</span>
                  </div>
                  <h4 className="font-serif text-xl sm:text-2xl text-charcoal font-normal">
                    {groomName || "Groom"} <span className="italic font-display text-blush-700">&</span> {brideName || "Bride"}
                  </h4>
                  <p className="text-xs text-charcoal-muted">
                    {weddingDate ? `Ceremony on ${weddingDate}` : 'Royal Wedding Ceremony'}
                    {venueCity ? ` • ${venueCity}` : ' • Udaipur, Rajasthan'}
                  </p>
                  <span className="inline-block text-[10px] text-emerald-700 font-semibold mt-1">
                    {uploadedImages.length > 0
                      ? `✓ ${uploadedImages.length} Photo${uploadedImages.length > 1 ? 's' : ''} Ready for Design Studio`
                      : '⚠ Please attach at least 1 photo below'}
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-blush-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-xs text-charcoal-muted font-light">
                {!hasMinOneImage && (
                  <span className="text-amber-700 font-medium">
                    * Please upload at least 1 photo to enable booking.
                  </span>
                )}
                {hasMinOneImage && !isFormValid && (
                  <span className="text-amber-700 font-medium">
                    * Please provide both Groom and Bride names.
                  </span>
                )}
                {isFormValid && (
                  <span className="text-emerald-700 font-medium">
                    ✓ All details complete! Click below to confirm.
                  </span>
                )}
              </p>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-full border border-blush-300 text-charcoal hover:bg-blush-100 text-xs uppercase tracking-wider font-semibold transition-colors"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className={`w-full sm:w-auto px-7 py-3 rounded-full text-xs uppercase tracking-[0.14em] font-semibold transition-all shadow-md flex items-center justify-center gap-2 ${
                    isFormValid && !isSubmitting
                      ? 'bg-charcoal text-ivory-100 hover:bg-blush-700 hover:scale-[1.02] cursor-pointer'
                      : 'bg-charcoal/40 text-ivory-100/60 cursor-not-allowed'
                  }`}
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>
                    {isSubmitting ? 'Confirming...' : 'Book Now & Send WhatsApp Brief'}
                  </span>
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

