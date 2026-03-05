import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface DestinationCardProps {
  name: string;
  image: string;
  price: string;
  link: string;
  description?: string;
  index?: number;
}

const DestinationCard = ({
  name,
  image,
  price,
  link,
  description,
  index = 0,
}: DestinationCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl shadow-lg h-[320px] card-hover"
    >
      <Link to={link} className="block h-full">
        {/* Gradient border at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-yellow-400 z-20" />
        
        {/* Image with zoom effect */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover image-zoom"
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-5">
          {/* Price Badge */}
          <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1.5 rounded-full font-bold text-sm shadow-lg">
            ₹{price}
          </div>

          {/* Destination Name */}
          <h3 className="text-2xl font-bold text-white mb-1">{name}</h3>

          {/* Description */}
          {description && (
            <p className="text-white/80 text-sm mb-3 line-clamp-2">{description}</p>
          )}

          {/* Explore Button */}
          <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-1.5 px-4 rounded-full text-xs w-fit transition-all duration-300 transform group-hover:scale-105">
            Explore Now
          </button>
        </div>
      </Link>
    </motion.div>
  );
};

export default DestinationCard;
