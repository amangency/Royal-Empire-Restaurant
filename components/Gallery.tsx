import React from 'react';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

// Added Cloudinary transformation parameters: w_800/w_1200, q_auto (quality auto), f_auto (format auto)
const galleryImages = [
  {
    // High quality for the large hero-style gallery image
    src: "https://res.cloudinary.com/dvcgzneiy/image/upload/w_1200,q_auto,f_auto/v1767265244/Whisk_9b05d71a7cf71f1b59144526d582b599dr_mvk2me.webp", 
    alt: "The Royal Dining Hall",
    className: "col-span-1 md:col-span-2 lg:col-span-4 aspect-video", // 16:9 Layout
    caption: "The Grand Durbar"
  },
  {
    // Optimized for grid
    src: "https://res.cloudinary.com/dvcgzneiy/image/upload/w_800,q_auto,f_auto/v1767267949/Whisk_1b1b05b09a13540b83c43a2073a75f0ddr_1_s1osxi.webp",
    alt: "Exquisite Plating",
    className: "col-span-1 aspect-[4/5]", // 4:5 Layout
    caption: "Culinary Artistry"
  },
  {
    src: "https://res.cloudinary.com/dvcgzneiy/image/upload/w_800,q_auto,f_auto/v1767267949/Whisk_78a5bff17bd510faf134964be4fb97b4dr_1_loimey.webp",
    alt: "Luxury Interiors",
    className: "col-span-1 aspect-[4/5]", // 4:5 Layout
    caption: "Royal Interiors"
  },
  {
    src: "https://res.cloudinary.com/dvcgzneiy/image/upload/w_800,q_auto,f_auto/v1767267949/Whisk_99c6c6a8475d2b293984157684d7a19cdr_1_y2nrqn.webp",
    alt: "Ambient Lighting",
    className: "col-span-1 aspect-[4/5]", // 4:5 Layout
    caption: "Mood & Ambience"
  },
  {
    src: "https://res.cloudinary.com/dvcgzneiy/image/upload/w_800,q_auto,f_auto/v1767267949/Whisk_b91e555b6952857bdee47a1365a45c49dr_1_m4tffh.webp",
    alt: "Fine Cutlery",
    className: "col-span-1 aspect-[4/5]", // 4:5 Layout
    caption: "Details of Elegance"
  }
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-royal-black relative overflow-hidden">
        {/* Background Texture */}
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Header */}
            <div className="text-center mb-16">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-royal-gold font-serif text-4xl md:text-6xl font-bold mb-4 tracking-tight"
                >
                    The Royal Ambience
                </motion.h2>
                <div className="w-24 h-1 bg-royal-gold/30 mx-auto mb-6" />
                <p className="text-gray-400 font-light italic max-w-2xl mx-auto">
                    "Architecture that whispers luxury, lighting that sets the mood. A dining experience designed for the senses."
                </p>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {galleryImages.map((img, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className={`relative group overflow-hidden rounded-sm border border-white/5 bg-royal-charcoal ${img.className}`}
                    >
                        <img 
                            src={img.src} 
                            alt={img.alt} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-[0.8] group-hover:brightness-100"
                            loading="lazy"
                            decoding="async"
                        />
                        
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                        
                        {/* Caption Overlay */}
                        <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                            <h3 className="text-white font-serif text-xl font-medium tracking-wide">{img.caption}</h3>
                            <div className="h-[1px] w-8 bg-royal-gold mt-2"></div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Social CTA */}
            <div className="flex justify-center mt-12">
                <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 text-royal-gold hover:text-white transition-colors uppercase tracking-[0.2em] text-xs font-bold"
                >
                    <Instagram size={16} className="group-hover:rotate-12 transition-transform" /> Follow us on Instagram
                </a>
            </div>
        </div>
    </section>
  );
};

export default Gallery;