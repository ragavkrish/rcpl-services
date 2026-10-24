import { ServiceCategory, ServiceItem } from '../types/service';

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'cat-1',
    number: '01',
    title: 'Business Formation',
    slug: 'business-formation',
    shortDescription:
      'Incorporation and foundational registration services for companies, partnerships, and proprietorships across India.',
    editorialIntro:
      'Selecting the appropriate legal entity structure impacts liability, capital raising potential, tax obligations, and ongoing statutory reporting. We help founders evaluate options and prepare foundational documentation.',
    status: 'published',
    serviceCountCandidate: 6,
  },
  {
    id: 'cat-2',
    number: '02',
    title: 'Intellectual Property',
    slug: 'intellectual-property',
    shortDescription:
      'Advisory and filing assistance for trademarks, copyright, and patent applications to safeguard proprietary business assets.',
    editorialIntro:
      'Intellectual property filings require rigorous classification and examination response management. Filing assistance helps applicants document brand marks, original creative works, and patentable innovations.',
    status: 'published',
    serviceCountCandidate: 4,
  },
  {
    id: 'cat-3',
    number: '03',
    title: 'Registrations & Licences',
    slug: 'registrations',
    shortDescription:
      'Mandatory and sectoral operational registrations including GST, IEC, APEDA, PWD, and Startup India recognitions.',
    editorialIntro:
      'Operating legally within specific trade domains or regional public contracting requires verified statutory registrations. We assist with application assembly and submission alignment.',
    status: 'published',
    serviceCountCandidate: 7,
  },
  {
    id: 'cat-4',
    number: '04',
    title: 'Taxation & Compliance',
    slug: 'taxation',
    shortDescription:
      'Direct and indirect tax filing support, withholding tax returns, and statutory employee benefit scheme compliances.',
    editorialIntro:
      'Maintaining compliant periodic tax filings and payroll withholdings mitigates penal liabilities. We provide structured support for GST, income tax, TDS, and employee fund records.',
    status: 'published',
    serviceCountCandidate: 6,
  },
  {
    id: 'cat-5',
    number: '05',
    title: 'Secretarial Services',
    slug: 'secretarial',
    shortDescription:
      'Corporate statutory record maintenance, governance documentation, officer changes, and charter amendments.',
    editorialIntro:
      'Corporate structural modifications—such as director additions, address migrations, or capital amendments—require formal board resolutions, shareholder approvals, and registrar notifications.',
    status: 'published',
    serviceCountCandidate: 7,
  },
  {
    id: 'cat-6',
    number: '06',
    title: 'Company Conversions',
    slug: 'company-conversions',
    shortDescription:
      'Legal entity transformations enabling scaling enterprises to transition from unorganised structures to limited corporate bodies.',
    editorialIntro:
      'As commercial volume and external financing needs expand, transitioning from proprietorships or traditional partnerships into LLPs or Private Limited entities provides limited liability and institutional standing.',
    status: 'published',
    serviceCountCandidate: 6,
  },
];

export const candidateServices: ServiceItem[] = [
  // Category 1: Business Formation
  {
    id: 'bf-pvt-ltd',
    title: 'Private Limited Company',
    slug: 'private-limited-company',
    categorySlug: 'business-formation',
    categoryTitle: 'Business Formation',
    status: 'published',
    isFeatured: true,
    summary:
      'Incorporation assistance for private limited companies seeking limited liability, separate legal identity, and venture-ready equity structure.',
    overview:
      'A Private Limited Company is one of the most widely adopted corporate vehicles in India for technology startups, growing commercial ventures, and capital-seeking businesses. It creates an independent legal personality separate from its shareholders and directors, limiting individual liability to unpaid share capital. Registration requires digital signature certificates, director identification numbers, name approval through the central registration portal, and filing of the memorandum and articles of association.',
    whoNeedsThis: [
      'Founders seeking external equity investment or venture capital funding',
      'Enterprises requiring strong corporate governance and distinct legal standing',
      'Businesses requiring limited liability protection for personal assets',
      'Joint ventures and partnerships transitioning into corporate status',
    ],
    whatHappensNext: [
      {
        step: 1,
        title: 'Requirement & Name Scoping',
        description: 'Discuss proposed company names, industrial objectives, and shareholding distribution.',
      },
      {
        step: 2,
        title: 'Documentation & Portal Preparation',
        description: 'Assemble identity proofs, address documents, and digital signature registrations for proposed directors.',
      },
      {
        step: 3,
        title: 'Statutory Submission & Certificate Issuance',
        description: 'File incorporation forms with the Registrar of Companies and assist with post-incorporation commencement filings.',
      },
    ],
    documentGuidance:
      'Exact documentation requirements depend on director residency and entity ownership. Typically required documents include PAN cards, government photo identity proofs, recent address proofs for directors, and registered office proof with utility bills and owner NOC. Specific requirements should be confirmed during your initial enquiry.',
    faqs: [
      {
        question: 'What is the minimum number of directors required for a Private Limited Company?',
        answer: 'Generally, a minimum of two directors and two shareholders are required under the Companies Act, with at least one director resident in India.',
      },
      {
        question: 'Can foreign nationals or non-resident Indians be directors?',
        answer: 'Yes, subject to standard identity notarisation/apostille requirements and maintaining at least one Indian resident director on the board.',
      },
      {
        question: 'Does RCPL Services guarantee name approval from the registrar?',
        answer: 'No. Name approval is strictly at the discretion of the Ministry of Corporate Affairs based on name availability rules and trademark conflicts.',
      },
    ],
    relatedServiceSlugs: ['limited-liability-partnership', 'one-person-company', 'gst-registration'],
  },
  {
    id: 'bf-opc',
    title: 'One Person Company (OPC)',
    slug: 'one-person-company',
    categorySlug: 'business-formation',
    categoryTitle: 'Business Formation',
    status: 'published',
    summary:
      'Corporate registration designed for solo entrepreneurs desiring limited liability protection with simplified corporate compliance.',
    overview:
      'A One Person Company allows an individual founder to enjoy the corporate status and limited liability of a private limited company without requiring a co-founder or second shareholder. The structure mandates the nomination of an alternate nominee director to safeguard business continuity. It offers a structured corporate identity while reducing administrative complexity relative to multi-member corporations.',
    whoNeedsThis: [
      'Solo founders and independent service professionals seeking corporate separation',
      'Single proprietors desiring limited liability protection without partners',
      'Early-stage sole founders bootstrapping an intellectual property or service asset',
    ],
    whatHappensNext: [
      {
        step: 1,
        title: 'Nominee & Name Formulation',
        description: 'Identify the primary founder and designated nominee details for MCA compliance.',
      },
      {
        step: 2,
        title: 'Portal Drafting & Identity Verification',
        description: 'Obtain digital signatures and prepare the constitutional charter (MOA/AOA).',
      },
      {
        step: 3,
        title: 'Incorporation Review',
        description: 'Submit integrated incorporation forms for registrar verification.',
      },
    ],
    documentGuidance:
      'Requires identity and address proofs for both the sole member and the designated nominee, alongside registered office utility bills and landlord consent. Please confirm current evidentiary checklists during your consultation.',
    faqs: [
      {
        question: 'Can a person incorporate multiple One Person Companies?',
        answer: 'Under applicable MCA guidelines, an individual is generally restricted from being the sole member of more than one OPC concurrently.',
      },
      {
        question: 'Can an OPC later convert into a Private Limited Company?',
        answer: 'Yes, an OPC can be converted into a standard Private Limited Company upon adding members and amending its constitutional documents.',
      },
    ],
    relatedServiceSlugs: ['private-limited-company', 'sole-proprietorship', 'opc-to-private-limited'],
  },
  {
    id: 'bf-public-ltd',
    title: 'Public Limited Company',
    slug: 'public-limited-company',
    categorySlug: 'business-formation',
    categoryTitle: 'Business Formation',
    status: 'published',
    summary:
      'Incorporation structure for large-scale operations with broad public capital raising capability and strict governance oversight.',
    overview:
      'A Public Limited Company is formulated for commercial organisations planning large-scale operations, significant shareholder participation, or future public capital listings. It requires a minimum of seven shareholders and three directors, and adheres to higher thresholds of statutory disclosures and governance standards.',
    whoNeedsThis: [
      'Enterprises preparing for public funding rounds or extensive institutional syndication',
      'Established businesses expanding operations with diversified shareholder bases',
      'Firms operating in regulated financial or large infrastructure sectors',
    ],
    whatHappensNext: [
      {
        step: 1,
        title: 'Governance Scoping',
        description: 'Structure founding board, share capital provisions, and governance objectives.',
      },
      {
        step: 2,
        title: 'Charter & Statutory Filings',
        description: 'Draft public company MOA/AOA and process registrar filings via MCA portal.',
      },
      {
        step: 3,
        title: 'Commencement of Business',
        description: 'Assist with capital subscription verification and business commencement certificates.',
      },
    ],
    documentGuidance:
      'Statutory documentation includes director identity records, consent letters, registered office documentation, and detailed capital allocation schedules.',
    faqs: [
      {
        question: 'What is the minimum member requirement for a public limited company?',
        answer: 'A minimum of seven shareholders and three directors is required by law.',
      },
      {
        question: 'Can shares in an unlisted public company be transferred?',
        answer: 'Yes, shares in a public company are freely transferable subject to statutory provisions and dematerialisation rules.',
      },
    ],
    relatedServiceSlugs: ['private-limited-company', 'authorised-capital-changes', 'director-partner-changes'],
  },
  {
    id: 'bf-llp',
    title: 'Limited Liability Partnership (LLP)',
    slug: 'limited-liability-partnership',
    categorySlug: 'business-formation',
    categoryTitle: 'Business Formation',
    status: 'published',
    isFeatured: true,
    summary:
      'Alternative corporate business vehicle combining the flexibility of a partnership with the benefit of limited liability.',
    overview:
      'A Limited Liability Partnership provides the administrative agility and internal contractual freedom of a traditional partnership while safeguarding partners from mutual unlimited liabilities. It is governed primarily by an LLP Agreement registered with the Ministry of Corporate Affairs, making it particularly attractive for professional service providers, consultancies, and family businesses.',
    whoNeedsThis: [
      'Professional service firms (consultants, designers, agencies, advisors)',
      'Partners desiring limited personal liability without strict corporate meeting formalities',
      'Businesses seeking pass-through partnership tax treatment without dividend distribution tax friction',
    ],
    whatHappensNext: [
      {
        step: 1,
        title: 'Partner Structuring',
        description: 'Define partner contribution ratios, designated partners, and operational authority.',
      },
      {
        step: 2,
        title: 'LLP Name & Agreement Draft',
        description: 'Apply for name reservation and draft the formal LLP Agreement.',
      },
      {
        step: 3,
        title: 'Filing & Agreement Registration',
        description: 'File incorporation documents and execute the registered LLP Agreement within statutory timelines.',
      },
    ],
    documentGuidance:
      'Identity and address proofs of designated partners, digital signatures, registered office proof, and mutual partner consent affidavits are required.',
    faqs: [
      {
        question: 'How does an LLP differ from a general partnership?',
        answer: 'In an LLP, partners have limited liability and the entity has perpetual succession, unlike an unregistered partnership where partners face unlimited personal liability.',
      },
      {
        question: 'Is a minimum capital contribution mandatory for an LLP?',
        answer: 'There is no statutory minimum capital threshold prescribed under the LLP Act, allowing partners to contribute as mutually agreed.',
      },
    ],
    relatedServiceSlugs: ['private-limited-company', 'partnership-firm', 'partnership-to-llp'],
  },
  {
    id: 'bf-sole-prop',
    title: 'Sole Proprietorship',
    slug: 'sole-proprietorship',
    categorySlug: 'business-formation',
    categoryTitle: 'Business Formation',
    status: 'published',
    summary:
      'Foundational operational setup for individual business owners establishing trade licences and business banking channels.',
    overview:
      'A Sole Proprietorship is the simplest, most common form of commercial activity in India. While it is not a distinct legal entity from its owner, establishing a proprietorship involves obtaining relevant statutory registrations (such as Udyam MSME, GST, and local Shop & Establishment licences) to facilitate formal business bank accounts and supplier agreements.',
    whoNeedsThis: [
      'Local traders, freelance contractors, and independent artisans',
      'Small scale micro-enterprises testing market demand with minimal regulatory overhead',
      'Individuals requiring immediate business banking documentation',
    ],
    whatHappensNext: [
      {
        step: 1,
        title: 'Operational Assessment',
        description: 'Determine required trade licences based on business location and industry.',
      },
      {
        step: 2,
        title: 'Registrations Assembly',
        description: 'Prepare Udyam / MSME and tax registration filings under the proprietor’s identity.',
      },
      {
        step: 3,
        title: 'Banking Readiness',
        description: 'Deliver certificates required by commercial banks for current account opening.',
      },
    ],
    documentGuidance:
      'Proprietor PAN card, Aadhaar, bank statement, electricity bill for premises, and rent agreement or ownership proof.',
    faqs: [
      {
        question: 'Does a sole proprietorship provide limited liability?',
        answer: 'No. The proprietor holds unlimited personal liability for debts and obligations incurred by the business.',
      },
      {
        question: 'Can a proprietorship be converted into a company later?',
        answer: 'Yes, as business volume increases, a proprietorship can be transitioned into a Private Limited Company or LLP.',
      },
    ],
    relatedServiceSlugs: ['partnership-firm', 'gst-registration', 'proprietorship-to-private-limited'],
  },
  {
    id: 'bf-partnership',
    title: 'Partnership Firm',
    slug: 'partnership-firm',
    categorySlug: 'business-formation',
    categoryTitle: 'Business Formation',
    status: 'published',
    summary:
      'Drafting partnership deeds and registering commercial firms under the Indian Partnership Act, 1932.',
    overview:
      'A Partnership Firm represents an association of two or more individuals agreeing to share the profits and responsibilities of a business. While registration under the Indian Partnership Act is voluntary in some states, having a registered deed and firm PAN is critical for enforcing contractual rights and facilitating commercial transactions.',
    whoNeedsThis: [
      'Two or more co-founders desiring a contractual business agreement without corporate filings',
      'Family-owned commercial establishments with trusted partner relationships',
      'Trading entities seeking straightforward formation and low ongoing maintenance',
    ],
    whatHappensNext: [
      {
        step: 1,
        title: 'Deed Terms Consultation',
        description: 'Structure profit/loss shares, capital contributions, and partner responsibilities.',
      },
      {
        step: 2,
        title: 'Deed Drafting & Stamp Execution',
        description: 'Draft the formal Partnership Deed on appropriate non-judicial stamp paper.',
      },
      {
        step: 3,
        title: 'Registrar Application & PAN',
        description: 'Apply for the firm PAN and file registration with the Registrar of Firms where required.',
      },
    ],
    documentGuidance:
      'Partner KYC documents, business location proof, drafted partnership deed, and state stamp duty compliance.',
    faqs: [
      {
        question: 'Is registration with the Registrar of Firms compulsory?',
        answer: 'While unregistered firms may operate, registering the firm provides legal protection to enforce contractual claims in court.',
      },
    ],
    relatedServiceSlugs: ['limited-liability-partnership', 'partnership-to-llp', 'partnership-to-private-limited'],
  },

  // Category 2: Intellectual Property
  {
    id: 'ip-tm-reg',
    title: 'Trademark Registration',
    slug: 'trademark-registration',
    categorySlug: 'intellectual-property',
    categoryTitle: 'Intellectual Property',
    status: 'published',
    isFeatured: true,
    summary:
      'Filing brand names, logos, slogans, and wordmarks under appropriate classes with the Trade Marks Registry.',
    overview:
      'A registered trademark confers statutory exclusive rights over brand names, symbols, and slogans in relation to specified goods or services. The registration process involves classification under the 45 Nice Classification classes, search analysis, formal application filing, examination by the registry, response to examination reports if objections arise, and publication in the Trade Marks Journal.',
    whoNeedsThis: [
      'Brands investing in distinct marketing identities and customer recognition',
      'E-commerce merchants requiring brand registry protection on marketplaces',
      'Businesses safeguarding their proprietary product or service designations',
    ],
    whatHappensNext: [
      {
        step: 1,
        title: 'Preliminary Search & Class Scoping',
        description: 'Review existing trademark records to identify potential phonetic or visual conflicts.',
      },
      {
        step: 2,
        title: 'Application Preparation & Filing',
        description: 'Prepare Form TM-A with user affidavits and submit to the Trade Marks Registry.',
      },
      {
        step: 3,
        title: 'Monitoring & Examination Follow-up',
        description: 'Track application status through registry examination and journal publication.',
      },
    ],
    documentGuidance:
      'Applicant identity and address proofs, logo graphic file, power of attorney (Form TM-48), and user date affidavit if claiming prior usage.',
    faqs: [
      {
        question: 'Does filing an application guarantee trademark registration?',
        answer: 'No. Registration is subject to statutory examination, absence of conflicting marks, and overcoming third-party oppositions if filed.',
      },
      {
        question: 'Can I use the ™ symbol after application?',
        answer: 'Applicants typically use the ™ symbol once an application number is generated, while the ® symbol is strictly reserved for granted registrations.',
      },
    ],
    relatedServiceSlugs: ['trademark-renewal', 'copyright-registration', 'private-limited-company'],
  },
  {
    id: 'ip-tm-renew',
    title: 'Trademark Renewal',
    slug: 'trademark-renewal',
    categorySlug: 'intellectual-property',
    categoryTitle: 'Intellectual Property',
    status: 'published',
    summary:
      'Maintaining active protection by filing periodic ten-year renewal applications for registered trademarks.',
    overview:
      'Under the Trade Marks Act, trademark registrations are valid for ten years from the filing date and must be renewed periodically to maintain continuous statutory protection. Applications can typically be filed within six months prior to expiry, or within the statutory grace period with restoration surcharges.',
    whoNeedsThis: [
      'Proprietors of trademarks nearing their ten-year expiration window',
      'Brand owners requiring restoration for lapsed marks within the statutory grace timeline',
    ],
    whatHappensNext: [
      {
        step: 1,
        title: 'Record Verification',
        description: 'Verify current status on the Trade Marks Registry and identify renewal deadlines.',
      },
      {
        step: 2,
        title: 'Renewal Form Execution',
        description: 'Draft Form TM-R with verified applicant authorizations.',
      },
      {
        step: 3,
        title: 'Filing & Registry Endorsement',
        description: 'Submit government fees and monitor issuance of the renewal certificate.',
      },
    ],
    documentGuidance:
      'Registration certificate copy, current applicant authorization, and verification of any title or address changes.',
    faqs: [
      {
        question: 'What happens if a trademark renewal deadline is missed?',
        answer: 'A mark may be renewed with late surcharge within statutory grace periods, or restored via restoration petition if within the permissible timeframe.',
      },
    ],
    relatedServiceSlugs: ['trademark-registration', 'copyright-registration'],
  },
  {
    id: 'ip-cr-reg',
    title: 'Copyright Registration',
    slug: 'copyright-registration',
    categorySlug: 'intellectual-property',
    categoryTitle: 'Intellectual Property',
    status: 'published',
    summary:
      'Securing statutory ownership records for literary, artistic, software, musical, and dramatic creations.',
    overview:
      'Copyright protects original expressions of ideas in tangible forms, including software source code, written literature, artistic illustrations, website copy, and video recordings. While copyright protection exists upon creation, statutory registration with the Copyright Office establishes a strong legal presumption of ownership in disputes.',
    whoNeedsThis: [
      'Software developers and technology firms registering proprietary codebases',
      'Authors, visual artists, and digital content creators securing creative assets',
      'Enterprises protecting training manuals, industrial drawings, and branding artwork',
    ],
    whatHappensNext: [
      {
        step: 1,
        title: 'Work Classification',
        description: 'Determine appropriate statutory category (literary, artistic, or software).',
      },
      {
        step: 2,
        title: 'Filing & Sample Submission',
        description: 'Submit application along with certified copies of the work and author NOCs.',
      },
      {
        step: 3,
        title: 'Mandatory Waiting Period & Scrutiny',
        description: 'Comply with the mandatory 30-day statutory notice period for objections.',
      },
    ],
    documentGuidance:
      'Copies of the work, NOC from author/publisher if applicant is an employer, and applicant authorization.',
    faqs: [
      {
        question: 'Can computer software code be registered under copyright in India?',
        answer: 'Yes, computer software source and object code are registered as literary works under the Copyright Act.',
      },
    ],
    relatedServiceSlugs: ['trademark-registration', 'patent-applications'],
  },
  {
    id: 'ip-patent-app',
    title: 'Patent Applications',
    slug: 'patent-applications',
    categorySlug: 'intellectual-property',
    categoryTitle: 'Intellectual Property',
    status: 'published',
    summary:
      'Preliminary search assistance and formal application drafting support for novel technical inventions.',
    overview:
      'A patent grants exclusive statutory rights over an invention that demonstrates novelty, inventive step, and industrial applicability. Navigating the Indian Patent Office requires precise technical specifications (provisional or complete), formal claims drafting, and tracking through publication and examination.',
    whoNeedsThis: [
      'Hardware and biotech inventors seeking priority date protection',
      'R&D enterprises protecting unique technological mechanisms and formulas',
      'Startups seeking patent pending status prior to commercial exposure',
    ],
    whatHappensNext: [
      {
        step: 1,
        title: 'Prior Art & Patentability Assessment',
        description: 'Review technical claims against published patent databases.',
      },
      {
        step: 2,
        title: 'Specification Drafting',
        description: 'Formulate provisional or complete specifications with detailed claims and diagrams.',
      },
      {
        step: 3,
        title: 'Filing & Publication Follow-up',
        description: 'File application forms and monitor publication in the Patent Office Journal.',
      },
    ],
    documentGuidance:
      'Detailed technical description, drawings/flowcharts, inventor details, and power of authority.',
    faqs: [
      {
        question: 'What is the purpose of a provisional patent specification?',
        answer: 'A provisional specification establishes an early priority date while giving the inventor up to 12 months to complete and file the complete specification.',
      },
      {
        question: 'Is patent grant guaranteed upon filing?',
        answer: 'No. Applications undergo extensive examination for novelty, non-obviousness, and patentable subject matter under Section 3 of the Patents Act.',
      },
    ],
    relatedServiceSlugs: ['copyright-registration', 'trademark-registration'],
  },

  // Category 3: Registrations & Licences
  {
    id: 'reg-gst',
    title: 'GST Registration',
    slug: 'gst-registration',
    categorySlug: 'registrations',
    categoryTitle: 'Registrations & Licences',
    status: 'published',
    isFeatured: true,
    summary:
      'Statutory goods and services tax enrollment for mandatory interstate trade, threshold turnover, or voluntary credit access.',
    overview:
      'Goods and Services Tax (GST) registration is legally required for enterprises crossing statutory turnover thresholds, engaging in interstate supply of goods, or trading through e-commerce operators. A Goods and Services Tax Identification Number (GSTIN) enables businesses to collect tax from customers and claim input tax credit on purchases.',
    whoNeedsThis: [
      'Businesses crossing statutory aggregate turnover limits in their respective state',
      'Entities engaged in interstate sales or operating on digital e-commerce platforms',
      'Voluntary applicants seeking to pass input tax credit to institutional clients',
    ],
    whatHappensNext: [
      {
        step: 1,
        title: 'Eligibility & Document Check',
        description: 'Verify business address proofs, principal place of business, and bank records.',
      },
      {
        step: 2,
        title: 'Online Application Filing',
        description: 'Submit Form GST REG-01 with Aadhaar authentication on the GST common portal.',
      },
      {
        step: 3,
        title: 'Clarification & ARN Tracking',
        description: 'Monitor portal processing and assist with clarifications if requested by jurisdictional officers.',
      },
    ],
    documentGuidance:
      'PAN card, Aadhaar, bank statement/cancelled cheque, electricity bill, rent agreement with owner NOC for business premises.',
    faqs: [
      {
        question: 'Is physical verification of business premises conducted?',
        answer: 'Officers may conduct physical site verification if Aadhaar authentication is skipped or if flagged by risk evaluation criteria.',
      },
    ],
    relatedServiceSlugs: ['gst-filing', 'gst-cancellation', 'import-export-code'],
  },
  {
    id: 'reg-iata',
    title: 'IATA-related registration or services',
    slug: 'iata-services',
    categorySlug: 'registrations',
    categoryTitle: 'Registrations & Licences',
    status: 'published',
    summary:
      'Facilitation support for travel agencies and cargo intermediaries seeking industry agency accreditation.',
    overview:
      'Accreditation with the International Air Transport Association (IATA) allows passenger travel agencies and cargo operators to issue airline tickets directly and participate in the Billing and Settlement Plan (BSP). Application documentation requires demonstrated financial stability, qualified staff, and professional premises.',
    whoNeedsThis: [
      'Travel agencies expanding into direct airline ticketing without consolidator intermediaries',
      'Cargo logistics companies seeking recognized air freight forwarding credentials',
    ],
    whatHappensNext: [
      {
        step: 1,
        title: 'Pre-application Scrutiny',
        description: 'Review agency financial standing, staff accreditation, and premises standards.',
      },
      {
        step: 2,
        title: 'Dossier Assembly',
        description: 'Prepare audited statements, bank guarantees, and documentation for IATA portal submission.',
      },
      {
        step: 3,
        title: 'Application Review',
        description: 'Track agency vetting and assist with requested clarifications.',
      },
    ],
    documentGuidance:
      'Audited financial statements, staff credentials, business registration documents, and premises photographs.',
    faqs: [
      {
        question: 'Are financial guarantees required for IATA accreditation?',
        answer: 'Yes, IATA typically requires bank guarantees or insurance bonds based on projected ticketing turnover.',
      },
    ],
    relatedServiceSlugs: ['import-export-code', 'gst-registration'],
  },
  {
    id: 'reg-iec',
    title: 'Import Export Code (IEC)',
    slug: 'import-export-code',
    categorySlug: 'registrations',
    categoryTitle: 'Registrations & Licences',
    status: 'published',
    summary:
      'Mandatory ten-digit business identifier issued by DGFT for cross-border import and export transactions.',
    overview:
      'The Importer-Exporter Code (IEC) is issued by the Directorate General of Foreign Trade (DGFT), Ministry of Commerce and Industry. It is obligatory for any entity or individual engaged in importing or exporting goods and specific services into or out of India, as well as accessing export incentive benefits.',
    whoNeedsThis: [
      'Merchants importing physical goods, raw materials, or equipment',
      'Exporters delivering services or manufactured products to foreign buyers',
      'Firms clearing customs or receiving commercial inward foreign exchange remittances',
    ],
    whatHappensNext: [
      {
        step: 1,
        title: 'DGFT Portal Profile Setup',
        description: 'Link entity PAN and setup the digital profile on the DGFT portal.',
      },
      {
        step: 2,
        title: 'Application Submission',
        description: 'File ANF-2A application with bank certificate details.',
      },
      {
        step: 3,
        title: 'Code Generation',
        description: 'Receive and verify the electronic IEC certificate.',
      },
    ],
    documentGuidance:
      'Entity PAN, bank account validation (cancelled cheque/certificate), and registered address evidence.',
    faqs: [
      {
        question: 'Is annual renewal required for an IEC?',
        answer: 'While the IEC is valid for life, DGFT mandates annual electronic updation of details between April and June.',
      },
    ],
    relatedServiceSlugs: ['apeda-registration', 'gst-registration'],
  },
  {
    id: 'reg-apeda',
    title: 'APEDA Registration',
    slug: 'apeda-registration',
    categorySlug: 'registrations',
    categoryTitle: 'Registrations & Licences',
    status: 'published',
    summary:
      'Registration with the Agricultural and Processed Food Products Export Development Authority (RCMC).',
    overview:
      'Exporters of scheduled agricultural and processed food products—such as fruits, vegetables, meat products, confectionery, and cereal grains—are required to obtain a Registration-cum-Membership Certificate (RCMC) from APEDA to export commercially and access financial assistance schemes.',
    whoNeedsThis: [
      'Agro-food processing companies and agricultural commodity exporters',
      'Traders dealing in scheduled agro-products listed in the APEDA Act',
    ],
    whatHappensNext: [
      {
        step: 1,
        title: 'Eligibility & IEC Check',
        description: 'Verify active IEC and match business activities with APEDA scheduled products.',
      },
      {
        step: 2,
        title: 'Application Preparation',
        description: 'Assemble bank certificates, manufacturing licences, and export profiles.',
      },
      {
        step: 3,
        title: 'RCMC Issuance',
        description: 'Submit to APEDA online portal and track membership certification.',
      },
    ],
    documentGuidance:
      'Valid IEC, bank certificate, entity registration, and manufacturing licence if registered as a manufacturer exporter.',
    faqs: [
      {
        question: 'Is an IEC mandatory before applying for APEDA registration?',
        answer: 'Yes, an active Importer Exporter Code is a mandatory prerequisite.',
      },
    ],
    relatedServiceSlugs: ['import-export-code', 'gst-registration'],
  },
  {
    id: 'reg-pwd',
    title: 'PWD Registration',
    slug: 'pwd-registration',
    categorySlug: 'registrations',
    categoryTitle: 'Registrations & Licences',
    status: 'published',
    summary:
      'Contractor enlistment facilitation for civil, electrical, and infrastructure works with Public Works Departments.',
    overview:
      'Contractor enlistment with state or central Public Works Departments (PWD) categorises civil contractors into classes based on financial solvency, past project executions, technical personnel, and machinery. Enlistment is required to tender for public infrastructure and civil construction projects.',
    whoNeedsThis: [
      'Civil construction contractors and electrical infrastructure engineers',
      'Builders expanding into public works tenders and municipal contracts',
    ],
    whatHappensNext: [
      {
        step: 1,
        title: 'Class & Criteria Determination',
        description: 'Evaluate net worth, solvency, and machinery against specific state PWD rules.',
      },
      {
        step: 2,
        title: 'Documentation Dossier',
        description: 'Compile solvency certificates, machinery lists, past completions, and engineer affidavits.',
      },
      {
        step: 3,
        title: 'Department Submission',
        description: 'Lodge enlistment dossier with the designated executive engineer / portal.',
      },
    ],
    documentGuidance:
      'Bank solvency certificate, tax returns, past work completion certificates, machinery ownership proof, and technical staff details.',
    faqs: [
      {
        question: 'Do PWD contractor enlistment rules vary across states?',
        answer: 'Yes, each state Public Works Department maintains distinct class thresholds and documentation guidelines.',
      },
    ],
    relatedServiceSlugs: ['gst-registration', 'private-limited-company'],
  },
  {
    id: 'reg-startup-india',
    title: 'Startup India Registration',
    slug: 'startup-india-registration',
    categorySlug: 'registrations',
    categoryTitle: 'Registrations & Licences',
    status: 'published',
    summary:
      'DPIIT recognition assistance enabling eligible startups to access statutory tax concessions, patent rebates, and regulatory relaxations.',
    overview:
      'The Department for Promotion of Industry and Internal Trade (DPIIT) recognizes innovative ventures under the Startup India initiative. Recognized entities can seek Section 80-IAC income tax exemptions (subject to CBDT board approval), patent fee rebates, relaxed public procurement criteria, and self-certification under labor and environmental laws.',
    whoNeedsThis: [
      'Incorporated private limited companies and LLPs under 10 years old with an innovative business model',
      'Startups seeking patent/trademark government fee reductions',
      'Early-stage enterprises preparing for institutional incubation and funding schemes',
    ],
    whatHappensNext: [
      {
        step: 1,
        title: 'Innovation & Criteria Review',
        description: 'Assess entity age, turnover history, and scalability / innovation narrative.',
      },
      {
        step: 2,
        title: 'Pitch & Write-up Preparation',
        description: 'Structure problem statement, uniqueness explanation, and market scalability brief.',
      },
      {
        step: 3,
        title: 'Portal Submission',
        description: 'Submit recognized application via Startup India portal for DPIIT verification.',
      },
    ],
    documentGuidance:
      'Certificate of incorporation, brief pitch deck/note on innovation, link to website or video demo, and director details.',
    faqs: [
      {
        question: 'Does DPIIT recognition automatically grant income tax exemption?',
        answer: 'No. DPIIT recognition is the first step; Section 80-IAC tax exemption requires a separate application reviewed by the Inter-Ministerial Board.',
      },
    ],
    relatedServiceSlugs: ['private-limited-company', 'trademark-registration', 'patent-applications'],
  },
  {
    id: 'reg-gst-cancel',
    title: 'GST-related Cancellation',
    slug: 'gst-cancellation',
    categorySlug: 'registrations',
    categoryTitle: 'Registrations & Licences',
    status: 'published',
    summary:
      'Formal closure and surrender of inactive or unneeded GSTINs in compliance with statutory surrender provisions.',
    overview:
      'When an enterprise ceases operations, changes its constitution, or falls permanently below turnover thresholds, filing for formal cancellation of GST registration prevents non-filing penalties and compounding default notices. The process requires filing Form GST REG-16 and submitting a final return (Form GSTR-10).',
    whoNeedsThis: [
      'Enterprises winding down operations or closing specific state branch registrations',
      'Entities undergoing structural conversion requiring surrender of previous legal entity GSTIN',
    ],
    whatHappensNext: [
      {
        step: 1,
        title: 'Tax & Stock Reconciliation',
        description: 'Reconcile outstanding tax liabilities and input tax credit on closing stock/capital goods.',
      },
      {
        step: 2,
        title: 'Cancellation Application',
        description: 'File Form GST REG-16 detailing reason and effective date of cessation.',
      },
      {
        step: 3,
        title: 'Final Return & Discharge',
        description: 'File GSTR-10 final return to secure formal discharge order from the proper officer.',
      },
    ],
    documentGuidance:
      'Closing stock statements, tax payment challans for closing liabilities, and business cessation resolutions.',
    faqs: [
      {
        question: 'Can cancellation be filed if returns are pending?',
        answer: 'Generally, all periodic returns up to the date of cancellation application must be filed before the surrender is processed.',
      },
    ],
    relatedServiceSlugs: ['gst-filing', 'gst-registration'],
  },

  // Category 4: Taxation & Compliance
  {
    id: 'tax-itr',
    title: 'Income Tax Filing',
    slug: 'income-tax-filing',
    categorySlug: 'taxation',
    categoryTitle: 'Taxation & Compliance',
    status: 'published',
    isFeatured: true,
    summary:
      'Annual tax return preparation and electronic filing for corporate entities, LLPs, firms, and individuals.',
    overview:
      'Preparing and filing annual income tax returns ensures statutory compliance with the Income Tax Act. For commercial organisations and businesses, accurate return computation involves reconciling balance sheets, profit and loss statements, Form 26AS, AIS/TIS data, and depreciation schedules in adherence to tax audit provisions.',
    whoNeedsThis: [
      'Companies, LLPs, and partnership firms fulfilling mandatory annual tax filing requirements',
      'Proprietors and self-employed professionals with business or professional income',
      'Entities requiring audited or non-audited tax submissions to maintain financial credibility',
    ],
    whatHappensNext: [
      {
        step: 1,
        title: 'Financials & Records Collation',
        description: 'Collate audited/provisional financial statements, TDS credits, and banking statements.',
      },
      {
        step: 2,
        title: 'Computation & Deductions Review',
        description: 'Compute taxable income and claim admissible statutory deductions.',
      },
      {
        step: 3,
        title: 'Electronic Return Filing',
        description: 'Upload ITR forms to the income tax portal and secure electronic verification acknowledgment.',
      },
    ],
    documentGuidance:
      'Financial accounts, Form 26AS / AIS, bank statements, previous year ITR copies, and tax audit reports where applicable.',
    faqs: [
      {
        question: 'Do companies need to file ITR even if they incurred losses?',
        answer: 'Yes, filing income tax returns is mandatory for corporate entities regardless of profit or loss.',
      },
    ],
    relatedServiceSlugs: ['gst-filing', 'tds-filing', 'private-limited-company'],
  },
  {
    id: 'tax-gst-filing',
    title: 'GST Filing',
    slug: 'gst-filing',
    categorySlug: 'taxation',
    categoryTitle: 'Taxation & Compliance',
    status: 'published',
    isFeatured: true,
    summary:
      'Periodic monthly and quarterly return reconciliation and filing (GSTR-1, GSTR-3B, and GSTR-9).',
    overview:
      'Regular GST compliance involves monthly or quarterly reconciliation of outward sales (GSTR-1) and monthly tax discharge with input credit claims (GSTR-3B). Accurate matching of purchases against vendor uploads in GSTR-2B is critical to prevent input tax credit disallowances and interest notices.',
    whoNeedsThis: [
      'Registered GST taxpayers required to submit monthly or quarterly returns',
      'Businesses requiring input tax credit matching against supplier GSTR-2B data',
      'Firms seeking annual GST reconciliation (GSTR-9) and audit assistance',
    ],
    whatHappensNext: [
      {
        step: 1,
        title: 'Sales & Inward Register Collation',
        description: 'Compile sales invoices, credit notes, and purchase ledgers for the period.',
      },
      {
        step: 2,
        title: 'ITC Matching & Tax Liability Computation',
        description: 'Match purchase registers with GSTR-2B and determine net cash liability.',
      },
      {
        step: 3,
        title: 'Portal Submission & Challan Verification',
        description: 'File returns electronically and provide filing acknowledgments.',
      },
    ],
    documentGuidance:
      'Sales register, purchase register, bank statements, and payment challans.',
    faqs: [
      {
        question: 'What is the consequence of late GST return filing?',
        answer: 'Late filing attracts statutory daily late fees and interest on unpaid tax liabilities as mandated by GST law.',
      },
    ],
    relatedServiceSlugs: ['gst-registration', 'income-tax-filing', 'tds-filing'],
  },
  {
    id: 'tax-tds',
    title: 'TDS Filing',
    slug: 'tds-filing',
    categorySlug: 'taxation',
    categoryTitle: 'Taxation & Compliance',
    status: 'published',
    summary:
      'Quarterly withholding tax return preparation, monthly challan deposition, and Form 16/16A generation.',
    overview:
      'Entities making specified payments—such as contractor fees, professional fees, employee salaries, and rent—are mandated to deduct tax at source (TDS) under prescribed provisions of the Income Tax Act. Filers must deposit deducted taxes monthly and submit quarterly returns (Form 24Q, 26Q) to avoid penal interest.',
    whoNeedsThis: [
      'Businesses and corporate deductees with active Tax Deduction Account Numbers (TAN)',
      'Organisations deducting tax from salaries, vendor payments, and commercial rent',
    ],
    whatHappensNext: [
      {
        step: 1,
        title: 'Challan & Deduction Reconciliation',
        description: 'Verify monthly deduction dates, rates, and deposit challan BSR codes.',
      },
      {
        step: 2,
        title: 'Quarterly Statement Preparation',
        description: 'Prepare regular quarterly return data files adhering to NSDL e-TDS specifications.',
      },
      {
        step: 3,
        title: 'Filing & Certificate Generation',
        description: 'Submit returns through portal and generate Form 16 / 16A certificates from TRACES.',
      },
    ],
    documentGuidance:
      'TAN registration details, PAN of payees, monthly challan counterfoils, and deduction ledgers.',
    faqs: [
      {
        question: 'When are quarterly TDS returns due?',
        answer: 'Returns are typically due by the end of the month following the end of each fiscal quarter (except March, which has a longer window).',
      },
    ],
    relatedServiceSlugs: ['income-tax-filing', 'gst-filing', 'epf-services'],
  },
  {
    id: 'tax-esi',
    title: 'ESI-related Services',
    slug: 'esi-services',
    categorySlug: 'taxation',
    categoryTitle: 'Taxation & Compliance',
    status: 'published',
    summary:
      'Employees’ State Insurance registration, monthly contribution return filing, and employee credential management.',
    overview:
      'The Employees’ State Insurance Act provides social security and healthcare coverage to employees earning within statutory wage thresholds in covered establishments. Employers must register on the ESIC portal, generate insurance numbers for eligible staff, and deposit monthly employer and employee contributions.',
    whoNeedsThis: [
      'Establishments employing 10 or more workers with wages within the statutory limit',
      'Firms requiring ESIC code numbers to participate in tenders or corporate vendor panels',
    ],
    whatHappensNext: [
      {
        step: 1,
        title: 'Wage & Headcount Analysis',
        description: 'Identify eligible workforce members based on wage ceilings and establishment applicability.',
      },
      {
        step: 2,
        title: 'Monthly Wages Reconciliation',
        description: 'Calculate employee and employer shares on monthly payroll sheets.',
      },
      {
        step: 3,
        title: 'Challan Generation & Filing',
        description: 'File monthly wage returns and generate bank challans on the ESIC portal.',
      },
    ],
    documentGuidance:
      'Payroll sheets, employee KYC records, establishment registration, and banking details.',
    faqs: [
      {
        question: 'Is ESI registration mandatory once employee thresholds are crossed?',
        answer: 'Yes, compliance becomes legally mandatory upon reaching the statutory employee threshold in notified areas.',
      },
    ],
    relatedServiceSlugs: ['epf-services', 'professional-tax'],
  },
  {
    id: 'tax-epf',
    title: 'EPF-related Services',
    slug: 'epf-services',
    categorySlug: 'taxation',
    categoryTitle: 'Taxation & Compliance',
    status: 'published',
    summary:
      'Employees’ Provident Fund organization registration, monthly Electronic Challan cum Return (ECR) filing.',
    overview:
      'The Employees’ Provident Fund and Miscellaneous Provisions Act mandates retirement and insurance savings for industrial and commercial workforces. Covered employers must maintain monthly Electronic Challan cum Returns (ECR), transfer contributions to the EPFO, and manage Universal Account Numbers (UAN) for staff.',
    whoNeedsThis: [
      'Enterprises with 20 or more staff members, or voluntary registrations seeking employee benefits',
      'Contractors fulfilling labor compliance mandates for client projects',
    ],
    whatHappensNext: [
      {
        step: 1,
        title: 'Establishment Setup & UAN Linking',
        description: 'Register the establishment on the Unified Shram Suvidha / EPFO portal and link employees.',
      },
      {
        step: 2,
        title: 'ECR Preparation',
        description: 'Format monthly salary breakdown into required EPFO ECR text format.',
      },
      {
        step: 3,
        title: 'Challan Generation',
        description: 'Upload return, verify contribution calculations, and generate remittance challan.',
      },
    ],
    documentGuidance:
      'Employee Aadhaar-linked KYC, monthly salary sheets, establishment bank accounts, and authorization deeds.',
    faqs: [
      {
        question: 'Can establishments with fewer than 20 employees register voluntarily?',
        answer: 'Yes, voluntary coverage is permissible with the mutual consent of employer and employees.',
      },
    ],
    relatedServiceSlugs: ['esi-services', 'professional-tax'],
  },
  {
    id: 'tax-prof-tax',
    title: 'Professional Tax',
    slug: 'professional-tax',
    categorySlug: 'taxation',
    categoryTitle: 'Taxation & Compliance',
    status: 'published',
    summary:
      'State-level Professional Tax Enrolment (PTEC) and Registration (PTRC) for businesses and employers.',
    overview:
      'Professional Tax is a state-level levy on professions, trades, callings, and employments. Depending on the state of operation, businesses must obtain an Enrolment Certificate (to pay tax on the business itself) and a Registration Certificate (to deduct and remit tax from employee wages).',
    whoNeedsThis: [
      'Employers operating in states levying professional tax',
      'Sole professionals, directors, and business owners requiring PTEC compliance',
    ],
    whatHappensNext: [
      {
        step: 1,
        title: 'State Jurisdiction Scoping',
        description: 'Verify specific state tax slabs, applicability rules, and filing cycles.',
      },
      {
        step: 2,
        title: 'Application & Registration',
        description: 'File PTRC and PTEC applications with the state commercial tax department.',
      },
      {
        step: 3,
        title: 'Periodic Return Remittance',
        description: 'Compute payroll deductions and submit monthly/annual state returns.',
      },
    ],
    documentGuidance:
      'Entity registration proof, lease agreement, PAN card, and payroll summary.',
    faqs: [
      {
        question: 'Is Professional Tax applicable in all Indian states?',
        answer: 'No, professional tax is governed by individual state legislation and is not levied in every state or union territory.',
      },
    ],
    relatedServiceSlugs: ['epf-services', 'esi-services', 'income-tax-filing'],
  },

  // Category 5: Secretarial Services
  {
    id: 'sec-ro-change',
    title: 'Registered Office Change',
    slug: 'registered-office-change',
    categorySlug: 'secretarial',
    categoryTitle: 'Secretarial Services',
    status: 'published',
    summary:
      'Statutory notices and filings for shifting company registered offices within the same city, across ROC jurisdictions, or across states.',
    overview:
      'A company’s registered office is its official domicile for all statutory communications. Relocating the registered office requires adherence to prescribed MCA procedural rules. Shifting within the same city requires a board resolution (Form INC-22), whereas shifting to another state necessitates special shareholder resolutions, newspaper advertisements, and approval from the Regional Director.',
    whoNeedsThis: [
      'Companies moving to new operational premises or upgrading facilities',
      'Enterprises migrating their domicile across state boundaries or Registrar jurisdictions',
    ],
    whatHappensNext: [
      {
        step: 1,
        title: 'Jurisdiction & Process Assessment',
        description: 'Determine procedural requirements based on whether the move is intra-city, inter-ROC, or interstate.',
      },
      {
        step: 2,
        title: 'Board & Shareholder Resolutions',
        description: 'Draft statutory resolutions, notices, and landlord NOC documentation.',
      },
      {
        step: 3,
        title: 'MCA Filing & Approval Tracking',
        description: 'Submit Form INC-22 (and INC-23 if Regional Director sanction is required) on the MCA portal.',
      },
    ],
    documentGuidance:
      'Utility bill of new premises (less than two months old), landlord NOC, proof of ownership or rent lease, and certified board resolutions.',
    faqs: [
      {
        question: 'Does changing the registered office across states require public notice?',
        answer: 'Yes, interstate shifting mandates publishing notices in vernacular and English newspapers to invite objections from creditors.',
      },
    ],
    relatedServiceSlugs: ['company-name-change', 'moa-aoa-changes', 'business-structure-changes'],
  },
  {
    id: 'sec-director-change',
    title: 'Director or Partner Changes',
    slug: 'director-partner-changes',
    categorySlug: 'secretarial',
    categoryTitle: 'Secretarial Services',
    status: 'published',
    summary:
      'Formal appointment, resignation, regularisation, or removal of company directors and LLP partners.',
    overview:
      'Changes in a company’s governing board—such as inducting new directors, regularising additional directors, accepting resignations, or updating designated partners in an LLP—must be formally recorded with the Ministry of Corporate Affairs through Form DIR-12 or LLP Form 4 within statutory timelines.',
    whoNeedsThis: [
      'Companies onboarding new leadership, investor nominees, or independent directors',
      'Firms accepting executive resignations or retiring founding partners',
    ],
    whatHappensNext: [
      {
        step: 1,
        title: 'Board Approval & Consent Formulation',
        description: 'Execute board meeting resolutions and obtain consent to act (Form DIR-2) with non-disqualification declarations.',
      },
      {
        step: 2,
        title: 'DIR-12 / Form 4 Drafting',
        description: 'Prepare electronic filings with digital signatures of authorized key managerial personnel.',
      },
      {
        step: 3,
        title: 'MCA Verification',
        description: 'Submit portal filings and track registrar master data updates.',
      },
    ],
    documentGuidance:
      'Director PAN and Aadhaar, DIN details, written consent (DIR-2), resignation letter, and certified board resolution.',
    faqs: [
      {
        question: 'What is the statutory deadline to report a director change to the MCA?',
        answer: 'Form DIR-12 must generally be filed within 30 days of the effective date of appointment or resignation.',
      },
    ],
    relatedServiceSlugs: ['share-transfers', 'registered-office-change', 'authorised-capital-changes'],
  },
  {
    id: 'sec-name-change',
    title: 'Company Name Change',
    slug: 'company-name-change',
    categorySlug: 'secretarial',
    categoryTitle: 'Secretarial Services',
    status: 'published',
    summary:
      'Assistance with corporate renaming, name reservation (RUN), shareholder special resolutions, and altered certificate issuance.',
    overview:
      'Rebranding or restructuring business operations often necessitates altering the legal corporate name. The statutory process requires passing a board resolution, reserving the proposed name with the MCA, securing special resolution approval from shareholders, and filing Form INC-24 with the Central Registration Centre to obtain a revised Certificate of Incorporation.',
    whoNeedsThis: [
      'Companies executing brand realignments, acquisitions, or market expansions',
      'Enterprises aligning their corporate legal identity with registered trademark assets',
    ],
    whatHappensNext: [
      {
        step: 1,
        title: 'Name Availability Scrutiny',
        description: 'Conduct trademark and MCA database checks to ensure proposed names comply with naming guidelines.',
      },
      {
        step: 2,
        title: 'Name Reservation & Shareholder Approval',
        description: 'Submit RUN portal application and draft the special resolution for extraordinary general meetings.',
      },
      {
        step: 3,
        title: 'INC-24 Filing & Certificate Receipt',
        description: 'File altered charter and receive the amended Certificate of Incorporation from the registrar.',
      },
    ],
    documentGuidance:
      'Certified copy of board and EGM special resolutions, altered Memorandum & Articles of Association, and shareholder meeting notices.',
    faqs: [
      {
        question: 'Does a company name change affect existing contracts or liabilities?',
        answer: 'No. The legal entity remains continuous; existing debts, rights, and contractual obligations carry forward unaffected.',
      },
    ],
    relatedServiceSlugs: ['moa-aoa-changes', 'registered-office-change', 'trademark-registration'],
  },
  {
    id: 'sec-cap-changes',
    title: 'Authorised Capital Changes',
    slug: 'authorised-capital-changes',
    categorySlug: 'secretarial',
    categoryTitle: 'Secretarial Services',
    status: 'published',
    summary:
      'Increasing nominal capital ceilings in company charters to accommodate new share issuances or equity financing rounds.',
    overview:
      'The authorised share capital stipulated in a company’s Memorandum of Association defines the maximum nominal value of shares the board is permitted to issue. Before raising fresh capital or allocating shares to new investors, companies frequently need to expand this threshold by amending the capital clause through Form SH-7 and paying applicable state stamp duty.',
    whoNeedsThis: [
      'Businesses preparing for equity funding rounds or angel investments',
      'Companies issuing bonus shares or expanding paid-up capital beyond current charter limits',
    ],
    whatHappensNext: [
      {
        step: 1,
        title: 'Capital Requirements Review',
        description: 'Determine required capital expansion and compute state stamp duty tariffs.',
      },
      {
        step: 2,
        title: 'EGM Resolution & Charter Alteration',
        description: 'Draft shareholder special resolutions and alter Clause V of the Memorandum of Association.',
      },
      {
        step: 3,
        title: 'Form SH-7 Submission',
        description: 'Submit portal filings, remit stamp duties, and verify updated MCA master capital records.',
      },
    ],
    documentGuidance:
      'Notice of general meeting, certified resolution copy, altered Memorandum of Association, and payment proofs.',
    faqs: [
      {
        question: 'How is stamp duty calculated on capital increases?',
        answer: 'Stamp duty on authorised capital expansion varies by state and is calculated based on the differential increase in capital value.',
      },
    ],
    relatedServiceSlugs: ['share-transfers', 'moa-aoa-changes', 'private-limited-company'],
  },
  {
    id: 'sec-share-transfers',
    title: 'Share Transfers',
    slug: 'share-transfers',
    categorySlug: 'secretarial',
    categoryTitle: 'Secretarial Services',
    status: 'published',
    summary:
      'Execution of share transfer deeds (Form SH-4), stamp duty compliance, board approval minutes, and share certificate endorsements.',
    overview:
      'Transferring share ownership in an unlisted private company requires formal execution of a securities transfer deed (Form SH-4), payment of prescribed transfer stamp duty, board approval under the articles of association, and subsequent endorsement of physical or dematerialised share certificates.',
    whoNeedsThis: [
      'Founders rebalancing equity holdings among existing or incoming shareholders',
      'Family-owned companies executing generational succession transfers',
    ],
    whatHappensNext: [
      {
        step: 1,
        title: 'Valuation & Terms Scoping',
        description: 'Review transfer pricing considerations and Articles of Association pre-emption rights.',
      },
      {
        step: 2,
        title: 'Form SH-4 Execution & Stamping',
        description: 'Draft the transfer deed and execute statutory stamp duty payments.',
      },
      {
        step: 3,
        title: 'Board Approval & Register Updating',
        description: 'Record transfer in board minutes and update the formal Register of Members (MGT-1).',
      },
    ],
    documentGuidance:
      'Original share certificates, signed SH-4 deed, PAN proofs of transferor and transferee, and board resolution.',
    faqs: [
      {
        question: 'Can the board of a private company refuse a share transfer?',
        answer: 'A private company’s articles typically restrict the right to transfer shares, and the board may refuse within the terms defined in the AOA.',
      },
    ],
    relatedServiceSlugs: ['director-partner-changes', 'authorised-capital-changes', 'moa-aoa-changes'],
  },
  {
    id: 'sec-moa-aoa',
    title: 'MOA/AOA Changes',
    slug: 'moa-aoa-changes',
    categorySlug: 'secretarial',
    categoryTitle: 'Secretarial Services',
    status: 'published',
    summary:
      'Amending company charters—including primary business objects clauses, liability clauses, and internal governance regulations.',
    overview:
      'The Memorandum of Association (MOA) and Articles of Association (AOA) constitute the legal constitution and internal operating bylaws of a corporation. Expanding into new lines of trade, adopting modern governance standards, or embedding shareholder agreement covenants requires passing special resolutions and filing Form MGT-14 with the MCA.',
    whoNeedsThis: [
      'Businesses entering new industries outside their current registered object clauses',
      'Companies incorporating investor protective provisions into internal bylaws',
    ],
    whatHappensNext: [
      {
        step: 1,
        title: 'Charter Clause Drafting',
        description: 'Draft revised object clauses or amended articles in adherence to the Companies Act.',
      },
      {
        step: 2,
        title: 'Special Resolution Execution',
        description: 'Formulate notices, explanatory statements, and shareholder vote resolutions.',
      },
      {
        step: 3,
        title: 'Form MGT-14 Submission',
        description: 'File resolutions with the registrar within statutory 30-day windows.',
      },
    ],
    documentGuidance:
      'Certified true copy of special resolution, altered MOA/AOA draft, and meeting explanatory statements.',
    faqs: [
      {
        question: 'Why is amending the business object clause necessary?',
        answer: 'A company cannot legally conduct operations outside the scope defined in its registered MOA object clause.',
      },
    ],
    relatedServiceSlugs: ['company-name-change', 'authorised-capital-changes', 'business-structure-changes'],
  },
  {
    id: 'sec-biz-structure',
    title: 'Business Structure Changes',
    slug: 'business-structure-changes',
    categorySlug: 'secretarial',
    categoryTitle: 'Secretarial Services',
    status: 'published',
    summary:
      'Corporate advisory and documentation for structural reorganisations, internal reorganisations, and capital restructuring.',
    overview:
      'Modifying broader corporate governance frameworks—such as restructuring subsidiary-parent relationships, adopting management stock option pools, or reorganising internal division assets—requires coordinated secretarial compliance and registrar filings.',
    whoNeedsThis: [
      'Growing commercial groups establishing holding company frameworks',
      'Enterprises restructuring internal divisions for operational efficiencies',
    ],
    whatHappensNext: [
      {
        step: 1,
        title: 'Strategic Structuring Review',
        description: 'Examine current entity charters, regulatory obligations, and shareholder objectives.',
      },
      {
        step: 2,
        title: 'Resolution & Secretarial Drafting',
        description: 'Draft legal agreements, resolutions, and notices for internal structural updates.',
      },
      {
        step: 3,
        title: 'Filing & Registry Maintenance',
        description: 'File necessary disclosures with the MCA to reflect updated governance structures.',
      },
    ],
    documentGuidance:
      'Corporate entity records, board minutes, shareholder approvals, and applicable inter-company agreements.',
    faqs: [
      {
        question: 'Are structural advisory services tailored to specific business arrangements?',
        answer: 'Yes, each restructuring is evaluated individually to determine the applicable procedural path under the Companies Act.',
      },
    ],
    relatedServiceSlugs: ['moa-aoa-changes', 'share-transfers', 'director-partner-changes'],
  },

  // Category 6: Company Conversions
  {
    id: 'conv-prop-pvt',
    title: 'Proprietorship to Private Limited Company',
    slug: 'proprietorship-to-private-limited',
    categorySlug: 'company-conversions',
    categoryTitle: 'Company Conversions',
    status: 'published',
    isFeatured: true,
    summary:
      'Slump sale or takeover structure transitioning an unorganised sole proprietorship into an incorporated private limited company.',
    overview:
      'As sole proprietorships grow in commercial volume, converting into a Private Limited Company provides limited personal liability, enhanced supplier credibility, and the legal ability to raise outside equity investment. The transition is typically structured through a business transfer agreement taking over ongoing assets and liabilities.',
    whoNeedsThis: [
      'Proprietors scaling turnover and seeking personal asset liability protection',
      'Established traders looking to onboard co-founders or equity partners',
    ],
    whatHappensNext: [
      {
        step: 1,
        title: 'Financial Position Scrutiny',
        description: 'Review existing assets, liabilities, bank facilities, and registered licences of the proprietorship.',
      },
      {
        step: 2,
        title: 'New Company Incorporation',
        description: 'Incorporate the new Private Limited entity with appropriate object clauses.',
      },
      {
        step: 3,
        title: 'Takeover Agreement & Asset Transfer',
        description: 'Draft and execute the business transfer agreement and transition operational accounts.',
      },
    ],
    documentGuidance:
      'Audited balance sheet of the proprietorship, PAN cards and KYC of proposed directors, registered office proof, and business transfer terms.',
    faqs: [
      {
        question: 'Can the existing proprietorship bank account be continued directly?',
        answer: 'No, a new corporate bank account must be opened in the name of the incorporated Private Limited entity.',
      },
    ],
    relatedServiceSlugs: ['private-limited-company', 'sole-proprietorship', 'partnership-to-private-limited'],
  },
  {
    id: 'conv-part-llp',
    title: 'Partnership to LLP',
    slug: 'partnership-to-llp',
    categorySlug: 'company-conversions',
    categoryTitle: 'Company Conversions',
    status: 'published',
    summary:
      'Statutory conversion of a traditional partnership firm into a Limited Liability Partnership under Schedule II of the LLP Act.',
    overview:
      'Traditional partnership firms expose partners to unlimited personal liability for firm obligations. Converting to an LLP under the Second Schedule of the Limited Liability Partnership Act vests the business with a distinct legal personality, protects partners from joint unlimited liability, and ensures perpetual succession.',
    whoNeedsThis: [
      'Partnership firms wishing to cap partner personal liability while retaining partnership tax characteristics',
      'Professional partnerships expanding client service offerings and multi-branch operations',
    ],
    whatHappensNext: [
      {
        step: 1,
        title: 'Eligibility & Partner Consent',
        description: 'Confirm that all existing partners consent and become partners in the converted LLP.',
      },
      {
        step: 2,
        title: 'LLP Name & Form 17 Filing',
        description: 'Apply for name reservation and file Form 17 along with FiLLiP incorporation forms.',
      },
      {
        step: 3,
        title: 'Certificate of Registration',
        description: 'Secure registration certificate from the MCA and formally notify the Registrar of Firms.',
      },
    ],
    documentGuidance:
      'Statement of assets and liabilities certified by a Chartered Accountant, clearance from tax authorities, and partner consent statements.',
    faqs: [
      {
        question: 'Must all partners of the firm join the new LLP upon conversion?',
        answer: 'Yes, under the statutory conversion provisions of Schedule II, all partners of the existing firm must become partners in the LLP.',
      },
    ],
    relatedServiceSlugs: ['limited-liability-partnership', 'partnership-firm', 'partnership-to-private-limited'],
  },
  {
    id: 'conv-part-pvt',
    title: 'Partnership to Private Limited Company',
    slug: 'partnership-to-private-limited',
    categorySlug: 'company-conversions',
    categoryTitle: 'Company Conversions',
    status: 'published',
    summary:
      'Transitioning a partnership firm into a corporate private limited entity under Part I of Chapter XXI of the Companies Act, 2013.',
    overview:
      'Partnership firms seeking corporate capital raising or limited liability can convert into a Private Limited Company through statutory provisions under Chapter XXI of the Companies Act. This statutory route allows the new company to inherit the operational history, contractual legacy, and assets of the firm seamlessly.',
    whoNeedsThis: [
      'Established partnerships preparing for private equity, venture funding, or institutional expansion',
      'Trading firms desiring formal corporate identity and equity-based compensation mechanisms',
    ],
    whatHappensNext: [
      {
        step: 1,
        title: 'Firm Registration & Newspaper Notice',
        description: 'Publish statutory notices in English and vernacular newspapers inviting objections.',
      },
      {
        step: 2,
        title: 'Form URC-1 Filing',
        description: 'Submit conversion petition (Form URC-1) with audited balance sheets and partner approvals.',
      },
      {
        step: 3,
        title: 'Incorporation Issuance',
        description: 'File SPICe+ incorporation package to secure Certificate of Incorporation.',
      },
    ],
    documentGuidance:
      'Audited statement of accounts of the firm, newspaper advertisement clippings, registered partnership deed, and partner consent declarations.',
    faqs: [
      {
        question: 'Does statutory conversion under Chapter XXI attract capital gains tax?',
        answer: 'If statutory requirements under the Income Tax Act (including shareholding ratios) are rigorously satisfied, the transfer may qualify for tax neutrality.',
      },
    ],
    relatedServiceSlugs: ['partnership-firm', 'private-limited-company', 'partnership-to-llp'],
  },
  {
    id: 'conv-opc-pvt',
    title: 'OPC to Private Limited Company',
    slug: 'opc-to-private-limited',
    categorySlug: 'company-conversions',
    categoryTitle: 'Company Conversions',
    status: 'published',
    summary:
      'Converting a One Person Company into a multi-member Private Limited Company upon adding co-founders or expanding capital.',
    overview:
      'When an individual entrepreneur running a One Person Company decides to onboard co-founders, introduce equity investors, or scale commercial operations beyond single-member confines, converting the OPC into a Private Limited Company is straightforward through shareholder resolutions and charter amendments.',
    whoNeedsThis: [
      'Solo founders onboarding initial executive partners with equity allocation',
      'OPCs preparing for external venture investment requiring multiple shareholders',
    ],
    whatHappensNext: [
      {
        step: 1,
        title: 'Member & Director Induction',
        description: 'Introduce at least one additional shareholder and director to fulfill corporate minimums.',
      },
      {
        step: 2,
        title: 'Resolution & Charter Modification',
        description: 'Pass special resolution to amend the MOA and AOA from an OPC to a Private Limited Company.',
      },
      {
        step: 3,
        title: 'Form INC-6 Filing',
        description: 'Submit electronic application for conversion on the MCA portal for registrar endorsement.',
      },
    ],
    documentGuidance:
      'Altered MOA/AOA, special resolution copy, KYC and consent of new director/member, and latest financial statement.',
    faqs: [
      {
        question: 'Can an OPC convert voluntarily at any time?',
        answer: 'Yes, current MCA regulations permit voluntary conversion without requiring mandatory turnover ceilings to be breached.',
      },
    ],
    relatedServiceSlugs: ['one-person-company', 'private-limited-company'],
  },
  {
    id: 'conv-llp-pvt',
    title: 'LLP to Private Limited Company',
    slug: 'llp-to-private-limited',
    categorySlug: 'company-conversions',
    categoryTitle: 'Company Conversions',
    status: 'published',
    summary:
      'Converting an active Limited Liability Partnership into a Private Limited Company under Section 366 of the Companies Act.',
    overview:
      'While LLPs offer high administrative simplicity, institutions and venture capital funds typically mandate a Private Limited Company structure to issue convertible preferred shares or equity stock options. Section 366 of the Companies Act allows LLPs with at least two partners to convert directly into a Private Limited Company.',
    whoNeedsThis: [
      'Technology or growth startups incorporated as LLPs seeking institutional venture funding',
      'LLP partners looking to roll out employee stock ownership programs (ESOPs)',
    ],
    whatHappensNext: [
      {
        step: 1,
        title: 'Partner Assent & Notice Publication',
        description: 'Secure unanimous consent of all partners and publish statutory notices in local newspapers.',
      },
      {
        step: 2,
        title: 'URC-1 & SPICe+ Filing',
        description: 'File conversion petition with ROC together with audited financial accounts of the LLP.',
      },
      {
        step: 3,
        title: 'Amended Corporate Identity',
        description: 'Obtain new Certificate of Incorporation and update banking, GST, and trade licences.',
      },
    ],
    documentGuidance:
      'Audited accounts of the LLP, newspaper notice clippings, partner consent affidavits, and proposed corporate MOA/AOA.',
    faqs: [
      {
        question: 'Does the LLP need to be dissolved separately?',
        answer: 'No, upon successful conversion and issuance of the company incorporation certificate, the LLP stands converted into the corporate entity.',
      },
    ],
    relatedServiceSlugs: ['limited-liability-partnership', 'private-limited-company'],
  },
  {
    id: 'conv-other',
    title: 'Other applicable business conversions',
    slug: 'other-business-conversions',
    categorySlug: 'company-conversions',
    categoryTitle: 'Company Conversions',
    status: 'published',
    summary:
      'Advisory and scoping for specialised corporate transitions including Section 8 non-profits and private-to-public migrations.',
    overview:
      'Organisational evolution occasionally calls for unconventional business conversions—such as transforming a private company into a public limited entity, migrating between limited and unlimited liabilities, or reorganising trust foundations. We help founders assess statutory feasibility and procedural paths.',
    whoNeedsThis: [
      'Organisations evaluating custom entity transformations under the Companies Act',
      'Private entities preparing for wider shareholder structures or non-profit conversions',
    ],
    whatHappensNext: [
      {
        step: 1,
        title: 'Feasibility Review',
        description: 'Examine entity standing, regulatory restrictions, and applicable legal provisions.',
      },
      {
        step: 2,
        title: 'Procedural Roadmap Drafting',
        description: 'Prepare step-by-step statutory timelines, notices, and resolution schedules.',
      },
      {
        step: 3,
        title: 'Departmental Filings',
        description: 'Assist with portal submissions, regional director approvals, and master record alignments.',
      },
    ],
    documentGuidance:
      'Charter documents, audited financials, director KYC, and board authorization deeds. Exact requirements depend on the target corporate form.',
    faqs: [
      {
        question: 'Are all corporate conversions permitted under law?',
        answer: 'No, each conversion must strictly conform to permissible statutory routes under the Companies Act and relevant regulatory frameworks.',
      },
    ],
    relatedServiceSlugs: ['public-limited-company', 'private-limited-company', 'business-structure-changes'],
  },
];

// Helper functions for easy querying
export function getCategoryBySlug(slug: string): ServiceCategory | undefined {
  return serviceCategories.find((cat) => cat.slug === slug);
}

export function getServicesByCategory(categorySlug: string): ServiceItem[] {
  return candidateServices.filter(
    (svc) => svc.categorySlug === categorySlug && svc.status !== 'draft'
  );
}

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return candidateServices.find((svc) => svc.slug === slug && svc.status !== 'draft');
}

export function getFeaturedServices(): ServiceItem[] {
  return candidateServices.filter((svc) => svc.isFeatured && svc.status !== 'draft');
}

export function getAllPublishedServices(): ServiceItem[] {
  return candidateServices.filter((svc) => svc.status !== 'draft');
}
