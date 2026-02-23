import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import themeAdventure from '@/assets/theme-adventure.jpg';
import themeRelaxing from '@/assets/theme-relaxing.jpg';
import themeEnergy from '@/assets/theme-energy.jpg';
import themeStressRelief from '@/assets/theme-stressrelief.jpg';
import themeLuxury from '@/assets/theme-luxury.jpg';
import themeTravelBg from '@/assets/theme-travel-bg.jpg';

const themes = [
  { title: 'Adventure', image: themeAdventure },
  { title: 'Relaxing', image: themeRelaxing },
  { title: 'High Energy', image: themeEnergy },
  { title: 'Stress Relief', image: themeStressRelief },
  { title: 'Luxury', image: themeLuxury },
  { title: 'Romantic', image: themeRelaxing },
  { title: 'Cultural', image: themeEnergy },
  { title: 'Wildlife', image: themeAdventure },
];

const ThemeTravel = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [activeIndex, setActiveIndex] = useState(2);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => prev + 1);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const wrappedIndex = ((activeIndex % themes.length) + themes.length) % themes.length;

  const getCardStyle = (i: number) => {
    let offset = i - wrappedIndex;
    if (offset > Math.floor(themes.length / 2)) offset -= themes.length;
    if (offset < -Math.floor(themes.length / 2)) offset += themes.length;

    const rotationDeg = offset * 15;
    const translateX = offset * 90;
    const translateY = Math.abs(offset) * 25;
    const scale = offset === 0 ? 1.15 : 1 - Math.abs(offset) * 0.08;
    const zIndex = 10 - Math.abs(offset);
    const opacity = Math.abs(offset) > 2 ? 0 : 1 - Math.abs(offset) * 0.2;

    return { rotationDeg, translateX, translateY, scale, zIndex, opacity };
  };

  return (
    <section className="py-20 lg:py-28 relative" ref={ref}>
      <div className="absolute inset-0">
        <img src={themeTravelBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="rounded-3xl shadow-xl overflow-hidden border border-border"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left - Text content */}
            <div className="flex flex-col justify-center p-8 lg:p-14 bg-card">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
                Travel By Theme
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Pick a mood, and we'll craft the perfect journey. From adrenaline-pumping adventures
                to soul-soothing retreats — your ideal trip awaits.
              </p>
              <a
                href="#contact"
                className="inline-flex self-start px-8 py-3.5 bg-accent text-accent-foreground font-bold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Explore Themes
              </a>
            </div>

            {/* Right - Blue patterned background with fanned cards */}
            <div className="relative flex items-center justify-center py-12 lg:py-0 overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, hsl(209 100% 40%), hsl(220 53% 43%))',
              }}
            >
              {/* Dot pattern overlay */}
              <div className="absolute inset-0 opacity-35"
                style={{
                  backgroundImage: 'radial-gradient(circle, hsl(0 0% 100% / 0.4) 1px, transparent 1px)',
                  backgroundSize: '16px 16px',
                }}
              />
              {/* Diagonal lines pattern */}
              <div className="absolute inset-0 opacity-25"
                style={{
                  backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 20px, hsl(0 0% 100% / 0.15) 20px, hsl(0 0% 100% / 0.15) 21px)',
                }}
              />

              <div className="relative w-full max-w-lg h-[420px] flex items-end justify-center">
                {themes.map((theme, i) => {
                  const { rotationDeg, translateX, translateY, scale, zIndex, opacity } = getCardStyle(i);
                  const isActive = i === wrappedIndex;

                  return (
                    <motion.div
                      key={theme.title}
                      className="absolute rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
                      style={{
                        width: 200,
                        height: 270,
                        bottom: 50,
                        transformOrigin: 'center bottom',
                      }}
                      animate={{
                        rotate: rotationDeg,
                        x: translateX,
                        y: translateY,
                        scale,
                        zIndex,
                        opacity,
                      }}
                      transition={{ duration: 0.7, ease: 'easeInOut' }}
                      onClick={() => setActiveIndex(activeIndex + (i - wrappedIndex))}
                    >
                      <img src={theme.image} alt={theme.title} className="w-full h-full object-cover" />
                      <div className={`absolute inset-0 transition-all duration-700 ${isActive ? 'bg-gradient-to-t from-black/60 via-transparent to-transparent' : 'bg-gradient-to-t from-black/70 via-black/30 to-black/10'}`} />
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                        <h3 className="text-base font-display font-bold text-primary-foreground uppercase tracking-wide">{theme.title}</h3>
                      </div>
                      {isActive && (
                        <div className="absolute inset-0 rounded-2xl ring-3 ring-accent/60" />
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ThemeTravel;
