"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import { QuestionStage } from "../lib/questionsData";
import { soundFX } from "../lib/soundEffects";
import { Envelope3D } from "./Envelope3D";

interface TransitionDirectorProps {
  currentStage: QuestionStage;
  nextStage: QuestionStage;
  onTransitionComplete: () => void;
}

export const TransitionDirector: React.FC<TransitionDirectorProps> = ({
  currentStage,
  nextStage,
  onTransitionComplete,
}) => {
  const [isOpening, setIsOpening] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(3);
  const hasTriggeredRef = useRef(false);

  const handleOpenNow = useCallback(() => {
    if (hasTriggeredRef.current) return;
    hasTriggeredRef.current = true;

    soundFX.playWaxSealCrack();
    soundFX.playPaperUnfold();
    setIsOpening(true);

    setTimeout(() => {
      soundFX.playHarpArpeggio();
    }, 300);

    setTimeout(() => {
      onTransitionComplete();
    }, 850);
  }, [onTransitionComplete]);

  useEffect(() => {
    soundFX.playPaperUnfold();

    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          handleOpenNow();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [handleOpenNow]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-between py-8 px-4 bg-[#0a0512]">
      {/* Top Section: Royal Dispatch Header */}
      <div className="w-full max-w-xl text-center space-y-2 pt-2">
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-[#190d29] px-4 py-1">
          <span className="text-amber-400 text-xs">✦</span>
          <span className="font-editorial-meta text-[11px] font-bold text-amber-200">
            ENVELOPE {nextStage.stageNumber} READY
          </span>
          <span className="text-amber-400 text-xs">✦</span>
        </div>

        <h2 className="font-editorial-heading text-3xl sm:text-4xl md:text-5xl font-normal text-amber-100">
          Next World: {nextStage.environmentName}
        </h2>

        <p className="font-editorial-subtext text-base sm:text-lg text-rose-200/80 italic">
          “{nextStage.environmentSubtitle}”
        </p>
      </div>

      {/* Center Section: The Handcrafted Next Envelope */}
      <div
        className={`relative my-auto transition-transform duration-500 transform-style-3d ${
          isOpening ? "scale-105 opacity-90 -translate-y-4" : "scale-100"
        }`}
      >
        <Envelope3D
          stageNumber={nextStage.stageNumber}
          recipientText="Doctor Aisha Sahiba"
          sealSymbol={nextStage.envelopeDesign.waxSealSymbol}
          stampText={nextStage.envelopeDesign.stampText}
          baseColor={nextStage.envelopeDesign.baseColor}
          isOpen={isOpening}
          onOpen={handleOpenNow}
          isClickable={!isOpening}
          size="lg"
        />
      </div>

      {/* Bottom Section: Royal Invitation & Action Button */}
      <div className="w-full max-w-md text-center space-y-4 pb-2">
        <p className="font-editorial-subtext text-base sm:text-lg text-amber-200/90 italic">
          Sahiba, aapka agla surprise is lifafe mein band hai... Kholiye! ✨
        </p>

        {/* Primary Action Button */}
        <button
          onClick={handleOpenNow}
          disabled={isOpening}
          className="w-full py-3.5 px-6 rounded-full bg-amber-500 hover:bg-amber-400 active:scale-98 text-zinc-950 font-editorial-meta font-bold text-xs sm:text-sm tracking-[0.18em] uppercase transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer shadow-lg disabled:opacity-75"
        >
          <span>✨</span>
          <span>
            {isOpening ? "Unsealing..." : `Break Wax Seal & Enter ${nextStage.stageNumber}`}
          </span>
          <span>➔</span>
        </button>

        {/* Milestone Indicator & Auto-open hint */}
        <div className="flex items-center justify-between font-editorial-meta text-[10px] text-amber-200/60 pt-1 px-2 border-t border-amber-400/15">
          <span>
            {currentStage.stageNumber} Complete ✓
          </span>
          <span>
            {isOpening ? "Opening now..." : `Auto-opening in ${secondsLeft}s`}
          </span>
        </div>
      </div>
    </div>
  );
};
