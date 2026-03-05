import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya & Rahul',
    trip: 'Maldives Honeymoon',
    quote: 'The most magical trip of our lives! Every detail was perfect.',
    video: 'https://videos.pexels.com/video-files/3015510/3015510-hd_1920_1080_24fps.mp4',
    rating: 5,
  },
  {
    name: 'Amit Sharma',
    trip: 'Dubai Adventure',
    quote: 'Roamzyy made our family vacation absolutely hassle-free.',
    video: 'https://videos.pexels.com/video-files/2519660/2519660-hd_1920_1080_24fps.mp4',
    rating: 5,
  },
  {
    name: 'Sneha & Friends',
    trip: 'Bali Group Trip',
    quote: 'Best group trip ever! The itinerary was perfectly planned.',
    video: 'https://videos.pexels.com/video-files/3209211/3209211-uhd_2560_1440_25fps.mp4',
    rating: 5,
  },
  {
    name: 'Vikram Patel',
    trip: 'Kerala Backwaters',
    quote: 'A serene experience that we will cherish forever.',
    video: 'https://videos.pexels.com/video-files/1448735/1448735-hd_1920_1080_24fps.mp4',
    rating: 5,
  },
  {
    name: 'Ananya Desai',
    trip: 'Thailand Explorer',
    quote: 'From temples to beaches, every moment was curated beautifully.',
    video: 'https://videos.pexels.com/video-files/4763824/4763824-uhd_2560_1440_24fps.mp4',
    rating: 4,
  },
];

const VideoTestimonials = () => {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState<number | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    if (playing !== null) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [playing]);

  const handlePlay = (index: number) => {
    if (playing === index) {
      videoRefs.current[index]?.pause();
      setPlaying(null);
    } else {
      if (playing !== null) videoRefs.current[playing]?.pause();
      videoRefs.current[index]?.play();
      setPlaying(index);
    }
  };

  const visibleCards = () => {
    const items = [];
    for (let i = -1; i <= 1; i++) {
      items.push((active + i + testimonials.length) % testimonials.length);
    }
    return items;
  };

  return (
    <section className="py-20 lg:py-28 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Real stories from real adventurers
          </p>
        </motion.div>

        {/* Cards - Horizontal scroll on mobile, grid on desktop */}
        <div className="relative max-w-5xl mx-auto">
          {/* Mobile horizontal scroll */}
          <div className="md:hidden overflow-hidden">
            <div className="flex gap-4 animate-scroll-left pause-on-hover w-max">
              {[...testimonials, ...testimonials].map((t, idx) => (
                <div
                  key={`mobile-${idx}`}
                  className="relative rounded-2xl overflow-hidden shadow-xl cursor-pointer flex-shrink-0"
                  style={{ width: '200px', height: '280px' }}
                  onClick={() => handlePlay(idx % testimonials.length)}
                >
                  <video
                    src={t.video}
                    muted
                    loop
                    playsInline
                    autoPlay
                    preload="auto"
                    crossOrigin="anonymous"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <div className="flex gap-0.5 mb-1">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="text-primary-foreground text-xs italic mb-1 line-clamp-2">"{t.quote}"</p>
                    <p className="text-primary-foreground font-bold text-xs">{t.name}</p>
                    <p className="text-primary-foreground/60 text-xs">{t.trip}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Desktop grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {visibleCards().map((idx, pos) => {
              const t = testimonials[idx];
              return (
                <motion.div
                  key={`${idx}-${pos}`}
                  className="relative rounded-2xl overflow-hidden shadow-xl group cursor-pointer aspect-[9/14] md:aspect-[9/16]"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: pos === 1 ? 1.02 : 0.97 } : {}}
                  transition={{ duration: 0.5, delay: pos * 0.1 }}
                  onClick={() => handlePlay(idx)}
                >
                  <video
                    ref={(el) => { videoRefs.current[idx] = el; }}
                    src={t.video}
                    muted
                    loop
                    playsInline
                    autoPlay
                    preload="auto"
                    crossOrigin="anonymous"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const video = e.currentTarget;
                      video.load();
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />


                  {/* Info overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="flex gap-0.5 mb-2">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="text-primary-foreground text-sm italic mb-2">"{t.quote}"</p>
                    <p className="text-primary-foreground font-bold text-sm">{t.name}</p>
                    <p className="text-primary-foreground/60 text-xs">{t.trip}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation - Desktop only */}
          <div className="hidden md:flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === active ? 'bg-accent w-7' : 'bg-border'}`}
                />
              ))}
            </div>
            <button
              onClick={() => setActive((prev) => (prev + 1) % testimonials.length)}
              className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;
