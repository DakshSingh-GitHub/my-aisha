"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { QUESTIONS_DATA } from "../lib/questionsData";
import { soundFX } from "../lib/soundEffects";
import { useApp } from "../app/context/AppContext";

interface CrownProgressionBarProps {
  currentStageIndex: number;
}

export const CrownProgressionBar: React.FC<CrownProgressionBarProps> = ({
  currentStageIndex,
}) => {
  const router = useRouter();
  const { unlockedStageIndex, isAudioMuted, toggleAudio } = useApp();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const currentStage = QUESTIONS_DATA[currentStageIndex] || QUESTIONS_DATA[0];
  const progressPercent = Math.round(((currentStageIndex + 1) / QUESTIONS_DATA.length) * 100);

  const handleStageClick = (idx: number) => {
    if (idx <= unlockedStageIndex) {
      soundFX.playPaperUnfold();
      setDrawerOpen(false);
      router.push(`/questions/q${idx + 1}`);
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-amber-400/20 bg-[#0e0717] px-4 py-2.5 sm:px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-3">
          {/* Left: Royal Crest & Name */}
          <div
            onClick={() => router.push("/")}
            className="flex items-center space-x-2.5 cursor-pointer select-none"
          >
            <div className="relative flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full overflow-hidden border border-amber-400/60 bg-[#261338] shadow-sm">
              <Image
                src="/aisha_avatar.jpeg"
                alt="Doctor Aisha Sahiba"
                width={40}
                height={40}
                priority
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div>
              <h1 className="font-editorial-heading text-base sm:text-lg font-medium tracking-wide text-amber-200 leading-none">
                Doctor Aisha Sahiba
              </h1>
              <span className="text-xs font-editorial-subtext italic text-pink-300 tracking-wide">
                Birthday Princess 👑
              </span>
            </div>
          </div>

          {/* Center: Crown Progression & Stage Counter */}
          <div className="hidden md:flex flex-col items-center">
            <div className="flex items-center space-x-2 text-xs text-amber-200">
              <span className="font-editorial-meta text-[11px] text-amber-300 font-semibold">
                {currentStage.stageNumber}
              </span>
              <span className="text-white/40">•</span>
              <span className="font-editorial-subtext text-xs italic tracking-wide text-rose-100">
                {currentStage.environmentName}
              </span>
              <span className="text-white/40">•</span>
              <span className="font-mono text-sm tracking-wider text-amber-300">
                {currentStage.crownProgression}
              </span>
            </div>

            {/* Clean Progress Bar */}
            <div className="w-48 h-1 bg-white/10 rounded-full mt-1.5 overflow-hidden">
              <div
                className="h-full bg-amber-400 transition-all duration-500 ease-out"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center space-x-2">
            {/* Audio Toggle */}
            <button
              onClick={toggleAudio}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md border text-xs font-medium transition-colors cursor-pointer ${
                !isAudioMuted
                  ? "bg-amber-400/15 border-amber-400/50 text-amber-200"
                  : "bg-white/5 border-white/10 text-white/50 hover:text-white"
              }`}
              title={isAudioMuted ? "Unmute Music" : "Mute Music"}
              aria-label="Toggle Audio"
            >
              <span>{isAudioMuted ? "🔇" : "🎵"}</span>
              <span className="hidden sm:inline font-editorial-meta text-[10px]">
                {isAudioMuted ? "Muted" : "Palace Music"}
              </span>
            </button>

            {/* Envelopes Drawer Button */}
            <button
              onClick={() => {
                soundFX.playChime(600);
                setDrawerOpen(!drawerOpen);
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-amber-400/30 bg-[#1e1030] hover:border-amber-400 text-amber-200 text-xs font-medium transition-colors cursor-pointer"
            >
              <span>💌</span>
              <span className="font-editorial-meta text-[10px]">{currentStage.stageNumber}</span>
              <span className="hidden sm:inline font-editorial-meta text-[10px]">Envelopes</span>
            </button>
          </div>
        </div>

        {/* Mobile Mini Progress Bar */}
        <div className="md:hidden w-full h-1 bg-white/10 rounded-full mt-2 overflow-hidden">
          <div
            className="h-full bg-amber-400 transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </header>

      {/* Slide-out Envelope Collection Drawer */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex justify-end">
          <div className="relative w-full max-w-md h-full bg-[#13081f] border-l border-amber-400/30 p-6 overflow-y-auto flex flex-col justify-between shadow-2xl">
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div className="flex items-center gap-3">
                  <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full overflow-hidden border border-amber-400/60 bg-[#261338] shadow-sm">
                    <Image
                      src="/aisha_avatar.jpeg"
                      alt="Doctor Aisha Sahiba"
                      width={44}
                      height={44}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div>
                    <h3 className="font-editorial-heading text-lg sm:text-xl font-medium text-amber-200">
                      The 15 Royal Envelopes
                    </h3>
                    <p className="text-xs text-rose-200/70 font-editorial-subtext italic">
                      15 Routes for One Birthday Princess
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setDrawerOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 cursor-pointer"
                >
                  ✕
                </button>
              </div>

              {/* 15 Envelopes Grid */}
              <div className="grid grid-cols-3 sm:grid-cols-3 gap-3">
                {QUESTIONS_DATA.map((q, idx) => {
                  const isCurrent = idx === currentStageIndex;
                  const isUnlocked = idx <= unlockedStageIndex;

                  return (
                    <button
                      key={q.id}
                      disabled={!isUnlocked}
                      onClick={() => handleStageClick(idx)}
                      className={`relative flex flex-col items-center justify-center p-3 rounded-xl border transition-colors cursor-pointer ${
                        isCurrent
                          ? "bg-amber-400/20 border-amber-400"
                          : isUnlocked
                          ? "bg-[#201233] border-amber-400/30 hover:border-amber-400"
                          : "bg-white/2 border-white/5 opacity-30 cursor-not-allowed"
                      }`}
                    >
                      <span className="text-2xl mb-1">
                        {isUnlocked ? q.envelopeDesign.waxSealSymbol : "🔒"}
                      </span>
                      <span className="font-editorial-meta text-[10px] text-amber-200">
                        {q.stageNumber}
                      </span>
                      <span className="text-[10px] font-editorial-subtext italic text-center truncate max-w-full text-rose-100/70 mt-0.5">
                        {q.environmentName.split(" ")[0]}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bottom Status */}
            <div className="pt-6 border-t border-white/10 text-center space-y-3">
              <div>
                <p className="text-xs font-editorial-meta text-amber-200 mb-0.5">
                  Unlocked: {unlockedStageIndex + 1} of 15 Envelopes
                </p>
                <p className="text-[11px] text-white/50 font-mono">
                  Crown Level: {QUESTIONS_DATA[unlockedStageIndex]?.crownProgression || "👑"}
                </p>
              </div>

              {unlockedStageIndex >= 14 && (
                <button
                  onClick={() => {
                    setDrawerOpen(false);
                    router.push("/finale");
                  }}
                  className="w-full py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs font-editorial-meta tracking-[0.18em] uppercase transition-colors cursor-pointer"
                >
                  Visit The Grand Finale 👑✨
                </button>
              )}

              <button
                onClick={() => {
                  setDrawerOpen(false);
                  router.push("/gallery");
                }}
                className="w-full py-2.5 rounded-lg bg-[#241238] hover:bg-amber-500 hover:text-zinc-950 border border-amber-400/40 text-amber-200 font-bold text-xs font-editorial-meta tracking-[0.18em] uppercase transition-colors cursor-pointer"
              >
                All 15 Envelopes at a Glance 💌
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
