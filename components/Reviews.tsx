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
  // Duplicating for seamless scrolling effect
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
  // ✅ YOUR SPECIFIC PLACE ID
  const GOOGLE_PLACE_ID = "ChIJi51R6RYR7TkRviG57pCe3fo"; 
  const reviewLink = `https://search.google.com/local/writereview?placeid=${GOOGLE_PLACE_ID}`;

  return (
    <section id="reviews" className="py-24 bg-royal-charcoal relative overflow-hidden">
      {/* Background Gradient Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-royal-gold/5 via-transparent to-transparent opacity-50"></div>
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-royal-gold text-xs font-bold tracking-[0.3em] uppercase">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4">
            The Royal Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-royal-gold to-transparent mx-auto mt-8"></div>
        </div>

        {/* 🔄 Moving Reviews Slider (Marquee Effect) */}
        <div className="relative w-full overflow-hidden fade-mask-x py-8">
          <motion.div
            className="flex gap-8 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 35, repeat: Infinity }}
          >
            {duplicatedReviews.map((review, idx) => (
              <div
                key={`${review.id}-${idx}`}
                className="w-[350px] md:w-[450px] flex-shrink-0 bg-white/5 backdrop-blur-md p-8 border border-white/10 rounded-sm relative group hover:border-royal-gold/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-royal-gold/10"
              >
                <Quote className="absolute top-6 right-6 text-royal-gold/20 group-hover:text-royal-gold/40 transition-colors" size={48} />
                
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={18} 
                      className={`${i < review.rating ? 'text-royal-gold fill-royal-gold drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]' : 'text-gray-600'}`} 
                    />
                  ))}
                </div>
                
                <p className="text-royal-silver/90 mb-8 italic leading-relaxed text-lg">"{review.text}"</p>
                
                <div className="flex justify-between items-end border-t border-white/5 pt-6">
                  <div>
                    <h4 className="text-white font-bold font-serif text-xl tracking-wide">{review.name}</h4>
                    <span className="text-sm text-royal-gold/60 uppercase tracking-widest">{review.date}</span>
                  </div>
                  <div className="w-10 h-10 rounded-sm bg-gradient-to-br from-royal-gold to-amber-600 flex items-center justify-center text-black font-black font-serif text-lg shadow-lg transform rotate-3 group-hover:rotate-0 transition-all">
                    {review.name.charAt(0)}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* 🚀 CTA Link (Luxury Gold Button) */}
        <div className="text-center mt-12">
          <motion.a
            href={reviewLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-4 bg-royal-gold text-black px-10 py-5 rounded-sm font-bold uppercase tracking-[0.2em] hover:bg-white transition-all duration-500 shadow-[0_0_30px_rgba(212,175,55,0.2)] hover:shadow-[0_0_50px_rgba(255,255,255,0.3)] group cursor-pointer border border-royal-gold"
          >
            <span>Rate Us on Google</span>
            <div className="flex gap-1">
              <Star size={16} className="text-black fill-black group-hover:text-royal-gold group-hover:fill-royal-gold transition-colors" />
              <Star size={16} className="text-black fill-black group-hover:text-royal-gold group-hover:fill-royal-gold transition-colors" />
              <Star size={16} className="text-black fill-black group-hover:text-royal-gold group-hover:fill-royal-gold transition-colors" />
              <Star size={16} className="text-black fill-black group-hover:text-royal-gold group-hover:fill-royal-gold transition-colors" />
              <Star size={16} className="text-black fill-black group-hover:text-royal-gold group-hover:fill-royal-gold transition-colors" />
            </div>
            <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
          </motion.a>
          <p className="mt-6 text-royal-gold/60 text-sm tracking-wider uppercase">Tap to unlock the review page directly</p>
        </div>

      </div>
    </section>
  );
};

export default Reviews;
