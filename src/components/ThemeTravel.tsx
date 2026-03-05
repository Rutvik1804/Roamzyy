import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
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
      setActiveIndex((prev) => (prev + 1) % themes.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const wrappedIndex = activeIndex;

  const getCardStyle = (i: number) => {
    let offset = i - wrappedIndex;
    if (offset > Math.floor(themes.length / 2)) offset -= themes.length;
    if (offset < -Math.floor(themes.length / 2)) offset += themes.length;

    // Only show 2 cards on each side (5 total visible)
    const visible = Math.abs(offset) <= 2;

    // More curved rotation and tighter spacing
    const rotationDeg = offset * 18;
    const translateX = offset * 65;
    // More pronounced arc - cards curve upward from center
    const translateY = Math.pow(Math.abs(offset), 1.5) * 25;
    const scale = offset === 0 ? 1.15 : Math.max(0.75, 1 - Math.abs(offset) * 0.1);
    const zIndex = Math.max(0, 10 - Math.abs(offset));
    const opacity = visible ? 1 : 0;

    return { rotationDeg, translateX, translateY, scale, zIndex, opacity };
  };

  return (
    <section className="py-20 lg:py-28 relative" ref={ref}>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="rounded-3xl shadow-xl border border-white/20 relative"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ background: 'linear-gradient(135deg, hsl(209 100% 38%), hsl(220 53% 41%))' }}
        >
          {/* Background patterns wrapper - clipped to rounded corners */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
            {/* Dot pattern — full card */}
            <div className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.45) 1px, transparent 1px)',
                backgroundSize: '16px 16px',
              }}
            />
            {/* Diagonal lines — full card */}
            <div className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.18) 20px, rgba(255,255,255,0.18) 21px)',
              }}
            />
          </div>
          <div className="grid lg:grid-cols-2 gap-0 relative z-10">
            {/* Left - Text content */}
            <div className="flex flex-col justify-center p-8 lg:p-14">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4 drop-shadow">
                Travel By Theme
              </h2>
              <p className="text-white/85 text-lg mb-8 leading-relaxed">
                Pick a mood, and we'll craft the perfect journey. From adrenaline-pumping adventures
                to soul-soothing retreats — your ideal trip awaits.
              </p>
              <Link
                to="/themes"
                className="inline-flex self-start px-6 py-2.5 bg-yellow-400 text-black font-semibold rounded-full text-sm hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Explore Themes
              </Link>
            </div>

            {/* Right - Fanned cards */}
            <div className="relative flex items-center justify-center overflow-hidden" style={{ height: '420px' }}>
              <div className="relative w-full h-full flex items-end justify-center">
                {themes.map((theme, i) => {
                  const { rotationDeg, translateX, translateY, scale, zIndex, opacity } = getCardStyle(i);
                  const isActive = i === wrappedIndex;

                  return (
                    <motion.div
                      key={theme.title}
                      className="absolute rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
                      style={{
                        width: 200,
                        height: 280,
                        bottom: 40,
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
                      transition={{ 
                        duration: 0.6, 
                        ease: [0.4, 0, 0.2, 1],
                        opacity: { duration: 0.3 } 
                      }}
                      onClick={() => setActiveIndex(((activeIndex + (i - wrappedIndex)) % themes.length + themes.length) % themes.length)}
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
