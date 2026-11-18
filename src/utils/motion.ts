import { type Variants, type Transition } from 'motion/react';

// Premium executive motion curves
export const premiumEase = [0.16, 1, 0.3, 1] as const;

export const transitionSmooth: Transition = {
  duration: 0.34,
  ease: premiumEase,
};

export const transitionFast: Transition = {
  duration: 0.18,
  ease: 'easeOut',
};

export const transitionSubtle: Transition = {
  duration: 0.45,
  ease: premiumEase,
};

// Subtle fade-and-lift section entrance (low travel prevents mobile jumpiness)
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 10 },
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
      staggerChildren: 0.045,
      delayChildren: 0.02,
    },
  },
};

// Stagger child element
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.26,
      ease: premiumEase,
    },
  },
};

// Hero staggered text reveal (immediate on load for first-screen readiness)
export const heroHeadlineVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.38,
      ease: premiumEase,
      delay: 0.02,
    },
  },
};

export const heroTextVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: premiumEase,
      delay: 0.08,
    },
  },
};

export const heroSubtextVariants = heroTextVariants;

export const heroCtaVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.32,
      ease: premiumEase,
      delay: 0.14,
    },
  },
};

// Safe viewport trigger config (low amount ensures tall mobile sections trigger immediately)
export const viewportConfig = {
  once: true,
  amount: 0.04,
} as const;
