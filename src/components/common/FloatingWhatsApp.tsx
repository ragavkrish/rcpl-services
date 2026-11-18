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
        className="group flex items-center justify-center sm:gap-2.5 w-12 h-12 sm:w-auto sm:h-auto sm:px-4 sm:py-3 min-h-[44px] min-w-[44px] bg-[#152E4D] hover:bg-[#0D1E33] text-white rounded-full shadow-lg sm:shadow-xl border border-slate-700/80 transition-all cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#152E4D] active:scale-[0.96] whitespace-nowrap"
      >
        <MessageSquare className="w-5 h-5 sm:w-4 sm:h-4 text-[#D99A32] shrink-0" />
        <span className="hidden sm:inline text-xs font-bold tracking-wide pr-1">
          Chat with Us
        </span>
      </button>
    </div>
  );
};
