"use client";

import React, { useState, useEffect } from "react";
import { soundFX } from "../lib/soundEffects";
import { Envelope3D } from "./Envelope3D";

interface OpeningExperienceProps {
  onStartJourney: () => void;
}

export const OpeningExperience: React.FC<OpeningExperienceProps> = ({
  onStartJourney,
}) => {
  const [step, setStep] = useState<"intro" | "ready" | "pushing" | "welcome">("intro");
  const [envelopeOpen, setEnvelopeOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStep("ready");
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const handleOpenEnvelope = () => {
    if (step !== "ready") return;

    soundFX.startAmbientBGM();
    soundFX.playWaxSealCrack();
    soundFX.playPaperUnfold();

    setStep("pushing");
    setEnvelopeOpen(true);

    setTimeout(() => {
      setStep("welcome");
      soundFX.playHarpArpeggio();
    }, 1000);

    setTimeout(() => {
      onStartJourney();
    }, 3200);
  };

  return (
    <div className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 py-8">
      {/* Main Content Showcase (Regal & Editorial Refined Luxury) */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto space-y-6">
        {/* Title Header */}
        <div className="space-y-3">
          

          <p className="font-editorial-meta text-xs tracking-[0.18em] text-rose-200/80">
            Dedicated Exclusively to
          </p>

          <h1 className="font-editorial-heading text-4xl sm:text-6xl md:text-7xl font-normal text-amber-100 tracking-normal drop-shadow-sm">
            Doctor Aisha Sahiba
          </h1>

          <p className="font-editorial-subtext text-xl sm:text-2xl md:text-3xl text-rose-100/90 italic pt-1">
            {step === "welcome" ? (
              <span className="text-amber-300 font-editorial-heading font-medium text-2xl sm:text-3xl">
                “Welcome, Princess Aisha 👑”
              </span>
            ) : (
              <span>“A Birthday Surprise Awaits You…”</span>
            )}
          </p>
        </div>

        {/* Centerpiece: Handcrafted 3D Envelope */}
        <div className="py-2">
          <Envelope3D
            stageNumber="PROLOGUE"
            recipientText="Doctor Aisha Sahiba"
            sealSymbol="👑"
            stampText="BIRTHDAY EVE"
            baseColor="bg-[#1f102c]"
            isOpen={envelopeOpen}
            onOpen={handleOpenEnvelope}
            isClickable={step === "ready"}
            size="lg"
          />
        </div>

        {/* Action Button & Status */}
        <div className="min-h-14 flex items-center justify-center">
          {step === "intro" && (
            <p className="font-editorial-subtext text-base text-amber-200/60 italic tracking-wider">
              Preparing your royal envelopes...
            </p>
          )}

          {step === "ready" && (
            <button
              onClick={handleOpenEnvelope}
              className="px-8 py-3.5 rounded-full bg-amber-500 hover:bg-amber-400 active:scale-98 text-zinc-950 font-editorial-meta font-bold text-xs sm:text-sm tracking-[0.18em] uppercase transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer shadow-lg"
            >
              <span>✨</span>
              <span>Tap to Open Envelope</span>
              <span>👑</span>
            </button>
          )}

          {step === "pushing" && (
            <p className="font-editorial-subtext text-lg text-amber-200 italic tracking-wide">
              Breaking the royal seal...
            </p>
          )}

          {step === "welcome" && (
            <p className="font-editorial-subtext text-xl text-amber-300 italic">
              Entering Envelope 01: Pink Tulip Garden...
            </p>
          )}
        </div>

        {/* Regal Editorial Tagline */}
        <div className="pt-4 text-[11px] font-editorial-meta text-rose-200/60 tracking-[0.18em]">
          15 Envelopes • 15 Surprises • One Birthday Princess
        </div>
      </div>
    </div>
  );
};
