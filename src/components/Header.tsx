import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '@/assets/roamzyy-logo.png';

const internationalDestinations = [
  { name: 'Dubai', path: '/international/dubai' },
  { name: 'Bali', path: '/international/bali' },
  { name: 'Thailand', path: '/international/thailand' },
  { name: 'Vietnam', path: '/international/vietnam' },
  { name: 'Maldives', path: '/international/maldives' },
  { name: 'Singapore', path: '/international/singapore' },
  { name: 'Europe', path: '/international/europe' },
  { name: 'Malaysia', path: '/international/malaysia' },
  { name: 'Kazakhstan', path: '/international/kazakhstan' },
  { name: 'Bhutan', path: '/international/bhutan' }
];

const indiaDestinations = [
  { name: 'Ladakh', path: '/india/ladakh' },
  { name: 'Kashmir', path: '/india/kashmir' },
  { name: 'Kerala', path: '/india/kerala' },
  { name: 'Rajasthan', path: '/india/rajasthan' },
  { name: 'Andaman', path: '/india/andaman' }
];

const moreLinks = [
  { label: 'Visa', href: '/visa' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
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
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src={logo} alt="Roamzy" className="h-24 w-auto transition-all duration-500" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* International */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('international')}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/international" className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-primary/10 ${scrolled ? 'text-foreground' : 'text-primary-foreground'}`}>
                International <ChevronDown className="w-3.5 h-3.5" />
              </Link>
              {openDropdown === 'international' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-full left-0 mt-1 bg-card rounded-xl shadow-xl border border-border p-4 min-w-[320px]"
                >
                  <div className="grid grid-cols-2 gap-2">
                    {internationalDestinations.map((d) => (
                      <Link key={d.name} to={d.path} className="px-3 py-2 text-sm text-foreground hover:bg-primary/10 rounded-lg transition-colors font-medium">
                        {d.name}
                      </Link>
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
              <Link to="/india" className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-primary/10 ${scrolled ? 'text-foreground' : 'text-primary-foreground'}`}>
                India <ChevronDown className="w-3.5 h-3.5" />
              </Link>
              {openDropdown === 'india' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-full left-0 mt-1 bg-card rounded-xl shadow-xl border border-border p-4 min-w-[180px]"
                >
                  {indiaDestinations.map((d) => (
                    <Link key={d.name} to={d.path} className="block px-3 py-2 text-sm text-foreground hover:bg-primary/10 rounded-lg transition-colors font-medium">
                      {d.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>

            <Link to="/honeymoon" className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-primary/10 ${scrolled ? 'text-foreground' : 'text-primary-foreground'}`}>
              Honeymoon
            </Link>
            <Link to="/themes" className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-primary/10 ${scrolled ? 'text-foreground' : 'text-primary-foreground'}`}>
              Themes
            </Link>

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
                    <Link key={l.label} to={l.href} className="block px-3 py-2 text-sm text-foreground hover:bg-primary/10 rounded-lg transition-colors font-medium">
                      {l.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>
          </nav>

          {/* CTA + Mobile */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden lg:inline-flex px-6 py-2.5 bg-accent text-accent-foreground text-sm font-bold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Plan Your Trip
            </Link>
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
                <Link key={d.name} to={d.path} className="px-3 py-2 text-sm text-foreground hover:bg-primary/10 rounded-lg">{d.name}</Link>
              ))}
            </div>
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider px-3 pt-2">India</p>
            {indiaDestinations.map(d => (
              <Link key={d.name} to={d.path} className="block px-3 py-2 text-sm text-foreground hover:bg-primary/10 rounded-lg">{d.name}</Link>
            ))}
            <Link to="/honeymoon" className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-primary/10 rounded-lg">Honeymoon</Link>
            <Link to="/themes" className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-primary/10 rounded-lg">Themes</Link>
            {moreLinks.map(l => (
              <Link key={l.label} to={l.href} className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-primary/10 rounded-lg">{l.label}</Link>
            ))}
            <Link to="/contact" className="block text-center px-6 py-3 bg-accent text-accent-foreground text-sm font-bold rounded-full mt-4">
              Plan Your Trip
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
