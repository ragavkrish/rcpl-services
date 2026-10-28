import React from 'react';
import { Link } from './Link';
import { useRouter } from '../../context/RouterContext';
import {
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  MessageSquare,
  ArrowRight,
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { openEnquiryModal } = useRouter();

  return (
    <footer className="bg-[#0D1620] text-[#A5B4C4] pt-16 pb-12 border-t border-[#1C2C3D] text-xs">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Feature Bar in Footer */}
        <div className="pb-10 mb-12 border-b border-[#1C2C3D] grid grid-cols-1 md:grid-cols-4 gap-8 text-[#A5B4C4]">
          <div className="space-y-1">
            <p className="font-semibold text-white text-sm">Registry Strict Protocols</p>
            <p className="text-[11px] text-[#7A8E9E] leading-relaxed">
              Filing structures aligned with MCA SPICe+, GSTN, and Trade Marks Registry standards.
            </p>
          </div>

          <div className="space-y-1">
            <p className="font-semibold text-white text-sm">Direct WhatsApp Advisory</p>
            <p className="text-[11px] text-[#7A8E9E] leading-relaxed">
              Direct review with senior corporate desk officers before any portal lodgement.
            </p>
          </div>

          <div className="space-y-1">
            <p className="font-semibold text-white text-sm">100% Digital Execution</p>
            <p className="text-[11px] text-[#7A8E9E] leading-relaxed">
              Paperless document verification, Class-3 DSC signing, and electronic submission.
            </p>
          </div>

          <div className="space-y-1">
            <p className="font-semibold text-white text-sm">Pan-India Reach</p>
            <p className="text-[11px] text-[#7A8E9E] leading-relaxed">
              Incorporating and facilitating compliance across all 28 states and union territories.
            </p>
          </div>
        </div>

        {/* Multi-Column Sitemap */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 pb-12 border-b border-[#1C2C3D]">
          {/* Column 1: Company Profile */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center gap-2.5">
              <div className="w-8 h-8 bg-[#152E4D] text-white flex items-center justify-center font-display font-semibold text-base border border-[#23456F]">
                R
              </div>
              <div>
                <span className="font-display text-xl font-bold text-white tracking-tight">
                  RCPL <span className="font-light italic text-[#A5B4C4]">Services</span>
                </span>
                <p className="text-[10px] uppercase font-semibold text-[#7A8E9E] tracking-widest">
                  Legal &amp; Business Advisory
                </p>
              </div>
            </Link>

            <p className="text-[#889DAF] leading-relaxed max-w-sm text-xs font-normal">
              Corporate documentation and compliance facilitation desk. We assist founders, directors, and business owners with company formation, intellectual property filings, taxation records, and secretarial governance.
            </p>

            <div className="space-y-2 pt-1 text-[11px] text-[#889DAF]">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#B28348] shrink-0 mt-0.5" />
                <span>Offices: Mumbai &amp; New Delhi · Pan-India Liaison</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#B28348] shrink-0" />
                <span>enquiry@rcplservices.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#B28348] shrink-0" />
                <span>Mon – Sat: 9:30 AM – 6:30 PM IST</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => openEnquiryModal()}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] hover:bg-[#20ba5a] text-[#121B24] font-bold text-xs rounded-xs transition-colors cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#121B24]" />
                <span>Open WhatsApp Consultation</span>
              </button>
            </div>
          </div>

          {/* Column 2: Business Formation */}
          <div className="space-y-2.5">
            <h4 className="text-[11px] font-mono font-semibold uppercase tracking-widest text-white">
              Company Formation
            </h4>
            <ul className="space-y-2 text-[#889DAF] text-xs">
              <li>
                <Link to="/services/business-formation/private-limited-company" className="hover:text-white transition-colors">
                  Private Limited Company
                </Link>
              </li>
              <li>
                <Link to="/services/business-formation/limited-liability-partnership" className="hover:text-white transition-colors">
                  Limited Liability Partnership (LLP)
                </Link>
              </li>
              <li>
                <Link to="/services/business-formation/one-person-company" className="hover:text-white transition-colors">
                  One Person Company (OPC)
                </Link>
              </li>
              <li>
                <Link to="/services/business-formation/public-limited-company" className="hover:text-white transition-colors">
                  Public Limited Company
                </Link>
              </li>
              <li>
                <Link to="/services/business-formation/partnership-firm" className="hover:text-white transition-colors">
                  Partnership Firm
                </Link>
              </li>
              <li>
                <Link to="/services/business-formation/section-8-company" className="hover:text-white transition-colors">
                  Section 8 NGO
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Registrations & Licenses */}
          <div className="space-y-2.5">
            <h4 className="text-[11px] font-mono font-semibold uppercase tracking-widest text-white">
              Registrations & Licenses
            </h4>
            <ul className="space-y-2 text-[#889DAF] text-xs">
              <li>
                <Link to="/services/registrations/gst-registration" className="hover:text-white transition-colors">
                  GST Registration
                </Link>
              </li>
              <li>
                <Link to="/services/registrations/msme-udyam-registration" className="hover:text-white transition-colors">
                  MSME / Udyam Certificate
                </Link>
              </li>
              <li>
                <Link to="/services/registrations/startup-india-recognition" className="hover:text-white transition-colors">
                  Startup India DPIIT
                </Link>
              </li>
              <li>
                <Link to="/services/registrations/import-export-code" className="hover:text-white transition-colors">
                  Import Export Code (IEC)
                </Link>
              </li>
              <li>
                <Link to="/services/registrations/apeda-registration" className="hover:text-white transition-colors">
                  APEDA Export License
                </Link>
              </li>
              <li>
                <Link to="/services/registrations/pwd-contractor-license" className="hover:text-white transition-colors">
                  PWD Contractor License
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Intellectual Property */}
          <div className="space-y-2.5">
            <h4 className="text-[11px] font-mono font-semibold uppercase tracking-widest text-white">
              Intellectual Property
            </h4>
            <ul className="space-y-2 text-[#889DAF] text-xs">
              <li>
                <Link to="/services/intellectual-property/trademark-registration" className="hover:text-white transition-colors">
                  Trademark Registration
                </Link>
              </li>
              <li>
                <Link to="/services/intellectual-property/trademark-objection-reply" className="hover:text-white transition-colors">
                  Trademark Objection Response
                </Link>
              </li>
              <li>
                <Link to="/services/intellectual-property/copyright-registration" className="hover:text-white transition-colors">
                  Copyright Registration
                </Link>
              </li>
              <li>
                <Link to="/services/intellectual-property/patent-filing-assistance" className="hover:text-white transition-colors">
                  Patent Filing Support
                </Link>
              </li>
              <li>
                <Link to="/services/intellectual-property" className="hover:text-white transition-colors">
                  TM Classification Search
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Tax & MCA Compliance */}
          <div className="space-y-2.5">
            <h4 className="text-[11px] font-mono font-semibold uppercase tracking-widest text-white">
              Tax & MCA Governance
            </h4>
            <ul className="space-y-2 text-[#889DAF] text-xs">
              <li>
                <Link to="/services/taxation/gst-return-filing" className="hover:text-white transition-colors">
                  GST Return Filing
                </Link>
              </li>
              <li>
                <Link to="/services/taxation/income-tax-return" className="hover:text-white transition-colors">
                  Corporate Income Tax
                </Link>
              </li>
              <li>
                <Link to="/services/taxation/tds-return-filing" className="hover:text-white transition-colors">
                  TDS Return Compliance
                </Link>
              </li>
              <li>
                <Link to="/services/secretarial/annual-roc-filings" className="hover:text-white transition-colors">
                  Annual ROC Filings (AOC-4/MGT-7)
                </Link>
              </li>
              <li>
                <Link to="/services/secretarial/addition-removal-director" className="hover:text-white transition-colors">
                  Director Appointments
                </Link>
              </li>
              <li>
                <Link to="/services/secretarial/change-registered-office" className="hover:text-white transition-colors">
                  Change Registered Office
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Regulatory & Disclaimer Sub-footer */}
        <div className="pt-8 space-y-4 text-[#7A8E9E] text-xs">
          <p className="leading-relaxed text-[11px]">
            <strong className="text-white">Statutory Regulatory Notice:</strong> RCPL Services operates strictly as an independent corporate facilitation and statutory compliance documentation advisory platform. RCPL Services is not an official government department, regulatory registry, or judicial advocate practice. All company registrations, incorporation certificates, trademark grants, GST numbers, and licenses are evaluated and issued solely under sovereign legal authority by respective government departments (including the Ministry of Corporate Affairs, Trade Marks Registry, DGFT, and CBIC).
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 border-t border-[#1C2C3D] text-[11px]">
            <p>© {new Date().getFullYear()} RCPL Services. All rights reserved.</p>

            <div className="flex items-center gap-6">
              <Link to="/about" className="hover:text-white transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="hover:text-white transition-colors">
                Contact Us
              </Link>
              <Link to="/faq" className="hover:text-white transition-colors">
                FAQs
              </Link>
              <Link to="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
