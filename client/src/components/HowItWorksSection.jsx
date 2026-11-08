import React from 'react';
import { Sparkles, ArrowRight } from './icons';
import { HOW_IT_WORKS_STEPS } from '../data/weddingData';
import {
  StepIllustrationOne,
  StepIllustrationTwo,
  StepIllustrationThree,
  StepIllustrationFour
} from './svg/StepIllustrations';

export default function HowItWorksSection({ onOpenEnquiry }) {
  const stepIllustrations = [
    <StepIllustrationOne key="1" className="w-32 h-32" />,
    <StepIllustrationTwo key="2" className="w-32 h-32" />,
    <StepIllustrationThree key="3" className="w-32 h-32" />,
    <StepIllustrationFour key="4" className="w-32 h-32" />
  ];

  return (
    <section id="how-it-works" className="py-24 bg-ivory-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blush-100/80 border border-blush-200 text-blush-900 text-xs tracking-[0.2em] uppercase font-medium">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            Effortless 4-Step Process
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal font-normal tracking-tight">
            How Your Digital Invitation Comes to Life
          </h2>
          <p className="font-sans text-base sm:text-lg text-charcoal-muted font-light leading-relaxed">
            From the initial design selection to the joyous moment your guests open their WhatsApp invites, we handle every nuance with bespoke care.
          </p>
          <div className="w-24 h-[1px] bg-gold mx-auto mt-4" />
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
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

        </div>

        {/* Start Your Order CTA banner */}
        <div className="mt-16 text-center">
          <button
            onClick={() => onOpenEnquiry()}
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-charcoal text-ivory-100 text-xs sm:text-sm uppercase tracking-widest font-semibold hover:bg-blush-700 transition-all duration-300 shadow-md hover:shadow-xl group"
          >
            <span>Begin Step 1: Choose or Design</span>
            <ArrowRight className="w-4 h-4 text-gold group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}
