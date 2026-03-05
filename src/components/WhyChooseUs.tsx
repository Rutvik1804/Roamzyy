import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Ban, Heart, Shield } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Travel with your tribe',
    description: 'Meet like-minded people who share your travel style and values.',
  },
  {
    icon: Ban,
    title: 'Zero planning stress',
    description: 'We handle every detail. You just show up and experience.',
  },
  {
    icon: Heart,
    title: 'Curated, not crowded',
    description: 'Small groups, handpicked experiences, authentic connections.',
  },
  {
    icon: Shield,
    title: 'End-to-end care',
    description: 'From booking to boarding to bonding — we have got you covered.',
  },
];

const WhyChooseUs = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 lg:py-28 bg-[#f5f3ef]" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            Why Roamzyy?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Because travel is better when someone else does the planning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
