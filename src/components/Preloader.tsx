import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '@/assets/roamzyy-logo.png';

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 600);
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gradient-primary"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Animated airplane circle */}
          <div className="relative w-52 h-52 mb-8">
            <motion.img
              src={logo}
              alt="Roamzyy"
              className="w-40 h-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              animate={{ rotate: [0, 3, -3, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            {/* Dotted circle path */}
            <svg className="absolute inset-0 w-full h-full animate-spin-slow" viewBox="0 0 208 208">
              <circle cx="104" cy="104" r="94" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeDasharray="8 8" />
            </svg>
            {/* Airplane */}
            <motion.div
              className="absolute"
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: '104px 104px', width: '208px', height: '208px' }}
            >
              <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl">✈️</span>
            </motion.div>
          </div>

          <motion.p
            className="text-primary-foreground text-lg font-medium tracking-wider"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Preparing Your Journey…
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
