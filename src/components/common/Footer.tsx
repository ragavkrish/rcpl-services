import React, { useState } from 'react';
import { Link } from './Link';
import { useRouter } from '../../context/RouterContext';
import {
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  ChevronDown,
  Phone,
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { openEnquiryModal } = useRouter();
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null);

  const toggleGroup = (key: string) => {
    setOpenMobileGroup((prev) => (prev === key ? null : key));
  };

  return (
    <footer className="bg-[#0D1620] text-[#A5B4C4] pt-10 pb-8 sm:pt-16 sm:pb-12 border-t border-[#1C2C3D] text-xs">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Feature Bar in Footer — 2x2 Compact on Mobile, 4 Columns on Desktop */}
        <div className="pb-6 mb-7 sm:pb-10 sm:mb-12 border-b border-[#1C2C3D] grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-5 sm:gap-6 lg:gap-8 text-[#A5B4C4]">
          <div className="space-y-1">
            <p className="font-semibold text-white text-xs sm:text-sm">Registry Strict Protocols</p>
            <p className="text-[11px] text-[#7A8E9E] leading-relaxed hidden sm:block">
              Filing structures aligned with MCA SPICe+, GSTN, and Trade Marks Registry standards.
            </p>
            <p className="text-[11px] text-[#7A8E9E] leading-snug sm:hidden">
              Aligned with MCA, MEA &amp; GSTN standards.
            </p>
          </div>

          <div className="space-y-1">
            <p className="font-semibold text-white text-xs sm:text-sm">Direct WhatsApp Advisory</p>
            <p className="text-[11px] text-[#7A8E9E] leading-relaxed hidden sm:block">
              Direct review with senior corporate desk officers before any portal lodgement.
            </p>
            <p className="text-[11px] text-[#7A8E9E] leading-snug sm:hidden">
              Senior desk officer review before filing.
            </p>
          </div>

          <div className="space-y-1">
            <p className="font-semibold text-white text-xs sm:text-sm">100% Digital Execution</p>
            <p className="text-[11px] text-[#7A8E9E] leading-relaxed hidden sm:block">
              Paperless document verification, Class-3 DSC signing, and electronic submission.
            </p>
            <p className="text-[11px] text-[#7A8E9E] leading-snug sm:hidden">
              Paperless verification &amp; DSC lodgement.
            </p>
          </div>

          <div className="space-y-1">
            <p className="font-semibold text-white text-xs sm:text-sm">Pan-India Reach</p>
            <p className="text-[11px] text-[#7A8E9E] leading-relaxed hidden sm:block">
              Incorporating and facilitating compliance across all 28 states and union territories.
            </p>
            <p className="text-[11px] text-[#7A8E9E] leading-snug sm:hidden">
              Serving all 28 states &amp; union territories.
            </p>
          </div>
        </div>

        {/* Multi-Column Sitemap (Accordion on Mobile < sm, Multi-column Grid on >= sm) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0 sm:gap-8 pb-8 sm:pb-12 border-b border-[#1C2C3D]">
          {/* Column 1: Company Profile */}
          <div className="lg:col-span-2 space-y-4 pb-6 sm:pb-0 border-b sm:border-b-0 border-[#1C2C3D]">
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="bg-white px-2.5 py-1.5 rounded-lg inline-flex items-center shadow-xs border border-slate-700/60">
                <img
                  src="/assets/aistudio/rcpl-logo.png"
                  alt="RCPL"
                  className="h-5 sm:h-6 w-auto object-contain"
                />
              </div>
              <div>
                <span className="font-display text-lg sm:text-xl font-bold text-white tracking-tight">
                  RCPL <span className="font-medium text-[#A5B4C4]">Services</span>
                </span>
                <p className="text-[10px] uppercase font-semibold text-[#7A8E9E] tracking-widest">
                  Legal &amp; Business Advisory
                </p>
              </div>
            </Link>

            <p className="text-[#889DAF] leading-relaxed max-w-sm text-xs font-normal">
              Corporate documentation and compliance facilitation desk assisting founders, directors, and recruitment agencies across India.
            </p>

            <div className="space-y-2 pt-0.5 text-[11px] text-[#889DAF]">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#60A5FA] shrink-0 mt-0.5" />
                <span>Office: Chennai, Tamil Nadu · Pan-India Advisory</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#60A5FA] shrink-0" />
                <a href="mailto:enquiry@rcplservices.com" className="hover:text-white transition-colors">
                  enquiry@rcplservices.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#D99A32] shrink-0" />
                <a href="tel:+918691001900" className="hover:text-white transition-colors font-medium">
                  +91 86910 01900
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#60A5FA] shrink-0" />
                <span>Mon – Sat: 9:30 AM – 6:30 PM IST</span>
              </div>
            </div>

            <div className="pt-1 flex flex-col sm:flex-row gap-2.5">
              <button
                type="button"
                onClick={() => openEnquiryModal()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 min-h-[44px] bg-white hover:bg-slate-100 text-[#121B24] font-bold text-xs rounded-lg transition-colors cursor-pointer whitespace-nowrap"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#0F766E]" />
                <span>Open WhatsApp Consultation</span>
              </button>
            </div>
          </div>

          {/* Column 2: Business Formation */}
          <div className="border-b sm:border-b-0 border-[#1C2C3D] sm:space-y-2.5">
            <button
              type="button"
              onClick={() => toggleGroup('formation')}
              aria-expanded={openMobileGroup === 'formation'}
              className="sm:hidden w-full flex items-center justify-between py-3.5 min-h-[44px] text-left cursor-pointer"
            >
              <span className="text-[11px] font-mono font-semibold uppercase tracking-widest text-white">
                Company Formation
              </span>
              <ChevronDown
                className={`w-4 h-4 text-[#7A8E9E] transition-transform duration-150 ${
                  openMobileGroup === 'formation' ? 'rotate-180 text-white' : ''
                }`}
              />
            </button>
            <h4 className="hidden sm:block text-[11px] font-mono font-semibold uppercase tracking-widest text-white">
              Company Formation
            </h4>
            <ul
              className={`${
                openMobileGroup === 'formation' ? 'block pb-4' : 'hidden'
              } sm:block space-y-2 text-[#889DAF] text-xs`}
            >
              <li>
                <Link to="/services/business-formation/private-limited-company" className="hover:text-white transition-colors block py-0.5 sm:py-0">
                  Private Limited Company
                </Link>
              </li>
              <li>
                <Link to="/services/business-formation/limited-liability-partnership" className="hover:text-white transition-colors block py-0.5 sm:py-0">
                  Limited Liability Partnership (LLP)
                </Link>
              </li>
              <li>
                <Link to="/services/business-formation/one-person-company" className="hover:text-white transition-colors block py-0.5 sm:py-0">
                  One Person Company (OPC)
                </Link>
              </li>
              <li>
                <Link to="/services/business-formation/public-limited-company" className="hover:text-white transition-colors block py-0.5 sm:py-0">
                  Public Limited Company
                </Link>
              </li>
              <li>
                <Link to="/services/business-formation/partnership-firm" className="hover:text-white transition-colors block py-0.5 sm:py-0">
                  Partnership Firm
                </Link>
              </li>
              <li>
                <Link to="/services/business-formation/section-8-company" className="hover:text-white transition-colors block py-0.5 sm:py-0">
                  Section 8 NGO
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Registrations & Licenses */}
          <div className="border-b sm:border-b-0 border-[#1C2C3D] sm:space-y-2.5">
            <button
              type="button"
              onClick={() => toggleGroup('registrations')}
              aria-expanded={openMobileGroup === 'registrations'}
              className="sm:hidden w-full flex items-center justify-between py-3.5 min-h-[44px] text-left cursor-pointer"
            >
              <span className="text-[11px] font-mono font-semibold uppercase tracking-widest text-white flex items-center gap-2">
                <span>Registrations &amp; Licenses</span>
                <span className="text-[#D99A32] text-[10px]">· RA</span>
              </span>
              <ChevronDown
                className={`w-4 h-4 text-[#7A8E9E] transition-transform duration-150 ${
                  openMobileGroup === 'registrations' ? 'rotate-180 text-white' : ''
                }`}
              />
            </button>
            <h4 className="hidden sm:block text-[11px] font-mono font-semibold uppercase tracking-widest text-white">
              Registrations &amp; Licenses
            </h4>
            <ul
              className={`${
                openMobileGroup === 'registrations' ? 'block pb-4' : 'hidden'
              } sm:block space-y-2 text-[#889DAF] text-xs`}
            >
              <li>
                <Link to="/services/ra-license/overseas-recruitment-agent-license" className="text-[#D99A32] font-semibold hover:text-[#E8AB43] transition-colors inline-flex items-center gap-1.5 py-0.5 sm:py-0">
                  <span>RA License (MEA Emigration)</span>
                </Link>
              </li>
              <li>
                <Link to="/services/registrations/gst-registration" className="hover:text-white transition-colors block py-0.5 sm:py-0">
                  GST Registration
                </Link>
              </li>
              <li>
                <Link to="/services/registrations/msme-udyam-registration" className="hover:text-white transition-colors block py-0.5 sm:py-0">
                  MSME / Udyam Certificate
                </Link>
              </li>
              <li>
                <Link to="/services/registrations/startup-india-recognition" className="hover:text-white transition-colors block py-0.5 sm:py-0">
                  Startup India DPIIT
                </Link>
              </li>
              <li>
                <Link to="/services/registrations/import-export-code" className="hover:text-white transition-colors block py-0.5 sm:py-0">
                  Import Export Code (IEC)
                </Link>
              </li>
              <li>
                <Link to="/services/registrations/apeda-registration" className="hover:text-white transition-colors block py-0.5 sm:py-0">
                  APEDA Export License
                </Link>
              </li>
              <li>
                <Link to="/services/registrations/pwd-contractor-license" className="hover:text-white transition-colors block py-0.5 sm:py-0">
                  PWD Contractor License
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Intellectual Property */}
          <div className="border-b sm:border-b-0 border-[#1C2C3D] sm:space-y-2.5">
            <button
              type="button"
              onClick={() => toggleGroup('ip')}
              aria-expanded={openMobileGroup === 'ip'}
              className="sm:hidden w-full flex items-center justify-between py-3.5 min-h-[44px] text-left cursor-pointer"
            >
              <span className="text-[11px] font-mono font-semibold uppercase tracking-widest text-white">
                Intellectual Property
              </span>
              <ChevronDown
                className={`w-4 h-4 text-[#7A8E9E] transition-transform duration-150 ${
                  openMobileGroup === 'ip' ? 'rotate-180 text-white' : ''
                }`}
              />
            </button>
            <h4 className="hidden sm:block text-[11px] font-mono font-semibold uppercase tracking-widest text-white">
              Intellectual Property
            </h4>
            <ul
              className={`${
                openMobileGroup === 'ip' ? 'block pb-4' : 'hidden'
              } sm:block space-y-2 text-[#889DAF] text-xs`}
            >
              <li>
                <Link to="/services/intellectual-property/trademark-registration" className="hover:text-white transition-colors block py-0.5 sm:py-0">
                  Trademark Registration
                </Link>
              </li>
              <li>
                <Link to="/services/intellectual-property/trademark-objection-reply" className="hover:text-white transition-colors block py-0.5 sm:py-0">
                  Trademark Objection Response
                </Link>
              </li>
              <li>
                <Link to="/services/intellectual-property/copyright-registration" className="hover:text-white transition-colors block py-0.5 sm:py-0">
                  Copyright Registration
                </Link>
              </li>
              <li>
                <Link to="/services/intellectual-property/patent-filing-assistance" className="hover:text-white transition-colors block py-0.5 sm:py-0">
                  Patent Filing Support
                </Link>
              </li>
              <li>
                <Link to="/services/intellectual-property" className="hover:text-white transition-colors block py-0.5 sm:py-0">
                  TM Classification Search
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Tax & MCA Compliance */}
          <div className="sm:space-y-2.5">
            <button
              type="button"
              onClick={() => toggleGroup('tax')}
              aria-expanded={openMobileGroup === 'tax'}
              className="sm:hidden w-full flex items-center justify-between py-3.5 min-h-[44px] text-left cursor-pointer"
            >
              <span className="text-[11px] font-mono font-semibold uppercase tracking-widest text-white">
                Tax &amp; MCA Governance
              </span>
              <ChevronDown
                className={`w-4 h-4 text-[#7A8E9E] transition-transform duration-150 ${
                  openMobileGroup === 'tax' ? 'rotate-180 text-white' : ''
                }`}
              />
            </button>
            <h4 className="hidden sm:block text-[11px] font-mono font-semibold uppercase tracking-widest text-white">
              Tax &amp; MCA Governance
            </h4>
            <ul
              className={`${
                openMobileGroup === 'tax' ? 'block pb-4' : 'hidden'
              } sm:block space-y-2 text-[#889DAF] text-xs`}
            >
              <li>
                <Link to="/services/taxation/gst-return-filing" className="hover:text-white transition-colors block py-0.5 sm:py-0">
                  GST Return Filing
                </Link>
              </li>
              <li>
                <Link to="/services/taxation/income-tax-return" className="hover:text-white transition-colors block py-0.5 sm:py-0">
                  Corporate Income Tax
                </Link>
              </li>
              <li>
                <Link to="/services/taxation/tds-return-filing" className="hover:text-white transition-colors block py-0.5 sm:py-0">
                  TDS Return Compliance
                </Link>
              </li>
              <li>
                <Link to="/services/secretarial/annual-roc-filings" className="hover:text-white transition-colors block py-0.5 sm:py-0">
                  Annual ROC Filings (AOC-4/MGT-7)
                </Link>
              </li>
              <li>
                <Link to="/services/secretarial/addition-removal-director" className="hover:text-white transition-colors block py-0.5 sm:py-0">
                  Director Appointments
                </Link>
              </li>
              <li>
                <Link to="/services/secretarial/change-registered-office" className="hover:text-white transition-colors block py-0.5 sm:py-0">
                  Change Registered Office
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Regulatory & Disclaimer Sub-footer */}
        <div className="pt-6 sm:pt-8 space-y-4 text-[#7A8E9E] text-xs">
          <p className="leading-relaxed text-[11px]">
            <strong className="text-white">Statutory Regulatory Notice:</strong> RCPL Services operates strictly as an independent corporate facilitation and statutory compliance documentation advisory platform. RCPL Services is not an official government department, regulatory registry, or judicial advocate practice. All company registrations, incorporation certificates, trademark grants, GST numbers, and licenses are evaluated and issued solely under sovereign legal authority by respective government departments (including the Ministry of Corporate Affairs, Trade Marks Registry, DGFT, and CBIC).
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 border-t border-[#1C2C3D] text-[11px]">
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
              <p>© {new Date().getFullYear()} RCPL Services. All rights reserved.</p>
              <span className="text-[#2C3F53] hidden sm:inline" aria-hidden="true">·</span>
              <p className="text-[#5B7083] text-[10.5px]">
                Made by <span className="text-[#7E93A5] font-medium tracking-wide">linkkmediaa</span>
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-2">
              <Link to="/about" className="hover:text-white transition-colors py-1 sm:py-0">
                About Us
              </Link>
              <Link to="/contact" className="hover:text-white transition-colors py-1 sm:py-0">
                Contact Us
              </Link>
              <Link to="/faq" className="hover:text-white transition-colors py-1 sm:py-0">
                FAQs
              </Link>
              <Link to="/privacy-policy" className="hover:text-white transition-colors py-1 sm:py-0">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="hover:text-white transition-colors py-1 sm:py-0">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
