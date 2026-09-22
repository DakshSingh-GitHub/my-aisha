"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ParticleCanvas } from "../components/ParticleCanvas";
import { OpeningExperience } from "../components/OpeningExperience";

export default function HomePage() {
  const router = useRouter();

  const handleStartJourney = () => {
    router.push("/questions/q1");
  };

  return (
    <main className="relative min-h-screen w-full bg-gradient-to-b from-[#200b1d] via-[#3a132e] to-[#120516]">
      {/* Delicate floating petals */}
      <ParticleCanvas type="tulip" density="low" />

      {/* Hero Opening Experience */}
      <div className="relative z-20 flex min-h-screen items-center justify-center py-6">
        <OpeningExperience onStartJourney={handleStartJourney} />
      </div>
    </main>
  );
}
