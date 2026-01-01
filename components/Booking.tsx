import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, Gift, Send, Crown } from 'lucide-react';

const Booking: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    occasion: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.date || !formData.time) {
      alert("Please fill in all essential royal protocols (Name, Phone, Date, and Time).");
      return;
    }

    const message = `*ROYAL TABLE RESERVATION* 👑
----------------------------
*Guest Details:*
👤 Name: ${formData.name}
📞 Phone: ${formData.phone}

*Reservation Request:*
📅 Date: ${formData.date}
⏰ Time: ${formData.time}
👥 Guests: ${formData.guests}
🎉 Occasion: ${formData.occasion || 'General Dining'}
----------------------------
_Please confirm availability._`;

    // Target Number: 8863028185 (Country Code 91)
    const phoneNumber = "918863028185";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Using window.open allows it to work on desktop and mobile
    window.open(url, '_blank');
  };

  return (
    <section id="booking" className="py-24 bg-royal-black relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-royal-gold/[0.02] -skew-x-12 transform translate-x-1/2 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Visual & Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <span className="text-royal-gold uppercase tracking-[0.4em] text-xs font-bold block mb-4">Reservations</span>
              <h2 className="text-white font-serif text-5xl md:text-7xl font-bold leading-tight mb-6">
                Reserve Your <br />
                <span className="text-royal-gold italic">Throne</span>
              </h2>
              <p className="text-gray-400 text-lg font-light leading-relaxed max-w-md italic">
                "Whether it's a grand celebration or an intimate evening, we ensure your arrival is met with royal hospitality."
              </p>
            </motion.div>

            <div className="flex items-center gap-6 p-6 bg-white/[0.02] border border-white/5 rounded-sm">
              <div className="w-12 h-12 rounded-full bg-royal-gold/10 flex items-center justify-center text-royal-gold">
                <Crown size={24} />
              </div>
              <div>
                <h4 className="text-white font-serif text-xl">VIP Priority</h4>
                <p className="text-gray-500 text-sm">Advance bookings get the best view of the Empire.</p>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-royal-charcoal p-8 md:p-12 border border-white/5 rounded-sm shadow-2xl relative"
          >
            <form onSubmit={handleBooking} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-black/40 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-royal-gold transition-colors placeholder:text-gray-700"
                  />
                </div>
                {/* Phone */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    placeholder="e.g. +91 XXXXX XXXXX"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-black/40 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-royal-gold transition-colors placeholder:text-gray-700"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Date */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold flex items-center gap-2">
                    <Calendar size={12} className="text-royal-gold" /> Date
                  </label>
                  <input 
                    type="date" 
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full bg-black/40 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-royal-gold transition-colors [color-scheme:dark]"
                  />
                </div>
                {/* Time */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold flex items-center gap-2">
                    <Clock size={12} className="text-royal-gold" /> Preferred Time
                  </label>
                  <input 
                    type="time" 
                    name="time"
                    required
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full bg-black/40 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-royal-gold transition-colors [color-scheme:dark]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Guests */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold flex items-center gap-2">
                    <Users size={12} className="text-royal-gold" /> Number of People
                  </label>
                  <select 
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full bg-black/40 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-royal-gold transition-colors"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, '10+', 'Large Party'].map(num => (
                      <option key={num} value={num} className="bg-royal-charcoal">{num} Guests</option>
                    ))}
                  </select>
                </div>
                {/* Occasion */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold flex items-center gap-2">
                    <Gift size={12} className="text-royal-gold" /> Occasion
                  </label>
                  <input 
                    type="text" 
                    name="occasion"
                    placeholder="Birthday, Anniversary, etc."
                    value={formData.occasion}
                    onChange={handleChange}
                    className="w-full bg-black/40 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-royal-gold transition-colors placeholder:text-gray-700"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-royal-gold text-black font-bold py-5 rounded-sm uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 hover:bg-white transition-all duration-300 transform hover:-translate-y-1 shadow-xl shadow-royal-gold/10"
              >
                Send Request to Concierge <Send size={14} />
              </button>

              <p className="text-center text-[9px] text-gray-600 uppercase tracking-widest mt-4">
                This request will be sent directly to our Royal Concierge via WhatsApp for immediate processing.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Booking;