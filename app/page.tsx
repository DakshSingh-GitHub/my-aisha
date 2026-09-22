"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ParticleCanvas } from "../components/ParticleCanvas";
import { OpeningExperience } from "../components/OpeningExperience";

export default function HomePage() {
  const router = useRouter();

  const handleStartJourney = () => {
    router.push("/questions/q1");
  };

  return (
    <main className="relative min-h-screen w-full bg-gradient-to-b from-[#200b1d] via-[#3a132e] to-[#120516] flex items-center justify-center">
      {/* Delicate floating petals */}
      <ParticleCanvas type="tulip" density="low" />

      {/* Top-Right Developer Contract Link (Visible without scrolling) */}
      <div className="fixed top-3 right-4 sm:top-4 sm:right-6 z-50 select-none">
        <Link
          href="/dev-contract"
          className="text-[10px] sm:text-[11px] text-white/30 hover:text-amber-300/80 transition-colors font-mono tracking-wider uppercase hover:underline underline-offset-4 decoration-white/20"
        >
          Developer Contract
        </Link>
      </div>

      {/* Hero Opening Experience */}
      <div className="relative z-20 flex min-h-screen w-full items-center justify-center py-6">
        <OpeningExperience onStartJourney={handleStartJourney} />
      </div>
    </main>
  );
}
