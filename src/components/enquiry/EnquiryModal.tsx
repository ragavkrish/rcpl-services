import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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

  return (
    <AnimatePresence>
      {isEnquiryModalOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Statutory Service Consultation Dialog"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 overflow-y-auto bg-[#0D1620]/75 backdrop-blur-[2px] flex items-center justify-center p-4 sm:p-6"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeEnquiryModal();
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 10 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-xl bg-white rounded-xl shadow-2xl border border-[#CCD3DA] my-auto max-h-[92vh] overflow-y-auto"
          >
            <button
              type="button"
              onClick={closeEnquiryModal}
              aria-label="Close consultation modal"
              className="absolute top-3 right-3 z-10 w-11 h-11 min-h-[44px] min-w-[44px] rounded-lg border border-[#CCD3DA] text-[#556371] hover:text-[#121B24] hover:bg-[#F6F7F5] flex items-center justify-center transition-colors cursor-pointer active:scale-95 bg-white/90"
            >
              <X className="w-5 h-5" />
            </button>

            <EnquiryForm
              initialService={preselectedService}
              variant="modal"
              onSuccess={() => {}}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
