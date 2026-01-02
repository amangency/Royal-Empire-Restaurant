import React from 'react';
import { motion } from 'framer-motion';

const Gallery: React.FC = () => {
  // ✅ Local images paths - Cloudinary links removed
  const images = [
    { id: 1, src: "/images/gallery-1.webp", alt: "Restaurant Interior 1" },
    { id: 2, src: "/images/gallery-2.webp", alt: "Kitchen Excellence" },
    { id: 3, src: "/images/gallery-3.webp", alt: "Fine Dining Setup" },
    { id: 4, src: "/images/gallery-4.webp", alt: "Royal Ambience" },
  ];

  return (
    <section id="gallery" className="py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-white font-serif text-4xl md:text-5xl font-bold"
          >
            A Glimpse of <span className="text-royal-gold italic">Royalty</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="relative aspect-square overflow-hidden group border border-white/5"
            >
              <img 
                src={img.src} 
                alt={img.alt}
                loading="lazy" // ✅ Performance optimization for mobile
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-75 group-hover:brightness-100"
              />
              <div className="absolute inset-0 border-2 border-royal-gold/0 group-hover:border-royal-gold/20 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;