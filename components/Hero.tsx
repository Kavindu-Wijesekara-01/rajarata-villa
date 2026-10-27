'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Calendar, Compass, ArrowRight, MapPin, Zap } from 'lucide-react';
import { VILLA_CONFIG } from '@/data/villaData';

const HERO_SLIDES = [
  {
    image: '/images/unnamed (4).webp',
    title: 'Emerald Paddy Panoramas',
    caption: 'Serene veranda views across endless golden-green rice fields and swaying coconut palms',
  },
  {
    image: '/images/unnamed.webp',
    title: 'Private Villa Sanctuary',
    caption: 'Lush tropical garden grounds surrounded by cool breezes and birdsong in ancient Rajarata',
  },
  {
    image: '/images/unnamed (1).webp',
    title: 'Artisanal Comfort Suites',
    caption: 'Handcrafted timber furnishings, modern air conditioning, and ensuite hot shower bathrooms',
  },
  {
    image: '/images/unnamed (5).webp',
    title: 'Spacious Open Living Hall',
    caption: 'Gather with loved ones in our breezy high-ceiling dining and lounge pavilion',
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsLoaded(true);

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7000);

    const handleScroll = () => {
      // Parallax effect as user scrolls down
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Parallax calculations (fades and glides up smoothly when scrolling down)
  const heroOpacity = Math.max(0, 1 - scrollY / 600);
  const heroTranslateY = scrollY * 0.35; // gentle upward float
  const heroScale = Math.max(0.92, 1 - scrollY / 3000);

  return (
    <section className="relative min-h-[92vh] sm:min-h-[94vh] lg:min-h-[96vh] flex flex-col justify-between bg-[#1B241E] overflow-hidden pb-20 sm:pb-24 lg:pb-28">
      {/* Background Slides (Gentle crossfade with subtle scroll zoom) */}
      <div
        className="absolute inset-0 z-0 will-change-transform"
        style={{
          transform: `scale(${1 + scrollY * 0.0004}) translateY(${scrollY * 0.15}px)`,
        }}
      >
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={slide.title}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center filter brightness-[0.80] contrast-[1.03]"
            />
          </div>
        ))}
        {/* Vignette Overlay */}
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#1B241E] via-black/45 to-black/60 pointer-events-none" />
      </div>

      {/* Hero Central Content with Scroll & Entrance Animation */}
      <div
        className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 md:pt-44 pb-10 text-center my-auto will-change-transform"
        style={{
          opacity: heroOpacity,
          transform: `translate3d(0, ${heroTranslateY}px, 0) scale3d(${heroScale}, ${heroScale}, 1)`,
        }}
      >
        {/* Hero Title */}
        <h1 className="tracking-tight text-white leading-tight mb-4 sm:mb-6 flex flex-col items-center">
          <span
            className={`font-script text-xl sm:text-2xl md:text-3xl font-semibold text-[#E5C07B] mb-2 sm:mb-3 block drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)] tracking-wide transition-all duration-1000 ease-out ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Paddy-View Heritage Eco Sanctuary
          </span>
          <span
            className={`block text-6xl sm:text-8xl md:text-9xl lg:text-9xl font-serif font-bold tracking-normal text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.7)] transition-all duration-1000 delay-150 ease-out ${
              isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
            }`}
          >
            Rajarata
          </span>
          <span
            className={`block font-script text-5xl sm:text-7xl md:text-8xl lg:text-[100px] font-bold text-[#E5C07B] mt-2 sm:mt-3 md:mt-4 drop-shadow-[0_4px_15px_rgba(0,0,0,0.6)] tracking-wide transition-all duration-1000 delay-300 ease-out ${
              isLoaded ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-8 -rotate-2'
            }`}
          >
            Villa
          </span>
        </h1>

        {/* Subtitle Description */}
        <p
          className={`max-w-2xl mx-auto text-xs sm:text-base md:text-lg text-[#FBF9F5]/90 leading-relaxed mb-6 sm:mb-8 font-normal transition-all duration-1000 delay-500 ease-out ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          An intimate, tranquil sanctuary poised beside emerald paddy fields in Anuradhapura.
          Awaken to whispering palms, recharge with 22kW solar EV car charging, and explore
          the timeless sacred kingdom just minutes away.
        </p>

        {/* Action Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-xs sm:max-w-md mx-auto w-full mt-6 sm:mt-8 transition-all duration-1000 delay-700 ease-out ${
            isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-95'
          }`}
        >
          <Link
            href="/booking"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 whitespace-nowrap bg-[#C2A374] hover:bg-[#AF8C5A] text-[#1B241E] font-semibold text-xs sm:text-sm tracking-wide px-6 sm:px-7 py-3 sm:py-3.5 rounded-full transition-all shadow-md group cursor-pointer hover:shadow-[0_8px_25px_rgba(194,163,116,0.35)] hover:-translate-y-0.5 active:translate-y-0"
          >
            <Calendar className="w-4 h-4" />
            <span>Check Availability</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <a
            href="#explore"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 whitespace-nowrap border border-white/40 bg-white/10 text-white hover:bg-white hover:text-[#1B241E] font-medium text-xs sm:text-sm tracking-wide px-6 sm:px-7 py-3 sm:py-3.5 rounded-full transition-all cursor-pointer hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
          >
            <Compass className="w-4 h-4" />
            <span>Explore Explore</span>
          </a>
        </div>
      </div>

      {/* Slide Navigation Dots */}
      <div className="relative z-20 flex flex-col items-center gap-2 pb-6 sm:pb-8">
        <p className="text-[10px] text-white/60 uppercase tracking-widest font-medium">
          {HERO_SLIDES[currentSlide].title}
        </p>
        <div className="flex items-center justify-center gap-2">
          {HERO_SLIDES.map((slide, idx) => (
            <button
              key={slide.title}
              type="button"
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all cursor-pointer ${idx === currentSlide ? 'w-8 bg-[#C2A374]' : 'w-2 bg-white/40 hover:bg-white/70'
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
