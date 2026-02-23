import logo from '@/assets/roamzyy-logo.png';
import footerBg from '@/assets/footer-bg.jpg';
import footerSkyline from '@/assets/footer-image.png';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery4 from '@/assets/gallery-4.jpg';
import gallery5 from '@/assets/gallery-5.jpg';
import gallery6 from '@/assets/gallery-6.jpg';
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const internationalTrips = ['Dubai', 'Bali', 'Thailand', 'Vietnam', 'Maldives', 'Singapore', 'Europe', 'Malaysia', 'Kazakhstan', 'Bhutan'];
const indiaTrips = ['Ladakh', 'Kashmir', 'Kerala', 'Rajasthan', 'Andaman'];
const themeTrips = ['Adventure', 'Relaxing', 'High Energy', 'Luxury', 'HoneyMoon'];
const quickLinks = ['About Us', 'Contact', 'Visa', 'Privacy Policy', 'Terms & Conditions'];
const galleryImages = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];

const Footer = () => {
  return (
    <footer className="relative text-primary-foreground">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={footerBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-footer/90" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Logo + tagline */}
        <div className="text-center mb-12">
          <img src={logo} alt="Roamzyy" className="h-24 mx-auto mb-3 brightness-0 invert" />
          <p className="text-primary-foreground/60 text-sm tracking-widest uppercase">Journeys Made Easy</p>
        </div>

        {/* Gallery strip */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mb-12 rounded-2xl overflow-hidden">
          {galleryImages.map((img, i) => (
            <div key={i} className="aspect-square overflow-hidden">
              <img src={img} alt={`Travel ${i + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" loading="lazy" />
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          <div>
            <h4 className="text-primary-foreground font-bold text-lg mb-5">International Trips</h4>
            <ul className="space-y-2.5">
              {internationalTrips.map(t => (
                <li key={t}><a href="#" className="text-footer-foreground/70 hover:text-accent transition-colors text-sm">{t}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-primary-foreground font-bold text-lg mb-5">India Trips</h4>
            <ul className="space-y-2.5">
              {indiaTrips.map(t => (
                <li key={t}><a href="#" className="text-footer-foreground/70 hover:text-accent transition-colors text-sm">{t}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-primary-foreground font-bold text-lg mb-5">Themes</h4>
            <ul className="space-y-2.5">
              {themeTrips.map(t => (
                <li key={t}><a href="#" className="text-footer-foreground/70 hover:text-accent transition-colors text-sm">{t}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-primary-foreground font-bold text-lg mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map(t => (
                <li key={t}><a href="#" className="text-footer-foreground/70 hover:text-accent transition-colors text-sm">{t}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-10 text-center">
          <p className="font-bold text-primary-foreground text-lg mb-2">Roamzyy Travels Pvt Ltd</p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-footer-foreground/60 mb-6">
            <span className="flex items-center gap-1.5"><Mail className="w-4 h-4" /> hello@roamzyy.com</span>
            <span className="flex items-center gap-1.5"><Phone className="w-4 h-4" /> +91 98765 43210</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> Mumbai, India</span>
          </div>
          <div className="flex items-center justify-center gap-4 mb-8">
            {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
          {/* Skyline illustration */}
          <div className="mt-8 mb-6 max-w-4xl mx-auto">
            <img src={footerSkyline} alt="" className="w-full max-h-64 object-contain opacity-60" />
          </div>
          <p className="text-footer-foreground/40 text-xs">
            © {new Date().getFullYear()} Roamzyy Travels Pvt Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
