import { motion } from 'framer-motion';
import { Mountain, Sparkles, Zap, Heart as HeartIcon, Crown, Heart, Landmark, Trees } from 'lucide-react';
import { Link } from 'react-router-dom';
import VideoHero from '@/components/VideoHero';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

const themes = [
  {
    name: 'Adventure',
    icon: Mountain,
    description: 'Thrilling experiences for the bold',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80',
    link: '/themes/adventure',
    gradient: 'from-orange-500 to-red-600',
  },
  {
    name: 'Relaxing',
    icon: Sparkles,
    description: 'Peaceful escapes to rejuvenate',
    image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=80',
    link: '/themes/relaxing',
    gradient: 'from-blue-400 to-cyan-500',
  },
  {
    name: 'High Energy',
    icon: Zap,
    description: 'Action-packed non-stop fun',
    image: 'https://images.unsplash.com/photo-1533130061792-64b345e4a833?w=800&q=80',
    link: '/themes/high-energy',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    name: 'Stress Relief',
    icon: HeartIcon,
    description: 'Wellness and mindfulness retreats',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    link: '/themes/stress-relief',
    gradient: 'from-green-400 to-teal-500',
  },
  {
    name: 'Luxury',
    icon: Crown,
    description: 'Premium experiences and comfort',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
    link: '/themes/luxury',
    gradient: 'from-purple-500 to-pink-600',
  },
  {
    name: 'Romantic',
    icon: Heart,
    description: 'Perfect for couples and honeymooners',
    image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&q=80',
    link: '/themes/romantic',
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    name: 'Cultural',
    icon: Landmark,
    description: 'Heritage and local experiences',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80',
    link: '/themes/cultural',
    gradient: 'from-amber-600 to-yellow-500',
  },
  {
    name: 'Wildlife',
    icon: Trees,
    description: 'Nature and wildlife encounters',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80',
    link: '/themes/wildlife',
    gradient: 'from-green-600 to-emerald-500',
  },
];

const ThemesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section with Dynamic Scrolling Images */}
      <div className="relative h-screen overflow-hidden bg-black">
        {/* Background Image Slideshow */}
        <div className="absolute inset-0">
          <div className="grid grid-cols-4 h-screen">
            {themes.slice(0, 4).map((theme, idx) => (
              <div key={idx} className="relative overflow-hidden h-screen">
                <img
                  src={theme.image}
                  alt={theme.name}
                  className="w-full h-screen object-cover animate-float"
                  style={{ animationDelay: `${idx * 0.5}s` }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Travel By Theme
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Discover destinations that match your travel style
            </p>
          </motion.div>
        </div>
      </div>

      {/* Themes Grid */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Choose Your Travel Theme
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every traveler is unique. Find packages curated specifically for your preferences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {themes.map((theme, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={theme.link}>
                <div className="group relative overflow-hidden rounded-2xl h-80 card-hover">
                  {/* Gradient border at bottom */}
                  <div className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${theme.gradient} z-20`} />
                  
                  {/* Background Image */}
                  <img
                    src={theme.image}
                    alt={theme.name}
                    className="w-full h-full object-cover image-zoom"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/80 transition-all duration-300" />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-end p-5 text-center">
                    <div className="mb-3 transform group-hover:scale-110 transition-transform duration-300">
                      <theme.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{theme.name}</h3>
                    <p className="text-white/80 text-sm mb-3">{theme.description}</p>
                    <span className="bg-white text-gray-900 px-5 py-1.5 rounded-full text-sm font-semibold transform group-hover:scale-105 transition-transform duration-300">
                      Explore
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Why Choose Theme-Based Travel */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y:0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Theme-Based Travel?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Personalized Experience',
                description: 'Trips designed around your interests and preferences',
                icon: '🎯',
              },
              {
                title: 'Like-Minded Travelers',
                description: 'Connect with people who share your passion',
                icon: '👥',
              },
              {
                title: 'Curated Itineraries',
                description: 'Activities and destinations handpicked for each theme',
                icon: '📋',
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 text-center shadow-lg"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
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
              Ready to Find Your Perfect Theme?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let our experts help you discover destinations that match your travel style
            </p>
            <button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-2.5 px-8 rounded-full text-sm transition-all duration-300 transform hover:scale-105 shadow-md">
              Get Started
            </button>
          </motion.div>
        </div>
      </div>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default ThemesPage;
