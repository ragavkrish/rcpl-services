import React, { useState, useMemo } from 'react';
import { Link } from '../components/common/Link';
import { useRouter } from '../context/RouterContext';
import { candidateServices, serviceCategories } from '../data/services';
import { HeroIllustration } from '../components/common/HeroIllustration';
import { Accordion } from '../components/common/Accordion';
import {
  ArrowRight,
  Search,
  MessageSquare,
  ShieldCheck,
  Check,
  Building,
  Landmark,
  Award,
  Users,
  Handshake,
  CheckCircle2,
  Briefcase,
  Layers,
  Sparkles,
  FileCheck2,
  Compass,
} from 'lucide-react';

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

  const categoryTabs = [
    { id: 'all', label: 'All Services' },
    { id: 'ra-license', label: 'RA License' },
    { id: 'business-formation', label: 'Business Formation' },
    { id: 'registrations', label: 'Registrations & Licenses' },
    { id: 'intellectual-property', label: 'Intellectual Property' },
    { id: 'taxation', label: 'Tax & Compliance' },
    { id: 'secretarial', label: 'MCA Services' },
    { id: 'company-conversions', label: 'Company Conversions' },
  ];

  const displayedServices = useMemo(() => {
    const published = candidateServices.filter((s) => s.status !== 'draft');
    if (activeCategoryTab === 'all') {
      return published;
    }
    return published.filter((s) => s.categorySlug === activeCategoryTab);
  }, [activeCategoryTab]);

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
      title: 'Small & Medium Enterprises (MSMEs)',
      subtitle: 'Operational licensing & recurring filings',
      icon: Briefcase,
      description:
        'Support with mandatory operational registrations such as GSTIN, MSME / Udyam certification for government scheme access, Import Export Codes (IEC), and trade licenses tailored to commercial scope.',
      popularServices: ['MSME / Udyam Certificate', 'GST Registration', 'Import Export Code (IEC)'],
    },
    {
      title: 'Brands, Creators & Innovators',
      subtitle: 'Protecting commercial identity & creative assets',
      icon: ShieldCheck,
      description:
        'Comprehensive prior-art search across Nice Classes, electronic filing of trademark applications (TM-A), responses to registry examination reports, and copyright protection for proprietary works.',
      popularServices: ['Trademark Registration', 'Trademark Objection Reply', 'Copyright Filing'],
    },
    {
      title: 'Established Companies & Boards',
      subtitle: 'Corporate secretarial & regulatory hygiene',
      icon: Building,
      description:
        'Handling year-round statutory governance under the Companies Act, including Form AOC-4 financials, MGT-7 annual returns, director appointments or resignations, and registered office relocation dockets.',
      popularServices: ['Annual ROC Filings', 'Director KYC & Changes', 'Change Registered Office'],
    },
  ];

  // 5. "How It Works" 4-Step Realistic Process (No false guarantees)
  const howItWorksSteps = [
    {
      step: '01',
      title: 'Select Service & Review Prerequisites',
      description:
        'Browse our catalogue or speak with an expert to identify the right entity structure, tax registration, or trademark class for your specific business activity.',
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
        'Our qualified professionals verify your records, draft statutory charters (MOA/AOA, deeds, board resolutions), and configure Class-3 digital signatures.',
    },
    {
      step: '04',
      title: 'Government Portal Lodgement & Delivery',
      description:
        'We submit your application electronically on designated portals (MCA SPICe+, GSTN, or IP India), manage registrar queries, and deliver your certificates upon grant.',
    },
  ];

  // 6. "Why Choose Us" Practical Benefits (Honest & Credible)
  const whyChooseUsPillars = [
    {
      icon: Users,
      title: 'Qualified Professional Oversight',
      description:
        'Your corporate documentation and filings are reviewed by qualified Company Secretaries and Chartered Accountants—ensuring accuracy before submission to government scrutiny.',
    },
    {
      icon: Layers,
      title: '100% Digital & Paperless Execution',
      description:
        'No physical office visits required. Complete identity verification, digital signature setup, and document transmission electronically from anywhere in India.',
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
        'RCPL Services provides professional business facilitation and documentation advisory. We assist founders, directors, and management teams with entity structure evaluation, constitutional drafting (MOA/AOA, partnership deeds), KYC verification, and electronic lodgement on official central government portals such as the Ministry of Corporate Affairs (MCA), the Goods and Services Tax Network (GSTN), and the Trade Marks Registry.',
    },
    {
      question: 'How are government statutory fees distinguished from professional advisory fees?',
      answer:
        'We enforce strict fee itemization. Official government fees (such as MCA stamp duties, name reservation fees, trademark registry application charges, or ROC filing duties) are set by sovereign schedules and billed at actuals. Professional facilitation fees cover procedural vetting, legal charter drafting, digital signature configuration, and liaison until certificate issuance.',
    },
    {
      question: 'How do I decide between a Private Limited Company and an LLP?',
      answer:
        'A Private Limited Company is the standard vehicle if you plan to raise equity capital from venture investors, issue Employee Stock Options (ESOPs), or create an institutional brand. A Limited Liability Partnership (LLP) offers limited liability protection with lower ongoing secretarial burden and no statutory audit requirement below ₹40 lakh turnover, making it popular for professional service firms, trade businesses, and closely-held operations.',
    },
    {
      question: 'How does the WhatsApp consultation process work?',
      answer:
        'Submitting our intake form prepares a concise brief containing your contact details, entity objectives, and required service category. This opens directly inside your WhatsApp app on your smartphone or desktop. You retain complete control to review, edit, or append details before transmitting it directly to our advisory desk.',
    },
    {
      question: 'What registered office proof is mandated under the Companies Act?',
      answer:
        'A lawful registered office in India requires proof of legal occupancy: an electricity, water, or telephone bill dated within the preceding two months; a registered rent agreement or property title deed; and a signed No Objection Certificate (NOC) from the legal property owner authorizing commercial registration.',
    },
    {
      question: 'Do you guarantee approval timelines for registrations or trademarks?',
      answer:
        'No ethical practitioner can promise guaranteed government approval dates. All company incorporations, trademark grants, and GST numbers are issued solely by sovereign regulatory officers (Registrar of Companies, CGPDTM, and GST Tax Officers). We guarantee zero administrative delay on our end and meticulous document preparation to minimize defect notices.',
    },
  ];

  return (
    <div className="space-y-20 lg:space-y-28 pb-24 bg-white">
      {/* =========================================================================
          1. HERO SECTION (REFINED RCPL ADVISORY SPEC)
         ========================================================================= */}
      <section className="relative pt-10 sm:pt-16 pb-8 sm:pb-12 bg-white">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Column: Bold Original Headline & Free Consultation CTA */}
            <div className="lg:col-span-6 space-y-8 text-left">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[54px] font-bold text-[#121B24] leading-[1.18] tracking-tight">
                Helping Entrepreneurs Launch, Protect, and Grow in India.
              </h1>

              <div>
                <button
                  type="button"
                  onClick={() => openEnquiryModal()}
                  className="px-7 py-3.5 bg-[#152E4D] hover:bg-[#0D1E33] text-white text-sm font-bold rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer inline-flex items-center gap-2 active:scale-[0.99]"
                >
                  <span>Get Free Consultation</span>
                </button>
              </div>
            </div>

            {/* Right Column: Custom Clean Vector Illustration */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <HeroIllustration className="w-full max-w-[500px]" />
            </div>
          </div>
        </div>

        {/* 3-Pillar Trust Strip (Integrated & Softened) */}
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 mt-12 lg:mt-16">
          <div className="bg-slate-50/80 border border-slate-200/80 rounded-2xl shadow-xs p-6 sm:p-7">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-200/80 items-center">
              {/* Item 1: Handshake / Trusted */}
              <div className="flex items-center gap-4 justify-center md:justify-start md:px-4">
                <div className="w-11 h-11 rounded-full bg-white text-[#152E4D] flex items-center justify-center shrink-0 shadow-2xs border border-slate-200/70">
                  <Handshake className="w-5 h-5 text-[#152E4D]" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider leading-tight">
                    Trusted by over
                  </p>
                  <p className="text-sm sm:text-base font-bold text-[#121B24] leading-tight mt-0.5">
                    1,000+ Entrepreneurs
                  </p>
                </div>
              </div>

              {/* Item 2: Award / India's Leading */}
              <div className="flex items-center gap-4 justify-center md:justify-start pt-4 md:pt-0 md:px-6">
                <div className="w-11 h-11 rounded-full bg-white text-[#B28348] flex items-center justify-center shrink-0 shadow-2xs border border-slate-200/70">
                  <Award className="w-5 h-5 text-[#B28348]" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider leading-tight">
                    Led by Qualified
                  </p>
                  <p className="text-sm sm:text-base font-bold text-[#B28348] leading-tight mt-0.5">
                    CA, CS &amp; Legal Specialists
                  </p>
                </div>
              </div>

              {/* Item 3: Paperless & Reliable */}
              <div className="flex items-center gap-4 justify-center md:justify-start pt-4 md:pt-0 md:px-6">
                <div className="w-11 h-11 rounded-full bg-white text-[#16A34A] flex items-center justify-center shrink-0 shadow-2xs border border-slate-200/70">
                  <CheckCircle2 className="w-5 h-5 text-[#16A34A]" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider leading-tight">
                    100% Paperless
                  </p>
                  <p className="text-sm sm:text-base font-bold text-[#152E4D] leading-tight mt-0.5">
                    Transparent &amp; Reliable
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. "FOCUS ON GROWTH, WE HANDLE COMPLIANCE" (SEARCH & QUICK DISCOVERY)
         ========================================================================= */}
      <section className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="space-y-3">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#121B24]">
            Focus on Growth, We Handle Compliance
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Your business is your passion. Concentrate on growing and delighting customers while RCPL Services handles your registrations, statutory filings, and legal documentation seamlessly.
          </p>
        </div>

        {/* Live Service Autocomplete Search Bar */}
        <div className="pt-2 relative max-w-2xl mx-auto text-left">
          <div className="relative flex items-center border border-slate-300 focus-within:border-[#152E4D] focus-within:ring-4 focus-within:ring-[#152E4D]/10 bg-white rounded-xl transition-all shadow-xs">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setTimeout(() => setIsSearchFocused(false), 250)}
              placeholder="Search services (e.g. Private Limited, Trademark, GST, MSME)..."
              className="w-full pl-12 pr-28 py-3.5 text-sm text-[#121B24] placeholder-slate-400 focus:outline-hidden"
            />
            <button
              type="button"
              onClick={() => {
                const el = document.getElementById('services-tabs-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="absolute right-2 px-5 py-2.5 bg-[#152E4D] hover:bg-[#0D1E33] text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
            >
              Search
            </button>
          </div>

          {/* Autocomplete Dropdown */}
          {isSearchFocused && filteredSearchResults.length > 0 && (
            <div className="absolute left-0 right-0 top-full mt-2 bg-white border border-slate-200 shadow-xl z-50 divide-y divide-slate-100 rounded-xl overflow-hidden">
              <div className="px-4 py-2 bg-slate-50 text-[10px] font-mono uppercase tracking-wider text-slate-500 font-semibold">
                Matching Services ({filteredSearchResults.length})
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

          {/* Unboxed Editorial Quick Links */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-x-2 gap-y-1.5 text-xs text-slate-500">
            <span className="font-semibold text-slate-700">Popular:</span>
            <Link
              to="/services/ra-license/overseas-recruitment-agent-license"
              className="text-[#152E4D] hover:underline font-semibold"
            >
              RA License (MEA)
            </Link>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <Link
              to="/services/business-formation/private-limited-company"
              className="text-slate-600 hover:text-[#152E4D] hover:underline font-medium"
            >
              Private Limited Company
            </Link>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <Link
              to="/services/intellectual-property/trademark-registration"
              className="text-slate-600 hover:text-[#152E4D] hover:underline font-medium"
            >
              Trademark Registration
            </Link>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <Link
              to="/services/registrations/gst-registration"
              className="text-slate-600 hover:text-[#152E4D] hover:underline font-medium"
            >
              GST Registration
            </Link>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <Link
              to="/services/registrations/msme-registration"
              className="text-slate-600 hover:text-[#152E4D] hover:underline font-medium"
            >
              MSME / Udyam
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. AREAS OF EXPERTISE & BUSINESSES WE SERVE (UNIFIED, NON-BOXY PRACTICE OVERVIEW)
         ========================================================================= */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50/70 border border-slate-200/80 rounded-2xl p-8 sm:p-12 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#152E4D] font-bold">
              Tailored Practice Scopes
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#121B24]">
              Who We Support Across India
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              From early-stage founders to expanding commercial enterprises, we align our facilitation with the exact regulatory demands of your business stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8 lg:divide-x lg:divide-slate-200/80">
            {businessesServed.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className={`space-y-5 flex flex-col justify-between ${idx > 0 ? 'lg:pl-8' : ''}`}
                >
                  <div className="space-y-3.5">
                    <div className="w-11 h-11 rounded-xl bg-white text-[#152E4D] flex items-center justify-center shadow-xs border border-slate-200/80">
                      <Icon className="w-5 h-5 text-[#152E4D]" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-[#121B24] leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs font-semibold text-[#B28348] mt-0.5">
                        {item.subtitle}
                      </p>
                    </div>
                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200/60">
                    <p className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-semibold mb-2">
                      Common Requirements:
                    </p>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {item.popularServices.map((svc, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs">
                          <Check className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
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
      </section>

      {/* =========================================================================
          4. SIGNATURE SERVICE CATEGORY TABS (ORGANIZED & SCANNABLE DIRECTORY)
         ========================================================================= */}
      <section id="services-tabs-section" className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-slate-200">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#152E4D] font-bold">
              Explore Our Services
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#121B24] mt-1">
              Statutory Services &amp; Compliance Directory
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md">
            Select a practice domain below to review verified prerequisites, regulatory steps, and direct WhatsApp consultation options.
          </p>
        </div>

        {/* Category Tabs Bar */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
          {categoryTabs.map((tab) => {
            const isActive = activeCategoryTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveCategoryTab(tab.id)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-[#152E4D] text-white shadow-xs'
                    : 'text-slate-600 bg-slate-100 hover:bg-slate-200/80 hover:text-[#121B24]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Refined Service Cards Grid with Softened Corners and Clear Hierarchy */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          {displayedServices.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-slate-200/80 rounded-xl p-6 sm:p-7 hover:border-[#152E4D]/40 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-3.5">
                {/* Unboxed Metadata Header */}
                <div className="flex items-center justify-between text-[11px]">
                  <span className="font-bold uppercase tracking-wider text-[#B28348]">
                    {service.categoryTitle}
                  </span>
                  <span className="font-mono text-slate-400">
                    MCA / Central Portal
                  </span>
                </div>

                <h3 className="font-display text-lg sm:text-[19px] font-bold text-slate-900 hover:text-[#152E4D] transition-colors leading-snug">
                  <Link to={`/services/${service.categorySlug}/${service.slug}`}>
                    {service.title}
                  </Link>
                </h3>

                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed line-clamp-2">
                  {service.summary}
                </p>

                {/* Key Deliverables Bullet Points */}
                <div className="pt-3 border-t border-slate-100 space-y-2 text-xs text-slate-700">
                  {service.whoNeedsThis && service.whoNeedsThis.slice(0, 2).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#25D366] shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{item}</span>
                    </div>
                  ))}
                  <div className="flex items-center gap-2 text-[#152E4D] font-medium text-[11px]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#152E4D] shrink-0" />
                    <span>Itemized government fee schedule</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between gap-3">
                <Link
                  to={`/services/${service.categorySlug}/${service.slug}`}
                  className="text-xs font-semibold text-[#152E4D] hover:underline inline-flex items-center gap-1"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>

                <button
                  type="button"
                  onClick={() => openEnquiryModal(service.title)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#152E4D] hover:bg-[#0D1E33] text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer shadow-2xs"
                >
                  <MessageSquare className="w-3 h-3 text-[#25D366]" />
                  <span>Enquire</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          5. HOW IT WORKS (OPEN, DIRECTIONAL WORKFLOW TIMELINE — NO NESTED BOXES)
         ========================================================================= */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-[11px] font-mono uppercase tracking-wider text-[#152E4D] font-bold">
            Procedural Roadmap
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#121B24]">
            How the Filing Process Works
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            A disciplined, four-stage workflow to ensure your documentation satisfies statutory registry standards without delays.
          </p>
        </div>

        {/* Connected Horizontal Timeline (No enclosing card boxes) */}
        <div className="relative">
          {/* Subtle connecting track line on desktop */}
          <div aria-hidden="true" className="hidden lg:block absolute top-6 left-12 right-12 h-0.5 bg-slate-200 -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 pt-2">
            {howItWorksSteps.map((step) => (
              <div key={step.step} className="space-y-3 relative">
                <div className="w-12 h-12 rounded-xl bg-[#152E4D] text-white font-display font-bold text-lg flex items-center justify-center shadow-xs z-10 relative ring-4 ring-white">
                  {step.step}
                </div>
                <h3 className="font-display text-base font-bold text-slate-900 leading-snug pt-1">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. WHY CHOOSE THIS SERVICE (EDITORIAL ASYMMETRIC SPLIT LAYOUT)
         ========================================================================= */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Authoritative Editorial Statement & Trust Callout */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#152E4D] font-bold">
                The Advisory Commitment
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#121B24] leading-tight">
                Why Businesses Choose RCPL Services
              </h2>
            </div>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We bridge the gap between complex Indian corporate regulatory laws and growing commercial enterprises. Every application undergoes structured procedural vetting before submission.
            </p>

            {/* Featured Trust Anchor */}
            <div className="bg-[#FDF8F0] border border-[#E8DAC2] rounded-xl p-5 space-y-2">
              <p className="text-xs font-bold text-[#B28348] uppercase tracking-wider">
                Direct Professional Accountability
              </p>
              <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed">
                Qualified Company Secretaries, Chartered Accountants, and legal specialists examine your dockets, eliminating statutory ambiguity and avoiding defect notices from regulatory registrars.
              </p>
            </div>
          </div>

          {/* Right Column: Clean Open List with Quiet Dividers (Zero Card Boxes) */}
          <div className="lg:col-span-7 divide-y divide-slate-100">
            {whyChooseUsPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className={`flex items-start gap-4 ${idx === 0 ? 'pb-6' : 'py-6'}`}
                >
                  <div className="w-10 h-10 rounded-lg bg-slate-100 text-[#152E4D] flex items-center justify-center shrink-0 border border-slate-200/60 mt-0.5">
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
      </section>

      {/* =========================================================================
          7. EXPERT SUPPORT / CONTACT PANEL (SOFTENED ELEVATED BANNER)
         ========================================================================= */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#121B24] text-white p-8 sm:p-12 rounded-2xl border border-slate-800 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#25D366] font-bold">
                Approachable Expert Support
              </span>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                Need Help Navigating Legal or Tax Requirements?
              </h2>
              <p className="text-xs sm:text-sm text-[#A5B4C4] leading-relaxed max-w-xl">
                Connect directly with our corporate advisory desk on WhatsApp or email. We review your entity objectives, outline the exact documents needed, and itemize official government charges.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-[#CCD3DA]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                  <span>Prompt WhatsApp response</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                  <span>No obligation consultation</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                  <span>Clear fee breakdown</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
              <button
                type="button"
                onClick={() => openEnquiryModal()}
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#25D366] hover:bg-[#20ba5a] text-[#121B24] text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer shadow-md"
              >
                <MessageSquare className="w-4 h-4 text-[#121B24]" />
                <span>Talk to an Expert on WhatsApp</span>
              </button>

              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-transparent hover:bg-white/5 text-[#CCD3DA] hover:text-white text-xs font-semibold uppercase tracking-wider border border-[#3A4754] transition-colors rounded-lg text-center"
              >
                <span>Office &amp; Contact Details</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#25D366]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. FREQUENTLY ASKED QUESTIONS (ACCURATE & CAREFUL GUIDANCE)
         ========================================================================= */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="pb-4 border-b border-slate-200">
          <span className="text-[11px] font-mono uppercase tracking-wider text-[#152E4D] font-bold">
            Frequently Asked Questions
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#121B24] mt-1">
            Common Questions on Business Registration &amp; Compliance
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Clear, honest clarifications regarding entity selection, required documents, government fee structures, and filings in India.
          </p>
        </div>

        <div className="max-w-4xl">
          <Accordion items={faqs} theme="light" />
        </div>
      </section>
    </div>
  );
};

