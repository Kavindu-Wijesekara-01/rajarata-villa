'use client';

import React, { useState, useEffect, useRef } from 'react';

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [displayValues, setDisplayValues] = useState({
    distance: 0,
    charger: 0,
    rating: 0,
    peace: 0,
  });

  useEffect(() => {
    setIsMounted(true);

    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -30px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Smooth count-up animation when section scrolls into view
  useEffect(() => {
    if (!isVisible) return;

    const duration = 1800; // 1.8s luxury easing
    let startTime: number | null = null;
    let animationFrameId: number;

    const easeOutQuart = (x: number): number => 1 - Math.pow(1 - x, 4);

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = easeOutQuart(progress);

      setDisplayValues({
        distance: Number((3.5 * eased).toFixed(1)),
        charger: Math.round(22 * eased),
        rating: Number((4.95 * eased).toFixed(2)),
        peace: Math.round(100 * eased),
      });

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setDisplayValues({
          distance: 3.5,
          charger: 22,
          rating: 4.95,
          peace: 100,
        });
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isVisible]);

  const stats = [
    {
      id: 'ruwanwelisaya',
      value: isMounted && isVisible ? displayValues.distance.toFixed(1) : (isMounted ? '0.0' : '3.5'),
      unit: 'KM',
      label: 'To Ruwanwelisaya',
    },
    {
      id: 'charger',
      value: isMounted && isVisible ? displayValues.charger.toString() : (isMounted ? '0' : '22'),
      unit: 'KW',
      label: 'Solar EV Charger',
    },
    {
      id: 'rating',
      value: isMounted && isVisible ? displayValues.rating.toFixed(2) : (isMounted ? '0.00' : '4.95'),
      unit: '★',
      isStar: true,
      label: 'Guest Rating',
    },
    {
      id: 'peace',
      value: isMounted && isVisible ? displayValues.peace.toString() : (isMounted ? '0' : '100'),
      unit: '%',
      label: 'Paddy-Facing Peace',
    },
  ];

  return (
    <section
      ref={sectionRef}
      aria-label="Villa statistics"
      className="relative z-30 -mt-7 sm:-mt-12 lg:-mt-16 px-3 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto">
        {/* Luxury Modern Card with Scroll-Triggered Entrance Animation */}
        <div
          className={`relative group bg-[#FFFDF9]/95 backdrop-blur-md rounded-2xl sm:rounded-[28px] lg:rounded-[32px] border border-[#D4AF37]/35 shadow-[0_20px_50px_rgba(20,27,22,0.07),0_0_25px_rgba(212,175,55,0.08)] p-3 sm:p-6 lg:p-7 transition-all duration-700 ease-out hover:shadow-[0_24px_60px_rgba(20,27,22,0.1),0_0_35px_rgba(212,175,55,0.14)] ${
            isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-[0.98]'
          }`}
        >
          {/* Top Gold Shimmer Trim with Pulsing Glow on Reveal */}
          <div
            className={`absolute top-0 left-6 right-6 sm:left-14 sm:right-14 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37]/90 to-transparent rounded-full pointer-events-none transition-opacity duration-1000 ${
              isVisible ? 'opacity-100 shadow-[0_0_12px_rgba(212,175,55,0.8)]' : 'opacity-0'
            }`}
          />

          {/* Responsive Grid: 2x2 on Mobile, 4-column row on Tablet and Desktop */}
          <div className="grid grid-cols-2 sm:grid-cols-4">
            {stats.map((stat, idx) => {
              const isFirstRowMobile = idx < 2;
              const isLeftColMobile = idx % 2 === 0;
              const isLastDesktop = idx === stats.length - 1;

              return (
                <div
                  key={stat.label}
                  style={{ transitionDelay: `${idx * 120 + 100}ms` }}
                  className={`group/item flex flex-col items-center justify-center text-center py-3.5 sm:py-3 px-2 sm:px-4 lg:px-6 rounded-xl transition-all duration-500 ease-out hover:bg-[#FDF9F0]/70 border-[#EADECA] ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }
                    ${isFirstRowMobile ? 'border-b sm:border-b-0' : ''}
                    ${isLeftColMobile ? 'border-r sm:border-r-0' : ''}
                    ${!isLastDesktop ? 'sm:border-r' : ''}
                  `}
                >
                  {/* Stat Number & Unit */}
                  <div className="flex items-baseline justify-center gap-0.5 sm:gap-1">
                    <span className="font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-[46px] font-normal text-[#122117] tracking-tight leading-none group-hover/item:text-[#8C6D42] transition-colors tabular-nums">
                      {stat.value}
                    </span>
                    {stat.isStar ? (
                      <span className={`text-[#D4AF37] text-base xs:text-lg sm:text-2xl lg:text-3xl self-baseline leading-none drop-shadow-[0_0_8px_rgba(212,175,55,0.45)] transition-transform duration-500 ${
                        isVisible ? 'scale-100 rotate-0' : 'scale-50 -rotate-12'
                      }`}>
                        ★
                      </span>
                    ) : (
                      <span className="font-serif text-xs xs:text-sm sm:text-base lg:text-lg font-semibold text-[#C2A374] tracking-wider self-baseline">
                        {stat.unit}
                      </span>
                    )}
                  </div>

                  {/* Clean Primary Label */}
                  <h3 className="font-sans font-semibold text-xs xs:text-[13px] sm:text-sm lg:text-[15px] text-[#1D2B22] tracking-tight mt-1.5 sm:mt-2.5 leading-snug">
                    {stat.label}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
