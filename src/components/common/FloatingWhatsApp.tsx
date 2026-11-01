import React from 'react';
import { useRouter } from '../../context/RouterContext';
import { MessageSquare } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const { openEnquiryModal, route } = useRouter();
  const isServiceDetail = route.name === 'service-detail';

  return (
    <div
      className={`fixed z-40 transition-all duration-200 ${
        isServiceDetail
          ? 'bottom-20 right-4 sm:bottom-6 sm:right-6'
          : 'bottom-4 right-4 sm:bottom-6 sm:right-6'
      }`}
    >
      <button
        type="button"
        onClick={() => openEnquiryModal()}
        aria-label="Direct consultation on WhatsApp"
        title="Direct consultation on WhatsApp"
        className="group flex items-center justify-center gap-2.5 px-4 py-3 min-h-[44px] min-w-[44px] bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-xl border border-[#20ba5a] transition-all cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#25D366] active:scale-[0.98]"
      >
        <MessageSquare className="w-4 h-4 text-white fill-white shrink-0" />
        <span className="text-xs font-bold tracking-wide pr-1">
          Chat with Us
        </span>
      </button>
    </div>
  );
};
