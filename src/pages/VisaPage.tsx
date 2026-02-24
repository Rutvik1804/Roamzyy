import { motion } from 'framer-motion';
import { FileText, CheckCircle, Clock, Shield } from 'lucide-react';
import VideoHero from '@/components/VideoHero';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const VisaPage = () => {
  const countries = [
    { name: 'Dubai', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&q=80' },
    { name: 'Thailand', image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=400&q=80' },
    { name: 'Singapore', image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400&q=80' },
    { name: 'Malaysia', image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=400&q=80' },
    { name: 'Maldives', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=400&q=80' },
    { name: 'Bali', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&q=80' },
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Consultation',
      description: 'Contact our visa experts for free consultation',
    },
    {
      step: 2,
      title: 'Documentation',
      description: 'Submit required documents as per checklist',
    },
    {
      step: 3,
      title: 'Application',
      description: 'We process and submit your visa application',
    },
    {
      step: 4,
      title: 'Approval',
      description: 'Receive your visa and travel documents',
    },
  ];

  const faqs = [
    {
      question: 'How long does visa processing take?',
      answer: 'Processing time varies by country. Typically, tourist visas take 3-7 working days. Express services are available for urgent requirements.',
    },
    {
      question: 'What documents are required for visa application?',
      answer: 'Common documents include passport (valid for 6+ months), photographs, flight tickets, hotel bookings, bank statements, and travel insurance. Specific requirements vary by destination.',
    },
    {
      question: 'Can you help with visa rejections?',
      answer: 'Yes, we provide consultation for reapplication and help strengthen your case. We analyze rejection reasons and guide you through the process.',
    },
    {
      question: 'Do you provide visa on arrival assistance?',
      answer: 'Yes, for countries offering visa on arrival, we provide complete guidance and necessary documentation support.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <VideoHero
        videoUrl="https://videos.pexels.com/video-files/2169880/2169880-uhd_2560_1440_30fps.mp4"
        title="Visa Assistance Services"
        subtitle="Hassle-free visa processing for your international travel"
        height="h-[70vh]"
      />

      {/* Overview Section */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Expert Visa Assistance
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Navigate the complex visa process with ease. Our expert team provides end-to-end 
            visa assistance services for all major international destinations. We handle the 
            paperwork while you focus on planning your trip.
          </p>
        </motion.div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {[
            { icon: CheckCircle, title: 'High Success Rate', description: '98% approval rate' },
            { icon: Clock, title: 'Quick Processing', description: 'Fast turnaround time' },
            { icon: Shield, title: 'Secure Process', description: 'Safe & confidential' },
            { icon: FileText, title: 'Expert Guidance', description: 'Complete documentation support' },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6 text-center shadow-lg card-hover"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-[#008acc] to-[#2d3d7c] mb-4">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Countries Supported */}
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
              Countries We Serve
            </h2>
            <p className="text-xl text-gray-600">
              Visa assistance for popular tourist destinations
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {countries.map((country, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl aspect-square card-hover"
              >
                <img
                  src={country.image}
                  alt={country.name}
                  className="w-full h-full object-cover image-zoom"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-bold text-center">{country.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Steps */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Visa Application Process
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#008acc] to-[#2d3d7c]" />

            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                  <div className="bg-white rounded-3xl p-6 shadow-lg">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>

                {/* Step Number */}
                <div className="hidden md:flex w-2/12 justify-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#008acc] to-[#2d3d7c] flex items-center justify-center text-white font-bold text-2xl shadow-lg z-10">
                    {step.step}
                  </div>
                </div>

                <div className="hidden md:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Documents Required */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Commonly Required Documents
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Valid Passport (6+ months validity)',
                'Recent Passport Size Photographs',
                'Confirmed Flight Tickets',
                'Hotel Booking Confirmation',
                'Bank Statements (last 6 months)',
                'Travel Insurance',
                'Employment/Business Proof',
                'ITR/Income Proof',
              ].map((doc, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-4 flex items-center gap-3 shadow-sm"
                >
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{doc}</span>
                </div>
              ))}
            </div>

            <p className="text-center text-gray-500 mt-6 text-sm">
              * Document requirements vary by destination. Our team will provide a detailed checklist.
            </p>
          </motion.div>
        </div>
      </div>

      {/* FAQs */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>

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
              Need Visa Assistance?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact our visa experts today for a free consultation
            </p>
            <button className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-4 px-12 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get Free Consultation
            </button>
          </motion.div>
        </div>
      </div>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default VisaPage;
