import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const CTASection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-14 lg:py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="rounded-3xl overflow-hidden relative"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ minHeight: '260px' }}
        >
          {/* Full background image */}
          <img
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1600&q=80"
            alt="Travel background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Dark gradient overlay for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/25" />

          {/* Content */}
          <div
            className="relative z-10 flex flex-col justify-center h-full p-8 lg:p-14"
            style={{ minHeight: '260px' }}
          >
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4 drop-shadow-lg">
                Let's Plan Your Perfect Escape
              </h2>
              <p className="text-white/85 text-lg mb-8 drop-shadow">
                Our travel experts are ready to design your journey. Tell us your dream, and we'll make it real.
              </p>
              <a
                href="#contact"
                className="inline-flex px-8 py-3.5 bg-accent text-accent-foreground font-bold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Start Planning
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
