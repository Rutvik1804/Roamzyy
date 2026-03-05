import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
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

const searchableDestinations = [
  { name: 'Dubai', path: '/international/dubai', category: 'International' },
  { name: 'Bali', path: '/international/bali', category: 'International' },
  { name: 'Thailand', path: '/international/thailand', category: 'International' },
  { name: 'Vietnam', path: '/international/vietnam', category: 'International' },
  { name: 'Maldives', path: '/international/maldives', category: 'International' },
  { name: 'Singapore', path: '/international/singapore', category: 'International' },
  { name: 'Europe', path: '/international/europe', category: 'International' },
  { name: 'Malaysia', path: '/international/malaysia', category: 'International' },
  { name: 'Kazakhstan', path: '/international/kazakhstan', category: 'International' },
  { name: 'Bhutan', path: '/international/bhutan', category: 'International' },
  { name: 'Ladakh', path: '/india/ladakh', category: 'India' },
  { name: 'Kashmir', path: '/india/kashmir', category: 'India' },
  { name: 'Kerala', path: '/india/kerala', category: 'India' },
  { name: 'Rajasthan', path: '/india/rajasthan', category: 'India' },
  { name: 'Andaman', path: '/india/andaman', category: 'India' },
  { name: 'Honeymoon', path: '/honeymoon', category: 'Theme' },
  { name: 'Adventure', path: '/themes/adventure', category: 'Theme' },
  { name: 'Relaxing', path: '/themes/relaxing', category: 'Theme' },
  { name: 'Luxury', path: '/themes/luxury', category: 'Theme' },
  { name: 'Romantic', path: '/themes/romantic', category: 'Theme' },
  { name: 'Cultural', path: '/themes/cultural', category: 'Theme' },
  { name: 'Wildlife', path: '/themes/wildlife', category: 'Theme' },
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
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredDestinations, setFilteredDestinations] = useState(searchableDestinations);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const searchRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = searchableDestinations.filter(dest =>
        dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredDestinations(filtered);
    } else {
      setFilteredDestinations(searchableDestinations);
    }
  }, [searchQuery]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (filteredDestinations.length > 0) {
      navigate(filteredDestinations[0].path);
      setShowSuggestions(false);
    }
  };

  const handleSelectDestination = (path: string) => {
    navigate(path);
    setShowSuggestions(false);
    setSearchQuery('');
  };

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* AnnouncementStrip hidden */}

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
      <div className="relative z-10 container mx-auto px-4 text-center pt-28 pb-16">
        <motion.h1
          className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4 leading-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Roamzy<br />
          <span className="text-2xl md:text-3xl lg:text-4xl">Journeys made easy</span>
        </motion.h1>
        <motion.p
          className="text-base md:text-lg text-white/90 mb-6 max-w-xl mx-auto font-light drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Your trusted partner for unforgettable travel experiences across the world
        </motion.p>

        {/* Search Bar */}
        <motion.div
          ref={searchRef}
          className="relative max-w-lg mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search destinations, themes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              className="w-full px-6 py-4 pr-14 rounded-full bg-white/95 backdrop-blur-sm text-gray-800 placeholder-gray-500 shadow-xl focus:outline-none focus:ring-2 focus:ring-primary text-sm"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary/90 transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>
          </form>
          
          {/* Search Suggestions Dropdown */}
          {showSuggestions && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl overflow-hidden z-50 max-h-72 overflow-y-auto">
              {filteredDestinations.length > 0 ? (
                <>
                  {['International', 'India', 'Theme'].map(category => {
                    const categoryItems = filteredDestinations.filter(d => d.category === category);
                    if (categoryItems.length === 0) return null;
                    return (
                      <div key={category}>
                        <div className="px-4 py-2 bg-gray-50 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                          {category}
                        </div>
                        {categoryItems.map(dest => (
                          <button
                            key={dest.path}
                            onClick={() => handleSelectDestination(dest.path)}
                            className="w-full px-4 py-3 text-left text-gray-700 hover:bg-primary/10 transition-colors flex items-center gap-3"
                          >
                            <Search className="w-4 h-4 text-gray-400" />
                            <span className="font-medium">{dest.name}</span>
                          </button>
                        ))}
                      </div>
                    );
                  })}
                </>
              ) : (
                <div className="px-4 py-6 text-center text-gray-500">
                  No destinations found
                </div>
              )}
            </div>
          )}
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-3 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <a 
            href="#contact" 
            className="group relative px-6 py-3 bg-yellow-400 text-black font-bold rounded-full text-sm overflow-hidden shadow-lg hover:bg-yellow-300 hover:shadow-yellow-400/40 hover:shadow-2xl transition-all duration-300"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Book Now
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </span>
          </a>
          <a 
            href="#destinations" 
            className="group relative px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-full text-sm overflow-hidden hover:bg-white/20 hover:border-white/50 transition-all duration-300"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Explore Destinations
              <span className="group-hover:rotate-45 transition-transform duration-300">↗</span>
            </span>
          </a>
        </motion.div>
      </div>

      

      {/* Scrolling Location Cards - Fixed at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-20 pb-4 sm:pb-6 pause-on-hover overflow-hidden bg-gradient-to-t from-black/40 to-transparent pt-8">
        <div className="animate-scroll-left flex gap-3 sm:gap-4 w-max">
          {[...locations, ...locations].map((loc, i) => (
            <div
              key={i}
              className="glass-effect px-4 sm:px-6 py-2 sm:py-3 rounded-full text-primary-foreground text-xs sm:text-sm font-medium whitespace-nowrap hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
               {loc}
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default HeroSection;
