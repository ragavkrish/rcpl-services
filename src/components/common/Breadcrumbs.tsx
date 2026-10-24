import React from 'react';
import { Link } from './Link';
import { ChevronRight } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
  theme?: 'light' | 'dark';
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  className = '',
  theme = 'light',
}) => {
  const isDark = theme === 'dark';

  return (
    <nav
      aria-label="Breadcrumb"
      className={`text-xs ${isDark ? 'text-[#A6ADA7]' : 'text-[#52616B]'} ${className}`}
    >
      <ol className="flex flex-wrap items-center gap-1.5 sm:gap-2">
        <li>
          <Link
            to="/"
            className={`transition-colors ${
              isDark ? 'hover:text-[#FFFFFF]' : 'hover:text-[#111714]'
            }`}
          >
            Home
          </Link>
        </li>
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <React.Fragment key={idx}>
              <li aria-hidden="true" className={isDark ? 'text-[#20483A]' : 'text-[#D8DDD7]'}>
                <ChevronRight className="w-3.5 h-3.5" />
              </li>
              <li>
                {item.to && !isLast ? (
                  <Link
                    to={item.to}
                    className={`transition-colors ${
                      isDark ? 'hover:text-[#FFFFFF]' : 'hover:text-[#111714]'
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    className={`font-medium ${
                      isDark ? 'text-[#C5A46D]' : 'text-[#111714]'
                    }`}
                    aria-current={isLast ? 'page' : undefined}
                  >
                    {item.label}
                  </span>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};
