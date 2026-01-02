import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Calendar, UtensilsCrossed } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - ✅ FIXED: Now using Local Path */}
      <div className="absolute inset-0 z-0">
        <img 
          // 👇 YAHAN CHANGE KIYA HAI
          src="/images/hero-bg.webp"
          alt="Royal Dining Table"
          className="w-full h-full object-cover"
          // @ts-ignore
          fetchpriority="high" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-royal-black via-black/70 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="block text-royal-gold tracking-[0.2em] uppercase font-semibold mb-4 text-sm md:text-base"
        >
          Best Food in Bihar
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight"
        >
          Experience the <br />
          <span className="text-royal-gold italic">Royal Taste</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-300 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto"
        >
          Premium Multi-Cuisine Dining in the heart of Muzaffarpur. 
          Where tradition meets culinary excellence.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a 
            href="#menu"
            onClick={(e) => scrollToSection(e, 'menu')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 bg-royal-gold text-black font-bold text-sm tracking-widest uppercase hover:bg-white transition-all duration-300 transform hover:-translate-y-1"
          >
            <UtensilsCrossed size={18} /> Order Now
          </a>
          <a 
            href="#booking"
            onClick={(e) => scrollToSection(e, 'booking')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 bg-transparent border border-royal-gold text-royal-gold font-bold text-sm tracking-widest uppercase hover:bg-royal-gold hover:text-black transition-all duration-300 transform hover:-translate-y-1"
          >
            <Calendar size={18} /> Book a Table
          </a>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-royal-gold cursor-pointer z-20"
        onClick={() => {
          const signature = document.getElementById('signature');
          if (signature) {
             const offset = 80;
             const bodyRect = document.body.getBoundingClientRect().top;
             const elementRect = signature.getBoundingClientRect().top;
             const elementPosition = elementRect - bodyRect;
             const offsetPosition = elementPosition - offset;
             window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
          }
        }}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;
