import React from 'react';
import { motion } from 'motion/react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { EnquiryForm } from '../components/enquiry/EnquiryForm';
import { fadeInUp, viewportConfig } from '../utils/motion';
import { Check, MapPin, Phone, Mail, Clock } from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <div className="space-y-12 lg:space-y-16 py-8">
      {/* Header & Breadcrumbs */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6"
      >
        <Breadcrumbs items={[{ label: 'Contact Us' }]} />

        <div className="bg-[#121B24] text-white border border-slate-800 p-6 sm:p-8 lg:p-14 rounded-2xl relative shadow-xl">
          <div className="max-w-3xl space-y-4">
            <div className="text-[11px] font-mono text-[#60A5FA] uppercase tracking-widest font-semibold">
              Statutory Consultation · Chennai Head Office · Pan-India Desk
            </div>

            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Contact RCPL Services
            </h1>

            <p className="text-base sm:text-lg text-[#CCD3DA] leading-relaxed font-normal">
              Discuss your enterprise requirements for company formation, <span className="text-[#D99A32] font-semibold">MEA Overseas RA Licenses</span>, intellectual property filings, tax registrations, or statutory secretarial changes directly with our team.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Main Grid: Form on Left / Notes on Right */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 pb-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Enquiry Form */}
          <div className="lg:col-span-7">
            <EnquiryForm />
          </div>

          {/* Right: Consultation Guidance */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-7 sm:p-8 border border-slate-200/80 rounded-xl shadow-xs space-y-4">
              <h2 className="font-display text-lg font-bold text-[#121B24]">
                How the Consultation Works
              </h2>

              <ul className="space-y-3.5 text-xs text-slate-600 divide-y divide-slate-100">
                <li className="pt-3 first:pt-0 flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#0F766E] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    <strong className="text-[#121B24]">Submit Brief:</strong> Enter your legal name, contact phone number, and candidate service of interest.
                  </span>
                </li>
                <li className="pt-3 flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#0F766E] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    <strong className="text-[#121B24]">WhatsApp Handoff:</strong> Your brief is formatted and opened in your personal WhatsApp app.
                  </span>
                </li>
                <li className="pt-3 flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#0F766E] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    <strong className="text-[#121B24]">You Inspect &amp; Send:</strong> You retain complete editorial control to review, edit, and send the message.
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 sm:p-7 border border-slate-200/80 rounded-xl shadow-xs space-y-3">
              <h3 className="font-display text-base font-bold text-[#121B24]">
                Chennai Head Office &amp; Operating Hours
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our advisory desk reviews incoming WhatsApp enquiries during regular commercial business hours (Monday to Saturday, 9:30 AM to 6:30 PM IST).
              </p>
              <div className="pt-2 border-t border-slate-100 text-xs text-slate-700 space-y-2">
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-[#1D4ED8] shrink-0" />
                  <span><strong>Head Office:</strong> Chennai, Tamil Nadu · Pan-India Electronic Filings</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#152E4D] shrink-0" />
                  <a href="tel:+918691001900" className="hover:text-[#152E4D] font-semibold">
                    +91 86910 01900
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#1D4ED8] shrink-0" />
                  <a href="mailto:enquiry@rcplservices.com" className="hover:text-[#152E4D]">
                    enquiry@rcplservices.com
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>Mon – Sat: 9:30 AM – 6:30 PM IST</span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-xl space-y-1.5 text-xs text-slate-600">
              <div className="font-semibold text-[#121B24]">
                Confidentiality &amp; Privacy
              </div>
              <p className="leading-relaxed">
                Your submitted details are passed directly into your local WhatsApp application via secure URL parameters. We do not store your contact numbers in an external commercial marketing database.
              </p>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};
