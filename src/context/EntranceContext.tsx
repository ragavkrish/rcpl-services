import React, { createContext, useContext, useEffect, useState } from 'react';
import { normalizePath } from '../utils/paths';

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
    if (!isFirstVisit || entrancePhase === 'complete') return;

    // Phase 1 -> Phase 2: Wordmark reveal to Hero transition (~550ms)
    const t1 = setTimeout(() => {
      setEntrancePhase('hero_reveal');
    }, 600);

    // Phase 2 -> Complete: Finished transition and unmount curtain (~1200ms)
    const t2 = setTimeout(() => {
      setEntrancePhase('complete');
      try {
        sessionStorage.setItem('rcpl_entrance_seen', 'true');
      } catch {
        // Safe fallback
      }
    }, 1250);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [isFirstVisit, entrancePhase]);

  const replayEntrance = () => {
    try {
      sessionStorage.removeItem('rcpl_entrance_seen');
    } catch {
      // ignore
    }
    setIsFirstVisit(true);
    setEntrancePhase('wordmark');
    window.scrollTo({ top: 0, behavior: 'instant' });
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
