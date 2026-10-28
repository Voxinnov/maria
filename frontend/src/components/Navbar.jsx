import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Near by Attractions', path: '/attractions' },
    { name: 'Facilities', path: '/amenities' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Restaurant', path: '/restaurant' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact us', path: '/contact' }
  ];

  return (
    <>
      <nav 
        className={`fixed w-full z-50 transition-all duration-700 ${
          isScrolled 
            ? 'py-4 bg-[#f4f0e6]/95 backdrop-blur-xl border-b border-[#d1cdba]/30 shadow-sm' 
            : 'py-6 bg-[#f4f0e6]/60 backdrop-blur-md border-b border-[#d1cdba]/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex-shrink-0 relative z-20">
              <Link to="/">
                <img 
                  src="/logo.svg" 
                  alt="Hotel Maria Logo" 
                  className="h-10 md:h-12 w-auto" 
                />
              </Link>
            </div>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((item) => (
                <Link 
                  key={item.name}
                  to={item.path}
                  className="text-[10px] sm:text-[11px] font-medium tracking-[0.15em] uppercase text-[#5b5851] hover:text-[#232322] transition-colors duration-300 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-2 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full bg-[#232322]" />
                </Link>
              ))}
            </div>

            {/* Book Now Button Desktop */}
            <div className="hidden lg:flex relative z-20">
              <Link 
                to="/contact#contact-form" 
                className="px-8 py-3 text-[10px] font-semibold tracking-[0.2em] uppercase transition-all duration-300 border border-[#232322] text-[#232322] hover:bg-[#232322] hover:text-[#f4f0e6]"
              >
                Book
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden relative z-20 text-[#232322] transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Fullscreen Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#f4f0e6] flex flex-col items-center justify-center space-y-6"
          >
            {navLinks.map((item) => (
              <Link 
                key={item.name}
                onClick={() => setMobileMenuOpen(false)}
                to={item.path}
                className="text-3xl font-serif text-[#232322] hover:text-[#8a867d] transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link 
              to="/contact#contact-form" 
              onClick={() => setMobileMenuOpen(false)}
              className="mt-8 px-12 py-4 border border-[#232322] text-[#232322] font-semibold uppercase tracking-widest text-xs hover:bg-[#232322] hover:text-[#f4f0e6] transition-colors"
            >
              Book Your Stay
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
