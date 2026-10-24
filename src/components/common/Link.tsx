import React from 'react';
import { useRouter } from '../../context/RouterContext';
import { normalizePath, toHref } from '../../utils/paths';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  className?: string;
  children: React.ReactNode;
  activeClassName?: string;
  exact?: boolean;
}

export const Link: React.FC<LinkProps> = ({
  to,
  className = '',
  activeClassName = '',
  exact = false,
  children,
  onClick,
  ...rest
}) => {
  const { currentPath, navigate } = useRouter();
  const internalTo = normalizePath(to);
  const browserHref = toHref(internalTo);

  const isActive = exact
    ? currentPath === internalTo
    : currentPath === internalTo || (internalTo !== '/' && currentPath.startsWith(internalTo));

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick(e);
    }
    // Respect browser shortcuts (cmd+click, ctrl+click, shift+click, middle click)
    if (
      !e.defaultPrevented &&
      e.button === 0 &&
      !e.metaKey &&
      !e.ctrlKey &&
      !e.altKey &&
      !e.shiftKey &&
      !rest.target
    ) {
      e.preventDefault();
      navigate(internalTo);
    }
  };

  const combinedClasses = `${className} ${isActive ? activeClassName : ''}`.trim();

  return (
    <a
      href={browserHref}
      onClick={handleClick}
      className={combinedClasses}
      aria-current={isActive ? 'page' : undefined}
      {...rest}
    >
      {children}
    </a>
  );
};
