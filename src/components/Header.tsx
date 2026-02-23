import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import logo from '@/assets/roamzyy-logo.png';

const internationalDestinations = [
  'Dubai', 'Bali', 'Thailand', 'Vietnam', 'Maldives',
  'Singapore', 'Europe', 'Malaysia', 'Kazakhstan', 'Bhutan'
];

const indiaDestinations = ['Ladakh', 'Kashmir', 'Kerala', 'Rajasthan', 'Andaman'];

const moreLinks = [
  { label: 'Visa', href: '#' },
  { label: 'About Us', href: '#' },
  { label: 'Contact', href: '#contact' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (key: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(key);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 200);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-header shadow-md' : ''
      }`}
      style={{ top: scrolled ? 0 : '32px' }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className={`flex items-center justify-between h-20 ${!scrolled ? 'bg-black/30 backdrop-blur-md rounded-2xl px-6 my-2' : ''}`}>
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <img src={logo} alt="Roamzyy" className={`h-14 w-auto transition-all duration-500 ${scrolled ? '' : 'brightness-0 invert'}`} />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* International */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('international')}
              onMouseLeave={handleMouseLeave}
            >
              <button className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-primary/10 ${scrolled ? 'text-foreground' : 'text-primary-foreground'}`}>
                International <ChevronDown className="w-3.5 h-3.5" />
              </button>
              {openDropdown === 'international' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-full left-0 mt-1 bg-card rounded-xl shadow-xl border border-border p-4 min-w-[320px]"
                >
                  <div className="grid grid-cols-2 gap-2">
                    {internationalDestinations.map((d) => (
                      <a key={d} href="#" className="px-3 py-2 text-sm text-foreground hover:bg-primary/10 rounded-lg transition-colors font-medium">
                        {d}
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* India */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('india')}
              onMouseLeave={handleMouseLeave}
            >
              <button className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-primary/10 ${scrolled ? 'text-foreground' : 'text-primary-foreground'}`}>
                India <ChevronDown className="w-3.5 h-3.5" />
              </button>
              {openDropdown === 'india' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-full left-0 mt-1 bg-card rounded-xl shadow-xl border border-border p-4 min-w-[180px]"
                >
                  {indiaDestinations.map((d) => (
                    <a key={d} href="#" className="block px-3 py-2 text-sm text-foreground hover:bg-primary/10 rounded-lg transition-colors font-medium">
                      {d}
                    </a>
                  ))}
                </motion.div>
              )}
            </div>

            <a href="#" className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-primary/10 ${scrolled ? 'text-foreground' : 'text-primary-foreground'}`}>
              HoneyMoon
            </a>
            <a href="#" className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-primary/10 ${scrolled ? 'text-foreground' : 'text-primary-foreground'}`}>
              Theme
            </a>

            {/* More */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('more')}
              onMouseLeave={handleMouseLeave}
            >
              <button className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-primary/10 ${scrolled ? 'text-foreground' : 'text-primary-foreground'}`}>
                More <ChevronDown className="w-3.5 h-3.5" />
              </button>
              {openDropdown === 'more' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-full right-0 mt-1 bg-card rounded-xl shadow-xl border border-border p-4 min-w-[160px]"
                >
                  {moreLinks.map((l) => (
                    <a key={l.label} href={l.href} className="block px-3 py-2 text-sm text-foreground hover:bg-primary/10 rounded-lg transition-colors font-medium">
                      {l.label}
                    </a>
                  ))}
                </motion.div>
              )}
            </div>
          </nav>

          {/* CTA + Mobile */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden lg:inline-flex px-6 py-2.5 bg-accent text-accent-foreground text-sm font-bold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Plan Your Trip
            </a>
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen
                ? <X className={`w-6 h-6 ${scrolled ? 'text-foreground' : 'text-primary-foreground'}`} />
                : <Menu className={`w-6 h-6 ${scrolled ? 'text-foreground' : 'text-primary-foreground'}`} />
              }
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="lg:hidden bg-card border-t border-border"
        >
          <div className="container mx-auto px-4 py-4 space-y-2">
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider px-3 pt-2">International</p>
            <div className="grid grid-cols-2 gap-1">
              {internationalDestinations.map(d => (
                <a key={d} href="#" className="px-3 py-2 text-sm text-foreground hover:bg-primary/10 rounded-lg">{d}</a>
              ))}
            </div>
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider px-3 pt-2">India</p>
            {indiaDestinations.map(d => (
              <a key={d} href="#" className="block px-3 py-2 text-sm text-foreground hover:bg-primary/10 rounded-lg">{d}</a>
            ))}
            <a href="#" className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-primary/10 rounded-lg">HoneyMoon</a>
            <a href="#" className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-primary/10 rounded-lg">Theme</a>
            {moreLinks.map(l => (
              <a key={l.label} href={l.href} className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-primary/10 rounded-lg">{l.label}</a>
            ))}
            <a href="#contact" className="block text-center px-6 py-3 bg-accent text-accent-foreground text-sm font-bold rounded-full mt-4">
              Plan Your Trip
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
