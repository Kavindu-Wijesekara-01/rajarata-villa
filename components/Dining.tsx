'use client';

import React from 'react';
import { Coffee, Utensils, Soup, Heart } from 'lucide-react';

export default function Dining() {
  const menuHighlights = [
    {
      title: 'Traditional Rajarata breakfast',
      sinhala: 'දේශීය උදෑසන ආහාරය',
      desc: 'Steaming hot string hoppers, coconut milk kiribath (milk rice), spicy lunu miris, fragrant dhal curry and farm eggs cooked to your liking.',
      icon: <Soup className="w-6 h-6 text-[#1A261D] stroke-[1.9]" />,
    },
    {
      title: 'Clay-pot village lunch & dinner',
      sinhala: 'මැටි වළඳේ ගමේ බත් වෑජන',
      desc: 'Local heirloom red rice with 5 seasonal vegetable curries, crisp papadam, tempered lake fish or chicken, and fresh gotukola sambol.',
      icon: <Utensils className="w-6 h-6 text-[#1A261D] stroke-[1.9]" />,
    },
    {
      title: 'Ceylon spiced teas & king coconut',
      sinhala: 'සුවඳැති තේ සහ තැඹිලි',
      desc: 'Freshly plucked king coconut water straight from our garden palms, followed by fragrant ginger Ceylon tea with jaggery at sunset.',
      icon: <Coffee className="w-6 h-6 text-[#1A261D] stroke-[1.9]" />,
    },
  ];

  return (
    <section id="dining" className="py-20 sm:py-24 lg:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Bento Photo Collage (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            {/* Top Large Photo with Circular Badge & Floating Pill Card */}
            <div className="relative rounded-3xl overflow-hidden aspect-[16/11] border border-[#E7DFD1] shadow-[0_16px_40px_rgba(20,28,22,0.06)] group">
              <img
                src="/images/unnamed (3).webp"
                alt="Rajarata Villa dining pavilion"
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
              
              {/* Subtle top/bottom shadow gradients for contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />

              {/* Floating Circular Badge (Cooked fresh daily) */}
              <div className="absolute top-4 right-4 sm:top-5 sm:right-5 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#E5D7BF]/95 backdrop-blur-md border-2 border-[#C2A374] shadow-md flex flex-col items-center justify-center text-center p-1">
                <span className="font-serif text-[10px] sm:text-[11.5px] text-[#1E261F] font-bold leading-tight">
                  Cooked<br />fresh<br />daily
                </span>
              </div>

              {/* Floating Pill Card (Private dining pavilion) */}
              <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5 bg-[#FAF7F2]/95 backdrop-blur-md border border-[#E7DFD1] rounded-2xl px-4 py-2.5 sm:px-5 sm:py-3 shadow-lg max-w-[88%]">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="w-2 h-2 rounded-full bg-[#C2A374] shrink-0" />
                  <h4 className="font-serif text-sm sm:text-base font-medium text-[#16221A] leading-tight">
                    Private dining pavilion
                  </h4>
                </div>
                <p className="text-[11px] sm:text-xs text-[#7A867E] pl-4 font-sans">
                  Warm timber seating &amp; garden breezes
                </p>
              </div>
            </div>

            {/* Bottom 2 Supporting Photos */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-3xl overflow-hidden aspect-[4/3] border border-[#E7DFD1] shadow-sm group">
                <img
                  src="/images/unnamed (5).webp"
                  alt="Open airy dining hall"
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
              <div className="rounded-3xl overflow-hidden aspect-[4/3] border border-[#E7DFD1] shadow-sm group">
                <img
                  src="/images/unnamed.jpg"
                  alt="Clay pot veranda ambiance"
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Gastronomy Narrative & Meal Cards (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              {/* Eyebrow Pill Badge */}
              <div className="inline-block border border-[#C2A374]/50 bg-white/60 text-[#8C6D42] text-xs font-sans font-medium px-3.5 py-1 rounded-full mb-3 shadow-2xs">
                Authentic Ceylon flavors
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-normal text-[#16221A] tracking-tight leading-[1.15] mb-4">
                Farm-to-table Rajarata gastronomy
              </h2>

              {/* Description Paragraph */}
              <p className="text-sm sm:text-base text-[#525E56] leading-relaxed font-sans max-w-xl">
                Meals at Rajarata Villa celebrate centuries of culinary wisdom. Every dish is
                prepared by our resident cook using cold-pressed coconut milk, stone-ground Ceylon spices and
                vegetables harvested at neighboring village farms.
              </p>
            </div>

            {/* 3 Vertically Stacked Meal Cards */}
            <div className="space-y-3.5">
              {menuHighlights.map((dish) => (
                <div
                  key={dish.title}
                  className="group bg-[#FFFDF9] rounded-2xl sm:rounded-[22px] p-4 sm:p-5 border border-[#E7DFD1] shadow-[0_8px_24px_rgba(30,40,32,0.03)] hover:shadow-[0_14px_32px_rgba(30,40,32,0.07)] transition-all duration-300 hover:-translate-y-0.5 flex items-start gap-4 sm:gap-4.5"
                >
                  {/* Gold Icon Squircle Container */}
                  <div className="w-12 h-12 rounded-xl bg-[#C2A374] flex items-center justify-center text-[#1A261D] shrink-0 shadow-sm mt-0.5 group-hover:scale-105 transition-transform">
                    {dish.icon}
                  </div>

                  {/* Meal Information */}
                  <div className="min-w-0 flex-1">
                    <h3 className="font-serif text-base sm:text-lg font-normal text-[#16221A] leading-snug tracking-tight mb-0.5 group-hover:text-[#8C6D42] transition-colors">
                      {dish.title}
                    </h3>
                    <span className="text-xs sm:text-[13px] text-[#8A7963] block font-sans mb-1.5 leading-normal">
                      {dish.sinhala}
                    </span>
                    <p className="text-xs sm:text-[13px] text-[#525E56] leading-relaxed font-sans">
                      {dish.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Dietary Note */}
            <div className="flex items-center gap-3 pt-2 text-xs sm:text-[13.5px] text-[#525E56] font-sans">
              <div className="w-7 h-7 rounded-full bg-[#16221A] flex items-center justify-center text-[#C2A374] shrink-0 shadow-xs">
                <Heart className="w-3.5 h-3.5 fill-[#C2A374] text-[#C2A374]" />
              </div>
              <p className="leading-snug">
                100% vegetarian, vegan and halal friendly options, tailored to your preference.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
