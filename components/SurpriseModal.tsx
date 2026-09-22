"use client";

import React from "react";
import { QuestionStage } from "../lib/questionsData";

interface SurpriseModalProps {
  stage: QuestionStage;
  onProceedToNextEnvelope: () => void;
  isLastStage?: boolean;
}

export const SurpriseModal: React.FC<SurpriseModalProps> = ({
  stage,
  onProceedToNextEnvelope,
  isLastStage = false,
}) => {
  const { surprise } = stage;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
      {/* Surprise Card */}
      <div className="relative w-full max-w-lg luxury-card-elevated rounded-3xl p-6 sm:p-8 text-center border border-amber-400/40 shadow-2xl">
        {/* Surprise Icon Showcase */}
        <div className="flex justify-center mb-4">
          <div className="relative flex items-center justify-center w-20 h-20 rounded-2xl bg-[#2a1740] border border-amber-400/30">
            <span className="text-4xl select-none">{surprise.icon}</span>
            <div className="absolute -top-1.5 -right-1.5 bg-amber-400 text-zinc-950 rounded-full px-2 py-0.5 font-editorial-meta text-[9px] font-bold tracking-[0.18em] shadow">
              UNLOCKED
            </div>
          </div>
        </div>

        {/* Stage Badge */}
        <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-400/10 px-3 py-0.5 border border-amber-400/30 mb-2">
          <span>👑</span>
          <span className="font-editorial-meta text-[10px] text-amber-200">{stage.stageNumber}</span>
          <span className="text-amber-400/40">•</span>
          <span className="font-editorial-subtext text-xs italic text-rose-100">{stage.environmentName}</span>
        </div>

        {/* Surprise Title (Cormorant Garamond) */}
        <h3 className="font-editorial-heading text-2xl sm:text-3xl font-medium text-amber-100 mb-1">
          {surprise.title}
        </h3>

        {/* Subtitle (EB Garamond Italic) */}
        <p className="font-editorial-subtext text-sm sm:text-base italic text-pink-200/90 tracking-wide mb-4">
          {surprise.subtitle}
        </p>

        {/* Description */}
        <p className="text-sm sm:text-base text-rose-100/90 font-sans leading-relaxed mb-5 bg-[#231336] rounded-xl p-4 border border-amber-400/15">
          {surprise.description}
        </p>

        {/* Poetry / Shayari Box (EB Garamond Italic) */}
        {surprise.poetry && (
          <div className="rounded-xl bg-[#2a1740] border border-amber-400/25 p-4 mb-5">
            <p className="font-editorial-subtext italic text-lg sm:text-xl text-amber-100 leading-relaxed whitespace-pre-line">
              {surprise.poetry}
            </p>
          </div>
        )}

        {/* Crown Progression Status */}
        <div className="flex items-center justify-between py-2 px-4 rounded-xl bg-black/40 border border-white/10 mb-5 text-xs text-amber-200">
          <span className="font-editorial-meta text-[10px]">Royal Status:</span>
          <span className="font-mono text-sm tracking-wider">
            {stage.crownProgression}
          </span>
        </div>

        {/* Next Envelope Button */}
        <div>
          <button
            onClick={onProceedToNextEnvelope}
            className="w-full py-3.5 px-6 rounded-full bg-amber-500 hover:bg-amber-400 active:scale-98 text-zinc-950 font-editorial-meta font-bold text-xs sm:text-sm tracking-[0.18em] uppercase transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-md"
          >
            <span>✉️</span>
            <span>
              {isLastStage
                ? "Enter The Grand Ultimate Reveal 👑✨"
                : `Seal Envelope & Proceed to Next World`}
            </span>
            <span>➔</span>
          </button>
        </div>
      </div>
    </div>
  );
};
