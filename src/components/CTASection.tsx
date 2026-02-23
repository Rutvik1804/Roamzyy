import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ctaImg from '@/assets/cta-travel.jpg';

const CTASection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 lg:py-28" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="rounded-3xl overflow-hidden gradient-primary"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="p-8 lg:p-14">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-4">
                Let's Plan Your Perfect Escape
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8">
                Our travel experts are ready to design your journey. Tell us your dream, and we'll make it real.
              </p>
              <a
                href="#contact"
                className="inline-flex px-8 py-3.5 bg-accent text-accent-foreground font-bold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Start Planning
              </a>
            </div>
            <div className="relative h-64 lg:h-full min-h-[320px]">
              <img src={ctaImg} alt="Travel planning" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
