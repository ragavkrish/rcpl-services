import React from 'react';
import { Link } from '../components/common/Link';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { Accordion } from '../components/common/Accordion';
import { getServiceBySlug, getCategoryBySlug, getServiceBySlug as getRelatedService } from '../data/services';
import { useRouter } from '../context/RouterContext';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  FileCheck2,
  HelpCircle,
  Info,
  MessageSquare,
  ShieldAlert,
} from 'lucide-react';

interface ServiceDetailPageProps {
  categorySlug: string;
  serviceSlug: string;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  categorySlug,
  serviceSlug,
}) => {
  const { openEnquiryModal } = useRouter();
  const service = getServiceBySlug(serviceSlug);
  const category = getCategoryBySlug(categorySlug);

  if (!service || !category) {
    return (
      <div className="max-w-[1280px] mx-auto px-4 py-20 text-center space-y-4">
        <h1 className="font-display text-3xl font-bold text-[#111714]">Service Profile Not Found</h1>
        <p className="text-sm text-[#52616B]">
          The requested candidate service could not be located in our catalogue.
        </p>
        <div className="pt-4 flex items-center justify-center gap-4">
          <Link
            to={`/services/${categorySlug}`}
            className="px-6 py-2.5 bg-[#111714] text-white text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-[#20483A] transition-colors"
          >
            Back to Category
          </Link>
          <Link
            to="/"
            className="px-6 py-2.5 border border-[#D8DDD7] text-[#111714] text-xs font-semibold uppercase tracking-wider rounded-full hover:border-[#111714] transition-colors"
          >
            Homepage
          </Link>
        </div>
      </div>
    );
  }

  // Related services
  const relatedServices = service.relatedServiceSlugs
    .map((slug) => getRelatedService(slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <article className="space-y-16 lg:space-y-24 py-8">
      {/* 1. BREADCRUMBS & 2. HERO HEADER (ASYMMETRICAL CURVED ARCHITECTURE) */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <Breadcrumbs
          items={[
            { label: 'Services', to: '/#intent-discovery' },
            { label: category.title, to: `/services/${category.slug}` },
            { label: service.title },
          ]}
        />

        <div className="bg-[#111714] text-[#FFFFFF] rounded-tl-[36px] rounded-br-[36px] sm:rounded-tl-[48px] sm:rounded-br-[48px] border border-[#20483A] p-8 sm:p-12 relative overflow-hidden shadow-xl">
          {/* Ambient background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#20483A]/30 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-[#C5A46D] uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A46D]" />
                <span>{category.title}</span>
                <span className="text-[#A6ADA7]">/</span>
                <span>Candidate Service Profile</span>
              </div>

              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FFFFFF] tracking-tight text-balance">
                {service.title}
              </h1>

              <p className="text-base sm:text-lg text-[#A6ADA7] leading-relaxed max-w-2xl font-light">
                {service.summary}
              </p>
            </div>

            {/* 3. HIGH-CONVERTING ENQUIRY CTA CARD */}
            <div className="lg:col-span-4 bg-[#163329]/60 p-6 sm:p-7 rounded-[24px] border border-[#C5A46D]/30 space-y-4 shadow-xl">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-[#C5A46D] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A46D] animate-pulse" />
                  Direct Advisory Desk
                </span>
                <span className="font-mono text-xs text-[#A6ADA7]">WhatsApp Intake</span>
              </div>
              <div className="space-y-1">
                <h2 className="font-display text-base font-bold text-white">
                  Discuss Your Requirements
                </h2>
                <p className="text-xs text-[#A6ADA7] leading-relaxed">
                  Connect with our facilitation team to review eligibility, document checklists, and government fee schedules.
                </p>
              </div>

              <button
                type="button"
                onClick={() => openEnquiryModal(service.title)}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 bg-[#20483A] hover:bg-[#2A5C4A] border border-[#C5A46D] text-white font-display text-xs font-semibold uppercase tracking-wider rounded-full transition-all cursor-pointer shadow-[0_0_20px_-3px_rgba(197,164,109,0.35)] active:scale-[0.98]"
              >
                <MessageSquare className="w-4 h-4 text-[#C5A46D] shrink-0" />
                <span className="truncate">Ask About This on WhatsApp</span>
              </button>

              <div className="pt-2 border-t border-[#20483A]/80 space-y-1.5 text-[11px] text-[#A6ADA7]">
                <div className="flex items-center gap-2">
                  <span className="text-[#C5A46D]">✓</span>
                  <span>1-minute enquiry · No payment required</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#C5A46D]">✓</span>
                  <span>You review WhatsApp draft before sending</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICE OVERVIEW & 5. WHO MIGHT NEED THIS */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Service Overview */}
          <div className="lg:col-span-7 space-y-4">
            <span className="font-mono text-xs uppercase tracking-wider text-[#C5A46D] font-semibold">
              Domain Scope
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#111714]">
              Service Overview
            </h2>
            <div className="text-sm text-[#52616B] leading-relaxed space-y-4">
              <p>{service.overview}</p>
            </div>

            {/* Candidate Notice */}
            <div className="mt-6 p-5 bg-[#FFFFFF] border border-[#D8DDD7] rounded-[16px] flex items-start gap-3">
              <div className="w-7 h-7 rounded-full bg-[#F5F2E9] text-[#20483A] flex items-center justify-center shrink-0 mt-0.5">
                <Info className="w-4 h-4 text-[#C5A46D]" />
              </div>
              <p className="text-xs text-[#52616B] leading-relaxed">
                <strong className="text-[#111714]">Candidate Scope Notice:</strong> Procedural steps and timelines vary by state jurisdiction and statutory registry workload. We do not make unverified claims of fast-track approvals.
              </p>
            </div>
          </div>

          {/* 5. Who might need to explore this service */}
          <div className="lg:col-span-5 bg-white p-8 border border-[#D8DDD7] rounded-[24px] space-y-4 shadow-xs">
            <span className="font-mono text-xs uppercase tracking-wider text-[#A6ADA7]">
              Candidate Profiles
            </span>
            <h3 className="font-display text-xl font-bold text-[#111714]">
              Who Typically Explores This Service
            </h3>
            <p className="text-xs text-[#52616B] leading-relaxed">
              These candidate profiles reflect common enterprise requirements. Suitability should be evaluated against your specific commercial structure:
            </p>
            <ul className="space-y-3 pt-2">
              {service.whoNeedsThis.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-[#111714]">
                  <CheckCircle2 className="w-4 h-4 text-[#20483A] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 6. NEUTRAL PROCESS SECTION ("What Happens Next" - Connected Sequence) */}
      <section className="bg-[#111714] text-[#FFFFFF] border-y border-[#20483A] py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-xl space-y-2">
            <span className="font-mono text-xs uppercase tracking-wider text-[#C5A46D] font-semibold">
              Procedural Roadmap
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#FFFFFF] tracking-tight">
              What Happens Next
            </h2>
            <p className="text-xs sm:text-sm text-[#A6ADA7]">
              A general, verified roadmap of initial consultation and subsequent filing steps.
            </p>
          </div>

          {/* Connected sequence with circular nodes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.whatHappensNext.map((step) => (
              <div
                key={step.step}
                className="space-y-3 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full border border-[#C5A46D] bg-[#20483A]/30 text-[#C5A46D] font-mono text-xs font-bold flex items-center justify-center">
                    0{step.step}
                  </div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#A6ADA7]">
                    Stage Overview
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold text-[#FFFFFF] group-hover:text-[#C5A46D] transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs text-[#A6ADA7] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. DOCUMENT GUIDANCE */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 bg-[#FFFFFF] border border-[#D8DDD7] rounded-[24px] space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#20483A] font-semibold">
            <FileCheck2 className="w-4 h-4 text-[#C5A46D]" />
            <span>Document Guidance & Verification</span>
          </div>
          <h2 className="font-display text-xl sm:text-2xl font-bold text-[#111714]">
            Confirming Your Documentation Checklist
          </h2>
          <p className="text-sm text-[#52616B] leading-relaxed max-w-4xl">
            {service.documentGuidance}
          </p>
          <div className="pt-2 text-xs text-[#A6ADA7] italic">
            * Note: Government departments and registrars periodically revise required formats (e.g., Aadhaar OTP, digital signatures, utility bill recency). Please confirm exact requirements during your WhatsApp enquiry before submitting sensitive records.
          </div>
        </div>
      </section>

      {/* 7B. WHAT TO HAVE READY BEFORE ENQUIRING (CRO CHECKLIST) */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F5F2E9] border border-[#C5A46D]/40 rounded-[24px] p-8 sm:p-10 space-y-6">
          <div className="space-y-1">
            <span className="font-mono text-xs uppercase tracking-wider text-[#8C6D39] font-semibold">
              Readiness Checklist
            </span>
            <h3 className="font-display text-2xl font-bold text-[#111714]">
              What to Have Ready Before Enquiring
            </h3>
            <p className="text-xs sm:text-sm text-[#52616B] max-w-2xl leading-relaxed">
              Having these baseline details in mind accelerates your WhatsApp consultation. Don't worry if you don't have everything yet—we will identify valid alternatives together.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-white rounded-[16px] border border-[#D8DDD7] space-y-1.5">
              <span className="font-mono text-[11px] font-bold text-[#20483A]">01. Identity & KYC</span>
              <p className="text-xs text-[#52616B] leading-relaxed">
                PAN and Aadhaar copies of all key directors, partners, or applicants.
              </p>
            </div>
            <div className="p-4 bg-white rounded-[16px] border border-[#D8DDD7] space-y-1.5">
              <span className="font-mono text-[11px] font-bold text-[#20483A]">02. Address Proof</span>
              <p className="text-xs text-[#52616B] leading-relaxed">
                Recent electricity bill or rent agreement plus owner NOC for registered office.
              </p>
            </div>
            <div className="p-4 bg-white rounded-[16px] border border-[#D8DDD7] space-y-1.5">
              <span className="font-mono text-[11px] font-bold text-[#20483A]">03. Purpose Details</span>
              <p className="text-xs text-[#52616B] leading-relaxed">
                Proposed company names, brand mark file, or target filing scope description.
              </p>
            </div>
            <div className="p-4 bg-white rounded-[16px] border border-[#D8DDD7] space-y-1.5">
              <span className="font-mono text-[11px] font-bold text-[#20483A]">04. Digital Signatures</span>
              <p className="text-xs text-[#52616B] leading-relaxed">
                Existing DSC status or Class-3 certificate (can be arranged if you do not have one).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. RELEVANT FAQS */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl pb-6 space-y-1">
            <span className="font-mono text-xs uppercase tracking-wider text-[#C5A46D] font-semibold">
              Service Clarifications
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#111714]">
              Frequently Asked Questions
            </h2>
          </div>
          <Accordion items={service.faqs} theme="light" />
        </section>
      )}

      {/* 9. RELATED SERVICES */}
      {relatedServices.length > 0 && (
        <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pb-6 border-b border-[#D8DDD7]">
            <span className="font-mono text-xs uppercase tracking-wider text-[#C5A46D] font-semibold">
              Cross-Domain
            </span>
            <h2 className="font-display text-2xl font-bold text-[#111714] mt-1">
              Related Services & Next Steps
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
            {relatedServices.map((rel) => (
              <div
                key={rel.id}
                className="p-6 bg-[#FFFFFF] border border-[#D8DDD7] rounded-[16px] hover:border-[#20483A] transition-all flex flex-col justify-between group hover:shadow-xs"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#C5A46D] font-semibold">
                    {rel.categoryTitle}
                  </span>
                  <h3 className="font-display text-lg font-bold text-[#111714] group-hover:text-[#20483A] transition-colors">
                    <Link to={`/services/${rel.categorySlug}/${rel.slug}`}>
                      {rel.title}
                    </Link>
                  </h3>
                  <p className="text-xs text-[#52616B] leading-relaxed line-clamp-3">
                    {rel.summary}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#D8DDD7]/70 flex items-center justify-between">
                  <Link
                    to={`/services/${rel.categorySlug}/${rel.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#111714] hover:text-[#20483A]"
                  >
                    <span>View Profile</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C5A46D]" />
                  </Link>

                  <div className="w-8 h-8 rounded-full border border-[#D8DDD7] group-hover:bg-[#20483A] group-hover:border-[#20483A] group-hover:text-white flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A46D]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 10. FINAL ENQUIRY CTA (ASYMMETRIC CONTAINER + PILL CTA) */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-[#111714] text-white p-8 sm:p-14 rounded-tl-[36px] rounded-br-[36px] sm:rounded-tl-[48px] sm:rounded-br-[48px] border border-[#20483A] flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#20483A]/30 blur-3xl pointer-events-none" />

          <div className="space-y-3 max-w-xl relative z-10">
            <span className="font-mono text-xs uppercase tracking-wider text-[#C5A46D] font-semibold">
              Next Step Forward
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
              Ready to explore {service.title}?
            </h2>
            <p className="text-xs sm:text-sm text-[#A6ADA7] leading-relaxed">
              Open WhatsApp with your prefilled requirements to discuss documentation checklists, turnaround estimates, and statutory fees directly with our advisory desk.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-[#A6ADA7]/90 pt-1">
              <span>✓ Direct advisory desk</span>
              <span>✓ No automated billing</span>
              <span>✓ Review before sending</span>
            </div>
          </div>

          <div className="shrink-0 relative z-10">
            <button
              type="button"
              onClick={() => openEnquiryModal(service.title)}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#20483A] hover:bg-[#2A5C4A] border border-[#C5A46D]/80 text-white font-display font-semibold text-xs uppercase tracking-wider rounded-full transition-all cursor-pointer shadow-lg active:scale-[0.98] hover:shadow-[0_0_24px_-3px_rgba(197,164,109,0.4)]"
            >
              <MessageSquare className="w-4 h-4 text-[#C5A46D]" />
              <span>Ask About This on WhatsApp</span>
            </button>
          </div>
        </div>
      </section>

      {/* 11. MOBILE STICKY ENQUIRY ACTION BAR (CRO Tap Target >= 44px) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#111714]/95 backdrop-blur-md border-t border-[#20483A] p-3 px-4 flex items-center justify-between gap-3 shadow-2xl">
        <div className="truncate">
          <div className="text-[10px] font-mono uppercase tracking-wider text-[#C5A46D]">
            Selected Service
          </div>
          <div className="text-xs font-bold text-white truncate max-w-[180px]">
            {service.title}
          </div>
        </div>
        <button
          type="button"
          onClick={() => openEnquiryModal(service.title)}
          className="shrink-0 min-h-[44px] px-5 py-2.5 bg-[#20483A] hover:bg-[#2A5C4A] border border-[#C5A46D] text-white text-xs font-display font-semibold uppercase tracking-wider rounded-full inline-flex items-center gap-2 active:scale-95 shadow-md"
        >
          <MessageSquare className="w-4 h-4 text-[#C5A46D]" />
          <span>Enquire</span>
        </button>
      </div>
    </article>
  );
};
