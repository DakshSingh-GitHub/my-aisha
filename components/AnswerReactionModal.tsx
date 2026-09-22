"use client";

import React, { useEffect } from "react";
import { QuestionStage } from "../lib/questionsData";
import { soundFX } from "../lib/soundEffects";

interface AnswerReactionModalProps {
  stage: QuestionStage;
  selectedIndex: number;
  onClaimSurprise: () => void;
  onTryAgain?: () => void;
}

export const AnswerReactionModal: React.FC<AnswerReactionModalProps> = ({
  stage,
  selectedIndex,
  onClaimSurprise,
  onTryAgain,
}) => {
  const isComplimentary = selectedIndex === stage.complimentaryIndex;

  useEffect(() => {
    if (isComplimentary) {
      soundFX.playHarpArpeggio();
    } else {
      soundFX.playPlayfulBoing();
    }
  }, [isComplimentary]);

  const playfulData = stage.playfulResponses[selectedIndex] || {
    title: "Arre Sahiba, itna bhi doubt? 😂",
    hint: "स्वर्ग से उतरी हुई अप्सरा लग रही हो… ab answer samajh aaya? 👑✨",
    hinglishVoice: "Iska answer sochna bhi allowed hai kya? Crown seedha aapka hai!",
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
      {/* Container Card - Solid Luxury */}
      <div className="relative w-full max-w-lg luxury-card-elevated rounded-3xl p-6 sm:p-8 text-center border border-amber-400/40 shadow-2xl">
        {/* Crown or Playful Emoticon */}
        <div className="flex justify-center mb-4">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#2a1740] border border-amber-400/40">
            <span className="text-3xl">{isComplimentary ? "👑" : "🙈"}</span>
          </div>
        </div>

        {/* Title (Cormorant Garamond) */}
        <h3 className="font-editorial-heading text-2xl sm:text-3xl font-medium text-amber-200 mb-2">
          {isComplimentary
            ? stage.complimentaryResponse.title
            : playfulData.title}
        </h3>

        {/* Subtitle / Hinglish Reaction (EB Garamond Italic) */}
        <p className="font-editorial-subtext text-lg sm:text-xl text-rose-100 italic leading-relaxed mb-5">
          {isComplimentary
            ? `“${stage.complimentaryResponse.subtitle}”`
            : `“${playfulData.hinglishVoice}”`}
        </p>

        {/* If Doubtful, Display Sweet Hint */}
        {!isComplimentary && (
          <div className="rounded-xl bg-[#231336] border border-amber-400/30 p-4 mb-6 text-left">
            <div className="flex items-center gap-1.5 font-editorial-meta text-[10px] text-amber-300 font-bold mb-1">
              <span>💡</span> Royal Hint for Princess Aisha:
            </div>
            <p className="font-editorial-subtext text-base sm:text-lg text-amber-100 leading-normal italic">
              {playfulData.hint}
            </p>
          </div>
        )}

        {/* Complimentary Extra Affirmation */}
        {isComplimentary && (
          <div className="rounded-xl bg-[#231336] border border-amber-400/20 p-3.5 mb-6 text-xs text-rose-200">
            <p className="font-editorial-meta text-[10px] text-amber-200 mb-0.5 font-semibold">
              ROYAL DECREE APPROVED:
            </p>
            <p className="font-editorial-subtext text-sm italic text-rose-100">
              {stage.complimentaryResponse.hinglishVoice}
            </p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          {isComplimentary ? (
            <button
              onClick={onClaimSurprise}
              className="w-full sm:w-auto px-8 py-3 rounded-full bg-amber-500 hover:bg-amber-400 active:scale-95 text-zinc-950 font-editorial-meta font-bold text-xs sm:text-sm tracking-[0.18em] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <span>🎁</span>
              <span>Open Surprise #{stage.id}</span>
              <span>✨</span>
            </button>
          ) : (
            <>
              {onTryAgain && (
                <button
                  onClick={onTryAgain}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-white/5 border border-white/20 text-rose-100 hover:bg-white/10 font-editorial-meta text-[11px] tracking-[0.18em] transition-all duration-200 cursor-pointer"
                >
                  Change My Answer 🔄
                </button>
              )}
              <button
                onClick={onClaimSurprise}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-amber-500 hover:bg-amber-400 active:scale-95 text-zinc-950 font-editorial-meta font-bold text-[11px] tracking-[0.18em] transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
              >
                <span>👑</span>
                <span>Crown Officially Mera Hai!</span>
                <span>✨</span>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
