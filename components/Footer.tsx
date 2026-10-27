'use client';

import React from 'react';
import Link from 'next/link';
import { Calendar, MessageCircle, Phone, Mail, MapPin, Zap, ArrowUp, ExternalLink } from 'lucide-react';
import { VILLA_CONFIG } from '@/data/villaData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1B241E] text-[#FBF9F5] pt-16 sm:pt-20 pb-12 border-t border-[#C2A374]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#C2A374] bg-[#26332B] overflow-hidden flex items-center justify-center shadow-inner">
                <img
                  src="/images/logo.jpeg"
                  alt="Rajarata Villa Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="block font-serif text-lg font-medium tracking-tight text-white leading-tight">
                  Rajarata Villa
                </span>
                <span className="block text-[9px] uppercase tracking-[0.2em] font-semibold text-[#C2A374]">
                  Paddy-View Sanctuary &bull; Anuradhapura
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-white/75 leading-relaxed max-w-sm">
              An intimate eco-sanctuary surrounded by emerald rice fields in Anuradhapura.
              Featuring 22kW solar EV fast charging, authentic Sri Lankan dining, and peaceful nature living.
            </p>

            <a
              href={VILLA_CONFIG.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-[#C2A374]/30 text-[#C2A374] text-xs hover:border-[#C2A374] transition-colors"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Google Maps Location</span>
              <ExternalLink className="w-3 h-3 ml-0.5" />
            </a>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-sm font-semibold tracking-wider text-white uppercase">
              The Villa
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              <li>
                <a href="#about" className="hover:text-[#C2A374] transition-colors">Our Story</a>
              </li>
              <li>
                <a href="#suites" className="hover:text-[#C2A374] transition-colors">The Suites</a>
              </li>
              <li>
                <a href="#features" className="hover:text-[#C2A374] transition-colors">EV Charging &amp; Features</a>
              </li>
              <li>
                <a href="#dining" className="hover:text-[#C2A374] transition-colors">Farm Dining</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#C2A374] transition-colors">Moments Gallery</a>
              </li>
            </ul>
          </div>



          {/* Direct Reserve (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-sm font-semibold tracking-wider text-white uppercase">
              Direct Booking
            </h4>
            <p className="text-xs text-white/70">
              Book directly with the host for guaranteed best rates, complimentary solar EV charging, and personalized excursion tips.
            </p>

            <div className="flex flex-col gap-2 pt-1">
              <Link
                href="/booking"
                className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-[#C2A374] hover:bg-[#AF8C5A] text-[#1B241E] text-xs font-semibold shadow-sm transition-colors"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Reserve Stay Online</span>
              </Link>
              <a
                href={`https://wa.me/${VILLA_CONFIG.whatsapp}?text=Hello%20Rajarata%20Villa!%20I%20would%20like%20to%20reserve%20a%20stay.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-2 px-4 rounded-full border border-white/20 hover:border-[#25D366] text-xs font-medium text-white transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                <span>WhatsApp Host Directly</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>&copy; {new Date().getFullYear()} Rajarata Villa, Anuradhapura, Sri Lanka. All rights reserved.</p>
          <div className="flex items-center gap-4">


          </div>
        </div>
      </div>
    </footer>
  );
}
