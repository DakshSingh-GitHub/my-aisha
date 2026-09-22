"use client";

import React, { useEffect, useState } from "react";
import { soundFX } from "../lib/soundEffects";
import { downloadKeepsakePNG } from "../lib/downloadKeepsake";

interface GrandFinaleRevealProps {
  onReplay: () => void;
  onBrowseAllEnvelopes: () => void;
}

export const GrandFinaleReveal: React.FC<GrandFinaleRevealProps> = ({
  onReplay,
  onBrowseAllEnvelopes,
}) => {
  // Check if final card has already been opened previously; if so, directly show it!
  const [stage, setStage] = useState<
    "intro" | "grandEnvelope" | "opened" | "celebration"
  >(() => {
    if (typeof window !== "undefined") {
      try {
        const isOpened = localStorage.getItem("aisha_bday_finale_opened");
        if (isOpened === "true") {
          return "celebration";
        }
      } catch {
        // Storage access safety
      }
    }
    return "intro";
  });

  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadNotice, setDownloadNotice] = useState<string | null>(null);

  useEffect(() => {
    // If already in celebration mode, no need to show intro or grand envelope prompts
    if (stage === "celebration") return;

    const t1 = setTimeout(() => {
      setStage("grandEnvelope");
      soundFX.playPaperUnfold();
    }, 1000);

    return () => clearTimeout(t1);
  }, [stage]);

  const handleOpenGrandEnvelope = () => {
    try {
      localStorage.setItem("aisha_bday_finale_opened", "true");
      document.cookie =
        "aisha_bday_finale_opened=true; path=/; max-age=31536000; SameSite=Lax";
    } catch {
      // Storage safety
    }

    soundFX.playGrandFanfare();
    soundFX.playWaxSealCrack();
    setStage("opened");

    setTimeout(() => {
      setStage("celebration");
    }, 1200);
  };

  const handleDownload = async () => {
    if (isDownloading) return;
    setIsDownloading(true);
    soundFX.playChime(880);

    const success = await downloadKeepsakePNG();
    setIsDownloading(false);

    if (success) {
      soundFX.playHarpArpeggio();
      setDownloadNotice("Royal Keepsake PNG downloaded! 💖");
      setTimeout(() => setDownloadNotice(null), 4000);
    } else {
      setDownloadNotice("Download initiated!");
      setTimeout(() => setDownloadNotice(null), 3000);
    }
  };

  const handleReplayClick = () => {
    try {
      localStorage.removeItem("aisha_bday_finale_opened");
      localStorage.setItem("aisha_bday_unlocked", "0");
      document.cookie = "aisha_bday_finale_opened=; path=/; max-age=0;";
      document.cookie =
        "aisha_bday_unlocked=0; path=/; max-age=31536000; SameSite=Lax";
    } catch {
      // Storage safety
    }
    onReplay();
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 py-12 text-center select-none">
      {/* Intro Waiting Mode */}
      {stage === "intro" && (
        <div className="space-y-3">
          <p className="font-editorial-meta text-xs sm:text-sm text-amber-300">
            15 / 15 • THE GRAND CLIMAX
          </p>
          <h2 className="font-editorial-heading text-4xl sm:text-6xl font-normal text-amber-100">
            The Final Seal is Ready...
          </h2>
          <p className="font-editorial-subtext text-xl text-rose-200/80 italic">
            Building anticipation for Doctor Aisha Sahiba...
          </p>
        </div>
      )}

      {/* Grand 15th Envelope Sealed (Shown only on initial visit before opening) */}
      {stage === "grandEnvelope" && (
        <div className="flex flex-col items-center max-w-xl mx-auto space-y-8">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-1 text-xs font-editorial-meta text-amber-200">
              👑 ENVELOPE 15 OF 15 • THE ULTIMATE SURPRISE
            </span>
            <h2 className="font-editorial-heading text-4xl sm:text-6xl font-normal text-amber-100">
              The Grand Golden Envelope
            </h2>
            <p className="font-editorial-subtext text-lg sm:text-xl text-rose-100/90 italic">
              Crafted in imperial velvet, sealed with our deepest prayers and love.
            </p>
          </div>

          {/* Grand Envelope Showcase */}
          <div
            onClick={handleOpenGrandEnvelope}
            className="relative w-80 h-56 sm:w-96 sm:h-64 rounded-3xl p-6 bg-[#261338] border-2 border-amber-400/60 shadow-2xl cursor-pointer hover:scale-[1.02] active:scale-98 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between z-10">
              <span className="text-[10px] font-editorial-meta font-bold text-amber-200 bg-black/40 border border-amber-400/30 px-3 py-1 rounded-full">
                15 / 15 FINAL
              </span>
              <span className="text-[10px] font-editorial-meta text-amber-300">
                IMPERIAL DECREE
              </span>
            </div>

            {/* Recipient Plaque */}
            <div className="my-auto z-10">
              <p className="font-editorial-meta text-[10px] text-rose-200/70">
                A Royal Tribute to
              </p>
              <h3 className="font-editorial-heading text-2xl sm:text-3xl font-medium text-amber-100 mt-1">
                Doctor Aisha Sahiba
              </h3>
              <p className="font-editorial-subtext text-base italic text-amber-200 mt-0.5">
                The Eternal Birthday Princess 👑
              </p>
            </div>

            <div className="flex items-center justify-center z-10 text-[11px] font-editorial-meta tracking-[0.18em] text-zinc-950 font-bold bg-amber-500 py-2 rounded-xl">
              TAP TO UNSEAL THE GRAND SURPRISE ✨
            </div>
          </div>
        </div>
      )}

      {/* Opening Flash */}
      {stage === "opened" && (
        <div className="space-y-4">
          <div className="w-20 h-20 mx-auto rounded-full bg-amber-400 flex items-center justify-center text-4xl text-zinc-950 font-bold shadow-lg">
            ✨
          </div>
          <h2 className="font-editorial-heading text-4xl sm:text-5xl font-normal text-amber-100">
            Unleashing the Birthday Wonder...
          </h2>
        </div>
      )}

      {/* Grand Celebration Spectacular (Directly opened when returning!) */}
      {stage === "celebration" && (
        <div className="flex flex-col items-center max-w-3xl mx-auto space-y-8 px-2 animate-fadeIn">
          {/* Crown */}
          <div className="flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#261338] border-2 border-amber-400/60 shadow-xl">
            <span className="text-5xl sm:text-6xl select-none">👑</span>
          </div>

          {/* Floral Indicators */}
          <div className="flex items-center justify-center gap-3 sm:gap-5 text-xl sm:text-2xl text-amber-200">
            <span>🌷</span>
            <span>🪷</span>
            <span>🌹</span>
            <span className="font-editorial-meta text-xs sm:text-sm tracking-[0.18em] text-amber-300 font-bold">
              ROYAL CORONATION
            </span>
            <span>🌹</span>
            <span>🪷</span>
            <span>🌷</span>
          </div>

          {/* Final Emotional Text Messages Sequence */}
          <div className="space-y-4 max-w-2xl mx-auto">
            <h1 className="font-editorial-heading text-3xl sm:text-5xl md:text-6xl font-normal text-amber-100 tracking-wide">
              HAPPY BIRTHDAY, PRINCESS AISHA 👑
            </h1>

            <h2 className="font-editorial-heading text-2xl sm:text-4xl text-rose-200 font-medium tracking-wide pt-1">
              Doctor Aisha Sahiba ✨
            </h2>

            <div className="py-2">
              <p className="font-editorial-subtext text-2xl sm:text-3xl text-rose-100 italic leading-relaxed">
                “Today isn&apos;t just another day…<br />
                it&apos;s the day the world got a little more beautiful. 🌷✨”
              </p>
            </div>

            <p className="font-editorial-heading text-2xl sm:text-3xl text-amber-300 tracking-wide font-normal pt-2">
              Happy Birthday, Princess. 👑🦋
            </p>
          </div>

          {/* Royal Letter Keepsake Card */}
          <div className="w-full max-w-2xl rounded-3xl luxury-card-elevated p-6 sm:p-10 border border-amber-400/40 text-left shadow-2xl relative">
            <div className="flex items-center justify-between border-b border-amber-400/20 pb-4 mb-6">
              <div className="flex items-center space-x-2">
                <span className="text-lg">📜</span>
                <span className="font-editorial-heading text-lg sm:text-xl font-medium text-amber-200">
                  A Birthday Letter from the Heart
                </span>
              </div>
              <span className="font-editorial-meta text-xs text-amber-300/80">
                23rd September
              </span>
            </div>

            <div className="space-y-4 font-editorial-subtext text-lg sm:text-xl text-rose-100 leading-relaxed italic">
              <p>
                <strong className="text-amber-200 font-editorial-heading font-medium text-xl not-italic block mb-1">
                  Dearest Doctor Aisha Sahiba,
                </strong>
              </p>
              <p>
                You walk into hospitals with a stethoscope and save lives with your
                brilliance, but you walk into people’s lives and heal them with your
                unfathomable warmth, grace, and laughter.
              </p>
              <p>
                From the quiet moments of midnight tea to the grandest dreams that you
                are destined to achieve, you carry a rare royal poise. You deserve a
                world where your kindness is reciprocated tenfold, your smile never
                dims, and every single day feels like an enchanted celebration.
              </p>
              <p className="text-amber-200 pt-2 border-t border-white/10 text-xl sm:text-2xl not-italic font-editorial-subtext">
                “खुदा करे कि हर खुशी आपके दामन में भर जाए,<br />
                आप मुस्कुराएं तो सारा जहाँ मुनव्वर हो जाए।” 🌷🪷
              </p>
              <p className="text-right text-2xl sm:text-3xl text-amber-300 pt-3 not-italic font-editorial-heading">
                Always your biggest admirer ✨👑
              </p>
            </div>

            {/* Direct PNG Download Box inside the Card */}
            <div className="mt-8 pt-5 border-t border-amber-400/25 flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#140a1f] -mx-6 sm:-mx-10 -mb-6 sm:-mb-10 p-5 rounded-b-3xl">
              <div className="text-left">
                <p className="font-editorial-meta text-[11px] text-amber-300 font-bold tracking-[0.18em]">
                  ROYAL KEEPSAKE CERTIFICATE
                </p>
                <p className="font-editorial-subtext text-xs italic text-rose-200/70">
                  Save this card as a high-resolution PNG image to your device
                </p>
              </div>

              <button
                onClick={handleDownload}
                disabled={isDownloading}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-amber-500 hover:bg-amber-400 active:scale-95 text-zinc-950 font-editorial-meta font-bold text-xs tracking-[0.18em] transition-all cursor-pointer shadow-md flex items-center justify-center gap-2"
              >
                <span>📥</span>
                <span>{isDownloading ? "Generating..." : "Download as PNG"}</span>
              </button>
            </div>
          </div>

          {/* Download Toast Notification */}
          {downloadNotice && (
            <div className="fixed bottom-8 z-50 px-6 py-3 rounded-full bg-amber-500 text-zinc-950 font-editorial-meta font-bold text-xs tracking-[0.18em] shadow-2xl flex items-center gap-2 animate-bounce">
              <span>✨</span>
              <span>{downloadNotice}</span>
            </div>
          )}

          {/* Action Navigation */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full">
            <button
              onClick={onBrowseAllEnvelopes}
              className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#201033] border border-amber-400/40 hover:border-amber-400 text-rose-100 font-editorial-meta text-xs sm:text-sm tracking-[0.18em] transition-colors cursor-pointer"
            >
              See All 15 Envelopes at a Glance 💌
            </button>

            <button
              onClick={handleDownload}
              disabled={isDownloading}
              className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#2a1740] border border-amber-400/50 hover:bg-amber-500 hover:text-zinc-950 text-amber-200 font-editorial-meta text-xs sm:text-sm tracking-[0.18em] transition-colors cursor-pointer flex items-center justify-center gap-2"
            >
              <span>📥</span>
              <span>Download Card (PNG)</span>
            </button>

            <button
              onClick={handleReplayClick}
              className="w-full sm:w-auto px-8 py-3 rounded-full bg-amber-500 hover:bg-amber-400 active:scale-95 text-zinc-950 font-bold text-xs sm:text-sm font-editorial-meta tracking-[0.18em] uppercase transition-all duration-200 cursor-pointer shadow-md"
            >
              Experience Again 🔄
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
