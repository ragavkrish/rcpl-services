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
        isDark ? 'divide-[#2A3B4D] border-y border-[#2A3B4D]' : 'divide-[#CCD3DA] border-y border-[#CCD3DA]'
      } ${className}`}
    >
      {items.map((item, idx) => {
        const isOpen = openIndices.includes(idx);
        const headerId = `faq-header-${idx}`;
        const panelId = `faq-panel-${idx}`;

        return (
          <div key={idx} className="py-5 transition-colors">
            <h3 className="text-base">
              <button
                type="button"
                id={headerId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(idx)}
                className={`w-full text-left flex items-start justify-between gap-4 transition-colors cursor-pointer group focus-visible:outline-hidden focus-visible:ring-1 ${
                  isDark
                    ? 'text-white hover:text-[#D4A368]'
                    : 'text-[#121B24] hover:text-[#152E4D]'
                }`}
              >
                <span className="font-display text-lg sm:text-[19px] font-bold leading-snug tracking-tight">
                  {item.question}
                </span>
                <span
                  className={`mt-1 shrink-0 w-6 h-6 flex items-center justify-center transition-transform duration-150 ${
                    isDark ? 'text-[#A5B4C4]' : 'text-[#6C7A89]'
                  } ${isOpen ? 'rotate-180 text-[#8C6534]' : ''}`}
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
              className={`mt-2.5 pr-8 text-sm leading-relaxed ${
                isDark ? 'text-[#CCD3DA]' : 'text-[#3A4754]'
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
