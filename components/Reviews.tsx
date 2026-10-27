'use client';

import React from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';
import { GUEST_REVIEWS } from '@/data/villaData';

export default function Reviews() {
  return (
    <section id="reviews" className="py-16 md:py-24 lg:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F5F2EB] border border-[#C2A374]/30 text-[#8C6D42] text-xs font-semibold uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 fill-[#C2A374] text-[#C2A374]" />
            <span>4.95 Rating &bull; Verified Travelers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#1B241E] tracking-tight leading-[1.15] mb-4 sm:mb-6">
            Words From Our Guests
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#465049] font-sans leading-relaxed">
            Read authentic impressions from families, EV drivers, pilgrims, and international voyagers who have called Rajarata Villa their Anuradhapura home.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {GUEST_REVIEWS.map((review) => (
            <div
              key={review.name}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-[#1B241E]/10 shadow-sm flex flex-col justify-between"
            >
              <div>
                {/* Star Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C2A374] text-[#C2A374]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#1B241E]/15" />
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-[#2E3630] leading-relaxed mb-6 italic">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="pt-4 border-t border-[#1B241E]/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-serif text-sm font-semibold text-[#1B241E]">
                      {review.name}
                    </h4>
                    <span className="text-[11px] text-[#758077] block">{review.origin}</span>
                  </div>
                  <span className="text-[10px] text-[#8C6D42] font-semibold bg-[#F5F2EB] px-2 py-0.5 rounded-full">
                    {review.date}
                  </span>
                </div>
                <div className="mt-2 text-[10px] text-[#758077] flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-[#8C6D42]" />
                  <span>Stayed in: {review.stayedIn}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
