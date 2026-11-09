import React from 'react';
import { Sparkles, ArrowRight } from './icons';
import { HOW_IT_WORKS_STEPS } from '../data/weddingData';
import {
  StepIllustrationOne,
  StepIllustrationTwo,
  StepIllustrationThree,
  StepIllustrationFour
} from './svg/StepIllustrations';
import SectionHeader from './SectionHeader';
import AnimatedContent from './AnimatedContent';

export default function HowItWorksSection({ onOpenEnquiry }) {
  const stepIllustrations = [
    <StepIllustrationOne key="1" className="w-32 h-32" />,
    <StepIllustrationTwo key="2" className="w-32 h-32" />,
    <StepIllustrationThree key="3" className="w-32 h-32" />,
    <StepIllustrationFour key="4" className="w-32 h-32" />
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-[#f3f0ff] via-[#eae6fc] to-[#f3f0ff] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badge="Effortless 4-Step Process"
          title="How Your Digital Invitation Comes to Life"
          subtitle="From the initial design selection to the joyous moment your guests open their WhatsApp invites, we handle every nuance with bespoke care."
        />

        {/* 4 Steps Grid with Staggered Motion */}
        <AnimatedContent
          distance={60}
          stagger={0.12}
          duration={0.8}
          ease="power3.out"
          threshold={0.1}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative"
        >
          
          {/* Connector Line behind steps on desktop */}
          <div className="hidden lg:block absolute top-24 left-[12%] right-[12%] h-[1px] border-t border-dashed border-gold/50 -z-0" />

          {HOW_IT_WORKS_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="group relative bg-white/80 rounded-2xl p-6 sm:p-7 border border-blush-200 shadow-xs hover:shadow-xl transition-all duration-500 flex flex-col justify-between z-10 hover:-translate-y-2"
            >
              <div>
                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif text-3xl text-gold/70 font-normal">
                    {step.step}
                  </span>
                  <span className="text-[11px] font-sans uppercase tracking-wider text-charcoal-muted px-2.5 py-0.5 rounded-full bg-blush-50 border border-blush-200">
                    {step.time}
                  </span>
                </div>

                {/* Custom Original SVG Illustration */}
                <div className="flex justify-center my-3 group-hover:scale-105 transition-transform duration-500">
                  {stepIllustrations[idx]}
                </div>

                {/* Step Title & Description */}
                <div className="text-center mt-3 space-y-2">
                  <h3 className="font-serif text-xl sm:text-2xl text-charcoal font-normal">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal-muted font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Step indicator arrow */}
              <div className="pt-5 mt-4 border-t border-blush-100 flex items-center justify-center text-gold text-xs font-medium">
                <span>Phase {step.step} of 04</span>
              </div>
            </div>
          ))}
        </AnimatedContent>

        {/* Start Your Order CTA banner */}
        <AnimatedContent distance={30} duration={0.6} threshold={0.15}>
          <div className="mt-16 text-center">
            <button
              onClick={() => onOpenEnquiry()}
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-charcoal text-ivory-100 text-xs sm:text-sm uppercase tracking-widest font-semibold hover:bg-blush-700 transition-all duration-300 shadow-md hover:shadow-xl group"
            >
              <span>Begin Step 1: Choose or Design</span>
              <ArrowRight className="w-4 h-4 text-gold group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </AnimatedContent>

      </div>
    </section>
  );
}
