import React from 'react';
import { MapPin, Phone, Clock, ExternalLink, Instagram, Facebook, Twitter, Mail, Crown, Compass, Navigation, FileText, Info, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

interface LocationProps {
  onOpenAbout: () => void;
  onOpenTerms: () => void;
}

const Location: React.FC<LocationProps> = ({ onOpenAbout, onOpenTerms }) => {
  const currentYear = new Date().getFullYear();

  return (
    <section id="location" className="bg-royal-black relative overflow-hidden">
      {/* Huge Background Typography */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 select-none pointer-events-none z-0 overflow-hidden w-full whitespace-nowrap text-center">
        <span className="text-[15vw] font-serif font-black text-royal-gold/[0.03] leading-none uppercase tracking-tighter italic">
          Destination • Empire • Destination
        </span>
      </div>

      <div className="relative z-10 pt-20 pb-0">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Side: Branding & Info */}
            <div className="lg:col-span-5 space-y-10 py-12">
              <div>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-3 text-royal-gold mb-6"
                >
                  <Compass size={20} className="animate-spin-slow" />
                  <span className="uppercase tracking-[0.4em] text-xs font-bold">Find the Empire</span>
                </motion.div>
                
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-white font-serif text-5xl md:text-7xl font-bold leading-[0.9] mb-8"
                >
                  Locate <br />
                  <span className="text-royal-gold italic">The Royal</span>
                </motion.h2>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-8"
              >
                <div className="flex gap-6 group">
                  <div className="w-12 h-12 rounded-full border border-royal-gold/20 flex items-center justify-center shrink-0 group-hover:border-royal-gold group-hover:bg-royal-gold/5 transition-all">
                    <MapPin className="text-royal-gold" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-serif text-xl mb-2">Our Address</h4>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                      Club Rd, opposite WEST SIDE MALL, Haji Nagar Colony, Mithanpura, Muzaffarpur, Bihar 842002
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="w-12 h-12 rounded-full border border-royal-gold/20 flex items-center justify-center shrink-0 group-hover:border-royal-gold group-hover:bg-royal-gold/5 transition-all">
                    <Navigation className="text-royal-gold" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-serif text-xl mb-2">Coordinates</h4>
                    <p className="text-royal-gold/60 font-mono text-xs tracking-widest uppercase">
                      26.1265° N, 85.3985° E
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
              >
                <a 
                  href="https://www.google.com/maps/dir//Royal+Empire+Restaurant" 
                  target="_blank" rel="noreferrer"
                  className="group relative inline-flex items-center gap-4 px-12 py-5 bg-royal-gold text-black font-bold uppercase tracking-[0.2em] text-xs overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Start Navigation <ExternalLink size={14} />
                  </span>
                  <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </a>
              </motion.div>
            </div>

            {/* Right Side: Map Portal */}
            <div className="lg:col-span-7 relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="relative z-20 aspect-video lg:aspect-square w-full rounded-sm overflow-hidden border border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] bg-royal-charcoal"
              >
                <div className="absolute inset-0 z-10 pointer-events-none border-[20px] border-royal-black/40"></div>
                <div className="absolute inset-0 z-10 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]"></div>
                
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.657563533866!2d85.3985!3d26.1265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed1116e9519d8b%3A0xfa3d9e90eeb921be!2sRoyal%20Empire%20Restaurant!5e0!3m2!1sen!2sin!4v1715424000000!5m2!1sen!2sin" 
                  className="w-full h-full grayscale brightness-[0.6] invert-[0.9] hue-rotate-[180deg] contrast-[1.2]"
                  style={{ border: 0 }}
                  allowFullScreen={true} 
                  loading="lazy" 
                  title="Location Map"
                ></iframe>

                <div className="absolute top-10 right-10 z-20 bg-black/60 backdrop-blur-md px-4 py-2 border border-white/10 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-royal-gold animate-pulse"></span>
                  <span className="text-[10px] text-white uppercase tracking-widest font-bold">Empire Live Status</span>
                </div>
              </motion.div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 border border-royal-gold/10 -z-10 rotate-12"></div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER SECTION */}
      <footer className="relative pt-32 pb-12 px-4 md:px-8 border-t border-white/5 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[300px] bg-royal-gold/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            
            {/* Column 1: Heritage */}
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <Crown className="text-royal-gold" size={28} />
                <span className="text-3xl font-serif font-bold text-white tracking-wider">Royal Empire</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed font-light italic">
                "Where every meal is a coronation ceremony. Experience the pinnacle of culinary artistry."
              </p>
              <div className="flex gap-4">
                {[Instagram, Facebook, Twitter].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center text-gray-500 hover:border-royal-gold hover:text-royal-gold transition-all bg-white/[0.02] hover:bg-royal-gold/5">
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Navigation */}
            <div>
              <h4 className="text-white font-serif text-xl mb-10 relative">
                Gastronomy
                <span className="absolute -bottom-3 left-0 w-10 h-[1px] bg-royal-gold"></span>
              </h4>
              <ul className="space-y-4">
                {[
                  { name: 'Home', href: '#home' },
                  { name: 'The Menu', href: '#menu' },
                  { name: 'Book a Table', href: '#booking' },
                  { name: 'Guest Reviews', href: '#reviews' }
                ].map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-gray-500 hover:text-royal-gold text-sm transition-all flex items-center gap-3 group">
                      <span className="w-0 h-[1px] bg-royal-gold group-hover:w-4 transition-all"></span>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: THE REGISTRY */}
            <div>
              <h4 className="text-white font-serif text-xl mb-10 relative">
                The Registry
                <span className="absolute -bottom-3 left-0 w-10 h-[1px] bg-royal-gold"></span>
              </h4>
              <ul className="space-y-5">
                <li>
                  <button onClick={onOpenAbout} className="text-gray-400 hover:text-royal-gold text-sm flex items-center gap-3 transition-colors group text-left">
                    <Info size={16} className="text-royal-gold/40 group-hover:text-royal-gold" />
                    Our Story (About Us)
                  </button>
                </li>
                <li>
                  <button onClick={onOpenTerms} className="text-gray-400 hover:text-royal-gold text-sm flex items-center gap-3 transition-colors group text-left">
                    <FileText size={16} className="text-royal-gold/40 group-hover:text-royal-gold" />
                    Terms of Excellence
                  </button>
                </li>
                <li>
                  <button className="text-gray-400 hover:text-royal-gold text-sm flex items-center gap-3 transition-colors group text-left">
                    <Shield size={16} className="text-royal-gold/40 group-hover:text-royal-gold" />
                    Privacy Protocol
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 4: Concierge */}
            <div>
              <h4 className="text-white font-serif text-xl mb-10 relative">
                Concierge
                <span className="absolute -bottom-3 left-0 w-10 h-[1px] bg-royal-gold"></span>
              </h4>
              <ul className="space-y-6">
                <li className="flex gap-4 group">
                  <Phone className="text-royal-gold/40" size={18} />
                  <span className="text-gray-400 text-sm font-medium">+91 88630 28185</span>
                </li>
                <li className="flex gap-4 group">
                  <Mail className="text-royal-gold/40" size={18} />
                  <span className="text-gray-400 text-sm">hello@royalempire.com</span>
                </li>
                <li className="flex gap-4">
                  <Clock className="text-royal-gold/40" size={18} />
                  <span className="text-gray-400 text-sm">11 AM — 11 PM Daily</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-gray-700 text-[10px] tracking-[0.3em] uppercase font-bold">
              &copy; {currentYear} Royal Empire Legacy.
            </p>
            <div className="flex items-center gap-3 group cursor-default">
              <span className="text-gray-600 text-[10px] uppercase tracking-widest">Masterfully crafted by</span>
              <span className="text-royal-gold/60 text-base font-serif italic">Aman</span>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Location;