import React, { useState } from 'react';
import { Link } from './Link';
import { useRouter } from '../../context/RouterContext';
import { useEntrance } from '../../context/EntranceContext';
import { serviceCategories } from '../../data/services';
import { ChevronDown, Menu, X, ArrowUpRight, MessageSquare } from 'lucide-react';

export const Header: React.FC = () => {
  const { openEnquiryModal, currentPath } = useRouter();
  const { entrancePhase, isFirstVisit } = useEntrance();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isInitialHolding = isFirstVisit && entrancePhase === 'wordmark';

  return (
    <header
      className={`sticky top-0 z-40 bg-[#111714]/95 backdrop-blur-md border-b border-[#20483A]/40 text-[#FFFFFF] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isInitialHolding ? 'opacity-0 -translate-y-2' : 'opacity-100 translate-y-0'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          {/* Zone 1: Brand Wordmark (Single text element) */}
          <Link
            to="/"
            className="group flex items-center gap-2.5 whitespace-nowrap shrink-0 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#C5A46D] rounded-[2px]"
          >
            <div className="w-2.5 h-2.5 bg-[#C5A46D] transform rotate-45 group-hover:rotate-90 transition-transform duration-300" />
            <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[#FFFFFF]">
              RCPL <span className="font-light text-[#A6ADA7] group-hover:text-[#FFFFFF] transition-colors">Services</span>
            </span>
          </Link>

          {/* Zone 2: 4-5 Concise Single-Line Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-8 text-sm font-medium text-[#A6ADA7]"
          >
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                type="button"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                aria-expanded={isServicesOpen}
                className={`inline-flex items-center gap-1.5 py-2 hover:text-[#FFFFFF] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-[#C5A46D] cursor-pointer ${
                  currentPath.startsWith('/services') ? 'text-[#FFFFFF] font-semibold' : ''
                }`}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    isServicesOpen ? 'rotate-180 text-[#C5A46D]' : 'text-[#A6ADA7]'
                  }`}
                />
              </button>

              {/* Mega-Flyout for Modern Prestige */}
              {isServicesOpen && (
                <div className="absolute left-0 top-full pt-2 w-96 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="bg-[#111714] border border-[#20483A] shadow-2xl rounded-[4px] p-3 text-left">
                    <div className="px-3 py-2 text-[11px] font-mono uppercase tracking-wider text-[#C5A46D] border-b border-[#20483A]/60 mb-2">
                      Practice Domains
                    </div>
                    <div className="grid grid-cols-1 gap-1">
                      {serviceCategories.map((cat) => (
                        <Link
                          key={cat.id}
                          to={`/services/${cat.slug}`}
                          onClick={() => setIsServicesOpen(false)}
                          className="flex items-center justify-between px-3 py-2.5 text-xs text-[#FFFFFF] hover:bg-[#20483A]/30 hover:text-[#C5A46D] rounded-[2px] transition-colors group"
                        >
                          <div className="flex items-center gap-2.5">
                            <span className="font-mono text-[10px] text-[#A6ADA7] group-hover:text-[#C5A46D]">
                              {cat.number}
                            </span>
                            <span className="font-medium">{cat.title}</span>
                          </div>
                          <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/about"
              className="relative py-2 hover:text-[#FFFFFF] transition-colors whitespace-nowrap shrink-0 after:content-[''] after:absolute after:bottom-1 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C5A46D] hover:after:w-full after:transition-all after:duration-200"
              activeClassName="text-[#FFFFFF] font-semibold after:w-full"
            >
              About
            </Link>

            <Link
              to="/contact"
              className="relative py-2 hover:text-[#FFFFFF] transition-colors whitespace-nowrap shrink-0 after:content-[''] after:absolute after:bottom-1 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C5A46D] hover:after:w-full after:transition-all after:duration-200"
              activeClassName="text-[#FFFFFF] font-semibold after:w-full"
            >
              Contact
            </Link>

            <Link
              to="/faq"
              className="relative py-2 hover:text-[#FFFFFF] transition-colors whitespace-nowrap shrink-0 after:content-[''] after:absolute after:bottom-1 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C5A46D] hover:after:w-full after:transition-all after:duration-200"
              activeClassName="text-[#FFFFFF] font-semibold after:w-full"
            >
              FAQ
            </Link>
          </nav>

          {/* Zone 3: 1 Primary Action (Restrained Pill Shape) */}
          <div className="flex items-center gap-4 shrink-0">
            <button
              type="button"
              onClick={() => openEnquiryModal()}
              className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 bg-[#20483A] hover:bg-[#2A5C4A] border border-[#C5A46D]/40 text-[#FFFFFF] text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-200 hover:shadow-[0_0_15px_-3px_rgba(197,164,109,0.3)] cursor-pointer whitespace-nowrap shrink-0 active:scale-[0.98]"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#C5A46D]" />
              <span>Make an Enquiry</span>
            </button>

            {/* Mobile Circular Menu Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={isMobileMenuOpen}
              className="md:hidden w-10 h-10 rounded-full border border-[#20483A] text-[#FFFFFF] hover:text-[#C5A46D] hover:bg-[#20483A]/30 flex items-center justify-center transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#C5A46D]"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-[#20483A] bg-[#111714] px-4 pt-4 pb-6 space-y-5 animate-in fade-in duration-150">
          <div className="space-y-1">
            <p className="px-2 text-[11px] font-mono uppercase tracking-wider text-[#C5A46D] mb-2">
              Practice Domains
            </p>
            {serviceCategories.map((cat) => (
              <Link
                key={cat.id}
                to={`/services/${cat.slug}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2.5 text-sm text-[#FFFFFF] hover:bg-[#20483A]/40 rounded-[2px]"
              >
                <span>{cat.title}</span>
                <span className="font-mono text-xs text-[#A6ADA7]">{cat.number}</span>
              </Link>
            ))}
          </div>

          <div className="pt-3 border-t border-[#20483A]/60 space-y-1 text-sm text-[#A6ADA7]">
            <Link
              to="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 text-[#FFFFFF] hover:bg-[#20483A]/40 rounded-[2px]"
            >
              About RCPL Services
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 text-[#FFFFFF] hover:bg-[#20483A]/40 rounded-[2px]"
            >
              Contact & Advisory Desk
            </Link>
            <Link
              to="/faq"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 text-[#FFFFFF] hover:bg-[#20483A]/40 rounded-[2px]"
            >
              Frequently Asked Questions
            </Link>
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                openEnquiryModal();
              }}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-[#20483A] border border-[#C5A46D]/50 text-[#FFFFFF] text-xs font-semibold uppercase tracking-wider rounded-[3px]"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#C5A46D]" />
              <span>Make an Enquiry</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
