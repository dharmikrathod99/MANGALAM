import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, MessageCircle, PhoneCall } from './icons';
import { BRAND_INFO } from '../data/weddingData';

export default function Navbar({ onOpenEnquiry, isVisible = true }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "🌊 3D Hero", href: "#driftlab-hero" },
    { name: "Home", href: "#hero" },
    { name: "Wedding Cards", href: "#gallery" },
    { name: "Collections", href: "#collections" },
    { name: "Studio", href: "#interactive-preview" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Pricing", href: "#pricing" },
    { name: "About Us", href: "#why-choose-us" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (href === '#driftlab-hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          !isVisible
            ? 'opacity-0 -translate-y-full pointer-events-none'
            : isScrolled
            ? 'opacity-100 translate-y-0 bg-ivory-100/95 backdrop-blur-md shadow-sm border-b border-blush-200/60 py-3.5'
            : 'opacity-100 translate-y-0 bg-ivory-100/80 backdrop-blur-sm py-4 border-b border-blush-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Elegant Brand Logo */}
            <a
              href="#hero"
              onClick={(e) => handleLinkClick(e, '#hero')}
              className="group flex flex-col items-start focus:outline-none"
            >
              <span className="font-serif text-2xl sm:text-3xl tracking-[0.18em] text-charcoal font-semibold uppercase group-hover:text-blush-700 transition-colors">
                Rivayat <span className="font-script text-3xl sm:text-4xl normal-case text-gold tracking-normal">&</span> Co.
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.35em] text-charcoal-muted uppercase font-sans -mt-1 group-hover:tracking-[0.4em] transition-all">
                Luxury E-Wedding Studio
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="relative text-sm tracking-wide text-charcoal-soft hover:text-blush-700 font-medium transition-colors py-1 group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gold transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Actions: Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href={`https://wa.me/${BRAND_INFO.contact.whatsappClean}?text=Hello%20Rivayat%20Studio!%20I%20would%20like%20to%20inquire%20about%20a%20luxury%20wedding%20invitation.`}
                target="_blank"
                rel="noopener noreferrer"
                title="Chat on WhatsApp"
                className="p-2.5 rounded-full border border-blush-300 text-charcoal-muted hover:text-emerald-700 hover:border-emerald-300 hover:bg-emerald-50/50 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
              </a>

              <button
                onClick={() => onOpenEnquiry()}
                className="relative inline-flex items-center justify-center px-6 py-2.5 overflow-hidden text-xs sm:text-sm tracking-widest uppercase font-semibold text-charcoal rounded-full border border-gold bg-gradient-to-r from-ivory-100 via-blush-100 to-ivory-100 shadow-sm hover:shadow-md transition-all duration-300 group hover:border-gold-deep"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-gold/20 via-blush-300/30 to-gold/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <Sparkles className="w-3.5 h-3.5 mr-2 text-gold animate-pulse" />
                <span className="relative z-10">Create Your Invitation</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center space-x-2">
              <button
                onClick={() => onOpenEnquiry()}
                className="text-xs px-3 py-1.5 rounded-full bg-blush-100 border border-gold text-charcoal font-medium uppercase tracking-wider"
              >
                Create
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-charcoal hover:bg-blush-100/50 focus:outline-none transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-blush-700" /> : <Menu className="w-6 h-6 text-charcoal" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-40 bg-charcoal/40 backdrop-blur-sm lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`fixed top-0 right-0 w-[85%] max-w-sm h-full bg-ivory-100 shadow-2xl p-6 flex flex-col justify-between transition-transform duration-500 ease-out border-l border-blush-200 ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Brand & Close */}
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-blush-200">
              <div>
                <span className="font-serif text-xl tracking-[0.15em] text-charcoal font-semibold uppercase">
                  Rivayat <span className="font-script text-2xl text-gold">&</span> Co.
                </span>
                <p className="text-[9px] uppercase tracking-[0.25em] text-charcoal-muted">
                  Bespoke E-Wedding Cards
                </p>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 rounded-full hover:bg-blush-100 text-charcoal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <div className="py-6 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-base font-serif text-charcoal hover:text-blush-700 tracking-wide transition-colors py-1 flex items-center justify-between group"
                >
                  <span>{link.name}</span>
                  <span className="text-xs text-gold opacity-0 group-hover:opacity-100 transition-opacity">✦</span>
                </a>
              ))}
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="pt-6 border-t border-blush-200 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry();
              }}
              className="w-full py-3 rounded-full bg-gradient-to-r from-blush-300 via-blush-100 to-gold/30 text-charcoal text-xs tracking-widest uppercase font-semibold border border-gold flex items-center justify-center gap-2 shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-gold" />
              Create Your Invitation
            </button>

            <a
              href={`https://wa.me/${BRAND_INFO.contact.whatsappClean}?text=Hello%20Rivayat!%20I%20would%20like%20to%20discuss%20a%20wedding%20invitation.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-full border border-emerald-500/30 text-emerald-800 text-xs tracking-wider uppercase font-medium flex items-center justify-center gap-2 bg-emerald-50/60"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              WhatsApp Concierge
            </a>

            <div className="text-center pt-2">
              <p className="text-[11px] text-charcoal-muted">
                Handcrafted with love in India • Serving Worldwide
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
