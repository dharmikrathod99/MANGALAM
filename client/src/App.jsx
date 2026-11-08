import React, { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import CollectionsSection from './components/CollectionsSection';
import FeaturedGallerySection from './components/FeaturedGallerySection';
import HowItWorksSection from './components/HowItWorksSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import WhatWeUseSection from './components/WhatWeUseSection';
import SuiteFeaturesSection from './components/SuiteFeaturesSection';
import FaqSection from './components/FaqSection';
import EnquirySection from './components/EnquirySection';
import Footer from './components/Footer';
import FloatingPetalsCanvas from './components/svg/FloatingPetalsCanvas';
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
    setSelectedStudioDesign(design?.id || design);
    setIsBookingModalOpen(true);
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

      {/* 2. The Complete Luxury E-Wedding Atelier (Seamless Flow from Lilac Sky) */}
      <div className="relative">
        {/* Floating Flower Petals (gentle drifting blossoms) */}
        <FloatingPetalsCanvas isVisible={true} />

        <main>
          {/* Hero Section with interactive wax seal unboxing */}
          <HeroSection
            id="wedding-studio"
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

          {/* How It Works (4 Steps with bespoke SVG illustrations) */}
          <HowItWorksSection onOpenEnquiry={() => setIsBookingModalOpen(true)} />

          {/* Why Choose Us (8 USPs & Comparison) */}
          <WhyChooseUsSection />

          {/* What We Use Section (Framer Brand Logos & Tech Stack) */}
          <WhatWeUseSection onOpenBooking={() => setIsBookingModalOpen(true)} />

          {/* Interactive Suite Features & Inclusions */}
          <SuiteFeaturesSection onOpenBooking={() => setIsBookingModalOpen(true)} />

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
      </div>

      {/* Global Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        initialDesignId={typeof selectedStudioDesign === 'string' ? selectedStudioDesign : selectedStudioDesign?.id}
      />

    </div>
  );
}
