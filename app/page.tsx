import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import About from '@/components/About';
import Rooms from '@/components/Rooms';
import Explore from '@/components/Explore';
import Features from '@/components/Features';
import Dining from '@/components/Dining';
import Gallery from '@/components/Gallery';
import Reviews from '@/components/Reviews';
import LocationContact from '@/components/LocationContact';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#F9F8F5]">
      {/* Floating Pill Header */}
      <Navbar />

      {/* Hero Section with Panorama Slider */}
      <Hero />

      {/* Floating Statistics Bar */}
      <Stats />

      {/* About & Sanctuary Story */}
      <AnimateOnScroll animation="fade-up" duration={850}>
        <About />
      </AnimateOnScroll>

      {/* The Suites & Accommodations */}
      <AnimateOnScroll animation="fade-up" duration={850}>
        <Rooms />
      </AnimateOnScroll>

      {/* 9 Anuradhapura Attractions Interactive Showcase */}
      <AnimateOnScroll animation="fade-up" duration={850}>
        <Explore />
      </AnimateOnScroll>

      {/* Features & EV Charging Station Spotlight */}
      <AnimateOnScroll animation="fade-up" duration={850}>
        <Features />
      </AnimateOnScroll>

      {/* Traditional Sri Lankan Farm Dining */}
      <AnimateOnScroll animation="fade-up" duration={850}>
        <Dining />
      </AnimateOnScroll>

      {/* Visual Moments Gallery with Lightbox */}
      <AnimateOnScroll animation="fade-up" duration={850}>
        <Gallery />
      </AnimateOnScroll>

      {/* Guest Reviews & Ratings */}
      <AnimateOnScroll animation="fade-up" duration={850}>
        <Reviews />
      </AnimateOnScroll>

      {/* Location, Transit Distances & Inquiry Form */}
      <AnimateOnScroll animation="fade-up" duration={850}>
        <LocationContact />
      </AnimateOnScroll>

      {/* FAQs */}
      <AnimateOnScroll animation="fade-up" duration={800}>
        <FAQ />
      </AnimateOnScroll>

      {/* Footer */}
      <Footer />
    </main>
  );
}
