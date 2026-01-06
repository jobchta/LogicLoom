'use client';

import { FC } from 'react';

interface HeroSectionProps {
  mousePos: { x: number; y: number };
}

export const HeroSection: FC<HeroSectionProps> = ({ mousePos }) => {
  return (
    <section className="hero-section py-32 relative" aria-label="Hero section">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Badge */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-rose-500/30 bg-rose-500/10 backdrop-blur-sm">
            <span className="w-2 h-2 bg-rose-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-rose-300">🚀 AI-Powered Creator OS</span>
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-8">
          <h1 className="text-6xl md:text-7xl font-bold mb-4 leading-tight">
            <span className="block text-white mb-2">Your creator</span>
            <span className="block bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">empire awaits</span>
          </h1>
        </div>

        {/* Description */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            The operating system that turns content creators into <span className="text-emerald-400 font-semibold">thriving businesses</span>. Analytics. Deals. Calendar. All in one.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button className="px-8 py-4 bg-gradient-to-r from-emerald-400 to-teal-400 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-emerald-500/50 transition-all hover:scale-105">
            🚀 Launch your empire
          </button>
          <button className="px-8 py-4 border border-gray-600 text-gray-200 font-semibold rounded-lg hover:border-gray-500 hover:bg-white/5 transition-colors">
            ▶ Free tools
          </button>
        </div>

        {/* Stats Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 flex-wrap">
          {/* Users */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {['#ff6b6b', '#10b981', '#ffc857', '#22d3ee', '#f43f5e'].map((color, i) => (
                <div key={i} className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold border-2 border-slate-900" style={{backgroundColor: color}}>
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            <div>
              <div className="text-white font-bold text-lg">12,000+</div>
              <div className="text-gray-400 text-sm">Active creators</div>
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-3">
            <div className="flex gap-1 text-2xl">★★★★★</div>
            <div>
              <div className="text-white font-bold text-lg">4.9/5</div>
              <div className="text-gray-400 text-sm">Average rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
