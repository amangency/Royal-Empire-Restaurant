import React from 'react';
import { motion } from 'framer-motion';
import { ChefHat, Leaf, ScrollText, Sparkles } from 'lucide-react';

const features = [
  {
    icon: ChefHat,
    title: "Master Culinary Team",
    description: "Led by chefs with decades of experience in 5-star royal kitchens across India."
  },
  {
    icon: Leaf,
    title: "Farm-Fresh Harvest",
    description: "We source our vegetables and meats daily to ensure the highest standard of freshness."
  },
  {
    icon: ScrollText,
    title: "Heritage Recipes",
    description: "Secret spice blends and cooking techniques passed down through royal generations."
  },
  {
    icon: Sparkles,
    title: "Impeccable Hygiene",
    description: "State-of-the-art kitchen standards ensuring safety without compromising on taste."
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-royal-black border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group p-6 rounded-sm bg-white/[0.02] border border-white/5 hover:border-royal-gold/30 hover:bg-white/[0.04] transition-all duration-300"
            >
              <div className="w-12 h-12 bg-royal-gold/10 rounded-full flex items-center justify-center text-royal-gold mb-4 group-hover:scale-110 transition-transform">
                <feature.icon size={24} />
              </div>
              <h3 className="text-white font-serif text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;