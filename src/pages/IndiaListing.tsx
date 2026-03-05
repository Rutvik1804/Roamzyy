import { motion } from 'framer-motion';
import VideoHero from '@/components/VideoHero';
import DestinationCard from '@/components/DestinationCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

const indiaDestinations = [
  {
    name: 'Ladakh',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    price: '28,999',
    link: '/india/ladakh',
    description: 'The land of high passes and monasteries',
  },
  {
    name: 'Kashmir',
    image: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&q=80',
    price: '25,999',
    link: '/india/kashmir',
    description: 'Paradise on Earth with stunning valleys',
  },
  {
    name: 'Kerala',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80',
    price: '22,999',
    link: '/india/kerala',
    description: 'God\'s own country with backwaters',
  },
  {
    name: 'Rajasthan',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80',
    price: '24,999',
    link: '/india/rajasthan',
    description: 'Royal heritage and desert landscapes',
  },
  {
    name: 'Andaman',
    image: 'https://images.unsplash.com/photo-1598948485421-33a1655d3c18?w=800&q=80',
    price: '32,999',
    link: '/india/andaman',
    description: 'Pristine beaches and coral reefs',
  },
];

const IndiaListing = () => {
  const scrollToDestinations = () => {
    document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section with Video */}
      <VideoHero
        videoUrl="https://videos.pexels.com/video-files/2169880/2169880-uhd_2560_1440_30fps.mp4"
        title="Explore Incredible India"
        subtitle="Discover the diverse beauty and rich culture of India with Roamzy"
        ctaText="Start Exploring"
        onCtaClick={scrollToDestinations}
        height="h-screen"
      />

      {/* Horizontal Scrolling Image Strip */}
      <div className="py-8 bg-gray-50 overflow-hidden">
        <div className="flex animate-scroll-right pause-on-hover">
          {[...indiaDestinations, ...indiaDestinations].map((dest, idx) => (
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
            Explore India's Hidden Gems
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From mountains to beaches, experience the incredible diversity of India
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {indiaDestinations.map((destination, index) => (
            <DestinationCard
              key={destination.name}
              {...destination}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Why Travel India Section */}
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
              Why Travel India?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Rich Culture',
                description: 'Experience ancient traditions and diverse cultures',
                image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=80',
              },
              {
                title: 'Natural Beauty',
                description: 'From Himalayas to beaches, nature at its best',
                image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
              },
              {
                title: 'Adventure',
                description: 'Trekking, diving, and thrilling experiences',
                image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-3xl h-80 card-hover"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover image-zoom"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/80">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
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
              Ready to Explore India?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let our travel experts help you create unforgettable memories across India
            </p>
            <button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-2.5 px-8 rounded-full text-sm transition-all duration-300 transform hover:scale-105 shadow-md">
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

export default IndiaListing;
