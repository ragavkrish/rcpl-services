import React from 'react';
import { useEntrance } from '../../context/EntranceContext';

export const EntranceCurtain: React.FC = () => {
  const { entrancePhase } = useEntrance();

  if (entrancePhase === 'complete') return null;

  const isRevealingHero = entrancePhase === 'hero_reveal';

  return (
    <div
      role="presentation"
      aria-hidden="true"
      className={`fixed inset-0 z-50 pointer-events-none flex items-center justify-center bg-[#111714] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isRevealingHero
          ? 'opacity-0 -translate-y-4 scale-[1.01]'
          : 'opacity-100 translate-y-0 scale-100'
      }`}
    >
      {/* Background subtle radial aura */}
      <div className="absolute inset-0 bg-radial from-[#20483A]/20 via-transparent to-transparent pointer-events-none" />

      {/* Centered Wordmark Lockup */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        {/* Wordmark with upward movement & fade */}
        <div
          className={`flex items-center gap-3 transition-all duration-500 ease-out ${
            entrancePhase === 'wordmark'
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-2'
          }`}
          style={{ animation: 'rcplWordmarkFadeUp 0.55s cubic-bezier(0.16, 1, 0.3, 1) forwards' }}
        >
          <div className="w-2.5 h-2.5 bg-[#C5A46D] transform rotate-45 shadow-[0_0_12px_rgba(197,164,109,0.5)]" />
          <span className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-[#FFFFFF]">
            RCPL <span className="font-light text-[#A6ADA7]">Services</span>
          </span>
        </div>

        {/* Thin Expanding Champagne Line */}
        <div className="mt-4 w-40 sm:w-56 h-[1.5px] bg-[#20483A]/50 relative overflow-hidden rounded-full">
          <div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C5A46D] to-transparent"
            style={{
              animation: 'rcplLineExpand 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
              transformOrigin: 'center',
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes rcplWordmarkFadeUp {
          0% {
            opacity: 0;
            transform: translateY(12px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes rcplLineExpand {
          0% {
            transform: scaleX(0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: scaleX(1);
            opacity: 0.9;
          }
        }
      `}</style>
    </div>
  );
};
