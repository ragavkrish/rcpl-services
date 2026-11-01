import React from 'react';
import { motion } from 'motion/react';
import { Link } from '../components/common/Link';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { getCategoryBySlug, getServicesByCategory, serviceCategories } from '../data/services';
import { useRouter } from '../context/RouterContext';
import { fadeInUp, viewportConfig } from '../utils/motion';
import { ArrowUpRight, MessageSquare, ShieldAlert, Check } from 'lucide-react';

interface CategoryPageProps {
  categorySlug: string;
}

export const CategoryPage: React.FC<CategoryPageProps> = ({ categorySlug }) => {
  const { openEnquiryModal } = useRouter();
  const category = getCategoryBySlug(categorySlug);
  const services = getServicesByCategory(categorySlug);

  if (!category) {
    return (
      <div className="max-w-[1320px] mx-auto px-4 py-20 text-center space-y-4">
        <h1 className="font-display text-3xl font-bold text-[#121B24]">
          Practice Domain Not Found
        </h1>
        <p className="text-sm text-[#556371]">
          The requested practice domain could not be identified in our statutory index.
        </p>
        <div className="pt-4">
          <Link
            to="/"
            className="px-6 py-2.5 bg-[#152E4D] text-white text-xs font-semibold uppercase tracking-wider transition-colors"
          >
            Return to Overview
          </Link>
        </div>
      </div>
    );
  }

  const otherCategories = serviceCategories.filter((c) => c.slug !== categorySlug);

  return (
    <div className="space-y-12 lg:space-y-16 py-8">
      {/* Header & Breadcrumbs */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6"
      >
        <Breadcrumbs
          items={[
            { label: 'Statutory Practices', to: '/#statutory-ledger' },
            { label: category.title },
          ]}
        />

        <div className="bg-[#121B24] text-white border border-slate-800 p-6 sm:p-8 lg:p-12 rounded-2xl relative shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-4">
              <div className="text-[11px] font-mono text-[#B28348] uppercase tracking-widest font-semibold">
                Domain {category.number} · Statutory Practice Catalogue
              </div>

              <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight break-words">
                {category.title}
              </h1>

              <p className="text-base sm:text-[17px] text-[#CCD3DA] leading-relaxed max-w-2xl font-normal">
                {category.editorialIntro}
              </p>
            </div>

            <div className="lg:col-span-4 bg-[#1B2937] border border-[#2D4055] p-6 space-y-4 rounded-xl shadow-md">
              <div className="flex items-center justify-between text-xs text-[#B28348] font-mono">
                <span>Advisory Desk</span>
                <span>{services.length} Scopes Documented</span>
              </div>
              <div className="space-y-1">
                <h2 className="font-display text-lg font-bold text-white">
                  Consult on {category.title}
                </h2>
                <p className="text-xs text-[#CCD3DA] leading-relaxed">
                  Review documentation checklists, government fee schedules, and estimated turnaround schedules directly with our senior corporate desk.
                </p>
              </div>
              <button
                type="button"
                onClick={() => openEnquiryModal(category.title)}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#25D366] hover:bg-[#20ba5a] text-[#121B24] font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer rounded-lg shadow-md"
              >
                <MessageSquare className="w-4 h-4 text-[#121B24] shrink-0" />
                <span className="truncate">Open WhatsApp Discussion</span>
              </button>
              <div className="pt-2 border-t border-[#2D4055] flex items-center justify-between text-[11px] text-[#A5B4C4]">
                <span>Direct partner review</span>
                <span>Zero upfront fee</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Services Ledger */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6"
      >
        <div className="pb-4 flex items-baseline justify-between border-b border-slate-200">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#B28348] font-semibold">
              Registry Scopes
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#121B24] mt-0.5">
              Available Practices in this Domain
            </h2>
          </div>
          <span className="text-xs text-slate-500 font-mono">
            {services.length} Documented Profiles
          </span>
        </div>

        <div className="border border-slate-200/80 bg-white divide-y divide-slate-100 rounded-xl overflow-hidden shadow-xs">
          {services.map((service, index) => (
            <article
              key={service.id}
              className="p-6 hover:bg-slate-50/60 transition-colors"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                {/* Index number */}
                <div className="md:col-span-1 hidden md:flex items-center">
                  <span className="font-mono text-xs font-bold text-[#B28348]">
                    {String(index + 1).padStart(2, '0')}.
                  </span>
                </div>

                {/* Main description */}
                <div className="md:col-span-8 space-y-2">
                  <h3 className="font-display text-xl font-bold text-[#121B24] hover:text-[#152E4D] transition-colors">
                    <Link to={`/services/${category.slug}/${service.slug}`}>
                      {service.title}
                    </Link>
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {service.summary}
                  </p>

                  {/* Typical candidate profiles */}
                  {service.whoNeedsThis && service.whoNeedsThis.length > 0 && (
                    <div className="pt-2 text-xs text-slate-500 space-y-1">
                      <p className="font-semibold text-slate-700">
                        Typical Application Context:
                      </p>
                      <ul className="space-y-1">
                        {service.whoNeedsThis.slice(0, 2).map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-[#25D366] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="md:col-span-3 flex flex-wrap items-center md:items-end justify-between md:justify-start gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => openEnquiryModal(service.title)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 min-h-[38px] bg-[#152E4D] hover:bg-[#0D1E33] text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer active:scale-95"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>Direct Enquiry</span>
                  </button>

                  <Link
                    to={`/services/${category.slug}/${service.slug}`}
                    className="text-xs font-semibold text-[#152E4D] hover:underline inline-flex items-center gap-1 min-h-[38px] py-1"
                  >
                    <span>Inspect Profile</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#8C6534]" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </motion.section>

      {/* Advisory & Scoping Note */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-4 text-xs text-slate-600">
          <ShieldAlert className="w-5 h-5 text-[#B28348] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h3 className="font-semibold text-[#121B24]">
              Statutory Scoping Notice
            </h3>
            <p className="leading-relaxed">
              Official registration timelines, state stamp duties, and requisite documentation criteria depend strictly on prevailing rules issued by the Ministry of Corporate Affairs, Trade Marks Registry, or relevant state authority. RCPL Services provides procedural drafting and electronic lodgement facilitation; official grants are executed under sovereign legal authority.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Other Categories Index */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 pt-4"
      >
        <div className="pb-3 border-b border-slate-200 mb-4">
          <h3 className="font-display text-xl font-bold text-[#121B24]">
            Other Statutory Practice Domains
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {otherCategories.map((c) => (
            <Link
              key={c.id}
              to={`/services/${c.slug}`}
              className="p-4 bg-white border border-slate-200/80 hover:border-[#152E4D] rounded-xl hover:shadow-xs transition-all flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between text-xs text-[#B28348] font-mono">
                <span>{c.number}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#152E4D]" />
              </div>
              <span className="font-display font-bold text-[#121B24] group-hover:text-[#152E4D] mt-2 text-sm leading-snug">
                {c.title}
              </span>
            </Link>
          ))}
        </div>
      </motion.section>
    </div>
  );
};
