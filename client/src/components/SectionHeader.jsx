import React from 'react';
import { Sparkles } from './icons';
import AnimatedContent from './AnimatedContent';

export default function SectionHeader({
  badge = 'Bespoke Atelier',
  title = '',
  subtitle = '',
  fontSize = 48,
  className = '',
  showDivider = true
}) {
  return (
    <AnimatedContent
      distance={45}
      direction="vertical"
      duration={0.8}
      ease="power3.out"
      threshold={0.12}
      className={`text-center max-w-3xl mx-auto mb-14 sm:mb-16 relative z-10 ${className}`.trim()}
    >
      {/* 1. Pill Badge */}
      {badge && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/75 backdrop-blur-sm border border-[#D8B879]/45 text-[#0b0b10] text-[11px] sm:text-xs uppercase tracking-[0.22em] font-medium mb-3 sm:mb-4 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-[#D8B879]" />
          <span>{badge}</span>
        </div>
      )}

      {/* 2. Editorial Serif Heading (Matching User's Reference Style Exactly) */}
      {title && (
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#0b0b10] font-normal tracking-tight leading-tight px-2 my-2 sm:my-3">
          {title}
        </h2>
      )}

      {/* 3. Subtitle Description */}
      {subtitle && (
        <p className="font-sans text-sm sm:text-base md:text-lg text-[#0b0b10]/70 font-light leading-relaxed max-w-2xl mx-auto px-4 mt-2">
          {subtitle}
        </p>
      )}

      {/* 4. Elegant Gold Divider Line */}
      {showDivider && (
        <div className="w-16 h-0.5 bg-[#D8B879]/60 mx-auto mt-5 sm:mt-6 rounded-full" />
      )}
    </AnimatedContent>
  );
}

