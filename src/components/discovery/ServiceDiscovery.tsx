import React, { useState, useRef, useEffect } from 'react';
import { Link } from '../common/Link';
import { useRouter } from '../../context/RouterContext';
import { candidateServices, serviceCategories } from '../../data/services';
import { trackConversionEvent } from '../../utils/analytics';
import {
  Briefcase,
  ShieldCheck,
  FileSpreadsheet,
  Shuffle,
  ArrowRight,
  ArrowUpRight,
  Search,
  Sparkles,
  MessageSquare,
  Filter,
} from 'lucide-react';

export type IntentKey = 'start-business' | 'register-protect' | 'manage-compliance' | 'make-change';

interface Pathway {
  key: IntentKey;
  number: string;
  title: string;
  tagline: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  recommendedStartingPoint: string;
  primaryCategorySlugs: string[];
  featuredServiceSlugs: string[];
}

const pathways: Pathway[] = [
  {
    key: 'start-business',
    number: '01',
    title: 'Start a Business',
    tagline: 'Company formation & entity structures',
    icon: Briefcase,
    description:
      'Evaluate appropriate legal structures to incorporate your venture with limited liability, capital investment readiness, and statutory recognition.',
    recommendedStartingPoint:
      'Most early-stage ventures evaluate between a Private Limited Company (for equity fundraising) and an LLP (for professional services).',
    primaryCategorySlugs: ['business-formation'],
    featuredServiceSlugs: [
      'private-limited-company',
      'limited-liability-partnership',
      'one-person-company',
      'sole-proprietorship',
      'partnership-firm',
      'public-limited-company',
    ],
  },
  {
    key: 'register-protect',
    number: '02',
    title: 'Register or Protect',
    tagline: 'Intellectual property, trade codes & operational licences',
    icon: ShieldCheck,
    description:
      'Safeguard proprietary brand assets, original works, and obtain mandatory cross-border or tax registrations for lawful commercial operation.',
    recommendedStartingPoint:
      'Trade marks should be filed early to establish priority dates; GST and IEC are essential for physical supply and foreign transactions.',
    primaryCategorySlugs: ['intellectual-property', 'registrations'],
    featuredServiceSlugs: [
      'trademark-registration',
      'trademark-renewal',
      'copyright-registration',
      'patent-applications',
      'gst-registration',
      'import-export-code',
      'startup-india-registration',
      'apeda-registration',
    ],
  },
  {
    key: 'manage-compliance',
    number: '03',
    title: 'Manage Compliance',
    tagline: 'Taxation, periodic returns & employee benefit schemes',
    icon: FileSpreadsheet,
    description:
      'Maintain periodic statutory filings, payroll tax deductions, and social security registrations to prevent penal interest and default notices.',
    recommendedStartingPoint:
      'Reconciling sales registers against GSTR-2B monthly prevents input credit disallowances during annual return preparation.',
    primaryCategorySlugs: ['taxation'],
    featuredServiceSlugs: [
      'gst-filing',
      'income-tax-filing',
      'tds-filing',
      'epf-services',
      'esi-services',
      'professional-tax',
    ],
  },
  {
    key: 'make-change',
    number: '04',
    title: 'Make a Change',
    tagline: 'Corporate secretarial updates & structural conversions',
    icon: Shuffle,
    description:
      'Execute corporate governance changes, capital expansions, or transition your unorganised enterprise into an incorporated corporate vehicle.',
    recommendedStartingPoint:
      'Director appointments and registered office migrations require formal board resolutions and timely MCA portal filings.',
    primaryCategorySlugs: ['secretarial', 'company-conversions'],
    featuredServiceSlugs: [
      'director-partner-changes',
      'registered-office-change',
      'proprietorship-to-private-limited',
      'partnership-to-llp',
      'partnership-to-private-limited',
      'company-name-change',
      'authorised-capital-changes',
      'share-transfers',
    ],
  },
];

export const ServiceDiscovery: React.FC = () => {
  const [selectedKey, setSelectedKey] = useState<IntentKey>('start-business');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchAcrossAll, setSearchAcrossAll] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const tabListRef = useRef<HTMLDivElement>(null);
  const { openEnquiryModal } = useRouter();

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(motionQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    motionQuery.addEventListener('change', handler);
    return () => motionQuery.removeEventListener('change', handler);
  }, []);

  const activeIndex = pathways.findIndex((p) => p.key === selectedKey);
  const activePathway = pathways[activeIndex] || pathways[0];

  // Keyboard navigation for tablist
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      const nextIndex = (index + 1) % pathways.length;
      handleSelectPathway(pathways[nextIndex].key);
      const tabs = tabListRef.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]');
      tabs?.[nextIndex]?.focus();
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      const prevIndex = (index - 1 + pathways.length) % pathways.length;
      handleSelectPathway(pathways[prevIndex].key);
      const tabs = tabListRef.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]');
      tabs?.[prevIndex]?.focus();
    } else if (e.key === 'Home') {
      e.preventDefault();
      handleSelectPathway(pathways[0].key);
      const tabs = tabListRef.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]');
      tabs?.[0]?.focus();
    } else if (e.key === 'End') {
      e.preventDefault();
      const lastIndex = pathways.length - 1;
      handleSelectPathway(pathways[lastIndex].key);
      const tabs = tabListRef.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]');
      tabs?.[lastIndex]?.focus();
    }
  };

  const handleSelectPathway = (key: IntentKey) => {
    setSelectedKey(key);
    trackConversionEvent('service_explorer_intent_select', { intentKey: key });
  };

  const handleSearchChange = (val: string) => {
    setSearchQuery(val);
    if (val.trim().length >= 2) {
      trackConversionEvent('service_explorer_search', { searchQueryLength: val.trim().length });
    }
  };

  // Resolve pathway services
  const pathwayServices = activePathway.featuredServiceSlugs
    .map((slug) => candidateServices.find((s) => s.slug === slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  // CRO Fix: If search query is present, search catalogue across all services to prevent false "No services" bounce!
  const isSearching = searchQuery.trim().length > 0;
  const filteredServices = isSearching
    ? (searchAcrossAll ? candidateServices : pathwayServices).filter(
        (s) =>
          s.status !== 'draft' &&
          (s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            s.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
            s.categoryTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
            s.whoNeedsThis.some((w) => w.toLowerCase().includes(searchQuery.toLowerCase())))
      )
    : pathwayServices;

  const activeCategories = activePathway.primaryCategorySlugs
    .map((slug) => serviceCategories.find((c) => c.slug === slug))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  return (
    <div className="bg-[#FFFFFF] border border-[#D8DDD7] rounded-[24px] shadow-sm overflow-hidden">
      {/* Top Header */}
      <div className="p-6 sm:p-10 border-b border-[#D8DDD7] bg-gradient-to-b from-[#F5F2E9] to-[#FFFFFF]">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#20483A]" />
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#20483A] font-semibold">
                Service Explorer & Intent Matcher
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111714] tracking-tight">
              What does your business need help with?
            </h2>
            <p className="text-sm text-[#52616B] leading-relaxed">
              Select your immediate goal below to reveal tailored starting points, candidate service profiles, and direct WhatsApp consultation options.
            </p>
          </div>

          {/* Quick Keyword Filter Input: Pill Shape */}
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-[#A6ADA7] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder="Search all services (e.g. GST, Private Ltd, Trademark)..."
              aria-label="Search candidate services across all practice areas"
              className="w-full pl-10 pr-10 py-2.5 bg-white border border-[#D8DDD7] focus:border-[#20483A] rounded-full text-xs text-[#111714] placeholder-[#A6ADA7] focus:outline-hidden focus:ring-1 focus:ring-[#20483A] transition-all shadow-xs"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#D8DDD7]/60 text-xs text-[#111714] flex items-center justify-center hover:bg-[#D8DDD7] transition-colors"
              >
                ×
              </button>
            )}
          </div>
        </div>

        {/* Global Search Notice if Searching */}
        {isSearching && (
          <div className="mt-4 pt-3 border-t border-[#D8DDD7]/70 flex flex-wrap items-center justify-between text-xs text-[#52616B]">
            <span>
              Searching across entire service catalogue for "<strong>{searchQuery}</strong>" ({filteredServices.length} result{filteredServices.length === 1 ? '' : 's'})
            </span>
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="text-xs font-semibold text-[#20483A] hover:underline"
            >
              Reset to Intent Pathways
            </button>
          </div>
        )}
      </div>

      {/* 4 Interactive Intent Pathways Selector (Tablist with varied shape language) */}
      {!isSearching && (
        <div
          ref={tabListRef}
          role="tablist"
          aria-label="Service Intent Navigation"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#D8DDD7] border-b border-[#D8DDD7] bg-[#FFFFFF]"
        >
          {pathways.map((pathway, idx) => {
            const isSelected = pathway.key === selectedKey;
            const Icon = pathway.icon;
            const tabId = `intent-tab-${pathway.key}`;
            const panelId = `intent-panel-${pathway.key}`;

            return (
              <button
                key={pathway.key}
                id={tabId}
                role="tab"
                aria-selected={isSelected}
                aria-controls={panelId}
                tabIndex={isSelected ? 0 : -1}
                onClick={() => handleSelectPathway(pathway.key)}
                onKeyDown={(e) => handleKeyDown(e, idx)}
                className={`p-6 sm:p-7 text-left transition-all relative group cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#20483A] min-h-[115px] ${
                  isSelected
                    ? 'bg-[#111714] text-[#FFFFFF]'
                    : 'hover:bg-[#F5F2E9]/60 text-[#111714]'
                }`}
              >
                {/* Active Indicator Top Accent */}
                {isSelected && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#C5A46D]" />
                )}

                <div className="flex items-center justify-between mb-3.5">
                  <span
                    className={`font-mono text-xs font-semibold ${
                      isSelected ? 'text-[#C5A46D]' : 'text-[#A6ADA7]'
                    }`}
                  >
                    {pathway.number}
                  </span>

                  {/* Circular Icon Accent Node */}
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                      isSelected
                        ? 'bg-[#20483A] text-[#C5A46D] shadow-[0_0_12px_rgba(197,164,109,0.2)]'
                        : 'bg-[#F5F2E9] text-[#20483A] group-hover:bg-[#E5DFD0]'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="font-display text-base font-bold tracking-tight">
                  {pathway.title}
                </h3>
                <p
                  className={`text-xs mt-1.5 leading-snug line-clamp-2 ${
                    isSelected ? 'text-[#A6ADA7]' : 'text-[#52616B]'
                  }`}
                >
                  {pathway.tagline}
                </p>
              </button>
            );
          })}
        </div>
      )}

      {/* Dynamic Content Panel (Tabpanel) with Open Service Rows */}
      <div
        id={`intent-panel-${activePathway.key}`}
        role="tabpanel"
        aria-labelledby={`intent-tab-${activePathway.key}`}
        className="p-6 sm:p-10 bg-[#FFFFFF] transition-opacity duration-300"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column (5 Cols): Strategic Guidance & Pill Primary CTA */}
          <div className="lg:col-span-5 space-y-6">
            {!isSearching ? (
              <>
                <div className="space-y-3">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#C5A46D] font-semibold">
                    Strategic Pathway {activePathway.number}
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#111714] tracking-tight">
                    {activePathway.title}
                  </h3>
                  <p className="text-sm text-[#52616B] leading-relaxed">
                    {activePathway.description}
                  </p>
                </div>

                {/* Strategic note with organic rounded accent */}
                <div className="p-5 bg-[#F5F2E9] border-l-3 border-[#20483A] rounded-r-[12px] space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#20483A] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#C5A46D]" />
                    <span>Recommended Starting Point</span>
                  </p>
                  <p className="text-xs text-[#52616B] leading-relaxed">
                    {activePathway.recommendedStartingPoint}
                  </p>
                </div>

                {/* Direct Categories in this pathway as minimal clean tags */}
                <div className="space-y-2.5 pt-1">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-[#A6ADA7]">
                    Related Practice Domains
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {activeCategories.map((cat) => (
                      <Link
                        key={cat.id}
                        to={`/services/${cat.slug}`}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#F5F2E9] hover:bg-[#20483A] hover:text-white text-xs font-medium text-[#111714] rounded-full transition-colors"
                      >
                        <span>{cat.title}</span>
                        <ArrowRight className="w-3 h-3 text-[#C5A46D]" />
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Pill-Shaped Primary Action Button */}
                <div className="pt-2 space-y-2">
                  <button
                    type="button"
                    onClick={() => openEnquiryModal(activePathway.title)}
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#20483A] hover:bg-[#163329] text-white font-display text-xs font-semibold uppercase tracking-wider rounded-full transition-all cursor-pointer shadow-sm active:scale-[0.98] hover:shadow-[0_0_18px_rgba(32,72,58,0.35)]"
                  >
                    <MessageSquare className="w-4 h-4 text-[#C5A46D]" />
                    <span>Enquire for {activePathway.title}</span>
                  </button>
                  <p className="text-[11px] text-[#A6ADA7]">
                    Opens WhatsApp with prefilled parameters · No payment required
                  </p>
                </div>
              </>
            ) : (
              <div className="space-y-4">
                <span className="font-mono text-xs uppercase tracking-wider text-[#C5A46D] font-semibold">
                  Catalogue Search Results
                </span>
                <h3 className="font-display text-2xl font-bold text-[#111714]">
                  Matching Services
                </h3>
                <p className="text-sm text-[#52616B] leading-relaxed">
                  Showing all candidate practice profiles matching your query. Click any service to view full procedural requirements, or start a direct WhatsApp inquiry.
                </p>

                <div className="p-4 bg-[#F5F2E9] rounded-[12px] border border-[#D8DDD7] text-xs text-[#52616B] space-y-1">
                  <p className="font-semibold text-[#111714]">Can't find an exact match?</p>
                  <p>Our team handles bespoke corporate secretarial and tax matters.</p>
                  <button
                    type="button"
                    onClick={() => openEnquiryModal(`Consultation for "${searchQuery}"`)}
                    className="text-[#20483A] font-semibold underline cursor-pointer mt-1 block"
                  >
                    Ask our team directly about "{searchQuery}" →
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Column (7 Cols): Open Typographic Service Rows (No card boxes!) */}
          <div className="lg:col-span-7 space-y-3">
            <div className="flex items-center justify-between pb-3 border-b border-[#D8DDD7]">
              <span className="text-xs font-mono uppercase tracking-wider text-[#A6ADA7]">
                {isSearching ? `Catalogue Results (${filteredServices.length})` : 'Services in this Pathway'}
              </span>
              <span className="text-xs text-[#52616B] font-mono">
                {filteredServices.length} Candidate Profiles
              </span>
            </div>

            {filteredServices.length === 0 ? (
              <div className="p-8 text-center bg-[#F5F2E9] rounded-[12px] border border-[#D8DDD7] space-y-3">
                <p className="text-sm text-[#111714] font-medium">No services found matching "{searchQuery}".</p>
                <p className="text-xs text-[#52616B] max-w-sm mx-auto">
                  We frequently assist with unlisted statutory filings and structural adjustments.
                </p>
                <div className="pt-2 flex justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => openEnquiryModal(`Unlisted Service: ${searchQuery}`)}
                    className="px-5 py-2.5 bg-[#20483A] text-white text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-[#163329]"
                  >
                    Ask About This on WhatsApp
                  </button>
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="px-5 py-2.5 border border-[#D8DDD7] text-xs font-medium rounded-full hover:bg-white"
                  >
                    Clear Search
                  </button>
                </div>
              </div>
            ) : (
              <div className="divide-y divide-[#D8DDD7]/70">
                {filteredServices.map((svc) => (
                  <div
                    key={svc.id}
                    className="py-4 sm:py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group transition-colors hover:bg-[#F5F2E9]/40 px-3 -mx-3 rounded-[8px]"
                  >
                    <div className="space-y-1 sm:max-w-md">
                      <div className="flex items-center gap-2 text-[11px] font-mono text-[#C5A46D]">
                        <span>{svc.categoryTitle}</span>
                        <span className="text-[#A6ADA7]">·</span>
                        <span className="text-[#A6ADA7]">Candidate Scope</span>
                      </div>

                      <h4 className="font-display text-base font-bold text-[#111714] group-hover:text-[#20483A] transition-colors leading-snug">
                        <Link to={`/services/${svc.categorySlug}/${svc.slug}`}>
                          {svc.title}
                        </Link>
                      </h4>

                      <p className="text-xs text-[#52616B] leading-relaxed line-clamp-2">
                        {svc.summary}
                      </p>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0 pt-2 sm:pt-0">
                      {/* Direct WhatsApp Action Button */}
                      <button
                        type="button"
                        onClick={() => openEnquiryModal(svc.title)}
                        className="px-3.5 py-1.5 bg-[#20483A]/10 hover:bg-[#20483A] text-[#20483A] hover:text-white border border-[#20483A]/20 text-xs font-semibold uppercase tracking-wider rounded-full transition-all cursor-pointer flex items-center gap-1.5"
                      >
                        <MessageSquare className="w-3 h-3" />
                        <span>Enquire</span>
                      </button>

                      {/* Circular directional control button leading to detail page */}
                      <Link
                        to={`/services/${svc.categorySlug}/${svc.slug}`}
                        aria-label={`View full details for ${svc.title}`}
                        className="w-8 h-8 rounded-full border border-[#D8DDD7] group-hover:border-[#20483A] group-hover:bg-[#20483A] group-hover:text-white flex items-center justify-center text-[#52616B] transition-all shrink-0 active:scale-95 shadow-xs"
                      >
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A46D] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
