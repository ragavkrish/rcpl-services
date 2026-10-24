import React from 'react';
import { Link } from '../components/common/Link';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { getCategoryBySlug, getServicesByCategory, serviceCategories } from '../data/services';
import { useRouter } from '../context/RouterContext';
import { ArrowRight, ArrowUpRight, MessageSquare, ShieldAlert } from 'lucide-react';

interface CategoryPageProps {
  categorySlug: string;
}

export const CategoryPage: React.FC<CategoryPageProps> = ({ categorySlug }) => {
  const { openEnquiryModal } = useRouter();
  const category = getCategoryBySlug(categorySlug);
  const services = getServicesByCategory(categorySlug);

  if (!category) {
    return (
      <div className="max-w-[1280px] mx-auto px-4 py-20 text-center space-y-4">
        <h1 className="font-display text-3xl font-bold text-[#111714]">
          Service Domain Not Found
        </h1>
        <p className="text-sm text-[#52616B]">
          The requested practice domain could not be identified in our catalogue.
        </p>
        <div className="pt-4">
          <Link
            to="/"
            className="px-8 py-3 bg-[#111714] text-white text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-[#20483A] transition-colors"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    );
  }

  const otherCategories = serviceCategories.filter((c) => c.slug !== categorySlug);

  return (
    <div className="space-y-16 lg:space-y-24 py-8">
      {/* Header & Breadcrumbs (Hero section for Category) */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <Breadcrumbs
          items={[
            { label: 'Services', to: '/#intent-discovery' },
            { label: category.title },
          ]}
        />

        <div className="bg-[#111714] text-[#FFFFFF] rounded-tl-[36px] rounded-br-[36px] sm:rounded-tl-[48px] sm:rounded-br-[48px] border border-[#20483A] p-8 sm:p-12 relative overflow-hidden shadow-xl">
          {/* Ambient background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#20483A]/30 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-[#C5A46D] uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A46D]" />
                <span>Domain {category.number}</span>
                <span className="text-[#A6ADA7]">/</span>
                <span>Candidate Practice Area</span>
              </div>

              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FFFFFF] tracking-tight text-balance">
                {category.title}
              </h1>

              <p className="text-base sm:text-lg text-[#A6ADA7] leading-relaxed max-w-2xl font-light">
                {category.editorialIntro}
              </p>
            </div>

            <div className="lg:col-span-4 bg-[#163329]/60 p-6 sm:p-7 rounded-[24px] border border-[#C5A46D]/30 space-y-4 shadow-xl">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-[#C5A46D] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A46D] animate-pulse" />
                  Direct Advisory Desk
                </span>
                <span className="font-mono text-xs text-[#A6ADA7]">{services.length} Services</span>
              </div>
              <div className="space-y-1">
                <h2 className="font-display text-base font-bold text-white">
                  Enquire About {category.title}
                </h2>
                <p className="text-xs text-[#A6ADA7] leading-relaxed">
                  Discuss documentation checklists, government fee schedules, and candidate service scopes directly on WhatsApp.
                </p>
              </div>
              <button
                type="button"
                onClick={() => openEnquiryModal(category.title)}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 bg-[#20483A] hover:bg-[#2A5C4A] border border-[#C5A46D] text-white font-display text-xs font-semibold uppercase tracking-wider rounded-full transition-all cursor-pointer shadow-[0_0_20px_-3px_rgba(197,164,109,0.35)] active:scale-[0.98]"
              >
                <MessageSquare className="w-4 h-4 text-[#C5A46D] shrink-0" />
                <span className="truncate">Discuss This Domain on WhatsApp</span>
              </button>
              <div className="pt-2 border-t border-[#20483A]/80 flex items-center justify-between text-[11px] text-[#A6ADA7]">
                <span>✓ Direct desk reply</span>
                <span>✓ Zero upfront fee</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services List in this Domain (Open Typographic Rows) */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pb-6 flex items-center justify-between border-b border-[#D8DDD7]">
          <h2 className="font-display text-2xl font-bold text-[#111714]">
            Candidate Services in this Domain
          </h2>
          <span className="font-mono text-xs text-[#52616B]">
            {services.length} Practice Profiles
          </span>
        </div>

        <div className="divide-y divide-[#D8DDD7] border-b border-[#D8DDD7]">
          {services.map((service, index) => (
            <article
              key={service.id}
              className="py-8 group hover:bg-[#FFFFFF] transition-colors px-4 -mx-4 rounded-[12px]"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                {/* Circular Index number Node */}
                <div className="md:col-span-1 hidden md:flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full border border-[#D8DDD7] bg-[#F5F2E9] text-[#8C6D39] font-mono text-xs font-bold flex items-center justify-center group-hover:border-[#20483A] group-hover:text-[#20483A] transition-colors">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>

                {/* Main description */}
                <div className="md:col-span-8 space-y-3">
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#111714] group-hover:text-[#20483A] transition-colors leading-snug">
                    <Link to={`/services/${category.slug}/${service.slug}`}>
                      {service.title}
                    </Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-[#52616B] leading-relaxed">
                    {service.summary}
                  </p>

                  {/* Typical candidate profiles */}
                  {service.whoNeedsThis && service.whoNeedsThis.length > 0 && (
                    <div className="pt-2">
                      <p className="text-[11px] font-mono uppercase tracking-wider text-[#111714] mb-1">
                        Relevant for:
                      </p>
                      <ul className="text-xs text-[#52616B] list-disc list-inside space-y-0.5">
                        {service.whoNeedsThis.slice(0, 2).map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Actions: Circular Directional Control + Minimal Text Link */}
                <div className="md:col-span-3 flex flex-row md:flex-col items-center md:items-end justify-between gap-3 pt-2">
                  <Link
                    to={`/services/${category.slug}/${service.slug}`}
                    aria-label={`View profile for ${service.title}`}
                    className="w-11 h-11 rounded-full border border-[#D8DDD7] group-hover:border-[#20483A] group-hover:bg-[#20483A] group-hover:text-white flex items-center justify-center text-[#52616B] transition-all shadow-xs"
                  >
                    <ArrowUpRight className="w-4 h-4 text-[#C5A46D] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>

                  <button
                    type="button"
                    onClick={() => openEnquiryModal(service.title)}
                    className="text-xs font-semibold text-[#20483A] relative py-0.5 hover:text-[#111714] transition-colors cursor-pointer after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C5A46D] hover:after:w-full after:transition-all after:duration-200"
                  >
                    Direct Enquiry
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Advisory & Scoping Note */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 bg-white border border-[#D8DDD7] rounded-[20px] flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-[#20483A]/10 text-[#20483A] flex items-center justify-center shrink-0 mt-0.5">
            <ShieldAlert className="w-5 h-5 text-[#C5A46D]" />
          </div>
          <div className="space-y-1">
            <h3 className="font-display text-sm font-bold text-[#111714]">
              Advisory Scoping Prerequisite
            </h3>
            <p className="text-xs text-[#52616B] leading-relaxed">
              Statutory government timelines, registration fees, and regulatory criteria depend on current departmental rules and applicant documentation. RCPL Services provides procedural facilitation; official grants are issued under sovereign authority by the respective regulatory bodies.
            </p>
          </div>
        </div>
      </section>

      {/* Other Categories Index */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <h3 className="font-display text-xl font-bold text-[#111714] mb-4">
          Explore Other Practice Domains
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {otherCategories.map((c) => (
            <Link
              key={c.id}
              to={`/services/${c.slug}`}
              className="p-5 bg-[#FFFFFF] border border-[#D8DDD7] hover:border-[#20483A] rounded-[16px] text-xs transition-all flex flex-col justify-between group hover:shadow-xs"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-[#C5A46D] font-semibold">{c.number}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#A6ADA7] group-hover:text-[#20483A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
              <span className="font-display font-bold text-[#111714] group-hover:text-[#20483A] mt-3">
                {c.title}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};
