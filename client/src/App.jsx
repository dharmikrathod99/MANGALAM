import React, { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import CollectionsSection from './components/CollectionsSection';
import FeaturedGallerySection from './components/FeaturedGallerySection';
import InteractiveInvitationStudio from './components/InteractiveInvitationStudio';
import HowItWorksSection from './components/HowItWorksSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import PricingSection from './components/PricingSection';
import TestimonialsSection from './components/TestimonialsSection';
import FaqSection from './components/FaqSection';
import EnquirySection from './components/EnquirySection';
import Footer from './components/Footer';
import FloatingPetalsCanvas from './components/svg/FloatingPetalsCanvas';
import FloatingConcierge from './components/FloatingConcierge';
import DriftlabHero from './components/DriftlabHero';
import BookingModal from './components/BookingModal';
import { Sparkles } from './components/icons';

export default function App() {
  const [selectedStudioDesign, setSelectedStudioDesign] = useState(null);
  const [enquiryPrefill, setEnquiryPrefill] = useState(null);
  const [isPastHero, setIsPastHero] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  // Track whether user has scrolled past the Driftlab hero
  useEffect(() => {
    const handleScroll = () => {
      const studioEl = document.getElementById('wedding-studio');
      if (studioEl) {
        const rect = studioEl.getBoundingClientRect();
        setIsPastHero(rect.top <= 250);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll helper
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Open Enquiry with optional prefilled brief
  const handleOpenEnquiry = (prefillBrief = null) => {
    if (typeof prefillBrief === 'string') {
      setEnquiryPrefill({ preferredStyle: prefillBrief });
    } else if (typeof prefillBrief === 'object' && prefillBrief !== null) {
      setEnquiryPrefill(prefillBrief);
    }
    scrollToSection('contact');
  };

  // When user selects a design from Gallery or Collections to customize
  const handleCustomizeDesign = (design) => {
    setSelectedStudioDesign(design);
    scrollToSection('interactive-preview');
  };

  // When user explores a collection from the 12 Collections grid
  const handleSelectCollection = (collection) => {
    setEnquiryPrefill({
      preferredStyle: collection.title,
      notes: `Interested in the ${collection.title} collection (${collection.subtitle}).`
    });
    scrollToSection('gallery');
  };

  // When user picks a package from Pricing
  const handleSelectPackage = (pkg) => {
    setEnquiryPrefill({
      selectedPackage: pkg.name
    });
    scrollToSection('contact');
  };

  return (
    <div className="relative min-h-screen bg-[#dcd8f4] text-[#0b0b10] font-sans selection:bg-[#fbcfe8] selection:text-[#0b0b10] overflow-x-hidden">

      {/* 1. Driftlab WebGL2 Jellyfish Scroll-Driven Hero */}
      <section id="driftlab-hero" className="relative">
        <DriftlabHero
          onExploreStudio={() => scrollToSection('wedding-studio')}
          onOpenBooking={() => setIsBookingModalOpen(true)}
        />
      </section>

      {/* 2. Seamless Visual Bridge: Transitions naturally from lilac sky into dreamy atelier */}
      <div
        id="wedding-studio"
        className="relative bg-gradient-to-b from-[#dcd8f4] via-[#eae6fc] to-[#f3f0ff] pt-16 pb-8 border-t border-black/5"
      >
        <div className="max-w-4xl mx-auto px-6 text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-[#c8c1ee] text-[#0b0b10] text-xs uppercase tracking-widest font-semibold shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#e5c07b] animate-spin-slow" />
            <span>Welcome to Rivayat & Co. Luxury Studio</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0b0b10] font-normal">
            Heirloom Digital Wedding Invitations
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#4a4660] max-w-xl mx-auto font-light leading-relaxed">
            Scroll ahead to experience our bespoke multi-event suites, interactive wax seal unboxing, live customization studio, and instant WhatsApp broadcasting.
          </p>
          <div className="w-20 h-[1.5px] bg-[#D8B879] mx-auto mt-2" />
        </div>
      </div>

      {/* 3. The Complete Luxury E-Wedding Atelier (No Navbar, matching Hero lilac & pink theme) */}
      <div className="relative">
        {/* Floating Flower Petals (gentle drifting blossoms) */}
        <FloatingPetalsCanvas isVisible={isPastHero} />

        <main>
          {/* Hero Section with interactive wax seal unboxing */}
          <HeroSection
            onOpenEnquiry={() => setIsBookingModalOpen(true)}
            onExplore={() => scrollToSection('gallery')}
          />

          {/* 12 Wedding Invitation Collections */}
          <CollectionsSection
            onSelectCollection={handleSelectCollection}
            onOpenEnquiry={(title) => handleOpenEnquiry(title)}
          />

          {/* Featured Invitation Designs & Filterable Gallery */}
          <FeaturedGallerySection
            onCustomizeDesign={handleCustomizeDesign}
            onOpenEnquiry={(theme) => handleOpenEnquiry(theme)}
          />

          {/* Interactive Invitation Preview Studio with live inputs & WhatsApp simulation */}
          <InteractiveInvitationStudio
            initialDesign={selectedStudioDesign}
            onOpenEnquiryWithData={(data) => handleOpenEnquiry(data)}
          />

          {/* How It Works (4 Steps with bespoke SVG illustrations) */}
          <HowItWorksSection onOpenEnquiry={() => setIsBookingModalOpen(true)} />

          {/* Why Choose Us (8 USPs & Comparison) */}
          <WhyChooseUsSection />

          {/* Pricing & Packages (Configurable prices, INR/USD toggle) */}
          <PricingSection onSelectPackage={handleSelectPackage} />

          {/* Customer Testimonials */}
          <TestimonialsSection />

          {/* FAQ Section (8 Accordion Questions) */}
          <FaqSection onOpenEnquiry={(topic) => handleOpenEnquiry(topic)} />

          {/* Contact & Order Enquiry Form */}
          <EnquirySection
            prefillData={enquiryPrefill}
            onClearPrefill={() => setEnquiryPrefill(null)}
          />
        </main>

        {/* Footer */}
        <Footer
          onSelectCollection={handleSelectCollection}
          onOpenEnquiry={() => setIsBookingModalOpen(true)}
        />

        {/* Floating Concierge (WhatsApp + Quick Book Now Button) */}
        <FloatingConcierge
          onOpenEnquiry={() => setIsBookingModalOpen(true)}
          isVisible={true}
        />
      </div>

      {/* Global Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />

    </div>
  );
}
