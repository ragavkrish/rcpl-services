import React from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="space-y-6 sm:space-y-10 py-5 sm:py-8">
      {/* Header & Breadcrumbs */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 space-y-4 sm:space-y-6">
        <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />

        <div className="-mx-4 sm:mx-0 bg-[#121B24] text-white border-y sm:border border-[#243342] px-4 py-6 sm:p-8 lg:p-12 rounded-none sm:rounded-2xl relative shadow-none sm:shadow-xl">
          <div className="space-y-2">
            <span className="text-[10.5px] sm:text-[11px] font-mono text-[#60A5FA] uppercase tracking-widest font-semibold">
              Official Policy · Version 1.0
            </span>
            <h1 className="font-display text-[26px] sm:text-3xl md:text-4xl font-bold text-white tracking-tight break-words">
              Privacy Policy
            </h1>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-16">
        <div className="max-w-3xl space-y-6 sm:space-y-8 text-[13.5px] sm:text-sm text-[#3A4754] leading-relaxed bg-transparent sm:bg-white p-0 sm:p-10 border-none sm:border sm:border-[#CCD3DA] rounded-none sm:rounded-xl shadow-none sm:shadow-xs">
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
