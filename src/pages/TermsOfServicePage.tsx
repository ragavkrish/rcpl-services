import React from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

export const TermsOfServicePage: React.FC = () => {
  return (
    <div className="space-y-10 py-8">
      {/* Header & Breadcrumbs */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <Breadcrumbs items={[{ label: 'Terms of Service' }]} />

        <div className="bg-[#121B24] text-white border border-[#243342] p-8 sm:p-12 relative">
          <div className="space-y-2">
            <span className="text-[11px] font-mono text-[#B28348] uppercase tracking-widest font-semibold">
              Official Terms · Version 1.0
            </span>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Terms of Service
            </h1>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-3xl space-y-8 text-sm text-[#3A4754] leading-relaxed bg-white p-8 sm:p-10 border border-[#CCD3DA]">
          <div className="space-y-2.5">
            <h2 className="font-display text-xl font-bold text-[#121B24]">
              1. Nature of Services
            </h2>
            <p>
              RCPL Services provides corporate document preparation, procedural facilitation, and administrative filing assistance for business formations, intellectual property applications, and statutory tax and compliance filings in India.
            </p>
            <p className="font-semibold text-[#121B24]">
              RCPL Services is not an official government department, regulatory registry, or judicial advocate practice. Informational materials provided on this website or during exploratory consultations do not constitute legal advice, judicial advocacy, or chartered audit opinions.
            </p>
          </div>

          <div className="space-y-2.5">
            <h2 className="font-display text-xl font-bold text-[#121B24]">
              2. Service Catalogue &amp; Scope
            </h2>
            <p>
              The services, processes, and service profiles listed across this website represent standard practice scopes. They are subject to scoping revisions, regulatory changes, and specific client requirements. Formal commercial obligations are established upon execution of an approved mandate.
            </p>
          </div>

          <div className="space-y-2.5">
            <h2 className="font-display text-xl font-bold text-[#121B24]">
              3. Absence of Outcome Guarantees
            </h2>
            <p>
              The grant of company names, incorporation certificates, trademark registrations, patent allowances, GST registrations, or tax assessments remains at the exclusive statutory discretion of government officers and regulatory registries (including the MCA, Trade Marks Registry, DGFT, and CBIC).
            </p>
            <p>
              RCPL Services does not guarantee approval outcomes, statutory timelines, or the absence of official queries or objections.
            </p>
          </div>

          <div className="space-y-2.5">
            <h2 className="font-display text-xl font-bold text-[#121B24]">
              4. Client Evidentiary Responsibilities
            </h2>
            <p>
              Clients are strictly responsible for providing authentic, complete, and legally valid identity proofs, address documents, registered office permissions, and financial disclosures. Filing fraudulent or forged documents on statutory portals constitutes a penal offence under the Companies Act and Indian law.
            </p>
          </div>

          <div className="space-y-2.5">
            <h2 className="font-display text-xl font-bold text-[#121B24]">
              5. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by applicable law, RCPL Services shall not be held liable for indirect, incidental, or consequential losses, penalties incurred from statutory revisions, or government delays beyond administrative control.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
