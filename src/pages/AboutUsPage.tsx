import { motion } from 'framer-motion';
import { Award, Users, Globe, Heart, Target, Eye } from 'lucide-react';
import VideoHero from '@/components/VideoHero';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section with Video */}
      <VideoHero
        videoUrl="https://videos.pexels.com/video-files/2169880/2169880-uhd_2560_1440_30fps.mp4"
        title="About Roamzy"
        subtitle="Journeys made easy - Your trusted travel partner"
        height="h-[70vh]"
      />

      {/* Company Story */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Story
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Roamzy was born from a passion for exploration and a vision to make travel accessible 
            to everyone. We believe that travel is not just about visiting places; it's about 
            creating memories, experiencing cultures, and discovering yourself along the way.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            With years of expertise in the travel industry, we've helped thousands of travelers 
            explore the world with ease. From exotic international destinations to hidden gems 
            within India, we curate experiences that go beyond ordinary tourism.
          </p>
        </motion.div>

        {/* Stats Counter */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {[
            { number: '50K+', label: 'Happy Travelers', icon: Users },
            { number: '100+', label: 'Destinations', icon: Globe },
            { number: '15+', label: 'Years Experience', icon: Award },
            { number: '98%', label: 'Satisfaction Rate', icon: Heart },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-[#008acc] to-[#2d3d7c] mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl p-8 shadow-lg"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-[#008acc] to-[#2d3d7c] mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become the most trusted travel brand that inspires people to explore the world 
                fearlessly. We envision a future where travel is accessible, sustainable, and 
                enriching for everyone, creating global citizens who appreciate diversity and beauty.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl p-8 shadow-lg"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-[#008acc] to-[#2d3d7c] mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To create unforgettable travel experiences through personalized service, expert 
                guidance, and attention to detail. We strive to make every journey seamless, 
                from planning to execution, ensuring our travelers return with stories worth sharing.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Why Choose Roamzy */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Roamzy?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Expert Travel Planners',
              description: 'Our team of experienced travel experts ensures every detail is perfect',
              image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80',
            },
            {
              title: 'Best Price Guarantee',
              description: 'Competitive pricing without compromising on quality and experience',
              image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
            },
            {
              title: '24/7 Support',
              description: 'Round-the-clock assistance to ensure your journey is smooth',
              image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&q=80',
            },
            {
              title: 'Customized Packages',
              description: 'Tailor-made itineraries designed to match your preferences',
              image: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?w=600&q=80',
            },
            {
              title: 'Safety First',
              description: 'Your safety and security are our top priorities',
              image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80',
            },
            {
              title: 'Trusted by Thousands',
              description: 'Join our community of satisfied travelers worldwide',
              image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&q=80',
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl h-80 card-hover"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-full object-cover image-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-white/80">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Team Section */}
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
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              Passionate travel experts dedicated to making your dreams come true
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { name: 'Rajesh Kumar', role: 'Founder & CEO', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80' },
              { name: 'Priya Sharma', role: 'Head of Operations', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80' },
              { name: 'Amit Patel', role: 'Travel Specialist', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80' },
              { name: 'Sneha Verma', role: 'Customer Relations', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80' },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg card-hover"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
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
              Let's Create Memories Together
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of happy travelers who trusted Roamzy for their dream vacations
            </p>
            <button className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-4 px-12 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Start Your Journey
            </button>
          </motion.div>
        </div>
      </div>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default AboutUsPage;
