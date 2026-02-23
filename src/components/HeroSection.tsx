import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import AnnouncementStrip from './AnnouncementStrip';
import heroSkydiving from '@/assets/hero-skydiving.jpg';
import heroBungeeJump from '@/assets/hero-bungeejump.jpg';
import heroScubaDiving from '@/assets/hero-scubadiving.jpg';
import heroMeditating from '@/assets/hero-meditating.jpg';
import heroPartying from '@/assets/hero-partying.jpg';

const locations = [
  'Dubai', 'Bali', 'Maldives', 'Ladakh', 'Kerala', 'Bhutan', 'Thailand',
  'Kashmir', 'Rajasthan', 'Vietnam', 'Singapore', 'Europe', 'Andaman', 'Malaysia', 'Kazakhstan'
];

type HeroSlide = { type: 'video'; src: string } | { type: 'image'; src: string };

const heroSlides: HeroSlide[] = [
  { type: 'video', src: 'https://videos.pexels.com/video-files/5737300/5737300-hd_1920_1080_24fps.mp4' },
  { type: 'image', src: heroSkydiving },
  { type: 'image', src: heroBungeeJump },
  { type: 'image', src: heroScubaDiving },
  { type: 'image', src: heroMeditating },
  { type: 'image', src: heroPartying },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      <AnnouncementStrip />

      <div className="relative flex-1 flex flex-col justify-center">
      {/* Backgrounds */}
      {heroSlides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        >
          {slide.type === 'video' ? (
            <video
              ref={i === 0 ? videoRef : undefined}
              src={slide.src}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <img src={slide.src} alt="" className="w-full h-full object-cover" />
          )}
        </div>
      ))}
      <div className="absolute inset-0 gradient-hero-overlay" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-32 pb-24">
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Explore The World<br />With Roamzyy
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Curated journeys designed for unforgettable experiences.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <a href="#contact" className="px-8 py-4 bg-accent text-accent-foreground font-bold rounded-full text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
            Book Now
          </a>
          <a href="#destinations" className="px-8 py-4 border-2 border-primary-foreground text-primary-foreground font-semibold rounded-full text-lg hover:bg-primary-foreground/10 transition-all duration-300">
            Explore Destinations
          </a>
        </motion.div>
      </div>

      

      {/* Scrolling Location Cards */}
      <div className="relative z-10 pb-8 pause-on-hover overflow-hidden">
        <div className="animate-scroll-left flex gap-4 w-max">
          {[...locations, ...locations].map((loc, i) => (
            <div
              key={i}
              className="glass-effect px-6 py-3 rounded-full text-primary-foreground text-sm font-medium whitespace-nowrap hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              📍 {loc}
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default HeroSection;
