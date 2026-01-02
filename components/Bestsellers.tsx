import React from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { menuItems } from '../constants/menuData';
import { ShoppingCart, Star } from 'lucide-react';

const Bestsellers: React.FC = () => {
  const { addToCart, setIsCartOpen } = useCart();
  
  // Get the 4 main bestsellers with images
  const bestsellers = menuItems.filter(item => item.isBestSeller && item.image).slice(0, 4);

  const handleOrder = (item: any) => {
    addToCart(item);
    setIsCartOpen(true);
  };

  return (
    <section id="signature" className="py-24 bg-royal-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-royal-gold/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-royal-gold uppercase tracking-[0.4em] text-xs font-bold block mb-4"
            >
              The Crown Jewels
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-white font-serif text-4xl md:text-6xl font-bold leading-tight"
            >
              Our Signature <br /> <span className="text-royal-gold italic">Masterpieces</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-400 font-light max-w-xs text-sm leading-relaxed"
          >
            A curated selection of our most beloved dishes, crafted with rare spices and royal tradition.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {bestsellers.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden aspect-[3/4] rounded-sm mb-6 border border-white/5 bg-royal-charcoal">
                {/* Number Overlay */}
                <span className="absolute top-4 left-4 z-20 text-white/20 font-serif text-4xl italic font-bold">
                  0{index + 1}
                </span>

                {/* Image */}
                <img 
  src={item.image} 
  alt={item.name}
  loading="lazy" // 👈 बस ये एक लाइन जोड़नी है
  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 brightness-[0.85] group-hover:brightness-100"
/>

                {/* Price Badge */}
                <div className="absolute bottom-4 right-4 z-20 bg-royal-gold text-black font-bold px-3 py-1 text-sm rounded-sm shadow-xl">
                  ₹{item.price}
                </div>

                {/* Hover Overlay Content */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 z-10">
                   <button 
                    onClick={() => handleOrder(item)}
                    className="w-full bg-white text-black py-3 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-royal-gold transition-colors"
                   >
                     <ShoppingCart size={14} /> Add to Cart
                   </button>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${item.isVeg ? 'bg-green-500' : 'bg-red-500'}`} />
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">
                    {item.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
                  </span>
                </div>
                <h3 className="text-xl font-serif font-bold text-white group-hover:text-royal-gold transition-colors">
                  {item.name}
                </h3>
                <p className="text-gray-500 text-sm line-clamp-2 font-light italic">
                  "{item.description}"
                </p>
                
                <div className="pt-2 flex items-center gap-1 text-royal-gold/60">
                   <Star size={12} fill="currentColor" />
                   <Star size={12} fill="currentColor" />
                   <Star size={12} fill="currentColor" />
                   <Star size={12} fill="currentColor" />
                   <Star size={12} fill="currentColor" />
                   <span className="text-[10px] ml-2 font-bold uppercase tracking-tighter">Chef's Choice</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;