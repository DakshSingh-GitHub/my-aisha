"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { ParticleCanvas } from "../../components/ParticleCanvas";
import { CrownProgressionBar } from "../../components/CrownProgressionBar";
import { useApp } from "../context/AppContext";

const GrandFinaleReveal = dynamic(
  () =>
    import("../../components/GrandFinaleReveal").then(
      (mod) => mod.GrandFinaleReveal
    ),
  { ssr: false }
);

export default function FinalePage() {
  const router = useRouter();
  const { unlockedStageIndex } = useApp();

  const [isAllowed] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      try {
        const finaleOpened =
          localStorage.getItem("aisha_bday_finale_opened") === "true";
        const saved = localStorage.getItem("aisha_bday_unlocked");
        const unlocked = saved ? parseInt(saved, 10) : unlockedStageIndex;

        if (finaleOpened || (!isNaN(unlocked) && unlocked >= 15)) {
          return true;
        }
      } catch {
        // Storage safety
      }
    }
    return false;
  });

  useEffect(() => {
    if (!isAllowed) {
      try {
        const saved = localStorage.getItem("aisha_bday_unlocked");
        const unlocked = saved ? parseInt(saved, 10) : unlockedStageIndex;
        const lastIncompleteIndex =
          isNaN(unlocked) || unlocked < 0 ? 0 : Math.min(unlocked, 14);
        router.replace(`/questions/q${lastIncompleteIndex + 1}`);
      } catch {
        router.replace("/questions/q1");
      }
    }
  }, [isAllowed, router, unlockedStageIndex]);

  if (!isAllowed) {
    return null;
  }

  return (
    <main className="relative min-h-screen w-full bg-gradient-to-b from-[#1d0628] via-[#3c0c45] to-[#0d0114]">
      {/* Climax Particle Engine (Balloons, confetti, rose petals) */}
      <ParticleCanvas type="reveal" density="climax" />

      {/* Royal Crown Header */}
      <CrownProgressionBar currentStageIndex={14} />

      {/* Grand Finale Reveal Presentation */}
      <div className="relative z-20 py-8">
        <GrandFinaleReveal
          onReplay={() => router.push("/")}
          onBrowseAllEnvelopes={() => router.push("/gallery")}
        />
      </div>
    </main>
  );
}

