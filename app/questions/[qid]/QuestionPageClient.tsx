"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { QUESTIONS_DATA } from "../../../lib/questionsData";
import { soundFX } from "../../../lib/soundEffects";
import { useApp } from "../../context/AppContext";
import { ParticleCanvas } from "../../../components/ParticleCanvas";
import { CrownProgressionBar } from "../../../components/CrownProgressionBar";
import { QuestionCard } from "../../../components/QuestionCard";
import { AnswerReactionModal } from "../../../components/AnswerReactionModal";
import { SurpriseModal } from "../../../components/SurpriseModal";
import { TransitionDirector } from "../../../components/TransitionDirector";

interface QuestionPageClientProps {
  qid: string;
}

export const QuestionPageClient: React.FC<QuestionPageClientProps> = ({ qid }) => {
  const router = useRouter();
  const { unlockStage } = useApp();

  // Parse qid: e.g. "q1" -> 1
  const stageNum = parseInt(qid.replace("q", ""), 10);
  const stageIndex = !isNaN(stageNum) && stageNum >= 1 && stageNum <= 15 ? stageNum - 1 : 0;

  const currentStage = QUESTIONS_DATA[stageIndex];
  const nextStage = QUESTIONS_DATA[stageIndex + 1] || QUESTIONS_DATA[0];

  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [isReactionModalOpen, setIsReactionModalOpen] = useState<boolean>(false);
  const [isSurpriseModalOpen, setIsSurpriseModalOpen] = useState<boolean>(false);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  const handleSelectOption = (idx: number) => {
    setSelectedOptionIndex(idx);
    setIsReactionModalOpen(true);
  };

  const handleClaimSurprise = () => {
    setIsReactionModalOpen(false);
    setIsSurpriseModalOpen(true);
    soundFX.playChime(950);
  };

  const handleProceedFromSurprise = () => {
    setIsSurpriseModalOpen(false);
    setSelectedOptionIndex(null);

    // If on stage 15, unlock and navigate to finale
    if (stageIndex >= QUESTIONS_DATA.length - 1) {
      unlockStage(14);
      router.push("/finale");
      return;
    }

    // Otherwise launch the 9-Phase transition and navigate to next route
    unlockStage(stageIndex + 1);
    setIsTransitioning(true);
  };

  const handleTransitionComplete = () => {
    const nextQid = `q${stageIndex + 2}`;
    router.push(`/questions/${nextQid}`);
  };

  return (
    <main
      className={`relative min-h-screen w-full transition-colors duration-700 bg-gradient-to-b ${currentStage.palette.bgGradient}`}
    >
      {/* Subtle particle engine without glow */}
      <ParticleCanvas type={currentStage.palette.particleType} density="low" />

      {/* Persistent Crown Progression Bar */}
      <CrownProgressionBar currentStageIndex={stageIndex} />

      {/* Centerpiece Question Card */}
      <div className="relative z-20 min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center py-10 px-4">
        <QuestionCard
          stage={currentStage}
          onSelectOption={handleSelectOption}
          disabled={isReactionModalOpen || isSurpriseModalOpen || isTransitioning}
        />
      </div>

      {/* Reaction Modal */}
      {isReactionModalOpen && selectedOptionIndex !== null && (
        <AnswerReactionModal
          stage={currentStage}
          selectedIndex={selectedOptionIndex}
          onClaimSurprise={handleClaimSurprise}
          onTryAgain={() => {
            setIsReactionModalOpen(false);
            setSelectedOptionIndex(null);
          }}
        />
      )}

      {/* Surprise Modal */}
      {isSurpriseModalOpen && (
        <SurpriseModal
          stage={currentStage}
          onProceedToNextEnvelope={handleProceedFromSurprise}
          isLastStage={stageIndex === QUESTIONS_DATA.length - 1}
        />
      )}

      {/* 9-Phase Transition System */}
      {isTransitioning && (
        <TransitionDirector
          currentStage={currentStage}
          nextStage={nextStage}
          onTransitionComplete={handleTransitionComplete}
        />
      )}
    </main>
  );
};

