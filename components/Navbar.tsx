import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu as MenuIcon, X, Calendar } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const { totalItems, setIsCartOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Signature', href: '#signature' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reserve', href: '#booking' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Location', href: '#location' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-royal-black/95 backdrop-blur-md py-3 shadow-2xl border-b border-royal-gold/10' : 'bg-transparent py-6'}`}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-full">
          
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => scrollTo(e, 'home')}
            className="flex-shrink-0 flex items-center gap-2 group relative z-10"
          >
            <span className="text-2xl md:text-3xl leading-none transition-transform duration-300 group-hover:scale-110">👑</span>
            <span className="text-xl md:text-2xl lg:text-3xl font-serif font-bold text-royal-gold transition-transform duration-300 group-hover:scale-105 whitespace-nowrap">
              Royal Empire
            </span>
          </a>

          {/* Desktop Navigation - Centered & Spaced */}
          <div className="hidden lg:flex flex-1 justify-center items-center px-4">
            <div className="flex items-center gap-6 xl:gap-10 bg-royal-black/30 backdrop-blur-sm px-8 py-2 rounded-full border border-white/5">
              {navLinks.filter(l => l.name !== 'Reserve').map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  className="group flex items-center gap-2 text-white/70 hover:text-royal-gold transition-all duration-300 font-bold text-[10px] xl:text-[11px] tracking-[0.15em] uppercase whitespace-nowrap"
                >
                  <span className="relative">
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-royal-gold transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Action Center */}
          <div className="flex items-center gap-4 xl:gap-6 flex-shrink-0 relative z-10">
            <a 
              href="#booking"
              onClick={(e) => scrollTo(e, '#booking')}
              className="hidden md:flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-royal-gold border border-royal-gold/40 px-5 py-2 hover:bg-royal-gold hover:text-black transition-all duration-300 rounded-sm whitespace-nowrap"
            >
              <Calendar size={14} strokeWidth={2.5} /> 
              <span>Book Table</span>
            </a>
            
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative text-royal-gold hover:text-white transition-all duration-300 p-2"
              aria-label="Open Cart"
            >
              <ShoppingBag size={22} strokeWidth={2} />
              {totalItems > 0 && (
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 bg-royal-gold text-black text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center shadow-lg"
                >
                  {totalItems}
                </motion.span>
              )}
            </button>

            <div className="lg:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-royal-gold p-1"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-0 left-0 w-full h-screen bg-royal-black flex flex-col items-center justify-center lg:hidden z-[-1]"
          >
            <div className="space-y-8 text-center">
              {navLinks.map((link, idx) => (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  className="block text-2xl font-serif font-bold text-royal-silver hover:text-royal-gold transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                href="#booking"
                onClick={(e) => scrollTo(e, '#booking')}
                className="inline-block mt-8 bg-royal-gold text-black px-12 py-4 rounded-sm font-bold uppercase tracking-widest text-sm"
              >
                Reserve Now
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;