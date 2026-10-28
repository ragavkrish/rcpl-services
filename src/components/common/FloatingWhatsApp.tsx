import React from 'react';
import { useRouter } from '../../context/RouterContext';
import { MessageSquare } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const { openEnquiryModal } = useRouter();

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        type="button"
        onClick={() => openEnquiryModal()}
        aria-label="Direct consultation on WhatsApp"
        title="Direct consultation on WhatsApp"
        className="group flex items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-xl border border-[#20ba5a] transition-all cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#25D366] active:scale-[0.98]"
      >
        <MessageSquare className="w-4 h-4 text-white fill-white" />
        <span className="text-xs font-bold tracking-wide pr-1">
          Chat with Us
        </span>
      </button>
    </div>
  );
};
