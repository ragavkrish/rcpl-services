import React, { useState } from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { Accordion } from '../components/common/Accordion';
import { useRouter } from '../context/RouterContext';
import { MessageSquare } from 'lucide-react';

export const FAQPage: React.FC = () => {
  const { openEnquiryModal } = useRouter();
  const [activeTab, setActiveTab] = useState<'all' | 'general' | 'formation' | 'ip' | 'tax' | 'secretarial'>('all');

  const allFaqs = [
    {
      category: 'general',
      question: 'What is the role of RCPL Services in corporate filings?',
      answer:
        'RCPL Services provides business facilitation and administrative compliance support. We assist founders and management teams with drafting constitutional charters, assembling evidentiary records, and executing statutory filings on authorized government portals such as the Ministry of Corporate Affairs (MCA), GST Network, and the Trade Marks Registry.',
    },
    {
      category: 'general',
      question: 'Is RCPL Services an official government authority or judicial law firm?',
      answer:
        'No. RCPL Services is an independent corporate facilitation practice. We hold no formal affiliation with the Ministry of Corporate Affairs, the Central Board of Indirect Taxes and Customs, or the Trade Marks Registry. All certificates, licences, and approvals are granted solely by respective statutory registries.',
    },
    {
      category: 'general',
      question: 'How does the WhatsApp enquiry process work?',
      answer:
        'Submitting the enquiry form opens your personal WhatsApp application with a structured message pre-filled with your contact information, chosen service, and specific notes. You have complete control to inspect, amend, and send the message to initiate an advisory discussion.',
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
      : allFaqs.filter((item) => item.category === activeTab);

  return (
    <div className="space-y-16 lg:space-y-24 py-8">
      {/* Header & Breadcrumbs */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <Breadcrumbs items={[{ label: 'Frequently Asked Questions' }]} />

        <div className="bg-[#111714] text-[#FFFFFF] rounded-tl-[36px] rounded-br-[36px] sm:rounded-tl-[48px] sm:rounded-br-[48px] border border-[#20483A] p-8 sm:p-14 relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#20483A]/30 blur-3xl pointer-events-none" />

          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#C5A46D] uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A46D]" />
              <span>Knowledge Base</span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FFFFFF] tracking-tight text-balance">
              Frequently Asked Questions
            </h1>

            <p className="text-base sm:text-lg text-[#A6ADA7] leading-relaxed font-light">
              Detailed guidance regarding statutory frameworks, entity incorporation, intellectual property rights, tax returns, and corporate governance.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs & Accordion */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Segmented Tabs (Pill Container & Pill Buttons) */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-white border border-[#D8DDD7] rounded-full mb-8 max-w-2xl shadow-xs">
          {[
            { id: 'all', label: 'All Questions' },
            { id: 'general', label: 'General & Scope' },
            { id: 'formation', label: 'Formations' },
            { id: 'ip', label: 'Intellectual Property' },
            { id: 'tax', label: 'Tax & Compliance' },
            { id: 'secretarial', label: 'Secretarial & Conversions' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`px-4 py-2 text-xs font-medium rounded-full transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#111714] text-white shadow-xs'
                  : 'text-[#52616B] hover:text-[#111714] hover:bg-[#F5F2E9]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* FAQs Accordion */}
        <div className="max-w-4xl">
          <Accordion items={filteredFaqs} allowMultiple theme="light" />
        </div>
      </section>

      {/* Direct Consultation Card (Rounded-24px with Pill Button) */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="p-8 sm:p-12 bg-[#FFFFFF] border border-[#D8DDD7] rounded-[24px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1.5 max-w-xl">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-[#111714]">
              Have a question not covered here?
            </h2>
            <p className="text-xs sm:text-sm text-[#52616B] leading-relaxed">
              Every enterprise setup has distinct jurisdictional and capital considerations. Connect directly via WhatsApp to review your exact requirements.
            </p>
          </div>

          <button
            type="button"
            onClick={() => openEnquiryModal()}
            className="px-8 py-3.5 bg-[#20483A] hover:bg-[#2A5C4A] border border-[#C5A46D]/60 text-white font-display text-xs font-semibold uppercase tracking-wider rounded-full transition-all shrink-0 cursor-pointer inline-flex items-center gap-2.5 shadow-sm active:scale-[0.98]"
          >
            <MessageSquare className="w-4 h-4 text-[#C5A46D]" />
            <span>Consult via WhatsApp</span>
          </button>
        </div>
      </section>
    </div>
  );
};
