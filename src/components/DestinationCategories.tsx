import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import destInternational from '@/assets/dest-international.jpg';
import destIndia from '@/assets/dest-india.jpg';

import destHoneymoon from '@/assets/dest-honeymoon.jpg';

const destinations = [
  {
    title: 'International',
    description: 'Explore iconic global destinations with curated luxury experiences.',
    image: destInternational,
    cta: 'View International Trips',
  },
  {
    title: 'India',
    description: 'Discover the rich culture, heritage and beauty across incredible India.',
    image: destIndia,
    cta: 'Explore India',
  },
  {
    title: 'HoneyMoon',
    description: 'Romantic getaways designed for your most special moments together.',
    image: destHoneymoon,
    cta: 'Plan Your Honeymoon',
  },
];

const DestinationCategories = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="destinations" className="py-20 lg:py-28 bg-muted/50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            Discover Destinations
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Choose your next adventure from our handpicked categories
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {destinations.map((dest, i) => (
            <motion.div
              key={dest.title}
              className="group relative overflow-hidden rounded-2xl h-80 lg:h-96 card-hover cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <img
                src={dest.image}
                alt={dest.title}
                className="w-full h-full object-cover image-zoom"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <h3 className="text-2xl lg:text-3xl font-display font-bold text-primary-foreground mb-2">
                  {dest.title}
                </h3>
                <p className="text-primary-foreground/80 text-sm mb-4">{dest.description}</p>
                <span className="inline-flex px-5 py-2 bg-accent text-accent-foreground text-sm font-bold rounded-full group-hover:scale-105 transition-transform">
                  {dest.cta}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationCategories;
