import React from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { AlertTriangle } from 'lucide-react';

export const TermsOfServicePage: React.FC = () => {
  return (
    <div className="space-y-12 py-8">
      {/* Header & Breadcrumbs */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <Breadcrumbs items={[{ label: 'Terms of Service' }]} />

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
              This document is a candidate terms of service draft for RCPL Services. It must be formally reviewed, modified, and approved by qualified legal counsel to match finalized commercial, operational, and regulatory agreements.
            </p>
          </div>
        </div>

        <div className="bg-[#111714] text-[#FFFFFF] rounded-[4px] border border-[#20483A] p-8 sm:p-12 relative overflow-hidden">
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-wider text-[#C5A46D]">
              Candidate Draft · Version 1.0
            </span>
            <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-[#FFFFFF] tracking-tight">
              Terms of Service (Candidate Draft)
            </h1>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-3xl space-y-8 text-sm text-[#52616B] leading-relaxed">
          <div className="space-y-3">
            <h2 className="font-display text-xl font-bold text-[#111714]">
              1. Nature of Services
            </h2>
            <p>
              RCPL Services provides corporate document preparation, procedural facilitation, and administrative filing assistance for business formations, intellectual property applications, and statutory tax and compliance filings in India.
            </p>
            <p className="font-semibold text-[#111714]">
              RCPL Services is not an official government department, regulatory registry, or judicial advocate practice. Informational materials provided on this website or during exploratory consultations do not constitute legal advice, judicial advocacy, or chartered audit opinions.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-xl font-bold text-[#111714]">
              2. Candidate Catalogue Status
            </h2>
            <p>
              The services, processes, and candidate profiles listed across this website represent onboarding candidate scopes. They are subject to scoping revisions, regulatory changes, and specific client requirements. Formal commercial obligations are established only upon execution of an approved mandate.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-xl font-bold text-[#111714]">
              3. Absence of Outcome Guarantees
            </h2>
            <p>
              The grant of company names, incorporation certificates, trademark registrations, patent allowances, GST registrations, or tax assessments remains at the exclusive statutory discretion of government officers and regulatory registries (including the MCA, Trade Marks Registry, DGFT, and CBIC).
            </p>
            <p>
              RCPL Services does not guarantee approval outcomes, statutory timelines, or the absence of official queries or objections.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-xl font-bold text-[#111714]">
              4. Client Evidentiary Responsibilities
            </h2>
            <p>
              Clients are strictly responsible for providing authentic, complete, and legally valid identity proofs, address documents, registered office permissions, and financial disclosures. Filing fraudulent or forged documents on statutory portals constitutes a penal offence under the Companies Act and Indian law.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-xl font-bold text-[#111714]">
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
