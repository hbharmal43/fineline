'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const heroSlides = [
  {
    title: "Professional AV",
    titleHighlight: "Equipment Rental",
    subtitle: "Projectors, LED Screens, Sound Systems, Laptops — Delivered, Set Up & Operated by Our Expert Team. Trusted Since 2001.",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop"
  },
  {
    title: "LED Walls for",
    titleHighlight: "Weddings & Events",
    subtitle: "Stunning LED video walls, crystal-clear sound systems, and professional lighting to make your celebration truly unforgettable.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Corporate AV",
    titleHighlight: "Solutions",
    subtitle: "Conferences, seminars, product launches — state-of-the-art projectors, sound systems & laptops with on-site technical support.",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop"
  }
];

const whatsappMessage = encodeURIComponent(
  'Hi Fineline, I need AV equipment for an event. Can you share details?'
);

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[700px] max-h-[900px] overflow-hidden bg-fss-dark-navy">
      {/* Background Slides */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${heroSlides[currentSlide].image}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-fss-dark-navy via-fss-dark-navy/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-fss-dark-navy via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border-fss-primary/30 mb-8"
                >
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-fss-primary-light text-xs font-bold tracking-widest uppercase">
                    Rajkot & All Gujarat — Since 2001
                  </span>
                </motion.div>

                {/* Title */}
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-[0.95] tracking-tight">
                  {heroSlides[currentSlide].title}
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-fss-primary via-fss-primary-light to-fss-accent">
                    {heroSlides[currentSlide].titleHighlight}
                  </span>
                  <br />
                  <span className="text-3xl sm:text-4xl lg:text-5xl text-white">
                    in Rajkot & All Gujarat
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="text-lg sm:text-xl text-white mb-8 max-w-2xl leading-relaxed font-light">
                  {heroSlides[currentSlide].subtitle}
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <a
                    href={`https://wa.me/919714595111?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-green-500/30 hover:shadow-green-500/50 hover:-translate-y-1"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Get Instant Quote on WhatsApp
                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </a>
                  <a
                    href="tel:+919714595111"
                    className="group inline-flex items-center justify-center gap-3 px-8 py-4 glass-panel hover:bg-white/10 text-white font-semibold rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300"
                  >
                    <span className="material-symbols-outlined text-fss-primary text-2xl">call</span>
                    Call +91 97145 95111
                  </a>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap gap-6 text-white">
                  {[
                    { icon: 'history', text: '24+ Years Experience' },
                    { icon: 'celebration', text: '5000+ Events' },
                    { icon: 'local_shipping', text: 'Free Delivery in Rajkot' },
                    { icon: 'engineering', text: 'Full Setup Included' },
                  ].map((badge, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-fss-primary text-lg">{badge.icon}</span>
                      <span className="text-sm font-medium">{badge.text}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-4 z-20 glass-panel px-6 py-3 rounded-full">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`relative h-2 rounded-full transition-all duration-500 overflow-hidden ${
              index === currentSlide ? 'w-12' : 'w-2 bg-white/20 hover:bg-white/40'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            {index === currentSlide && (
              <motion.div
                layoutId="activeSlide"
                className="absolute inset-0 bg-fss-primary"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>
    </section>
  );
}
