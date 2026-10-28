import React from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { EnquiryForm } from '../components/enquiry/EnquiryForm';
import { MessageSquare, Clock, ShieldCheck, Check, MapPin, Mail } from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <div className="space-y-12 lg:space-y-16 py-8">
      {/* Header & Breadcrumbs */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <Breadcrumbs items={[{ label: 'Contact Us' }]} />

        <div className="bg-[#121B24] text-white border border-[#243342] p-8 sm:p-14 relative">
          <div className="max-w-3xl space-y-4">
            <div className="text-[11px] font-mono text-[#B28348] uppercase tracking-widest font-semibold">
              Statutory Consultation · Intake Desk
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Contact RCPL Services
            </h1>

            <p className="text-base sm:text-lg text-[#CCD3DA] leading-relaxed font-normal">
              Discuss your enterprise requirements for company formation, intellectual property filings, tax registrations, or statutory secretarial changes directly with our team.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Form on Left / Notes on Right */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Enquiry Form */}
          <div className="lg:col-span-7">
            <EnquiryForm />
          </div>

          {/* Right: Consultation Guidance */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-7 sm:p-8 border border-[#CCD3DA] space-y-4">
              <h2 className="font-display text-lg font-bold text-[#121B24]">
                How the Consultation Works
              </h2>

              <ul className="space-y-3.5 text-xs text-[#556371] divide-y divide-[#E3E7EB]">
                <li className="pt-3 first:pt-0 flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#152E4D] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    <strong className="text-[#121B24]">Submit Brief:</strong> Enter your legal name, contact phone number, and candidate service of interest.
                  </span>
                </li>
                <li className="pt-3 flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#152E4D] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    <strong className="text-[#121B24]">WhatsApp Handoff:</strong> Your brief is formatted and opened in your personal WhatsApp app.
                  </span>
                </li>
                <li className="pt-3 flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#152E4D] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    <strong className="text-[#121B24]">You Inspect & Send:</strong> You retain complete editorial control to review, edit, and send the message.
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 sm:p-7 border border-[#CCD3DA] space-y-2.5">
              <h3 className="font-display text-base font-bold text-[#121B24]">
                Operating Hours & Locations
              </h3>
              <p className="text-xs text-[#556371] leading-relaxed">
                Our advisory desk reviews incoming WhatsApp enquiries during regular commercial business hours (Monday to Friday, standard Indian business hours: 9:30 AM to 6:30 PM IST). Enquiries received outside these windows are queued for immediate attention on the next business morning.
              </p>
              <div className="pt-2 text-xs text-[#3A4754] space-y-1">
                <p><strong>Principal Offices:</strong> Mumbai & New Delhi</p>
                <p><strong>Registry Scope:</strong> Pan-India Electronic ROC & GST Filings</p>
                <p><strong>Official Email:</strong> enquiry@rcplservices.com</p>
              </div>
            </div>

            <div className="p-6 bg-[#F6F7F5] border border-[#CCD3DA] space-y-1.5 text-xs text-[#556371]">
              <div className="font-semibold text-[#121B24]">
                Confidentiality & Privacy
              </div>
              <p className="leading-relaxed">
                Your submitted details are passed directly into your local WhatsApp application via secure URL parameters. We do not store your contact numbers in an external commercial marketing database.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
