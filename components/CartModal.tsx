import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { X, Minus, Plus, ShoppingBag, Bike, Utensils } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { UserDetails } from '../types';

const CartModal: React.FC = () => {
  const { 
    isCartOpen, setIsCartOpen, cart, updateQuantity, 
    removeFromCart, totalAmount, orderType, setOrderType, 
    tableNumber, clearCart 
  } = useCart();

  const [details, setDetails] = useState<UserDetails>({
    name: '',
    phone: '',
    address: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setDetails(prev => ({ ...prev, [name]: value }));
  };

  const handleBrowseMenu = () => {
    setIsCartOpen(false);
    const element = document.getElementById('menu');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const generateWhatsAppLink = () => {
    if (!details.name || !details.phone) {
      alert('Please enter Name and Phone number');
      return;
    }
    if (orderType === 'delivery' && !details.address) {
      alert('Please enter delivery address');
      return;
    }
    // Validation: Require table number for Dine-In
    if (orderType === 'dine-in' && !tableNumber && !details.tableNumber) {
      alert('Please enter your Table Number');
      return;
    }

    const itemString = cart.map((item, index) => 
      `${index + 1}. ${item.name} x ${item.quantity} - ₹${item.price * item.quantity}`
    ).join('\n');

    // Determine final table number
    const finalTable = tableNumber || details.tableNumber || 'N/A';

    const typeStr = orderType === 'dine-in' 
      ? `🍽️ Dine-In (Table ${finalTable})` 
      : '🛵 Delivery';

    const message = `*ROYAL ORDER REQUEST* 👑
----------------------------
*Order Details:*
${typeStr}

*Customer:*
👤 Name: ${details.name}
📞 Phone: ${details.phone}
${orderType === 'delivery' ? `📍 Address: ${details.address}` : ''}

*Items:*
${itemString}
----------------------------
*TOTAL: ₹${totalAmount}*
----------------------------
_Please confirm my order._`;

    // Target Number: 8863028185 (Country Code 91)
    const phoneNumber = "918863028185";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp
    window.open(url, '_blank');
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full md:w-[450px] bg-royal-charcoal border-l border-royal-gold/20 z-[100] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-white/10 bg-black/20">
              <div className="flex items-center gap-2 text-royal-gold">
                <ShoppingBag />
                <h2 className="text-xl font-serif font-bold">Your Order</h2>
              </div>
              <button onClick={() => setIsCartOpen(false)} className="text-gray-400 hover:text-white">
                <X />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="text-center text-gray-500 mt-10">
                  <p>Your cart is empty.</p>
                  <button 
                    onClick={handleBrowseMenu}
                    className="mt-4 text-royal-gold hover:underline"
                  >
                    Browse Menu
                  </button>
                </div>
              ) : (
                cart.map(item => (
                  <div key={item.id} className="flex justify-between items-center bg-black/20 p-4 rounded-md border border-white/5">
                    <div className="flex-1">
                      <h4 className="text-royal-silver font-medium">{item.name}</h4>
                      <p className="text-royal-gold text-sm">₹{item.price * item.quantity}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button 
                        onClick={() => updateQuantity(item.id, -1)}
                        className="p-1 hover:bg-white/10 rounded text-gray-400 hover:text-white transition-colors"
                      >
                        {item.quantity === 1 ? <X size={16} /> : <Minus size={16} />}
                      </button>
                      <span className="w-4 text-center text-sm font-bold">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, 1)}
                        className="p-1 hover:bg-white/10 rounded text-gray-400 hover:text-white transition-colors"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer / Checkout */}
            {cart.length > 0 && (
              <div className="p-6 bg-black/40 border-t border-royal-gold/20 space-y-4">
                
                {/* Order Type Switch */}
                {!tableNumber && (
                  <div className="flex bg-black rounded-lg p-1 border border-white/10">
                    <button
                      onClick={() => setOrderType('delivery')}
                      className={`flex-1 flex items-center justify-center gap-2 py-2 text-sm font-medium rounded-md transition-all ${
                        orderType === 'delivery' ? 'bg-royal-gold text-black' : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      <Bike size={16} /> Delivery
                    </button>
                    <button
                      onClick={() => setOrderType('dine-in')}
                      className={`flex-1 flex items-center justify-center gap-2 py-2 text-sm font-medium rounded-md transition-all ${
                        orderType === 'dine-in' ? 'bg-royal-gold text-black' : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      <Utensils size={16} /> Dine-In
                    </button>
                  </div>
                )}

                {tableNumber && (
                  <div className="bg-royal-gold/10 border border-royal-gold/30 p-3 rounded text-center text-royal-gold text-sm font-medium">
                    📍 Dining at Table {tableNumber}
                  </div>
                )}

                {/* Form */}
                <div className="space-y-3">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    value={details.name}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-royal-gold transition-colors"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    value={details.phone}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-royal-gold transition-colors"
                  />
                  {orderType === 'delivery' && (
                     <textarea
                     name="address"
                     placeholder="Delivery Address *"
                     value={details.address}
                     onChange={handleInputChange}
                     rows={2}
                     className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-royal-gold transition-colors resize-none"
                   />
                  )}
                  {orderType === 'dine-in' && !tableNumber && (
                    <input
                      type="text"
                      name="tableNumber"
                      placeholder="Table Number *"
                      value={details.tableNumber || ''}
                      onChange={(e) => setDetails({...details, tableNumber: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-royal-gold transition-colors"
                    />
                  )}
                </div>

                {/* Total & Action */}
                <div className="flex justify-between items-center text-lg font-bold text-white pt-2">
                  <span>Total</span>
                  <span className="text-royal-gold">₹{totalAmount}</span>
                </div>

                <button
                  onClick={generateWhatsAppLink}
                  className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-4 rounded shadow-lg shadow-green-900/20 transition-all transform hover:translate-y-[-1px] flex items-center justify-center gap-2"
                >
                   Complete Order on WhatsApp
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartModal;