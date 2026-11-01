import React from 'react';
import { useRouter } from '../../context/RouterContext';
import { MessageSquare } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const { openEnquiryModal, route } = useRouter();
  const isServiceDetail = route.name === 'service-detail';

  return (
    <div
      className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 transition-all duration-200 ${
        isServiceDetail ? 'hidden md:block' : 'block'
      }`}
    >
      <button
        type="button"
        onClick={() => openEnquiryModal()}
        aria-label="Direct consultation on WhatsApp"
        title="Direct consultation on WhatsApp"
        className="group flex items-center justify-center gap-2.5 px-4 py-3 min-h-[44px] min-w-[44px] bg-[#152E4D] hover:bg-[#0D1E33] text-white rounded-full shadow-xl border border-slate-700/80 transition-all cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#152E4D] active:scale-[0.98] whitespace-nowrap"
      >
        <MessageSquare className="w-4 h-4 text-[#B28348] shrink-0" />
        <span className="text-xs font-bold tracking-wide pr-1">
          Chat with Us
        </span>
      </button>
    </div>
  );
};
