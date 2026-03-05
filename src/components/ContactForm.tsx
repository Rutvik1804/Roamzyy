import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, MapPin, Phone, Mail } from 'lucide-react';
import contactBg from '@/assets/contact-bg.jpg';

const ContactForm = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0">
        <img src={contactBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4 drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
            Get In Touch
          </h2>
          <p className="text-white/80 text-lg max-w-xl mx-auto drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
            Tell us about your dream trip and we'll make it happen
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Left info panel */}
          <motion.div
            className="lg:col-span-2 relative gradient-primary rounded-3xl p-8 overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
            <div className="absolute top-1/2 right-4 w-20 h-20 border border-white/10 rounded-full" />
            
            {/* Animated dots */}
            <div className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
                backgroundSize: '20px 20px',
              }}
            />

            <div className="relative z-10">
              <h3 className="text-2xl font-display font-bold text-primary-foreground mb-3">Let's Plan Your Journey</h3>
              <p className="text-primary-foreground/80 text-sm mb-6 leading-relaxed">
                Our travel experts are ready to craft the perfect getaway for you. Reach out and let's start planning!
              </p>
              
              {/* Contact Info - Moved up below paragraph */}
              <div className="space-y-4">
                <motion.div 
                  className="flex items-center gap-3 text-primary-foreground group"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-11 h-11 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300 shadow-lg">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium">+91 98765 43210</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-3 text-primary-foreground group"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-11 h-11 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300 shadow-lg">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium">hello@roamzyy.com</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-3 text-primary-foreground group"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-11 h-11 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300 shadow-lg">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium">Mumbai, India</span>
                </motion.div>
              </div>
            </div>
            
          </motion.div>

          {/* Right form */}
          <motion.div
            className="lg:col-span-3 bg-card rounded-3xl shadow-xl border border-border p-8"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Full Name</label>
                <input type="text" required className="w-full px-4 py-3 rounded-xl border border-border bg-muted/30 text-foreground focus:ring-2 focus:ring-primary focus:outline-none transition" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
                <input type="email" required className="w-full px-4 py-3 rounded-xl border border-border bg-muted/30 text-foreground focus:ring-2 focus:ring-primary focus:outline-none transition" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Phone</label>
                <input type="tel" className="w-full px-4 py-3 rounded-xl border border-border bg-muted/30 text-foreground focus:ring-2 focus:ring-primary focus:outline-none transition" placeholder="+91 98765 43210" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Destination</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-border bg-muted/30 text-foreground focus:ring-2 focus:ring-primary focus:outline-none transition" placeholder="Maldives, Bali..." />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Travel Dates</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-border bg-muted/30 text-foreground focus:ring-2 focus:ring-primary focus:outline-none transition" placeholder="Dec 2026" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Travelers</label>
                <input type="number" min="1" className="w-full px-4 py-3 rounded-xl border border-border bg-muted/30 text-foreground focus:ring-2 focus:ring-primary focus:outline-none transition" placeholder="2" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
                <textarea rows={3} className="w-full px-4 py-3 rounded-xl border border-border bg-muted/30 text-foreground focus:ring-2 focus:ring-primary focus:outline-none transition resize-none" placeholder="Tell us about your dream trip..." />
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-full text-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
                >
                  {submitted ? '✓ Sent!' : <><Send className="w-4 h-4" /> Submit Enquiry</>}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
