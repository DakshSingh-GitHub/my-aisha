"use client";

import React, { useState } from "react";
import { soundFX } from "../lib/soundEffects";

interface Envelope3DProps {
  stageNumber: string;
  recipientText?: string;
  sealSymbol?: string;
  stampText?: string;
  baseColor?: string;
  isOpen?: boolean;
  onOpen?: () => void;
  isClickable?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  showRibbon?: boolean;
}

export const Envelope3D: React.FC<Envelope3DProps> = ({
  stageNumber,
  recipientText = "Doctor Aisha Sahiba",
  sealSymbol = "👑",
  stampText = "ROYAL POST",
  baseColor = "bg-[#21112e]",
  isOpen = false,
  onOpen,
  isClickable = true,
  size = "md",
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [sealCracked, setSealCracked] = useState(false);

  const handleClick = () => {
    if (!isClickable || isOpen) return;
    soundFX.playWaxSealCrack();
    soundFX.playPaperUnfold();
    setSealCracked(true);
    setTimeout(() => {
      onOpen?.();
    }, 350);
  };

  const sizeClasses = {
    sm: "w-64 h-48",
    md: "w-80 h-56 sm:w-96 sm:h-64",
    lg: "w-80 h-56 sm:w-[26rem] sm:h-64 md:w-[30rem] md:h-72",
    xl: "w-80 h-56 sm:w-[28rem] sm:h-68 md:w-[32rem] md:h-76",
  }[size];

  return (
    <div
      className={`relative select-none perspective-1000 ${sizeClasses} cursor-pointer transition-transform duration-300 ${
        isHovered && !isOpen ? "scale-[1.01] -translate-y-1" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      aria-label={`Envelope ${stageNumber}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          handleClick();
        }
      }}
    >
      {/* Main Envelope Body - Clean Solid Luxury */}
      <div
        className={`relative h-full w-full rounded-2xl overflow-hidden border border-amber-400/30 ${baseColor} shadow-2xl flex flex-col justify-between p-5`}
      >
        {/* Interior Under-Lining */}
        <div className="absolute inset-x-0 top-0 h-[38%] bg-[#1a0c24] border-b border-amber-400/10 pointer-events-none" />

        {/* 3D Envelope Flap / Top Lid */}
        <div
          className={`absolute inset-x-0 top-0 h-[36%] origin-top transition-transform duration-600 ease-out transform-style-3d z-20 ${
            isOpen ? "-rotate-x-180 pointer-events-none" : "rotate-x-0"
          }`}
          style={{
            clipPath: "polygon(0 0, 100% 0, 50% 100%)",
            backgroundColor: "#2a153a",
            borderBottom: "1.5px solid rgba(212, 175, 55, 0.45)",
          }}
        />

        {/* Royal Wax Seal Button */}
        <div
          className={`absolute left-1/2 top-[36%] -translate-x-1/2 -translate-y-1/2 z-30 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-amber-600 border-2 border-amber-300 shadow-lg transition-all duration-300 ${
            sealCracked
              ? "scale-125 opacity-0 rotate-12"
              : "hover:scale-105 active:scale-95"
          }`}
        >
          <span className="text-lg sm:text-xl select-none">{sealSymbol}</span>
        </div>

        {/* Dedicated Recipient Plaque - Regal & Editorial Luxury */}
        <div className="relative z-10 mt-auto pt-3.5 pb-2.5 px-4 rounded-xl bg-black/40 border border-amber-400/25 text-center shadow-sm">
          {/* Stage Badge & Stamp Text (Cinzel / Montserrat tracked out wide) */}
          <div className="inline-flex items-center gap-2 rounded-md bg-amber-400/15 px-2.5 py-0.5 border border-amber-400/30 mb-1.5">
            <span className="font-editorial-meta text-[10px] text-amber-200">{stageNumber}</span>
            <span className="text-amber-400/40">•</span>
            <span className="font-editorial-meta text-[9px] text-amber-200/80">{stampText}</span>
          </div>

          <p className="font-editorial-meta text-[9px] sm:text-[10px] tracking-[0.18em] text-rose-200/70">
            Specially For
          </p>

          {/* Cormorant Garamond Heading */}
          <h3 className="font-editorial-heading text-xl sm:text-2xl md:text-3xl font-normal tracking-wide text-amber-100 mt-0.5 leading-tight">
            {recipientText}
          </h3>

          {/* EB Garamond Italic Subtext */}
          <p className="font-editorial-subtext text-xs sm:text-sm italic text-amber-200/90 mt-0.5">
            Princess of the Day 👑
          </p>
        </div>

        {/* Bottom Bar: Clear Status and Confidential Stamp */}
        <div className="relative z-10 flex items-center justify-between font-editorial-meta text-[9px] sm:text-[10px] tracking-[0.18em] text-amber-200/60 pt-2 px-1">
          <span>{isOpen ? "• UNSEALED •" : "• TAP SEAL TO OPEN •"}</span>
          <span>CONFIDENTIAL • 2026 EDITION</span>
        </div>
      </div>
    </div>
  );
};
