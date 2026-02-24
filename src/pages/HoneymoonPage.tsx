import { motion } from 'framer-motion';
import { Heart, Sparkles, Camera, Gift } from 'lucide-react';
import VideoHero from '@/components/VideoHero';
import DestinationCard from '@/components/DestinationCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

const honeymoonDestinations = [
  {
    name: 'Maldives',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80',
    price: '75,999',
    link: '/honeymoon/maldives',
    description: 'Overwater villas and pristine beaches',
  },
  {
    name: 'Bali',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
    price: '55,999',
    link: '/honeymoon/bali',
    description: 'Romantic sunsets and luxury resorts',
  },
  {
    name: 'Switzerland',
    image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80',
    price: '1,85,999',
    link: '/honeymoon/switzerland',
    description: 'Alpine romance and scenic landscapes',
  },
  {
    name: 'Kashmir',
    image: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&q=80',
    price: '35,999',
    link: '/honeymoon/kashmir',
    description: 'Heaven on Earth with houseboats',
  },
  {
    name: 'Andaman',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
    price: '45,999',
    link: '/honeymoon/andaman',
    description: 'Secluded islands and crystal waters',
  },
  {
    name: 'Thailand',
    image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&q=80',
    price: '48,999',
    link: '/honeymoon/thailand',
    description: 'Exotic beaches and cultural charm',
  },
];

const HoneymoonPage = () => {
  const scrollToDestinations = () => {
    document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section with Romantic Video */}
      <VideoHero
        videoUrl="https://videos.pexels.com/video-files/2169880/2169880-uhd_2560_1440_30fps.mp4"
        title="Romantic Honeymoon Getaways"
        subtitle="Begin your journey of love in paradise"
        ctaText="Explore Packages"
        onCtaClick={scrollToDestinations}
        height="h-screen"
      >
        <div className="flex items-center justify-center gap-2 mt-4">
          <Heart className="w-6 h-6 text-red-400 animate-pulse" />
          <span className="text-white/90 text-lg">Curated with Love</span>
        </div>
      </VideoHero>

      {/* Special Features */}
      <div className="bg-gradient-to-r from-pink-50 to-purple-50 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Book Your Honeymoon with Roamzy?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                icon: Heart,
                title: 'Romantic Experiences',
                description: 'Candlelight dinners and couple spa sessions',
              },
              {
                icon: Sparkles,
                title: 'Luxury Stays',
                description: 'Premium resorts and overwater villas',
              },
              {
                icon: Camera,
                title: 'Photo Shoots',
                description: 'Professional honeymoon photography',
              },
              {
                icon: Gift,
                title: 'Special Surprises',
                description: 'Romantic room decorations and gifts',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-6 text-center shadow-lg card-hover"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Destinations Grid */}
      <div id="destinations" className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Popular Honeymoon Destinations
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Create magical memories in the world's most romantic destinations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {honeymoonDestinations.map((destination, index) => (
            <DestinationCard
              key={destination.name}
              {...destination}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Happy Couples
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Rahul & Priya',
                destination: 'Maldives',
                review: 'Our honeymoon was perfect! The arrangements were flawless and the overwater villa was a dream come true.',
                image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=400&q=80',
              },
              {
                name: 'Arjun & Sneha',
                destination: 'Bali',
                review: 'Roamzy made our honeymoon unforgettable with romantic surprises and beautiful experiences.',
                image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&q=80',
              },
              {
                name: 'Amit & Kavya',
                destination: 'Switzerland',
                review: 'The Swiss Alps were breathtaking! Every moment was magical and perfectly planned.',
                image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=400&q=80',
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.destination}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Heart key={i} className="w-4 h-4 fill-red-500 text-red-500" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.review}"</p>
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.destination} Honeymoon</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Heart className="w-16 h-16 text-white mx-auto mb-6 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Start Your Forever Journey
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let us create the perfect honeymoon experience for you
            </p>
            <button className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-4 px-12 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Plan My Honeymoon
            </button>
          </motion.div>
        </div>
      </div>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default HoneymoonPage;
