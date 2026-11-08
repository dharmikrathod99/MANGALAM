import React, { useEffect, useRef, useState } from 'react';

export default function FloatingPetalsCanvas({ isVisible = true }) {
  const canvasRef = useRef(null);
  const [isEnabled, setIsEnabled] = useState(true);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setIsReducedMotion(true);
      setIsEnabled(false);
    }
  }, []);

  useEffect(() => {
    if (!isEnabled || isReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Realistic petal objects
    const petalColors = [
      'rgba(248, 221, 229, 0.75)', // Blush Pink
      'rgba(235, 192, 206, 0.65)', // Soft Rose
      'rgba(255, 253, 248, 0.8)',  // Ivory Jasmine
      'rgba(216, 184, 121, 0.45)', // Champagne Gold shimmer
    ];

    const petalCount = window.innerWidth < 768 ? 16 : 32;
    const petals = [];

    for (let i = 0; i < petalCount; i++) {
      petals.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 8 + 6,
        speedY: Math.random() * 0.7 + 0.35,
        speedX: Math.sin(Math.random() * Math.PI) * 0.4 - 0.2,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 1.2,
        color: petalColors[Math.floor(Math.random() * petalColors.length)],
        swayAmplitude: Math.random() * 25 + 10,
        swayFrequency: Math.random() * 0.015 + 0.005,
        swayOffset: Math.random() * 100,
      });
    }

    let tick = 0;
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      tick++;

      petals.forEach((p) => {
        p.y += p.speedY;
        p.x += Math.sin(tick * p.swayFrequency + p.swayOffset) * 0.5 + p.speedX;
        p.rotation += p.rotationSpeed;

        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }
        if (p.x > width + 20) p.x = -20;
        if (p.x < -20) p.x = width + 20;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);

        // Draw delicate rose petal curve
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(-p.size / 2, -p.size, -p.size, p.size / 2, 0, p.size);
        ctx.bezierCurveTo(p.size, p.size / 2, p.size / 2, -p.size, 0, 0);
        ctx.fill();

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isEnabled, isReducedMotion]);

  if (isReducedMotion || !isVisible) return null;

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-10 transition-opacity duration-1000"
        style={{ opacity: isEnabled ? 0.85 : 0 }}
      />
      {/* Discreet floating toggle button */}
      <button
        onClick={() => setIsEnabled(!isEnabled)}
        title={isEnabled ? "Pause floating petals" : "Resume floating petals"}
        aria-label={isEnabled ? "Pause floating petals" : "Resume floating petals"}
        className="fixed bottom-6 left-6 z-40 bg-white/80 hover:bg-white backdrop-blur-md border border-blush-300 text-charcoal-muted hover:text-blush-700 px-3 py-1.5 rounded-full text-xs flex items-center gap-1.5 shadow-sm transition-all duration-300 opacity-70 hover:opacity-100"
      >
        <span className={`w-2 h-2 rounded-full ${isEnabled ? 'bg-blush-500 animate-pulse' : 'bg-charcoal-muted'}`} />
        <span>{isEnabled ? 'Petals: On' : 'Petals: Off'}</span>
      </button>
    </>
  );
}

