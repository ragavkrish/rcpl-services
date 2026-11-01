import { type Variants, type Transition } from 'motion/react';

// Premium executive motion curves
export const premiumEase = [0.16, 1, 0.3, 1] as const;

export const transitionSmooth: Transition = {
  duration: 0.45,
  ease: premiumEase,
};

export const transitionFast: Transition = {
  duration: 0.2,
  ease: 'easeOut',
};

export const transitionSubtle: Transition = {
  duration: 0.65,
  ease: premiumEase,
};

// Subtle fade-and-lift section entrance
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitionSmooth,
  },
};

// Staggered list container
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

// Stagger child element
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.38,
      ease: premiumEase,
    },
  },
};

// Hero staggered text reveal
export const heroHeadlineVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: premiumEase,
      delay: 0.05,
    },
  },
};

export const heroTextVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: premiumEase,
      delay: 0.18,
    },
  },
};

export const heroCtaVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: premiumEase,
      delay: 0.28,
    },
  },
};

// Safe viewport trigger config (once: true prevents replay jumpiness when scrolling back and forth)
export const viewportConfig = {
  once: true,
  amount: 0.12,
} as const;
