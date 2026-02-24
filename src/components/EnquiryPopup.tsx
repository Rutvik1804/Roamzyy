import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const EnquiryPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Show popup after 20 seconds if not shown before
    const timer = setTimeout(() => {
      if (!hasShown) {
        setIsOpen(true);
        setHasShown(true);
      }
    }, 20000);

    return () => clearTimeout(timer);
  }, [hasShown]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your enquiry! Our team will contact you soon.');
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 flex items-center justify-center z-[101] p-4 pointer-events-none"
          >
            <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 pointer-events-auto">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>

            {/* Content */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Plan Your Dream Journey! 🌍
              </h3>
              <p className="text-gray-600">
                Get personalized travel packages and exclusive deals
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="popup-name" className="text-gray-700 font-medium mb-2 block">
                  Full Name *
                </Label>
                <Input
                  id="popup-name"
                  type="text"
                  placeholder="Enter your name"
                  required
                  className="rounded-full h-12"
                />
              </div>

              <div>
                <Label htmlFor="popup-phone" className="text-gray-700 font-medium mb-2 block">
                  Phone Number *
                </Label>
                <Input
                  id="popup-phone"
                  type="tel"
                  placeholder="+91 XXXXXXXXXX"
                  required
                  className="rounded-full h-12"
                />
              </div>

              <div>
                <Label htmlFor="popup-destination" className="text-gray-700 font-medium mb-2 block">
                  Interested Destination
                </Label>
                <Input
                  id="popup-destination"
                  type="text"
                  placeholder="e.g., Maldives, Dubai"
                  className="rounded-full h-12"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Best Offers
              </button>
            </form>

            <p className="text-xs text-gray-500 text-center mt-4">
              We respect your privacy. Your information is safe with us.
            </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default EnquiryPopup;
