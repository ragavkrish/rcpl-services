import React, { useState } from 'react';
import { Link } from './Link';
import { useRouter } from '../../context/RouterContext';
import { candidateServices } from '../../data/services';
import {
  Phone,
  MessageSquare,
  MessageCircle,
  User,
  Rocket,
  Copyright,
  FileBadge,
  Landmark,
  ShieldCheck,
  Award,
  Handshake,
  CircleDollarSign,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
} from 'lucide-react';

export const Header: React.FC = () => {
  const { openEnquiryModal, currentPath } = useRouter();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileExpandedCat, setMobileExpandedCat] = useState<string | null>(null);

  const getCategoryServices = (categorySlug: string) => {
    return candidateServices.filter(
      (s) => s.categorySlug === categorySlug && s.status !== 'draft'
    );
  };

  const navMenuItems = [
    {
      title: 'Startup',
      slug: 'business-formation',
      icon: Rocket,
      description: 'Private Limited, LLP, OPC, Partnership, and Startup India registration.',
    },
    {
      title: 'Trademark',
      slug: 'intellectual-property',
      icon: Copyright,
      description: 'Trademark search, filing, objection response, copyright, and brand security.',
    },
    {
      title: 'License',
      slug: 'registrations',
      icon: FileBadge,
      description: 'GST, MSME / Udyam, Import Export Code (IEC), FSSAI, and trade licences.',
    },
    {
      title: 'Taxation',
      slug: 'taxation',
      icon: Landmark,
      description: 'Periodic GST returns, income tax filing, TDS compliance, and bookkeeping.',
    },
    {
      title: 'Secretarial',
      slug: 'secretarial',
      icon: ShieldCheck,
      description: 'Annual ROC compliance, director KYC, change of directors, and MoA updates.',
    },
    {
      title: 'Certification',
      slug: 'registrations',
      icon: Award,
      description: 'ISO certification, Startup India DPIT recognition, and quality audits.',
    },
    {
      title: 'Consulting',
      slug: 'company-conversions',
      icon: Handshake,
      description: 'Proprietorship to Pvt Ltd conversions, business structuring & advisory.',
    },
    {
      title: 'Finance',
      slug: 'taxation',
      icon: CircleDollarSign,
      description: 'Virtual CFO, accounting facilitation, payroll records & investor readiness.',
    },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-[#EAEFE9] shadow-xs">
      {/* 1. TOP UTILITY BAR (LEGALBABU SPEC) */}
      <div className="bg-[#FAFBFB] text-[#4A5568] text-[12px] py-1.5 px-4 sm:px-6 lg:px-8 border-b border-[#EAEFE9] hidden md:block">
        <div className="max-w-[1320px] mx-auto flex items-center justify-end gap-7 font-medium">
          <a
            href="tel:+918691001900"
            className="flex items-center gap-1.5 text-[#4A5568] hover:text-[#152E4D] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#152E4D]" />
            <span>Call: +918691001900</span>
          </a>

          <button
            type="button"
            onClick={() => openEnquiryModal()}
            className="flex items-center gap-1.5 text-[#4A5568] hover:text-[#152E4D] transition-colors cursor-pointer"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#152E4D]" />
            <span>Chat with us</span>
          </button>

          <a
            href="https://wa.me/918691001900?text=Hello%20RCPL%20Services,%20I%20would%20like%20to%20inquire%20about%20business%20and%20compliance%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#4A5568] hover:text-[#25D366] transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
            <span>Whatsapp</span>
          </a>

          <button
            type="button"
            onClick={() => openEnquiryModal('Client Login')}
            className="flex items-center gap-1.5 text-[#4A5568] hover:text-[#152E4D] transition-colors cursor-pointer"
          >
            <User className="w-3.5 h-3.5 text-[#152E4D]" />
            <span>Login</span>
          </button>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION BAR */}
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Brand Wordmark & Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0 py-2 group">
            <div className="w-10 h-10 rounded-xs bg-[#152E4D] text-white flex items-center justify-center font-display font-bold text-xl shadow-xs border border-[#23456F]">
              R
            </div>
            <div className="flex flex-col">
              <span className="font-display text-2xl font-bold tracking-tight text-[#121B24] leading-tight group-hover:text-[#152E4D] transition-colors">
                RCPL <span className="text-[#B28348]">SERVICES</span>
              </span>
              <span className="text-[10px] uppercase font-semibold tracking-wider text-[#64748B]">
                Legal &amp; Business Advisory
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links with Icon on Top */}
          <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-3 xl:gap-5">
            {navMenuItems.map((item) => {
              const services = getCategoryServices(item.slug);
              const isOpen = activeDropdown === item.title;
              const Icon = item.icon;

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
                    className={`flex flex-col items-center py-2 px-1 text-center group transition-colors cursor-pointer ${
                      isOpen ? 'text-[#152E4D]' : 'text-[#334155] hover:text-[#152E4D]'
                    }`}
                  >
                    <Icon className="w-4 h-4 mb-1 text-[#64748B] group-hover:text-[#152E4D] transition-colors" />
                    <div className="flex items-center gap-0.5 text-xs font-semibold">
                      <span>{item.title}</span>
                      <ChevronDown
                        className={`w-3 h-3 text-[#94A3B8] transition-transform duration-150 ${
                          isOpen ? 'rotate-180 text-[#152E4D]' : ''
                        }`}
                      />
                    </div>
                  </button>

                  {/* Dropdown Menu */}
                  {isOpen && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-1 w-[380px] z-50 animate-in fade-in duration-100">
                      <div className="bg-white border border-[#CCD3DA] shadow-xl p-4 text-left rounded-xs">
                        <div className="pb-2.5 mb-2.5 border-b border-[#E3E7EB] flex items-baseline justify-between">
                          <div>
                            <Link
                              to={`/services/${item.slug}`}
                              onClick={() => setActiveDropdown(null)}
                              className="font-display text-sm font-bold text-[#121B24] hover:text-[#152E4D] flex items-center gap-1.5"
                            >
                              <span>{item.title} Services</span>
                              <ArrowRight className="w-3.5 h-3.5 text-[#B28348]" />
                            </Link>
                            <p className="text-[11px] text-[#64748B] mt-0.5">
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
                              className="py-1.5 px-2 hover:bg-[#F8FAFC] rounded-xs transition-colors group block"
                            >
                              <span className="text-xs font-semibold text-[#121B24] group-hover:text-[#152E4D] block truncate">
                                {svc.title}
                              </span>
                              <span className="text-[11px] text-[#64748B] block truncate font-normal">
                                {svc.summary}
                              </span>
                            </Link>
                          ))}
                        </div>

                        <div className="mt-3 pt-2.5 border-t border-[#E3E7EB] flex items-center justify-between text-xs bg-[#FAFBFB] p-2.5 rounded-xs">
                          <span className="text-[#64748B] text-[11px]">
                            Need custom advice?
                          </span>
                          <button
                            type="button"
                            onClick={() => {
                              setActiveDropdown(null);
                              openEnquiryModal(item.title);
                            }}
                            className="text-[#152E4D] hover:underline font-bold text-xs flex items-center gap-1 cursor-pointer"
                          >
                            <span>Free Consultation</span>
                            <ArrowRight className="w-3 h-3 text-[#B28348]" />
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right Action: Free Inquiry Button */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => openEnquiryModal()}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#152E4D] hover:bg-[#0D1E33] text-white text-xs font-bold rounded-sm transition-colors cursor-pointer shadow-xs active:scale-[0.99]"
            >
              <span>Consult an Expert</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={isMobileMenuOpen}
              className="lg:hidden w-10 h-10 border border-[#CCD3DA] text-[#121B24] hover:bg-[#F8FAFC] flex items-center justify-center rounded-xs transition-colors cursor-pointer"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* 3. MOBILE NAVIGATION DRAWER */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-[#CCD3DA] bg-white max-h-[80vh] overflow-y-auto px-4 pt-4 pb-8 space-y-4 shadow-xl">
          <div className="space-y-1">
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2.5 text-sm font-semibold text-[#121B24] hover:bg-[#F8FAFC]"
            >
              Home
            </Link>

            {navMenuItems.map((menu) => {
              const services = getCategoryServices(menu.slug);
              const isExpanded = mobileExpandedCat === menu.title;

              return (
                <div key={menu.title} className="border-b border-[#E3E7EB] last:border-b-0 pb-1">
                  <button
                    type="button"
                    onClick={() => setMobileExpandedCat(isExpanded ? null : menu.title)}
                    className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-semibold text-[#121B24] hover:bg-[#F8FAFC] text-left"
                  >
                    <span>{menu.title}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#8C9BAA] transition-transform ${
                        isExpanded ? 'rotate-180 text-[#152E4D]' : ''
                      }`}
                    />
                  </button>

                  {isExpanded && (
                    <div className="pl-3 pr-2 py-2 space-y-1 bg-[#F8FAFC] my-1 rounded-xs">
                      <Link
                        to={`/services/${menu.slug}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block text-xs font-bold text-[#152E4D] py-1.5 px-2 hover:underline"
                      >
                        Explore All {menu.title} Services →
                      </Link>
                      {services.map((svc) => (
                        <Link
                          key={svc.id}
                          to={`/services/${svc.categorySlug}/${svc.slug}`}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block text-xs text-[#334155] hover:text-[#121B24] py-1 px-2"
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
              className="block px-3 py-2.5 text-sm font-semibold text-[#121B24] hover:bg-[#F8FAFC]"
            >
              About Us
            </Link>

            <Link
              to="/faq"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2.5 text-sm font-semibold text-[#121B24] hover:bg-[#F8FAFC]"
            >
              Resources &amp; FAQs
            </Link>

            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2.5 text-sm font-semibold text-[#121B24] hover:bg-[#F8FAFC]"
            >
              Contact Us
            </Link>
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                openEnquiryModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#152E4D] hover:bg-[#0D1E33] text-white font-bold text-xs tracking-wider uppercase rounded-sm cursor-pointer shadow-sm"
            >
              <MessageSquare className="w-4 h-4 text-white" />
              <span>Get Free Consultation</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
