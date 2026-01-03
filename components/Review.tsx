import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, MessageSquare, Send, ArrowRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const Review: React.FC = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  // 11-Point Package के हिसाब से ये कस्टमाइज़ करें
  const GOOGLE_MAPS_LINK = "https://g.page/r/YOUR_MAPS_LINK/review"; 
  const OWNER_WHATSAPP = "91XXXXXXXXXX"; // क्लाइंट (मालिक) का नंबर

  const handleAction = () => {
    if (rating >= 4) {
      window.open(GOOGLE_MAPS_LINK, '_blank');
    } else {
      const msg = encodeURIComponent(`नमस्ते! मुझे Royal Empire में सुधार के लिए कुछ फीडबैक देना है। मेरी रेटिंग: ${rating} Star.`);
      window.open(`https://wa.me/${OWNER_WHATSAPP}?text=${msg}`, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center p-6 font-serif">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full bg-[#111] p-8 rounded-[2rem] border border-[#D4AF37]/20 shadow-2xl relative overflow-hidden"
      >
        {/* Background 'Royal' Glow */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#D4AF37]/10 blur-[100px]" />

        <h2 className="text-[#D4AF37] text-3xl font-bold mb-2 tracking-tight">How was your Feast?</h2>
        <p className="text-gray-400 mb-10 font-light italic">Your feedback at Royal Empire is precious.</p>

        {/* STAR SYSTEM */}
        <div className="flex justify-center gap-3 mb-10">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => setRating(star)}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(0)}
              className="transition-all hover:scale-125 active:scale-90"
            >
              <Star 
                size={42} 
                fill={(hover || rating) >= star ? "#D4AF37" : "none"}
                className={(hover || rating) >= star ? "text-[#D4AF37]" : "text-gray-800"}
                strokeWidth={1.5}
              />
            </button>
          ))}
        </div>

        <AnimatePresence>
          {rating > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                {rating >= 4 ? (
                  <p className="text-green-500 font-medium flex items-center justify-center gap-2">
                    <Star size={18} fill="currentColor" /> Amazing! Mind sharing it on Google?
                  </p>
                ) : (
                  <p className="text-[#D4AF37] font-medium flex items-center justify-center gap-2">
                    <MessageSquare size={18} /> Give us a chance to improve. Message us.
                  </p>
                )}
              </div>

              <button
                onClick={handleAction}
                className="w-full bg-[#D4AF37] text-black font-extrabold py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-[#b8962d] transition-all transform hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
              >
                {rating >= 4 ? "Continue to Google" : "Talk to Manager"}
                <ArrowRight size={20} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <Link to="/" className="mt-8 inline-flex items-center gap-2 text-gray-500 hover:text-[#D4AF37] transition-colors text-sm">
          <Home size={14} /> Back to Menu
        </Link>
      </motion.div>
    </div>
  );
};

export default Review;