import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Crown, ShieldCheck, Heart, ScrollText } from 'lucide-react';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'about' | 'terms';
}

const InfoModals: React.FC<InfoModalProps> = ({ isOpen, onClose, type }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: '100%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '100%' }}
          transition={{ type: 'spring', damping: 30, stiffness: 200 }}
          className="fixed inset-0 z-[200] bg-royal-black overflow-y-auto scrollbar-hide"
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="fixed top-8 right-8 z-[210] w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-royal-gold hover:text-black transition-all"
          >
            <X size={24} />
          </button>

          {type === 'about' ? (
            <div className="min-h-screen flex items-center justify-center p-8 md:p-20 bg-royal-black">
              <div className="max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-center"
                >
                  <Crown className="text-royal-gold mb-6 mx-auto" size={40} />
                  <h2 className="text-royal-gold font-serif text-5xl md:text-7xl font-bold mb-8">Our Heritage</h2>
                  
                  <div className="space-y-6 text-gray-400 font-light text-lg leading-relaxed">
                    <p>
                      Born in the vibrant heart of Mithanpura in 2025, <span className="text-white font-medium">Royal Empire</span> was established with a singular vision: to redefine the architecture of flavor. We don't just serve meals; we orchestrate dining ceremonies.
                    </p>
                    <p>
                      Every spice in our kitchen is hand-selected from the finest growers, and every recipe is a guarded secret, passed through generations of master chefs who believe that "Good" is the enemy of "Exquisite."
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 max-w-2xl mx-auto text-left">
                      <div className="bg-white/5 p-6 rounded-sm border border-white/5 hover:border-royal-gold/30 transition-colors">
                        <Heart className="text-royal-gold mb-4" size={24} />
                        <h4 className="text-white font-serif text-xl mb-2">Passion</h4>
                        <p className="text-sm">Driven by a love for culinary perfection and guest satisfaction.</p>
                      </div>
                      <div className="bg-white/5 p-6 rounded-sm border border-white/5 hover:border-royal-gold/30 transition-colors">
                        <ShieldCheck className="text-royal-gold mb-4" size={24} />
                        <h4 className="text-white font-serif text-xl mb-2">Quality</h4>
                        <p className="text-sm">Rigorous standards for every ingredient that enters our gates.</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          ) : (
            <div className="max-w-4xl mx-auto px-6 py-24">
              <div className="text-center mb-16">
                <ScrollText className="text-royal-gold mx-auto mb-6" size={48} />
                <h2 className="text-white font-serif text-5xl font-bold mb-4">Terms of Excellence</h2>
                <p className="text-royal-gold uppercase tracking-widest text-xs">The Guest Registry & Protocols</p>
              </div>

              <div className="space-y-12 text-gray-400">
                <section>
                  <h3 className="text-white font-serif text-2xl mb-4 border-l-2 border-royal-gold pl-4">1. The Royal Order Protocol</h3>
                  <p className="leading-relaxed">
                    All orders placed via our WhatsApp concierge are subject to availability. We strive to fulfill every request with royal precision, but during high-volume hours (Empire Hours), preparation times may extend to ensure quality.
                  </p>
                </section>

                <section>
                  <h3 className="text-white font-serif text-2xl mb-4 border-l-2 border-royal-gold pl-4">2. Guest Conduct</h3>
                  <p className="leading-relaxed">
                    Royal Empire is a sanctuary of fine dining. We request all patrons to maintain an atmosphere of mutual respect and sophistication. Management reserves the right to refuse service to any individual who disrupts the tranquility of the Empire.
                  </p>
                </section>

                <section>
                  <h3 className="text-white font-serif text-2xl mb-4 border-l-2 border-royal-gold pl-4">3. Privacy & Loyalty</h3>
                  <p className="leading-relaxed">
                    Your data is treated with the utmost confidentiality, much like our secret sauce recipes. We use your phone number exclusively for order fulfillment and occasional invitations to private tasting events.
                  </p>
                </section>

                <div className="pt-12 border-t border-white/5 text-center italic text-sm">
                  Revised: May 2025. Approved by the Royal Council of Chefs.
                </div>
              </div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InfoModals;