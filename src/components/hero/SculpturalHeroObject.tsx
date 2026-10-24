import React, { useEffect, useRef, useState } from 'react';

interface SculpturalHeroObjectProps {
  className?: string;
}

export const SculpturalHeroObject: React.FC<SculpturalHeroObjectProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check reduced motion
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(motionQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    motionQuery.addEventListener('change', handleMotionChange);

    // Pause animation when hero leaves viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      motionQuery.removeEventListener('change', handleMotionChange);
      observer.disconnect();
    };
  }, []);

  // Pointer move handler (desktop only, disabled on touch/reduced motion)
  useEffect(() => {
    if (prefersReducedMotion || !isVisible) return;

    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let animationFrameId: number;

    const handlePointerMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      // Normalized between -1 and 1
      const normX = (e.clientX / innerWidth) * 2 - 1;
      const normY = (e.clientY / innerHeight) * 2 - 1;

      // Restrained tilt angle (max ±12 degrees)
      targetX = normY * -12;
      targetY = normX * 16;
    };

    const updateSmoothTilt = () => {
      // Damped interpolation for fluid weight feel
      currentX += (targetX - currentX) * 0.06;
      currentY += (targetY - currentY) * 0.06;

      setTilt({ x: currentX, y: currentY });
      animationFrameId = requestAnimationFrame(updateSmoothTilt);
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    animationFrameId = requestAnimationFrame(updateSmoothTilt);

    return () => {
      window.removeEventListener('mousemove', handlePointerMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible, prefersReducedMotion]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full aspect-square max-w-[440px] mx-auto flex items-center justify-center select-none ${className}`}
      style={{ perspective: '1200px' }}
      aria-label="Art-directed sculptural celestial geometry representing corporate foundation and compliance"
      role="img"
    >
      {/* Background Soft Organic Circular Aperture Halo */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#20483A]/30 via-[#111714]/40 to-transparent blur-2xl pointer-events-none" />

      {/* Outer Curved Boundary Accent (Organic Oval Rings) */}
      <div className="absolute inset-2 sm:inset-4 rounded-full border border-[#20483A]/40 pointer-events-none" />
      <div className="absolute inset-8 sm:inset-10 rounded-full border border-dashed border-[#C5A46D]/20 pointer-events-none" />

      {/* 3D Sculptural Core Rig */}
      <div
        className="relative w-64 h-64 sm:w-72 sm:h-72 transition-transform duration-150 ease-out flex items-center justify-center"
        style={{
          transformStyle: 'preserve-3d',
          transform: prefersReducedMotion
            ? 'rotateX(18deg) rotateY(-20deg)'
            : `rotateX(${18 + tilt.x}deg) rotateY(${-22 + tilt.y}deg)`,
          animation:
            !prefersReducedMotion && isVisible
              ? 'sculptureCelestialOscillation 20s ease-in-out infinite alternate'
              : 'none',
        }}
      >
        {/* Layer 1: Outer Champagne Planetary Orbital Ring */}
        <div
          className="absolute w-72 h-72 sm:w-80 sm:h-80 rounded-full border-[1.5px] border-[#C5A46D]/60 pointer-events-none shadow-[0_0_25px_rgba(197,164,109,0.2)]"
          style={{
            transform: 'rotateX(72deg) rotateY(-18deg) translateZ(-10px)',
          }}
        >
          {/* Orbital Satellite Node */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#FFFFFF] border-2 border-[#C5A46D] shadow-[0_0_12px_#FFFFFF]" />
          <div className="absolute bottom-4 left-6 w-2 h-2 rounded-full bg-[#C5A46D] opacity-80" />
        </div>

        {/* Layer 2: Counter Orbital Ring (Deep Forest & Dashed Champagne) */}
        <div
          className="absolute w-60 h-60 sm:w-68 sm:h-68 rounded-full border border-dashed border-[#20483A] pointer-events-none"
          style={{
            transform: 'rotateX(-65deg) rotateY(25deg) translateZ(15px)',
          }}
        >
          <div className="absolute right-2 top-1/2 w-2.5 h-2.5 rounded-full bg-[#20483A] border border-[#C5A46D]" />
        </div>

        {/* Layer 3: Central Deep Forest Sculptural Polyhedron (Faceted Monolith) */}
        <div
          className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-[28px] border border-[#C5A46D]/50 bg-gradient-to-br from-[#20483A] via-[#163329] to-[#0D1512] shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-sm flex items-center justify-center overflow-hidden"
          style={{
            transform: 'translateZ(30px) rotateZ(12deg)',
          }}
        >
          {/* Radial sheen highlight */}
          <div className="absolute inset-0 bg-radial from-[#C5A46D]/20 via-transparent to-transparent opacity-80" />
          
          {/* Inner Geometric Diagonals */}
          <div className="absolute inset-x-0 top-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#C5A46D]/60 to-transparent" />
          <div className="absolute inset-y-0 left-1/2 w-[1px] bg-gradient-to-b from-transparent via-[#C5A46D]/60 to-transparent" />

          {/* Central Champagne Rhombus Core */}
          <div className="w-12 h-12 border-2 border-[#C5A46D] bg-[#111714]/80 transform rotate-45 flex items-center justify-center shadow-[0_0_15px_rgba(197,164,109,0.3)]">
            <div className="w-4 h-4 bg-[#C5A46D] rounded-full" />
          </div>

          {/* Monogram tag */}
          <div className="absolute bottom-2.5 inset-x-0 text-center font-mono text-[9px] text-[#A6ADA7]/80 tracking-widest uppercase">
            RCPL · ADVISORY
          </div>
        </div>

        {/* Layer 4: Floating Circular Glass Shield with Radial Markers */}
        <div
          className="absolute w-48 h-48 sm:w-52 sm:h-52 rounded-full border border-[#FFFFFF]/25 bg-gradient-to-tr from-[#FFFFFF]/5 via-[#20483A]/15 to-transparent backdrop-blur-xs pointer-events-none shadow-lg"
          style={{
            transform: 'translateZ(65px) rotateZ(-24deg)',
          }}
        >
          {/* Concentric tick marks */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#C5A46D]" />
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#C5A46D]" />
          <div className="absolute left-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#C5A46D]" />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#C5A46D]" />
        </div>

        {/* Layer 5: Concentric Thin Outer Meridian Ring */}
        <div
          className="absolute w-64 h-64 sm:w-72 sm:h-72 rounded-full border border-[#C5A46D]/30 pointer-events-none"
          style={{
            transform: 'translateZ(85px) rotateX(15deg) rotateY(-10deg)',
          }}
        />
      </div>

      {/* Floating Status Indicator Pill with Circular Accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-[#111714]/90 border border-[#20483A] rounded-full text-[11px] font-mono text-[#A6ADA7] flex items-center gap-2.5 shadow-lg backdrop-blur-md">
        <span className="w-2 h-2 rounded-full bg-[#C5A46D] animate-pulse" />
        <span>Celestial Monolith · Hover to Tilt</span>
      </div>

      <style>{`
        @keyframes sculptureCelestialOscillation {
          0% {
            transform: rotateX(14deg) rotateY(-26deg) rotateZ(0deg);
          }
          50% {
            transform: rotateX(22deg) rotateY(-15deg) rotateZ(3deg);
          }
          100% {
            transform: rotateX(12deg) rotateY(-30deg) rotateZ(-3deg);
          }
        }
      `}</style>
    </div>
  );
};
