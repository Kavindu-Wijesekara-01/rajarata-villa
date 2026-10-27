'use client';

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle, ExternalLink } from 'lucide-react';
import { VILLA_CONFIG } from '@/data/villaData';

export default function LocationContact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const travelDistances = [
    { place: 'Kuttam Pokuna (The Twin Ponds)', distance: '2.6 km', time: '5 mins' },
    { place: 'Jetavanaramaya Stupa', distance: '2.8 km', time: '5 mins' },
    { place: 'Thuparamaya Stupa', distance: '3.1 km', time: '6 mins' },
    { place: 'Abhayagiri Monastery & Stupa', distance: '3.4 km', time: '7 mins' },
    { place: 'Ruwanweli Maha Seya', distance: '3.5 km', time: '7 mins' },
    { place: 'Jaya Sri Maha Bodhi', distance: '3.9 km', time: '8 mins' },
    { place: 'Mirisawetiya & Tissa Wewa', distance: '4.6 km', time: '9 mins' },
    { place: 'Anuradhapura Railway Station', distance: '4.8 km', time: '9 mins' },
    { place: 'Isurumuniya Lovers Temple', distance: '5.2 km', time: '10 mins' },
    { place: 'Mihintale Sacred Mountain', distance: '12.5 km', time: '15 mins' },
  ];

  return (
    <section id="location" className="py-16 md:py-24 lg:py-28 bg-[#F5F2EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8C6D42] mb-3 block">
            Getting Here &amp; Connecting
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#1B241E] tracking-tight leading-[1.15] mb-4 sm:mb-6">
            Location &amp; Inquiries
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#465049] font-sans leading-relaxed">
            Nestled alongside verdant rice fields just minutes from Anuradhapura’s sacred heritage city.
            Easily reached by electric vehicle, car, train, or private taxi.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Proximity & Contact Details (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Google Maps Official Verified Card with Embedded Map */}
            <div className="bg-[#1B241E] text-white rounded-3xl p-6 sm:p-7 border border-[#C2A374]/30 shadow-md">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#C2A374]/20 border border-[#C2A374]/50 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#C2A374]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-white">
                      Rajarata Villa Anuradhapura
                    </h3>
                    <p className="text-xs text-white/70">
                      Exact GPS: {VILLA_CONFIG.coordinates}
                    </p>
                  </div>
                </div>

                <a
                  href={VILLA_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#C2A374] hover:text-[#d6be96] font-medium transition-colors shrink-0 self-start sm:self-center"
                >
                  <span>Open in Maps app</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Live Embedded Google Map */}
              <div className="w-full h-64 sm:h-72 rounded-2xl overflow-hidden border border-white/10 my-4 relative shadow-inner">
                <iframe
                  title="Rajarata Villa Anuradhapura Location Map"
                  src="https://maps.google.com/maps?q=8.3576047,80.4193828&hl=en&z=15&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>

              <p className="text-xs text-white/80 leading-relaxed">
                Direct Google Maps navigation to Rajarata Villa. Our secure gate and dedicated EV charging bay will be ready upon your arrival.
              </p>
            </div>

            {/* Quick Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={`tel:${VILLA_CONFIG.phone}`}
                className="bg-white rounded-2xl p-5 border border-[#1B241E]/10 shadow-2xs hover:border-[#C2A374]/60 transition-colors flex items-start gap-3.5"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F5F2EB] flex items-center justify-center shrink-0 text-[#8C6D42]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#758077] tracking-wider block">
                    Direct Phone Line
                  </span>
                  <span className="text-sm font-semibold text-[#1B241E]">{VILLA_CONFIG.phone}</span>
                  <p className="text-[11px] text-[#758077] mt-0.5">Available 7:00 AM - 10:00 PM</p>
                </div>
              </a>

              <a
                href={`https://wa.me/${VILLA_CONFIG.whatsapp}?text=Hello%20Rajarata%20Villa!%20I%20would%20like%20to%20inquire%20about%20availability.`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl p-5 border border-[#1B241E]/10 shadow-2xs hover:border-[#25D366] transition-colors flex items-start gap-3.5"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F5F2EB] flex items-center justify-center shrink-0 text-[#25D366]">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#758077] tracking-wider block">
                    Instant WhatsApp
                  </span>
                  <span className="text-sm font-semibold text-[#1B241E]">Chat with Host</span>
                  <p className="text-[11px] text-[#758077] mt-0.5">Quick replies in English &amp; Sinhala</p>
                </div>
              </a>
            </div>


          </div>

          {/* Right Column: Contact & Inquiry Form (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#1B241E]/10 shadow-sm">
              <h3 className="font-serif text-xl font-medium text-[#1B241E] mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs text-[#758077] mb-6">
                Have specific dates in mind, traveling with an electric car, or need tour arrangements? Leave us a note.
              </p>

              {formSubmitted ? (
                <div className="p-6 rounded-2xl bg-[#F5F2EB] border border-[#C2A374]/30 text-center space-y-3">
                  <CheckCircle className="w-10 h-10 text-[#8C6D42] mx-auto" />
                  <h4 className="font-serif text-base font-bold text-[#1B241E]">
                    Thank You! Message Received.
                  </h4>
                  <p className="text-xs text-[#465049]">
                    Our host will reach out to you shortly via WhatsApp or phone.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-[#1B241E] block mb-1">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Kasun Bandara"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#1B241E]/15 text-sm focus:outline-none focus:ring-1 focus:ring-[#C2A374] bg-[#FAF8F5]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] font-bold uppercase tracking-wider text-[#1B241E] block mb-1">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+94 77 ..."
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#1B241E]/15 text-sm focus:outline-none focus:ring-1 focus:ring-[#C2A374] bg-[#FAF8F5]"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold uppercase tracking-wider text-[#1B241E] block mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="you@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#1B241E]/15 text-sm focus:outline-none focus:ring-1 focus:ring-[#C2A374] bg-[#FAF8F5]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-[#1B241E] block mb-1">
                      Inquiry or Message
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Tell us your dates, group size, or EV vehicle model..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#1B241E]/15 text-sm focus:outline-none focus:ring-1 focus:ring-[#C2A374] bg-[#FAF8F5]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#1B241E] hover:bg-[#26332B] text-white text-xs sm:text-sm font-semibold tracking-wide transition-colors cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-[#C2A374]" />
                    <span>Send Message to Host</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
