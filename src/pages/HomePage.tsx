import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Link } from '../components/common/Link';
import { useRouter } from '../context/RouterContext';
import { candidateServices } from '../data/services';
import { HeroIllustration } from '../components/common/HeroIllustration';
import { Accordion } from '../components/common/Accordion';
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  heroHeadlineVariants,
  heroTextVariants,
  heroCtaVariants,
  viewportConfig,
} from '../utils/motion';
import {
  ArrowRight,
  Search,
  MessageSquare,
  ShieldCheck,
  Check,
  Building,
  Award,
  Users,
  Handshake,
  CheckCircle2,
  Briefcase,
  Layers,
  Compass,
  ChevronDown,
} from 'lucide-react';

const getAuthorityLabel = (categorySlug: string): string => {
  switch (categorySlug) {
    case 'ra-license':
      return 'MEA / eMigrate';
    case 'business-formation':
    case 'secretarial':
    case 'company-conversions':
      return 'MCA / ROC Portal';
    case 'intellectual-property':
      return 'IP India Registry';
    case 'taxation':
      return 'CBIC / Income Tax';
    case 'registrations':
      return 'Central & State Portals';
    default:
      return 'Statutory Portal';
  }
};

const FLAGSHIP_SERVICE_SLUGS = [
  'overseas-recruitment-agent-license',
  'private-limited-company',
  'limited-liability-partnership',
  'trademark-registration',
  'gst-registration',
  'msme-registration',
  'startup-india-registration',
  'import-export-code',
  'annual-roc-compliance',
];

export const HomePage: React.FC = () => {
  const { openEnquiryModal } = useRouter();

  // 1. Live Autocomplete Search Bar
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const filteredSearchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase().trim();
    return candidateServices
      .filter(
        (s) =>
          s.status !== 'draft' &&
          (s.title.toLowerCase().includes(query) ||
            s.summary.toLowerCase().includes(query) ||
            s.categoryTitle.toLowerCase().includes(query))
      )
      .slice(0, 6);
  }, [searchQuery]);

  // 2. Interactive Category Tabs (Clean Catalogue)
  const [activeCategoryTab, setActiveCategoryTab] = useState<string>('all');
  const [showAllServices, setShowAllServices] = useState<boolean>(false);

  const categoryTabs = [
    { id: 'all', label: 'Featured & All' },
    { id: 'ra-license', label: 'RA License (MEA)' },
    { id: 'business-formation', label: 'Business Formation' },
    { id: 'registrations', label: 'Registrations & Licenses' },
    { id: 'intellectual-property', label: 'Intellectual Property' },
    { id: 'taxation', label: 'Tax & Compliance' },
    { id: 'secretarial', label: 'MCA Services' },
    { id: 'company-conversions', label: 'Company Conversions' },
  ];

  const allPublishedServices = useMemo(
    () => candidateServices.filter((s) => s.status !== 'draft'),
    []
  );

  const displayedServices = useMemo(() => {
    if (activeCategoryTab === 'all') {
      if (showAllServices) {
        return allPublishedServices;
      }
      const curated = FLAGSHIP_SERVICE_SLUGS.map((slug) =>
        allPublishedServices.find((s) => s.slug === slug)
      ).filter((s): s is NonNullable<typeof s> => Boolean(s));
      return curated.length >= 6 ? curated : allPublishedServices.slice(0, 9);
    }
    return allPublishedServices.filter((s) => s.categorySlug === activeCategoryTab);
  }, [activeCategoryTab, showAllServices, allPublishedServices]);

  // 3. Businesses We Serve (Verified Practical Audience Scopes)
  const businessesServed = [
    {
      title: 'Startups & First-Time Founders',
      subtitle: 'From idea to lawful corporate existence',
      icon: Compass,
      description:
        'Guidance on selecting between Private Limited and LLP, drafting foundational Memorandum & Articles of Association (MOA/AOA), obtaining director credentials (DIN/DSC), and securing Startup India DPIIT recognition.',
      popularServices: ['Private Limited Company', 'Startup India DPIIT', 'Trademark Registration'],
    },
    {
      title: 'Overseas Recruitment Agencies',
      subtitle: 'MEA Emigration Act & eMigrate Licensing',
      icon: Briefcase,
      description:
        'End-to-end facilitation for Ministry of External Affairs (MEA) Recruiting Agent (RA) Licenses, ₹50 Lakh / ₹8 Lakh Bank Guarantee formatting, POE office inspection readiness, and license renewals.',
      popularServices: ['RA License Registration', 'RA License Renewal', 'Capacity Enhancement'],
    },
    {
      title: 'Brands, Exporters & MSMEs',
      subtitle: 'Commercial identity & trade licensing',
      icon: ShieldCheck,
      description:
        'Prior-art search across 45 Nice Classes, electronic filing of trademark applications (TM-A), GSTIN registration, MSME / Udyam certification, Import Export Codes (IEC), and APEDA registration.',
      popularServices: ['Trademark Registration', 'GST & MSME Udyam', 'Import Export Code (IEC)'],
    },
    {
      title: 'Established Companies & Boards',
      subtitle: 'Corporate secretarial & regulatory hygiene',
      icon: Building,
      description:
        'Handling year-round statutory governance under the Companies Act, including Form AOC-4 financials, MGT-7 annual returns, director appointments or resignations, and entity conversions.',
      popularServices: ['Annual ROC Filings', 'Director KYC & Changes', 'Entity Conversions'],
    },
  ];

  // 5. "How It Works" 4-Step Realistic Process (No false guarantees)
  const howItWorksSteps = [
    {
      step: '01',
      title: 'Select Service & Review Prerequisites',
      description:
        'Browse our catalogue or speak with an expert to identify the right entity structure, MEA license tier, tax registration, or trademark class for your business.',
    },
    {
      step: '02',
      title: 'Share Basic Details & Documentation',
      description:
        'Submit foundational KYC records (such as PAN, Aadhaar, address proofs, and landlord NOC) through our simple form or directly on WhatsApp.',
    },
    {
      step: '03',
      title: 'Professional Drafting & Document Vetting',
      description:
        'Our qualified professionals verify your records, draft statutory charters (MOA/AOA, deeds, board resolutions, BG drafts), and configure Class-3 digital signatures.',
    },
    {
      step: '04',
      title: 'Government Portal Lodgement & Delivery',
      description:
        'We submit your application electronically on designated portals (MCA SPICe+, MEA eMigrate, GSTN, or IP India), manage registrar queries, and deliver your grant.',
    },
  ];

  // 6. "Why Choose Us" Practical Benefits (Honest & Credible)
  const whyChooseUsPillars = [
    {
      icon: Users,
      title: 'Qualified Professional Oversight',
      description:
        'Your corporate documentation and filings are reviewed by qualified Company Secretaries, Chartered Accountants, and legal specialists before submission to government scrutiny.',
    },
    {
      icon: Layers,
      title: '100% Digital & Paperless Execution',
      description:
        'Headquartered in Chennai with seamless electronic execution across India. Complete identity verification, digital signature setup, and document transmission remotely.',
    },
    {
      icon: ShieldCheck,
      title: 'Transparent Fee Breakdown',
      description:
        'We provide complete visibility into official government registry duties versus professional facilitation fees, so you always know exactly what you are paying for.',
    },
    {
      icon: MessageSquare,
      title: 'Direct WhatsApp & Phone Advisory',
      description:
        'Communicate directly with our corporate desk officers. Review pre-formatted dockets, receive status updates, and ask questions without navigating ticket queues.',
    },
  ];

  // 7. Frequently Asked Questions (Accurate, Careful Legal Guidance)
  const faqs = [
    {
      question: 'What is the role of RCPL Services in corporate registrations?',
      answer:
        'RCPL Services provides professional business facilitation and documentation advisory. Headquartered in Chennai and serving clients across India, we assist founders, directors, and recruitment agencies with entity structure evaluation, constitutional drafting (MOA/AOA, partnership deeds), KYC verification, and electronic lodgement on official central government portals such as MCA, MEA eMigrate, GSTN, and the Trade Marks Registry.',
    },
    {
      question: 'How are government statutory fees distinguished from professional advisory fees?',
      answer:
        'We enforce strict fee itemization. Official government fees (such as MCA stamp duties, MEA application fees, trademark registry charges, or ROC filing duties) are set by sovereign schedules and billed at actuals. Professional facilitation fees cover procedural vetting, legal charter drafting, digital signature configuration, and liaison until certificate issuance.',
    },
    {
      question: 'What are the core requirements for an MEA Overseas Recruiting Agent (RA) License?',
      answer:
        'Under the Emigration Act, 1983, an entity applying for a standard 1,000+ worker capacity RA License must demonstrate ₹50 Lakhs Net Worth, prepare a ₹50 Lakh Bank Guarantee (or ₹8 Lakh BG for the 100-worker capacity tier), maintain a dedicated commercial office of at least 500 sq. ft., and pass Protector of Emigrants (POE) inspection and police verification.',
    },
    {
      question: 'How do I decide between a Private Limited Company and an LLP?',
      answer:
        'A Private Limited Company is the standard vehicle if you plan to raise equity capital from venture investors, issue Employee Stock Options (ESOPs), or apply for institutional licenses. A Limited Liability Partnership (LLP) offers limited liability protection with lower ongoing secretarial burden and no statutory audit requirement below ₹40 lakh turnover.',
    },
    {
      question: 'How does the WhatsApp consultation process work?',
      answer:
        'Submitting our intake form prepares a concise brief containing your contact details, entity objectives, and required service category. This opens directly inside your WhatsApp app on your smartphone or desktop. You retain complete control to review, edit, or append details before transmitting it directly to our advisory desk.',
    },
    {
      question: 'Do you guarantee approval timelines for registrations or trademarks?',
      answer:
        'No ethical practitioner can promise guaranteed government approval dates. All company incorporations, MEA RA licenses, trademark grants, and GST numbers are issued solely by sovereign regulatory officers (ROC, PGE/MEA, CGPDTM, and GST Tax Officers). We guarantee zero administrative delay on our end and meticulous document preparation to minimize defect notices.',
    },
  ];

  return (
    <div className="space-y-20 lg:space-y-28 pb-24 bg-[#FCFCFA]">
      {/* =========================================================================
          1. HERO SECTION (EXECUTIVE EDITORIAL SPLIT + INTERACTIVE DOCKETS)
         ========================================================================= */}
      <section className="relative pt-8 sm:pt-14 pb-8 sm:pb-12 bg-white border-b border-slate-200/70">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Kicker, Headline, Executive Subheadline & Dual CTAs */}
            <motion.div
              initial="hidden"
              animate="visible"
              className="lg:col-span-6 space-y-6 text-left"
            >
              <motion.div
                variants={fadeInUp}
                className="text-[11px] font-mono uppercase tracking-widest text-[#1D4ED8] font-bold"
              >
                Corporate Formation · <span className="text-[#D99A32] font-extrabold">MEA RA Licensing</span> · Statutory Compliance
              </motion.div>

              <motion.h1
                variants={heroHeadlineVariants}
                className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-extrabold text-[#121B24] leading-[1.12] tracking-[-0.03em]"
              >
                Helping Entrepreneurs Launch, Protect, and Grow in India.
              </motion.h1>

              <motion.p
                variants={heroTextVariants}
                className="text-sm sm:text-base lg:text-[17px] text-slate-600 leading-relaxed max-w-xl"
              >
                Headquartered in Chennai with pan-India electronic execution. Our CA, CS, and legal specialists handle MCA incorporations, MEA Overseas RA Licenses, trademark filings, and statutory governance with itemized fee transparency.
              </motion.p>

              <motion.div
                variants={heroCtaVariants}
                className="flex flex-wrap items-center gap-3 pt-1"
              >
                <button
                  type="button"
                  onClick={() => openEnquiryModal()}
                  className="px-6 sm:px-7 py-3.5 min-h-[44px] bg-[#152E4D] hover:bg-[#0D1E33] text-white text-xs sm:text-sm font-bold rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer inline-flex items-center justify-center gap-2 active:scale-[0.99] whitespace-nowrap"
                >
                  <MessageSquare className="w-4 h-4 text-[#60A5FA]" />
                  <span>Get Free Consultation</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById('services-tabs-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-5 sm:px-6 py-3.5 min-h-[44px] bg-white hover:bg-slate-50 text-[#121B24] border border-slate-300 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer inline-flex items-center justify-center gap-2 active:scale-[0.99] whitespace-nowrap"
                >
                  <span>Explore 32 Statutory Scopes</span>
                  <ArrowRight className="w-4 h-4 text-[#1D4ED8]" />
                </button>
              </motion.div>

              {/* Integrated Quick Search in Hero */}
              <motion.div
                variants={heroCtaVariants}
                className="pt-2 relative max-w-xl"
              >
                <div className="relative flex items-center border border-slate-300 focus-within:border-[#152E4D] focus-within:ring-4 focus-within:ring-[#152E4D]/10 bg-[#FCFCFA] rounded-xl transition-all shadow-2xs">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setTimeout(() => setIsSearchFocused(false), 250)}
                    placeholder="Quick search: RA License, Private Limited, Trademark, GST..."
                    aria-label="Search statutory services"
                    className="w-full pl-10 pr-24 py-3 text-xs sm:text-sm text-[#121B24] placeholder-slate-400 focus:outline-hidden bg-transparent"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      const el = document.getElementById('services-tabs-section');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="absolute right-1.5 px-3.5 py-1.5 min-h-[34px] bg-slate-200/80 hover:bg-slate-300/80 text-[#121B24] text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Browse
                  </button>
                </div>

                {/* Autocomplete Dropdown */}
                {isSearchFocused && filteredSearchResults.length > 0 && (
                  <div className="absolute left-0 right-0 top-full mt-2 bg-white border border-slate-200 shadow-xl z-50 divide-y divide-slate-100 rounded-xl overflow-hidden">
                    <div className="px-4 py-2 bg-slate-50 text-[10px] font-mono uppercase tracking-wider text-slate-500 font-semibold">
                      Matching Statutory Profiles ({filteredSearchResults.length})
                    </div>
                    {filteredSearchResults.map((result) => (
                      <Link
                        key={result.id}
                        to={`/services/${result.categorySlug}/${result.slug}`}
                        className="p-3.5 hover:bg-slate-50 transition-colors flex items-center justify-between group block"
                      >
                        <div>
                          <p className="text-xs font-bold text-[#121B24] group-hover:text-[#152E4D]">
                            {result.title}
                          </p>
                          <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                            {result.categoryTitle} — {result.summary}
                          </p>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#152E4D] shrink-0 ml-3" />
                      </Link>
                    ))}
                  </div>
                )}
              </motion.div>
            </motion.div>

            {/* Right Column: Custom Clean Vector Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
              className="lg:col-span-6 flex justify-center lg:justify-end"
            >
              <HeroIllustration className="w-full max-w-[480px] sm:max-w-[500px]" />
            </motion.div>
          </div>
        </div>

        {/* 3-Pillar Trust Strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
          className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-12"
        >
          <div className="bg-[#FCFCFA] border border-slate-200/80 rounded-2xl shadow-2xs p-4 sm:p-5 lg:p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-200/80">
              <div className="flex items-center gap-3.5 sm:gap-4 justify-start sm:justify-center md:justify-start pb-4 md:pb-0 md:px-4">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white text-[#152E4D] flex items-center justify-center shrink-0 shadow-2xs border border-slate-200/70">
                  <Handshake className="w-5 h-5 text-[#1D4ED8]" />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-slate-500 leading-tight">
                    Trusted Advisory Desk
                  </p>
                  <p className="text-xs sm:text-sm md:text-base font-bold text-[#121B24] leading-tight mt-0.5">
                    1,000+ Enterprises Supported
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3.5 sm:gap-4 justify-start sm:justify-center md:justify-start py-4 md:py-0 md:px-6">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#FFFDF8] text-[#D99A32] flex items-center justify-center shrink-0 shadow-2xs border border-[#D99A32]/40">
                  <Award className="w-5 h-5 text-[#D99A32]" />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-[#D99A32] font-semibold leading-tight">
                    Qualified Oversight
                  </p>
                  <p className="text-xs sm:text-sm md:text-base font-bold text-[#121B24] leading-tight mt-0.5">
                    CA, CS &amp; Legal Specialists
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3.5 sm:gap-4 justify-start sm:justify-center md:justify-start pt-4 md:pt-0 md:px-6">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white text-[#152E4D] flex items-center justify-center shrink-0 shadow-2xs border border-slate-200/70">
                  <CheckCircle2 className="w-5 h-5 text-[#0F766E]" />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-slate-500 leading-tight">
                    100% Electronic Execution
                  </p>
                  <p className="text-xs sm:text-sm md:text-base font-bold text-[#152E4D] leading-tight mt-0.5">
                    Chennai Office · Pan-India Reach
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* =========================================================================
          2. SIGNATURE SERVICE CATEGORY TABS (SCANNABLE STATUTORY DIRECTORY)
         ========================================================================= */}
      <motion.section
        id="services-tabs-section"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-slate-200">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#1D4ED8] font-bold">
              Statutory Practice Catalogue
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#121B24] mt-1">
              Statutory Services &amp; Compliance Directory
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md">
            Select a practice domain below to inspect verified prerequisites, governing authorities, and direct WhatsApp consultation dockets.
          </p>
        </div>

        {/* Category Tabs Bar */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
          {categoryTabs.map((tab) => {
            const isActive = activeCategoryTab === tab.id;
            const isRaTab = tab.id === 'ra-license';
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  setActiveCategoryTab(tab.id);
                  if (tab.id !== 'all') {
                    setShowAllServices(false);
                  }
                }}
                className={`px-4 py-2.5 min-h-[40px] text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? isRaTab
                      ? 'bg-[#D99A32] text-white shadow-sm ring-2 ring-[#D99A32]/30'
                      : 'bg-[#152E4D] text-white shadow-xs'
                    : isRaTab
                    ? 'text-[#B87E22] bg-[#FFFDF8] border border-[#D99A32]/50 hover:bg-[#FDF6E8]'
                    : 'text-slate-600 bg-white border border-slate-200/80 hover:bg-slate-100 hover:text-[#121B24]'
                }`}
              >
                {isRaTab && (
                  <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-white' : 'bg-[#D99A32]'}`} />
                )}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Refined Service Cards Grid */}
        <motion.div
          key={`${activeCategoryTab}-${showAllServices}`}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-1"
        >
          {displayedServices.map((service) => {
            const isRaService = service.categorySlug === 'ra-license';
            return (
              <motion.div
                key={service.id}
                variants={staggerItem}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className={`bg-white border rounded-xl p-6 sm:p-7 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between ${
                  isRaService
                    ? 'border-[#D99A32]/45 hover:border-[#D99A32] ring-1 ring-[#D99A32]/10'
                    : 'border-slate-200/90 hover:border-[#152E4D]/50'
                }`}
              >
                <div className="space-y-3.5">
                  {/* Unboxed Metadata Header with Accurate Authority */}
                  <div className="flex items-center justify-between gap-2 text-[11px]">
                    <span
                      className={`font-bold uppercase tracking-wider truncate ${
                        isRaService ? 'text-[#D99A32]' : 'text-[#1D4ED8]'
                      }`}
                    >
                      {service.categoryTitle}
                    </span>
                    <span
                      className={`font-mono shrink-0 ${
                        isRaService
                          ? 'text-[#D99A32] font-bold bg-[#D99A32]/10 border border-[#D99A32]/30 px-2 py-0.5 rounded text-[10px]'
                          : 'text-slate-400'
                      }`}
                    >
                      {getAuthorityLabel(service.categorySlug)}
                    </span>
                  </div>

                  <h3
                    className={`font-display text-lg sm:text-[19px] font-bold leading-snug transition-colors ${
                      isRaService
                        ? 'text-slate-900 hover:text-[#D99A32]'
                        : 'text-slate-900 hover:text-[#152E4D]'
                    }`}
                  >
                    <Link to={`/services/${service.categorySlug}/${service.slug}`}>
                      {service.title}
                    </Link>
                  </h3>

                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed line-clamp-2">
                    {service.summary}
                  </p>

                  {/* Key Deliverables Bullet Points */}
                  <div className="pt-3 border-t border-slate-100 space-y-2 text-xs text-slate-700">
                    {service.whoNeedsThis &&
                      service.whoNeedsThis.slice(0, 2).map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <Check
                            className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                              isRaService ? 'text-[#D99A32]' : 'text-[#0F766E]'
                            }`}
                          />
                          <span className="line-clamp-1">{item}</span>
                        </div>
                      ))}
                    <div
                      className={`flex items-center gap-2 font-medium text-[11px] ${
                        isRaService ? 'text-[#8A5B15]' : 'text-[#152E4D]'
                      }`}
                    >
                      <ShieldCheck
                        className={`w-3.5 h-3.5 shrink-0 ${
                          isRaService ? 'text-[#D99A32]' : 'text-[#1D4ED8]'
                        }`}
                      />
                      <span>Itemized government &amp; advisory fee schedule</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between gap-3">
                  <Link
                    to={`/services/${service.categorySlug}/${service.slug}`}
                    className={`text-xs font-semibold inline-flex items-center gap-1 whitespace-nowrap hover:underline ${
                      isRaService ? 'text-[#D99A32]' : 'text-[#152E4D]'
                    }`}
                  >
                    <span>Inspect Scope</span>
                    <ArrowRight
                      className={`w-3 h-3 ${isRaService ? 'text-[#D99A32]' : 'text-[#1D4ED8]'}`}
                    />
                  </Link>

                  <button
                    type="button"
                    onClick={() => openEnquiryModal(service.title)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 min-h-[36px] bg-[#152E4D] hover:bg-[#0D1E33] text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer shadow-2xs whitespace-nowrap"
                  >
                    <MessageSquare className="w-3 h-3 text-[#60A5FA]" />
                    <span>Enquire</span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Expand / Collapse All 32 Services Toggle when on 'all' tab */}
        {activeCategoryTab === 'all' && allPublishedServices.length > 9 && (
          <div className="pt-2 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAllServices((prev) => !prev)}
              className="inline-flex items-center gap-2 px-6 py-3 min-h-[44px] bg-white hover:bg-slate-50 text-[#121B24] border border-slate-300 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-2xs"
            >
              <span>
                {showAllServices
                  ? 'Show Featured Flagship Services (9)'
                  : `View All ${allPublishedServices.length} Statutory Services`}
              </span>
              <ChevronDown
                className={`w-4 h-4 text-[#1D4ED8] transition-transform duration-200 ${
                  showAllServices ? 'rotate-180' : ''
                }`}
              />
            </button>
          </div>
        )}
      </motion.section>

      {/* =========================================================================
          3. WHO WE SUPPORT ACROSS INDIA (PRACTICE AUDIENCES)
         ========================================================================= */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-8 lg:p-12 space-y-6 sm:space-y-8 lg:space-y-10 shadow-2xs">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-3 sm:gap-4 pb-5 sm:pb-6 border-b border-slate-200/80 text-left">
            <div className="space-y-1 sm:space-y-1.5">
              <span className="block text-[11px] font-mono uppercase tracking-widest text-[#1D4ED8] font-bold">
                Tailored Practice Scopes
              </span>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#121B24] tracking-tight">
                Who We Support Across India
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md lg:text-left">
              From early-stage founders and MEA recruitment agencies to expanding commercial enterprises, we align our facilitation with the exact regulatory demands of your industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-0 divide-y divide-slate-100 md:divide-y-0 lg:divide-x lg:divide-slate-200/80">
            {businessesServed.map((item, idx) => {
              const Icon = item.icon;
              const isRa = item.title.includes('Overseas Recruitment') || idx === 1;
              const colPadding =
                idx === 0
                  ? 'lg:pr-7'
                  : idx === businessesServed.length - 1
                  ? 'lg:pl-7'
                  : 'lg:px-7';
              return (
                <div
                  key={idx}
                  className={`flex flex-col justify-between text-left pt-5 md:pt-0 ${idx !== 0 ? 'pt-6' : ''} ${colPadding}`}
                >
                  <div className="flex flex-col flex-1">
                    <div className="mb-3.5 flex items-center justify-between">
                      <div
                        className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shadow-2xs border shrink-0 ${
                          isRa
                            ? 'bg-[#FFFDF8] text-[#D99A32] border-[#D99A32]/50'
                            : 'bg-slate-50 text-[#152E4D] border-slate-200/80'
                        }`}
                      >
                        <Icon className={`w-5 h-5 ${isRa ? 'text-[#D99A32]' : 'text-[#152E4D]'}`} />
                      </div>
                      {isRa && (
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#D99A32] bg-[#D99A32]/10 border border-[#D99A32]/30 px-1.5 py-0.5 rounded">
                          MEA Flagship
                        </span>
                      )}
                    </div>

                    <div className="min-h-0 lg:min-h-[76px] flex flex-col justify-start mb-2 sm:mb-3">
                      <h3 className="font-display text-base sm:text-[17px] font-bold text-[#121B24] leading-snug text-left">
                        {item.title}
                      </h3>
                      <p
                        className={`text-xs mt-1 leading-snug text-left ${
                          isRa ? 'text-[#D99A32] font-bold' : 'text-[#1D4ED8] font-semibold'
                        }`}
                      >
                        {item.subtitle}
                      </p>
                    </div>

                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed text-left flex-1 mb-4 sm:mb-6">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3.5 sm:pt-4 border-t border-slate-200/70 mt-auto text-left">
                    <p className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-semibold mb-2">
                      Key Mandates:
                    </p>
                    <ul className="space-y-1.5 sm:space-y-2 text-xs text-slate-700">
                      {item.popularServices.map((svc, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs font-medium leading-snug">
                          <Check
                            className={`w-3.5 h-3.5 shrink-0 ${
                              isRa ? 'text-[#D99A32]' : 'text-[#0F766E]'
                            }`}
                          />
                          <span className="truncate">{svc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* =========================================================================
          4. HOW IT WORKS (OPEN, DIRECTIONAL WORKFLOW TIMELINE)
         ========================================================================= */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-10"
      >
        <div className="text-left sm:text-center max-w-2xl sm:mx-auto space-y-1.5 sm:space-y-2">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#1D4ED8] font-bold">
            Procedural Roadmap
          </span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#121B24]">
            How the Filing Process Works
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            A disciplined, four-stage workflow to ensure your documentation satisfies statutory registry standards without delays.
          </p>
        </div>

        {/* Responsive Timeline: Vertical connector on mobile, horizontal line on desktop */}
        <div className="relative pl-3 sm:pl-6 lg:pl-0">
          {/* Mobile vertical line */}
          <div
            aria-hidden="true"
            className="lg:hidden absolute left-8 sm:left-11 top-6 bottom-10 w-0.5 bg-slate-200/90 -z-0"
          />

          {/* Desktop horizontal timeline bar */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-6 left-12 right-12 h-0.5 bg-slate-200 -z-0"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-6 pt-2">
            {howItWorksSteps.map((step) => (
              <div
                key={step.step}
                className="flex lg:flex-col items-start gap-4 lg:gap-3 relative bg-white lg:bg-transparent p-4 sm:p-5 lg:p-0 rounded-xl lg:rounded-none border border-slate-200/80 lg:border-none shadow-2xs lg:shadow-none"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#152E4D] text-white font-display font-bold text-base sm:text-lg flex items-center justify-center shadow-xs shrink-0 z-10 relative ring-4 ring-[#FCFCFA] sm:ring-[#FCFCFA]">
                  {step.step}
                </div>
                <div className="flex-1 space-y-1 lg:space-y-2 pt-0.5 lg:pt-1 text-left">
                  <h3 className="font-display text-base font-bold text-slate-900 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* =========================================================================
          5. WHY CHOOSE RCPL SERVICES (EDITORIAL ASYMMETRIC SPLIT LAYOUT)
         ========================================================================= */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Column: Authoritative Editorial Statement & Trust Callout */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6 text-left">
            <div className="space-y-1.5 sm:space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#1D4ED8] font-bold">
                The Advisory Commitment
              </span>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#121B24] leading-tight">
                Why Businesses Choose RCPL Services
              </h2>
            </div>
            <p className="text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed">
              We bridge the gap between complex Indian corporate regulatory laws and growing commercial enterprises. Every application undergoes structured procedural vetting before submission.
            </p>

            {/* Featured Trust Anchor */}
            <div className="bg-[#EFF6FF]/75 border border-[#BFDBFE] rounded-xl p-4 sm:p-5 space-y-2 text-left">
              <p className="text-xs font-bold text-[#1D4ED8] uppercase tracking-wider">
                Direct Professional Accountability
              </p>
              <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed">
                Qualified Company Secretaries, Chartered Accountants, and legal specialists examine your dockets—eliminating statutory ambiguity and minimizing defect notices from regulatory registrars.
              </p>
            </div>
          </div>

          {/* Right Column: Clean Open List with Quiet Dividers */}
          <div className="lg:col-span-7 divide-y divide-slate-200/80 text-left">
            {whyChooseUsPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className={`flex items-start gap-3.5 sm:gap-4 ${idx === 0 ? 'pb-4 sm:pb-6' : 'py-4 sm:py-6'}`}
                >
                  <div className="w-10 h-10 rounded-lg bg-white text-[#152E4D] flex items-center justify-center shrink-0 border border-slate-200/80 shadow-2xs mt-0.5">
                    <Icon className="w-5 h-5 text-[#152E4D]" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-display text-base font-bold text-slate-900 leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* =========================================================================
          6. EXPERT SUPPORT / CONTACT PANEL (EXECUTIVE DARK BANNER)
         ========================================================================= */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="bg-[#121B24] text-white p-6 sm:p-8 lg:p-12 rounded-2xl border border-slate-800 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#60A5FA] font-bold">
                Chennai Advisory Desk · Pan-India Filings
              </span>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                Need Help Navigating Corporate, <span className="text-[#D99A32]">MEA RA</span> or Tax Filings?
              </h2>
              <p className="text-xs sm:text-sm text-[#A5B4C4] leading-relaxed max-w-xl">
                Connect directly with our corporate advisory desk on WhatsApp or phone. We review your entity objectives, outline exact evidentiary documents needed, and itemize official government charges.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-[#CCD3DA]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#60A5FA] shrink-0" />
                  <span>Direct CA/CS desk review</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#60A5FA] shrink-0" />
                  <span>Zero upfront consultation fee</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#60A5FA] shrink-0" />
                  <span>Itemized government duties</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
              <button
                type="button"
                onClick={() => openEnquiryModal()}
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 min-h-[44px] bg-white hover:bg-slate-100 text-[#121B24] text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer shadow-md active:scale-[0.99] whitespace-nowrap"
              >
                <MessageSquare className="w-4 h-4 text-[#0F766E] shrink-0" />
                <span>Consult on WhatsApp</span>
              </button>

              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[44px] bg-transparent hover:bg-white/5 text-[#CCD3DA] hover:text-white text-xs font-semibold uppercase tracking-wider border border-[#3A4754] transition-colors rounded-lg text-center active:scale-[0.99] whitespace-nowrap"
              >
                <span>Chennai Office &amp; Contact</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#60A5FA] shrink-0" />
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

      {/* =========================================================================
          7. FREQUENTLY ASKED QUESTIONS (ACCURATE & CAREFUL GUIDANCE)
         ========================================================================= */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6"
      >
        <div className="pb-4 border-b border-slate-200 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#1D4ED8] font-bold">
              Frequently Asked Questions
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#121B24] mt-1">
              Common Questions on Business Registration &amp; Compliance
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Clear clarifications regarding entity selection, MEA RA licensing, required documents, and government fee structures.
            </p>
          </div>
          <Link
            to="/faq"
            className="text-xs font-semibold text-[#152E4D] hover:underline inline-flex items-center gap-1 whitespace-nowrap"
          >
            <span>View Full Knowledge Base</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#1D4ED8]" />
          </Link>
        </div>

        <div className="max-w-4xl">
          <Accordion items={faqs} theme="light" />
        </div>
      </motion.section>
    </div>
  );
};
