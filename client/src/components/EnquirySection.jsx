import React, { useState, useEffect } from 'react';
import { Sparkles, Send, MessageCircle, Mail, Instagram, MapPin, Clock, Phone, CheckCircle2, AlertCircle } from './icons';
import { BRAND_INFO, COLLECTIONS, PRICING_PACKAGES } from '../data/weddingData';
import { DecorativeCorner } from './svg/WeddingMotifs';

export default function EnquirySection({ prefillData, onClearPrefill }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    weddingDate: '',
    eventType: 'Traditional Multi-Day Wedding',
    preferredStyle: 'Traditional Indian Wedding',
    selectedPackage: 'Premium Package',
    notes: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync prefilled data if passed from another component (e.g. Interactive Studio or Pricing or Collections)
  useEffect(() => {
    if (prefillData) {
      setFormData((prev) => ({
        ...prev,
        name: prefillData.brideName && prefillData.groomName
          ? `${prefillData.brideName} & ${prefillData.groomName}`
          : prev.name,
        weddingDate: prefillData.weddingDate || prev.weddingDate,
        selectedPackage: prefillData.selectedPackage || prev.selectedPackage,
        preferredStyle: prefillData.preferredStyle || prev.preferredStyle,
        notes: prefillData.theme
          ? `Interested in ${prefillData.theme} theme for ${prefillData.weddingVenue || 'our wedding'}.`
          : prev.notes
      }));
    }
  }, [prefillData]);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Please enter your name or couple's names";
    
    if (!formData.email.trim()) {
      errs.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = "Please enter a valid email address";
    }

    if (!formData.whatsapp.trim()) {
      errs.whatsapp = "WhatsApp number is required for instant proof delivery";
    } else if (formData.whatsapp.replace(/\D/g, '').length < 8) {
      errs.whatsapp = "Please enter a valid phone number with country code";
    }

    if (!formData.weddingDate) {
      errs.weddingDate = "Please choose your approximate wedding date";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate high-end concierge processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (onClearPrefill) onClearPrefill();
    }, 900);
  };

  const generateWhatsAppUrl = () => {
    const text = `*New Wedding Invitation Inquiry - Rivayat Studio*%0A%0A` +
      `*Couple/Contact:* ${encodeURIComponent(formData.name || 'Not provided')}%0A` +
      `*Wedding Date:* ${encodeURIComponent(formData.weddingDate || 'TBD')}%0A` +
      `*Event Type:* ${encodeURIComponent(formData.eventType)}%0A` +
      `*Style:* ${encodeURIComponent(formData.preferredStyle)}%0A` +
      `*Package:* ${encodeURIComponent(formData.selectedPackage)}%0A` +
      `*Notes:* ${encodeURIComponent(formData.notes || 'None')}`;
    return `https://wa.me/${BRAND_INFO.contact.whatsappClean}?text=${text}`;
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-[#f3f0ff] via-[#eae6fc] to-[#dcd8f4] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 border border-[#c8c1ee] text-[#0b0b10] text-xs tracking-[0.2em] uppercase font-medium shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            Concierge Consultation
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0b0b10] font-normal tracking-tight">
            Commission Your Wedding Stationery
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#0b0b10]/70 font-light leading-relaxed">
            Fill the enquiry details below to receive a personalized digital proposal and draft within 24 hours, or connect directly on WhatsApp.
          </p>
          <div className="w-24 h-[1px] bg-gold mx-auto mt-4" />
        </div>

        {/* Form & Studio Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Comprehensive Enquiry Form */}
          <div className="lg:col-span-7 bg-white/95 backdrop-blur-sm rounded-3xl p-8 sm:p-10 border border-[#c8c1ee]/60 shadow-xl relative">
            <DecorativeCorner className="absolute top-4 left-4 w-6 h-6 text-gold/50" />
            <div className="absolute top-4 right-4 scale-x-[-1]">
              <DecorativeCorner className="w-6 h-6 text-gold/50" />
            </div>

            {isSubmitted ? (
              <div className="py-12 text-center space-y-4 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-charcoal">
                  Thank You, {formData.name.split(' ')[0]}!
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-muted max-w-md mx-auto font-light leading-relaxed">
                  Your enquiry for the <span className="font-medium text-charcoal">{formData.selectedPackage}</span> has been received with love. Our senior stationery artisan will reach out to you via WhatsApp at <span className="font-medium text-charcoal">{formData.whatsapp}</span> within 4 business hours.
                </p>

                <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={generateWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full bg-[#25D366] text-white text-xs uppercase tracking-widest font-semibold flex items-center gap-2 shadow-sm hover:brightness-105"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Open Chat on WhatsApp Now
                  </a>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        whatsapp: '',
                        weddingDate: '',
                        eventType: 'Traditional Multi-Day Wedding',
                        preferredStyle: 'Traditional Indian Wedding',
                        selectedPackage: 'Premium Package',
                        notes: ''
                      });
                    }}
                    className="px-6 py-3 rounded-full bg-ivory-50 border border-blush-300 text-charcoal text-xs uppercase tracking-widest font-semibold hover:bg-ivory-100"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="font-serif text-2xl text-charcoal font-normal mb-1">
                    Design Brief & Details
                  </h3>
                  <p className="text-xs text-charcoal-muted">
                    Tell us about your wedding so we can tailor the draft proof perfectly.
                  </p>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal-soft mb-1.5">
                    Your Name / Couple's Names <span className="text-blush-700">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Ananya & Kabir"
                    className={`w-full px-4 py-2.5 rounded-xl border text-xs sm:text-sm text-charcoal focus:ring-2 focus:ring-gold/50 outline-none transition-all ${
                      errors.name ? 'border-red-400 bg-red-50/20' : 'border-blush-300 bg-white'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.name}
                    </p>
                  )}
                </div>

                {/* Email & WhatsApp Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal-soft mb-1.5">
                      Email Address <span className="text-blush-700">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className={`w-full px-4 py-2.5 rounded-xl border text-xs sm:text-sm text-charcoal focus:ring-2 focus:ring-gold/50 outline-none transition-all ${
                        errors.email ? 'border-red-400 bg-red-50/20' : 'border-blush-300 bg-white'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal-soft mb-1.5">
                      WhatsApp Number <span className="text-blush-700">*</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      placeholder="+91 98765 43210"
                      className={`w-full px-4 py-2.5 rounded-xl border text-xs sm:text-sm text-charcoal focus:ring-2 focus:ring-gold/50 outline-none transition-all ${
                        errors.whatsapp ? 'border-red-400 bg-red-50/20' : 'border-blush-300 bg-white'
                      }`}
                    />
                    {errors.whatsapp && (
                      <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.whatsapp}
                      </p>
                    )}
                  </div>
                </div>

                {/* Wedding Date & Event Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal-soft mb-1.5">
                      Approximate Wedding Date <span className="text-blush-700">*</span>
                    </label>
                    <input
                      type="date"
                      value={formData.weddingDate}
                      onChange={(e) => setFormData({ ...formData, weddingDate: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl border text-xs sm:text-sm text-charcoal focus:ring-2 focus:ring-gold/50 outline-none transition-all ${
                        errors.weddingDate ? 'border-red-400 bg-red-50/20' : 'border-blush-300 bg-white'
                      }`}
                    />
                    {errors.weddingDate && (
                      <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.weddingDate}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal-soft mb-1.5">
                      Event Type
                    </label>
                    <select
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-blush-300 bg-white text-xs sm:text-sm text-charcoal focus:ring-2 focus:ring-gold/50 outline-none"
                    >
                      <option value="Traditional Multi-Day Wedding">Traditional Multi-Day (3-5 Events)</option>
                      <option value="Single Day Wedding & Reception">Single Day Ceremony & Reception</option>
                      <option value="Destination Palace Wedding">Destination Palace Wedding</option>
                      <option value="Haldi & Mehendi Celebration">Haldi / Mehendi Only</option>
                      <option value="Roka / Engagement Announcement">Roka / Ring Ceremony</option>
                      <option value="Save The Date Video Teaser">Save The Date Teaser</option>
                    </select>
                  </div>
                </div>

                {/* Preferred Style & Package Selection */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal-soft mb-1.5">
                      Preferred Style
                    </label>
                    <select
                      value={formData.preferredStyle}
                      onChange={(e) => setFormData({ ...formData, preferredStyle: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-blush-300 bg-white text-xs sm:text-sm text-charcoal focus:ring-2 focus:ring-gold/50 outline-none"
                    >
                      {COLLECTIONS.map((c) => (
                        <option key={c.id} value={c.title}>
                          {c.title}
                        </option>
                      ))}
                      <option value="Completely Custom Artwork">Completely Custom Artwork</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal-soft mb-1.5">
                      Selected Package
                    </label>
                    <select
                      value={formData.selectedPackage}
                      onChange={(e) => setFormData({ ...formData, selectedPackage: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-blush-300 bg-white text-xs sm:text-sm text-charcoal focus:ring-2 focus:ring-gold/50 outline-none"
                    >
                      {PRICING_PACKAGES.map((p) => (
                        <option key={p.id} value={p.name}>
                          {p.name} ({p.priceINR} / {p.priceUSD})
                        </option>
                      ))}
                      <option value="Custom Bespoke Commission">Custom Bespoke Commission</option>
                    </select>
                  </div>
                </div>

                {/* Additional Notes */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal-soft mb-1.5">
                    Additional Requirements or Venue Notes
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Mention any specific color scheme, venue name, favorite song, or languages required (e.g. English + Hindi)..."
                    className="w-full px-4 py-2.5 rounded-xl border border-blush-300 bg-white text-xs sm:text-sm text-charcoal focus:ring-2 focus:ring-gold/50 outline-none resize-none"
                  />
                </div>

                {/* Submit Actions */}
                <div className="pt-2 space-y-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-full bg-[#0b0b10] hover:bg-[#2c293e] text-white text-xs sm:text-sm uppercase tracking-widest font-semibold transition-all duration-300 shadow-md flex items-center justify-center gap-2 group disabled:opacity-60 cursor-pointer"
                  >
                    <span>{isSubmitting ? 'Submitting Your Brief...' : 'Submit Wedding Design Brief'}</span>
                    <Sparkles className="w-4 h-4 text-gold group-hover:rotate-12 transition-transform" />
                  </button>

                  <div className="text-center">
                    <span className="text-[11px] text-charcoal-muted">or prefer instant messaging?</span>{' '}
                    <a
                      href={generateWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-emerald-700 font-semibold hover:underline inline-flex items-center gap-1"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                      Direct WhatsApp Inquiry
                    </a>
                  </div>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Studio Contact Details & Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Channels Card */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-7 sm:p-8 border border-[#c8c1ee]/60 space-y-6 shadow-sm">
              <h3 className="font-serif text-2xl text-[#0b0b10] font-normal">
                Rivayat Design Atelier
              </h3>
              <p className="text-xs sm:text-sm text-[#0b0b10]/70 font-light leading-relaxed">
                We work directly with couples, wedding planners, and families across timezones. Every consultation is personal, responsive, and attentive.
              </p>

              <div className="space-y-4 pt-2 border-t border-[#c8c1ee]/40">
                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${BRAND_INFO.contact.whatsappClean}?text=Hello%20Rivayat%20Studio!%20I'd%20love%20to%20discuss%20an%20e-wedding%20card.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3.5 p-3 rounded-xl bg-white/80 hover:bg-white border border-emerald-500/20 transition-all group"
                >
                  <div className="p-2.5 rounded-full bg-emerald-50 text-emerald-600 group-hover:scale-105 transition-transform">
                    <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-charcoal-muted block">
                      Instant WhatsApp Concierge
                    </span>
                    <span className="text-sm font-semibold text-charcoal group-hover:text-emerald-700">
                      {BRAND_INFO.contact.whatsapp}
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${BRAND_INFO.contact.email}?subject=Wedding%20Invitation%20Inquiry`}
                  className="flex items-start gap-3.5 p-3 rounded-xl bg-white/80 hover:bg-white border border-blush-200 transition-all group"
                >
                  <div className="p-2.5 rounded-full bg-blush-100 text-blush-700 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-charcoal-muted block">
                      Email Stationery Desk
                    </span>
                    <span className="text-sm font-semibold text-charcoal group-hover:text-blush-700">
                      {BRAND_INFO.contact.email}
                    </span>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href={`https://instagram.com/${BRAND_INFO.contact.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3.5 p-3 rounded-xl bg-white/80 hover:bg-white border border-blush-200 transition-all group"
                >
                  <div className="p-2.5 rounded-full bg-blush-100 text-blush-700 group-hover:scale-105 transition-transform">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-charcoal-muted block">
                      Instagram Portfolio
                    </span>
                    <span className="text-sm font-semibold text-charcoal group-hover:text-blush-700">
                      {BRAND_INFO.contact.instagram}
                    </span>
                  </div>
                </a>
              </div>

              {/* Physical Studio Locations & Timings */}
              <div className="pt-4 border-t border-blush-200 space-y-3 text-xs text-charcoal-muted">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <span>{BRAND_INFO.contact.studio}</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <span>{BRAND_INFO.contact.hours}</span>
                </div>
              </div>
            </div>

            {/* Quick 100% Satisfaction Guarantee */}
            <div className="p-5 rounded-2xl bg-blush-100/50 border border-blush-300 text-center space-y-1.5">
              <span className="font-serif text-lg text-charcoal block">
                The Rivayat Peace-of-Mind Promise
              </span>
              <p className="text-xs text-charcoal-muted font-light">
                We offer free proof revisions until you and your families are 100% overjoyed with your wedding cards.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
