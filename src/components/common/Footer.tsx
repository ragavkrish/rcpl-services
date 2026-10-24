import React from 'react';
import { Link } from './Link';
import { serviceCategories } from '../../data/services';
import { useEntrance } from '../../context/EntranceContext';

export const Footer: React.FC = () => {
  const { replayEntrance } = useEntrance();
  return (
    <footer className="bg-[#111714] text-[#A6ADA7] border-t border-[#20483A]/70 pt-20 pb-12">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#20483A]/60">
          {/* Brand & Editorial Column (col-span-5) */}
          <div className="md:col-span-5 space-y-5">
            <Link to="/" className="inline-flex items-center gap-2.5">
              <div className="w-2.5 h-2.5 bg-[#C5A46D] transform rotate-45" />
              <span className="font-display text-2xl font-bold tracking-tight text-[#FFFFFF]">
                RCPL <span className="font-light text-[#A6ADA7]">Services</span>
              </span>
            </Link>
            <p className="text-sm text-[#A6ADA7] leading-relaxed max-w-sm">
              Contemporary corporate facilitation and administrative compliance advisory. Assisting enterprises with company formation, intellectual property filings, taxation records, and secretarial governance across India.
            </p>
            <div className="p-4 bg-[#20483A]/20 border border-[#20483A]/60 rounded-[14px] text-xs text-[#A6ADA7] space-y-1">
              <p className="text-[#FFFFFF] font-medium">Candidate Catalogue Governance</p>
              <p className="text-[11px] leading-relaxed">
                Services presented across this portal reflect onboarding candidate scopes awaiting official client verification. No unverified legal representation or government affiliations are claimed.
              </p>
            </div>
          </div>

          {/* Service Categories (col-span-4) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#C5A46D] font-semibold">
              Practice Domains
            </h4>
            <ul className="space-y-2.5 text-xs">
              {serviceCategories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    to={`/services/${cat.slug}`}
                    className="text-[#A6ADA7] hover:text-[#FFFFFF] hover:translate-x-0.5 transition-all flex items-center justify-between group py-0.5"
                  >
                    <span>{cat.title}</span>
                    <span className="font-mono text-[10px] text-[#20483A] group-hover:text-[#C5A46D] transition-colors">
                      {cat.number}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Navigation & Policy Drafts (col-span-3) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#C5A46D] font-semibold">
              Platform & Policies
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/about" className="text-[#A6ADA7] hover:text-[#FFFFFF] transition-colors">
                  About RCPL Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#A6ADA7] hover:text-[#FFFFFF] transition-colors">
                  Contact & Advisory Desk
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-[#A6ADA7] hover:text-[#FFFFFF] transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li className="pt-2">
                <Link
                  to="/privacy-policy"
                  className="text-[#A6ADA7] hover:text-[#FFFFFF] transition-colors inline-flex items-center gap-2"
                >
                  <span>Privacy Policy</span>
                  <span className="text-[10px] px-2 py-0.5 bg-[#20483A]/40 text-[#C5A46D] rounded-full font-mono">
                    Draft
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-of-service"
                  className="text-[#A6ADA7] hover:text-[#FFFFFF] transition-colors inline-flex items-center gap-2"
                >
                  <span>Terms of Service</span>
                  <span className="text-[10px] px-2 py-0.5 bg-[#20483A]/40 text-[#C5A46D] rounded-full font-mono">
                    Draft
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Regulatory & Disclaimer Sub-footer */}
        <div className="pt-8 text-xs text-[#A6ADA7]/70 space-y-4">
          <p className="leading-relaxed">
            <strong className="text-[#FFFFFF]">Statutory Advisory Notice:</strong> RCPL Services operates exclusively as an independent business facilitation and corporate documentation advisory firm. RCPL Services is not an official government department, regulatory registry, or judicial legal practice. All incorporation certificates, trade mark grants, tax registrations, and licenses are evaluated and granted solely at the discretion of respective central and state governmental authorities (including the Ministry of Corporate Affairs, Trade Marks Registry, DGFT, and CBIC).
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-3 border-t border-[#20483A]/40 text-[11px] text-[#A6ADA7]/60">
            <p>© {new Date().getFullYear()} RCPL Services. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={replayEntrance}
                className="hover:text-[#C5A46D] transition-colors cursor-pointer font-mono text-[10px] text-[#A6ADA7]/60 underline underline-offset-2"
              >
                Replay Entrance
              </button>
              <span className="font-mono text-[#C5A46D]/70">Modern Prestige Edition</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
