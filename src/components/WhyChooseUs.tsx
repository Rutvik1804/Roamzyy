import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle, Phone, Globe } from 'lucide-react';
import whyBg from '@/assets/why-choose-bg.jpg';

const reasons = [
  'Expert Knowledge and Experience',
  'Customized Travel Packages for Every Budget',
  'Wide Range of Destinations',
  '24/7 Support',
  'Handpicked Experiences',
  'Visa Assistance',
];

const WhyChooseUs = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 lg:py-28" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="relative rounded-3xl overflow-hidden min-h-[420px]"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Background image */}
          <img src={whyBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-8 p-8 lg:p-14 items-center">
            {/* Left - Content */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-8 leading-tight">
                Top Reasons To Choose<br />Roamzyy
              </h2>
              <p className="text-primary-foreground/80 text-sm font-semibold uppercase tracking-wider mb-4">Top Reasons</p>
              <ul className="space-y-3 mb-8">
                {reasons.map((reason) => (
                  <li key={reason} className="flex items-center gap-3 text-primary-foreground font-medium">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-sm md:text-base uppercase tracking-wide">{reason}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap items-center gap-4">
                <a href="#contact" className="px-6 py-3 bg-accent text-accent-foreground font-bold rounded-full text-sm hover:shadow-lg hover:scale-105 transition-all duration-300">
                  Contact Us!
                </a>
                <span className="flex items-center gap-2 text-primary-foreground text-sm">
                  <Phone className="w-4 h-4" /> +91 98765 43210
                </span>
                <span className="flex items-center gap-2 text-primary-foreground text-sm">
                  <Globe className="w-4 h-4" /> roamzyy.com
                </span>
              </div>
            </div>

            {/* Right side is the background image showing through */}
            <div className="hidden lg:block" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
