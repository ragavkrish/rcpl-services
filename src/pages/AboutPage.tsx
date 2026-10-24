import React from 'react';
import { Link } from '../components/common/Link';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { useRouter } from '../context/RouterContext';
import { serviceCategories } from '../data/services';
import { MessageSquare, ArrowRight, ArrowUpRight, ShieldCheck, Compass, CheckCircle } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { openEnquiryModal } = useRouter();

  return (
    <div className="space-y-16 lg:space-y-24 py-8">
      {/* Header & Breadcrumbs */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <Breadcrumbs items={[{ label: 'About RCPL Services' }]} />

        <div className="bg-[#111714] text-[#FFFFFF] rounded-tl-[36px] rounded-br-[36px] sm:rounded-tl-[48px] sm:rounded-br-[48px] border border-[#20483A] p-8 sm:p-14 relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#20483A]/30 blur-3xl pointer-events-none" />

          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#C5A46D] uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A46D]" />
              <span>Institutional Profile</span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FFFFFF] tracking-tight text-balance">
              About RCPL Services
            </h1>

            <p className="text-base sm:text-lg text-[#A6ADA7] leading-relaxed font-light">
              A contemporary facilitation firm built to provide clear, methodical navigation through corporate formation, intellectual property filings, taxation compliance, and secretarial changes across India.
            </p>
          </div>
        </div>
      </section>

      {/* Purpose & Operating Principles */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6 text-sm text-[#52616B] leading-relaxed">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#20483A]" />
              <span className="font-mono text-xs uppercase tracking-wider text-[#20483A] font-semibold">
                Strategic Foundation
              </span>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#111714]">
              Our Practice Direction
            </h2>
            <p>
              Establishing and operating a lawful commercial enterprise in India requires coordination across multiple statutory agencies—including the Ministry of Corporate Affairs (MCA), the Central Board of Indirect Taxes and Customs (CBIC), the Income Tax Department, the Directorate General of Foreign Trade (DGFT), and the Trade Marks Registry.
            </p>
            <p>
              RCPL Services was conceived to provide founders and corporate management teams with a composed, transparent starting point. Rather than wrestling with fragmented government portals and opaque requirements, clients can evaluate candidate service scopes, confirm verified evidentiary standards, and receive organized filing facilitation.
            </p>
            <p>
              We prioritize plain language, realistic statutory expectations, and disciplined document vetting before lodgement to ensure submissions satisfy registrar scrutiny.
            </p>
          </div>

          <div className="lg:col-span-5 bg-white p-8 border border-[#D8DDD7] rounded-[24px] space-y-6 shadow-xs">
            <h3 className="font-display text-lg font-bold text-[#111714] flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#20483A]/10 text-[#20483A] flex items-center justify-center">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <span>Core Operational Standards</span>
            </h3>

            <div className="space-y-4 text-xs text-[#52616B] divide-y divide-[#D8DDD7]">
              <div className="pt-3 first:pt-0">
                <p className="font-bold text-[#111714] uppercase tracking-wider text-[11px] mb-1">
                  1. Transparent Scoping
                </p>
                <p>We describe what each service entails without fabricating turnaround guarantees or assured regulatory grants.</p>
              </div>
              <div className="pt-3">
                <p className="font-bold text-[#111714] uppercase tracking-wider text-[11px] mb-1">
                  2. Direct WhatsApp Communication
                </p>
                <p>Enquiries connect directly to an advisory desk via formatted briefs, ensuring personal review of your entity facts.</p>
              </div>
              <div className="pt-3">
                <p className="font-bold text-[#111714] uppercase tracking-wider text-[11px] mb-1">
                  3. Rigorous Document Vetting
                </p>
                <p>We review requisite KYC, landlord permissions, and board resolutions prior to portal lodgement.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Domain Overview */}
      <section className="bg-[#111714] text-[#FFFFFF] border-y border-[#20483A] py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-xl space-y-2">
            <span className="font-mono text-xs uppercase tracking-wider text-[#C5A46D] font-semibold">
              Domain Scope
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#FFFFFF]">
              Candidate Practice Areas
            </h2>
            <p className="text-xs sm:text-sm text-[#A6ADA7]">
              Our initial candidate catalogue encompasses six core domains of enterprise facilitation:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCategories.map((cat) => (
              <div
                key={cat.id}
                className="p-7 bg-[#163329]/40 border border-[#20483A] rounded-[20px] space-y-4 flex flex-col justify-between group hover:border-[#C5A46D]/60 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-[#C5A46D] font-semibold">{cat.number}</span>
                    <div className="w-8 h-8 rounded-full border border-[#20483A] group-hover:border-[#C5A46D] flex items-center justify-center transition-colors">
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A46D]" />
                    </div>
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#FFFFFF] mt-2 group-hover:text-[#C5A46D] transition-colors">{cat.title}</h3>
                  <p className="text-xs text-[#A6ADA7] leading-relaxed mt-2">
                    {cat.shortDescription}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#20483A]/60">
                  <Link
                    to={`/services/${cat.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs text-[#C5A46D] font-semibold hover:underline"
                  >
                    <span>Explore Domain</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verifiable Credentials Placeholder Note */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-7 sm:p-8 bg-[#FFFFFF] border border-[#D8DDD7] rounded-[20px] space-y-2 text-xs text-[#52616B]">
          <h3 className="font-mono uppercase tracking-wider text-[#111714] font-semibold text-[11px]">
            Institutional Transparency Policy
          </h3>
          <p className="leading-relaxed">
            In strict compliance with accuracy and anti-fabrication guidelines, RCPL Services presents only verifiable operational scopes. We do not display fictitious customer statistics, unverified industry badges, or fabricated office photography. Verified credentials and registration details will be published here upon official client approval.
          </p>
        </div>
      </section>

      {/* CTA (Asymmetric container with pill CTA) */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-[#111714] text-white p-8 sm:p-14 rounded-tl-[36px] rounded-br-[36px] sm:rounded-tl-[48px] sm:rounded-br-[48px] border border-[#20483A] flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#20483A]/30 blur-3xl pointer-events-none" />

          <div className="space-y-2 max-w-xl relative z-10">
            <h2 className="font-display text-2xl sm:text-3xl font-bold">
              Have a question about your enterprise structure?
            </h2>
            <p className="text-xs sm:text-sm text-[#A6ADA7] leading-relaxed">
              Initiate a direct enquiry through WhatsApp to discuss entity options and procedural roadmaps.
            </p>
          </div>
          <button
            type="button"
            onClick={() => openEnquiryModal()}
            className="px-8 py-3.5 bg-[#20483A] hover:bg-[#2A5C4A] border border-[#C5A46D]/60 text-white font-display text-xs font-semibold uppercase tracking-wider rounded-full transition-all shrink-0 cursor-pointer shadow-sm active:scale-[0.98] relative z-10"
          >
            Make an Enquiry
          </button>
        </div>
      </section>
    </div>
  );
};
