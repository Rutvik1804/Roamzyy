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
            className="lg:col-span-2 gradient-primary rounded-3xl p-8 flex flex-col justify-between"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div>
              <h3 className="text-2xl font-display font-bold text-primary-foreground mb-4">Let's Plan Your Journey</h3>
              <p className="text-primary-foreground/80 text-sm mb-8 leading-relaxed">
                Our travel experts are ready to craft the perfect getaway for you. Reach out and let's start planning!
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-primary-foreground">
                <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground">
                <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-sm">hello@roamzyy.com</span>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground">
                <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-sm">Mumbai, India</span>
              </div>
            </div>
            <div className="mt-8 text-6xl">✈️</div>
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
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-bold rounded-full text-lg hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
                >
                  {submitted ? '✓ Sent!' : <><Send className="w-5 h-5" /> Submit Inquiry</>}
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
