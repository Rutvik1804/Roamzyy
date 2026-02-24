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
      className="group relative overflow-hidden rounded-3xl shadow-lg h-[400px] card-hover"
    >
      <Link to={link} className="block h-full">
        {/* Image with zoom effect */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover image-zoom"
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          {/* Price Badge */}
          <div className="absolute top-6 right-6 bg-accent text-accent-foreground px-4 py-2 rounded-full font-bold shadow-lg">
            ₹{price}
          </div>

          {/* Destination Name */}
          <h3 className="text-3xl font-bold text-white mb-2">{name}</h3>

          {/* Description */}
          {description && (
            <p className="text-white/80 mb-4 line-clamp-2">{description}</p>
          )}

          {/* Explore Button */}
          <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-6 rounded-full w-fit transition-all duration-300 transform group-hover:scale-105">
            Explore Now
          </button>
        </div>
      </Link>
    </motion.div>
  );
};

export default DestinationCard;
