import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface AccordionItem {
  id?: string;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
  allowMultiple?: boolean;
  theme?: 'light' | 'dark';
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  className = '',
  allowMultiple = false,
  theme = 'light',
}) => {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggle = (idx: number) => {
    if (allowMultiple) {
      if (openIndices.includes(idx)) {
        setOpenIndices(openIndices.filter((i) => i !== idx));
      } else {
        setOpenIndices([...openIndices, idx]);
      }
    } else {
      setOpenIndices(openIndices.includes(idx) ? [] : [idx]);
    }
  };

  const isDark = theme === 'dark';

  return (
    <div
      className={`divide-y ${
        isDark ? 'divide-[#20483A]/60 border-y border-[#20483A]/60' : 'divide-[#D8DDD7] border-y border-[#D8DDD7]'
      } ${className}`}
    >
      {items.map((item, idx) => {
        const isOpen = openIndices.includes(idx);
        const headerId = `faq-header-${idx}`;
        const panelId = `faq-panel-${idx}`;

        return (
          <div key={idx} className="py-5 transition-colors">
            <h3 className="text-base font-medium">
              <button
                type="button"
                id={headerId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(idx)}
                className={`w-full text-left flex items-start justify-between gap-4 transition-colors cursor-pointer group focus-visible:outline-hidden focus-visible:ring-2 ${
                  isDark
                    ? 'text-[#FFFFFF] hover:text-[#C5A46D] focus-visible:ring-[#C5A46D]'
                    : 'text-[#111714] hover:text-[#20483A] focus-visible:ring-[#20483A]'
                }`}
              >
                <span className="font-display text-lg sm:text-xl font-semibold leading-snug tracking-tight">
                  {item.question}
                </span>
                <span
                  className={`mt-0.5 shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-200 ${
                    isDark
                      ? 'border-[#20483A] text-[#A6ADA7] group-hover:text-[#C5A46D] group-hover:border-[#C5A46D] group-hover:bg-[#20483A]/40'
                      : 'border-[#D8DDD7] text-[#52616B] group-hover:text-[#20483A] group-hover:border-[#20483A] group-hover:bg-[#F5F2E9]'
                  } ${isOpen ? 'rotate-180 border-[#C5A46D] text-[#C5A46D]' : ''}`}
                >
                  <ChevronDown className="w-4 h-4" />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={headerId}
              hidden={!isOpen}
              className={`mt-3 pr-8 text-sm leading-relaxed ${
                isDark ? 'text-[#A6ADA7]' : 'text-[#52616B]'
              } ${isOpen ? 'block' : 'hidden'}`}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
