import React, { useState, useEffect } from 'react';
import { categories, menuItems } from '../constants/menuData';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Check, Share2 } from 'lucide-react';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const { addToCart } = useCart();
  const [toast, setToast] = useState<{ show: boolean; message: string; id: number } | null>(null);

  // --- SMART AUTO-SCROLL LOGIC ---
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const menuItemId = params.get('menuItem');
    const tableId = params.get('table');

    // अगर टेबल नंबर है, तो उसे लोकल स्टोरेज में सेव कर लो (Order के वक्त काम आएगा)
    if (tableId) {
      localStorage.setItem('tableNumber', tableId);
    }

    // 1. अगर किसी खास डिश का लिंक है (menuItem)
    if (menuItemId) {
      const id = parseInt(menuItemId);
      const item = menuItems.find(i => i.id === id);
      
      if (item) {
        setActiveCategory(item.category);
        setTimeout(() => {
          const element = document.getElementById(`menu-item-${id}`);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            element.classList.add('animate-pulse');
            setTimeout(() => element.classList.remove('animate-pulse'), 2000);
          }
        }, 600);
      }
    } 
    // 2. अगर सिर्फ जनरल मेनू पर आना है (QR Scan Case)
    else if (window.location.hash === '#menu-section') {
      setTimeout(() => {
        const menuSection = document.getElementById('menu-section');
        if (menuSection) {
          menuSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    }
  }, []);

  const filteredItems = menuItems.filter(item => item.category === activeCategory);

  const showToast = (message: string) => {
    const newToastId = Date.now();
    setToast({ show: true, message, id: newToastId });
    setTimeout(() => {
      setToast(current => (current?.id === newToastId ? null : current));
    }, 2500);
  };

  const handleAddToCart = (item: typeof menuItems[0]) => {
    addToCart(item);
    showToast(`${item.name} Added to Feast`);
  };

  const handleShare = async (item: typeof menuItems[0]) => {
    const url = `${window.location.origin}${window.location.pathname}?menuItem=${item.id}#menu-section`;
    const shareData = {
      title: `Royal Empire - ${item.name}`,
      text: `Check out ${item.name} at Royal Empire Restaurant! ₹${item.price}`,
      url: url
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log('Share cancelled');
      }
    } else {
      try {
        await navigator.clipboard.writeText(url);
        showToast('Link Copied to Clipboard');
      } catch (err) {
        console.error('Failed to copy', err);
      }
    }
  };

  return (
    <section id="menu-section" className="py-24 bg-royal-black relative min-h-screen scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-royal-gold font-serif text-5xl md:text-6xl font-bold mb-4 tracking-tight"
          >
            Menu
          </motion.h2>
          <p className="text-gray-500 font-light tracking-wide uppercase text-sm">Exquisite Flavors of Muzaffarpur</p>
        </div>

        {/* Category Filter */}
        <div className="sticky top-20 z-40 bg-royal-black/95 backdrop-blur-sm py-4 mb-12 -mx-4 px-4 border-b border-white/5">
          <div className="flex overflow-x-auto gap-8 scrollbar-hide snap-x justify-start md:justify-center items-center min-w-full">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap pb-1 text-sm md:text-base uppercase tracking-widest transition-all duration-300 relative snap-center ${
                  activeCategory === category
                    ? 'text-royal-gold font-bold'
                    : 'text-gray-500 hover:text-white'
                }`}
              >
                {category}
                {activeCategory === category && (
                  <motion.div 
                    layoutId="activeCategory"
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-royal-gold"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          <AnimatePresence mode='wait'>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                id={`menu-item-${item.id}`}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="group relative flex justify-between gap-4 items-start"
              >
                <div className="flex-grow">
                  <div className="flex items-baseline justify-between relative">
                    <h3 className="text-xl md:text-2xl font-serif text-white group-hover:text-royal-gold transition-colors duration-300 pr-4 bg-royal-black z-10">
                      {item.name}
                    </h3>
                    <div className="absolute bottom-1.5 left-0 w-full border-b border-dotted border-white/20 z-0"></div>
                    <span className="text-xl font-serif text-royal-gold bg-royal-black z-10 pl-4 font-semibold">
                      ₹{item.price}
                    </span>
                  </div>

                  <div className="mt-2 flex flex-col gap-1">
                     <p className="text-gray-500 text-sm font-light leading-relaxed max-w-[90%]">
                      {item.description}
                    </p>
                    <div className="flex items-center gap-3 mt-1">
                      <span className={`text-[10px] uppercase tracking-wider font-medium px-1.5 py-0.5 rounded border ${item.isVeg ? 'border-green-800 text-green-500' : 'border-red-900 text-red-500'}`}>
                        {item.isVeg ? "Veg" : "Non-Veg"}
                      </span>
                      {item.isBestSeller && (
                        <span className="text-[10px] uppercase tracking-wider font-bold text-royal-gold flex items-center gap-1">
                           ★ Bestseller
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3 mt-1 shrink-0">
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="w-8 h-8 rounded-full border border-royal-gold/30 text-royal-gold flex items-center justify-center hover:bg-royal-gold hover:text-black transition-all duration-300 hover:scale-110 active:scale-95"
                  >
                    <Plus size={16} />
                  </button>

                  <button
                    onClick={() => handleShare(item)}
                    className="w-8 h-8 rounded-full border border-gray-700 text-gray-500 flex items-center justify-center hover:border-royal-gold hover:text-royal-gold transition-all duration-300 active:scale-95"
                  >
                    <Share2 size={14} />
                  </button>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredItems.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }}
              className="text-center text-gray-600 py-20 font-serif italic text-lg"
            >
                Seasonal items arriving shortly.
            </motion.div>
        )}
      </div>

      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 20, x: '-50%' }}
            className="fixed bottom-12 left-1/2 z-[150] flex items-center gap-4 bg-royal-gold px-6 py-4 rounded-sm shadow-xl"
          >
            <div className="bg-black p-1.5 rounded-full">
              <Check size={14} className="text-royal-gold" strokeWidth={3} />
            </div>
            <div>
              <p className="text-black font-serif font-bold text-sm tracking-wide">Royal Update</p>
              <p className="text-black/80 text-xs font-medium">{toast.message}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Menu;