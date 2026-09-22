"use client";

import React, { useState } from "react";
import { QuestionStage } from "../lib/questionsData";
import { soundFX } from "../lib/soundEffects";

interface QuestionCardProps {
  stage: QuestionStage;
  onSelectOption: (optionIndex: number) => void;
  disabled?: boolean;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  stage,
  onSelectOption,
  disabled = false,
}) => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const handleSelect = (idx: number) => {
    if (disabled) return;
    setSelectedIdx(idx);
    soundFX.playChime(600 + idx * 80);
    onSelectOption(idx);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto px-4 z-20">
      {/* Top Badge: Regal Editorial Pill Tag */}
      <div className="flex justify-center -mb-3.5 relative z-30">
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-[#12081f] px-4 py-1 shadow-md">
          <span className="text-amber-400 text-xs">👑</span>
          <span className="font-editorial-meta text-[11px] text-amber-200">
            {stage.stageNumber}
          </span>
          <span className="h-3 w-[1px] bg-amber-400/30" />
          <span className="font-editorial-subtext text-xs italic tracking-wider text-rose-100">
            {stage.environmentName}
          </span>
        </div>
      </div>

      {/* Main Solid Luxury Card */}
      <div className="luxury-card rounded-3xl p-6 sm:p-8 md:p-10 text-center relative overflow-hidden">
        {/* Stage Subtitle */}
        <p className="font-editorial-meta text-xs tracking-[0.18em] text-amber-300/80 mb-2">
          {stage.title}
        </p>

        {/* Question Text (Cormorant Garamond, razor-sharp graceful serifs) */}
        <h2 className="font-editorial-heading text-2xl sm:text-3xl md:text-4xl font-normal text-rose-50 leading-snug tracking-tight mb-8">
          “{stage.question}”
        </h2>

        {/* 4 Clean Solid Answer Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 relative z-10">
          {stage.options.map((option, index) => {
            const isSelected = selectedIdx === index;
            const isHovered = hoveredIdx === index;

            return (
              <button
                key={index}
                disabled={disabled}
                onClick={() => handleSelect(index)}
                onMouseEnter={() => {
                  setHoveredIdx(index);
                  if (!disabled) soundFX.playChime(700 + index * 40);
                }}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`group relative flex items-center justify-start text-left p-4 sm:p-5 rounded-xl border transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-amber-500/20 border-amber-400 text-white"
                    : isHovered
                    ? "bg-[#251538] border-amber-400/60 -translate-y-0.5"
                    : "bg-[#1f1230] border-amber-400/20 hover:border-amber-400/50"
                } ${disabled ? "opacity-60 cursor-not-allowed" : ""}`}
              >
                {/* Option Letter Badge */}
                <div
                  className={`flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full border text-xs font-mono font-bold mr-3.5 transition-colors ${
                    isSelected
                      ? "bg-amber-400 text-zinc-950 border-amber-300"
                      : "bg-black/30 text-amber-200 border-amber-400/30 group-hover:border-amber-300"
                  }`}
                >
                  {String.fromCharCode(65 + index)}
                </div>

                {/* Option Text */}
                <span className="font-sans text-sm sm:text-base text-rose-100 font-medium leading-snug">
                  {option}
                </span>
              </button>
            );
          })}
        </div>

        {/* Clean Footer */}
        <div className="mt-8 pt-4 border-t border-amber-400/15 flex items-center justify-between text-xs text-rose-200/60">
          <span className="flex items-center gap-1.5 font-editorial-meta text-[10px] tracking-[0.18em]">
            <span className="text-amber-400">👑</span>
            <span>Doctor Aisha Sahiba</span>
          </span>
          <span className="font-editorial-subtext italic text-base text-amber-300/80">
            Select with your heart...
          </span>
        </div>
      </div>
    </div>
  );
};
