import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, ShoppingBag, Home, Utensils, Send, MessageSquare } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartModal: React.FC = () => {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();
  
  // State for Order Type
  const [orderType, setOrderType] = useState<'delivery' | 'dine-in'>('delivery');
  
  // Form States
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [tableNumber, setTableNumber] = useState('');
  const [customMessage, setCustomMessage] = useState('');

  // 🔴 IMPORTANT: Replace with your WhatsApp Number
  const PHONE_NUMBER = "918863028185"; 

  const handleOrder = () => {
    // 1. Validation Logic
    if (!name) {
      alert("Please enter your Name!");
      return;
    }
    
    if (orderType === 'delivery') {
      if (!phone || !address) {
        alert("Please enter Phone Number and Address for delivery!");
        return;
      }
    } else {
      // Dine-in validation
      if (!tableNumber) {
        alert("Please enter your Table Number!");
        return;
      }
    }

    // 2. WhatsApp Message Builder
    let message = `*👋 New Order Request!* \n`;
    message += `*Type:* ${orderType === 'dine-in' ? '🍽️ DINE-IN' : '🛵 DELIVERY'}\n`;
    message += `--------------------------------\n`;
    
    // Customer Details
    message += `*Name:* ${name}\n`;
    
    if (orderType === 'delivery') {
      message += `*Phone:* ${phone}\n`;
      message += `*Address:* ${address}\n`;
    } else {
      message += `*Table No:* ${tableNumber}\n`;
    }

    // Custom Message (if any)
    if (customMessage) {
      message += `*Note:* ${customMessage}\n`;
    }

    message += `--------------------------------\n`;
    message += `*ORDER ITEMS:* \n`;
    
    // Items List
    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name} x ${item.quantity} - ₹${item.price * item.quantity}\n`;
    });

    message += `--------------------------------\n`;
    message += `💰 *Total Payble: ₹${cartTotal}*`;

    // 3. Open WhatsApp
    const url = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Black Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-royal-black border-l border-royal-gold/20 shadow-2xl z-[70] flex flex-col"
          >
            {/* Header */}
            <div className="p-5 border-b border-white/10 flex justify-between items-center bg-white/5">
              <h2 className="text-xl font-serif font-bold text-royal-gold flex items-center gap-2">
                <ShoppingBag size={20} /> Your Cart
              </h2>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="text-white/50 hover:text-white transition-colors"
                aria-label="Close Cart"
              >
                <X size={24} />
              </button>
            </div>

            {/* Cart Items (Scrollable) */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-white/30 space-y-4">
                  <ShoppingBag size={48} strokeWidth={1} />
                  <p>Your cart is empty.</p>
                </div>
              ) : (
                cart.map((item) => (
                  <motion.div 
                    layout
                    key={item.id} 
                    className="flex gap-4 bg-white/5 p-3 rounded-sm border border-white/5"
                  >
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-sm" />
                    <div className="flex-1">
                      <h3 className="font-bold text-royal-silver text-sm">{item.name}</h3>
                      <p className="text-royal-gold text-xs">₹{item.price}</p>
                      
                      <div className="flex items-center gap-3 mt-2">
                        <div className="flex items-center bg-black rounded-sm border border-white/10">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="px-2 text-white/50 hover:text-white"
                            disabled={item.quantity <= 1}
                          >-</button>
                          <span className="px-2 text-xs text-white font-mono">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-2 text-white/50 hover:text-white"
                          >+</button>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-400/50 hover:text-red-400 ml-auto"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer Form & Checkout */}
            {cart.length > 0 && (
              <div className="p-5 bg-white/5 border-t border-white/10 space-y-4">
                
                {/* 1. Toggle Switch */}
                <div className="flex bg-black p-1 rounded-md border border-white/10">
                  <button
                    onClick={() => setOrderType('delivery')}
                    className={`flex-1 flex items-center justify-center gap-2 py-2 text-sm font-bold rounded-sm transition-all ${orderType === 'delivery' ? 'bg-royal-gold text-black shadow-lg' : 'text-white/50 hover:text-white'}`}
                  >
                    <Home size={14} /> Delivery
                  </button>
                  <button
                    onClick={() => setOrderType('dine-in')}
                    className={`flex-1 flex items-center justify-center gap-2 py-2 text-sm font-bold rounded-sm transition-all ${orderType === 'dine-in' ? 'bg-royal-gold text-black shadow-lg' : 'text-white/50 hover:text-white'}`}
                  >
                    <Utensils size={14} /> Dine-in
                  </button>
                </div>

                {/* 2. Input Fields */}
                <div className="space-y-3">
                  {/* Common: Name */}
                  <input 
                    type="text"
                    placeholder="Enter Your Name *"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-black border border-white/20 rounded-sm p-3 text-sm text-white focus:border-royal-gold outline-none"
                  />

                  {/* Conditional Inputs */}
                  {orderType === 'delivery' ? (
                    <>
                      <input 
                        type="tel"
                        placeholder="Phone Number *"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-black border border-white/20 rounded-sm p-3 text-sm text-white focus:border-royal-gold outline-none"
                      />
                      <textarea 
                        placeholder="Full Delivery Address *"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="w-full bg-black border border-white/20 rounded-sm p-3 text-sm text-white focus:border-royal-gold outline-none resize-none h-16"
                      />
                    </>
                  ) : (
                    <input 
                      type="text"
                      placeholder="Table Number (e.g. 5) *"
                      value={tableNumber}
                      onChange={(e) => setTableNumber(e.target.value)}
                      className="w-full bg-black border border-white/20 rounded-sm p-3 text-sm text-white focus:border-royal-gold outline-none"
                    />
                  )}

                  {/* Common: Custom Message */}
                  <div className="relative">
                    <MessageSquare size={14} className="absolute top-3 left-3 text-white/30" />
                    <input 
                      type="text"
                      placeholder="Any cooking request? (Optional)"
                      value={customMessage}
                      onChange={(e) => setCustomMessage(e.target.value)}
                      className="w-full bg-black border border-white/20 rounded-sm p-3 pl-9 text-sm text-white focus:border-royal-gold outline-none"
                    />
                  </div>
                </div>

                {/* 3. Total & Action */}
                <div className="flex justify-between items-end pt-2">
                   <div>
                      <p className="text-xs text-white/50 uppercase">Total Payable</p>
                      <p className="text-2xl font-serif font-bold text-royal-gold">₹{cartTotal}</p>
                   </div>
                   <button
                    onClick={handleOrder}
                    className="bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-sm font-bold uppercase tracking-widest text-sm shadow-lg flex items-center gap-2"
                   >
                     <span>Send Order</span>
                     <Send size={16} />
                   </button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartModal;
