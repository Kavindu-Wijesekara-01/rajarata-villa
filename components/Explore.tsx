'use client';

import React, { useState } from 'react';
import { MapPin, Clock, ArrowUpRight, Compass } from 'lucide-react';
import { ANURADHAPURA_ATTRACTIONS, Attraction, VILLA_CONFIG } from '@/data/villaData';
import AttractionModal from './AttractionModal';

export default function Explore() {
  const [selectedAttraction, setSelectedAttraction] = useState<Attraction | null>(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Sacred Stupa', 'Ancient Wonder', 'Mountain & Lake'];

  const filteredAttractions = ANURADHAPURA_ATTRACTIONS.filter((item) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Sacred Stupa') {
      return item.category.includes('Stupa') || item.category.includes('Living Tree');
    }
    if (activeFilter === 'Ancient Wonder') {
      return item.category.includes('Engineering') || item.category.includes('Monastic') || item.category.includes('Rock');
    }
    if (activeFilter === 'Mountain & Lake') {
      return item.category.includes('Mountain') || item.category.includes('Lake');
    }
    return true;
  });

  return (
    <section id="explore" className="py-16 md:py-24 lg:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F5F2EB] border border-[#C2A374]/30 text-[#8C6D42] text-xs font-semibold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>9 Iconic Heritage Destinations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#1B241E] tracking-tight leading-[1.15] mb-4 sm:mb-6">
            Explore Sacred Anuradhapura
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#465049] font-sans leading-relaxed">
            Positioned in a tranquil haven, Rajarata Villa offers seamless access to Sri Lanka’s ancient sacred kingdom.
            Exact road distances and travel times measured directly from our villa gates ({VILLA_CONFIG.coordinates}).
            Click any destination below to view full details and special highlights.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 sm:mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors cursor-pointer ${activeFilter === cat
                  ? 'bg-[#1B241E] text-[#FBF9F5]'
                  : 'bg-white text-[#465049] hover:bg-[#F5F2EB] border border-[#1B241E]/10'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Explore Grid (3x3 on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredAttractions.map((place) => (
            <div
              key={place.id}
              onClick={() => setSelectedAttraction(place)}
              className="group bg-white rounded-2xl overflow-hidden border border-[#1B241E]/10 shadow-sm hover:shadow-md hover:border-[#C2A374]/60 transition-all duration-200 cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Badges */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#1B241E]">
                  <img
                    src={place.image}
                    alt={place.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20 pointer-events-none" />

                  {/* Distance Pill */}
                  <div className="absolute top-3 left-3 bg-[#1B241E]/90 border border-[#C2A374]/40 text-[#C2A374] px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide flex items-center gap-1 shadow-sm">
                    <MapPin className="w-3 h-3 text-[#C2A374]" />
                    <span>{place.distance} from Villa</span>
                  </div>

                  {/* Drive Time Pill */}
                  <div className="absolute top-3 right-3 bg-black/60 text-white px-2.5 py-1 rounded-full text-[11px] font-medium flex items-center gap-1 border border-white/20">
                    <Clock className="w-3 h-3" />
                    <span>{place.travelTime}</span>
                  </div>

                  {/* Sinhala Subtitle on image */}
                  <div className="absolute bottom-2.5 left-3 text-white/95 text-xs font-medium">
                    {place.sinhalaName}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-serif text-lg sm:text-xl font-medium text-[#1B241E] group-hover:text-[#8C6D42] transition-colors leading-tight">
                      {place.name}
                    </h3>
                    <div className="w-7 h-7 rounded-full bg-[#F5F2EB] flex items-center justify-center shrink-0 group-hover:bg-[#C2A374] group-hover:text-[#1B241E] transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#758077] leading-relaxed line-clamp-2 mb-4">
                    {place.shortDesc}
                  </p>

                  {/* Highlights Snippet */}
                  <div className="space-y-1.5 border-t border-[#1B241E]/10 pt-3">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#8C6D42] block">
                      Key Highlights:
                    </span>
                    <p className="text-xs text-[#2E3630] font-medium truncate flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C2A374] shrink-0"></span>
                      {place.highlights[0]}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="px-5 pb-5 pt-0">
                <span className="inline-flex items-center text-xs font-semibold text-[#8C6D42] group-hover:underline">
                  Click to view distance, highlights &amp; tips &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Clicked Attraction */}
        <AttractionModal
          attraction={selectedAttraction}
          onClose={() => setSelectedAttraction(null)}
        />
      </div>
    </section>
  );
}
