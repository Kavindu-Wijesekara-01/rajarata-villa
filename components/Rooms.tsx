'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Check, Users, Bed, Maximize2, Calendar } from 'lucide-react';
import { VILLA_ROOMS } from '@/data/villaData';

export default function Rooms() {
  const [selectedRoomIndex, setSelectedRoomIndex] = useState(0);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  const currentRoom = VILLA_ROOMS[selectedRoomIndex];

  const handlePrevPhoto = () => {
    setActivePhotoIndex((prev) => (prev === 0 ? currentRoom.gallery.length - 1 : prev - 1));
  };

  const handleNextPhoto = () => {
    setActivePhotoIndex((prev) => (prev === currentRoom.gallery.length - 1 ? 0 : prev + 1));
  };

  const handleRoomSelect = (idx: number) => {
    setSelectedRoomIndex(idx);
    setActivePhotoIndex(0);
  };

  return (
    <section id="suites" className="py-16 md:py-24 lg:py-28 bg-[#F5F2EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8C6D42] mb-3 block">
            Artisanal Sri Lankan Living
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#1B241E] tracking-tight leading-[1.15] mb-4 sm:mb-6">
            Suites &amp; Sanctuary Options
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#465049] font-sans leading-relaxed">
            Constructed with handcrafted solid timber, cool tile finishes, high ceilings, and panoramic windows facing our serene paddy gardens.
          </p>
        </div>

        {/* Room Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-12">
          {VILLA_ROOMS.map((room, idx) => {
            const isActive = idx === selectedRoomIndex;
            return (
              <button
                key={room.id}
                type="button"
                onClick={() => handleRoomSelect(idx)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-[#1B241E] text-[#FBF9F5] shadow-sm'
                    : 'bg-white text-[#465049] hover:bg-[#F5F2EB] border border-[#1B241E]/10'
                }`}
              >
                <span>{room.name}</span>
                {idx === 2 && (
                  <span className="bg-[#C2A374] text-[10px] text-[#1B241E] font-bold px-2 py-0.5 rounded-full font-sans uppercase">
                    Exclusive
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Room Card Showcase */}
        <div className="bg-white rounded-3xl overflow-hidden p-4 sm:p-8 lg:p-10 border border-[#1B241E]/10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
            {/* Gallery Column (7 cols) */}
            <div className="lg:col-span-7 space-y-3 sm:space-y-4">
              {/* Main Active Image with arrows */}
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#1B241E] group border border-[#1B241E]/10 shadow-sm">
                <img
                  src={currentRoom.gallery[activePhotoIndex]}
                  alt={`${currentRoom.name} photo ${activePhotoIndex + 1}`}
                  className="w-full h-full object-cover transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/15 pointer-events-none" />

                {/* Counter Badge */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-black/70 text-[#FBF9F5] px-3 py-1 rounded-full text-[11px] sm:text-xs font-medium border border-white/15 pointer-events-none shadow-sm">
                  {activePhotoIndex + 1} / {currentRoom.gallery.length}
                </div>

                {/* Prev / Next Arrows */}
                <button
                  type="button"
                  onClick={handlePrevPhoto}
                  aria-label="Previous photo"
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-all cursor-pointer border border-white/20 shadow-md"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={handleNextPhoto}
                  aria-label="Next photo"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-all cursor-pointer border border-white/20 shadow-md"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Thumbnails Row */}
              <div className="grid grid-cols-4 gap-2 sm:gap-3">
                {currentRoom.gallery.map((thumb, idx) => {
                  const isThumbActive = idx === activePhotoIndex;
                  return (
                    <button
                      key={thumb + idx}
                      type="button"
                      onClick={() => setActivePhotoIndex(idx)}
                      className={`relative rounded-xl overflow-hidden aspect-[4/3] bg-[#F5F2EB] group cursor-pointer transition-all text-left focus:outline-none ${
                        isThumbActive
                          ? 'ring-2 ring-[#C2A374] ring-offset-2 ring-offset-white shadow-sm'
                          : 'border border-[#1B241E]/10 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={thumb}
                        alt={`${currentRoom.name} thumbnail ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Room Details Column (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
              <div>
                <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#8C6D42] block mb-1">
                  {currentRoom.subtitle}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#1B241E] font-medium leading-snug">
                  {currentRoom.name}
                </h3>

                <p className="text-sm text-[#465049] leading-relaxed mt-3 mb-6">
                  {currentRoom.description}
                </p>

                {/* Specs Quick Pill Bar */}
                <div className="grid grid-cols-3 gap-2 py-3 px-3.5 rounded-2xl bg-[#F5F2EB] border border-[#1B241E]/10 mb-6">
                  <div className="flex flex-col items-center text-center">
                    <Users className="w-4 h-4 text-[#8C6D42] mb-1" />
                    <span className="text-[10px] text-[#758077] uppercase tracking-wider">Capacity</span>
                    <span className="text-xs font-semibold text-[#1B241E]">{currentRoom.capacity}</span>
                  </div>
                  <div className="flex flex-col items-center text-center border-x border-[#1B241E]/10">
                    <Bed className="w-4 h-4 text-[#8C6D42] mb-1" />
                    <span className="text-[10px] text-[#758077] uppercase tracking-wider">Bed Setup</span>
                    <span className="text-xs font-semibold text-[#1B241E] truncate max-w-[90px]">
                      {currentRoom.bedType}
                    </span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <Maximize2 className="w-4 h-4 text-[#8C6D42] mb-1" />
                    <span className="text-[10px] text-[#758077] uppercase tracking-wider">Space</span>
                    <span className="text-xs font-semibold text-[#1B241E]">{currentRoom.size}</span>
                  </div>
                </div>

                {/* Amenities List */}
                <div className="space-y-2 mb-8">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1B241E]">
                    Included Features:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                    {currentRoom.amenities.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs text-[#465049]">
                        <div className="w-4 h-4 rounded-full bg-[#F5F2EB] flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5 text-[#8C6D42]" />
                        </div>
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Price & Booking CTA */}
              <div className="pt-6 border-t border-[#1B241E]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#758077] block">
                    Starting from
                  </span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-2xl sm:text-3xl font-bold font-serif text-[#1B241E]">
                      ${currentRoom.priceUSD}
                    </span>
                    <span className="text-xs text-[#758077]">/ night</span>
                    <span className="text-xs font-medium text-[#8C6D42] ml-2">
                      (approx. LKR {currentRoom.priceLKR.toLocaleString()})
                    </span>
                  </div>
                </div>

                <Link
                  href={`/booking?room=${currentRoom.id}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#C2A374] hover:bg-[#AF8C5A] text-[#1B241E] text-xs sm:text-sm font-semibold tracking-wide shadow-sm transition-colors"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Reserve Suite</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
