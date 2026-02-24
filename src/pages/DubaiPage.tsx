import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Users, Star } from 'lucide-react';
import VideoHero from '@/components/VideoHero';
import StickyPricingCard from '@/components/StickyPricingCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const DubaiPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const packageInclusions = [
    'Return Flights',
    '5* Hotel Stay',
    'Daily Breakfast',
    'Desert Safari',
    'Burj Khalifa Tickets',
    'Airport Transfers',
  ];

  const itinerary = [
    {
      day: 1,
      title: 'Arrival in Dubai',
      description: 'Arrive at Dubai International Airport. Transfer to hotel and check-in. Evening at leisure to explore the neighborhood.',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
    },
    {
      day: 2,
      title: 'Dubai City Tour & Burj Khalifa',
      description: 'Full day Dubai city tour covering Dubai Museum, Gold Souk, Spice Souk. Evening visit to Burj Khalifa 124th floor.',
      image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&q=80',
    },
    {
      day: 3,
      title: 'Desert Safari Adventure',
      description: 'Morning at leisure. Afternoon desert safari with dune bashing, camel ride, BBQ dinner and entertainment.',
      image: 'https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?w=800&q=80',
    },
    {
      day: 4,
      title: 'Palm Jumeirah & Dubai Marina',
      description: 'Visit the iconic Palm Jumeirah, Atlantis Hotel, and Dubai Marina. Evening dhow cruise with dinner.',
      image: 'https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=800&q=80',
    },
    {
      day: 5,
      title: 'Departure',
      description: 'Check out from hotel. Transfer to airport for return flight with wonderful memories.',
      image: 'https://images.unsplash.com/photo-1546412414-e1885259563a?w=800&q=80',
    },
  ];

  const thingsToDo = [
    {
      title: 'Burj Khalifa',
      description: 'Visit the world\'s tallest building',
      image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=400&q=80',
    },
    {
      title: 'Desert Safari',
      description: 'Adventure in Arabian dunes',
      image: 'https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?w=400&q=80',
    },
    {
      title: 'Dubai Mall',
      description: 'Shop at the world\'s largest mall',
      image: 'https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=400&q=80',
    },
    {
      title: 'Dubai Marina',
      description: 'Experience luxury waterfront living',
      image: 'https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=400&q=80',
    },
  ];

  const faqs = [
    {
      question: 'What is the best time to visit Dubai?',
      answer: 'November to March is the best time to visit Dubai with pleasant weather ranging from 20-30°C.',
    },
    {
      question: 'Do I need a visa for Dubai?',
      answer: 'Indian citizens can get visa on arrival for 14 days. We also assist with 30-day tourist visas.',
    },
    {
      question: 'What currency is used in Dubai?',
      answer: 'The UAE Dirham (AED) is the official currency. 1 AED = approximately ₹23.',
    },
    {
      question: 'Is Dubai safe for tourists?',
      answer: 'Yes, Dubai is one of the safest cities in the world with very low crime rates.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section with Video */}
      <VideoHero
        videoUrl="https://videos.pexels.com/video-files/2169880/2169880-uhd_2560_1440_30fps.mp4"
        title="Dubai Tour Packages"
        subtitle="Experience luxury and adventure in the city of gold"
        height="h-[80vh]"
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Trip Information */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
              <div className="bg-gray-50 rounded-3xl p-6 md:p-8">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Experience the perfect blend of tradition and modernity in Dubai. From towering skyscrapers 
                  to golden deserts, luxurious shopping to authentic souks, Dubai offers an unforgettable journey. 
                  Explore architectural marvels, indulge in world-class dining, and create memories that last a lifetime.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex flex-col items-center p-4 bg-white rounded-2xl">
                    <Clock className="w-6 h-6 text-primary mb-2" />
                    <span className="text-sm text-gray-600">5 Days</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-white rounded-2xl">
                    <MapPin className="w-6 h-6 text-primary mb-2" />
                    <span className="text-sm text-gray-600">Dubai, UAE</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-white rounded-2xl">
                    <Users className="w-6 h-6 text-primary mb-2" />
                    <span className="text-sm text-gray-600">2+ People</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-white rounded-2xl">
                    <Star className="w-6 h-6 text-primary mb-2" />
                    <span className="text-sm text-gray-600">4.8 Rating</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Day-wise Itinerary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Day-wise Itinerary</h2>
              <div className="space-y-6">
                {itinerary.map((day) => (
                  <div key={day.day} className="bg-gray-50 rounded-3xl overflow-hidden">
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <img
                          src={day.image}
                          alt={day.title}
                          className="w-full h-48 md:h-full object-cover"
                        />
                      </div>
                      <div className="p-6 md:w-2/3">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-bold">
                            Day {day.day}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{day.title}</h3>
                        <p className="text-gray-600">{day.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Things To Do */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Things To Do in Dubai</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {thingsToDo.map((activity, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-3xl h-64 card-hover"
                  >
                    <img
                      src={activity.image}
                      alt={activity.title}
                      className="w-full h-full object-cover image-zoom"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-bold text-white mb-2">{activity.title}</h3>
                      <p className="text-white/80">{activity.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Gallery Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80',
                  'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=600&q=80',
                  'https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=600&q=80',
                  'https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?w=600&q=80',
                  'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80',
                  'https://images.unsplash.com/photo-1546412414-e1885259563a?w=600&q=80',
                ].map((img, idx) => (
                  <div
                    key={idx}
                    className="overflow-hidden rounded-2xl aspect-square card-hover"
                  >
                    <img
                      src={img}
                      alt={`Dubai ${idx + 1}`}
                      className="w-full h-full object-cover image-zoom"
                    />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* FAQs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-gray-50 rounded-2xl px-6 border-none"
                  >
                    <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>

          {/* Right Column - Sticky Pricing Card */}
          <div className="lg:col-span-1">
            <StickyPricingCard
              destination="Dubai Tour Package"
              price="45,999"
              duration="5 Days / 4 Nights"
              inclusions={packageInclusions}
            />
          </div>
        </div>
      </div>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default DubaiPage;
