import React from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { AlertTriangle } from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="space-y-12 py-8">
      {/* Header & Breadcrumbs */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />

        {/* Draft Notice Banner */}
        <div
          role="alert"
          className="p-4 bg-amber-50 border border-amber-300 rounded-[3px] flex items-start gap-3 text-amber-900"
        >
          <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div className="text-xs space-y-1">
            <p className="font-semibold uppercase tracking-wider text-amber-800">
              Draft Document — Pending Client & Legal Counsel Review
            </p>
            <p className="leading-relaxed text-amber-700">
              This document is a candidate privacy notice tailored to the current operational architecture of the RCPL Services enquiry portal. It does not constitute formal legal counsel and must be formally verified and approved by client legal counsel prior to formal commercial launch.
            </p>
          </div>
        </div>

        <div className="bg-[#111714] text-[#FFFFFF] rounded-[4px] border border-[#20483A] p-8 sm:p-12 relative overflow-hidden">
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-wider text-[#C5A46D]">
              Candidate Draft · Version 1.0
            </span>
            <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-[#FFFFFF] tracking-tight">
              Privacy Policy (Candidate Draft)
            </h1>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-8 text-sm text-[#52616B] leading-relaxed">
          <div className="space-y-3">
            <h2 className="font-display text-xl font-bold text-[#111714]">
              1. Information We Collect
            </h2>
            <p>
              When you submit an enquiry through the RCPL Services website, you provide certain voluntary contact information, including your full name, telephone number, selected service category, and any contextual notes concerning your business requirement.
            </p>
            <p>
              This website does not require account creation, password management, or credit card collection.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-xl font-bold text-[#111714]">
              2. How Your Information is Processed
            </h2>
            <p>
              The enquiry form functions as a client-side drafting interface. When you click “Continue to WhatsApp,” your input is formatted into a URL-encoded string and transferred directly into the official WhatsApp web or desktop client on your personal device.
            </p>
            <p>
              RCPL Services does not store, transmit, or retain your contact inputs on an intermediary server database in this website version. Data transmission between your device and WhatsApp is governed by WhatsApp's End-to-End Encryption and Terms of Service.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-xl font-bold text-[#111714]">
              3. Cookies and Tracking Technologies
            </h2>
            <p>
              This website does not deploy invasive cross-site tracking cookies, behavioral profiling pixels, or programmatic advertising trackers. Standard session storage may be temporarily used to preserve UI states (such as modal visibility) during your visit.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-xl font-bold text-[#111714]">
              4. Third-Party Links & Messaging
            </h2>
            <p>
              Our website facilitates communication via WhatsApp (operated by Meta Platforms, Inc.). When you initiate a chat, the interaction takes place within the WhatsApp ecosystem. We recommend reviewing WhatsApp’s independent privacy policy regarding data processed within their messaging application.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-xl font-bold text-[#111714]">
              5. Candidate Status & Policy Updates
            </h2>
            <p>
              As RCPL Services finalizes operational protocols and verified business coordinates, this policy will be revised to reflect comprehensive data retention and statutory compliance mechanisms.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
