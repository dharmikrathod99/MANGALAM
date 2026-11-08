import React from 'react';
import { Sparkles, MessageCircle, Mail, Instagram, Heart, ArrowUp } from './icons';
import { BRAND_INFO, COLLECTIONS } from '../data/weddingData';
import { DecorativeCorner } from './svg/WeddingMotifs';

export default function Footer({ onSelectCollection, onOpenEnquiry }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FFFDF9] border-t border-blush-200 text-charcoal pt-20 pb-12 relative overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-32 bg-blush-100/50 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-blush-200">
          
          {/* Col 1: Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="space-y-1">
              <span className="font-serif text-3xl tracking-[0.16em] text-charcoal font-semibold uppercase block">
                Rivayat <span className="font-script text-4xl text-gold normal-case">&</span> Co.
              </span>
              <p className="text-xs uppercase tracking-[0.3em] text-charcoal-muted">
                Luxury E-Wedding Studio • Bespoke Stationery
              </p>
            </div>

            <p className="font-sans text-xs sm:text-sm text-charcoal-muted font-light leading-relaxed max-w-sm">
              Crafting heirloom-quality digital wedding stationery and animated suites for modern celebrations. Honoring Indian cultural traditions with contemporary editorial aesthetics.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={`https://wa.me/${BRAND_INFO.contact.whatsappClean}?text=Hello%20Rivayat%20Studio!`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-ivory-50 border border-blush-300 flex items-center justify-center text-charcoal hover:text-[#25D366] hover:border-emerald-400 hover:bg-emerald-50 transition-all shadow-xs"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href={`https://instagram.com/${BRAND_INFO.contact.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-ivory-50 border border-blush-300 flex items-center justify-center text-charcoal hover:text-blush-700 hover:border-blush-400 hover:bg-blush-100 transition-all shadow-xs"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${BRAND_INFO.contact.email}`}
                className="w-9 h-9 rounded-full bg-ivory-50 border border-blush-300 flex items-center justify-center text-charcoal hover:text-gold hover:border-gold hover:bg-amber-50 transition-all shadow-xs"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>

              {/* Pinterest Link */}
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-ivory-50 border border-blush-300 flex items-center justify-center text-xs font-serif font-bold text-charcoal hover:text-red-700 hover:border-red-300 transition-all shadow-xs"
                title="Pinterest"
              >
                P
              </a>
            </div>

            <div className="pt-2 text-xs text-charcoal-muted">
              <p>Studios: Mumbai • New Delhi • Serving Worldwide</p>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-charcoal">
              Atelier
            </h4>
            <ul className="space-y-2 text-xs text-charcoal-muted">
              <li>
                <a href="#hero" className="hover:text-blush-700 transition-colors">Home</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-blush-700 transition-colors">Wedding Cards</a>
              </li>
              <li>
                <a href="#collections" className="hover:text-blush-700 transition-colors">12 Collections</a>
              </li>
              <li>
                <a href="#interactive-preview" className="hover:text-blush-700 transition-colors">Live Preview Studio</a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-blush-700 transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-blush-700 transition-colors">Packages & Quotes</a>
              </li>
              <li>
                <a href="#why-choose-us" className="hover:text-blush-700 transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-blush-700 transition-colors">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Wedding Invitation Categories (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-charcoal">
              Signature Collections
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-2 text-xs text-charcoal-muted">
              {COLLECTIONS.slice(0, 10).map((col) => (
                <button
                  key={col.id}
                  onClick={() => onSelectCollection(col)}
                  className="text-left hover:text-blush-700 transition-colors truncate"
                  title={col.title}
                >
                  {col.title.replace(' Wedding Invitations', '').replace(' Invitations', '')}
                </button>
              ))}
            </div>
            <button
              onClick={() => onOpenEnquiry('Custom Category Commission')}
              className="text-[11px] text-gold-deep font-medium hover:underline block pt-1"
            >
              + Commission a Custom Aesthetic
            </button>
          </div>

          {/* Col 4: Concierge & Order CTA (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-charcoal">
              Start Project
            </h4>
            <p className="text-xs text-charcoal-muted font-light leading-relaxed">
              Ready to create your dream digital invitation suite?
            </p>
            <button
              onClick={() => onOpenEnquiry()}
              className="w-full py-2.5 rounded-full bg-charcoal text-ivory-100 text-[11px] uppercase tracking-wider font-semibold hover:bg-blush-700 transition-colors shadow-xs"
            >
              Create Invitation
            </button>
            <button
              onClick={scrollToTop}
              className="w-full py-2 rounded-full border border-blush-300 text-charcoal text-[11px] uppercase tracking-wider font-medium hover:bg-ivory-50 transition-colors flex items-center justify-center gap-1.5"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>

        </div>

        {/* Bottom Legal / Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-charcoal-muted gap-4">
          <p>
            © {new Date().getFullYear()} Rivayat & Co. All rights reserved. Handcrafted with devotion in India.
          </p>

          <div className="flex items-center space-x-6 text-[11px]">
            <span className="hover:text-charcoal cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-charcoal cursor-pointer">Terms of Bespoke Service</span>
            <span>•</span>
            <span className="hover:text-charcoal cursor-pointer">WhatsApp Dispatch Guide</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
