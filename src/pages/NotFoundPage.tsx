import React from 'react';
import { Link } from '../components/common/Link';
import { serviceCategories } from '../data/services';
import { ArrowRight, Compass } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center space-y-8">
      <div className="max-w-md mx-auto space-y-4">
        <div className="inline-flex p-3.5 bg-[#111714] border border-[#20483A] rounded-[4px] text-[#C5A46D]">
          <Compass className="w-8 h-8" />
        </div>
        <div className="font-mono text-xs uppercase tracking-wider text-[#C5A46D]">
          404 — Location Not Found
        </div>
        <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-[#111714] tracking-tight">
          The requested document could not be located.
        </h1>
        <p className="text-sm text-[#52616B] leading-relaxed">
          The page or service profile you are looking for may have been updated or moved in our candidate catalogue.
        </p>

        <div className="pt-2">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#111714] text-white text-xs font-display font-semibold uppercase tracking-wider rounded-[3px] hover:bg-[#20483A] transition-colors"
          >
            <span>Return to Homepage</span>
            <ArrowRight className="w-4 h-4 text-[#C5A46D]" />
          </Link>
        </div>
      </div>

      <div className="pt-14 border-t border-[#D8DDD7] max-w-2xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-wider text-[#A6ADA7] mb-4">
          Explore Practice Domains
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {serviceCategories.map((cat) => (
            <Link
              key={cat.id}
              to={`/services/${cat.slug}`}
              className="p-3.5 bg-white border border-[#D8DDD7] hover:border-[#20483A] text-xs text-[#111714] rounded-[3px] transition-colors text-left"
            >
              <span className="font-mono text-[10px] text-[#C5A46D] block">{cat.number}</span>
              <span className="font-display font-bold mt-1 block">{cat.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
