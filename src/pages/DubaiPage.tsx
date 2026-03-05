import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Users, Star, Check, Calendar, Plane, Hotel, Utensils, Camera, ChevronRight, Shield, Headphones, CreditCard, Ban } from 'lucide-react';
import VideoHero from '@/components/VideoHero';
import StickyPricingCard from '@/components/StickyPricingCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const DubaiPage = () => {
  const [activeTab, setActiveTab] = useState('itinerary');

  const packageHighlights = [
    { icon: Plane, text: 'Return Flights Included' },
    { icon: Hotel, text: '5-Star Hotel Stay' },
    { icon: Utensils, text: 'Daily Breakfast' },
    { icon: Camera, text: 'Guided Tours' },
  ];

  const packageInclusions = [
    'Return economy class flights',
    '4 nights accommodation in 5-star hotel',
    'Daily breakfast at hotel',
    'Airport transfers (pickup & drop)',
    'Desert Safari with BBQ dinner',
    'Burj Khalifa 124th floor tickets',
    'Dubai City Tour',
    'Dhow Cruise with dinner',
    'All applicable taxes',
  ];

  const packageExclusions = [
    'Travel insurance',
    'Personal expenses',
    'Tips and gratuities',
    'Meals not mentioned',
    'Optional activities',
    'Visa fees (if applicable)',
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
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section with Video */}
      <VideoHero
        videoUrl="https://videos.pexels.com/video-files/2169880/2169880-uhd_2560_1440_30fps.mp4"
        title="Dubai Tour Packages"
        subtitle="Experience luxury and adventure in the city of gold"
        height="h-[70vh]"
      />

      {/* Sticky Navigation - Combined Quick Info & Tabs */}
      <div className="bg-white border-b sticky top-14 z-30 shadow-sm">
        <div className="container mx-auto px-4">
          {/* Quick Info Row */}
          <div className="flex items-center gap-6 py-3 border-b border-gray-100 overflow-x-auto">
            <div className="flex items-center gap-2 text-sm">
              <Clock className="w-4 h-4 text-primary" />
              <span className="font-medium">5 Days / 4 Nights</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="font-medium">Dubai, UAE</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Users className="w-4 h-4 text-primary" />
              <span className="font-medium">Min 2 Travelers</span>
            </div>
            <div className="flex items-center gap-1 text-sm">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="font-bold">4.8</span>
              <span className="text-gray-500">(256 reviews)</span>
            </div>
          </div>
          {/* Tabs Row */}
          <div className="flex gap-1 overflow-x-auto py-2">
            {['inclusions', 'gallery', 'faqs'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full text-sm font-medium capitalize transition-colors ${
                  activeTab === tab
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content with Background */}
      <div 
        className="relative"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&q=80')`,
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 "></div>
        
        <div className="relative container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Trip Information */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* Package Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-4">Package Highlights</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {packageHighlights.map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center p-4 bg-primary/5 rounded-xl">
                    <item.icon className="w-8 h-8 text-primary mb-2" />
                    <span className="text-sm font-medium text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Overview Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-4">About This Trip</h2>
              <p className="text-gray-600 leading-relaxed">
                Experience the perfect blend of tradition and modernity in Dubai. From towering skyscrapers 
                to golden deserts, luxurious shopping to authentic souks, Dubai offers an unforgettable journey. 
                Explore architectural marvels, indulge in world-class dining, and create memories that last a lifetime.
                This carefully curated package includes all the must-visit attractions along with hidden gems 
                that most tourists miss.
              </p>
            </motion.div>

            {/* Inclusions & Exclusions */}
            <motion.div
              id="inclusions"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-6">What's Included</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-base font-semibold text-green-600 mb-4 flex items-center gap-2">
                    <Check className="w-5 h-5" /> Inclusions
                  </h3>
                  <ul className="space-y-3">
                    {packageInclusions.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-gray-600">
                        <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-red-600 mb-4 flex items-center gap-2">
                    <Ban className="w-5 h-5" /> Exclusions
                  </h3>
                  <ul className="space-y-3">
                    {packageExclusions.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-gray-600">
                        <Ban className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Things To Do */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-6">Things To Do in Dubai</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {thingsToDo.map((activity, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-xl h-48 card-hover"
                  >
                    <img
                      src={activity.image}
                      alt={activity.title}
                      className="w-full h-full object-cover image-zoom"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-base font-bold text-white mb-1">{activity.title}</h3>
                      <p className="text-white/80 text-sm">{activity.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Gallery Section */}
            <motion.div
              id="gallery"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-6">Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
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
                    className="overflow-hidden rounded-xl aspect-square card-hover"
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
              id="faqs"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="space-y-3">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-gray-50 rounded-xl px-4 border-none"
                  >
                    <AccordionTrigger className="text-left font-medium text-gray-900 hover:no-underline text-sm">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 text-sm">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>

            {/* Why Book With Us */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-6 text-white"
            >
              <h2 className="text-xl font-bold mb-6">Why Book With Roamzyy?</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Shield className="w-8 h-8" />
                  <div>
                    <p className="font-medium text-sm">Safe & Secure</p>
                    <p className="text-xs text-white/80">100% secure payments</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Headphones className="w-8 h-8" />
                  <div>
                    <p className="font-medium text-sm">24/7 Support</p>
                    <p className="text-xs text-white/80">Round the clock assistance</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <CreditCard className="w-8 h-8" />
                  <div>
                    <p className="font-medium text-sm">Easy EMI</p>
                    <p className="text-xs text-white/80">Flexible payment options</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-8 h-8" />
                  <div>
                    <p className="font-medium text-sm">Expert Guides</p>
                    <p className="text-xs text-white/80">Local travel experts</p>
                  </div>
                </div>
              </div>
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
      </div>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default DubaiPage;