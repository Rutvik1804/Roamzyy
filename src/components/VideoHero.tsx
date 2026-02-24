import { ReactNode, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface VideoHeroProps {
  videoUrl: string;
  title: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  height?: string;
  children?: ReactNode;
}

const VideoHero = ({
  videoUrl,
  title,
  subtitle,
  ctaText,
  onCtaClick,
  height = 'h-[70vh]',
  children,
}: VideoHeroProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Ensure video plays - some browsers block autoplay
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log('Video autoplay failed:', error);
      });
    }
  }, [videoUrl]);

  return (
    <div className={`relative ${height} overflow-hidden`}>
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-6 md:mb-8">
              {subtitle}
            </p>
          )}
          {ctaText && onCtaClick && (
            <button
              onClick={onCtaClick}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {ctaText}
            </button>
          )}
          {children}
        </motion.div>
      </div>
    </div>
  );
};

export default VideoHero;
