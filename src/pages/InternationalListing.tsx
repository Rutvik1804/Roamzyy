import { motion } from 'framer-motion';
import VideoHero from '@/components/VideoHero';
import DestinationCard from '@/components/DestinationCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

const internationalDestinations = [
  {
    name: 'Dubai',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
    price: '45,999',
    link: '/international/dubai',
    description: 'Experience luxury in the city of gold',
  },
  {
    name: 'Bali',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
    price: '38,999',
    link: '/international/bali',
    description: 'Island paradise with stunning beaches',
  },
  {
    name: 'Thailand',
    image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&q=80',
    price: '32,999',
    link: '/international/thailand',
    description: 'Land of smiles and exotic culture',
  },
  {
    name: 'Vietnam',
    image: 'https://images.unsplash.com/photo-1557750255-c76072a7aad1?w=800&q=80',
    price: '35,999',
    link: '/international/vietnam',
    description: 'Ancient traditions meet modern charm',
  },
  {
    name: 'Maldives',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80',
    price: '65,999',
    link: '/international/maldives',
    description: 'Tropical paradise with crystal waters',
  },
  {
    name: 'Singapore',
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80',
    price: '42,999',
    link: '/international/singapore',
    description: 'A futuristic garden city',
  },
  {
    name: 'Europe',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80',
    price: '1,25,999',
    link: '/international/europe',
    description: 'Explore iconic cities and cultures',
  },
  {
    name: 'Malaysia',
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&q=80',
    price: '36,999',
    link: '/international/malaysia',
    description: 'Diverse culture and natural beauty',
  },
  {
    name: 'Kazakhstan',
    image: 'https://images.unsplash.com/photo-1557750255-c76072a7aad1?w=800&q=80',
    price: '55,999',
    link: '/international/kazakhstan',
    description: 'Discover the heart of Central Asia',
  },
  {
    name: 'Bhutan',
    image: 'https://images.unsplash.com/photo-1557750255-c76072a7aad1?w=800&q=80',
    price: '48,999',
    link: '/international/bhutan',
    description: 'The land of happiness',
  },
];

const InternationalListing = () => {
  const scrollToDestinations = () => {
    document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section with Video */}
      <VideoHero
        videoUrl="https://videos.pexels.com/video-files/2169880/2169880-uhd_2560_1440_30fps.mp4"
        title="Explore International Destinations"
        subtitle="Discover the world's most breathtaking places with Roamzy"
        ctaText="Start Exploring"
        onCtaClick={scrollToDestinations}
        height="h-screen"
      />

      {/* Horizontal Scrolling Image Strip */}
      <div className="py-8 bg-gray-50 overflow-hidden">
        <div className="flex animate-scroll-left pause-on-hover">
          {[...internationalDestinations, ...internationalDestinations].map((dest, idx) => (
            <div key={idx} className="flex-shrink-0 w-64 h-40 mx-2 rounded-2xl overflow-hidden">
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
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
            Popular International Destinations
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Handpicked destinations for your perfect international getaway
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {internationalDestinations.map((destination, index) => (
            <DestinationCard
              key={destination.name}
              {...destination}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#008acc] to-[#2d3d7c] py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get in touch with our travel experts to plan your perfect international adventure
            </p>
            <button className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-4 px-12 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Plan My Trip
            </button>
          </motion.div>
        </div>
      </div>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default InternationalListing;
