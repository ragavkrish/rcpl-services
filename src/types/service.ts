export type PublicationStatus = 'published' | 'approved' | 'draft';

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  categorySlug: string;
  categoryTitle: string;
  status: PublicationStatus;
  isFeatured?: boolean;
  summary: string;
  overview: string;
  whoNeedsThis: string[];
  whatHappensNext: ServiceProcessStep[];
  documentGuidance: string;
  faqs: ServiceFAQ[];
  relatedServiceSlugs: string[];
}

export interface ServiceCategory {
  id: string;
  number: string;
  title: string;
  slug: string;
  shortDescription: string;
  editorialIntro: string;
  status: PublicationStatus;
  serviceCountCandidate: number;
}

export interface EnquiryData {
  fullName: string;
  contactNumber: string;
  service: string;
  message?: string;
}
