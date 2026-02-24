import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import VideoHero from '@/components/VideoHero';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for contacting us! We will get back to you soon.');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section with Video */}
      <VideoHero
        videoUrl="https://videos.pexels.com/video-files/2169880/2169880-uhd_2560_1440_30fps.mp4"
        title="Get In Touch"
        subtitle="We're here to help you plan your perfect journey"
        height="h-[60vh]"
      />

      {/* Contact Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-gray-700 font-medium mb-2 block">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  required
                  className="rounded-full h-12"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-gray-700 font-medium mb-2 block">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  required
                  className="rounded-full h-12"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-gray-700 font-medium mb-2 block">
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+91 XXXXXXXXXX"
                  required
                  className="rounded-full h-12"
                />
              </div>

              <div>
                <Label htmlFor="destination" className="text-gray-700 font-medium mb-2 block">
                  Interested Destination
                </Label>
                <Input
                  id="destination"
                  type="text"
                  placeholder="e.g., Maldives, Dubai, Bali"
                  className="rounded-full h-12"
                />
              </div>

              <div>
                <Label htmlFor="travel-date" className="text-gray-700 font-medium mb-2 block">
                  Preferred Travel Date
                </Label>
                <Input
                  id="travel-date"
                  type="date"
                  className="rounded-full h-12"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-gray-700 font-medium mb-2 block">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your travel plans..."
                  rows={4}
                  className="rounded-3xl"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info & Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Travel Illustration */}
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80"
                alt="Travel Planning"
                className="w-full h-64 object-cover"
              />
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {[
                {
                  icon: Phone,
                  title: 'Call Us',
                  info: '+91-XXXXXXXXXX',
                  subInfo: '+91-YYYYYYYYYY',
                },
                {
                  icon: Mail,
                  title: 'Email Us',
                  info: 'info@roamzy.com',
                  subInfo: 'support@roamzy.com',
                },
                {
                  icon: MapPin,
                  title: 'Visit Us',
                  info: '123 Travel Street',
                  subInfo: 'New Delhi, India 110001',
                },
                {
                  icon: Clock,
                  title: 'Working Hours',
                  info: 'Mon - Sat: 9:00 AM - 8:00 PM',
                  subInfo: 'Sunday: 10:00 AM - 6:00 PM',
                },
              ].map((contact, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-6 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#008acc] to-[#2d3d7c] flex items-center justify-center">
                      <contact.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{contact.title}</h3>
                    <p className="text-gray-600">{contact.info}</p>
                    <p className="text-gray-500 text-sm">{contact.subInfo}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Find Us On Map</h2>
          </motion.div>

          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.130252706478!2d77.2090212!3d28.6139391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2daa9eb4d0b%3A0x717971125923e5d!2sIndia%20Gate!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
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
              Ready to Start Your Adventure?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Our travel experts are just a call away to help you plan your dream vacation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+91XXXXXXXXXX"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-4 px-12 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-block"
              >
                Call Now
              </a>
              <a
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-100 text-primary font-bold py-4 px-12 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-block"
              >
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default ContactPage;
