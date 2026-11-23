import React from 'react';
import { Mail, Instagram } from './icons';
import { BRAND_INFO } from '../data/weddingData';

export default function InvitationCtaSection({
  onOpenBooking,
  onOpenEnquiry,
  instagramHandle = "@nimantranstudio",
  email = "contact@nimantranstudio.in",
  offerPrice = "₹1,799",
  originalPrice = "₹2,499"
}) {
  const handleBookingClick = () => {
    if (onOpenBooking) {
      onOpenBooking();
    } else if (onOpenEnquiry) {
      onOpenEnquiry('Custom Wedding Invitation');
    }
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}?subject=Wedding%20Invitation%20Inquiry%20-%20Let's%20Get%20Started`;
  };

  const instagramUrl = instagramHandle.startsWith('@')
    ? `https://instagram.com/${instagramHandle.replace('@', '')}`
    : `https://instagram.com/${instagramHandle}`;

  return (
    <section
      id="get-started"
      aria-label="Let's Get Started"
      className="pt-10 sm:pt-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FDF8EE] via-[#FAF3E7] to-[#F4E5C8] relative overflow-hidden"
    >
      {/* Background Luxury Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[360px] bg-gradient-to-r from-amber-300/15 via-[#D8B879]/20 to-pink-300/15 blur-[120px] pointer-events-none -z-0" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* The Luxury Envelope Silhouette Card */}
        <div className='bg-[#F2E5C9] rounded-[48px] p-2 border border-[#D8B879]/50 shadow-sm overflow-hidden relative transition-all duration-300'>
          <div className="relative rounded-[48px] p-2 border border-[#D8B879]/50 bg-gradient-to-b from-[#F4E5C8] via-[#FAF3E7] to-[#FDF8EE] text-white shadow-2xl border border-[#D8B879]/35 overflow-hidden px-6 py-12 sm:px-12 sm:py-16 md:px-16 md:py-20 text-center">

            {/* Card Content */}
            <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">

              {/* Small Uppercase Kicker */}
              <span className="font-sans text-[11px] sm:text-xs font-semibold tracking-[0.28em] text-[#D8B879] uppercase mb-4 sm:mb-5">
                LET'S GET STARTED
              </span>

              {/* Main Headline */}
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[52px] text-[#000] font-normal tracking-tight leading-[1.18] mb-4 sm:mb-5">
                Your story deserves a beautiful beginning.
              </h2>

              {/* Subtitle / Description */}
              <p className="font-sans text-sm sm:text-base md:text-[17px] text-[#000]/90 font-light leading-relaxed max-w-2xl mb-8 sm:mb-10">
                Share your wedding date and the design you love. We'll take care of the details, so you can get back to the celebration.
              </p>

              {/* CTA Buttons Row */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full sm:w-auto mb-8 sm:mb-10">

                {/* Primary Button: Let's create your invite */}
                <button
                  type="button"
                  onClick={handleBookingClick}
                  className="w-full sm:w-auto px-7 py-3.5 sm:px-8 sm:py-3.5 rounded-xl bg-[#FAF0DB] hover:bg-white text-[#331522] font-sans font-medium text-sm sm:text-base tracking-wide flex items-center justify-center gap-3 transition-all duration-300 shadow-md hover:shadow-xl hover:scale-[1.02] cursor-pointer group"
                >
                  {/* Speech Bubble Icon Matching Reference */}
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-[#331522] transition-transform duration-300 group-hover:scale-110"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                  </svg>
                  <span>Let's create your invite</span>
                </button>

                {/* Secondary Outline Button: Email Us */}
                <button
                  type="button"
                  onClick={handleEmailClick}
                  className="w-full sm:w-auto px-7 py-3.5 sm:px-8 sm:py-3.5 rounded-xl bg-[#FAF0DB] hover:bg-white text-[#331522] font-sans font-medium text-sm sm:text-base tracking-wide flex items-center justify-center gap-3 transition-all duration-300 shadow-md hover:shadow-xl hover:scale-[1.02] cursor-pointer group"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#331522]" />
                  <span>Email Us</span>
                </button>

              </div>

              {/* Pricing Offer & Inclusions Microcopy */}
              <div className="font-sans text-xs sm:text-[13px] text-[#000] font-light flex flex-wrap items-center justify-center gap-x-2 gap-y-1 mb-8 sm:mb-10 text-center">
                <span className="line-through text-black/50">{originalPrice}</span>
                <span className="font-medium text-black">{offerPrice}</span>
                <span>one-time (early customer offer)</span>
                <span className="text-black/35 hidden sm:inline">·</span>
                <span>Two rounds of edits</span>
                <span className="text-black/35 hidden sm:inline">·</span>
                <span>A year of hosting</span>
              </div>

              {/* Social & Direct Contact Links */}
              <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 pt-2 text-xs sm:text-sm text-black/80">

                {/* Instagram Handle Link */}
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <Instagram className="w-4 h-4" />
                  <span className="font-medium tracking-wide">{instagramHandle}</span>
                </a>

                {/* Direct Email Link */}
                <a
                  href={`mailto:${email}`}
                  className="inline-flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  <span className="font-medium tracking-wide">{email}</span>
                </a>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

