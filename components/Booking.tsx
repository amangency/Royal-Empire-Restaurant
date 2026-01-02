import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, Utensils, Send } from 'lucide-react';

const Booking: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '2 Guests',
    occasion: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🔴 YOUR WHATSAPP NUMBER HERE
  const PHONE_NUMBER = "918863028185";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.date || !formData.time) {
      alert("Please fill in all required fields.");
      return;
    }

    const message = `*🛎️ New Reservation* \n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Date:* ${formData.date}\n` +
      `*Time:* ${formData.time}\n` +
      `*Guests:* ${formData.guests}\n` +
      `*Occasion:* ${formData.occasion || 'None'}`;

    const url = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="booking" className="py-16 md:py-24 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/images/pattern-dark.png')] opacity-10 mix-blend-overlay"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8 text-center lg:text-left"
          >
            <div>
              <span className="text-royal-gold text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase flex items-center justify-center lg:justify-start gap-3">
                <div className="hidden lg:block h-[1px] w-8 bg-royal-gold"></div>
                Reservations
              </span>
              
              {/* FIXED: Font matches 'Reviews' section exactly now */}
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mt-4 leading-tight">
                Book Your <span className="text-royal-gold">Royal Table</span>
              </h2>
            </div>
            
            <p className="text-gray-400 text-sm md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
              Reserve your spot for an unforgettable fine dining experience. Direct WhatsApp booking for instant confirmation.
            </p>
          </motion.div>

          {/* 💎 The Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-md p-6 md:p-10 rounded-sm border border-white/10 relative group"
          >
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                
                {/* Inputs: Darker & Cleaner */}
                <InputGroup icon={<Users size={16} />} label="Full Name">
                    <input type="text" name="name" placeholder="Rahul Sharma" value={formData.name} onChange={handleChange} 
                      className="w-full bg-black/80 border border-white/10 rounded-sm px-4 py-3 text-white text-sm focus:border-royal-gold outline-none transition-all" required />
                </InputGroup>

                <InputGroup icon={<Send size={16} />} label="Phone Number">
                    <input type="tel" name="phone" placeholder="+91 98765..." value={formData.phone} onChange={handleChange}
                      className="w-full bg-black/80 border border-white/10 rounded-sm px-4 py-3 text-white text-sm focus:border-royal-gold outline-none transition-all" required />
                </InputGroup>

                <InputGroup icon={<Calendar size={16} />} label="Date">
                    <input type="date" name="date" value={formData.date} onChange={handleChange}
                      className="w-full bg-black/80 border border-white/10 rounded-sm px-4 py-3 text-white text-sm focus:border-royal-gold outline-none transition-all uppercase" required />
                </InputGroup>

                 <InputGroup icon={<Clock size={16} />} label="Time">
                    <input type="time" name="time" value={formData.time} onChange={handleChange}
                      className="w-full bg-black/80 border border-white/10 rounded-sm px-4 py-3 text-white text-sm focus:border-royal-gold outline-none transition-all" required />
                </InputGroup>
                
                <div className="md:col-span-2 grid grid-cols-2 gap-4">
                  <InputGroup icon={<Users size={16} />} label="Guests">
                      <select name="guests" value={formData.guests} onChange={handleChange}
                        className="w-full bg-black/80 border border-white/10 rounded-sm px-4 py-3 text-white text-sm focus:border-royal-gold outline-none transition-all appearance-none">
                          {[1,2,3,4,5,6,7,8,"8+"].map(num => (
                              <option key={num} value={`${num} Guests`} className="bg-black text-white">{num} Guests</option>
                          ))}
                      </select>
                  </InputGroup>

                  <InputGroup icon={<Utensils size={16} />} label="Occasion">
                    <input type="text" name="occasion" placeholder="Birthday..." value={formData.occasion} onChange={handleChange}
                        className="w-full bg-black/80 border border-white/10 rounded-sm px-4 py-3 text-white text-sm focus:border-royal-gold outline-none transition-all" />
                  </InputGroup>
                </div>

              </div>

              {/* 🚀 FIXED BUTTON (Mobile Optimized) */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                // Fixed: Reduced horizontal padding (px-4), smaller text on mobile (text-xs), flex-nowrap to prevent breaking
                className="w-full bg-royal-gold text-black py-4 px-4 md:px-6 rounded-sm font-bold uppercase tracking-[0.15em] text-xs md:text-sm flex items-center justify-center gap-3 hover:bg-white transition-all duration-300 shadow-lg group whitespace-nowrap"
              >
                <span>Send Request to Concierge</span>
                {/* Fixed: Arrow won't be cut off now */}
                <Send size={16} className="group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </motion.button>
              
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Helper Component
const InputGroup = ({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) => (
    <div className="space-y-2">
        <label className="text-royal-gold/80 text-[10px] md:text-xs font-bold uppercase tracking-widest flex items-center gap-2">
            {icon} {label}
        </label>
        {children}
    </div>
);

export default Booking;
