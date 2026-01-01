import React from 'react';
import { Star, ExternalLink } from 'lucide-react';

const reviews = [
  {
    name: "Rahul Verma",
    text: "Absolutely stunning ambiance! The Butter Chicken is hands down the best in Muzaffarpur. A true royal experience.",
    rating: 5
  },
  {
    name: "Priya Singh",
    text: "Visited with family for dinner. The staff was courteous and the Veg Hakka Noodles were perfectly cooked. Highly recommended!",
    rating: 5
  },
  {
    name: "Amit Kumar",
    text: "Great place for biryani lovers. The portions are generous and the taste is authentic. Will visit again soon.",
    rating: 5
  },
  {
    name: "Suman Gupta",
    text: "The Dal Makhani is to die for. Creamy, rich, and authentic. It reminds me of the authentic dhaba style but with a premium touch.",
    rating: 5
  },
  {
    name: "Vikram Rathore",
    text: "Best dining experience in Bihar. The service makes you feel like royalty from the moment you step in.",
    rating: 5
  },
  {
    name: "Neha Tiwari",
    text: "Ordered for a home party. Delivery was on time and food was piping hot. The packaging was very secure and premium.",
    rating: 5
  },
  {
    name: "Rohan & Simran",
    text: "The ambience is just wow. Perfect for anniversary dates. The lighting and music set the perfect mood.",
    rating: 5
  },
  {
    name: "Anjali Mehta",
    text: "Crispy Corn and Paneer Tikka are must-tries. I love how they maintain the hygiene and quality.",
    rating: 5
  }
];

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-32 bg-[#080808] border-t border-white/5 relative overflow-hidden">
      {/* Decorative Background Glow to remove the "flat" black look */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-royal-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-16">
        <div className="text-center">
          <h2 className="text-royal-gold font-serif text-4xl md:text-6xl font-bold mb-4 tracking-tight">Patron Testimonials</h2>
          <div className="w-24 h-1 bg-royal-gold/30 mx-auto mb-6" />
          <p className="text-gray-400 uppercase tracking-[0.3em] text-xs font-medium">Voices of our beloved guests</p>
        </div>
      </div>

      {/* Marquee Container with Professional Masking */}
      <div className="relative group">
        {/* 
            CSS Mask for perfectly smooth edges. 
            This removes the "black lining" effect by actually fading the elements 
            rather than placing an overlay on top.
        */}
        <div 
          className="overflow-hidden py-10"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
          }}
        >
          <div className="flex gap-8 w-max animate-marquee group-hover:[animation-play-state:paused]">
            {/* Render list twice for a truly seamless loop */}
            {[...reviews, ...reviews].map((review, index) => (
              <div 
                key={index}
                className="w-[350px] md:w-[480px] bg-royal-charcoal/40 backdrop-blur-md p-10 rounded-sm border border-white/5 relative flex-shrink-0 hover:border-royal-gold/40 transition-all duration-500 hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)]"
              >
                {/* Visual Accent */}
                <div className="absolute top-0 left-0 w-1 h-0 group-hover:h-full bg-royal-gold transition-all duration-500" />
                
                <div className="absolute top-6 right-10 text-8xl text-royal-gold/5 font-serif pointer-events-none">"</div>
                
                <div className="flex gap-1.5 text-royal-gold/80 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>

                <p className="text-gray-300 italic mb-8 leading-relaxed relative z-10 min-h-[90px] text-lg font-light">
                  {review.text}
                </p>

                <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                  <div className="w-10 h-10 rounded-full bg-royal-gold/10 flex items-center justify-center text-royal-gold font-bold text-sm">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-serif text-white font-bold tracking-wide">{review.name}</h4>
                    <span className="text-[10px] text-royal-gold/60 uppercase tracking-widest font-semibold">Gourmet Explorer</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center mt-20 relative z-10 px-4">
        <a 
          href="https://www.google.com/maps/place/?q=place_id:ChIJi51R6RYR7TkRviG57pCe3fo" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group inline-flex items-center justify-center gap-3 px-5 md:px-10 py-4 border border-royal-gold/50 text-royal-gold hover:bg-royal-gold hover:text-black transition-all duration-500 uppercase tracking-widest md:tracking-[0.2em] text-[10px] md:text-xs font-bold rounded-sm shadow-lg max-w-full text-center whitespace-normal md:whitespace-nowrap"
        >
          <span>Share Your Royal Experience on Google</span> 
          <ExternalLink size={14} className="shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>
      </div>
    </section>
  );
};

export default Reviews;