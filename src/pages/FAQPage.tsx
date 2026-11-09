import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { Accordion } from '../components/common/Accordion';
import { useRouter } from '../context/RouterContext';
import { fadeInUp, viewportConfig } from '../utils/motion';
import { MessageSquare } from 'lucide-react';

export const FAQPage: React.FC = () => {
  const { openEnquiryModal } = useRouter();
  const [activeTab, setActiveTab] = useState<'all' | 'ra' | 'formation' | 'ip' | 'tax' | 'secretarial'>('all');

  const allFaqs = [
    {
      category: 'general',
      question: 'What is the role of RCPL Services in corporate filings?',
      answer:
        'RCPL Services provides business facilitation and administrative compliance support. Headquartered in Chennai and serving clients across India, we assist founders and management teams with drafting constitutional charters, assembling evidentiary records, and executing statutory filings on authorized government portals such as the Ministry of Corporate Affairs (MCA), MEA eMigrate, GST Network, and the Trade Marks Registry.',
    },
    {
      category: 'general',
      question: 'Is RCPL Services an official government authority or judicial law firm?',
      answer:
        'No. RCPL Services is an independent corporate facilitation practice. We hold no formal affiliation with the Ministry of Corporate Affairs, Ministry of External Affairs, the Central Board of Indirect Taxes and Customs, or the Trade Marks Registry. All certificates, licences, and approvals are granted solely by respective statutory registries.',
    },
    {
      category: 'general',
      question: 'How does the WhatsApp enquiry process work?',
      answer:
        'Submitting the enquiry form opens your personal WhatsApp application with a structured message pre-filled with your contact information, chosen service, and specific notes. You have complete control to inspect, amend, and send the message to initiate an advisory discussion.',
    },
    {
      category: 'ra',
      question: 'What are the financial and office criteria for an MEA Recruiting Agent (RA) License?',
      answer:
        'For the standard 1,000+ worker capacity RA License under the Emigration Act, 1983, the applicant entity must hold ₹50 Lakhs Net Worth, furnish a ₹50 Lakh Bank Guarantee (or ₹8 Lakh BG for the 100-worker capacity tier), and maintain an accessible commercial office of at least 500 sq. ft. subject to Protector of Emigrants (POE) inspection.',
    },
    {
      category: 'formation',
      question: 'How do I choose between a Private Limited Company and an LLP?',
      answer:
        'A Private Limited Company is the standard choice if you intend to raise venture capital, issue equity shares, or offer Employee Stock Options (ESOPs). A Limited Liability Partnership (LLP) offers lower statutory audit burdens and greater internal flexibility, making it popular for professional service firms, consultancies, and family businesses that do not need outside equity capital.',
    },
    {
      category: 'formation',
      question: 'Is a physical commercial office required to register a company?',
      answer:
        'A company must have a registered office address in India capable of receiving statutory communications. This can be owned, rented, or a commercial shared space, provided you can submit valid address proof (such as a recent electricity bill) along with an owner’s No Objection Certificate (NOC).',
    },
    {
      category: 'formation',
      question: 'Can non-resident Indians (NRIs) or foreign citizens be directors?',
      answer:
        'Yes. Foreign nationals and NRIs can serve as directors in an Indian company, provided that at least one director on the board is an Indian resident who stayed in India for at least 182 days during the financial year. Foreign documentation must be notarized or apostilled.',
    },
    {
      category: 'ip',
      question: 'What is the difference between a trademark, a copyright, and a patent?',
      answer:
        'A trademark protects brand identifiers (names, logos, taglines, symbols). A copyright protects original tangible expressions of creativity (software source code, written text, illustrations, recordings). A patent protects novel, inventive, and industrially applicable technical inventions, mechanisms, or chemical formulations.',
    },
    {
      category: 'ip',
      question: 'Does filing a trademark application immediately grant exclusive rights?',
      answer:
        'No. Filing generates an application number and allows you to use the ™ symbol while the Trade Marks Registry examines the mark. Exclusive statutory protection and the right to use the registered ® symbol are granted only after examination, publication in the journal, and overcoming any third-party oppositions.',
    },
    {
      category: 'tax',
      question: 'When is GST registration mandatory?',
      answer:
        'GST registration is mandatory for businesses with aggregate annual turnover exceeding prescribed statutory thresholds (typically ₹40 lakhs for goods and ₹20 lakhs for services, with lower thresholds in special category states), or businesses engaged in interstate supply of goods or selling through digital e-commerce platforms.',
    },
    {
      category: 'tax',
      question: 'What ongoing filings are required for an active Private Limited Company?',
      answer:
        'An active company must conduct regular board and annual meetings, file periodic tax returns (GST, TDS, and annual corporate income tax), and submit mandatory annual corporate filings with the MCA (Form AOC-4 for financial accounts and Form MGT-7/7A for annual returns), as well as annual director KYC (DIR-3 KYC).',
    },
    {
      category: 'secretarial',
      question: 'What is involved in changing a company’s registered office?',
      answer:
        'The procedural path depends on the relocation distance: moving within the same city requires a board resolution and Form INC-22; moving to a different city within the same ROC jurisdiction requires shareholder approval; shifting to a different state requires special shareholder resolutions, newspaper advertisements, and approval from the Regional Director.',
    },
    {
      category: 'secretarial',
      question: 'Can a traditional partnership convert into a Private Limited Company?',
      answer:
        'Yes. Partnerships can be transitioned into a Private Limited Company under Part I of Chapter XXI of the Companies Act, 2013, or through a structured business takeover agreement. Eligibility criteria require that partner shares and assets are formally accounted for.',
    },
  ];

  const filteredFaqs =
    activeTab === 'all'
      ? allFaqs
      : allFaqs.filter((item) => item.category === activeTab || item.category === 'general');

  return (
    <div className="space-y-12 lg:space-y-16 py-8">
      {/* Header & Breadcrumbs */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6"
      >
        <Breadcrumbs items={[{ label: 'FAQs' }]} />

        <div className="bg-[#121B24] text-white border border-slate-800 p-6 sm:p-8 lg:p-14 rounded-2xl relative shadow-xl">
          <div className="max-w-3xl space-y-4">
            <div className="text-[11px] font-mono text-[#60A5FA] uppercase tracking-widest font-semibold">
              Statutory Knowledge Base · Regulatory Guidance
            </div>

            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Frequently Asked Questions
            </h1>

            <p className="text-base sm:text-lg text-[#CCD3DA] leading-relaxed font-normal">
              Methodical clarifications regarding entity incorporation, MEA Overseas RA licensing, trademark registration, tax compliance, and corporate governance in India.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Filter Tabs & Accordion */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8"
      >
        {/* Category Segmented Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 border-b border-slate-200">
          {[
            { id: 'all', label: 'All Statutory Questions' },
            { id: 'ra', label: 'RA License (MEA)' },
            { id: 'formation', label: 'Company Formations' },
            { id: 'ip', label: 'Intellectual Property' },
            { id: 'tax', label: 'Tax & Compliance' },
            { id: 'secretarial', label: 'Corporate Secretarial' },
          ].map((tab) => {
            const isRa = tab.id === 'ra';
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`px-4 py-2 min-h-[38px] text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? isRa
                      ? 'bg-[#D99A32] text-white shadow-sm ring-2 ring-[#D99A32]/30'
                      : 'bg-[#152E4D] text-white shadow-2xs'
                    : isRa
                    ? 'text-[#B87E22] bg-[#FFFDF8] border border-[#D99A32]/50 hover:bg-[#FDF6E8]'
                    : 'text-slate-600 bg-white border border-slate-200/80 hover:bg-slate-50 hover:text-[#121B24]'
                }`}
              >
                {isRa && (
                  <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-white' : 'bg-[#D99A32]'}`} />
                )}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* FAQs Accordion */}
        <div className="max-w-4xl">
          <Accordion items={filteredFaqs} allowMultiple theme="light" />
        </div>
      </motion.section>

      {/* Direct Consultation Card */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 pb-12"
      >
        <div className="p-8 sm:p-10 bg-white border border-slate-200/80 rounded-2xl shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1 max-w-xl">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#1D4ED8] font-semibold">
              Direct Advisory Desk
            </span>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-[#121B24]">
              Have a specific question not covered here?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Every enterprise setup has distinct jurisdictional and capital considerations. Connect directly via WhatsApp to review your exact requirements.
            </p>
          </div>

          <button
            type="button"
            onClick={() => openEnquiryModal()}
            className="px-6 py-3.5 min-h-[44px] bg-[#152E4D] hover:bg-[#0D1E33] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors shrink-0 cursor-pointer inline-flex items-center gap-2 shadow-xs whitespace-nowrap"
          >
            <MessageSquare className="w-4 h-4 text-[#60A5FA]" />
            <span>Consult on WhatsApp</span>
          </button>
        </div>
      </motion.section>
    </div>
  );
};
