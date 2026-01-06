'use client';

import Link from 'next/link';
import { FC } from 'react';
import { Menu, X, Sparkles, ArrowRight } from 'lucide-react';

interface NavigationProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  onNavigate: () => void;
}

export const Navigation: FC<NavigationProps> = ({
  mobileMenuOpen,
  setMobileMenuOpen,
  onNavigate,
}) => {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-white/3 border-b border-white/8 backdrop-blur-20"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 sm:gap-3 group hover:opacity-80 transition-opacity"
          aria-label="LogicLoom home"
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#ff6b6b] via-[#ffc857] to-[#00d9c0] flex items-center justify-center shadow-lg">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-white" aria-hidden="true" />
          </div>
          <span className="text-lg sm:text-xl font-bold text-white">LogicLoom</span>
        </Link>

        <div className="hidden lg:flex items-center gap-10">
          <Link href="#features" className="link-animated text-sm font-medium" onClick={onNavigate}>
            Features
          </Link>
          <Link href="/tools/rate-calculator" className="link-animated text-sm font-medium" onClick={onNavigate}>
            Tools
          </Link>
          <Link href="#testimonials" className="link-animated text-sm font-medium" onClick={onNavigate}>
            Testimonials
          </Link>
        </div>

        <div className="hidden sm:flex items-center gap-4">
          <Link href="/dashboard" className="text-sm font-medium text-white/60 hover:text-white transition-colors">
            Sign in
          </Link>
          <Link href="/dashboard" className="btn-teal btn-shimmer text-sm !py-2.5 !px-5">
            Start free
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

        <button
          className="sm:hidden p-2 text-white/70 hover:text-white transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="sm:hidden bg-white/3 border-t border-white/8 py-4 px-4">
          <div className="flex flex-col gap-4">
            <Link href="#features" className="text-white/70 hover:text-white py-2" onClick={onNavigate}>
              Features
            </Link>
            <Link href="/tools/rate-calculator" className="text-white/70 hover:text-white py-2" onClick={onNavigate}>
              Tools
            </Link>
            <Link href="#testimonials" className="text-white/70 hover:text-white py-2" onClick={onNavigate}>
              Testimonials
            </Link>
            <div className="border-t border-white/10 pt-4 mt-2 flex flex-col gap-3">
              <Link href="/dashboard" className="text-white/70 hover:text-white py-2 text-center" onClick={onNavigate}>
                Sign in
              </Link>
              <Link href="/dashboard" className="btn-teal btn-shimmer text-sm !py-3 !px-5 justify-center" onClick={onNavigate}>
                Start free
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
