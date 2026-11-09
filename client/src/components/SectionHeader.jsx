import React from 'react';
import { Sparkles } from './icons';
import TechText from './TechText';

export default function SectionHeader({
  badge = 'Bespoke Atelier',
  title = '',
  subtitle = '',
  fontSize = 48,
  className = '',
  showDivider = true
}) {
  return (
    <div className={`text-center max-w-3xl mx-auto mb-14 sm:mb-16 relative z-10 ${className}`.trim()}>
      {/* 1. Pill Badge */}
      {badge && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/75 backdrop-blur-sm border border-[#D8B879]/45 text-[#0b0b10] text-[11px] sm:text-xs uppercase tracking-[0.22em] font-medium mb-3 sm:mb-4 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-[#D8B879]" />
          <span>{badge}</span>
        </div>
      )}

      {/* 2. Interactive TechText Heading */}
      {title && (
        <div className="w-full h-16 sm:h-20 md:h-24 relative flex items-center justify-center my-1">
          <TechText
            text={title}
            fontFamily="'Playfair Display', 'Cormorant Garamond', Georgia, serif"
            fontWeight={500}
            fontSize={fontSize}
            color="#0b0b10"
            accentColor="#D8B879"
            reveal="letter"
            dashLength={3}
            dashGap={2}
            strokeWidth={1.5}
            specks={14}
            clickKick={true}
            draggable={true}
            bounce={0.4}
            guides={false}
            sweep={true}
            speed={0.8}
          />
          {/* Accessible semantic heading for SEO and screen readers */}
          <h2 className="sr-only">{title}</h2>
        </div>
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
    </div>
  );
}

