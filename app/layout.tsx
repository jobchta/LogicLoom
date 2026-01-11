import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LogicLoom - Creator Business OS",
  description: "The all-in-one business operating system for creators.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 1. Removed 'bg-slate-950' so the CSS 'var(--bg)' takes over.
        2. Added 'overflow-x-hidden' to prevent horizontal scroll from animations.
      */}
      <body className="antialiased overflow-x-hidden">
        {/* GLOBAL BACKGROUND EFFECTS */}
        <div className="aurora" />
        <div className="grain" />

        {/* Global Spotlight effect
          (Optional: connects to mouse movement if you add that logic later,
          but sits nicely as a static glow for now)
        */}
        <div className="spotlight fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 pointer-events-none" />

        {/* Content Wrapper */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
