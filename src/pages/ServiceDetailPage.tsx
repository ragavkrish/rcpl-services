import React from 'react';
import { Link } from '../components/common/Link';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { Accordion } from '../components/common/Accordion';
import { getServiceBySlug, getCategoryBySlug, getServiceBySlug as getRelatedService } from '../data/services';
import { useRouter } from '../context/RouterContext';
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  FileCheck2,
  Info,
  MessageSquare,
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
      <div className="max-w-[1320px] mx-auto px-4 py-20 text-center space-y-4">
        <h1 className="font-display text-3xl font-bold text-[#121B24]">Practice Profile Not Found</h1>
        <p className="text-sm text-[#556371]">
          The requested service could not be located in our directory.
        </p>
        <div className="pt-4 flex items-center justify-center gap-4">
          <Link
            to={`/services/${categorySlug}`}
            className="px-6 py-2.5 bg-[#152E4D] text-white text-xs font-semibold uppercase tracking-wider transition-colors"
          >
            Back to Domain
          </Link>
          <Link
            to="/"
            className="px-6 py-2.5 border border-[#CCD3DA] text-[#121B24] text-xs font-semibold uppercase tracking-wider hover:bg-[#F6F7F5] transition-colors"
          >
            Overview
          </Link>
        </div>
      </div>
    );
  }

  const relatedServices = service.relatedServiceSlugs
    .map((slug) => getRelatedService(slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <article className="space-y-12 lg:space-y-16 py-8">
      {/* 1. BREADCRUMBS & 2. HERO HEADER */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <Breadcrumbs
          items={[
            { label: 'Statutory Practices', to: '/#statutory-ledger' },
            { label: category.title, to: `/services/${category.slug}` },
            { label: service.title },
          ]}
        />

        <div className="bg-[#121B24] text-white border border-[#243342] p-8 sm:p-12 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-4">
              <div className="text-[11px] font-mono text-[#B28348] uppercase tracking-widest font-semibold">
                {category.title} · Statutory Practice Profile
              </div>

              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                {service.title}
              </h1>

              <p className="text-base sm:text-[17px] text-[#CCD3DA] leading-relaxed max-w-2xl font-normal">
                {service.summary}
              </p>
            </div>

            {/* Advisory Intake Action Box */}
            <div className="lg:col-span-4 bg-[#1B2937] border border-[#2D4055] p-6 space-y-4">
              <div className="flex items-center justify-between text-xs text-[#B28348] font-mono">
                <span>Advisory Desk</span>
                <span>WhatsApp Intake</span>
              </div>
              <div className="space-y-1">
                <h2 className="font-display text-lg font-bold text-white">
                  Consult on {service.title}
                </h2>
                <p className="text-xs text-[#CCD3DA] leading-relaxed">
                  Connect with our corporate team to review requisite documentation checklists, registrar fee schedules, and turnaround expectations.
                </p>
              </div>

              <button
                type="button"
                onClick={() => openEnquiryModal(service.title)}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#25D366] hover:bg-[#20ba5a] text-[#121B24] font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-md"
              >
                <MessageSquare className="w-4 h-4 text-[#121B24] shrink-0" />
                <span className="truncate">Open WhatsApp Discussion</span>
              </button>

              <div className="pt-2 border-t border-[#2D4055] space-y-1 text-[11px] text-[#A5B4C4]">
                <div>Direct partner review · Zero upfront fee</div>
                <div>You review prepared message before dispatch</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICE OVERVIEW & CANDIDATE PROFILES */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Service Overview */}
          <div className="lg:col-span-7 space-y-4">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#8C6534] font-semibold">
              Statutory Scope
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#121B24]">
              Service Overview & Context
            </h2>
            <div className="text-sm text-[#3A4754] leading-relaxed space-y-4">
              <p>{service.overview}</p>
            </div>

            <div className="mt-6 p-4 bg-[#F6F7F5] border border-[#CCD3DA] flex items-start gap-3">
              <Info className="w-4 h-4 text-[#8C6534] shrink-0 mt-0.5" />
              <p className="text-xs text-[#556371] leading-relaxed">
                <strong className="text-[#121B24]">Procedural Notice:</strong> Registration criteria and timelines vary by jurisdiction and workload at respective Registrar of Companies (ROC) or Trademark Registry offices.
              </p>
            </div>
          </div>

          {/* Who Typically Needs This */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-7 border border-[#CCD3DA] space-y-4">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#8C6534] font-semibold">
              Applicable Contexts
            </span>
            <h3 className="font-display text-xl font-bold text-[#121B24]">
              Who Typically Explores This Practice
            </h3>
            <p className="text-xs text-[#556371] leading-relaxed">
              These client profiles reflect common enterprise requirements across commercial domains:
            </p>
            <ul className="space-y-2.5 pt-1">
              {service.whoNeedsThis.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-[#3A4754]">
                  <Check className="w-4 h-4 text-[#152E4D] shrink-0 mt-0.5" />
                  <span className="leading-relaxed font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4. PROCEDURAL SEQUENCE ("What Happens Next") */}
      <section className="bg-[#F6F7F5] border-y border-[#CCD3DA] py-14">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-xl space-y-1">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#8C6534] font-semibold">
              Filing Progression
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#121B24]">
              What Happens Next
            </h2>
            <p className="text-xs sm:text-sm text-[#556371]">
              A verified sequence of initial consultation and subsequent electronic filing stages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.whatHappensNext.map((step) => (
              <div
                key={step.step}
                className="p-6 bg-white border border-[#CCD3DA] space-y-2.5"
              >
                <div className="flex items-center justify-between text-xs text-[#8C6534] font-mono font-semibold">
                  <span>Stage {step.step}</span>
                  <span>0{step.step}</span>
                </div>
                <h3 className="font-display text-lg font-bold text-[#121B24]">
                  {step.title}
                </h3>
                <p className="text-xs text-[#556371] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. DOCUMENT GUIDANCE */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 bg-white border border-[#CCD3DA] space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#8C6534] font-semibold">
            <FileCheck2 className="w-4 h-4 text-[#8C6534]" />
            <span>Evidentiary Prerequisites & Checklist</span>
          </div>
          <h2 className="font-display text-xl sm:text-2xl font-bold text-[#121B24]">
            Confirming Your Documentation Docket
          </h2>
          <p className="text-sm text-[#3A4754] leading-relaxed max-w-4xl">
            {service.documentGuidance}
          </p>
          <div className="pt-2 text-[11px] text-[#6C7A89] border-t border-[#E3E7EB]">
            * Note: Government departments and registrars periodically revise required formats (e.g., Aadhaar OTP, digital signatures, utility bill recency). Please confirm exact requirements during your WhatsApp enquiry before submitting sensitive records.
          </div>
        </div>
      </section>

      {/* 6. WHAT TO HAVE READY BEFORE ENQUIRING */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F6F7F5] border border-[#CCD3DA] p-6 sm:p-8 space-y-6">
          <div className="space-y-1">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#8C6534] font-semibold">
              Readiness Checklist
            </span>
            <h3 className="font-display text-2xl font-bold text-[#121B24]">
              What to Have Ready Before Consultation
            </h3>
            <p className="text-xs sm:text-sm text-[#556371] max-w-2xl leading-relaxed">
              Having these baseline details in mind accelerates your preliminary advisory review:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-white border border-[#CCD3DA] space-y-1">
              <span className="text-xs font-mono font-bold text-[#8C6534]">01. Identity & KYC</span>
              <p className="text-xs text-[#556371] leading-relaxed">
                PAN and Aadhaar copies of all key directors, partners, or applicants.
              </p>
            </div>
            <div className="p-4 bg-white border border-[#CCD3DA] space-y-1">
              <span className="text-xs font-mono font-bold text-[#8C6534]">02. Address Proof</span>
              <p className="text-xs text-[#556371] leading-relaxed">
                Recent utility bill (under 60 days old) plus owner NOC for registered office.
              </p>
            </div>
            <div className="p-4 bg-white border border-[#CCD3DA] space-y-1">
              <span className="text-xs font-mono font-bold text-[#8C6534]">03. Purpose Details</span>
              <p className="text-xs text-[#556371] leading-relaxed">
                Proposed company names, brand mark file, or intended commercial objects.
              </p>
            </div>
            <div className="p-4 bg-white border border-[#CCD3DA] space-y-1">
              <span className="text-xs font-mono font-bold text-[#8C6534]">04. Digital Signatures</span>
              <p className="text-xs text-[#556371] leading-relaxed">
                Existing DSC status or Class-3 certificate (can be arranged if needed).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. RELEVANT FAQS */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl pb-4 border-b border-[#CCD3DA] mb-4 space-y-1">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#8C6534] font-semibold">
              Clarifications
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#121B24]">
              Frequently Asked Questions
            </h2>
          </div>
          <Accordion items={service.faqs} theme="light" />
        </section>
      )}

      {/* 8. RELATED SERVICES */}
      {relatedServices.length > 0 && (
        <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pb-3 border-b border-[#CCD3DA]">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#8C6534] font-semibold">
              Related Scopes
            </span>
            <h2 className="font-display text-2xl font-bold text-[#121B24] mt-0.5">
              Associated Regulatory Practices
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {relatedServices.map((rel) => (
              <div
                key={rel.id}
                className="p-5 bg-white border border-[#CCD3DA] hover:border-[#152E4D] transition-colors flex flex-col justify-between group"
              >
                <div className="space-y-1.5">
                  <span className="text-[11px] font-mono text-[#8C6534] font-semibold">
                    {rel.categoryTitle}
                  </span>
                  <h3 className="font-display text-base font-bold text-[#121B24] group-hover:text-[#152E4D] transition-colors">
                    <Link to={`/services/${rel.categorySlug}/${rel.slug}`}>
                      {rel.title}
                    </Link>
                  </h3>
                  <p className="text-xs text-[#556371] leading-relaxed line-clamp-2">
                    {rel.summary}
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-[#E3E7EB] flex items-center justify-between">
                  <Link
                    to={`/services/${rel.categorySlug}/${rel.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#152E4D] hover:underline"
                  >
                    <span>View Profile</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#8C6534]" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 9. CLOSING DIRECT ADVISORY LINE */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-[#121B24] text-white p-8 sm:p-10 border border-[#243342] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#B28348] font-semibold">
              Statutory Consultation
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
              Ready to evaluate {service.title}?
            </h2>
            <p className="text-xs sm:text-sm text-[#A5B4C4] leading-relaxed">
              Open WhatsApp with your prefilled parameters to discuss checklists, statutory fee breakdowns, and procedural timelines directly with our senior corporate desk.
            </p>
          </div>

          <div className="shrink-0">
            <button
              type="button"
              onClick={() => openEnquiryModal(service.title)}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#8C6534] hover:bg-[#A3753C] text-white font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-white" />
              <span>Discuss on WhatsApp</span>
            </button>
          </div>
        </div>
      </section>

      {/* 10. MOBILE STICKY ENQUIRY BAR */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#121B24] border-t border-[#243342] p-3 px-4 flex items-center justify-between gap-3 text-white">
        <div className="truncate">
          <div className="text-[10px] font-mono uppercase tracking-wider text-[#B28348]">
            Selected Practice
          </div>
          <div className="text-xs font-bold text-white truncate max-w-[180px]">
            {service.title}
          </div>
        </div>
        <button
          type="button"
          onClick={() => openEnquiryModal(service.title)}
          className="shrink-0 min-h-[44px] px-4 py-2 bg-[#8C6534] text-white text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-1.5 cursor-pointer"
        >
          <MessageSquare className="w-3.5 h-3.5 text-white" />
          <span>Enquire</span>
        </button>
      </div>
    </article>
  );
};
