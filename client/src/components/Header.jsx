import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, MessageCircle } from './icons';
import { BRAND_INFO } from '../data/weddingData';

export default function Header({
  onOpenEnquiry,
  isVisible = true
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [imgError, setImgError] = useState(false);

  // Most useful curated links split across left and right
  const leftLinks = [
    { name: 'Collections', href: '#collections' },
    { name: 'Designs', href: '#gallery' },
  ];

  const rightLinks = [
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'FAQ', href: '#faq' },
  ];

  const allLinks = [...leftLinks, ...rightLinks];

  // Track scroll position: transparent at top, sticky with bg on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Detect active section on scroll
      const scrollPosition = window.scrollY + 200;
      for (let i = allLinks.length - 1; i >= 0; i--) {
        const section = document.querySelector(allLinks[i].href);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(allLinks[i].href);
          return;
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle ESC key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Smooth scroll handler
  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (href === '#' || href === '#wedding-studio') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const targetEl = document.querySelector(href);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const whatsappUrl = `https://wa.me/${BRAND_INFO.contact.whatsappClean}?text=${encodeURIComponent(
    'Hello Nimantran Studio! I would like to inquire about creating a luxury digital wedding invitation.'
  )}`;

  return (
    <>
      {/* Main Header: Transparent by default, sticky with bg when scrolled */}
      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${!isVisible
          ? 'opacity-0 -translate-y-full pointer-events-none'
          : isScrolled
            ? 'bg-[#FAF5EA]/95 backdrop-blur-md shadow-md border-b border-[#D8B879]/35 py-2.5 sm:py-3'
            : 'bg-transparent border-transparent py-4 sm:py-6 shadow-none'
          }`}
      >
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 items-center">

            {/* LEFT COLUMN: Desktop Left Links / Mobile Menu Trigger */}
            <div className="flex items-center justify-start">
              {/* Desktop Left Nav Links */}
              <nav aria-label="Left Navigation" className="hidden lg:flex items-center space-x-6 xl:space-x-8">
                {leftLinks.map((link) => {
                  const isActive = activeSection === link.href;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`relative py-1 text-xs xl:text-sm tracking-[0.16em] uppercase font-medium transition-all duration-200 group ${isActive
                        ? 'text-blush-700 font-semibold'
                        : 'text-[#0b0b10]/85 hover:text-[#0b0b10]'
                        }`}
                    >
                      <span>{link.name}</span>
                      <span
                        className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gold rounded-full transition-all duration-300 ${isActive
                          ? 'opacity-100 scale-x-100'
                          : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
                          }`}
                      />
                    </a>
                  );
                })}
              </nav>

              {/* Mobile Menu Hamburger Button */}
              <div className="lg:hidden">
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className={`p-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-gold ${isScrolled ? 'hover:bg-white/60' : 'bg-white/40 backdrop-blur-xs hover:bg-white/60'
                    }`}
                  aria-expanded={mobileMenuOpen}
                  aria-label="Toggle Navigation Menu"
                >
                  {mobileMenuOpen ? (
                    <X className="w-6 h-6 text-blush-700" />
                  ) : (
                    <Menu className="w-6 h-6 text-[#0b0b10]" />
                  )}
                </button>
              </div>
            </div>

            {/* CENTER COLUMN: Big Centered Logo */}
            <div className="flex items-center justify-center text-center">
              <a
                href="#wedding-studio"
                onClick={(e) => handleNavClick(e, '#wedding-studio')}
                className="group flex flex-col items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-xl transition-transform hover:scale-105"
                aria-label="Nimantran Studio - Home"
              >
                {!imgError ? (
                  <img
                    src="/nimantran-logo.png"
                    alt="Nimantran Studio"
                    onError={() => setImgError(true)}
                    className={`w-auto object-contain transition-all duration-300 drop-shadow-sm ${isScrolled
                      ? 'h-11 sm:h-13 md:h-14'
                      : 'h-16 sm:h-20 md:h-24'
                      }`}
                  />
                ) : (
                  <div className="flex flex-col items-center py-1">
                    <span
                      className={`font-serif font-bold tracking-[0.2em] text-[#0b0b10] uppercase transition-all duration-300 ${isScrolled ? 'text-lg sm:text-xl' : 'text-2xl sm:text-3xl md:text-4xl'
                        }`}
                    >
                      Nimantran
                    </span>
                    <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.35em] text-[#0b0b10]/60 -mt-0.5">
                      Studio Atelier
                    </span>
                  </div>
                )}
              </a>
            </div>

            {/* RIGHT COLUMN: Desktop Right Links & CTA / Mobile Quick CTA */}
            <div className="flex items-center justify-end space-x-3 sm:space-x-4">
              {/* Desktop Right Nav Links */}
              <nav aria-label="Right Navigation" className="hidden lg:flex items-center space-x-6 xl:space-x-8 mr-2">
                {rightLinks.map((link) => {
                  const isActive = activeSection === link.href;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`relative py-1 text-xs xl:text-sm tracking-[0.16em] uppercase font-medium transition-all duration-200 group ${isActive
                        ? 'text-blush-700 font-semibold'
                        : 'text-[#0b0b10]/85 hover:text-[#0b0b10]'
                        }`}
                    >
                      <span>{link.name}</span>
                      <span
                        className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gold rounded-full transition-all duration-300 ${isActive
                          ? 'opacity-100 scale-x-100'
                          : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
                          }`}
                      />
                    </a>
                  );
                })}
              </nav>

              {/* WhatsApp Concierge Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Chat with WhatsApp Concierge"
                className="p-2 sm:p-2.5 rounded-full border border-[#D8B879]/50 bg-white/70 hover:bg-emerald-50 hover:border-emerald-400 text-[#0b0b10]/85 hover:text-emerald-700 transition-all duration-300 shadow-2xs hover:shadow-xs group cursor-pointer"
                aria-label="WhatsApp Concierge"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366] group-hover:scale-110 transition-transform" />
              </a>

              {/* Book / Create Invitation CTA Button */}
              <button
                type="button"
                onClick={() => onOpenEnquiry && onOpenEnquiry()}
                className="relative inline-flex items-center justify-center px-4 sm:px-5 py-2 sm:py-2.5 overflow-hidden text-[11px] sm:text-xs tracking-[0.16em] uppercase font-semibold text-white rounded-full bg-[#0b0b10] hover:bg-[#2c293e] shadow-xs hover:shadow-md transition-all duration-300 group cursor-pointer border border-[#D8B879]/30"
              >
                <Sparkles className="w-3.5 h-3.5 mr-1.5 sm:mr-2 text-gold group-hover:rotate-12 transition-transform duration-300" />
                <span className="hidden sm:inline">Book Invitation</span>
                <span className="sm:hidden">Book</span>
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#0b0b10]/50 backdrop-blur-xs lg:hidden transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden={!mobileMenuOpen}
      >
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className={`fixed top-0 right-0 w-[84%] max-w-sm h-full bg-[#FAF5EA] shadow-2xl p-6 flex flex-col justify-between transition-transform duration-400 ease-out border-l border-[#D8B879]/40 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Brand & Close Button */}
          <div>
            <div className="flex items-center justify-between pb-5 border-b border-[#D8B879]/30">
              <div className="flex items-center gap-2.5">
                {!imgError ? (
                  <img
                    src="/nimantran-logo.png"
                    alt="Nimantran Studio"
                    className="h-10 w-auto object-contain"
                  />
                ) : (
                  <div>
                    <span className="font-serif text-lg tracking-[0.15em] text-[#0b0b10] font-semibold uppercase block">
                      Nimantran Studio
                    </span>
                    <p className="text-[9px] uppercase tracking-[0.25em] text-[#0b0b10]/60">
                      Bespoke Wedding Suites
                    </p>
                  </div>
                )}
              </div>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full hover:bg-white/80 text-[#0b0b10] transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Nav Links */}
            <nav className="py-6 flex flex-col space-y-2">
              {allLinks.map((link) => {
                const isActive = activeSection === link.href;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`text-base font-serif tracking-wide py-2.5 px-3 rounded-lg transition-colors flex items-center justify-between group ${isActive
                      ? 'bg-white/80 text-blush-700 font-semibold'
                      : 'text-[#0b0b10]/90 hover:bg-white/50 hover:text-blush-700'
                      }`}
                  >
                    <span>{link.name}</span>
                    <span
                      className={`text-xs text-gold transition-opacity ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                        }`}
                    >
                      ✦
                    </span>
                  </a>
                );
              })}
            </nav>
          </div>

          {/* Bottom Drawer Actions */}
          <div className="pt-5 border-t border-[#D8B879]/30 space-y-3">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenEnquiry) onOpenEnquiry();
              }}
              className="w-full py-3.5 rounded-full bg-[#0b0b10] hover:bg-[#2c293e] text-white text-xs tracking-widest uppercase font-semibold flex items-center justify-center gap-2 shadow-sm border border-[#D8B879]/30 transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-gold" />
              <span>Book Your Invitation</span>
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-full border border-emerald-500/40 text-emerald-800 text-xs tracking-wider uppercase font-medium flex items-center justify-center gap-2 bg-emerald-50/70 hover:bg-emerald-100/60 transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>WhatsApp Concierge</span>
            </a>

            <div className="text-center pt-2">
              <p className="text-[10px] uppercase tracking-[0.18em] text-[#0b0b10]/50">
                Handcrafted with devotion • Worldwide Delivery
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
