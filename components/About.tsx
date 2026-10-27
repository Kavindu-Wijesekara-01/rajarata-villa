'use client';

import React from 'react';
import { Palmtree, Zap, Utensils, MapPin } from 'lucide-react';
import { VILLA_CONFIG } from '@/data/villaData';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 lg:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8C6D42] mb-3 block">
            Serene Country Living in Anuradhapura
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#1B241E] tracking-tight leading-[1.15] mb-6">
            Where Ancient Heritage Meets Whispering Paddy Fields
          </h2>
          <p className="text-base sm:text-lg text-[#465049] leading-relaxed font-sans">
            Tucked away in a tranquil rural sanctuary in Anuradhapura, Rajarata Villa is crafted for stillness,
            refreshing countryside breezes, and soulful cultural rejuvenation just minutes from sacred stupas.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Image & Host Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-md border border-[#1B241E]/10 aspect-[4/3] group">
              <img
                src="/images/unnamed (4).webp"
                alt="Rajarata Villa veranda view across lush green paddy fields"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 text-[#FAF8F5]">
                <span className="text-xs uppercase tracking-[0.18em] text-[#C2A374] font-semibold block mb-1">
                  Private Veranda View
                </span>
                <p className="text-sm font-serif">Lush Paddy Fields &amp; Gentle Countryside Breezes</p>
              </div>
            </div>

            {/* Floating Host Badge */}
            <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-8 sm:-right-6 sm:w-80 bg-white rounded-2xl p-4 sm:p-5 shadow-lg border border-[#1B241E]/10 z-20">
              <div className="flex items-center gap-3 mb-2.5">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#C2A374] bg-[#1B241E] flex items-center justify-center shrink-0 text-[#C2A374] font-serif font-bold text-sm">
                  RV
                </div>
                <div>
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="text-[10px] font-bold text-[#1B241E] bg-[#F5F2EB] px-1.5 py-0.5 rounded border border-[#1B241E]/10">
                      100%
                    </span>
                    <span className="text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold text-[#8C6D42] block">
                      Local Host Care
                    </span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-semibold text-[#1B241E] font-sans">
                    Warm Sri Lankan Hospitality
                  </h4>
                  <a
                    href={VILLA_CONFIG.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-[#758077] hover:text-[#8C6D42] flex items-center gap-1"
                  >
                    <MapPin className="w-3 h-3 text-[#8C6D42]" />
                    <span>View Map Location</span>
                  </a>
                </div>
              </div>
              <p className="text-xs text-[#465049] leading-relaxed">
                Quiet &amp; intimate nature immersion with personal attention to every detail of your stay.
              </p>
            </div>
          </div>

          {/* Right Column: Narrative & Highlight Cards */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 shadow-sm border border-[#1B241E]/10">
              <h3 className="text-xl sm:text-2xl font-serif font-normal text-[#1B241E] mb-4 leading-snug">
                “A rare haven in Anuradhapura where the rush of the world fades into open paddy horizons and genuine island warmth.”
              </h3>
              <p className="text-sm sm:text-base text-[#465049] leading-relaxed mb-8 font-sans">
                Carefully crafted to reflect Rajarata’s timeless pace of life, the villa pairs the charm of village simplicity with modern comforts: cool air-conditioned bedrooms, hot pressure showers, delicious clay-pot home cooking, and eco-friendly solar EV charging right in our private courtyard.
              </p>

              {/* 3 Pillars / Highlights with Modern Gold Luxury Styling */}
              <div className="relative pt-6 sm:pt-7 border-t border-[#EAE3D6]">
                {/* Subtle Decorative Gold Highlight Accent */}
                <div className="absolute top-0 left-0 w-28 h-[2px] bg-gradient-to-r from-[#C2A374] via-[#D4AF37]/70 to-transparent" />

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4">
                  {/* Pillar 1: Paddy Views */}
                  <div className="group/pillar relative p-4 sm:p-4.5 rounded-2xl bg-[#FAF8F5]/90 hover:bg-white border border-[#EBE3D5] hover:border-[#D4AF37]/60 shadow-[0_4px_14px_rgba(27,36,30,0.03)] hover:shadow-[0_12px_28px_rgba(212,175,55,0.12)] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F5EFE4] to-[#ECE1CE] border border-[#E2D5BE] flex items-center justify-center text-[#7C6138] group-hover/pillar:bg-[#C2A374] group-hover/pillar:text-white group-hover/pillar:scale-105 transition-all duration-300 shadow-sm mb-3">
                        <Palmtree className="w-5 h-5 stroke-[1.9]" />
                      </div>
                      <h5 className="text-xs sm:text-[13px] font-serif font-semibold tracking-wider uppercase text-[#1B241E] group-hover/pillar:text-[#8C6D42] transition-colors">
                        Paddy Views
                      </h5>
                      <p className="text-xs text-[#525E55] leading-relaxed mt-1.5">
                        Step out onto the veranda with views across emerald rice fields and coconut groves.
                      </p>
                    </div>
                  </div>

                  {/* Pillar 2: Solar EV Charger */}
                  <div className="group/pillar relative p-4 sm:p-4.5 rounded-2xl bg-[#FAF8F5]/90 hover:bg-white border border-[#EBE3D5] hover:border-[#D4AF37]/60 shadow-[0_4px_14px_rgba(27,36,30,0.03)] hover:shadow-[0_12px_28px_rgba(212,175,55,0.12)] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F5EFE4] to-[#ECE1CE] border border-[#E2D5BE] flex items-center justify-center text-[#7C6138] group-hover/pillar:bg-[#C2A374] group-hover/pillar:text-white group-hover/pillar:scale-105 transition-all duration-300 shadow-sm mb-3">
                        <Zap className="w-5 h-5 stroke-[1.9]" />
                      </div>
                      <h5 className="text-xs sm:text-[13px] font-serif font-semibold tracking-wider uppercase text-[#1B241E] group-hover/pillar:text-[#8C6D42] transition-colors">
                        Solar EV Charger
                      </h5>
                      <p className="text-xs text-[#525E55] leading-relaxed mt-1.5">
                        22kW Level 2 fast charger powered by our villa solar array. Wake up 100% charged.
                      </p>
                    </div>
                  </div>

                  {/* Pillar 3: Rajarata Dining */}
                  <div className="group/pillar relative p-4 sm:p-4.5 rounded-2xl bg-[#FAF8F5]/90 hover:bg-white border border-[#EBE3D5] hover:border-[#D4AF37]/60 shadow-[0_4px_14px_rgba(27,36,30,0.03)] hover:shadow-[0_12px_28px_rgba(212,175,55,0.12)] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F5EFE4] to-[#ECE1CE] border border-[#E2D5BE] flex items-center justify-center text-[#7C6138] group-hover/pillar:bg-[#C2A374] group-hover/pillar:text-white group-hover/pillar:scale-105 transition-all duration-300 shadow-sm mb-3">
                        <Utensils className="w-5 h-5 stroke-[1.9]" />
                      </div>
                      <h5 className="text-xs sm:text-[13px] font-serif font-semibold tracking-wider uppercase text-[#1B241E] group-hover/pillar:text-[#8C6D42] transition-colors">
                        Rajarata Dining
                      </h5>
                      <p className="text-xs text-[#525E55] leading-relaxed mt-1.5">
                        Stone-ground coconut curries, crisp hoppers, and organic garden produce made fresh.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
