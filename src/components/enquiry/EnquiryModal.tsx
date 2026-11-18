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
          transition={{ duration: 0.18 }}
          className="fixed inset-0 z-50 overflow-y-auto bg-[#0D1620]/75 sm:backdrop-blur-[2px] flex items-end sm:items-center justify-center p-0 sm:p-6"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeEnquiryModal();
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-xl bg-white rounded-t-2xl sm:rounded-xl shadow-2xl border-t sm:border border-[#CCD3DA] sm:my-auto max-h-[92dvh] overflow-y-auto overscroll-contain"
          >
            {/* Native mobile bottom-sheet handle */}
            <div className="sm:hidden pt-2.5 pb-0.5 flex justify-center" aria-hidden="true">
              <span className="w-10 h-1 rounded-full bg-slate-300" />
            </div>

            <button
              type="button"
              onClick={closeEnquiryModal}
              aria-label="Close consultation modal"
              className="absolute top-3 right-3 z-10 w-10 h-10 sm:w-11 sm:h-11 min-h-[40px] min-w-[40px] rounded-lg border border-slate-200 text-[#556371] hover:text-[#121B24] hover:bg-[#F6F7F5] flex items-center justify-center transition-colors cursor-pointer active:scale-95 bg-white/95"
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
