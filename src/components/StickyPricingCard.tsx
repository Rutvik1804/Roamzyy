import { Phone, Download, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

interface StickyPricingCardProps {
  destination: string;
  price: string;
  duration: string;
  inclusions: string[];
  onEnquiry?: () => void;
  onDownload?: () => void;
}

const StickyPricingCard = ({
  destination,
  price,
  duration,
  inclusions,
  onEnquiry,
  onDownload,
}: StickyPricingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-24 bg-white rounded-3xl shadow-2xl p-6 border border-gray-100"
    >
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{destination}</h3>
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold text-primary">₹{price}</span>
          <span className="text-gray-500">/ person</span>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        <div className="flex items-center gap-3 text-gray-700">
          <Calendar className="w-5 h-5 text-primary" />
          <span className="font-medium">{duration}</span>
        </div>

        <div className="border-t pt-4">
          <h4 className="font-bold text-gray-900 mb-3">Package Inclusions</h4>
          <ul className="space-y-2">
            {inclusions.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="text-green-500 mt-1">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="space-y-3">
        <button
          onClick={onEnquiry}
          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Quick Enquiry
        </button>

        <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 rounded-full flex items-center justify-center gap-2 transition-all duration-300">
          <Phone className="w-4 h-4" />
          Call Now: +91-XXXXXXXXXX
        </button>

        <button
          onClick={onDownload}
          className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold py-3 rounded-full flex items-center justify-center gap-2 transition-all duration-300"
        >
          <Download className="w-4 h-4" />
          Download Itinerary
        </button>
      </div>

      <div className="mt-6 text-center">
        <p className="text-xs text-gray-500">
          * Prices are subject to availability
        </p>
      </div>
    </motion.div>
  );
};

export default StickyPricingCard;
