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
  Clock,
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

  // 2. Interactive Category Tabs (LegalBabu Inspired Clean Catalogue)
  const [activeCategoryTab, setActiveCategoryTab] = useState<string>('all');

  const categoryTabs = [
    { id: 'all', label: 'All Services' },
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

  // 4. Featured Startup & Business Packages
  const popularPackages = [
    {
      id: 'startup-incorporation',
      title: 'Startup Incorporation Package',
      subtitle: 'Complete Private Limited Company Setup',
      timeline: 'Standard Procedural Turnaround',
      badge: 'Foundational',
      category: 'Business Formation',
      inclusions: [
        'Name Reservation via MCA RUN / SPICe+ Part A',
        '2 Class-3 Digital Signature Certificates (DSC)',
        '2 Director Identification Numbers (DIN)',
        'Drafting of MOA & AOA Charters',
        'Electronic Lodgement on MCA SPICe+ Portal',
        'Company PAN, TAN & EPFO/ESIC Allocations',
        'MSME / Udyam Registration Assistance',
        'Registered Office Documentation Guidance',
      ],
      serviceName: 'Private Limited Company Registration',
    },
    {
      id: 'brand-protection',
      title: 'Brand Protection & Trademark Pack',
      subtitle: 'Comprehensive Trademark Safeguard',
      timeline: 'Drafted & Filed in 24-48 Hours',
      badge: 'Brand Security',
      category: 'Intellectual Property',
      inclusions: [
        'Comprehensive Conflict Search across Nice Classes',
        'Statutory Trademark Class Advice & Strategy',
        'TM-A Application Drafting & Registry Lodgement',
        'Official Government Filing Receipt & Application Number',
        'Immediate Authorization to Use ™ Symbol',
        'Assistance with 50% MSME Government Fee Concession',
        'Registry Examination Hearing & Status Monitoring',
        'Direct Guidance from Qualified IP Practitioners',
      ],
      serviceName: 'Trademark Registration',
    },
    {
      id: 'gst-compliance',
      title: 'Complete GST & Tax Filing Pack',
      subtitle: 'Periodic GST & Indirect Tax Management',
      timeline: 'Monthly Retainer Schedule',
      badge: 'Tax Compliance',
      category: 'Tax & Compliance',
      inclusions: [
        'Fresh GSTIN Registration or Multi-State Addition',
        'Monthly GSTR-1 Sales Invoices Return Filing',
        'Monthly GSTR-3B Summary Tax Payment Filing',
        'Input Tax Credit (ITC) Reconciliation Support',
        'E-Way Bill Generation & Invoicing Guidance',
        'Advisory on Department Clarifications & Queries',
        'Annual GSTR-9 Preparation & Reconciliation',
        'Direct Consultation with Tax Practitioners',
      ],
      serviceName: 'GST Return Filing',
    },
    {
      id: 'annual-roc',
      title: 'Annual ROC Compliance Retainer',
      subtitle: 'Year-Round Secretarial Protection',
      timeline: 'Annual Retainer Schedule',
      badge: 'Statutory Governance',
      category: 'MCA Services',
      inclusions: [
        'Form AOC-4 Financial Statements Lodgement',
        'Form MGT-7 / MGT-7A Annual Return Lodgement',
        'Mandatory Annual DIR-3 KYC for All Directors',
        'Drafting of Annual General Meeting (AGM) Minutes',
        'Board Resolutions & Statutory Registers Assistance',
        'Proactive Calendar Alerts to Prevent MCA Late Penalties',
        'Due Diligence Review against Strike-Off Notices',
        'Assigned Corporate Secretary Review Officer',
      ],
      serviceName: 'Annual ROC Filings',
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
    <div className="space-y-16 lg:space-y-24 pb-20 bg-white">
      {/* =========================================================================
          1. HERO SECTION (SIMPLE, CLEAN RCPL ADVISORY SPEC)
         ========================================================================= */}
      <section className="relative pt-10 sm:pt-16 pb-12 sm:pb-16 bg-white">
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
                  className="px-7 py-3.5 bg-[#152E4D] hover:bg-[#0D1E33] text-white text-sm font-bold rounded-md shadow-md transition-all cursor-pointer inline-flex items-center gap-2 active:scale-[0.99]"
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

        {/* Floating 3-Pillar Trust Banner */}
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 mt-10 lg:mt-12">
          <div className="bg-white border border-[#E2E8F0] rounded-2xl shadow-lg p-6 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-[#E2E8F0] items-center">
              
              {/* Item 1: Handshake / Trusted */}
              <div className="flex items-center gap-4 justify-center md:justify-start md:px-4">
                <div className="w-12 h-12 rounded-full bg-[#F0F5FA] text-[#152E4D] flex items-center justify-center shrink-0">
                  <Handshake className="w-6 h-6 text-[#152E4D]" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#121B24] leading-tight">Trusted by over</p>
                  <p className="text-base font-bold text-[#152E4D] leading-tight mt-0.5">1,000+ Entrepreneurs</p>
                </div>
              </div>

              {/* Item 2: Award / India's Leading */}
              <div className="flex items-center gap-4 justify-center md:justify-start pt-4 md:pt-0 md:px-6">
                <div className="w-12 h-12 rounded-full bg-[#FDF8F0] text-[#B28348] flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6 text-[#B28348]" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#121B24] leading-tight">Led by Qualified</p>
                  <p className="text-base font-bold text-[#B28348] leading-tight mt-0.5">CA, CS &amp; Legal Specialists</p>
                </div>
              </div>

              {/* Item 3: Thumbs Up / Easier Faster */}
              <div className="flex items-center gap-4 justify-center md:justify-start pt-4 md:pt-0 md:px-6">
                <div className="w-12 h-12 rounded-full bg-[#F0FDF4] text-[#16A34A] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-[#16A34A]" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#121B24] leading-tight">100% Paperless</p>
                  <p className="text-base font-bold text-[#152E4D] leading-tight mt-0.5">Transparent &amp; Reliable</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. "FOCUS ON GROWTH, WE HANDLE COMPLIANCE" (RCPL SPEC)
         ========================================================================= */}
      <section className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#121B24]">
          Focus on Growth, We Handle Compliance
        </h2>
        <p className="text-base sm:text-lg text-[#4A5568] max-w-2xl mx-auto leading-relaxed">
          Your business is your passion. Concentrate on growing and delighting customers while RCPL Services handles your registrations, statutory filings, and legal documentation seamlessly.
        </p>

        {/* Live Service Autocomplete Search Bar */}
        <div className="pt-2 relative max-w-xl mx-auto text-left">
          <div className="relative flex items-center border-2 border-[#CCD3DA] bg-white focus-within:border-[#152E4D] rounded-md transition-colors shadow-xs">
            <Search className="w-5 h-5 text-[#8C9BAA] absolute left-3.5 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setTimeout(() => setIsSearchFocused(false), 250)}
              placeholder="Search services (e.g. Private Limited, Trademark, GST, MSME)..."
              className="w-full pl-11 pr-24 py-3 text-sm text-[#121B24] placeholder-[#8C9BAA] focus:outline-hidden"
            />
            <button
              type="button"
              onClick={() => {
                const el = document.getElementById('services-tabs-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="absolute right-1.5 px-4 py-2 bg-[#152E4D] hover:bg-[#0D1E33] text-white text-xs font-bold rounded-sm transition-colors cursor-pointer"
            >
              Search
            </button>
          </div>

          {/* Autocomplete Dropdown */}
          {isSearchFocused && filteredSearchResults.length > 0 && (
            <div className="absolute left-0 right-0 top-full mt-1.5 bg-white border border-[#CCD3DA] shadow-xl z-50 divide-y divide-[#E3E7EB] rounded-md">
              <div className="px-3.5 py-1.5 bg-[#FAFBFB] text-[10px] font-mono uppercase tracking-wider text-[#64748B] font-semibold">
                Matching Services ({filteredSearchResults.length})
              </div>
              {filteredSearchResults.map((result) => (
                <Link
                  key={result.id}
                  to={`/services/${result.categorySlug}/${result.slug}`}
                  className="p-3 hover:bg-[#FAFBFB] transition-colors flex items-center justify-between group block"
                >
                  <div>
                    <p className="text-xs font-bold text-[#121B24] group-hover:text-[#152E4D]">
                      {result.title}
                    </p>
                    <p className="text-[11px] text-[#64748B] line-clamp-1 mt-0.5">
                      {result.categoryTitle} — {result.summary}
                    </p>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-[#8C9BAA] group-hover:text-[#152E4D] shrink-0 ml-3" />
                </Link>
              ))}
            </div>
          )}

          {/* Popular Search Tags */}
          <div className="pt-2.5 flex flex-wrap items-center justify-center gap-x-2 gap-y-1.5 text-xs text-[#64748B]">
            <span className="font-semibold text-[#121B24]">Popular:</span>
            <Link
              to="/services/business-formation/private-limited-company"
              className="px-2.5 py-0.5 bg-[#F1F5F9] hover:bg-[#E2E8F0] text-[#1E293B] rounded-xs transition-colors text-[11px] font-medium"
            >
              Private Limited Company
            </Link>
            <Link
              to="/services/intellectual-property/trademark-registration"
              className="px-2.5 py-0.5 bg-[#F1F5F9] hover:bg-[#E2E8F0] text-[#1E293B] rounded-xs transition-colors text-[11px] font-medium"
            >
              Trademark Registration
            </Link>
            <Link
              to="/services/registrations/gst-registration"
              className="px-2.5 py-0.5 bg-[#F1F5F9] hover:bg-[#E2E8F0] text-[#1E293B] rounded-xs transition-colors text-[11px] font-medium"
            >
              GST Registration
            </Link>
            <Link
              to="/services/registrations/msme-registration"
              className="px-2.5 py-0.5 bg-[#F1F5F9] hover:bg-[#E2E8F0] text-[#1E293B] rounded-xs transition-colors text-[11px] font-medium"
            >
              MSME / Udyam
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. AREAS OF EXPERTISE & BUSINESSES WE SERVE
         ========================================================================= */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-[11px] font-mono uppercase tracking-wider text-[#152E4D] font-bold">
            Tailored Practice Scopes
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#121B24]">
            Who We Support Across India
          </h2>
          <p className="text-xs sm:text-sm text-[#64748B]">
            From early-stage founders to expanding commercial enterprises, we align our facilitation with the exact regulatory demands of your business stage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {businessesServed.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-[#CCD3DA] rounded-xs p-6 space-y-4 hover:border-[#152E4D] hover:shadow-sm transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xs bg-[#F0F5FA] text-[#152E4D] flex items-center justify-center border border-[#D0DFEC]">
                    <Icon className="w-5 h-5 text-[#152E4D]" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-[#121B24] leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-[#152E4D] font-medium mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E2E8F0]">
                  <p className="text-[10px] font-mono uppercase tracking-wider text-[#64748B] font-semibold mb-1.5">
                    Common Requirements:
                  </p>
                  <ul className="space-y-1 text-xs text-[#334155]">
                    {item.popularServices.map((svc, i) => (
                      <li key={i} className="flex items-center gap-1.5 text-[11px]">
                        <Check className="w-3 h-3 text-[#25D366] shrink-0" />
                        <span className="truncate">{svc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          4. SIGNATURE SERVICE CATEGORY TABS (ORGANIZED & SCANNABLE DISCOVERY)
         ========================================================================= */}
      <section id="services-tabs-section" className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-[#E2E8F0]">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#152E4D] font-bold">
              Explore Our Services
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#121B24] mt-1">
              Statutory Services &amp; Compliance Directory
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#64748B] max-w-md">
            Select a practice domain below to review verified prerequisites, regulatory steps, and direct WhatsApp consultation options.
          </p>
        </div>

        {/* Category Tabs Bar */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 border-b border-[#E2E8F0]">
          {categoryTabs.map((tab) => {
            const isActive = activeCategoryTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveCategoryTab(tab.id)}
                className={`px-4 py-2 text-xs font-semibold rounded-xs transition-colors whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-[#152E4D] text-white shadow-xs'
                    : 'text-[#475569] bg-[#F1F5F9] hover:bg-[#E2E8F0] hover:text-[#121B24]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Clean Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          {displayedServices.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-[#CCD3DA] rounded-xs p-6 hover:border-[#152E4D] hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="inline-block px-2.5 py-0.5 bg-[#F1F5F9] text-[#1E293B] text-[10px] font-bold uppercase tracking-wider rounded-xs">
                    {service.categoryTitle}
                  </span>
                  <span className="text-[11px] font-mono text-[#64748B]">
                    MCA / Central Portal
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold text-[#121B24] hover:text-[#152E4D] transition-colors leading-snug">
                  <Link to={`/services/${service.categorySlug}/${service.slug}`}>
                    {service.title}
                  </Link>
                </h3>

                <p className="text-xs text-[#64748B] leading-relaxed line-clamp-2">
                  {service.summary}
                </p>

                {/* Key Deliverables Bullet Points */}
                <div className="pt-2 border-t border-[#F1F5F9] space-y-1.5 text-xs text-[#334155]">
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
              <div className="pt-5 mt-4 border-t border-[#E2E8F0] flex items-center justify-between gap-3">
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
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#152E4D] hover:bg-[#0D1E33] text-white text-xs font-semibold rounded-xs transition-colors cursor-pointer"
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
          5. POPULAR PACKAGES (COMMONLY BUNDLED BUSINESS SERVICES)
         ========================================================================= */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-[11px] font-mono uppercase tracking-wider text-[#152E4D] font-bold">
            Curated Bundles
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#121B24]">
            Popular Business Formation &amp; Compliance Packages
          </h2>
          <p className="text-xs sm:text-sm text-[#64748B]">
            End-to-end statutory and regulatory packages designed for new enterprises, expanding brands, and corporate annual retainers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white border-2 border-[#CCD3DA] rounded-xs p-6 flex flex-col justify-between hover:border-[#152E4D] hover:shadow-md transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="inline-block px-2.5 py-0.5 bg-[#EFF6FF] text-[#1E40AF] text-[10px] font-bold uppercase tracking-wider rounded-xs">
                    {pkg.badge}
                  </span>
                  <span className="text-[11px] font-medium text-[#64748B] flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#152E4D]" />
                    <span>{pkg.timeline}</span>
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-lg font-bold text-[#121B24] leading-snug">
                    {pkg.title}
                  </h3>
                  <p className="text-xs text-[#64748B] mt-1">
                    {pkg.subtitle}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E2E8F0] space-y-2">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-[#152E4D] font-bold">
                    What&apos;s Included:
                  </p>
                  <ul className="space-y-2 text-xs text-[#334155]">
                    {pkg.inclusions.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#25D366] shrink-0 mt-0.5" />
                        <span className="leading-tight">{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-5 mt-6 border-t border-[#E2E8F0]">
                <button
                  type="button"
                  onClick={() => openEnquiryModal(pkg.serviceName)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-[#152E4D] hover:bg-[#0D1E33] text-white text-xs font-semibold rounded-xs transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>Enquire This Package</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          6. HOW IT WORKS (REALISTIC 4-STEP WORKFLOW, NO FALSE PROMISES)
         ========================================================================= */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xs p-8 sm:p-12">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#152E4D] font-bold">
              Procedural Roadmap
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#121B24]">
              How the Filing Process Works
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B]">
              A disciplined, four-stage workflow to ensure your documentation satisfies statutory registry standards without delays.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorksSteps.map((step) => (
              <div
                key={step.step}
                className="bg-white border border-[#CCD3DA] rounded-xs p-6 space-y-3 relative"
              >
                <div className="w-10 h-10 rounded-xs bg-[#152E4D] text-white font-display font-bold text-lg flex items-center justify-center shadow-xs">
                  {step.step}
                </div>
                <h3 className="font-display text-base font-bold text-[#121B24] leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. WHY CHOOSE THIS SERVICE (PRACTICAL BENEFITS, NO UNSUPPORTED CLAIMS)
         ========================================================================= */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-[11px] font-mono uppercase tracking-wider text-[#152E4D] font-bold">
            The Advisory Commitment
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#121B24]">
            Why Businesses Choose RCPL Services
          </h2>
          <p className="text-xs sm:text-sm text-[#64748B]">
            We bridge the gap between complex Indian corporate regulatory laws and growing commercial enterprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUsPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-[#CCD3DA] rounded-xs p-6 space-y-3 hover:border-[#152E4D] hover:shadow-sm transition-all"
              >
                <div className="w-10 h-10 rounded-xs bg-[#F0F5FA] text-[#152E4D] flex items-center justify-center border border-[#D0DFEC]">
                  <Icon className="w-5 h-5 text-[#152E4D]" />
                </div>
                <h3 className="font-display text-base font-bold text-[#121B24] leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          8. EXPERT SUPPORT / CONTACT PANEL
         ========================================================================= */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#121B24] text-white p-8 sm:p-12 rounded-xs border border-[#243342]">
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
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#25D366] hover:bg-[#20ba5a] text-[#121B24] text-xs font-bold uppercase tracking-wider rounded-xs transition-colors cursor-pointer shadow-md"
              >
                <MessageSquare className="w-4 h-4 text-[#121B24]" />
                <span>Talk to an Expert on WhatsApp</span>
              </button>

              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-transparent hover:bg-white/5 text-[#CCD3DA] hover:text-white text-xs font-semibold uppercase tracking-wider border border-[#3A4754] transition-colors rounded-xs text-center"
              >
                <span>Office &amp; Contact Details</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#25D366]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          9. FREQUENTLY ASKED QUESTIONS (ACCURATE & CAREFUL GUIDANCE)
         ========================================================================= */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="pb-4 border-b border-[#E2E8F0]">
          <span className="text-[11px] font-mono uppercase tracking-wider text-[#152E4D] font-bold">
            Frequently Asked Questions
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#121B24] mt-1">
            Common Questions on Business Registration &amp; Compliance
          </h2>
          <p className="text-xs sm:text-sm text-[#64748B] mt-1">
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
