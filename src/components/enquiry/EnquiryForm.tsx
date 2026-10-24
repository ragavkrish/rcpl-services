import React, { useState, useEffect } from 'react';
import { siteConfig } from '../../config/site';
import { candidateServices, serviceCategories } from '../../data/services';
import { trackConversionEvent } from '../../utils/analytics';
import {
  AlertCircle,
  CheckCircle2,
  MessageSquare,
  ExternalLink,
  HelpCircle,
  Copy,
  Check,
  Mail,
  ShieldCheck,
  Sparkles,
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
  heading = 'Ask About This Service',
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

  // Sync selectedService if initialService changes (e.g. user opens modal for different services)
  useEffect(() => {
    if (initialService) {
      setSelectedService(initialService);
    }
  }, [initialService]);

  // Active WhatsApp number: from siteConfig or client dev preview override
  const activeWhatsAppNumber = (devCustomNumber || siteConfig.whatsAppNumber || '').trim();

  // Helper to build formatted message
  const buildMessageText = (): string => {
    const lines = [
      `*New Service Enquiry — RCPL Services*`,
      `---------------------------------`,
      `*Full Name:* ${fullName.trim() || '[Not provided]'}`,
      `*Contact Number:* ${contactNumber.trim() || '[Not provided]'}`,
      `*Service Requested:* ${selectedService.trim() || 'General Consultation'}`,
    ];

    if (message.trim()) {
      lines.push(`*Requirement Context:*`);
      lines.push(message.trim());
    }

    lines.push(`---------------------------------`);
    lines.push(`_Initiated via RCPL Services Modern Prestige Desk_`);
    return lines.join('\n');
  };

  const validate = (): boolean => {
    const newErrors: typeof errors = {};
    const errorFields: string[] = [];

    if (!fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
      errorFields.push('fullName');
    } else if (fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters.';
      errorFields.push('fullName');
    }

    // Phone validation: digits with optional leading +, min 10 digits
    const cleanedPhone = contactNumber.replace(/[\s\-()]/g, '');
    const phoneDigitsOnly = cleanedPhone.replace(/\+/g, '');

    if (!contactNumber.trim()) {
      newErrors.contactNumber = 'Please enter your contact phone number.';
      errorFields.push('contactNumber');
    } else if (!/^\+?[0-9]{10,15}$/.test(cleanedPhone) || phoneDigitsOnly.length < 10) {
      newErrors.contactNumber = 'Please enter a valid phone number (at least 10 digits, e.g. 98765 43210).';
      errorFields.push('contactNumber');
    }

    if (!selectedService.trim()) {
      newErrors.service = 'Please select a service from the catalogue.';
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
      // Fallback if clipboard API is restricted
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

    // Check if the business WhatsApp number is configured
    if (!activeWhatsAppNumber) {
      setIsConfigUnavailable(true);
      return;
    }

    const messageText = buildMessageText();
    const encodedText = encodeURIComponent(messageText);
    const sanitizedNumber = activeWhatsAppNumber.replace(/[^0-9]/g, '');
    const whatsAppUrl = `https://wa.me/${sanitizedNumber}?text=${encodedText}`;

    // Track handoff attempt (strictly labeled as attempt, not finished lead)
    trackConversionEvent('whatsapp_handoff_attempt', {
      serviceTitle: selectedService,
    });

    // Open WhatsApp in safe new tab
    if (typeof window !== 'undefined') {
      window.open(whatsAppUrl, '_blank', 'noopener,noreferrer');
    }

    setSubmissionNotice('WhatsApp chat launched. Remember to tap "Send" in WhatsApp to deliver your enquiry.');
    if (onSuccess) {
      onSuccess();
    }
  };

  const isModal = variant === 'modal';

  return (
    <div
      className={`${
        isModal
          ? 'bg-[#111714] text-[#FFFFFF] p-6 sm:p-8'
          : 'bg-[#FFFFFF] text-[#111714] p-8 sm:p-10 border border-[#D8DDD7] shadow-sm'
      } rounded-[20px] relative transition-all`}
    >
      <div className="mb-6 space-y-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#C5A46D]" />
          <span className="font-mono text-[11px] uppercase tracking-wider text-[#C5A46D] font-semibold">
            Direct WhatsApp Consultation Desk
          </span>
        </div>
        <h3
          className={`font-display text-2xl sm:text-3xl font-bold tracking-tight ${
            isModal ? 'text-[#FFFFFF]' : 'text-[#111714]'
          }`}
        >
          {heading}
        </h3>
        <p className={`text-xs sm:text-sm leading-relaxed ${isModal ? 'text-[#A6ADA7]' : 'text-[#52616B]'}`}>
          {subheading ||
            'Submit your contact details and service requirement below. Your brief is preformatted into WhatsApp, where you review and send it directly.'}
        </p>

        {/* Conversion reassurance pills */}
        <div className="pt-2 flex flex-wrap items-center gap-3 text-[11px]">
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${
            isModal ? 'bg-[#20483A]/50 text-[#C5A46D] border border-[#20483A]' : 'bg-[#F5F2E9] text-[#20483A] border border-[#D8DDD7]'
          }`}>
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Zero obligation or payment</span>
          </span>
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${
            isModal ? 'bg-[#20483A]/50 text-[#C5A46D] border border-[#20483A]' : 'bg-[#F5F2E9] text-[#20483A] border border-[#D8DDD7]'
          }`}>
            <Sparkles className="w-3.5 h-3.5" />
            <span>Review brief before sending</span>
          </span>
        </div>
      </div>

      {/* Unavailable configuration state banner if client has not provided number */}
      {isConfigUnavailable && (
        <div
          role="alert"
          className="mb-6 p-4 bg-amber-50 border border-amber-300 rounded-[12px] text-xs text-amber-900 space-y-3"
        >
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div className="space-y-1 flex-1">
              <p className="font-semibold text-amber-900">
                Official Business WhatsApp Number Awaiting Client Deployment
              </p>
              <p className="leading-relaxed text-amber-800">
                In strict adherence to truth-in-advertising guidelines, RCPL Services never guesses or invents telephone numbers. The approved business WhatsApp number is awaiting client deployment.
              </p>
              <p className="pt-1 text-[11px] text-amber-700 font-medium">
                You can copy your formatted brief right now or route your enquiry via email:
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-amber-200">
            <button
              type="button"
              onClick={handleCopyDraft}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-900 text-white rounded-full text-xs font-medium hover:bg-amber-950 transition-colors"
            >
              {copiedDraft ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedDraft ? 'Brief Copied!' : 'Copy Formatted Brief'}</span>
            </button>

            <a
              href={`mailto:${siteConfig.defaultEmailPrompt}?subject=${encodeURIComponent(
                `Service Enquiry: ${selectedService}`
              )}&body=${encodeURIComponent(buildMessageText())}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-amber-300 text-amber-900 rounded-full text-xs font-medium hover:bg-amber-100 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-amber-700" />
              <span>Send via Email Desk</span>
            </a>

            <button
              type="button"
              onClick={() => setShowDevConfig(!showDevConfig)}
              className="text-[11px] text-amber-800 underline hover:text-amber-950 ml-auto"
            >
              {showDevConfig ? 'Hide Test Input' : 'Enter test WhatsApp number'}
            </button>
          </div>
        </div>
      )}

      {/* Reviewer test helper */}
      {showDevConfig && (
        <div className="mb-6 p-4 bg-slate-100 border border-slate-300 rounded-[12px] text-xs text-slate-800 space-y-2">
          <label htmlFor="dev-phone" className="block font-medium">
            Temporary WhatsApp Number for review testing (country code + digits, e.g. 919876543210):
          </label>
          <div className="flex gap-2">
            <input
              id="dev-phone"
              type="text"
              value={devCustomNumber}
              onChange={(e) => setDevCustomNumber(e.target.value)}
              placeholder="e.g. 919876543210"
              className="flex-1 px-3 py-2 border border-slate-300 rounded-[8px] bg-white text-xs text-[#111714]"
            />
            <button
              type="button"
              onClick={() => {
                if (devCustomNumber.trim()) {
                  setIsConfigUnavailable(false);
                }
              }}
              className="px-4 py-2 bg-[#20483A] text-white rounded-full text-xs font-semibold hover:bg-[#163329]"
            >
              Save Number
            </button>
          </div>
        </div>
      )}

      {/* Post-launch feedback banner */}
      {submissionNotice && (
        <div
          role="status"
          className="mb-6 p-4 bg-emerald-50 border border-emerald-300 rounded-[12px] text-xs text-[#166534] flex items-start gap-3 shadow-xs animate-in fade-in duration-200"
        >
          <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-[#166534]" />
          <div className="space-y-1">
            <p className="font-semibold">{submissionNotice}</p>
            <p className="text-emerald-800 leading-relaxed">
              Your draft message contains your requirements and contact information. Simply tap the green send button in WhatsApp to start your direct discussion.
            </p>
            <div className="pt-1">
              <button
                type="button"
                onClick={handleCopyDraft}
                className="inline-flex items-center gap-1.5 text-xs text-[#166534] font-medium underline cursor-pointer hover:text-emerald-950"
              >
                {copiedDraft ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedDraft ? 'Copied to clipboard' : 'Copy message text to clipboard as backup'}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        {/* Full Name */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label
              htmlFor="enquiry-name"
              className={`block text-[11px] font-mono uppercase tracking-wider ${
                isModal ? 'text-[#C5A46D]' : 'text-[#20483A] font-semibold'
              }`}
            >
              Full Name <span className="text-[#B42318]">*</span>
            </label>
            <span className="text-[10px] text-[#A6ADA7]">As shown on official identity</span>
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
            placeholder="e.g. Vikramaditya Sharma"
            aria-describedby={errors.fullName ? 'name-error' : undefined}
            className={`w-full px-3.5 py-2.5 rounded-[8px] text-sm transition-colors ${
              isModal
                ? 'bg-[#163329]/40 border border-[#20483A] text-[#FFFFFF] placeholder-[#A6ADA7]/50 focus:border-[#C5A46D] focus:ring-1 focus:ring-[#C5A46D]'
                : 'bg-white border border-[#D8DDD7] text-[#111714] placeholder-[#A6ADA7] focus:border-[#20483A] focus:ring-1 focus:ring-[#20483A]'
            } ${errors.fullName ? '!border-[#B42318]' : ''}`}
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
          <div className="flex items-center justify-between mb-1.5">
            <label
              htmlFor="enquiry-phone"
              className={`block text-[11px] font-mono uppercase tracking-wider ${
                isModal ? 'text-[#C5A46D]' : 'text-[#20483A] font-semibold'
              }`}
            >
              Contact Number <span className="text-[#B42318]">*</span>
            </label>
            <span className="text-[10px] text-[#A6ADA7]">WhatsApp active number</span>
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
            className={`w-full px-3.5 py-2.5 rounded-[8px] text-sm transition-colors ${
              isModal
                ? 'bg-[#163329]/40 border border-[#20483A] text-[#FFFFFF] placeholder-[#A6ADA7]/50 focus:border-[#C5A46D] focus:ring-1 focus:ring-[#C5A46D]'
                : 'bg-white border border-[#D8DDD7] text-[#111714] placeholder-[#A6ADA7] focus:border-[#20483A] focus:ring-1 focus:ring-[#20483A]'
            } ${errors.contactNumber ? '!border-[#B42318]' : ''}`}
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
          <div className="flex items-center justify-between mb-1.5">
            <label
              htmlFor="enquiry-service"
              className={`block text-[11px] font-mono uppercase tracking-wider ${
                isModal ? 'text-[#C5A46D]' : 'text-[#20483A] font-semibold'
              }`}
            >
              Service of Interest <span className="text-[#B42318]">*</span>
            </label>
            <span className="text-[10px] text-[#A6ADA7]">Preselected from page</span>
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
            className={`w-full px-3.5 py-2.5 rounded-[8px] text-sm transition-colors ${
              isModal
                ? 'bg-[#111714] border border-[#20483A] text-[#FFFFFF] focus:border-[#C5A46D] focus:ring-1 focus:ring-[#C5A46D]'
                : 'bg-white border border-[#D8DDD7] text-[#111714] focus:border-[#20483A] focus:ring-1 focus:ring-[#20483A]'
            } ${errors.service ? '!border-[#B42318]' : ''}`}
          >
            <option value="">— Select a service from catalogue —</option>
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
            <option value="General Consultation & Guidance">General Consultation & Guidance</option>
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
          <div className="flex items-center justify-between mb-1.5">
            <label
              htmlFor="enquiry-message"
              className={`block text-[11px] font-mono uppercase tracking-wider ${
                isModal ? 'text-[#C5A46D]' : 'text-[#20483A] font-semibold'
              }`}
            >
              Requirement Brief <span className="text-[#A6ADA7] font-normal lowercase">(optional)</span>
            </label>
            <span className="text-[10px] text-[#A6ADA7]">Specific state, scope, or timeline</span>
          </div>
          <textarea
            id="enquiry-message"
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Share any specific context (e.g. business activity, number of partners/directors, state of operation)..."
            className={`w-full px-3.5 py-2.5 rounded-[8px] text-sm transition-colors resize-y ${
              isModal
                ? 'bg-[#163329]/40 border border-[#20483A] text-[#FFFFFF] placeholder-[#A6ADA7]/50 focus:border-[#C5A46D] focus:ring-1 focus:ring-[#C5A46D]'
                : 'bg-white border border-[#D8DDD7] text-[#111714] placeholder-[#A6ADA7] focus:border-[#20483A] focus:ring-1 focus:ring-[#20483A]'
            }`}
          />
        </div>

        {/* Submission Notice & Legal Safeguards */}
        <div className="pt-1">
          <p className="text-xs text-[#A6ADA7] leading-relaxed flex items-start gap-1.5">
            <HelpCircle className="w-3.5 h-3.5 text-[#C5A46D] shrink-0 mt-0.5" />
            <span>
              Tapping below formats and opens your brief in WhatsApp. You will review everything and click send directly inside WhatsApp to initiate your conversation.
            </span>
          </p>
        </div>

        {/* Submit CTA button */}
        <div className="pt-2">
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#20483A] hover:bg-[#2A5C4A] border border-[#C5A46D]/60 text-white font-display font-semibold text-xs uppercase tracking-wider rounded-full transition-all duration-200 hover:shadow-[0_0_20px_-3px_rgba(197,164,109,0.35)] cursor-pointer active:scale-[0.98]"
          >
            <MessageSquare className="w-4 h-4 text-[#C5A46D]" />
            <span>{selectedService ? `Enquire About ${selectedService}` : 'Continue to WhatsApp'}</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </button>
        </div>
      </form>
    </div>
  );
};
