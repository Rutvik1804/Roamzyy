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
      className="sticky top-[180px] bg-white rounded-2xl shadow-xl p-5 border border-gray-100"
    >
      <div className="mb-4">
        <h3 className="text-lg font-bold text-gray-900 mb-1">{destination}</h3>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-primary">₹{price}</span>
          <span className="text-gray-500 text-sm">/ person</span>
        </div>
      </div>

      <div className="space-y-3 mb-4">
        <div className="flex items-center gap-2 text-gray-700 text-sm">
          <Calendar className="w-4 h-4 text-primary" />
          <span className="font-medium">{duration}</span>
        </div>

        <div className="border-t pt-3">
          <h4 className="font-bold text-gray-900 mb-2 text-sm">Package Inclusions</h4>
          <ul className="space-y-1.5">
            {inclusions.slice(0, 5).map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-xs text-gray-600">
                <span className="text-green-500 mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
            {inclusions.length > 5 && (
              <li className="text-xs text-primary font-medium mt-2">+{inclusions.length - 5} more inclusions</li>
            )}
          </ul>
        </div>
      </div>

      <div className="space-y-2">
        <button
          onClick={onEnquiry}
          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-2.5 rounded-full text-sm transition-all duration-300 transform hover:scale-105 shadow-md"
        >
          Quick Enquiry
        </button>

        <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-2 rounded-full flex items-center justify-center gap-2 text-sm transition-all duration-300">
          <Phone className="w-3.5 h-3.5" />
          Call Now
        </button>

        <button
          onClick={onDownload}
          className="w-full border border-primary text-primary hover:bg-primary hover:text-white font-semibold py-2 rounded-full flex items-center justify-center gap-2 text-sm transition-all duration-300"
        >
          <Download className="w-3.5 h-3.5" />
          Download PDF
        </button>
      </div>

      <p className="mt-3 text-center text-[10px] text-gray-400">
        * Prices subject to availability
      </p>
    </motion.div>
  );
};

export default StickyPricingCard;
