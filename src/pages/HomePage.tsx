import React from 'react';
import { Link } from '../components/common/Link';
import { useRouter } from '../context/RouterContext';
import { useEntrance } from '../context/EntranceContext';
import { serviceCategories, getFeaturedServices } from '../data/services';
import { ServiceDiscovery } from '../components/discovery/ServiceDiscovery';
import { EnquiryForm } from '../components/enquiry/EnquiryForm';
import { Accordion } from '../components/common/Accordion';
import { SculpturalHeroObject } from '../components/hero/SculpturalHeroObject';
import { ScrollReveal } from '../components/common/ScrollReveal';
import {
  ArrowRight,
  ArrowUpRight,
  Search,
  MessageSquare,
  ShieldCheck,
  Compass,
  FileText,
  CheckCircle,
  HelpCircle,
  Layers,
  Sparkles,
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { openEnquiryModal } = useRouter();
  const { entrancePhase, isFirstVisit } = useEntrance();
  const featuredServices = getFeaturedServices().slice(0, 4);

  // Staged entrance states
  const isHoldingWordmark = isFirstVisit && entrancePhase === 'wordmark';

  // Frequently Asked Questions for Homepage
  const homepageFaqs = [
    {
      question: 'How does RCPL Services handle my enquiry once submitted?',
      answer:
        'When you submit an enquiry, your requirement parameters and selected candidate service are preformatted into a WhatsApp message. You review and send it directly from your device, initiating a private, direct dialogue with our facilitation team to review jurisdictions, documentation checklists, and procedural timelines before any filings are made.',
    },
    {
      question: 'What is the "Candidate Catalogue" status mentioned across the site?',
      answer:
        'All services, procedural steps, and candidate timelines presented on this website represent structured candidate scopes awaiting definitive client confirmation. We do not publish unverified customer counts, synthetic testimonials, or guaranteed approvals.',
    },
    {
      question: 'Is RCPL Services an official government registry or legal law firm?',
      answer:
        'No. RCPL Services operates strictly as an independent business facilitation and corporate documentation advisory. We prepare and lodge applications on designated statutory portals (MCA, DGFT, CBIC, Trade Marks Registry), while final approvals remain under the sole legal authority of official government registrars.',
    },
    {
      question: 'Can I request assistance if my required service is not in the explorer?',
      answer:
        'Yes. You can use the "Make an Enquiry" option and choose "General Consultation & Guidance" to describe your specific commercial requirement or corporate restructuring inquiry.',
    },
  ];

  const domain01 = serviceCategories[0];
  const otherDomains = serviceCategories.slice(1);

  return (
    <div className="space-y-24 lg:space-y-36 pb-20">
      {/* =========================================================================
          SECTION A — SIGNATURE HERO (ASYMMETRICAL SCULPTURAL COMPOSITION)
         ========================================================================= */}
      <section className="relative bg-[#111714] text-[#FFFFFF] overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-28 border-b border-[#20483A]/70">
        {/* Subtle Architectural Grid Background */}
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none bg-[radial-gradient(#C5A46D_1px,transparent_1px)] [background-size:24px_24px]" />

        {/* Ambient Asymmetric Glow */}
        <div className="absolute top-1/4 right-10 w-96 h-96 rounded-full bg-[#20483A]/25 blur-3xl pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left 7 Cols: Oversized Typography & Varied Shape Controls */}
            <div className="lg:col-span-7 space-y-8">
              {/* Minimal Pill Kicker */}
              <div
                className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-[#20483A]/40 border border-[#C5A46D]/30 rounded-full text-xs font-mono text-[#C5A46D] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isHoldingWordmark ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A46D]" />
                <span>Modern Prestige Advisory</span>
              </div>

              {/* Two-Stage Controlled Headline Reveal */}
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#FFFFFF] leading-[1.05] text-balance">
                <span
                  className={`block transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isHoldingWordmark ? 'opacity-0 translate-y-3' : 'opacity-100 translate-y-0'
                  }`}
                >
                  Business registrations & compliance,
                </span>
                <span
                  className={`block transition-all duration-600 delay-150 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isHoldingWordmark ? 'opacity-0 translate-y-3' : 'opacity-100 translate-y-0'
                  }`}
                >
                  made <span className="text-[#C5A46D]">straightforward</span> to navigate.
                </span>
              </h1>

              {/* Supporting Copy Reveal */}
              <p
                className={`text-lg sm:text-xl text-[#A6ADA7] leading-relaxed max-w-xl font-light transition-all duration-600 delay-250 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isHoldingWordmark ? 'opacity-0 translate-y-3' : 'opacity-100 translate-y-0'
                }`}
              >
                From company incorporation and GST registrations to trademark protection and statutory ROC filings. Identify your candidate service, get clear requirements, and enquire directly on WhatsApp with zero upfront commitment.
              </p>

              {/* CTAs with Varied Purpose-Driven Shape Language */}
              <div
                className={`pt-2 flex flex-wrap items-center gap-6 transition-all duration-600 delay-350 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isHoldingWordmark ? 'opacity-0 translate-y-3' : 'opacity-100 translate-y-0'
                }`}
              >
                {/* Primary CTA: Restrained Pill Shape */}
                <a
                  href="#intent-discovery"
                  className="px-8 py-3.5 bg-[#20483A] hover:bg-[#2A5C4A] border border-[#C5A46D]/60 text-white font-display font-semibold text-xs uppercase tracking-wider rounded-full transition-all duration-200 hover:shadow-[0_0_24px_-4px_rgba(197,164,109,0.35)] inline-flex items-center gap-2.5 active:scale-[0.98]"
                >
                  <Search className="w-4 h-4 text-[#C5A46D]" />
                  <span>Find Your Service</span>
                </a>

                {/* Secondary Action: Minimal Text Link with Circular Node & Animated Underline */}
                <button
                  type="button"
                  onClick={() => openEnquiryModal()}
                  className="group inline-flex items-center gap-3 py-2 text-[#FFFFFF] text-xs font-display font-semibold uppercase tracking-wider hover:text-[#C5A46D] transition-colors cursor-pointer"
                >
                  <span className="w-9 h-9 rounded-full border border-[#A6ADA7]/40 group-hover:border-[#C5A46D] group-hover:bg-[#20483A]/50 flex items-center justify-center transition-all">
                    <MessageSquare className="w-4 h-4 text-[#C5A46D]" />
                  </span>
                  <span className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C5A46D] group-hover:after:w-full after:transition-all after:duration-200">
                    Make an Enquiry
                  </span>
                </button>
              </div>

              {/* Minimal Trust Strip */}
              <div
                className={`pt-8 border-t border-[#20483A]/60 flex flex-wrap items-center gap-8 text-xs text-[#A6ADA7] transition-all duration-600 delay-450 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isHoldingWordmark ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A46D]" />
                  <span>6 Core Practice Domains</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A46D]" />
                  <span>Verified WhatsApp Consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A46D]" />
                  <span>Transparent Procedural Scoping</span>
                </div>
              </div>
            </div>

            {/* Right 5 Cols: Signature Live Sculptural Hero Object framed by circular halo */}
            <div
              className={`lg:col-span-5 relative flex items-center justify-center transition-all duration-700 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isHoldingWordmark ? 'opacity-0 scale-[0.97] translate-y-4' : 'opacity-100 scale-100 translate-y-0'
              }`}
            >
              <SculpturalHeroObject />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION B — INTERACTIVE SERVICE EXPLORER (SIGNATURE FEATURE)
         ========================================================================= */}
      <section id="intent-discovery" className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <ServiceDiscovery />
      </section>

      {/* =========================================================================
          SECTION C — THE SERVICE LANDSCAPE (ASYMMETRICAL SPLIT EDITORIAL)
         ========================================================================= */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 border-b border-[#D8DDD7] gap-4 mb-10">
            <div className="space-y-1">
              <span className="font-mono text-xs uppercase tracking-wider text-[#C5A46D] font-semibold">
                Domain Index
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#111714] tracking-tight">
                The Service Landscape
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#52616B] max-w-md">
              Six comprehensive practice areas structured to support enterprises from formation through periodic tax compliance and corporate restructuring.
            </p>
          </div>

          {/* Asymmetrical Split Composition (Feature Anchor + Open Typographic Register) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left 5 Columns: Anchor Domain 01 (Architectural Curved Focus Panel) */}
            <div className="lg:col-span-5 bg-[#111714] text-[#FFFFFF] rounded-tl-[36px] rounded-br-[36px] border border-[#20483A] p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden shadow-xl group">
              {/* Subtle ambient corner light */}
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-[#20483A]/30 blur-2xl pointer-events-none" />

              <div className="space-y-6 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#C5A46D] font-semibold">
                    Core Focus · Domain {domain01.number}
                  </span>
                  <div className="w-10 h-10 rounded-full border border-[#C5A46D]/40 bg-[#20483A]/30 flex items-center justify-center">
                    <Layers className="w-4 h-4 text-[#C5A46D]" />
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                    <Link
                      to={`/services/${domain01.slug}`}
                      className="hover:text-[#C5A46D] transition-colors"
                    >
                      {domain01.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-[#A6ADA7] leading-relaxed pt-1">
                    {domain01.editorialIntro}
                  </p>
                </div>

                {/* Candidate Highlight Metrics Strip */}
                <div className="pt-4 border-t border-[#20483A]/70 flex items-center gap-6 text-xs text-[#A6ADA7]">
                  <div>
                    <span className="font-mono text-xl font-bold text-white block">
                      {domain01.serviceCountCandidate}
                    </span>
                    <span className="text-[11px] text-[#A6ADA7]">Candidate Scopes</span>
                  </div>
                  <div className="h-8 w-[1px] bg-[#20483A]" />
                  <div>
                    <span className="font-mono text-xl font-bold text-[#C5A46D] block">MCA</span>
                    <span className="text-[11px] text-[#A6ADA7]">Statutory Jurisdiction</span>
                  </div>
                </div>
              </div>

              {/* Action Pill CTA */}
              <div className="pt-8 relative z-10">
                <Link
                  to={`/services/${domain01.slug}`}
                  className="inline-flex items-center justify-between w-full px-6 py-3.5 bg-[#20483A] hover:bg-[#2A5C4A] border border-[#C5A46D]/40 text-white font-display text-xs font-semibold uppercase tracking-wider rounded-full transition-all group-hover:shadow-[0_0_20px_-3px_rgba(197,164,109,0.35)]"
                >
                  <span>Explore Formation Domain</span>
                  <ArrowUpRight className="w-4 h-4 text-[#C5A46D] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right 7 Columns: Open Typographic Register (Domains 02 through 06) */}
            <div className="lg:col-span-7 flex flex-col justify-between divide-y divide-[#D8DDD7]">
              {otherDomains.map((category) => (
                <div
                  key={category.id}
                  className="py-5 sm:py-6 first:pt-0 last:pb-0 group transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-1 sm:max-w-md">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-semibold text-[#8C6D39]">
                          Domain {category.number}
                        </span>
                        <span className="text-[#A6ADA7]">·</span>
                        <span className="font-mono text-[11px] text-[#52616B]">
                          {category.serviceCountCandidate} Services
                        </span>
                      </div>

                      <h3 className="font-display text-xl font-bold tracking-tight text-[#111714] group-hover:text-[#20483A] transition-colors">
                        <Link to={`/services/${category.slug}`}>
                          {category.title}
                        </Link>
                      </h3>

                      <p className="text-xs text-[#52616B] leading-relaxed line-clamp-2">
                        {category.editorialIntro}
                      </p>
                    </div>

                    {/* Circular Directional Control Button */}
                    <div className="shrink-0 flex items-center justify-end">
                      <Link
                        to={`/services/${category.slug}`}
                        aria-label={`Explore Domain ${category.number}: ${category.title}`}
                        className="w-11 h-11 rounded-full border border-[#D8DDD7] group-hover:border-[#20483A] group-hover:bg-[#20483A] group-hover:text-white flex items-center justify-center transition-all text-[#52616B] active:scale-95 shadow-xs"
                      >
                        <ArrowUpRight className="w-4 h-4 text-[#C5A46D] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* =========================================================================
          SECTION D — A GUIDED NEXT STEP (CONNECTED SEQUENCE TIMELINE)
         ========================================================================= */}
      <section className="bg-[#111714] text-[#FFFFFF] py-20 sm:py-24 border-y border-[#20483A] relative overflow-hidden">
        {/* Subtle horizontal connecting beam background */}
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <ScrollReveal>
            <div className="max-w-2xl space-y-2">
              <span className="font-mono text-xs uppercase tracking-wider text-[#C5A46D] font-semibold">
                Operational Roadmap
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#FFFFFF]">
                A Guided Next Step
              </h2>
              <p className="text-sm text-[#A6ADA7] leading-relaxed">
                We replace guesswork with a straightforward, three-stage engagement framework designed to clarify prerequisites before any filing is submitted.
              </p>
            </div>
          </ScrollReveal>

          {/* Connected Sequence Timeline with Circular Nodes (No isolated card boxes) */}
          <ScrollReveal delay={150}>
            <div className="relative">
              {/* Continuous Horizontal Connecting Line (Desktop) */}
              <div className="hidden md:block absolute top-6 left-12 right-12 h-[1px] bg-gradient-to-r from-[#C5A46D]/60 via-[#20483A] to-[#C5A46D]/60" />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 relative z-10">
                {/* Step 1 */}
                <div className="space-y-4 group">
                  <div className="flex items-center gap-4">
                    {/* Circular Numbered Node */}
                    <div className="w-12 h-12 rounded-full border-2 border-[#C5A46D] bg-[#111714] text-[#C5A46D] flex items-center justify-center font-mono font-bold text-base shadow-[0_0_15px_rgba(197,164,109,0.25)] group-hover:scale-105 transition-transform">
                      01
                    </div>
                    <Compass className="w-5 h-5 text-[#A6ADA7]" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#FFFFFF] group-hover:text-[#C5A46D] transition-colors">
                    Find the candidate service
                  </h3>
                  <p className="text-xs text-[#A6ADA7] leading-relaxed">
                    Explore our 6 structured practice domains or use the intent explorer to match your current business milestone and regulatory requirements.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="space-y-4 group">
                  <div className="flex items-center gap-4">
                    {/* Circular Numbered Node */}
                    <div className="w-12 h-12 rounded-full border-2 border-[#C5A46D] bg-[#111714] text-[#C5A46D] flex items-center justify-center font-mono font-bold text-base shadow-[0_0_15px_rgba(197,164,109,0.25)] group-hover:scale-105 transition-transform">
                      02
                    </div>
                    <MessageSquare className="w-5 h-5 text-[#A6ADA7]" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#FFFFFF] group-hover:text-[#C5A46D] transition-colors">
                    Share a 1-minute WhatsApp brief
                  </h3>
                  <p className="text-xs text-[#A6ADA7] leading-relaxed">
                    Enter your name, phone, and requirements to generate a preformatted WhatsApp draft. You inspect and approve everything before tapping send.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="space-y-4 group">
                  <div className="flex items-center gap-4">
                    {/* Circular Numbered Node */}
                    <div className="w-12 h-12 rounded-full border-2 border-[#C5A46D] bg-[#111714] text-[#C5A46D] flex items-center justify-center font-mono font-bold text-base shadow-[0_0_15px_rgba(197,164,109,0.25)] group-hover:scale-105 transition-transform">
                      03
                    </div>
                    <CheckCircle className="w-5 h-5 text-[#A6ADA7]" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#FFFFFF] group-hover:text-[#C5A46D] transition-colors">
                    Receive checklist & direct guidance
                  </h3>
                  <p className="text-xs text-[#A6ADA7] leading-relaxed">
                    Confirm state jurisdiction, receive the exact KYC/evidentiary checklist, and review statutory fee schedules before committing to a filing.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================================================
          SECTION E — SELECTED SERVICES (OPEN TYPOGRAPHIC REGISTER)
         ========================================================================= */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 border-b border-[#D8DDD7] gap-4 mb-8">
            <div className="space-y-1">
              <span className="font-mono text-xs uppercase tracking-wider text-[#C5A46D] font-semibold">
                Catalogue Highlights
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#111714] tracking-tight">
                Selected Services
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#52616B] max-w-sm">
              High-demand candidate services commonly evaluated by founders and corporate management teams.
            </p>
          </div>

          {/* Open Typographic Register (No identical boxed card containers) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {featuredServices.map((service, idx) => (
              <article
                key={service.id}
                className="pb-8 border-b border-[#D8DDD7] flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-xs uppercase tracking-wider text-[#C5A46D] font-semibold">
                      {service.categoryTitle}
                    </span>
                    <span className="font-mono text-[11px] text-[#A6ADA7]">Index 0{idx + 1}</span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-[#111714] group-hover:text-[#20483A] transition-colors leading-snug">
                    <Link to={`/services/${service.categorySlug}/${service.slug}`}>
                      {service.title}
                    </Link>
                  </h3>

                  <p className="text-sm text-[#52616B] leading-relaxed">
                    {service.summary}
                  </p>
                </div>

                <div className="pt-6 mt-6 flex items-center justify-between">
                  {/* Minimal text link with animated underline */}
                  <button
                    type="button"
                    onClick={() => openEnquiryModal(service.title)}
                    className="font-display text-xs font-semibold uppercase tracking-wider text-[#20483A] relative py-0.5 hover:text-[#111714] transition-colors cursor-pointer after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C5A46D] hover:after:w-full after:transition-all after:duration-200"
                  >
                    Direct Enquiry
                  </button>

                  {/* Circular directional control button */}
                  <Link
                    to={`/services/${service.categorySlug}/${service.slug}`}
                    aria-label={`Explore ${service.title}`}
                    className="w-10 h-10 rounded-full border border-[#D8DDD7] group-hover:border-[#20483A] group-hover:bg-[#20483A] group-hover:text-white flex items-center justify-center text-[#52616B] transition-all shrink-0 active:scale-95 shadow-xs"
                  >
                    <ArrowUpRight className="w-4 h-4 text-[#C5A46D] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* =========================================================================
          SECTION F — TRUST THROUGH CLARITY (ASYMMETRIC PERSPECTIVE)
         ========================================================================= */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="p-8 sm:p-14 bg-[#FFFFFF] border border-[#D8DDD7] rounded-[24px] grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left 6 Columns: Editorial Manifesto */}
            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C5A46D]" />
                <span className="font-mono text-xs uppercase tracking-wider text-[#C5A46D] font-semibold">
                  Advisory Perspective
                </span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111714] tracking-tight">
                Trust through clarity.
              </h2>

              <p className="text-sm text-[#52616B] leading-relaxed">
                Navigating Indian business registrations and compliance involves distinct departmental procedures. We believe founders are best served by clear facts rather than fabricated customer counts, artificial speed claims, or unverified awards.
              </p>
              <p className="text-sm text-[#52616B] leading-relaxed">
                Our approach centers on methodical preparation: reviewing required KYC, executing proper constitutional charters, and filing on designated portals with complete procedural transparency.
              </p>
            </div>

            {/* Right 6 Columns: Open 4-Point Structure with Circular Node Accents (No box containers) */}
            <div className="lg:col-span-6 divide-y divide-[#D8DDD7]">
              <div className="py-4 first:pt-0 flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#20483A]/10 text-[#20483A] border border-[#20483A]/20 flex items-center justify-center font-mono text-xs font-semibold shrink-0 mt-0.5">
                  01
                </div>
                <div className="space-y-1">
                  <h3 className="font-display text-sm font-bold text-[#111714]">
                    Authentic Evidentiary Review
                  </h3>
                  <p className="text-xs text-[#52616B] leading-relaxed">
                    Prioritizing clean documents and board resolutions before lodgement to prevent registrar objection notices.
                  </p>
                </div>
              </div>

              <div className="py-4 flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#20483A]/10 text-[#20483A] border border-[#20483A]/20 flex items-center justify-center font-mono text-xs font-semibold shrink-0 mt-0.5">
                  02
                </div>
                <div className="space-y-1">
                  <h3 className="font-display text-sm font-bold text-[#111714]">
                    Direct WhatsApp Channel
                  </h3>
                  <p className="text-xs text-[#52616B] leading-relaxed">
                    Prefilled enquiry parameters connect you directly with our facilitation team without intermediate sales funnels.
                  </p>
                </div>
              </div>

              <div className="py-4 flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#20483A]/10 text-[#20483A] border border-[#20483A]/20 flex items-center justify-center font-mono text-xs font-semibold shrink-0 mt-0.5">
                  03
                </div>
                <div className="space-y-1">
                  <h3 className="font-display text-sm font-bold text-[#111714]">
                    Candidate Catalogue Governance
                  </h3>
                  <p className="text-xs text-[#52616B] leading-relaxed">
                    Services and processes represent verified candidate scopes awaiting definitive client confirmation.
                  </p>
                </div>
              </div>

              <div className="py-4 last:pb-0 flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#20483A]/10 text-[#20483A] border border-[#20483A]/20 flex items-center justify-center font-mono text-xs font-semibold shrink-0 mt-0.5">
                  04
                </div>
                <div className="space-y-1">
                  <h3 className="font-display text-sm font-bold text-[#111714]">
                    Statutory Independence
                  </h3>
                  <p className="text-xs text-[#52616B] leading-relaxed">
                    Honest communication that final approvals remain under the sole legal authority of official government registrars.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* =========================================================================
          SECTION G — USEFUL QUESTIONS (COMPACT FAQ)
         ========================================================================= */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-2xl pb-8 space-y-2">
            <span className="font-mono text-xs uppercase tracking-wider text-[#C5A46D] font-semibold">
              Clarifications
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#111714] tracking-tight">
              Useful Questions
            </h2>
            <p className="text-xs sm:text-sm text-[#52616B]">
              Key considerations to help you choose a service or understand the WhatsApp enquiry process.
            </p>
          </div>

          <div className="max-w-4xl">
            <Accordion items={homepageFaqs} theme="light" />
          </div>
        </ScrollReveal>
      </section>

      {/* =========================================================================
          SECTION H — A STRONG CLOSING MOMENT (ASYMMETRIC ENQUIRY CONTAINER)
         ========================================================================= */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <ScrollReveal>
          <div className="bg-[#111714] text-[#FFFFFF] rounded-tl-[36px] rounded-br-[36px] sm:rounded-tl-[48px] sm:rounded-br-[48px] border border-[#20483A] p-8 sm:p-14 relative overflow-hidden shadow-2xl">
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#20483A]/30 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column: Heading & Motivation */}
              <div className="lg:col-span-6 space-y-5">
                <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#C5A46D] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A46D]" />
                  <span>Next Step Forward</span>
                </div>

                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#FFFFFF] text-balance">
                  Let's find the right next step.
                </h2>

                <p className="text-base sm:text-lg text-[#A6ADA7] leading-relaxed max-w-lg font-light">
                  Tell us what you need help with and make an enquiry about the relevant service.
                </p>

                <div className="pt-2 space-y-2.5 text-xs text-[#A6ADA7]">
                  <div className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5A46D]" />
                    <span>Enquiries formatted for conversational review in WhatsApp</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5A46D]" />
                    <span>No automated payment locks or commitments</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Inline Modern Prestige Form */}
              <div className="lg:col-span-6">
                <EnquiryForm variant="modal" />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};
