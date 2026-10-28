import React from 'react';
import { ShieldCheck, Award, FileCheck2, Scale, Landmark } from 'lucide-react';

interface SculpturalHeroObjectProps {
  className?: string;
}

export const SculpturalHeroObject: React.FC<SculpturalHeroObjectProps> = ({ className = '' }) => {
  return (
    <div
      className={`relative w-full max-w-[420px] mx-auto select-none ${className}`}
      aria-label="Institutional trust seal representing corporate governance and statutory compliance"
      role="img"
    >
      {/* Outer Card with Soft Shadow and Clean White / Light Slate Framing */}
      <div className="bg-white border-2 border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
        {/* Subtle Decorative Background Seal Arc */}
        <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full border-8 border-slate-100 pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full border-8 border-slate-100/70 pointer-events-none" />

        {/* Central Corporate Seal Lockup */}
        <div className="relative z-10 flex flex-col items-center text-center space-y-5">
          {/* Official Emblem Badge */}
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#0F2942] to-[#1E3A8A] flex items-center justify-center shadow-lg border-4 border-amber-100 text-white relative">
              <Landmark className="w-10 h-10 text-amber-200" />
              {/* Gold Star Accents */}
              <div className="absolute -top-1 right-2 w-3 h-3 bg-amber-400 rotate-45 rounded-xs" />
            </div>
            {/* Trust Ribbon */}
            <div className="absolute -bottom-2 inset-x-0 flex justify-center">
              <span className="px-3 py-0.5 bg-[#0F2942] text-amber-300 border border-amber-400/40 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-xs">
                Est. Practice
              </span>
            </div>
          </div>

          {/* Title & Authority Statement */}
          <div className="space-y-1.5 pt-1">
            <h3 className="font-display text-lg sm:text-xl font-bold text-[#0F2942] tracking-tight">
              Statutory Compliance & Facilitation
            </h3>
            <p className="text-xs text-slate-600 max-w-xs leading-relaxed">
              Preparation, procedural review, and portal lodgement for commercial enterprises across India.
            </p>
          </div>

          {/* 4 Pillars of Facilitation (Clear 2x2 Grid) */}
          <div className="grid grid-cols-2 gap-2.5 w-full pt-2">
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-left flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-[#1E3A8A] shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs font-bold text-slate-900 leading-tight">MCA Filings</span>
                <span className="block text-[11px] text-slate-500">Pvt Ltd & LLP</span>
              </div>
            </div>

            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-left flex items-start gap-2.5">
              <Award className="w-4 h-4 text-[#B45309] shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs font-bold text-slate-900 leading-tight">Intellectual Prop.</span>
                <span className="block text-[11px] text-slate-500">Trademarks & IP</span>
              </div>
            </div>

            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-left flex items-start gap-2.5">
              <FileCheck2 className="w-4 h-4 text-[#1E3A8A] shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs font-bold text-slate-900 leading-tight">Tax Filings</span>
                <span className="block text-[11px] text-slate-500">GST, TDS & Income</span>
              </div>
            </div>

            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-left flex items-start gap-2.5">
              <Scale className="w-4 h-4 text-[#B45309] shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs font-bold text-slate-900 leading-tight">Governance</span>
                <span className="block text-[11px] text-slate-500">Secretarial & ROC</span>
              </div>
            </div>
          </div>

          {/* Bottom Reassurance Banner */}
          <div className="w-full pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
            <span className="flex items-center gap-1.5 text-slate-700">
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
              Direct WhatsApp Guidance
            </span>
            <span className="text-slate-500 font-semibold">Zero Upfront Lock-in</span>
          </div>
        </div>
      </div>
    </div>
  );
};
