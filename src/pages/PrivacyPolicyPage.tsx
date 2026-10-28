import React from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="space-y-10 py-8">
      {/* Header & Breadcrumbs */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />

        <div className="bg-[#121B24] text-white border border-[#243342] p-8 sm:p-12 relative">
          <div className="space-y-2">
            <span className="text-[11px] font-mono text-[#B28348] uppercase tracking-widest font-semibold">
              Official Policy · Version 1.0
            </span>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Privacy Policy
            </h1>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-3xl space-y-8 text-sm text-[#3A4754] leading-relaxed bg-white p-8 sm:p-10 border border-[#CCD3DA]">
          <div className="space-y-2.5">
            <h2 className="font-display text-xl font-bold text-[#121B24]">
              1. Information We Collect
            </h2>
            <p>
              When you submit an enquiry through the RCPL Services website, you provide certain voluntary contact information, including your full name, telephone number, selected service category, and any contextual notes concerning your business requirement.
            </p>
            <p>
              This website does not require account creation, password management, or credit card collection.
            </p>
          </div>

          <div className="space-y-2.5">
            <h2 className="font-display text-xl font-bold text-[#121B24]">
              2. How Your Information is Processed
            </h2>
            <p>
              The enquiry form functions as a client-side drafting interface. When you click “Open WhatsApp Consultation Docket,” your input is formatted into a URL-encoded string and transferred directly into the official WhatsApp web or desktop client on your personal device.
            </p>
            <p>
              RCPL Services does not store, transmit, or retain your contact inputs on an intermediary server database in this website version. Data transmission between your device and WhatsApp is governed by WhatsApp's End-to-End Encryption and Terms of Service.
            </p>
          </div>

          <div className="space-y-2.5">
            <h2 className="font-display text-xl font-bold text-[#121B24]">
              3. Cookies and Tracking Technologies
            </h2>
            <p>
              This website does not deploy invasive cross-site tracking cookies, behavioral profiling pixels, or programmatic advertising trackers. Standard session storage may be temporarily used to preserve UI states (such as modal visibility) during your visit.
            </p>
          </div>

          <div className="space-y-2.5">
            <h2 className="font-display text-xl font-bold text-[#121B24]">
              4. Third-Party Links &amp; Messaging
            </h2>
            <p>
              Our website facilitates communication via WhatsApp (operated by Meta Platforms, Inc.). When you initiate a chat, the interaction takes place within the WhatsApp ecosystem. We recommend reviewing WhatsApp’s independent privacy policy regarding data processed within their messaging application.
            </p>
          </div>

          <div className="space-y-2.5">
            <h2 className="font-display text-xl font-bold text-[#121B24]">
              5. Policy Updates
            </h2>
            <p>
              As RCPL Services updates operational protocols and service coordinates, this policy will be periodically revised to reflect current compliance mechanisms.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
