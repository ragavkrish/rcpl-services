import React from 'react';
import { Link } from '../components/common/Link';
import { serviceCategories } from '../data/services';
import { ArrowRight, Compass } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center space-y-8">
      <div className="max-w-md mx-auto space-y-4">
        <div className="inline-flex p-3 bg-[#F6F7F5] border border-[#CCD3DA] text-[#8C6534]">
          <Compass className="w-6 h-6" />
        </div>
        <div className="text-[11px] font-mono font-semibold uppercase tracking-widest text-[#8C6534]">
          404 — Registry Docket Not Found
        </div>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-[#121B24] tracking-tight">
          The requested page could not be located.
        </h1>
        <p className="text-sm text-[#556371] leading-relaxed">
          The practice profile or document you are seeking may have been re-indexed or updated in our statutory catalogue.
        </p>

        <div className="pt-2">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#152E4D] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#0D1E33] transition-colors"
          >
            <span>Return to Overview</span>
            <ArrowRight className="w-4 h-4 text-[#B28348]" />
          </Link>
        </div>
      </div>

      <div className="pt-12 border-t border-[#CCD3DA] max-w-2xl mx-auto">
        <p className="text-[11px] font-mono uppercase tracking-widest text-[#6C7A89] mb-4 font-semibold">
          Explore Statutory Practices
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {serviceCategories.map((cat) => (
            <Link
              key={cat.id}
              to={`/services/${cat.slug}`}
              className="p-4 bg-white border border-[#CCD3DA] hover:border-[#152E4D] text-xs text-[#121B24] transition-colors text-left"
            >
              <span className="text-[10px] text-[#8C6534] font-mono block">{cat.number}</span>
              <span className="font-display font-bold mt-1 block text-sm">{cat.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
