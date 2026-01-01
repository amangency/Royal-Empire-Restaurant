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
    // Validation
    if (!formData.name || !formData.phone || !formData.date || !formData.time) {
      alert("Please fill in all required fields (Name, Phone, Date, Time).");
      return;
    }

    const message = `*🛎️ New Table Reservation Request* \n\n` +
      `*👤 Name:* ${formData.name}\n` +
      `*📞 Phone:* ${formData.phone}\n` +
      `*📅 Date:* ${formData.date}\n` +
      `*⏰ Time:* ${formData.time}\n` +
      `*👥 Guests:* ${formData.guests}\n` +
      `*🎉 Occasion:* ${formData.occasion || 'Not specified'}\n\n` +
      `--------------------------------\n` +
      `*Please confirm availability.*`;

    const url = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="booking" className="py-24 bg-royal-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/images/pattern-dark.png')] opacity-10 mix-blend-overlay"></div>
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-royal-gold/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-royal-gold/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <span className="text-royal-gold text-xs font-bold tracking-[0.3em] uppercase flex items-center gap-3">
                <div className="h-[1px] w-8 bg-royal-gold"></div>
                Reservations
              </span>
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mt-6 leading-tight">
                Book Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal-gold to-amber-500">Royal Table</span>
              </h2>
            </div>
            <p className="text-royal-silver/80 text-lg leading-relaxed max-w-xl">
              Reserve your spot for an unforgettable fine dining experience. For immediate confirmation or special arrangements, our concierge is just a click away.
            </p>
            <div className="flex items-center gap-8 pt-4">
               <div className="flex -space-x-4">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-royal-black bg-cover bg-center relative" style={{ backgroundImage: `url('/images/dish${i}.webp')` }}>
                        <div className="absolute inset-0 bg-royal-gold/20 mix-blend-overlay rounded-full"></div>
                    </div>
                  ))}
               </div>
               <p className="text-royal-gold text-sm font-bold uppercase tracking-wider">Join 500+ Happy Guests this month</p>
            </div>
          </motion.div>

          {/* 💎 The Luxury Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-lg p-8 md:p-12 rounded-lg border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative group"
          >
             {/* Gold Border Accent on Hover */}
             <div className="absolute inset-0 border-2 border-royal-gold/0 rounded-lg transition-all duration-500 group-hover:border-royal-gold/30 pointer-events-none"></div>

            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              <div className="grid md:grid-cols-2 gap-8">
                
                {/* Input Group Component for consistency */}
                <InputGroup icon={<Users size={18} />} label="Full Name">
                    <input type="text" name="name" placeholder="e.g. Rahul Sharma *" value={formData.name} onChange={handleChange} 
                      className="w-full bg-black/50 border border-white/10 rounded-sm px-4 py-4 text-white placeholder:text-white/30 focus:border-royal-gold outline-none transition-all text-sm font-medium" required />
                </InputGroup>

                <InputGroup icon={<Send size={18} />} label="Phone Number">
                    <input type="tel" name="phone" placeholder="e.g. +91 98765 XXXXX *" value={formData.phone} onChange={handleChange}
                      className="w-full bg-black/50 border border-white/10 rounded-sm px-4 py-4 text-white placeholder:text-white/30 focus:border-royal-gold outline-none transition-all text-sm font-medium" required />
                </InputGroup>

                <InputGroup icon={<Calendar size={18} />} label="Date">
                    <input type="date" name="date" value={formData.date} onChange={handleChange}
                      className="w-full bg-black/50 border border-white/10 rounded-sm px-4 py-4 text-white placeholder:text-white/30 focus:border-royal-gold outline-none transition-all text-sm font-medium [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert-[1]" required />
                </InputGroup>

                 <InputGroup icon={<Clock size={18} />} label="Preferred Time">
                    <input type="time" name="time" value={formData.time} onChange={handleChange}
                      className="w-full bg-black/50 border border-white/10 rounded-sm px-4 py-4 text-white placeholder:text-white/30 focus:border-royal-gold outline-none transition-all text-sm font-medium [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert-[1]" required />
                </InputGroup>
                
                <InputGroup icon={<Users size={18} />} label="Number of People">
                    <select name="guests" value={formData.guests} onChange={handleChange}
                      className="w-full bg-black/50 border border-white/10 rounded-sm px-4 py-4 text-white focus:border-royal-gold outline-none transition-all text-sm font-medium appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23D4AF37%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-13%205.4-3.7%203.7-5.4%208-5.4%2013%200%205%201.8%209.3%205.4%2013l128%20128c3.7%203.7%208%205.4%2013%205.4s9.3-1.8%2013-5.4l128-128c3.7-3.7%205.4-8%205.4-13%200-5-1.8-9.3-5.4-13z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px_12px] bg-[right_1rem_center] bg-no-repeat pr-10">
                        {[1,2,3,4,5,6,7,8,"8+"].map(num => (
                            <option key={num} value={`${num} Guests`} className="bg-royal-black text-white">{num} Guests</option>
                        ))}
                    </select>
                </InputGroup>

                <InputGroup icon={<Utensils size={18} />} label="Occasion (Optional)">
                   <input type="text" name="occasion" placeholder="Birthday, Anniversary, etc." value={formData.occasion} onChange={handleChange}
                      className="w-full bg-black/50 border border-white/10 rounded-sm px-4 py-4 text-white placeholder:text-white/30 focus:border-royal-gold outline-none transition-all text-sm font-medium" />
                </InputGroup>

              </div>

              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(212,175,55,0.3)" }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-royal-gold to-amber-500 text-black py-5 rounded-sm font-bold uppercase tracking-[0.2em] text-sm flex items-center justify-center gap-3 hover:to-royal-gold transition-all duration-500 shadow-lg relative overflow-hidden group"
              >
                <span className="relative z-10">Send Request to Concierge</span>
                <Send size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
              </motion.button>
              <p className="text-center text-royal-silver/50 text-xs uppercase tracking-wider">Requests are sent directly via WhatsApp for immediate assistance.</p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Helper Component for Form Inputs styling
const InputGroup = ({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) => (
    <div className="space-y-3">
        <label className="text-royal-gold text-xs font-bold uppercase tracking-widest flex items-center gap-2">
            {icon} {label}
        </label>
        {children}
    </div>
);

export default Booking;
