'use client';

import React from 'react';
import { X, MapPin, Clock, Compass, CheckCircle2, Lightbulb, MessageCircle } from 'lucide-react';
import { Attraction, VILLA_CONFIG } from '@/data/villaData';

interface AttractionModalProps {
  attraction: Attraction | null;
  onClose: () => void;
}

export default function AttractionModal({ attraction, onClose }: AttractionModalProps) {
  if (!attraction) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-white rounded-3xl shadow-2xl border border-[#1B241E]/15">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close attraction details"
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center backdrop-blur-sm transition-all cursor-pointer border border-white/20 shadow-md"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Hero Banner */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden rounded-t-3xl bg-[#1B241E]">
          <img
            src={attraction.image}
            alt={attraction.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1B241E] via-black/35 to-transparent pointer-events-none" />

          {/* Badges on Hero */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-full bg-[#C2A374] text-[#1B241E] text-xs font-bold uppercase tracking-wider shadow-sm">
              {attraction.category}
            </span>
            <span className="px-3 py-1 rounded-full bg-[#1B241E]/90 text-white text-xs font-medium border border-white/20 flex items-center gap-1 shadow-sm">
              <MapPin className="w-3.5 h-3.5 text-[#C2A374]" />
              {attraction.distance} from Rajarata Villa
            </span>
          </div>

          {/* Titles on Bottom of Hero */}
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <span className="text-xs uppercase tracking-widest text-[#C2A374] font-medium block">
              {attraction.category} &bull; Anuradhapura
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold tracking-tight text-white drop-shadow-sm">
              {attraction.name}
            </h3>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="p-5 sm:p-8 space-y-6">
          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-[#F5F2EB] border border-[#1B241E]/10">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white border border-[#1B241E]/10 flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4 text-[#8C6D42]" />
              </div>
              <div>
                <span className="text-[10px] text-[#758077] uppercase font-bold tracking-wider block">
                  Distance
                </span>
                <span className="text-xs sm:text-sm font-semibold text-[#1B241E]">
                  {attraction.distance}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white border border-[#1B241E]/10 flex items-center justify-center shrink-0">
                <Clock className="w-4 h-4 text-[#8C6D42]" />
              </div>
              <div>
                <span className="text-[10px] text-[#758077] uppercase font-bold tracking-wider block">
                  Drive Time
                </span>
                <span className="text-xs sm:text-sm font-semibold text-[#1B241E]">
                  {attraction.travelTime}
                </span>
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white border border-[#1B241E]/10 flex items-center justify-center shrink-0">
                <Compass className="w-4 h-4 text-[#8C6D42]" />
              </div>
              <div>
                <span className="text-[10px] text-[#758077] uppercase font-bold tracking-wider block">
                  Depart From
                </span>
                <span className="text-xs sm:text-sm font-semibold text-[#1B241E]">
                  Villa Doorstep
                </span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#758077] mb-2">
              Overview &amp; History
            </h4>
            <p className="text-sm sm:text-base text-[#2E3630] leading-relaxed">
              {attraction.shortDesc}
            </p>
          </div>

          {/* Specialties & Highlights (Wisheshatha) */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#1B241E] mb-3 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C2A374]"></span>
              Key Highlights &amp; Specialties:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {attraction.highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-[#1B241E]/10"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#8C6D42] shrink-0 mt-0.5" />
                  <span className="text-xs text-[#2E3630] leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Best Time to Visit */}
          <div className="p-4 rounded-2xl bg-[#F5F2EB] border border-[#C2A374]/30">
            <span className="text-xs font-bold uppercase tracking-wider text-[#8C6D42] block mb-1">
              Optimal Visiting Time:
            </span>
            <p className="text-xs sm:text-sm text-[#2E3630] leading-relaxed">
              {attraction.bestTime}
            </p>
          </div>

          {/* Travel Tips & Etiquette */}
          <div className="p-4 rounded-2xl bg-white border border-[#1B241E]/10 flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-[#C2A374] shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#1B241E] block mb-1">
                Local Etiquette &amp; Insider Tips:
              </span>
              <p className="text-xs text-[#758077] leading-relaxed">
                {attraction.travelTips}
              </p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 border-t border-[#1B241E]/10 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-[#758077]">
              Need a guided tuk-tuk, air-conditioned van, or bicycles?
            </p>
            <a
              href={`https://wa.me/${VILLA_CONFIG.whatsapp}?text=Hello%20Rajarata%20Villa!%20I%20am%20interested%20in%20visiting%20${encodeURIComponent(
                attraction.name
              )}%20(${attraction.distance}%20from%20villa).%20Can%20you%20help%20arrange%20this?`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#1B241E] hover:bg-[#26332B] text-white text-xs sm:text-sm font-medium shadow-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Ask Host to Arrange Tour</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
