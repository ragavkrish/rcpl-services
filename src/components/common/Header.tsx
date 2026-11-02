import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from './Link';
import { useRouter } from '../../context/RouterContext';
import { candidateServices } from '../../data/services';
import {
  Phone,
  MessageSquare,
  MessageCircle,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  MapPin,
} from 'lucide-react';

export const Header: React.FC = () => {
  const { openEnquiryModal, currentPath } = useRouter();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileExpandedCat, setMobileExpandedCat] = useState<string | null>(null);

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

      {/* 2. MAIN EXECUTIVE NAVIGATION BAR */}
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20 gap-4">
          {/* Brand Wordmark & Logo */}
          <Link to="/" className="flex items-center shrink-0 py-2 group">
            <img
              src="/assets/aistudio/rcpl-logo.png"
              alt="RCPL Services"
              className="h-8 sm:h-9.5 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation Links — Clean Single-Row Executive Architecture */}
          <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navMenuItems.map((item) => {
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
                    <span>{item.title}</span>
                    {item.featured && (
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#1D4ED8] font-bold ml-0.5">
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
                                className="font-display text-sm font-bold text-[#121B24] hover:text-[#152E4D] flex items-center gap-1.5"
                              >
                                <span>{item.title} Practice</span>
                                <ArrowRight className="w-3.5 h-3.5 text-[#1D4ED8]" />
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
                                <span className="text-xs font-semibold text-[#121B24] group-hover:text-[#152E4D] block truncate">
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

          {/* Right Action: Consult an Expert CTA */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
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
              className="lg:hidden w-11 h-11 min-h-[44px] min-w-[44px] border border-slate-300 text-[#121B24] hover:bg-slate-50 flex items-center justify-center rounded-lg transition-colors cursor-pointer active:scale-95"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* 3. MOBILE NAVIGATION DRAWER */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden border-t border-slate-200 bg-white max-h-[82vh] overflow-y-auto px-4 pt-3 pb-8 space-y-4 shadow-xl"
          >
            <div className="space-y-1">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-3 min-h-[44px] flex items-center text-sm font-semibold text-[#121B24] hover:bg-slate-50 rounded-lg"
              >
                Home
              </Link>

              {navMenuItems.map((menu) => {
                const services = getCategoryServices(menu.slugs);
                const isExpanded = mobileExpandedCat === menu.title;

                return (
                  <div key={menu.title} className="border-b border-slate-100 last:border-b-0 pb-1">
                    <button
                      type="button"
                      onClick={() => setMobileExpandedCat(isExpanded ? null : menu.title)}
                      className="w-full flex items-center justify-between px-3 py-3 min-h-[44px] text-sm font-semibold text-[#121B24] hover:bg-slate-50 text-left rounded-lg cursor-pointer"
                    >
                      <span className="flex items-center gap-2">
                        <span>{menu.title}</span>
                        {menu.featured && (
                          <span className="text-[10px] font-mono uppercase tracking-wider text-[#1D4ED8] font-bold">
                            MEA Flagship
                          </span>
                        )}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 transition-transform ${
                          isExpanded ? 'rotate-180 text-[#152E4D]' : ''
                        }`}
                      />
                    </button>

                    {isExpanded && (
                      <div className="pl-3 pr-2 py-2 space-y-1 bg-slate-50 my-1 rounded-lg border border-slate-200/60">
                        <Link
                          to={`/services/${menu.slug}`}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block text-xs font-bold text-[#152E4D] py-2 px-2 hover:underline"
                        >
                          Explore All {menu.title} Services →
                        </Link>
                        {services.map((svc) => (
                          <Link
                            key={svc.id}
                            to={`/services/${svc.categorySlug}/${svc.slug}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block text-xs text-slate-600 hover:text-[#121B24] py-1.5 px-2 rounded-md hover:bg-white"
                          >
                            {svc.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              <Link
                to="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-3 min-h-[44px] flex items-center text-sm font-semibold text-[#121B24] hover:bg-slate-50 rounded-lg"
              >
                About Us
              </Link>

              <Link
                to="/faq"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-3 min-h-[44px] flex items-center text-sm font-semibold text-[#121B24] hover:bg-slate-50 rounded-lg"
              >
                Statutory FAQs
              </Link>

              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-3 min-h-[44px] flex items-center text-sm font-semibold text-[#121B24] hover:bg-slate-50 rounded-lg"
              >
                Contact Us (Chennai Desk)
              </Link>
            </div>

            <div className="pt-2 space-y-2.5 border-t border-slate-100">
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openEnquiryModal();
                }}
                className="w-full min-h-[44px] flex items-center justify-center gap-2 py-3 px-4 bg-[#152E4D] hover:bg-[#0D1E33] text-white font-bold text-xs tracking-wider uppercase rounded-lg cursor-pointer shadow-xs active:scale-[0.99]"
              >
                <MessageSquare className="w-4 h-4 text-[#60A5FA]" />
                <span>Get Free Consultation</span>
              </button>

              <div className="flex items-center justify-between text-xs text-slate-500 px-1 pt-1">
                <span>Chennai Head Office</span>
                <a href="tel:+918691001900" className="font-semibold text-[#152E4D]">
                  +91 86910 01900
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
