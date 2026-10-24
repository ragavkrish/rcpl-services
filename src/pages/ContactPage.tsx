import React from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { EnquiryForm } from '../components/enquiry/EnquiryForm';
import { MessageSquare, Clock, ShieldCheck, CheckCircle } from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <div className="space-y-16 lg:space-y-24 py-8">
      {/* Header & Breadcrumbs */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <Breadcrumbs items={[{ label: 'Contact & Advisory Desk' }]} />

        <div className="bg-[#111714] text-[#FFFFFF] rounded-tl-[36px] rounded-br-[36px] sm:rounded-tl-[48px] sm:rounded-br-[48px] border border-[#20483A] p-8 sm:p-14 relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#20483A]/30 blur-3xl pointer-events-none" />

          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#C5A46D] uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A46D]" />
              <span>Advisory Desk / Intake</span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FFFFFF] tracking-tight text-balance">
              Contact RCPL Services
            </h1>

            <p className="text-base sm:text-lg text-[#A6ADA7] leading-relaxed font-light">
              Discuss your requirements for company incorporation, intellectual property registration, tax filings, or statutory secretarial changes directly with our team.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Form on Left / Notes on Right */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Enquiry Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 border border-[#D8DDD7] rounded-[24px] shadow-xs">
            <EnquiryForm />
          </div>

          {/* Right: Consultation Guidance */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-8 border border-[#D8DDD7] rounded-[24px] space-y-4 shadow-xs">
              <h2 className="font-display text-lg font-bold text-[#111714] flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#20483A]/10 text-[#20483A] flex items-center justify-center">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <span>How the Consultation Works</span>
              </h2>

              <ul className="space-y-3.5 text-xs text-[#52616B] divide-y divide-[#D8DDD7]/70">
                <li className="pt-3 first:pt-0 flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#20483A] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#111714]">Submit Brief:</strong> Enter your full name, phone number, and candidate service of interest.
                  </span>
                </li>
                <li className="pt-3 flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#20483A] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#111714]">WhatsApp Handoff:</strong> Your brief is formatted and opened in your personal WhatsApp app.
                  </span>
                </li>
                <li className="pt-3 flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#20483A] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#111714]">You Inspect & Send:</strong> You retain complete editorial control to review, edit, and send the message.
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-7 border border-[#D8DDD7] rounded-[20px] space-y-3 shadow-xs">
              <h3 className="font-display text-sm font-bold text-[#111714] flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#F5F2E9] text-[#20483A] flex items-center justify-center">
                  <Clock className="w-3.5 h-3.5" />
                </div>
                <span>Operating Cadence</span>
              </h3>
              <p className="text-xs text-[#52616B] leading-relaxed">
                Our advisory desk reviews incoming WhatsApp enquiries during regular commercial business hours (Monday to Friday, standard Indian business hours). Enquiries received outside these windows are queued for immediate attention on the next business morning.
              </p>
            </div>

            <div className="p-6 bg-[#F5F2E9] border border-[#D8DDD7] rounded-[20px] space-y-2 text-xs text-[#52616B]">
              <div className="flex items-center gap-2 font-semibold text-[#111714]">
                <ShieldCheck className="w-4 h-4 text-[#20483A]" />
                <span>Confidentiality & Privacy</span>
              </div>
              <p className="leading-relaxed">
                Your submitted details are passed directly into your local WhatsApp application via secure URL parameters. We do not store your contact numbers in an external database or share them with third-party marketing services.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
