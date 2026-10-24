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
      aria-label="Service Enquiry Dialog"
      className="fixed inset-0 z-50 overflow-y-auto bg-[#111714]/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeEnquiryModal();
      }}
    >
      <div className="relative w-full max-w-xl bg-[#111714] rounded-[20px] shadow-2xl border border-[#20483A] my-8 animate-in fade-in duration-200 overflow-hidden">
        <button
          type="button"
          onClick={closeEnquiryModal}
          aria-label="Close enquiry modal"
          className="absolute top-5 right-5 z-10 w-9 h-9 rounded-full border border-[#20483A] text-[#A6ADA7] hover:text-[#FFFFFF] hover:bg-[#20483A] hover:border-[#C5A46D]/60 flex items-center justify-center transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#C5A46D] cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <EnquiryForm
          initialService={preselectedService}
          variant="modal"
          onSuccess={() => {
            // Keep open so they see confirmation, or allow manual close
          }}
        />
      </div>
    </div>
  );
};
