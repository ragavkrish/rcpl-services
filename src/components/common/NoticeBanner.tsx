import React from 'react';
import { ShieldCheck } from 'lucide-react';

interface NoticeBannerProps {
  className?: string;
}

export const NoticeBanner: React.FC<NoticeBannerProps> = ({ className = '' }) => {
  return (
    <aside
      aria-label="Candidate Catalogue Notice"
      className={`bg-[#111714] border-b border-[#20483A]/70 py-2.5 px-4 sm:px-6 text-xs text-[#A6ADA7] ${className}`}
    >
      <div className="max-w-[1280px] mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <ShieldCheck className="w-4 h-4 text-[#C5A46D] shrink-0" />
          <p className="leading-snug">
            <span className="font-semibold text-[#FFFFFF] tracking-wide">Candidate Service Catalogue:</span>{' '}
            Listed practice areas and scopes reflect preliminary onboarding specifications awaiting final client confirmation.
          </p>
        </div>
        <div className="hidden lg:flex items-center gap-2 shrink-0 font-mono text-[11px] text-[#C5A46D]/80">
          <span>Enterprise Facilitation & Compliance</span>
        </div>
      </div>
    </aside>
  );
};
