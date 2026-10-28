import React, { useEffect } from 'react';
import { useRouter } from '../../context/RouterContext';
import { EnquiryForm } from './EnquiryForm';
import { X } from 'lucide-react';

export const EnquiryModal: React.FC = () => {
  const { isEnquiryModalOpen, closeEnquiryModal, preselectedService } = useRouter();

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isEnquiryModalOpen) {
        closeEnquiryModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isEnquiryModalOpen, closeEnquiryModal]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isEnquiryModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isEnquiryModalOpen]);

  if (!isEnquiryModalOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Statutory Service Consultation Dialog"
      className="fixed inset-0 z-50 overflow-y-auto bg-[#0D1620]/70 flex items-center justify-center p-4 sm:p-6"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeEnquiryModal();
      }}
    >
      <div className="relative w-full max-w-xl bg-white rounded-xs shadow-2xl border border-[#CCD3DA] my-8 overflow-hidden animate-in fade-in duration-150">
        <button
          type="button"
          onClick={closeEnquiryModal}
          aria-label="Close consultation modal"
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-xs border border-[#CCD3DA] text-[#556371] hover:text-[#121B24] hover:bg-[#F6F7F5] flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <EnquiryForm
          initialService={preselectedService}
          variant="modal"
          onSuccess={() => {}}
        />
      </div>
    </div>
  );
};
