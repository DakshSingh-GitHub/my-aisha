// Generates a high-resolution, print-ready 1200x1600 royal keepsake PNG image
// 100% client-side, zero external dependency, instant download.

export function downloadKeepsakePNG(): Promise<boolean> {
  return new Promise((resolve) => {
    try {
      const width = 1200;
      const height = 1600;

      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext("2d");
      if (!ctx) {
        resolve(false);
        return;
      }

      // 1. Luxurious Deep Plum Background
      const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
      bgGrad.addColorStop(0, "#160b24");
      bgGrad.addColorStop(0.5, "#25103a");
      bgGrad.addColorStop(1, "#10061a");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // 2. Double Golden Hairline Frame
      ctx.strokeStyle = "rgba(212, 175, 55, 0.6)";
      ctx.lineWidth = 3;
      ctx.strokeRect(50, 50, width - 100, height - 100);

      ctx.strokeStyle = "rgba(212, 175, 55, 0.25)";
      ctx.lineWidth = 1;
      ctx.strokeRect(62, 62, width - 124, height - 124);

      // Corner Accents
      const drawCorner = (x: number, y: number, rot: number) => {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(rot);
        ctx.fillStyle = "#d4af37";
        ctx.fillRect(-15, -2, 30, 4);
        ctx.fillRect(-2, -15, 4, 30);
        ctx.beginPath();
        ctx.arc(0, 0, 6, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      };

      drawCorner(50, 50, 0);
      drawCorner(width - 50, 50, Math.PI / 2);
      drawCorner(width - 50, height - 50, Math.PI);
      drawCorner(50, height - 50, -Math.PI / 2);

      // 3. Top Royal Header
      ctx.textAlign = "center";
      ctx.fillStyle = "#d4af37";
      ctx.font = "bold 16px 'Cinzel', 'Montserrat', sans-serif";
      ctx.letterSpacing = "0.22em";
      ctx.fillText("✦ ROYAL IMPERIAL BIRTHDAY PROCLAMATION ✦", width / 2, 120);

      // Sub-date
      ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
      ctx.font = "14px 'Montserrat', sans-serif";
      ctx.letterSpacing = "0.18em";
      ctx.fillText("23RD SEPTEMBER 2026 • 15 OF 15 ENVELOPES COMPLETED", width / 2, 150);

      // 4. Crown Icon
      ctx.font = "72px serif";
      ctx.fillText("👑", width / 2, 250);

      // 5. Main Royal Title
      ctx.fillStyle = "#fef3c7";
      ctx.font = "bold 44px 'Cormorant Garamond', Georgia, serif";
      ctx.letterSpacing = "0.04em";
      ctx.fillText("HAPPY BIRTHDAY, PRINCESS AISHA", width / 2, 330);

      // Recipient Name
      ctx.fillStyle = "#fbcfe8";
      ctx.font = "italic 36px 'Cormorant Garamond', Georgia, serif";
      ctx.fillText("Doctor Aisha Sahiba ✨", width / 2, 385);

      // Divider line
      ctx.strokeStyle = "rgba(212, 175, 55, 0.4)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(width / 2 - 180, 420);
      ctx.lineTo(width / 2 + 180, 420);
      ctx.stroke();

      // 6. Central Poetic Epigraph
      ctx.fillStyle = "#fdf2f8";
      ctx.font = "italic 26px 'EB Garamond', Garamond, Georgia, serif";
      ctx.fillText("“Today isn't just another day…", width / 2, 475);
      ctx.fillText("it's the day the world got a little more beautiful. 🌷✨”", width / 2, 515);

      // 7. Keepsake Parchment Box
      const boxX = 110;
      const boxY = 570;
      const boxW = width - 220;
      const boxH = 750;

      ctx.fillStyle = "rgba(10, 5, 18, 0.65)";
      ctx.fillRect(boxX, boxY, boxW, boxH);
      ctx.strokeStyle = "rgba(212, 175, 55, 0.35)";
      ctx.lineWidth = 1.5;
      ctx.strokeRect(boxX, boxY, boxW, boxH);

      // Letter Header
      ctx.textAlign = "left";
      ctx.fillStyle = "#fde68a";
      ctx.font = "bold 24px 'Cormorant Garamond', Georgia, serif";
      ctx.fillText("Dearest Doctor Aisha Sahiba,", boxX + 40, boxY + 65);

      // Helper function to wrap text
      const wrapText = (text: string, x: number, y: number, maxWidth: number, lineHeight: number) => {
        const words = text.split(" ");
        let line = "";
        for (let n = 0; n < words.length; n++) {
          const testLine = line + words[n] + " ";
          const metrics = ctx.measureText(testLine);
          if (metrics.width > maxWidth && n > 0) {
            ctx.fillText(line, x, y);
            line = words[n] + " ";
            y += lineHeight;
          } else {
            line = testLine;
          }
        }
        ctx.fillText(line, x, y);
        return y + lineHeight;
      };

      ctx.fillStyle = "rgba(253, 242, 248, 0.92)";
      ctx.font = "italic 21px 'EB Garamond', Garamond, Georgia, serif";
      const p1 = "You walk into hospitals with a stethoscope and save lives with your brilliance, but you walk into people's lives and heal them with your unfathomable warmth, grace, and laughter.";
      let nextY = wrapText(p1, boxX + 40, boxY + 125, boxW - 80, 36);

      nextY += 15;
      const p2 = "From the quiet moments of midnight tea to the grandest dreams that you are destined to achieve, you carry a rare royal poise. You deserve a world where your kindness is reciprocated tenfold, your smile never dims, and every single day feels like an enchanted celebration.";
      nextY = wrapText(p2, boxX + 40, nextY, boxW - 80, 36);

      // Divider inside box
      nextY += 25;
      ctx.strokeStyle = "rgba(212, 175, 55, 0.25)";
      ctx.beginPath();
      ctx.moveTo(boxX + 40, nextY);
      ctx.lineTo(boxX + boxW - 40, nextY);
      ctx.stroke();

      // Urdu/Hindi Couplet
      nextY += 50;
      ctx.textAlign = "center";
      ctx.fillStyle = "#fef08a";
      ctx.font = "24px 'Cormorant Garamond', Georgia, serif";
      ctx.fillText("“खुदा करे कि हर खुशी आपके दामन में भर जाए,", width / 2, nextY);
      nextY += 40;
      ctx.fillText("आप मुस्कुराएं तो सारा जहाँ मुनव्वर हो जाए।” 🌷🪷", width / 2, nextY);

      // Sign-off
      nextY += 75;
      ctx.textAlign = "right";
      ctx.fillStyle = "#fbcfe8";
      ctx.font = "italic 26px 'Cormorant Garamond', Georgia, serif";
      ctx.fillText("Always your biggest admirer ✨👑", boxX + boxW - 45, nextY);

      // 8. Bottom Seal & Stamp Footer
      ctx.textAlign = "center";
      ctx.fillStyle = "#f59e0b";
      ctx.font = "32px serif";
      ctx.fillText("🏵️", width / 2, height - 195);

      ctx.fillStyle = "#d4af37";
      ctx.font = "bold 13px 'Cinzel', 'Montserrat', sans-serif";
      ctx.letterSpacing = "0.22em";
      ctx.fillText("CERTIFIED BIRTHDAY PRINCESS • ROYAL DECREE", width / 2, height - 150);

      ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
      ctx.font = "12px 'Montserrat', sans-serif";
      ctx.letterSpacing = "0.18em";
      ctx.fillText("15 ENVELOPES • 15 SURPRISES • ONE BIRTHDAY PRINCESS", width / 2, height - 120);

      // Convert to PNG and Trigger Download
      canvas.toBlob((blob) => {
        if (!blob) {
          resolve(false);
          return;
        }

        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "Doctor_Aisha_Sahiba_Birthday_Keepsake.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        resolve(true);
      }, "image/png");
    } catch {
      resolve(false);
    }
  });
}

