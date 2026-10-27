'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  Zap,
  Sprout,
  Utensils,
  Wifi,
  ShieldCheck,
  ShowerHead,
  Compass,
  CheckCircle2,
  Car,
  Sun,
  Sparkles
} from 'lucide-react';
import { VILLA_AMENITIES } from '@/data/villaData';

export default function Features() {
  const evSectionRef = useRef<HTMLDivElement>(null);
  const gaugeCardRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const handleScroll = () => {
      const targetEl = gaugeCardRef.current || evSectionRef.current;
      if (!targetEl) return;

      const rect = targetEl.getBoundingClientRect();
      const windowHeight = window.innerHeight || 800;

      // Start progressing when gauge card enters viewport from bottom
      const startY = windowHeight * 0.95;
      // Reach 100% when gauge card reaches the upper-middle reading position
      const endY = windowHeight * 0.38;

      const rawProgress = (startY - rect.top) / (startY - endY);
      const clamped = Math.min(Math.max(rawProgress, 0), 1);
      setScrollProgress(clamped);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const iconMap: Record<string, React.ReactNode> = {
    Palmtree: <Sprout className="w-5 h-5 text-[#C2A374] stroke-[1.9]" />,
    Sprout: <Sprout className="w-5 h-5 text-[#C2A374] stroke-[1.9]" />,
    Utensils: <Utensils className="w-5 h-5 text-[#C2A374] stroke-[1.9]" />,
    Wifi: <Wifi className="w-5 h-5 text-[#C2A374] stroke-[1.9]" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-[#C2A374] stroke-[1.9]" />,
    ShowerHead: <ShowerHead className="w-5 h-5 text-[#C2A374] stroke-[1.9]" />,
    Compass: <Compass className="w-5 h-5 text-[#C2A374] stroke-[1.9]" />,
    Sparkles: <Sparkles className="w-5 h-5 text-[#C2A374] stroke-[1.9]" />,
  };

  return (
    <section id="features" className="relative">
      {/* 1. TOP SPOTLIGHT: EV RAPID CHARGING STATION (Premium Gold Luxury Sanctuary) */}
      <div 
        ref={evSectionRef}
        className="relative bg-[#0A0908] text-white py-16 md:py-24 overflow-hidden"
      >
        {/* Luxury Gold Concentric Ripples & Ambient Background */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          {/* Subtle Radial Glows */}
          <div 
            className="absolute -top-[10%] -right-[5%] w-[800px] h-[800px] rounded-full opacity-60 blur-3xl pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(212,175,55,0.08) 0%, rgba(194,163,116,0.03) 45%, transparent 70%)'
            }}
          />
          <div 
            className="absolute -bottom-[15%] -left-[10%] w-[650px] h-[650px] rounded-full opacity-40 blur-3xl pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(212,175,55,0.06) 0%, rgba(194,163,116,0.02) 50%, transparent 70%)'
            }}
          />

          {/* SVG Concentric Gold Circular Ripples matching Reference Image */}
          <svg 
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1440 680"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Subtle luxury stardust dot grid */}
              <pattern id="goldDotsPattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="0.75" fill="#D4AF37" fillOpacity="0.14" />
                <circle cx="22" cy="22" r="0.5" fill="#E5C07B" fillOpacity="0.08" />
              </pattern>
            </defs>

            {/* Subtle stardust dot grid fill */}
            <rect width="100%" height="100%" fill="url(#goldDotsPattern)" />

            {/* Top-Right Concentric Circles (Focal Point behind right cards) */}
            <g transform="translate(1120, 150)">
              <circle cx="0" cy="0" r="90" fill="none" stroke="#D4AF37" strokeOpacity="0.22" strokeWidth="1.2" strokeDasharray="3 3" />
              <circle cx="0" cy="0" r="170" fill="none" stroke="#D4AF37" strokeOpacity="0.18" strokeWidth="1" />
              <circle cx="0" cy="0" r="270" fill="none" stroke="#D4AF37" strokeOpacity="0.14" strokeWidth="1.2" />
              <circle cx="0" cy="0" r="390" fill="none" stroke="#D4AF37" strokeOpacity="0.11" strokeWidth="1" />
              <circle cx="0" cy="0" r="530" fill="none" stroke="#D4AF37" strokeOpacity="0.08" strokeWidth="1.2" />
              <circle cx="0" cy="0" r="690" fill="none" stroke="#D4AF37" strokeOpacity="0.06" strokeWidth="1" />
              <circle cx="0" cy="0" r="870" fill="none" stroke="#D4AF37" strokeOpacity="0.04" strokeWidth="1.2" />
              <circle cx="0" cy="0" r="1070" fill="none" stroke="#D4AF37" strokeOpacity="0.03" strokeWidth="1" />
              <circle cx="0" cy="0" r="1290" fill="none" stroke="#D4AF37" strokeOpacity="0.02" strokeWidth="1" />
            </g>

            {/* Bottom-Left Concentric Circles */}
            <g transform="translate(120, 580)">
              <circle cx="0" cy="0" r="110" fill="none" stroke="#D4AF37" strokeOpacity="0.18" strokeWidth="1" />
              <circle cx="0" cy="0" r="210" fill="none" stroke="#D4AF37" strokeOpacity="0.13" strokeWidth="1.1" />
              <circle cx="0" cy="0" r="330" fill="none" stroke="#D4AF37" strokeOpacity="0.09" strokeWidth="1" />
              <circle cx="0" cy="0" r="470" fill="none" stroke="#D4AF37" strokeOpacity="0.06" strokeWidth="1.1" />
              <circle cx="0" cy="0" r="630" fill="none" stroke="#D4AF37" strokeOpacity="0.04" strokeWidth="1" />
            </g>
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              {/* Solar Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181510] border border-[#3E3423] text-[#E5C07B] text-xs font-medium tracking-wide shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#E5C07B] shadow-[0_0_8px_rgba(229,192,123,0.8)]" />
                <span>Solar powered &bull; Dedicated charger bay</span>
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-normal text-[#FBF9F5] tracking-tight leading-[1.18] pt-1">
                Electric vehicle rapid charging station
              </h2>

              {/* Subtitle */}
              <p className="text-sm sm:text-base text-[#D4AF37] font-normal tracking-wide">
                Dedicated Solar EV Charging Facility &bull; 22 kW Level 2 Fast AC
              </p>

              {/* Description */}
              <p className="text-[#A39E93] text-sm sm:text-base leading-relaxed max-w-xl">
                Drive in from Colombo, Kandy or Jaffna without worrying about range. Park in our covered, gated courtyard, plug in for the night and wake up to a full battery, ready to explore Anuradhapura.
              </p>

              {/* 2x2 Feature Box Grid */}
              <div className="rounded-2xl border border-[#2D261C] bg-[#14120F]/90 backdrop-blur-sm p-4 sm:p-5 mt-4 shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4 border-b border-[#262016]">
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#E6E1D8]">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span>Universal Type 2 connector</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#E6E1D8]">
                    <Sun className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span>100% rooftop solar energy</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#E6E1D8]">
                    <Car className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span>BYD, Tesla, Hyundai, Nissan &amp; PHEVs</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#E6E1D8]">
                    <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span>Gated bay with 24/7 CCTV</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              {/* Top Card: Circular Dial & Hook */}
              <div 
                ref={gaugeCardRef}
                className="bg-[#14120F]/90 border border-[#2D261C] rounded-3xl p-6 sm:p-7 flex items-center gap-5 sm:gap-6 mb-5 shadow-[0_12px_32px_rgba(0,0,0,0.4)] backdrop-blur-sm"
              >
                {/* Circular Gauge Meter with Scroll-Driven Animated Gold Progress Bar */}
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center shrink-0">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <defs>
                      <linearGradient id="evGoldGaugeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FFF3D1" />
                        <stop offset="35%" stopColor="#E5C07B" />
                        <stop offset="70%" stopColor="#C5A059" />
                        <stop offset="100%" stopColor="#8A672C" />
                      </linearGradient>
                      <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#D4AF37" floodOpacity="0.4" />
                      </filter>
                    </defs>

                    {/* Dark Background Track */}
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="#221C14"
                      strokeWidth="6.5"
                      fill="none"
                    />

                    {/* Scroll-Driven Gold Progress Bar Border */}
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="url(#evGoldGaugeGrad)"
                      strokeWidth="6.5"
                      fill="none"
                      strokeDasharray="251.32"
                      strokeDashoffset={isMounted ? 251.32 - (251.32 - 38) * scrollProgress : 38}
                      strokeLinecap="round"
                      filter="url(#goldGlow)"
                      className="transition-[stroke-dashoffset] duration-200 ease-out"
                      style={{
                        animation: scrollProgress >= 0.95 
                          ? 'evPulseGlow 3s ease-in-out infinite alternate' 
                          : 'none'
                      }}
                    />
                  </svg>
                  
                  {/* Gauge Center Text with Dynamic Scroll-Linked kW Value */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center select-none">
                    <span className="font-serif text-2xl sm:text-3xl font-medium text-white leading-none">
                      {isMounted ? Math.round(scrollProgress * 22) : 22}
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-sans font-semibold text-[#A39E93] uppercase tracking-wider mt-1">
                      kW AC
                    </span>
                  </div>
                </div>

                {/* Hook text */}
                <div>
                  <h3 className="font-semibold text-white text-base sm:text-lg leading-snug mb-1.5">
                    Plug in at night. Leave with a full battery.
                  </h3>
                  <p className="text-[#9E988D] text-xs sm:text-sm leading-relaxed">
                    Overnight charging is free for in-house guests.
                  </p>
                </div>
              </div>

              {/* Bottom Card: Technical Specifications Table */}
              <div className="bg-[#14120F]/90 border border-[#2D261C] rounded-3xl p-6 sm:p-7 divide-y divide-[#241F16] shadow-[0_12px_32px_rgba(0,0,0,0.4)] backdrop-blur-sm">
                <div className="flex items-center justify-between pb-3.5 sm:pb-4">
                  <span className="text-xs sm:text-sm text-[#8E887D]">Charger output</span>
                  <span className="text-xs sm:text-sm font-medium text-white">Up to 22 kW AC fast</span>
                </div>
                <div className="flex items-center justify-between py-3.5 sm:py-4">
                  <span className="text-xs sm:text-sm text-[#8E887D]">Plug type</span>
                  <span className="text-xs sm:text-sm font-medium text-white">Type 2 (Mennekes)</span>
                </div>
                <div className="flex items-center justify-between py-3.5 sm:py-4">
                  <span className="text-xs sm:text-sm text-[#8E887D]">Energy source</span>
                  <span className="text-xs sm:text-sm font-medium text-white">Solar PV + grid backup</span>
                </div>
                <div className="flex items-center justify-between pt-3.5 sm:pt-4">
                  <span className="text-xs sm:text-sm text-[#8E887D]">Guest rate</span>
                  <span className="text-xs sm:text-sm font-semibold text-[#E5C07B]">Complimentary overnight</span>
                </div>
              </div>

              {/* Bottom Note */}
              <p className="text-[#7E7970] text-xs sm:text-sm mt-5 text-center lg:text-left">
                Tell us when you book or check in and we will reserve the EV bay for your vehicle.
              </p>
            </div>
          </div>
        </div>

        {/* CSS Keyframes for subtle pulsing glow on the progress bar */}
        <style jsx>{`
          @keyframes evPulseGlow {
            0% {
              filter: drop-shadow(0 0 4px rgba(229, 192, 123, 0.35));
            }
            100% {
              filter: drop-shadow(0 0 11px rgba(212, 175, 55, 0.7));
            }
          }
        `}</style>
      </div>

      {/* 2. MORE INCLUDED VILLA AMENITIES (Ivory Luxury Cards - Exact Reference Design 2) */}
      <div className="bg-[#FAF8F5] py-20 sm:py-24 lg:py-28 border-t border-[#EAE3D6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
            <span className="text-xs uppercase tracking-[0.22em] font-semibold text-[#8C6D42] mb-3 block">
              Everyday Comfort &bull; Rajarata Heritage
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#15231B] tracking-tight leading-[1.15]">
              More Included Villa Amenities
            </h2>
          </div>

          {/* Cards Grid - 4 Featured Amenities (Exact Reference Design Matching Uploaded Image) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {VILLA_AMENITIES.slice(1, 5).map((feature) => (
              <div
                key={feature.title}
                className="group relative bg-white rounded-[24px] sm:rounded-[28px] overflow-hidden border border-[#1B241E]/10 shadow-[0_10px_30px_rgba(40,32,20,0.06)] hover:shadow-[0_20px_42px_rgba(40,32,20,0.12)] hover:border-[#C2A374]/50 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                {/* Top Half: Dark Heritage Theme Banner (Sleek Reduced Height) */}
                <div className="relative h-14 sm:h-16 bg-gradient-to-r from-[#121A15] via-[#1B241E] to-[#152219] px-4 sm:px-5 overflow-hidden flex items-center justify-between border-b border-[#C2A374]/25">
                  {/* Subtle Concentric Gold Ripple Waves Overlay */}
                  <svg
                    className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
                    viewBox="0 0 280 64"
                    preserveAspectRatio="none"
                  >
                    <ellipse cx="220" cy="64" rx="160" ry="60" fill="none" stroke="#C2A374" strokeWidth="12" opacity="0.35" />
                    <ellipse cx="220" cy="64" rx="110" ry="42" fill="none" stroke="#C2A374" strokeWidth="10" opacity="0.25" />
                    <ellipse cx="220" cy="64" rx="65" ry="25" fill="none" stroke="#C2A374" strokeWidth="8" opacity="0.2" />
                  </svg>

                  {/* Left: Dark Glass Icon Box */}
                  <div className="relative z-10 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#243128]/90 backdrop-blur-sm border border-[#C2A374]/35 shadow-xs flex items-center justify-center text-[#C2A374] group-hover:scale-105 transition-transform shrink-0">
                    {iconMap[feature.icon] || <Sprout className="w-4 h-4 text-[#C2A374] stroke-[1.9]" />}
                  </div>

                  {/* Right: Gold Glass Pill Badge (when present) */}
                  {feature.badge && (
                    <span className="relative z-10 text-[10px] sm:text-[10.5px] font-sans font-medium text-[#E5C07B] bg-[#C2A374]/15 border border-[#C2A374]/35 backdrop-blur-sm px-2.5 py-0.5 rounded-full shadow-xs whitespace-nowrap">
                      {feature.badge}
                    </span>
                  )}
                </div>

                {/* Bottom Half: Clean Ivory-White Content Area */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-start bg-white">
                  {/* Title */}
                  <h3 className="font-serif text-xl sm:text-[22px] font-normal text-[#17231B] leading-snug tracking-tight mb-3 group-hover:text-[#8C6D42] transition-colors">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-xs sm:text-[13px] text-[#4F5B53] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
