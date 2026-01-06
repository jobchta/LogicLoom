'use client';

import { FC } from 'react';

interface HeroSectionProps {
  mousePos: { x: number; y: number };
}

export const HeroSection: FC<HeroSectionProps> = ({ mousePos }) => {
  return (
    <section className="hero-section" aria-label="Hero section">
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="badge-container mb-8 flex justify-center">
          <div className="ai-badge flex items-center gap-2 px-4 py-2 rounded-full border border-rose-500/20 bg-rose-500/5">
            <span className="w-2 h-2 bg-rose-400 rounded-full animate-pulse"></span>
            <span className="text-sm text-rose-400">AI-Powered Creator OS</span>
            <span className="ml-1">→</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="text-white">Your creator</span>
          <br />
          <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            empire awaits
          </span>
        </h1>

        <p className="text-gray-400 text-xl md:text-2xl max-w-2xl mx-auto mb-8 leading-relaxed">
          The operating system that turns content creators into <span className="text-emerald-400 font-semibold">thriving businesses</span>. Analytics. Deals. Calendar. All in one.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button className="px-8 py-3 bg-emerald-400 text-bg font-semibold rounded-lg hover:bg-emerald-500 transition-colors flex items-center gap-2">
            <span>🚀</span>
            <span>Launch your empire</span>
          </button>
          <button className="px-8 py-3 border border-gray-700 text-gray-300 font-semibold rounded-lg hover:border-gray-600 hover:bg-gray-900/50 transition-colors flex items-center gap-2">
            <span>▶</span>
            <span>Free tools</span>
          </button>
        </div>

        <div className="flex items-center justify-center gap-4 flex-wrap">
          <div className="flex">
            {['A', 'B', 'C', 'D', 'E'].map((letter, i) => (
              <div
                key={letter}
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm -ml-2 first:ml-0 border-2 border-bg
                  ${['bg-rose-400', 'bg-emerald-400', 'bg-amber-400', 'bg-blue-400', 'bg-green-400'][i]}
                `}
              >
                {letter}
              </div>
            ))}
          </div>
          <span className="text-gray-400">
            <span className="font-semibold text-white">12,000+</span> Active creators
          </span>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <span key={star} className="text-2xl">⭐</span>
          ))}
          <span className="text-gray-400"><span className="text-white font-semibold">4.9</span>/5 rating</span>
        </div>
      </div>
    </section>
  );
};
