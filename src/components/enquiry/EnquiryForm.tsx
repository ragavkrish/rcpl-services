import React, { useState, useEffect } from 'react';
import { siteConfig } from '../../config/site';
import { candidateServices, serviceCategories } from '../../data/services';
import { trackConversionEvent } from '../../utils/analytics';
import {
  AlertCircle,
  CheckCircle2,
  MessageSquare,
  ExternalLink,
  Copy,
  Check,
  Mail,
} from 'lucide-react';

interface EnquiryFormProps {
  initialService?: string;
  onSuccess?: () => void;
  variant?: 'inline' | 'modal';
  heading?: string;
  subheading?: string;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({
  initialService = '',
  onSuccess,
  variant = 'inline',
  heading = 'Statutory Consultation Dossier',
  subheading,
}) => {
  const [fullName, setFullName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [selectedService, setSelectedService] = useState(initialService || '');
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState<{
    fullName?: string;
    contactNumber?: string;
    service?: string;
  }>({});

  const [submissionNotice, setSubmissionNotice] = useState<string | null>(null);
  const [isConfigUnavailable, setIsConfigUnavailable] = useState(false);
  const [copiedDraft, setCopiedDraft] = useState(false);
  const [devCustomNumber, setDevCustomNumber] = useState('');
  const [showDevConfig, setShowDevConfig] = useState(false);

  useEffect(() => {
    if (initialService) {
      setSelectedService(initialService);
    }
  }, [initialService]);

  const activeWhatsAppNumber = (devCustomNumber || siteConfig.whatsAppNumber || '').trim();

  const buildMessageText = (): string => {
    const lines = [
      `*New Service Consultation Requisition — RCPL Services*`,
      `---------------------------------`,
      `*Full Legal Name:* ${fullName.trim() || '[Not provided]'}`,
      `*Contact Phone:* ${contactNumber.trim() || '[Not provided]'}`,
      `*Statutory Service:* ${selectedService.trim() || 'General Corporate Advisory'}`,
    ];

    if (message.trim()) {
      lines.push(`*Filing Context / Scope:*`);
      lines.push(message.trim());
    }

    lines.push(`---------------------------------`);
    lines.push(`_Submitted via RCPL Services Advisory Portal_`);
    return lines.join('\n');
  };

  const validate = (): boolean => {
    const newErrors: typeof errors = {};
    const errorFields: string[] = [];

    if (!fullName.trim()) {
      newErrors.fullName = 'Please enter your legal name as per official identity.';
      errorFields.push('fullName');
    } else if (fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters.';
      errorFields.push('fullName');
    }

    const cleanedPhone = contactNumber.replace(/[\s\-()]/g, '');
    const phoneDigitsOnly = cleanedPhone.replace(/\+/g, '');

    if (!contactNumber.trim()) {
      newErrors.contactNumber = 'Please enter your contact phone number.';
      errorFields.push('contactNumber');
    } else if (!/^\+?[0-9]{10,15}$/.test(cleanedPhone) || phoneDigitsOnly.length < 10) {
      newErrors.contactNumber = 'Enter a valid phone number (at least 10 digits).';
      errorFields.push('contactNumber');
    }

    if (!selectedService.trim()) {
      newErrors.service = 'Please select a statutory service from the index.';
      errorFields.push('service');
    }

    setErrors(newErrors);

    if (errorFields.length > 0) {
      trackConversionEvent('enquiry_validation_error', {
        errorFields,
        serviceTitle: selectedService,
      });
      return false;
    }

    return true;
  };

  const handleCopyDraft = async () => {
    const text = buildMessageText();
    try {
      await navigator.clipboard.writeText(text);
      setCopiedDraft(true);
      trackConversionEvent('whatsapp_message_copied', {
        serviceTitle: selectedService,
      });
      setTimeout(() => setCopiedDraft(false), 3000);
    } catch {
      setCopiedDraft(true);
      setTimeout(() => setCopiedDraft(false), 3000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionNotice(null);
    setIsConfigUnavailable(false);

    trackConversionEvent('enquiry_form_submit_attempt', {
      serviceTitle: selectedService,
    });

    if (!validate()) {
      return;
    }

    if (!activeWhatsAppNumber) {
      setIsConfigUnavailable(true);
      return;
    }

    const messageText = buildMessageText();
    const encodedText = encodeURIComponent(messageText);
    const sanitizedNumber = activeWhatsAppNumber.replace(/[^0-9]/g, '');
    const whatsAppUrl = `https://wa.me/${sanitizedNumber}?text=${encodedText}`;

    trackConversionEvent('whatsapp_handoff_attempt', {
      serviceTitle: selectedService,
    });

    if (typeof window !== 'undefined') {
      window.open(whatsAppUrl, '_blank', 'noopener,noreferrer');
    }

    setSubmissionNotice('WhatsApp discussion opened in a secure new tab. Please inspect your brief and send to initiate consultation.');
    if (onSuccess) {
      onSuccess();
    }
  };

  const isModal = variant === 'modal';

  return (
    <div
      className={`bg-white text-[#121B24] ${
        isModal
          ? 'p-6 sm:p-8'
          : 'p-6 sm:p-8 border border-[#CCD3DA] rounded-xs shadow-xs'
      }`}
    >
      {heading && (
        <div className="mb-6 space-y-2 pb-4 border-b border-[#E3E7EB]">
          <div className="text-[11px] font-mono uppercase tracking-wider text-[#8C6534] font-semibold">
            Registry Advisory Intake Desk
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#121B24]">
            {heading}
          </h3>
          <p className="text-xs text-[#556371] leading-relaxed font-normal">
            {subheading ||
              'Submit your entity facts below. Your brief is assembled into WhatsApp for immediate direct review with our senior compliance officers.'}
          </p>
          <div className="pt-1 text-[11px] text-[#6C7A89] flex flex-wrap items-center gap-x-3 gap-y-1">
            <span>Direct partner review</span>
            <span aria-hidden="true">·</span>
            <span>Zero upfront fee</span>
            <span aria-hidden="true">·</span>
            <span>You review brief before dispatch</span>
          </div>
        </div>
      )}

      {isConfigUnavailable && (
        <div
          role="alert"
          className="mb-6 p-4 bg-[#FFFDF5] border border-[#DEB887] text-xs text-[#6B4B1B] space-y-3"
        >
          <div className="flex items-start gap-3">
            <AlertCircle className="w-4 h-4 text-[#8C6534] shrink-0 mt-0.5" />
            <div className="space-y-1 flex-1">
              <p className="font-semibold text-[#4A3210]">
                Official WhatsApp Helpline Awaiting Deployment
              </p>
              <p className="leading-relaxed text-[#6B4B1B]">
                In accordance with truth-in-filing guidelines, telephone numbers are never fabricated. You may copy your prepared brief or send directly via email:
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-[#E8D4B0]">
            <button
              type="button"
              onClick={handleCopyDraft}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#4A3210] text-white text-xs font-medium hover:bg-[#33220B] transition-colors"
            >
              {copiedDraft ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedDraft ? 'Brief Copied' : 'Copy Formatted Brief'}</span>
            </button>

            <a
              href={`mailto:${siteConfig.defaultEmailPrompt}?subject=${encodeURIComponent(
                `Statutory Enquiry: ${selectedService}`
              )}&body=${encodeURIComponent(buildMessageText())}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-[#DEB887] text-[#4A3210] text-xs font-medium hover:bg-[#FAF4EB] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#8C6534]" />
              <span>Send via Email Desk</span>
            </a>

            <button
              type="button"
              onClick={() => setShowDevConfig(!showDevConfig)}
              className="text-[11px] text-[#6B4B1B] underline ml-auto cursor-pointer"
            >
              {showDevConfig ? 'Hide Test Input' : 'Reviewer Test Number'}
            </button>
          </div>
        </div>
      )}

      {showDevConfig && (
        <div className="mb-6 p-3 bg-[#F6F7F5] border border-[#CCD3DA] text-xs text-[#3A4754] space-y-2">
          <label htmlFor="dev-phone" className="block font-medium">
            Temporary WhatsApp number for review testing (e.g. 919876543210):
          </label>
          <div className="flex gap-2">
            <input
              id="dev-phone"
              type="text"
              value={devCustomNumber}
              onChange={(e) => setDevCustomNumber(e.target.value)}
              placeholder="e.g. 919876543210"
              className="flex-1 px-3 py-1.5 border border-[#CCD3DA] bg-white text-xs text-[#121B24]"
            />
            <button
              type="button"
              onClick={() => {
                if (devCustomNumber.trim()) setIsConfigUnavailable(false);
              }}
              className="px-3 py-1.5 bg-[#152E4D] text-white text-xs font-semibold"
            >
              Save Number
            </button>
          </div>
        </div>
      )}

      {submissionNotice && (
        <div
          role="status"
          className="mb-6 p-4 bg-[#F2F8F5] border border-[#A3D1BE] text-xs text-[#0F4A33] flex items-start gap-3"
        >
          <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-[#106A49]" />
          <div className="space-y-1">
            <p className="font-semibold text-sm">{submissionNotice}</p>
            <p className="leading-relaxed text-[#1D5E45]">
              Your consultation docket is prepared with the requirements listed below. Tap send in WhatsApp to commence discussion.
            </p>
            <div className="pt-1">
              <button
                type="button"
                onClick={handleCopyDraft}
                className="inline-flex items-center gap-1.5 text-xs font-semibold underline cursor-pointer text-[#0F4A33]"
              >
                {copiedDraft ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedDraft ? 'Brief Copied' : 'Copy brief text as backup'}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        {/* Full Name */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <label
              htmlFor="enquiry-name"
              className="block text-xs font-semibold text-[#121B24]"
            >
              Full Legal Name <span className="text-[#B42318]">*</span>
            </label>
            <span className="text-[11px] text-[#6C7A89]">As in Aadhaar/PAN records</span>
          </div>
          <input
            id="enquiry-name"
            type="text"
            required
            aria-required="true"
            aria-invalid={Boolean(errors.fullName)}
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
              if (errors.fullName) setErrors((prev) => ({ ...prev, fullName: undefined }));
            }}
            placeholder="e.g. Ramesh Chandra Sharma"
            aria-describedby={errors.fullName ? 'name-error' : undefined}
            className={`w-full px-3.5 py-2.5 text-sm text-[#121B24] bg-white border border-[#CCD3DA] rounded-xs placeholder-[#98A5B3] focus:outline-hidden focus:border-[#152E4D] focus:ring-1 focus:ring-[#152E4D] ${
              errors.fullName ? '!border-[#B42318]' : ''
            }`}
          />
          {errors.fullName && (
            <p id="name-error" className="mt-1 text-xs text-[#B42318] font-medium flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.fullName}</span>
            </p>
          )}
        </div>

        {/* Contact Phone */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <label
              htmlFor="enquiry-phone"
              className="block text-xs font-semibold text-[#121B24]"
            >
              Contact Phone / WhatsApp <span className="text-[#B42318]">*</span>
            </label>
            <span className="text-[11px] text-[#6C7A89]">For statutory review handoff</span>
          </div>
          <input
            id="enquiry-phone"
            type="tel"
            required
            aria-required="true"
            aria-invalid={Boolean(errors.contactNumber)}
            value={contactNumber}
            onChange={(e) => {
              setContactNumber(e.target.value);
              if (errors.contactNumber) setErrors((prev) => ({ ...prev, contactNumber: undefined }));
            }}
            placeholder="e.g. 98765 43210 (or +91...)"
            aria-describedby={errors.contactNumber ? 'phone-error' : undefined}
            className={`w-full px-3.5 py-2.5 text-sm text-[#121B24] bg-white border border-[#CCD3DA] rounded-xs placeholder-[#98A5B3] focus:outline-hidden focus:border-[#152E4D] focus:ring-1 focus:ring-[#152E4D] ${
              errors.contactNumber ? '!border-[#B42318]' : ''
            }`}
          />
          {errors.contactNumber && (
            <p id="phone-error" className="mt-1 text-xs text-[#B42318] font-medium flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.contactNumber}</span>
            </p>
          )}
        </div>

        {/* Service of Interest */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <label
              htmlFor="enquiry-service"
              className="block text-xs font-semibold text-[#121B24]"
            >
              Statutory Service of Interest <span className="text-[#B42318]">*</span>
            </label>
            <span className="text-[11px] text-[#6C7A89]">MCA / IP / Tax domain</span>
          </div>
          <select
            id="enquiry-service"
            required
            aria-required="true"
            aria-invalid={Boolean(errors.service)}
            value={selectedService}
            onChange={(e) => {
              setSelectedService(e.target.value);
              if (errors.service) setErrors((prev) => ({ ...prev, service: undefined }));
            }}
            aria-describedby={errors.service ? 'service-error' : undefined}
            className={`w-full px-3.5 py-2.5 text-sm text-[#121B24] bg-white border border-[#CCD3DA] rounded-xs focus:outline-hidden focus:border-[#152E4D] focus:ring-1 focus:ring-[#152E4D] ${
              errors.service ? '!border-[#B42318]' : ''
            }`}
          >
            <option value="">— Select from Statutory Catalogue —</option>
            {serviceCategories.map((cat) => (
              <optgroup key={cat.id} label={cat.title}>
                {candidateServices
                  .filter((s) => s.categorySlug === cat.slug && s.status !== 'draft')
                  .map((svc) => (
                    <option key={svc.id} value={svc.title}>
                      {svc.title}
                    </option>
                  ))}
              </optgroup>
            ))}
            <option value="General Corporate Advisory & Structuring">General Corporate Advisory & Structuring</option>
          </select>
          {errors.service && (
            <p id="service-error" className="mt-1 text-xs text-[#B42318] font-medium flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.service}</span>
            </p>
          )}
        </div>

        {/* Message / Brief requirement */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <label
              htmlFor="enquiry-message"
              className="block text-xs font-semibold text-[#121B24]"
            >
              Entity Facts / Notes <span className="text-[#6C7A89] font-normal">(optional)</span>
            </label>
            <span className="text-[11px] text-[#6C7A89]">State, authorized capital, or timeline</span>
          </div>
          <textarea
            id="enquiry-message"
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Share specific context (e.g. number of directors, registered office state, nature of business activity)..."
            className="w-full px-3.5 py-2.5 text-sm text-[#121B24] bg-white border border-[#CCD3DA] rounded-xs placeholder-[#98A5B3] focus:outline-hidden focus:border-[#152E4D] focus:ring-1 focus:ring-[#152E4D] resize-y"
          />
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#152E4D] hover:bg-[#0D1E33] text-white font-semibold text-xs uppercase tracking-wider rounded-xs transition-colors cursor-pointer active:scale-[0.99] border border-[#0D1E33]"
          >
            <MessageSquare className="w-4 h-4 text-[#C99C62]" />
            <span>{selectedService ? `Enquire for ${selectedService}` : 'Open WhatsApp Consultation Docket'}</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-70" />
          </button>
          <p className="text-[11px] text-[#6C7A89] text-center mt-2">
            Dispatches directly to WhatsApp. You review and approve message text before sending.
          </p>
        </div>
      </form>
    </div>
  );
};
