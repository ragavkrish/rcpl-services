import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from './Link';
import { useRouter } from '../../context/RouterContext';
import { candidateServices } from '../../data/services';
import {
  Phone,
  MessageSquare,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
} from 'lucide-react';

export const Header: React.FC = () => {
  const { openEnquiryModal, currentPath } = useRouter();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileExpandedCat, setMobileExpandedCat] = useState<string | null>('RA License');

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isMobileMenuOpen]);

  const getCategoryServices = (categorySlugs: string[]) => {
    return candidateServices.filter(
      (s) => categorySlugs.includes(s.categorySlug) && s.status !== 'draft'
    );
  };

  const navMenuItems = [
    {
      title: 'RA License',
      slug: 'ra-license',
      slugs: ['ra-license'],
      featured: true,
      description: 'Overseas Recruiting Agent (RA) License registration, ₹50L BG advisory & MEA eMigrate liaison.',
    },
    {
      title: 'Formation',
      slug: 'business-formation',
      slugs: ['business-formation', 'company-conversions'],
      featured: false,
      description: 'Private Limited, LLP, OPC, Partnership, Section 8 NGO, and entity conversions.',
    },
    {
      title: 'Registrations',
      slug: 'registrations',
      slugs: ['registrations'],
      featured: false,
      description: 'GSTIN, MSME / Udyam, Startup India DPIIT, Import Export Code (IEC), and APEDA.',
    },
    {
      title: 'Trademark & IP',
      slug: 'intellectual-property',
      slugs: ['intellectual-property'],
      featured: false,
      description: 'Trademark search, TM-A filing, examination objection reply, copyright & patent support.',
    },
    {
      title: 'Tax & Filings',
      slug: 'taxation',
      slugs: ['taxation'],
      featured: false,
      description: 'Periodic GST returns, corporate income tax, TDS compliance, and accounting records.',
    },
    {
      title: 'MCA Secretarial',
      slug: 'secretarial',
      slugs: ['secretarial'],
      featured: false,
      description: 'Annual ROC filings (AOC-4 / MGT-7), Director KYC, share transfers & office changes.',
    },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-2xs">
      {/* MAIN EXECUTIVE NAVIGATION BAR */}
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-18 lg:h-20 gap-3 sm:gap-4">
          {/* Brand Wordmark & Logo */}
          <Link
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center shrink-0 py-1.5 group"
          >
            <img
              src="/assets/aistudio/rcpl-logo.png"
              alt="RCPL Services"
              className="h-7 sm:h-8.5 lg:h-9.5 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation Links — Clean Single-Row Executive Architecture */}
          <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navMenuItems.map((item, idx) => {
              const services = getCategoryServices(item.slugs);
              const isOpen = activeDropdown === item.title;
              const isActiveRoute = currentPath.startsWith(`/services/${item.slug}`);

              return (
                <div
                  key={item.title}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.title)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    type="button"
                    onClick={() => setActiveDropdown(isOpen ? null : item.title)}
                    aria-expanded={isOpen}
                    className={`inline-flex items-center gap-1 py-2 px-2.5 rounded-lg text-[13px] font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                      isOpen || isActiveRoute
                        ? 'text-[#152E4D] bg-slate-100/80'
                        : 'text-slate-700 hover:text-[#152E4D] hover:bg-slate-50'
                    }`}
                  >
                    <span className={idx === 0 ? 'font-bold' : undefined}>{item.title}</span>
                    {item.featured && (
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#D99A32] bg-[#D99A32]/10 border border-[#D99A32]/30 px-1.5 py-0.5 rounded font-bold ml-1">
                        MEA
                      </span>
                    )}
                    <ChevronDown
                      className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-150 ${
                        isOpen ? 'rotate-180 text-[#152E4D]' : ''
                      }`}
                    />
                  </button>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 4, scale: 0.99 }}
                        transition={{ duration: 0.18, ease: 'easeOut' }}
                        className="absolute left-1/2 -translate-x-1/2 top-full pt-1.5 w-[390px] z-50"
                      >
                        <div className="bg-white border border-slate-200/90 shadow-xl p-4 text-left rounded-xl">
                          <div className="pb-2.5 mb-2.5 border-b border-slate-100 flex items-baseline justify-between">
                            <div>
                              <Link
                                to={`/services/${item.slug}`}
                                onClick={() => setActiveDropdown(null)}
                                className={`font-display text-sm font-bold flex items-center gap-1.5 ${
                                  item.slug === 'ra-license'
                                    ? 'text-[#121B24] hover:text-[#D99A32]'
                                    : 'text-[#121B24] hover:text-[#152E4D]'
                                }`}
                              >
                                <span>{item.title} Practice</span>
                                <ArrowRight
                                  className={`w-3.5 h-3.5 ${
                                    item.slug === 'ra-license' ? 'text-[#D99A32]' : 'text-[#1D4ED8]'
                                  }`}
                                />
                              </Link>
                              <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                                {item.description}
                              </p>
                            </div>
                          </div>

                          {/* Service Directory Grid */}
                          <div className="grid grid-cols-1 gap-1 max-h-[260px] overflow-y-auto pr-1">
                            {services.slice(0, 6).map((svc) => (
                              <Link
                                key={svc.id}
                                to={`/services/${svc.categorySlug}/${svc.slug}`}
                                onClick={() => setActiveDropdown(null)}
                                className="py-1.5 px-2.5 hover:bg-slate-50 rounded-lg transition-colors group block"
                              >
                                <span
                                  className={`text-xs font-semibold block truncate ${
                                    item.slug === 'ra-license'
                                      ? 'text-[#121B24] group-hover:text-[#D99A32]'
                                      : 'text-[#121B24] group-hover:text-[#152E4D]'
                                  }`}
                                >
                                  {svc.title}
                                </span>
                                <span className="text-[11px] text-slate-500 block truncate font-normal">
                                  {svc.summary}
                                </span>
                              </Link>
                            ))}
                          </div>

                          <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs bg-slate-50/80 p-2.5 rounded-lg border border-slate-200/60">
                            <Link
                              to={`/services/${item.slug}`}
                              onClick={() => setActiveDropdown(null)}
                              className="text-slate-600 hover:text-[#152E4D] font-medium text-[11px]"
                            >
                              View all {services.length} profiles →
                            </Link>
                            <button
                              type="button"
                              onClick={() => {
                                setActiveDropdown(null);
                                openEnquiryModal(item.title);
                              }}
                              className="text-[#152E4D] hover:underline font-bold text-xs flex items-center gap-1 cursor-pointer whitespace-nowrap"
                            >
                              <span>Free Consultation</span>
                              <ArrowRight className="w-3 h-3 text-[#1D4ED8]" />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}

            <Link
              to="/about"
              className={`py-2 px-2.5 rounded-lg text-[13px] font-semibold whitespace-nowrap transition-colors ${
                currentPath === '/about'
                  ? 'text-[#152E4D] bg-slate-100/80'
                  : 'text-slate-700 hover:text-[#152E4D] hover:bg-slate-50'
              }`}
            >
              About Us
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Compact Mobile Consult Action (< sm) */}
            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                openEnquiryModal();
              }}
              className="sm:hidden inline-flex items-center gap-1.5 px-3 py-2 min-h-[40px] bg-[#152E4D] active:bg-[#0D1E33] text-white text-xs font-bold rounded-lg transition-colors cursor-pointer whitespace-nowrap"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#D99A32]" />
              <span>Consult</span>
            </button>

            {/* Tablet & Desktop CTA */}
            <button
              type="button"
              onClick={() => openEnquiryModal()}
              className="hidden sm:inline-flex items-center gap-2 px-4 lg:px-5 py-2.5 min-h-[44px] bg-[#152E4D] hover:bg-[#0D1E33] text-white text-xs font-bold rounded-lg transition-colors cursor-pointer shadow-xs active:scale-[0.99] whitespace-nowrap"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#60A5FA]" />
              <span>Consult an Expert</span>
            </button>

            {/* Mobile Menu Toggle (44x44px Touch Target) */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={isMobileMenuOpen}
              className="lg:hidden w-11 h-11 min-h-[44px] min-w-[44px] border border-slate-200 bg-slate-50/70 text-[#121B24] active:bg-slate-100 flex items-center justify-center rounded-lg transition-colors cursor-pointer"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE FULL-SCREEN NAVIGATION SHEET */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden fixed inset-x-0 top-14 sm:top-18 bottom-0 z-50 bg-[#FCFCFA] border-t border-slate-200 flex flex-col"
          >
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-5">
              {/* Quick Site Navigation Grid */}
              <div className="grid grid-cols-2 gap-2">
                {[
                  { label: 'Overview', to: '/' },
                  { label: 'About Practice', to: '/about' },
                  { label: 'Statutory FAQs', to: '/faq' },
                  { label: 'Contact Desk', to: '/contact' },
                ].map((item) => {
                  const active = currentPath === item.to;
                  return (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`min-h-[44px] px-3.5 py-2.5 rounded-lg text-xs font-semibold flex items-center justify-between border transition-colors ${
                        active
                          ? 'bg-[#152E4D] text-white border-[#152E4D]'
                          : 'bg-white text-[#121B24] border-slate-200/80 active:bg-slate-50'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ArrowRight className={`w-3.5 h-3.5 ${active ? 'text-[#D99A32]' : 'text-slate-400'}`} />
                    </Link>
                  );
                })}
              </div>

              {/* Practice Domains Editorial Accordion */}
              <div>
                <p className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-semibold px-1 mb-2">
                  Practice Domains
                </p>
                <div className="divide-y divide-slate-200/80 border-y border-slate-200/80 bg-white -mx-4 px-4">
                  {navMenuItems.map((menu) => {
                    const services = getCategoryServices(menu.slugs);
                    const isExpanded = mobileExpandedCat === menu.title;
                    const isRa = menu.slug === 'ra-license';

                    return (
                      <div key={menu.title}>
                        <button
                          type="button"
                          onClick={() => setMobileExpandedCat(isExpanded ? null : menu.title)}
                          aria-expanded={isExpanded}
                          className="w-full flex items-center justify-between py-3.5 min-h-[48px] text-left cursor-pointer active:bg-slate-50/80 transition-colors"
                        >
                          <div className="min-w-0 pr-3">
                            <div className="flex items-center gap-2">
                              <span className={`text-sm font-bold ${isRa ? 'text-[#121B24]' : 'text-[#121B24]'}`}>
                                {menu.title}
                              </span>
                              {menu.featured && (
                                <span className="text-[10px] font-mono uppercase tracking-wider text-[#D99A32] font-bold">
                                  · MEA Flagship
                                </span>
                              )}
                            </div>
                            <p className="text-[11px] text-slate-500 truncate mt-0.5">
                              {services.length} statutory profiles
                            </p>
                          </div>
                          <ChevronDown
                            className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-150 ${
                              isExpanded ? 'rotate-180 text-[#152E4D]' : ''
                            }`}
                          />
                        </button>

                        {isExpanded && (
                          <div className="pb-3.5 pt-1 space-y-1 border-t border-slate-100">
                            <Link
                              to={`/services/${menu.slug}`}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className={`flex items-center justify-between text-xs font-bold py-2.5 px-2.5 rounded-lg min-h-[44px] ${
                                isRa
                                  ? 'text-[#B87E22] bg-[#FFFDF8] border border-[#D99A32]/30'
                                  : 'text-[#152E4D] bg-slate-50'
                              }`}
                            >
                              <span>All {menu.title} Services</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                            <div className="divide-y divide-slate-100">
                              {services.map((svc) => (
                                <Link
                                  key={svc.id}
                                  to={`/services/${svc.categorySlug}/${svc.slug}`}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="flex items-center justify-between text-xs font-medium text-slate-700 active:text-[#152E4D] py-2.5 px-2 min-h-[44px]"
                                >
                                  <span className="truncate pr-2">{svc.title}</span>
                                  <ArrowRight className="w-3 h-3 text-slate-300 shrink-0" />
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Bottom Fixed Action Bar inside Mobile Drawer */}
            <div className="bg-white border-t border-slate-200 px-4 py-3.5 space-y-2.5 shrink-0">
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openEnquiryModal();
                }}
                className="w-full min-h-[48px] flex items-center justify-center gap-2 py-3 px-4 bg-[#152E4D] active:bg-[#0D1E33] text-white font-bold text-xs tracking-wider uppercase rounded-xl cursor-pointer shadow-xs"
              >
                <MessageSquare className="w-4 h-4 text-[#D99A32]" />
                <span>Get Free Consultation</span>
              </button>

              <div className="flex items-center justify-between text-xs text-slate-500 px-1">
                <span>Chennai Advisory Desk</span>
                <a
                  href="tel:+918691001900"
                  className="inline-flex items-center gap-1.5 font-bold text-[#152E4D] py-1 min-h-[36px]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D99A32]" />
                  <span>+91 86910 01900</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
