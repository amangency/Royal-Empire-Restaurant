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
  },
  {
    id: 4,
    name: "Vikram Malhotra",
    rating: 5,
    text: "Luxury redefined in Patna. The service is impeccable and the food is divine.",
    date: "1 month ago"
  },
   {
    id: 5,
    name: "Sneha Gupta",
    rating: 4,
    text: "Loved the vibe! Perfect place for anniversary dinner. Cocktails were amazing.",
    date: "1 month ago"
  }
];

// Double the array for seamless looping
const duplicatedReviews = [...reviews, ...reviews];

const Reviews: React.FC = () => {
  const GOOGLE_PLACE_ID = "ChIJi51R6RYR7TkRviG57pCe3fo"; 
  const reviewLink = `https://search.google.com/local/writereview?placeid=${GOOGLE_PLACE_ID}`;

  return (
    <section id="reviews" className="py-16 md:py-24 bg-black relative overflow-hidden">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-10 md:mb-16">
        <div className="text-center">
          <span className="text-royal-gold text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase">Testimonials</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mt-3 md:mt-4">
            The Royal Experience
          </h2>
          <div className="w-16 md:w-24 h-1 bg-royal-gold mx-auto mt-4 md:mt-6"></div>
        </div>
      </div>

      {/* 🔄 Moving Reviews Slider */}
      <div className="relative w-full overflow-hidden">
        {/* Gradients to fade edges (Hidden on mobile to save performance) */}
        <div className="hidden md:block absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none"></div>
        <div className="hidden md:block absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none"></div>

        <motion.div
          className="flex gap-4 md:gap-6 w-max pl-4"
          // Slower duration on mobile for less dizziness
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 50, repeat: Infinity }}
          // Hardware acceleration hack for mobile
          style={{ willChange: "transform" }}
        >
          {duplicatedReviews.map((review, idx) => (
            <div
              key={`${review.id}-${idx}`}
              // 📱 FIXED SIZING: w-[280px] on mobile (Fits perfectly), w-[450px] on desktop
              className="w-[280px] md:w-[450px] flex-shrink-0 bg-black p-6 md:p-8 border border-white/10 rounded-sm relative group hover:border-royal-gold transition-all duration-300"
            >
              <Quote className="absolute top-4 right-4 md:top-6 md:right-6 text-royal-gold/10 group-hover:text-royal-gold/30 transition-colors" size={24} />
              
              <div className="flex gap-1 mb-4 md:mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={14} 
                    className={`${i < review.rating ? 'text-royal-gold fill-royal-gold' : 'text-gray-800'}`} 
                  />
                ))}
              </div>
              
              {/* Responsive Text Size */}
              <p className="text-gray-300 mb-6 md:mb-8 italic leading-relaxed text-sm md:text-lg font-light">"{review.text}"</p>
              
              <div className="flex justify-between items-end border-t border-white/10 pt-4 md:pt-6">
                <div>
                  <h4 className="text-white font-bold font-serif text-lg md:text-xl tracking-wide">{review.name}</h4>
                  <span className="text-[10px] md:text-xs text-royal-gold/60 uppercase tracking-widest">{review.date}</span>
                </div>
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-royal-gold/10 flex items-center justify-center text-royal-gold font-serif font-bold text-sm md:text-lg border border-royal-gold/20">
                  {review.name.charAt(0)}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* 🚀 CTA Button */}
      <div className="text-center mt-10 md:mt-16 relative z-10">
        <motion.a
          href={reviewLink}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-3 md:gap-4 bg-royal-gold text-black px-6 py-3 md:px-10 md:py-5 rounded-sm font-bold uppercase tracking-[0.15em] md:tracking-[0.2em] text-xs md:text-base hover:bg-black hover:text-royal-gold border border-royal-gold transition-all duration-300 group cursor-pointer"
        >
          <span>Rate Us on Google</span>
          <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
        </motion.a>
        <p className="mt-4 md:mt-6 text-white/30 text-[10px] md:text-xs tracking-wider uppercase">Tap to open Google Reviews directly</p>
      </div>

    </section>
  );
};

export default Reviews;
