'use client';

import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

interface GalleryItem {
  src: string;
  category: 'Views' | 'Suites' | 'Living' | 'Sanctuary';
  title: string;
  caption: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    src: '/images/unnamed (4).webp',
    category: 'Views',
    title: 'Emerald Paddy Panoramas',
    caption: 'Veranda view with traditional lantern and swaying coconut palms over rice fields',
  },
  {
    src: '/images/unnamed.webp',
    category: 'Sanctuary',
    title: 'Villa Exterior & Lush Grounds',
    caption: 'Shaded by mature tropical trees and lush green flowering hedges',
  },
  {
    src: '/images/unnamed (1).webp',
    category: 'Suites',
    title: 'Deluxe Heritage Bedroom',
    caption: 'Spacious double bed layout with modern air conditioning and clean linen',
  },
  {
    src: '/images/unnamed (5).webp',
    category: 'Living',
    title: 'Spacious Living Pavilion',
    caption: 'High-ceiling hall with comfortable sofas, dining setup, and garden vistas',
  },
  {
    src: '/images/unnamed (2).webp',
    category: 'Suites',
    title: 'Modern Ensuite Bathroom',
    caption: 'Stone-finish tiles, high-pressure hot water shower, and clean fittings',
  },
  {
    src: '/images/unnamed (3).webp',
    category: 'Living',
    title: 'Timber Dining Space',
    caption: 'Handcrafted solid wood dining table for shared family meals and celebrations',
  },
  {
    src: '/images/unnamed (6).webp',
    category: 'Suites',
    title: 'Comfort Family Suite',
    caption: 'Twin double beds with artisanal headboards and warm natural lighting',
  },
  {
    src: '/images/unnamed.jpg',
    category: 'Views',
    title: 'Veranda Flora & Countryside',
    caption: 'Rustic clay pots and gentle greenery greeting the morning sunrise',
  },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Views', 'Suites', 'Living', 'Sanctuary'];

  const filteredItems = GALLERY_ITEMS.filter((item) =>
    activeCategory === 'All' ? true : item.category === activeCategory
  );

  return (
    <section id="gallery" className="py-16 md:py-24 lg:py-28 bg-[#F5F2EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8C6D42] mb-3 block">
            Visual Journey
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#1B241E] tracking-tight leading-[1.15] mb-4 sm:mb-6">
            Moments at Rajarata Villa
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#465049] font-sans leading-relaxed">
            Authentic glimpses of our suites, open living halls, verdant gardens, and peaceful paddy horizons.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 sm:mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#1B241E] text-[#FBF9F5]'
                  : 'bg-white text-[#465049] hover:bg-[#EBE6DC] border border-[#1B241E]/10'
              }`}
            >
              {cat === 'All' ? 'All Moments' : cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.src + idx}
              onClick={() => setLightboxIndex(idx)}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#1B241E] border border-[#1B241E]/10 shadow-sm cursor-pointer hover:border-[#C2A374]/60 transition-colors"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-between p-4" />

              {/* Hover Badge */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center backdrop-blur-sm">
                <ZoomIn className="w-4 h-4 text-[#C2A374]" />
              </div>

              {/* Hover Text */}
              <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white">
                <span className="text-[10px] uppercase font-bold text-[#C2A374] block">
                  {item.category}
                </span>
                <h4 className="font-serif text-sm font-medium truncate">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm">
            <button
              type="button"
              onClick={() => setLightboxIndex(null)}
              className="absolute top-5 right-5 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center border border-white/20 cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative max-w-4xl max-h-[85vh] w-full flex flex-col items-center">
              <img
                src={filteredItems[lightboxIndex].src}
                alt={filteredItems[lightboxIndex].title}
                className="max-h-[75vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl border border-white/10"
              />
              <div className="text-center mt-4 text-white">
                <h3 className="font-serif text-lg font-medium text-[#C2A374]">
                  {filteredItems[lightboxIndex].title}
                </h3>
                <p className="text-xs text-white/70 mt-1 max-w-lg">
                  {filteredItems[lightboxIndex].caption}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
