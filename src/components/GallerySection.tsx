import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import g1 from '@/assets/gallery-1.jpg';
import g2 from '@/assets/gallery-2.jpg';
import g3 from '@/assets/gallery-3.jpg';
import g4 from '@/assets/gallery-4.jpg';
import g5 from '@/assets/gallery-5.jpg';
import g6 from '@/assets/gallery-6.jpg';

const images = [g1, g2, g3, g4, g5, g6];
const labels = ['Bali', 'Kashmir', 'Kerala', 'Ladakh', 'Thailand', 'Singapore'];

const GallerySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 lg:py-28 overflow-hidden" ref={ref}>
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
          Journeys In Frames
        </h2>
        <p className="text-muted-foreground text-lg">Pictures Perfect Moments</p>
      </motion.div>

      {/* Row 1 - scroll left */}
      <div className="pause-on-hover mb-6 overflow-hidden">
        <div className="animate-scroll-left flex gap-6 w-max">
          {[...images, ...images].map((img, i) => (
            <div key={`r1-${i}`} className="relative w-64 h-80 rounded-2xl overflow-hidden shadow-lg flex-shrink-0 group">
              <img src={img} alt={labels[i % labels.length]} className="w-full h-full object-cover image-zoom" loading="lazy" />
              <div className="absolute bottom-3 left-3 px-3 py-1 bg-foreground/70 rounded-full text-primary-foreground text-xs font-medium backdrop-blur-sm">
                📍 {labels[i % labels.length]}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 - scroll right */}
      <div className="pause-on-hover overflow-hidden">
        <div className="animate-scroll-right flex gap-6 w-max">
          {[...images.reverse(), ...images].map((img, i) => (
            <div key={`r2-${i}`} className="relative w-64 h-80 rounded-2xl overflow-hidden shadow-lg flex-shrink-0 group">
              <img src={img} alt="Travel moment" className="w-full h-full object-cover image-zoom" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
