"use client";

import React from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { ParticleCanvas } from "../../components/ParticleCanvas";
import { CrownProgressionBar } from "../../components/CrownProgressionBar";

const GrandFinaleReveal = dynamic(
  () =>
    import("../../components/GrandFinaleReveal").then(
      (mod) => mod.GrandFinaleReveal
    ),
  { ssr: false }
);

export default function FinalePage() {
  const router = useRouter();

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

