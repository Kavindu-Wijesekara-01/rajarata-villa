'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Calendar, MessageCircle, Menu, X, Phone, MapPin, ExternalLink } from 'lucide-react';
import { VILLA_CONFIG } from '@/data/villaData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { name: 'The Suites', href: '#suites' },
    { name: 'Explore', href: '#explore' },
    { name: 'EV & Features', href: '#features' },
    { name: 'Dining', href: '#dining' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Location', href: '#location' },
  ];

  return (
    <>
      <header
        className={`fixed top-2 sm:top-3.5 left-1/2 -translate-x-1/2 z-50 px-2.5 sm:px-4 max-w-[1360px] w-full transition-all duration-300 ${
          isScrolled ? 'scale-[0.98]' : 'scale-100'
        }`}
      >
        <div className="navbar-pill bg-[#121A15] py-2 sm:py-2.5 px-3 sm:px-5 lg:px-6 rounded-full flex items-center justify-between gap-2 sm:gap-3 text-[#FBF9F5]">
          {/* Logo & Brand */}
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-2.5 group shrink-0 min-w-0"
            aria-label="Rajarata Villa Home"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[#C2A374] bg-[#1E2922] overflow-hidden flex items-center justify-center shrink-0 shadow-inner group-hover:border-[#D4B88E] transition-colors">
              <img
                src="/images/logo.jpeg"
                alt="Rajarata Villa Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="min-w-0 flex flex-col justify-center">
              <span className="block font-serif text-[13px] xs:text-[14px] sm:text-base font-medium tracking-tight text-white leading-tight truncate">
                Rajarata Villa
              </span>
              <span className="hidden sm:block text-[8px] xs:text-[8.5px] font-sans uppercase tracking-[0.18em] font-semibold text-[#C2A374] truncate">
                Anuradhapura
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav
            className="hidden lg:flex items-center gap-3 xl:gap-5 2xl:gap-6"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[11px] xl:text-xs uppercase tracking-[0.14em] font-medium transition-colors py-1 whitespace-nowrap text-[#EDE8DF] hover:text-[#C2A374] relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 h-0.5 bg-[#C2A374] transition-all duration-200 w-0 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Reserve Stay Button (Desktop Only) */}
            <Link
              href="/booking"
              className="hidden lg:inline-flex items-center justify-center gap-2 whitespace-nowrap bg-[#C2A374] hover:bg-[#D4B88E] text-[#141C16] font-semibold text-xs lg:text-[13px] tracking-wide px-5 py-2 rounded-full transition-all shadow-sm hover:shadow-md shrink-0 active:scale-95"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Reserve Stay</span>
            </Link>

            {/* Mobile / Tablet Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden inline-flex items-center justify-center w-9 h-9 rounded-full text-white hover:bg-white/10 border border-white/20 focus:outline-none transition-colors"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-[#C2A374]" />
              ) : (
                <Menu className="w-5 h-5 text-white" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu Overlay - High-Contrast Luxury Dark Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#0B110D] text-white flex flex-col justify-between pt-6 pb-8 px-6 sm:px-8 lg:hidden animate-in fade-in duration-200 overflow-y-auto no-scrollbar"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          {/* Top Bar with Logo & Close Button */}
          <div className="flex items-center justify-between border-b border-[#233529] pb-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full border border-[#C2A374] bg-[#1E2922] overflow-hidden flex items-center justify-center shadow-inner">
                <img
                  src="/images/logo.jpeg"
                  alt="Rajarata Villa Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="block font-serif text-base font-medium text-white leading-tight">
                  Rajarata Villa
                </span>
                <span className="block text-[9px] uppercase tracking-[0.2em] font-semibold text-[#C2A374]">
                  Anuradhapura
                </span>
              </div>
            </div>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-9 h-9 rounded-full border border-[#2B3F31] bg-[#141F17] flex items-center justify-center text-[#FBF9F5] hover:text-[#C2A374] active:scale-95 transition-all"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links - Crisp, Legible, High-Contrast */}
          <nav className="flex flex-col py-6 my-auto space-y-1" aria-label="Mobile Navigation Links">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="group py-3 px-3 rounded-xl transition-all duration-200 hover:bg-[#152319] active:bg-[#152319]/80 flex items-center justify-between border-b border-[#1A281E]"
              >
                <span className="font-serif text-xl sm:text-2xl font-normal text-[#F5F2EB] group-hover:text-[#C2A374] transition-colors">
                  {link.name}
                </span>
                <span className="text-[#C2A374] opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-base font-sans">
                  &rarr;
                </span>
              </a>
            ))}
          </nav>

          {/* Bottom Action CTAs inside drawer */}
          <div className="space-y-4 pt-4 border-t border-[#233529]">
            <Link
              href="/booking"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-[#C2A374] hover:bg-[#D4B88E] text-[#121A15] py-3.5 rounded-full font-semibold text-sm shadow-md transition-all active:scale-[0.98]"
            >
              <Calendar className="w-4 h-4" />
              <span>Reserve Your Stay</span>
            </Link>

            {/* Quick Contact Info */}
            <div className="flex items-center justify-center gap-6 text-xs text-[#A1B0A4] pt-1">
              <a
                href={`tel:${VILLA_CONFIG.phone}`}
                className="inline-flex items-center gap-1.5 hover:text-[#C2A374] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#C2A374]" />
                <span>{VILLA_CONFIG.phone}</span>
              </a>
              <span className="text-[#2F4435]">&bull;</span>
              <a
                href={VILLA_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#C2A374] hover:underline"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Directions</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
