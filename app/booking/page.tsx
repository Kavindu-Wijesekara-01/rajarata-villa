'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Calendar,
  Users,
  Bed,
  Check,
  Zap,
  ArrowLeft,
  ShieldCheck,
  MessageCircle,
  Clock,
  Sparkles,
  MapPin,
  Car
} from 'lucide-react';
import { VILLA_CONFIG, VILLA_ROOMS, Room } from '@/data/villaData';

export default function BookingPage() {
  const [selectedRoomId, setSelectedRoomId] = useState<string>(VILLA_ROOMS[0].id);
  const [checkIn, setCheckIn] = useState<string>('2026-03-10');
  const [checkOut, setCheckOut] = useState<string>('2026-03-12');
  const [adults, setAdults] = useState<number>(2);
  const [children, setChildren] = useState<number>(0);
  const [currency, setCurrency] = useState<'USD' | 'LKR'>('USD');

  // EV Charging Option
  const [needsEVCharging, setNeedsEVCharging] = useState<boolean>(false);
  const [evModel, setEvModel] = useState<string>('');

  // Add-ons
  const [addonMeals, setAddonMeals] = useState<boolean>(false);
  const [addonHeritageTour, setAddonHeritageTour] = useState<boolean>(false);
  const [addonWilpattuSafari, setAddonWilpattuSafari] = useState<boolean>(false);

  // Guest details
  const [guestName, setGuestName] = useState<string>('');
  const [guestPhone, setGuestPhone] = useState<string>('');
  const [guestEmail, setGuestEmail] = useState<string>('');
  const [specialRequests, setSpecialRequests] = useState<string>('');

  // Confirmation state
  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);
  const [bookingRef, setBookingRef] = useState<string>('');

  const selectedRoom = VILLA_ROOMS.find((r) => r.id === selectedRoomId) || VILLA_ROOMS[0];

  // Calculate nights
  const calculateNights = () => {
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diffTime = end.getTime() - start.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 1;
  };

  const nights = calculateNights();

  // Price calculations
  const roomPrice = currency === 'USD' ? selectedRoom.priceUSD : selectedRoom.priceLKR;
  const roomTotal = roomPrice * nights;

  const mealPricePerGuestPerDay = currency === 'USD' ? 12 : 3600;
  const mealTotal = addonMeals ? mealPricePerGuestPerDay * (adults + children) * nights : 0;

  const tourPrice = currency === 'USD' ? 25 : 7500;
  const tourTotal = addonHeritageTour ? tourPrice : 0;

  const safariPrice = currency === 'USD' ? 65 : 19500;
  const safariTotal = addonWilpattuSafari ? safariPrice : 0;

  const grandTotal = roomTotal + mealTotal + tourTotal + safariTotal;

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomRef = 'RV-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(randomRef);
    setIsConfirmed(true);
  };

  const formatCurrency = (amount: number) => {
    if (currency === 'USD') {
      return `$${amount}`;
    }
    return `LKR ${amount.toLocaleString()}`;
  };

  // WhatsApp formatted message link
  const generateWhatsAppLink = () => {
    const text = `*New Reservation Request - Rajarata Villa*\n` +
      `Booking Ref: ${bookingRef}\n` +
      `Guest Name: ${guestName}\n` +
      `Phone: ${guestPhone}\n` +
      `Email: ${guestEmail}\n` +
      `Suite: ${selectedRoom.name}\n` +
      `Dates: ${checkIn} to ${checkOut} (${nights} night/s)\n` +
      `Guests: ${adults} Adults, ${children} Children\n` +
      `EV Charging: ${needsEVCharging ? `Yes (${evModel || 'Standard Type 2'})` : 'No'}\n` +
      `Total Estimated: ${formatCurrency(grandTotal)}\n` +
      `Special Requests: ${specialRequests || 'None'}`;

    return `https://wa.me/${VILLA_CONFIG.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#2E3630]">
      {/* Top Banner & Header */}
      <header className="bg-[#1B241E] text-white py-4 px-4 sm:px-8 border-b border-[#C2A374]/20 sticky top-0 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-white/80 hover:text-[#C2A374] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Villa Homepage</span>
          </Link>

          <div className="flex items-center gap-3">
            <span className="font-serif text-base font-medium hidden sm:inline">Rajarata Villa</span>
            <div className="flex items-center bg-white/10 rounded-full p-1 border border-white/20 text-xs">
              <button
                type="button"
                onClick={() => setCurrency('USD')}
                className={`px-3 py-1 rounded-full font-medium transition-all ${
                  currency === 'USD' ? 'bg-[#C2A374] text-[#1B241E] font-semibold' : 'text-white/70 hover:text-white'
                }`}
              >
                USD ($)
              </button>
              <button
                type="button"
                onClick={() => setCurrency('LKR')}
                className={`px-3 py-1 rounded-full font-medium transition-all ${
                  currency === 'LKR' ? 'bg-[#C2A374] text-[#1B241E] font-semibold' : 'text-white/70 hover:text-white'
                }`}
              >
                LKR (Rs)
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Booking Hero Banner */}
      <div className="bg-[#1B241E] text-white py-10 px-4 sm:px-8 text-center relative border-b border-[#C2A374]/20">
        <div className="max-w-3xl mx-auto relative z-10">
          <span className="text-xs uppercase tracking-[0.24em] font-semibold text-[#C2A374] mb-2 block">
            Direct Reservation
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-white mb-3">
            Reserve Your Sanctuary
          </h1>
          <p className="text-xs sm:text-sm text-white/75 max-w-xl mx-auto">
            Enjoy guaranteed direct rates, complimentary solar EV fast charging,
            and personal assistance with your Anuradhapura pilgrimage or holiday.
          </p>
        </div>
      </div>

      {/* Main Booking Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <form onSubmit={handleBookingSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* LEFT COLUMN: Inputs & Options (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Step 1: Dates & Guests */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#1B241E]/10 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-6 h-6 rounded-full bg-[#1B241E] text-[#C2A374] text-xs font-bold flex items-center justify-center">
                  1
                </span>
                <h2 className="font-serif text-lg sm:text-xl font-medium text-[#1B241E]">
                  Dates &amp; Guest Count
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#1B241E] block mb-1.5">
                    Check-in Date
                  </label>
                  <input
                    type="date"
                    required
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#1B241E]/15 text-sm focus:outline-none focus:ring-1 focus:ring-[#C2A374] bg-[#FAF8F5]"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#1B241E] block mb-1.5">
                    Check-out Date
                  </label>
                  <input
                    type="date"
                    required
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#1B241E]/15 text-sm focus:outline-none focus:ring-1 focus:ring-[#C2A374] bg-[#FAF8F5]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#1B241E] block mb-1.5">
                    Adults (12+ yrs)
                  </label>
                  <select
                    value={adults}
                    onChange={(e) => setAdults(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#1B241E]/15 text-sm focus:outline-none focus:ring-1 focus:ring-[#C2A374] bg-[#FAF8F5]"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 10].map((num) => (
                      <option key={num} value={num}>
                        {num} Adult{num > 1 ? 's' : ''}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#1B241E] block mb-1.5">
                    Children
                  </label>
                  <select
                    value={children}
                    onChange={(e) => setChildren(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#1B241E]/15 text-sm focus:outline-none focus:ring-1 focus:ring-[#C2A374] bg-[#FAF8F5]"
                  >
                    {[0, 1, 2, 3, 4].map((num) => (
                      <option key={num} value={num}>
                        {num} Child{num > 1 ? 'ren' : ''}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Step 2: Choose Room / Suite */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#1B241E]/10 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-6 h-6 rounded-full bg-[#1B241E] text-[#C2A374] text-xs font-bold flex items-center justify-center">
                  2
                </span>
                <h2 className="font-serif text-lg sm:text-xl font-medium text-[#1B241E]">
                  Select Accommodation
                </h2>
              </div>

              <div className="space-y-4">
                {VILLA_ROOMS.map((room) => {
                  const isSelected = room.id === selectedRoomId;
                  const price = currency === 'USD' ? `$${room.priceUSD}` : `LKR ${room.priceLKR.toLocaleString()}`;

                  return (
                    <div
                      key={room.id}
                      onClick={() => setSelectedRoomId(room.id)}
                      className={`p-4 sm:p-5 rounded-2xl border transition-colors cursor-pointer flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between ${
                        isSelected
                          ? 'border-[#C2A374] bg-[#F5F2EB]/60 ring-1 ring-[#C2A374]'
                          : 'border-[#1B241E]/10 hover:border-[#1B241E]/30 bg-white'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-gray-100 shrink-0">
                          <img
                            src={room.image}
                            alt={room.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-serif text-base font-semibold text-[#1B241E]">
                              {room.name}
                            </h3>
                            {isSelected && (
                              <span className="w-4 h-4 rounded-full bg-[#C2A374] text-[#1B241E] flex items-center justify-center text-[10px]">
                                <Check className="w-3 h-3 stroke-[3]" />
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-[#758077] mb-2">{room.subtitle}</p>
                          <div className="flex items-center gap-3 text-xs text-[#465049]">
                            <span className="flex items-center gap-1">
                              <Users className="w-3.5 h-3.5 text-[#8C6D42]" /> {room.capacity}
                            </span>
                            <span className="flex items-center gap-1">
                              <Bed className="w-3.5 h-3.5 text-[#8C6D42]" /> {room.bedType}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="sm:text-right shrink-0">
                        <span className="text-lg font-bold font-serif text-[#1B241E]">
                          {price}
                        </span>
                        <span className="text-xs text-[#758077] block">per night</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 3: EV Charging Station Option */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#C2A374]/40 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#1B241E] text-[#C2A374] text-xs font-bold flex items-center justify-center">
                    3
                  </span>
                  <h2 className="font-serif text-lg sm:text-xl font-medium text-[#1B241E] flex items-center gap-2">
                    <Zap className="w-5 h-5 text-[#8C6D42]" />
                    <span>EV Electric Car Charging Station</span>
                  </h2>
                </div>
                <span className="text-[10px] uppercase font-bold px-2.5 py-1 rounded-full bg-[#F5F2EB] text-[#8C6D42] border border-[#C2A374]/30">
                  Solar Fast Charger
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-[#F5F2EB] border border-[#C2A374]/30 mb-4">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={needsEVCharging}
                    onChange={(e) => setNeedsEVCharging(e.target.checked)}
                    className="w-5 h-5 mt-0.5 rounded text-[#1B241E] focus:ring-[#C2A374] border-gray-300 cursor-pointer"
                  />
                  <div>
                    <span className="text-sm font-semibold text-[#1B241E] block">
                      Yes, I am traveling with an Electric Vehicle (EV)
                    </span>
                    <span className="text-xs text-[#465049] leading-relaxed block mt-0.5">
                      Reserve our dedicated shaded charging bay equipped with a 22kW Type-2 AC Fast Charger.
                      Charging is 100% solar powered and complimentary for staying guests.
                    </span>
                  </div>
                </label>
              </div>

              {needsEVCharging && (
                <div className="space-y-2 pt-2">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#1B241E] block">
                    Your EV Vehicle Model (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. BYD Atto 3, Tesla Model 3/Y, Hyundai Ioniq 5, Nissan Leaf..."
                    value={evModel}
                    onChange={(e) => setEvModel(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#1B241E]/15 text-sm focus:outline-none focus:ring-1 focus:ring-[#C2A374] bg-[#FAF8F5]"
                  />
                  <p className="text-[11px] text-[#758077]">
                    Our staff will prepare the correct adapter cable and reserved parking bay prior to your arrival.
                  </p>
                </div>
              )}
            </div>

            {/* Step 4: Add-Ons & Experiences */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#1B241E]/10 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-6 h-6 rounded-full bg-[#1B241E] text-[#C2A374] text-xs font-bold flex items-center justify-center">
                  4
                </span>
                <h2 className="font-serif text-lg sm:text-xl font-medium text-[#1B241E]">
                  Optional Add-Ons &amp; Tours
                </h2>
              </div>

              <div className="space-y-3">
                <label className="flex items-start justify-between p-3.5 rounded-xl border border-[#1B241E]/10 hover:border-[#1B241E]/25 cursor-pointer">
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      checked={addonMeals}
                      onChange={(e) => setAddonMeals(e.target.checked)}
                      className="w-4 h-4 mt-1 rounded text-[#1B241E] focus:ring-[#C2A374]"
                    />
                    <div>
                      <span className="text-sm font-semibold text-[#1B241E] block">
                        Rajarata Village Meals (Breakfast &amp; Dinner)
                      </span>
                      <span className="text-xs text-[#758077]">
                        Clay pot rice &amp; curries, string hoppers, fresh fruit &amp; Ceylon tea
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#1B241E] shrink-0">
                    +{formatCurrency(mealPricePerGuestPerDay)} / guest / day
                  </span>
                </label>

                <label className="flex items-start justify-between p-3.5 rounded-xl border border-[#1B241E]/10 hover:border-[#1B241E]/25 cursor-pointer">
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      checked={addonHeritageTour}
                      onChange={(e) => setAddonHeritageTour(e.target.checked)}
                      className="w-4 h-4 mt-1 rounded text-[#1B241E] focus:ring-[#C2A374]"
                    />
                    <div>
                      <span className="text-sm font-semibold text-[#1B241E] block">
                        Guided Heritage Tour (Atamasthana / 9 Destinations)
                      </span>
                      <span className="text-xs text-[#758077]">
                        Dedicated local driver &amp; guide covering Ruwanwelisaya, Bodhi tree, Mihintale
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#1B241E] shrink-0">
                    +{formatCurrency(tourPrice)}
                  </span>
                </label>

                <label className="flex items-start justify-between p-3.5 rounded-xl border border-[#1B241E]/10 hover:border-[#1B241E]/25 cursor-pointer">
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      checked={addonWilpattuSafari}
                      onChange={(e) => setAddonWilpattuSafari(e.target.checked)}
                      className="w-4 h-4 mt-1 rounded text-[#1B241E] focus:ring-[#C2A374]"
                    />
                    <div>
                      <span className="text-sm font-semibold text-[#1B241E] block">
                        Wilpattu National Park Safari Jeep Arrangement
                      </span>
                      <span className="text-xs text-[#758077]">
                        4x4 open safari vehicle for leopard, elephant &amp; sloth bear spotting
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#1B241E] shrink-0">
                    +{formatCurrency(safariPrice)}
                  </span>
                </label>
              </div>
            </div>

            {/* Step 5: Guest Information */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#1B241E]/10 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-6 h-6 rounded-full bg-[#1B241E] text-[#C2A374] text-xs font-bold flex items-center justify-center">
                  5
                </span>
                <h2 className="font-serif text-lg sm:text-xl font-medium text-[#1B241E]">
                  Guest Information
                </h2>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#1B241E] block mb-1">
                    Primary Guest Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Kasun Bandara"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#1B241E]/15 text-sm focus:outline-none focus:ring-1 focus:ring-[#C2A374] bg-[#FAF8F5]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-[#1B241E] block mb-1">
                      WhatsApp Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+94 77 123 4567"
                      value={guestPhone}
                      onChange={(e) => setGuestPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#1B241E]/15 text-sm focus:outline-none focus:ring-1 focus:ring-[#C2A374] bg-[#FAF8F5]"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-[#1B241E] block mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="kasun@example.com"
                      value={guestEmail}
                      onChange={(e) => setGuestEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#1B241E]/15 text-sm focus:outline-none focus:ring-1 focus:ring-[#C2A374] bg-[#FAF8F5]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#1B241E] block mb-1">
                    Special Requests / Dietary Notes
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Vegetarian meals, estimated arrival time, cot for toddler..."
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#1B241E]/15 text-sm focus:outline-none focus:ring-1 focus:ring-[#C2A374] bg-[#FAF8F5]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Sticky Summary & Checkout Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="sticky top-24 bg-white rounded-3xl p-6 sm:p-8 border border-[#1B241E]/10 shadow-sm space-y-6">
              <h3 className="font-serif text-xl font-medium text-[#1B241E] pb-3 border-b border-[#1B241E]/10">
                Reservation Summary
              </h3>

              {/* Room Card Preview */}
              <div className="flex gap-4 items-center">
                <img
                  src={selectedRoom.image}
                  alt={selectedRoom.name}
                  className="w-20 h-20 rounded-2xl object-cover shrink-0"
                />
                <div>
                  <h4 className="font-serif text-base font-semibold text-[#1B241E]">
                    {selectedRoom.name}
                  </h4>
                  <p className="text-xs text-[#758077]">{selectedRoom.subtitle}</p>
                  <span className="text-xs text-[#8C6D42] font-semibold mt-1 block">
                    {formatCurrency(roomPrice)} &times; {nights} night{nights > 1 ? 's' : ''}
                  </span>
                </div>
              </div>

              {/* Key Details Pill */}
              <div className="p-3.5 rounded-2xl bg-[#F5F2EB] border border-[#1B241E]/10 space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-[#758077]">Dates:</span>
                  <span className="font-semibold text-[#1B241E]">
                    {checkIn} &rarr; {checkOut} ({nights} night{nights > 1 ? 's' : ''})
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#758077]">Guests:</span>
                  <span className="font-semibold text-[#1B241E]">
                    {adults} Adult{adults > 1 ? 's' : ''}{children > 0 ? `, ${children} Child${children > 1 ? 'ren' : ''}` : ''}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#758077]">EV Fast Charger:</span>
                  <span className={`font-semibold ${needsEVCharging ? 'text-emerald-800' : 'text-[#758077]'}`}>
                    {needsEVCharging ? 'Reserved (Complimentary Solar)' : 'Not needed'}
                  </span>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-2 text-xs sm:text-sm border-t border-[#1B241E]/10 pt-4">
                <div className="flex justify-between">
                  <span className="text-[#758077]">Room Total ({nights} night{nights > 1 ? 's' : ''})</span>
                  <span className="font-medium text-[#1B241E]">{formatCurrency(roomTotal)}</span>
                </div>

                {needsEVCharging && (
                  <div className="flex justify-between text-emerald-800">
                    <span className="flex items-center gap-1">
                      <Zap className="w-3.5 h-3.5" /> 22kW EV Solar Fast Charging
                    </span>
                    <span className="font-semibold uppercase text-xs">Free / Included</span>
                  </div>
                )}

                {addonMeals && (
                  <div className="flex justify-between">
                    <span className="text-[#758077]">Rajarata Meals ({adults + children} guests)</span>
                    <span className="font-medium text-[#1B241E]">{formatCurrency(mealTotal)}</span>
                  </div>
                )}

                {addonHeritageTour && (
                  <div className="flex justify-between">
                    <span className="text-[#758077]">Guided Heritage Tour</span>
                    <span className="font-medium text-[#1B241E]">{formatCurrency(tourTotal)}</span>
                  </div>
                )}

                {addonWilpattuSafari && (
                  <div className="flex justify-between">
                    <span className="text-[#758077]">Wilpattu 4x4 Safari Jeep</span>
                    <span className="font-medium text-[#1B241E]">{formatCurrency(safariTotal)}</span>
                  </div>
                )}

                <div className="flex justify-between border-t border-[#1B241E]/10 pt-3 text-base sm:text-lg font-bold text-[#1B241E]">
                  <span>Total Estimated</span>
                  <span className="text-[#8C6D42] font-serif">{formatCurrency(grandTotal)}</span>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#1B241E] hover:bg-[#26332B] text-white font-semibold text-sm transition-colors cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#C2A374]" />
                <span>Confirm &amp; Review Booking</span>
              </button>

              <div className="space-y-2 pt-2 text-[11px] text-[#758077]">
                <p className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#8C6D42] shrink-0" />
                  <span>No prepayment required now. Pay securely upon arrival.</span>
                </p>
                <p className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#8C6D42] shrink-0" />
                  <span>Free cancellation up to 48 hours before check-in.</span>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* CONFIRMATION MODAL */}
      {isConfirmed && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#1B241E]/15 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-[#F5F2EB] text-[#8C6D42] flex items-center justify-center mx-auto border border-[#C2A374]/30">
              <Check className="w-8 h-8 stroke-[2.5]" />
            </div>

            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-[#8C6D42] block mb-1">
                Booking Request Prepared
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1B241E]">
                Reservation Ref: {bookingRef}
              </h3>
              <p className="text-xs sm:text-sm text-[#758077] mt-2">
                Dear {guestName || 'Guest'}, your stay at Rajarata Villa has been prepared.
                To instantly confirm availability and lock in your reservation with the host, click below to send via WhatsApp:
              </p>
            </div>

            {/* Quick summary box */}
            <div className="p-4 rounded-2xl bg-[#F5F2EB] border border-[#1B241E]/10 text-left text-xs space-y-1.5">
              <p><strong>Suite:</strong> {selectedRoom.name}</p>
              <p><strong>Dates:</strong> {checkIn} to {checkOut} ({nights} nights)</p>
              <p><strong>Guests:</strong> {adults} Adults {children > 0 ? `, ${children} Children` : ''}</p>
              {needsEVCharging && (
                <p className="text-emerald-900 font-semibold flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-[#8C6D42]" /> EV Charging Reserved: {evModel || 'Universal Type-2'}
                </p>
              )}
              <p className="text-[#8C6D42] font-bold text-sm pt-1">
                Estimated Total: {formatCurrency(grandTotal)}
              </p>
            </div>

            {/* WhatsApp Direct Action Button */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold text-sm transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Confirm Instantly via WhatsApp</span>
              </a>
              <button
                type="button"
                onClick={() => setIsConfirmed(false)}
                className="px-6 py-3.5 rounded-full border border-[#1B241E]/20 hover:bg-[#F5F2EB] text-xs font-semibold text-[#1B241E] transition-colors"
              >
                Close &amp; Edit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
