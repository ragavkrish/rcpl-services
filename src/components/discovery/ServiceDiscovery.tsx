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
    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
      {/* Top Header */}
      <div className="p-6 sm:p-10 border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#1E3A8A]" />
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#1E3A8A] font-bold">
                Service Explorer & Intent Matcher
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F2942] tracking-tight">
              What does your business need help with?
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Select your immediate goal below to reveal tailored starting points, practice service profiles, and direct WhatsApp consultation options.
            </p>
          </div>

          {/* Quick Keyword Filter Input */}
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder="Search all services (e.g. GST, Private Ltd, Trademark)..."
              aria-label="Search services across all practice areas"
              className="w-full pl-10 pr-10 py-2.5 bg-white border border-slate-300 focus:border-[#1E3A8A] rounded-lg text-xs text-slate-900 placeholder-slate-400 focus:outline-hidden focus:ring-1 focus:ring-[#1E3A8A] transition-all shadow-xs"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-slate-200 text-xs text-slate-700 flex items-center justify-center hover:bg-slate-300 transition-colors"
              >
                ×
              </button>
            )}
          </div>
        </div>

        {/* Global Search Notice if Searching */}
        {isSearching && (
          <div className="mt-4 pt-3 border-t border-slate-200 flex flex-wrap items-center justify-between text-xs text-slate-600">
            <span>
              Searching across entire service catalogue for "<strong>{searchQuery}</strong>" ({filteredServices.length} result{filteredServices.length === 1 ? '' : 's'})
            </span>
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="text-xs font-bold text-[#1E3A8A] hover:underline"
            >
              Reset to Intent Pathways
            </button>
          </div>
        )}
      </div>

      {/* 4 Interactive Intent Pathways Selector (Tablist) */}
      {!isSearching && (
        <div
          ref={tabListRef}
          role="tablist"
          aria-label="Service Intent Navigation"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 border-b border-slate-200 bg-white"
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
                className={`p-6 sm:p-7 text-left transition-all relative group cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#1E3A8A] min-h-[115px] ${
                  isSelected
                    ? 'bg-[#0F2942] text-white shadow-xs'
                    : 'bg-white hover:bg-slate-50 text-slate-900'
                }`}
              >
                {/* Active Indicator Top Accent */}
                {isSelected && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-amber-400" />
                )}

                <div className="flex items-center justify-between mb-3.5">
                  <span
                    className={`font-mono text-xs font-bold ${
                      isSelected ? 'text-amber-300' : 'text-slate-400'
                    }`}
                  >
                    {pathway.number}
                  </span>

                  {/* Circular Icon Accent Node */}
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all ${
                      isSelected
                        ? 'bg-[#1E3A8A] text-white shadow-xs'
                        : 'bg-slate-100 text-[#0F2942] group-hover:bg-slate-200'
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
                    isSelected ? 'text-slate-300' : 'text-slate-600'
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
        className="p-6 sm:p-10 bg-white transition-opacity duration-300"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column (5 Cols): Strategic Guidance & Action Button */}
          <div className="lg:col-span-5 space-y-6">
            {!isSearching ? (
              <>
                <div className="space-y-3">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#1E3A8A] font-bold">
                    Strategic Pathway {activePathway.number}
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0F2942] tracking-tight">
                    {activePathway.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {activePathway.description}
                  </p>
                </div>

                {/* Strategic note */}
                <div className="p-5 bg-blue-50/70 border-l-4 border-[#1E3A8A] rounded-r-lg space-y-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#1E3A8A] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#B45309]" />
                    <span>Recommended Starting Point</span>
                  </p>
                  <p className="text-xs text-slate-700 leading-relaxed font-medium">
                    {activePathway.recommendedStartingPoint}
                  </p>
                </div>

                {/* Direct Categories in this pathway */}
                <div className="space-y-2.5 pt-1">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-bold">
                    Related Practice Domains
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {activeCategories.map((cat) => (
                      <Link
                        key={cat.id}
                        to={`/services/${cat.slug}`}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-slate-100 hover:bg-[#1E3A8A] hover:text-white text-xs font-semibold text-slate-800 rounded-lg transition-colors"
                      >
                        <span>{cat.title}</span>
                        <ArrowRight className="w-3 h-3 text-[#1E3A8A]" />
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Primary Action Button */}
                <div className="pt-2 space-y-2">
                  <button
                    type="button"
                    onClick={() => openEnquiryModal(activePathway.title)}
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#1E3A8A] hover:bg-[#1E40AF] text-white font-display text-xs font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer shadow-sm active:scale-[0.98]"
                  >
                    <MessageSquare className="w-4 h-4 text-white" />
                    <span>Enquire for {activePathway.title}</span>
                  </button>
                  <p className="text-[11px] text-slate-500 font-medium">
                    Opens WhatsApp with prefilled parameters · No payment required
                  </p>
                </div>
              </>
            ) : (
              <div className="space-y-4">
                <span className="font-mono text-xs uppercase tracking-wider text-[#1E3A8A] font-bold">
                  Catalogue Search Results
                </span>
                <h3 className="font-display text-2xl font-bold text-[#0F2942]">
                  Matching Services
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Showing all practice profiles matching your query. Click any service to view full procedural requirements, or start a direct WhatsApp inquiry.
                </p>

                <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-600 space-y-1">
                  <p className="font-bold text-slate-900">Can't find an exact match?</p>
                  <p>Our team handles bespoke corporate secretarial and tax matters.</p>
                  <button
                    type="button"
                    onClick={() => openEnquiryModal(`Consultation for "${searchQuery}"`)}
                    className="text-[#1E3A8A] font-bold underline cursor-pointer mt-1 block"
                  >
                    Ask our team directly about "{searchQuery}" →
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Column (7 Cols): Open Typographic Service Rows */}
          <div className="lg:col-span-7 space-y-3">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold">
                {isSearching ? `Catalogue Results (${filteredServices.length})` : 'Services in this Pathway'}
              </span>
              <span className="text-xs text-slate-500 font-mono font-semibold">
                {filteredServices.length} Practice Profiles
              </span>
            </div>

            {filteredServices.length === 0 ? (
              <div className="p-8 text-center bg-slate-50 rounded-lg border border-slate-200 space-y-3">
                <p className="text-sm text-slate-900 font-bold">No services found matching "{searchQuery}".</p>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  We frequently assist with unlisted statutory filings and structural adjustments.
                </p>
                <div className="pt-2 flex justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => openEnquiryModal(`Unlisted Service: ${searchQuery}`)}
                    className="px-5 py-2.5 bg-[#1E3A8A] text-white text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-[#1E40AF]"
                  >
                    Ask About This on WhatsApp
                  </button>
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="px-5 py-2.5 border border-slate-300 text-xs font-bold rounded-lg hover:bg-white text-slate-700"
                  >
                    Clear Search
                  </button>
                </div>
              </div>
            ) : (
              <div className="divide-y divide-slate-200">
                {filteredServices.map((svc) => (
                  <div
                    key={svc.id}
                    className="py-4 sm:py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group transition-colors hover:bg-slate-50 px-3 -mx-3 rounded-lg"
                  >
                    <div className="space-y-1 sm:max-w-md">
                      <div className="flex items-center gap-2 text-[11px] font-mono text-[#1E3A8A] font-bold">
                        <span>{svc.categoryTitle}</span>
                        <span className="text-slate-300">·</span>
                        <span className="text-slate-500 font-medium">Practice Scope</span>
                      </div>

                      <h4 className="font-display text-base font-bold text-[#0F2942] group-hover:text-[#1E3A8A] transition-colors leading-snug">
                        <Link to={`/services/${svc.categorySlug}/${svc.slug}`}>
                          {svc.title}
                        </Link>
                      </h4>

                      <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                        {svc.summary}
                      </p>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0 pt-2 sm:pt-0">
                      {/* Direct WhatsApp Action Button */}
                      <button
                        type="button"
                        onClick={() => openEnquiryModal(svc.title)}
                        className="px-3.5 py-1.5 bg-blue-50 hover:bg-[#1E3A8A] text-[#1E3A8A] hover:text-white border border-blue-200 text-xs font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer flex items-center gap-1.5 shadow-xs"
                      >
                        <MessageSquare className="w-3 h-3" />
                        <span>Enquire</span>
                      </button>

                      {/* Directional control button */}
                      <Link
                        to={`/services/${svc.categorySlug}/${svc.slug}`}
                        aria-label={`View full details for ${svc.title}`}
                        className="w-8 h-8 rounded-lg border border-slate-300 group-hover:border-[#1E3A8A] group-hover:bg-[#1E3A8A] group-hover:text-white flex items-center justify-center text-slate-600 transition-all shrink-0 active:scale-95 shadow-xs"
                      >
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#1E3A8A] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
