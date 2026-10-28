import React from 'react';
import { Link } from '../components/common/Link';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { useRouter } from '../context/RouterContext';
import { serviceCategories } from '../data/services';
import { MessageSquare, ArrowRight, ArrowUpRight, ShieldCheck, Scale, Landmark } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { openEnquiryModal } = useRouter();

  return (
    <div className="space-y-12 lg:space-y-16 py-8">
      {/* Header & Breadcrumbs */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <Breadcrumbs items={[{ label: 'About Us' }]} />

        <div className="bg-[#121B24] text-white border border-[#243342] p-8 sm:p-14 relative">
          <div className="max-w-3xl space-y-4">
            <div className="text-[11px] font-mono text-[#B28348] uppercase tracking-widest font-semibold">
              Institutional Profile · Corporate & Compliance Advisory
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              About RCPL Services
            </h1>

            <p className="text-base sm:text-lg text-[#CCD3DA] leading-relaxed font-normal">
              A dedicated corporate facilitation firm built to provide clear, methodical navigation through company incorporation, trademark registrations, taxation records, and statutory secretarial governance across India.
            </p>
          </div>
        </div>
      </section>

      {/* Purpose & Operating Principles */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 space-y-5 text-sm text-[#3A4754] leading-relaxed">
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#8C6534] font-semibold">
              Strategic Foundation
            </div>

            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#121B24]">
              Our Practice Direction
            </h2>
            <p>
              Establishing and operating a lawful commercial enterprise in India requires coordination across multiple statutory agencies—including the Ministry of Corporate Affairs (MCA), the Central Board of Indirect Taxes and Customs (CBIC), the Income Tax Department, the Directorate General of Foreign Trade (DGFT), and the Trade Marks Registry.
            </p>
            <p>
              RCPL Services was established to provide founders, directors, and corporate management teams with a composed, transparent advisory starting point. Rather than wrestling with fragmented government portals and opaque requirements, clients can evaluate comprehensive service scopes, confirm verified evidentiary standards, and receive organized filing facilitation.
            </p>
            <p>
              We prioritize plain language, realistic statutory expectations, and disciplined document vetting before lodgement to ensure submissions satisfy registrar scrutiny without unnecessary delays.
            </p>
          </div>

          <div className="lg:col-span-5 bg-white p-7 sm:p-8 border border-[#CCD3DA] space-y-5">
            <h3 className="font-display text-lg font-bold text-[#121B24]">
              Core Operational Standards
            </h3>

            <div className="space-y-4 text-xs text-[#556371] divide-y divide-[#E3E7EB]">
              <div className="pt-3 first:pt-0">
                <p className="font-bold text-[#121B24] uppercase tracking-wider text-[11px] mb-1">
                  1. Transparent Scoping
                </p>
                <p className="leading-relaxed">
                  We describe what each service entails without fabricating turnaround guarantees or assured regulatory grants.
                </p>
              </div>
              <div className="pt-3">
                <p className="font-bold text-[#121B24] uppercase tracking-wider text-[11px] mb-1">
                  2. Direct WhatsApp Communication
                </p>
                <p className="leading-relaxed">
                  Enquiries connect directly to an advisory desk via formatted briefs, ensuring personal review of your entity facts.
                </p>
              </div>
              <div className="pt-3">
                <p className="font-bold text-[#121B24] uppercase tracking-wider text-[11px] mb-1">
                  3. Rigorous Document Vetting
                </p>
                <p className="leading-relaxed">
                  We review requisite KYC, landlord permissions, and board resolutions prior to portal lodgement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Domain Overview */}
      <section className="bg-[#F6F7F5] border-y border-[#CCD3DA] py-14">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-xl space-y-1">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#8C6534] font-semibold">
              Statutory Directory
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#121B24]">
              Core Practice Domains
            </h2>
            <p className="text-xs sm:text-sm text-[#556371]">
              Our statutory catalogue encompasses six core domains of enterprise facilitation:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCategories.map((cat) => (
              <div
                key={cat.id}
                className="p-6 bg-white border border-[#CCD3DA] space-y-3 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-[#8C6534] font-mono font-semibold">
                    <span>{cat.number}</span>
                    <span>Practice Domain</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#121B24] mt-2">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-[#556371] leading-relaxed mt-1.5">
                    {cat.shortDescription}
                  </p>
                </div>
                <div className="pt-3 border-t border-[#E3E7EB]">
                  <Link
                    to={`/services/${cat.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#152E4D] hover:underline"
                  >
                    <span>Inspect Domain Profiles</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#8C6534]" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verifiable Credentials Placeholder Note */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 bg-white border border-[#CCD3DA] space-y-1.5 text-xs text-[#556371]">
          <h3 className="font-semibold text-[#121B24]">
            Institutional Transparency Policy
          </h3>
          <p className="leading-relaxed">
            In strict compliance with accuracy and anti-fabrication guidelines, RCPL Services presents only verifiable operational scopes. We do not display fictitious customer statistics, unverified industry badges, or fabricated office photography. Verified credentials and registration details will be published here upon official client approval.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-[#121B24] text-white p-8 sm:p-10 border border-[#243342] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-xl">
            <h2 className="font-display text-2xl sm:text-3xl font-bold">
              Have a question about your enterprise structure?
            </h2>
            <p className="text-xs sm:text-sm text-[#CCD3DA] leading-relaxed">
              Initiate a direct enquiry through WhatsApp to discuss entity options and procedural roadmaps.
            </p>
          </div>
          <button
            type="button"
            onClick={() => openEnquiryModal()}
            className="px-6 py-3.5 bg-[#8C6534] hover:bg-[#A3753C] text-white font-semibold text-xs uppercase tracking-wider transition-colors shrink-0 cursor-pointer flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4 text-white" />
            <span>Talk to an Expert</span>
          </button>
        </div>
      </section>
    </div>
  );
};
