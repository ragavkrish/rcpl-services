import React, { createContext, useContext, useEffect, useState } from 'react';

type EntrancePhase = 'wordmark' | 'hero_reveal' | 'complete';

interface EntranceContextType {
  entrancePhase: EntrancePhase;
  isFirstVisit: boolean;
  replayEntrance: () => void;
}

const EntranceContext = createContext<EntranceContextType>({
  entrancePhase: 'complete',
  isFirstVisit: false,
  replayEntrance: () => {},
});

export const EntranceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isFirstVisit, setIsFirstVisit] = useState<boolean>(false);
  const [entrancePhase, setEntrancePhase] = useState<EntrancePhase>('complete');

  useEffect(() => {
    // Check user preference for reduced motion
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setEntrancePhase('complete');
      setIsFirstVisit(false);
      return;
    }

    if (!isFirstVisit || entrancePhase === 'complete') return;

    // Phase 1 -> Phase 2: Wordmark reveal to Hero transition (~550ms)
    const t1 = window.setTimeout(() => {
      setEntrancePhase('hero_reveal');
    }, 600);

    // Phase 2 -> Complete: Finished transition and unmount curtain (~1200ms)
    const t2 = window.setTimeout(() => {
      setEntrancePhase('complete');
      try {
        if (typeof window !== 'undefined' && window.sessionStorage) {
          sessionStorage.setItem('rcpl_entrance_seen', 'true');
        }
      } catch {
        // Safe fallback in sandboxed iframes
      }
    }, 1250);

    // Fail-safe watchdog: force complete after 2000ms regardless of any timer glitches
    const watchdog = window.setTimeout(() => {
      setEntrancePhase('complete');
    }, 2000);

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.clearTimeout(watchdog);
    };
  }, [isFirstVisit, entrancePhase]);

  const replayEntrance = () => {
    // Check reduced motion
    if (
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    try {
      if (typeof window !== 'undefined' && window.sessionStorage) {
        sessionStorage.removeItem('rcpl_entrance_seen');
      }
    } catch {
      // Safe fallback
    }
    setIsFirstVisit(true);
    setEntrancePhase('wordmark');
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  return (
    <EntranceContext.Provider value={{ entrancePhase, isFirstVisit, replayEntrance }}>
      {children}
    </EntranceContext.Provider>
  );
};

export function useEntrance() {
  return useContext(EntranceContext);
}
