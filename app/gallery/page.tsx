"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { QUESTIONS_DATA, QuestionStage } from "../../lib/questionsData";
import { soundFX } from "../../lib/soundEffects";
import { ParticleCanvas } from "../../components/ParticleCanvas";
import { CrownProgressionBar } from "../../components/CrownProgressionBar";
import { Envelope3D } from "../../components/Envelope3D";

export default function EnvelopesGalleryPage() {
  const router = useRouter();
  const [viewMode, setViewMode] = useState<"envelopes" | "surprises">("envelopes");
  const [selectedStage, setSelectedStage] = useState<QuestionStage | null>(null);

  const handleEnvelopeClick = (stage: QuestionStage) => {
    soundFX.playPaperUnfold();
    setSelectedStage(stage);
  };

  return (
    <main className="relative min-h-screen w-full bg-gradient-to-b from-[#140822] via-[#240e36] to-[#0d0417] pb-16">
      {/* Subtle particle engine without glow */}
      <ParticleCanvas type="reveal" density="low" />

      {/* Royal Crown Header */}
      <CrownProgressionBar currentStageIndex={14} />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 pt-8">
        {/* Gallery Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-1">
            <span className="text-amber-400 text-xs">✦</span>
            <span className="font-editorial-meta text-[11px] text-amber-200">
              Complete Royal Collection • 15 of 15
            </span>
            <span className="text-amber-400 text-xs">✦</span>
          </div>

          <h1 className="font-editorial-heading text-3xl sm:text-5xl md:text-6xl font-normal text-amber-100">
            All 15 Envelopes at a Glance
          </h1>

          <p className="font-editorial-subtext text-lg sm:text-xl text-rose-100/90 italic">
            A complete keepsake archive crafted exclusively for Doctor Aisha Sahiba.
          </p>

          {/* View Mode Toggle Buttons */}
          <div className="pt-2 flex items-center justify-center gap-2">
            <button
              onClick={() => {
                soundFX.playChime(700);
                setViewMode("envelopes");
              }}
              className={`px-5 py-2 rounded-full font-editorial-meta text-xs tracking-[0.18em] transition-all cursor-pointer ${
                viewMode === "envelopes"
                  ? "bg-amber-500 text-zinc-950 font-bold shadow-md"
                  : "bg-white/5 border border-amber-400/30 text-rose-100 hover:bg-white/10"
              }`}
            >
              ✉️ Envelopes View
            </button>

            <button
              onClick={() => {
                soundFX.playChime(800);
                setViewMode("surprises");
              }}
              className={`px-5 py-2 rounded-full font-editorial-meta text-xs tracking-[0.18em] transition-all cursor-pointer ${
                viewMode === "surprises"
                  ? "bg-amber-500 text-zinc-950 font-bold shadow-md"
                  : "bg-white/5 border border-amber-400/30 text-rose-100 hover:bg-white/10"
              }`}
            >
              🎁 Surprises & Poetry View
            </button>
          </div>
        </div>

        {/* VIEW MODE 1: All 15 Envelopes Side-by-Side Grid */}
        {viewMode === "envelopes" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center">
            {QUESTIONS_DATA.map((stage) => (
              <div
                key={stage.id}
                onClick={() => handleEnvelopeClick(stage)}
                className="group flex flex-col items-center cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
              >
                {/* Envelope Preview */}
                <Envelope3D
                  stageNumber={stage.stageNumber}
                  recipientText="Doctor Aisha Sahiba"
                  sealSymbol={stage.envelopeDesign.waxSealSymbol}
                  stampText={stage.envelopeDesign.stampText}
                  baseColor={stage.envelopeDesign.baseColor}
                  isOpen={false}
                  isClickable={false}
                  size="md"
                />

                {/* Sub-bar below envelope */}
                <div className="mt-3 text-center">
                  <p className="font-editorial-heading text-lg text-amber-200 group-hover:text-amber-100 transition-colors">
                    {stage.environmentName}
                  </p>
                  <p className="font-editorial-subtext text-xs italic text-rose-200/70">
                    Surprise #{stage.id}: {stage.surprise.title.split(": ")[1] || stage.surprise.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* VIEW MODE 2: All 15 Surprises & Poetry Cards Grid */}
        {viewMode === "surprises" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {QUESTIONS_DATA.map((stage) => (
              <div
                key={stage.id}
                className="luxury-card rounded-2xl p-5 flex flex-col justify-between border border-amber-400/30 hover:border-amber-400/60 transition-colors"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between border-b border-amber-400/15 pb-3 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{stage.surprise.icon}</span>
                      <div>
                        <span className="font-editorial-meta text-[10px] text-amber-300">
                          {stage.stageNumber}
                        </span>
                        <h4 className="font-editorial-heading text-base font-medium text-amber-100 leading-tight">
                          {stage.environmentName}
                        </h4>
                      </div>
                    </div>
                    <span className="font-mono text-xs text-amber-200/60">
                      {stage.crownProgression}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h5 className="font-editorial-heading text-lg font-medium text-amber-200 mb-1">
                    {stage.surprise.title}
                  </h5>
                  <p className="text-xs text-rose-100/80 mb-3 leading-relaxed">
                    {stage.surprise.description}
                  </p>

                  {/* Poetry Block */}
                  {stage.surprise.poetry && (
                    <div className="bg-[#241336] rounded-xl p-3 border border-amber-400/20 mb-4">
                      <p className="font-editorial-subtext text-sm italic text-amber-100 whitespace-pre-line leading-relaxed">
                        {stage.surprise.poetry}
                      </p>
                    </div>
                  )}
                </div>

                {/* Jump to stage action */}
                <button
                  onClick={() => router.push(`/questions/q${stage.id}`)}
                  className="w-full py-2 rounded-lg bg-[#201033] hover:bg-amber-500 hover:text-zinc-950 border border-amber-400/30 text-amber-200 text-xs font-editorial-meta tracking-[0.18em] transition-colors cursor-pointer"
                >
                  Replay Stage {stage.stageNumber.split(" / ")[0]} ➔
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Actions */}
        <div className="mt-12 pt-8 border-t border-amber-400/20 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <button
            onClick={() => router.push("/finale")}
            className="w-full sm:w-auto px-8 py-3 rounded-full bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs sm:text-sm font-editorial-meta tracking-[0.18em] uppercase transition-colors cursor-pointer shadow-md"
          >
            Return to Grand Finale 👑
          </button>

          <button
            onClick={() => router.push("/")}
            className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#201033] border border-amber-400/40 hover:border-amber-400 text-rose-100 font-editorial-meta text-xs sm:text-sm tracking-[0.18em] transition-colors cursor-pointer"
          >
            Start from Beginning 🔄
          </button>
        </div>
      </div>

      {/* Quick Inspect Modal when clicking an envelope in Envelopes View */}
      {selectedStage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
          <div className="relative w-full max-w-lg luxury-card-elevated rounded-3xl p-6 sm:p-8 text-center border border-amber-400/40 shadow-2xl">
            {/* Close button */}
            <button
              onClick={() => setSelectedStage(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 cursor-pointer"
            >
              ✕
            </button>

            {/* Icon */}
            <div className="flex justify-center mb-3">
              <span className="text-4xl">{selectedStage.surprise.icon}</span>
            </div>

            {/* Stage Tag */}
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-400/10 px-3 py-0.5 border border-amber-400/30 mb-2">
              <span className="font-editorial-meta text-[10px] text-amber-200">
                {selectedStage.stageNumber}
              </span>
              <span className="text-amber-400/40">•</span>
              <span className="font-editorial-subtext text-xs italic text-rose-100">
                {selectedStage.environmentName}
              </span>
            </div>

            <h3 className="font-editorial-heading text-2xl font-medium text-amber-100 mb-1">
              {selectedStage.surprise.title}
            </h3>

            <p className="font-editorial-subtext text-sm italic text-pink-200/80 mb-3">
              {selectedStage.surprise.subtitle}
            </p>

            <p className="text-sm text-rose-100/90 font-sans leading-relaxed mb-4 bg-[#231336] rounded-xl p-3.5 border border-amber-400/15">
              {selectedStage.surprise.description}
            </p>

            {selectedStage.surprise.poetry && (
              <div className="bg-[#2a1740] rounded-xl p-3.5 border border-amber-400/25 mb-5">
                <p className="font-editorial-subtext text-base italic text-amber-100 whitespace-pre-line leading-relaxed">
                  {selectedStage.surprise.poetry}
                </p>
              </div>
            )}

            <div className="flex items-center justify-center gap-3">
              <button
                onClick={() => router.push(`/questions/q${selectedStage.id}`)}
                className="w-full py-3 rounded-full bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold font-editorial-meta text-xs tracking-[0.18em] uppercase transition-colors cursor-pointer shadow-md"
              >
                Replay This Question ➔
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

