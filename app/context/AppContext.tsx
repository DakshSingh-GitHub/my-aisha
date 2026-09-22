"use client";

import React, { createContext, useContext, useState } from "react";
import { soundFX } from "../../lib/soundEffects";

interface AppContextType {
  unlockedStageIndex: number;
  unlockStage: (stageIndex: number) => void;
  isAudioMuted: boolean;
  toggleAudio: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [unlockedStageIndex, setUnlockedStageIndex] = useState<number>(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem("aisha_bday_unlocked");
        if (saved) {
          const val = parseInt(saved, 10);
          if (!isNaN(val) && val >= 0) {
            return val;
          }
        }
      } catch {
        // LocalStorage access safety
      }
    }
    return 0;
  });

  const [isAudioMuted, setIsAudioMuted] = useState<boolean>(false);

  const unlockStage = (stageIndex: number) => {
    setUnlockedStageIndex((prev) => {
      const next = Math.max(prev, stageIndex);
      try {
        localStorage.setItem("aisha_bday_unlocked", next.toString());
      } catch {
        // Storage safety
      }
      return next;
    });
  };

  const toggleAudio = () => {
    const muted = soundFX.toggleMute();
    setIsAudioMuted(muted);
  };

  return (
    <AppContext.Provider
      value={{
        unlockedStageIndex,
        unlockStage,
        isAudioMuted,
        toggleAudio,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};

