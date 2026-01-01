import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ArrowRight } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "Amit Kumar",
    rating: 5,
    text: "The Paneer Tikka was absolutely melting in the mouth! Best dining experience in Patna.",
    date: "2 days ago"
  },
  {
    id: 2,
    name: "Priya Singh",
    rating: 5,
    text: "Fast delivery and the packaging was premium. Food arrived hot. Highly recommended!",
    date: "1 week ago"
  },
  {
    id: 3,
    name: "Rahul Verma",
    rating: 4,
    text: "Great ambiance and staff. The Biryani is a must-try.",
    date: "3 weeks ago"
  }
];

const Reviews: React.FC = () => {
  // ✅ YOUR SPECIFIC PLACE ID
  const GOOGLE_PLACE_ID = "ChIJi51R6RYR7TkRviG57pCe3fo"; 
  
  // ✅ Direct Link Logic (Failsafe)
  const reviewLink = `https://search.google.com/local/writereview?placeid=${GOOGLE_PLACE_ID}`;

  return (
    <section id="reviews" className="py-20 bg-royal-charcoal relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-royal-gold text-xs font-bold tracking-[0.2em] uppercase">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mt-2">
            What Our Guests Say
          </h2>
          <div className="w-24 h-1 bg-royal-gold mx-auto mt-6"></div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {reviews.map((review, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              key={review.id}
              className="bg-royal-black/50 p-8 border border-white/5 rounded-sm relative group hover:border-royal-gold/30 transition-colors"
            >
              <Quote className="absolute top-4 right-4 text-royal-gold/10 group-hover:text-royal-gold/20 transition-colors" size={40} />
              
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className={`${i < review.rating ? 'text-royal-gold fill-royal-gold' : 'text-gray-600'}`} 
                  />
                ))}
              </div>
              
              <p className="text-royal-silver mb-6 italic leading-relaxed">"{review.text}"</p>
              
              <div className="flex justify-between items-end border-t border-white/5 pt-4">
                <div>
                  <h4 className="text-white font-bold font-serif">{review.name}</h4>
                  <span className="text-xs text-white/40">{review.date}</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-royal-gold/10 flex items-center justify-center text-royal-gold font-bold text-xs">
                  {review.name.charAt(0)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 🚀 CTA Link (Replaced Button with Anchor Tag) */}
        <div className="text-center">
          <motion.a
            href={reviewLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-sm font-bold uppercase tracking-widest hover:bg-royal-gold transition-colors shadow-lg group cursor-pointer"
            aria-label="Rate us on Google"
          >
            <span>Rate Us on Google</span>
            <div className="flex gap-1">
              <Star size={16} className="text-orange-500 fill-orange-500" />
              <Star size={16} className="text-orange-500 fill-orange-500" />
              <Star size={16} className="text-orange-500 fill-orange-500" />
              <Star size={16} className="text-orange-500 fill-orange-500" />
              <Star size={16} className="text-orange-500 fill-orange-500" />
            </div>
            <ArrowRight className="group-hover:translate-x-1 transition-transform ml-2" />
          </motion.a>
          <p className="mt-4 text-white/40 text-xs">Tap to open Google Reviews directly</p>
        </div>

      </div>
    </section>
  );
};

export default Reviews;
