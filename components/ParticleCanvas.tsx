"use client";

import React, { useEffect, useRef } from "react";

interface ParticleCanvasProps {
  type?:
    | "tulip"
    | "palace"
    | "butterfly"
    | "marigold"
    | "lotus"
    | "moonlight"
    | "balloons"
    | "roses"
    | "crown"
    | "clouds"
    | "diya"
    | "tunnel"
    | "floralHall"
    | "grandRoyal"
    | "reveal";
  density?: "low" | "medium" | "high" | "climax";
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  rotation: number;
  rotSpeed: number;
  shape: "circle" | "petal" | "butterfly" | "sparkle" | "balloon" | "confetti";
  extra?: number;
}

export const ParticleCanvas: React.FC<ParticleCanvasProps> = ({
  type = "tulip",
  density = "medium",
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Tasteful, non-cluttered particle count (reduced for clean minimalism)
    const count =
      density === "low"
        ? 15
        : density === "medium"
        ? 28
        : density === "high"
        ? 45
        : 65; // climax

    const particles: Particle[] = [];

    const createParticle = (initialRandomY = true): Particle => {
      const pType = type;
      let shape: Particle["shape"] = "circle";
      let color = "rgba(255, 255, 255, 0.7)";
      let size = Math.random() * 3 + 2;
      let vx = (Math.random() - 0.5) * 0.8;
      let vy = Math.random() * 0.9 + 0.4;

      if (pType === "tulip") {
        shape = "petal";
        color = Math.random() > 0.5 ? "rgba(244, 114, 182, 0.6)" : "rgba(251, 146, 60, 0.5)";
        size = Math.random() * 8 + 5;
      } else if (pType === "palace" || pType === "grandRoyal") {
        shape = "sparkle";
        color = "rgba(245, 208, 115, 0.6)";
        size = Math.random() * 4 + 2;
        vy = (Math.random() - 0.5) * 0.6;
      } else if (pType === "butterfly" || pType === "tunnel") {
        shape = "butterfly";
        color = "rgba(192, 132, 252, 0.65)";
        size = Math.random() * 7 + 5;
        vx = (Math.random() - 0.45) * 1.2;
        vy = (Math.random() - 0.6) * 0.8;
      } else if (pType === "marigold" || pType === "diya") {
        shape = "petal";
        color = Math.random() > 0.5 ? "rgba(249, 115, 22, 0.65)" : "rgba(234, 179, 8, 0.7)";
        size = Math.random() * 7 + 4;
      } else if (pType === "lotus") {
        shape = "petal";
        color = Math.random() > 0.5 ? "rgba(251, 113, 133, 0.65)" : "rgba(45, 212, 191, 0.5)";
        size = Math.random() * 7 + 4;
        vy = Math.random() * 0.5 + 0.2;
      } else if (pType === "moonlight") {
        shape = "sparkle";
        color = "rgba(199, 210, 254, 0.7)";
        size = Math.random() * 3 + 2;
        vy = (Math.random() - 0.5) * 0.5;
      } else if (pType === "roses") {
        shape = "petal";
        color = "rgba(225, 29, 72, 0.65)";
        size = Math.random() * 9 + 5;
        vy = Math.random() * 1.1 + 0.6;
      } else if (pType === "balloons") {
        shape = Math.random() > 0.6 ? "balloon" : "confetti";
        const palette = ["#f472b6", "#fb7185", "#38bdf8", "#facc15", "#c084fc"];
        color = palette[Math.floor(Math.random() * palette.length)];
        size = shape === "balloon" ? Math.random() * 10 + 8 : Math.random() * 5 + 3;
        vy = -Math.random() * 1.4 - 0.6;
      } else if (pType === "reveal") {
        const roll = Math.random();
        if (roll < 0.35) {
          shape = "balloon";
          vy = -Math.random() * 1.8 - 0.8;
          size = Math.random() * 12 + 8;
        } else if (roll < 0.7) {
          shape = "confetti";
          vy = Math.random() * 1.8 + 0.8;
          size = Math.random() * 6 + 3;
        } else {
          shape = "petal";
          vy = Math.random() * 1.4 + 0.5;
          size = Math.random() * 10 + 6;
        }
        const luxPalette = ["#d4af37", "#f59e0b", "#ec4899", "#38bdf8", "#f43f5e"];
        color = luxPalette[Math.floor(Math.random() * luxPalette.length)];
      }

      return {
        x: Math.random() * width,
        y: initialRandomY ? Math.random() * height : vy < 0 ? height + 20 : -20,
        vx,
        vy,
        size,
        color,
        alpha: Math.random() * 0.5 + 0.3,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.03,
        shape,
        extra: Math.random() * 100,
      };
    };

    for (let i = 0; i < count; i++) {
      particles.push(createParticle(true));
    }

    const drawPetal = (p: Particle) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.moveTo(0, -p.size);
      ctx.quadraticCurveTo(p.size * 0.7, -p.size * 0.3, p.size * 0.5, p.size * 0.5);
      ctx.quadraticCurveTo(0, p.size, -p.size * 0.5, p.size * 0.5);
      ctx.quadraticCurveTo(-p.size * 0.7, -p.size * 0.3, 0, -p.size);
      ctx.fill();
      ctx.restore();
    };

    const drawButterfly = (p: Particle) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      const flap = Math.sin((p.extra || 0) * 0.15);
      ctx.scale(flap * 0.8, 1);
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.ellipse(-p.size * 0.5, -p.size * 0.3, p.size * 0.6, p.size * 0.4, -0.4, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.ellipse(p.size * 0.5, -p.size * 0.3, p.size * 0.6, p.size * 0.4, 0.4, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };

    const drawSparkle = (p: Particle) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.fillStyle = p.color;
      // No canvas shadowBlur (removes glow)
      ctx.beginPath();
      ctx.moveTo(0, -p.size);
      ctx.lineTo(p.size * 0.2, -p.size * 0.2);
      ctx.lineTo(p.size, 0);
      ctx.lineTo(p.size * 0.2, p.size * 0.2);
      ctx.lineTo(0, p.size);
      ctx.lineTo(-p.size * 0.2, p.size * 0.2);
      ctx.lineTo(-p.size, 0);
      ctx.lineTo(-p.size * 0.2, -p.size * 0.2);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    };

    const drawBalloon = (p: Particle) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.ellipse(0, 0, p.size * 0.75, p.size, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = "rgba(255, 255, 255, 0.3)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, p.size);
      ctx.lineTo((Math.sin(p.rotation) * p.size) / 2, p.size + 10);
      ctx.stroke();
      ctx.restore();
    };

    const drawConfetti = (p: Particle) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
      ctx.restore();
    };

    const loop = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rotSpeed;
        if (p.extra !== undefined) p.extra += 1;

        if (p.vy > 0 && p.y > height + 30) {
          particles[i] = createParticle(false);
        } else if (p.vy < 0 && p.y < -30) {
          particles[i] = createParticle(false);
        }
        if (p.x < -30) p.x = width + 30;
        if (p.x > width + 30) p.x = -30;

        ctx.globalAlpha = p.alpha;

        if (p.shape === "petal") {
          drawPetal(p);
        } else if (p.shape === "butterfly") {
          drawButterfly(p);
        } else if (p.shape === "sparkle") {
          drawSparkle(p);
        } else if (p.shape === "balloon") {
          drawBalloon(p);
        } else if (p.shape === "confetti") {
          drawConfetti(p);
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.fill();
        }
      }

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, [type, density]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-10 h-full w-full opacity-80"
    />
  );
};
