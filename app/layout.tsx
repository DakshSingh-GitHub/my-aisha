import type { Metadata } from "next";
import "./globals.css";
import { AppProvider } from "./context/AppContext";

export const metadata: Metadata = {
  title: "15 Envelopes. 15 Surprises. One Birthday Princess. — Doctor Aisha Sahiba",
  description: "A premium, romantic, elegant and cinematic interactive birthday surprise dedicated to Doctor Aisha Sahiba.",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👑</text></svg>",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased dark selection:bg-rose-500/30 selection:text-amber-200">
      <body className="min-h-full flex flex-col font-sans bg-[#0c0714] text-rose-50 overflow-x-hidden">
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
