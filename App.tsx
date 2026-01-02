import React, { useState, Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero'; // Hero is Critical (Keep it Eager)
import { CartProvider } from './context/CartContext';
import { Compass } from 'lucide-react';

// ✅ 1. Lazy Load HEAVY Hidden Components
const CartModal = lazy(() => import('./components/CartModal'));
const InfoModals = lazy(() => import('./components/InfoModals'));

// Section Components
const Bestsellers = lazy(() => import('./components/Bestsellers'));
const Features = lazy(() => import('./components/Features'));
const Menu = lazy(() => import('./components/Menu'));
const Gallery = lazy(() => import('./components/Gallery'));
const Reviews = lazy(() => import('./components/Reviews'));
const Booking = lazy(() => import('./components/Booking'));
const Location = lazy(() => import('./components/Location'));

// Optimized Loader
const SectionLoader = () => (
  <div role="status" aria-label="Loading content" className="min-h-[400px] flex justify-center items-center bg-black">
    <div className="animate-spin text-royal-gold/30">
      <Compass size={32} />
    </div>
  </div>
);

function App() {
  const [activeInfoModal, setActiveInfoModal] = useState<'about' | 'terms' | null>(null);

  return (
    <CartProvider>
      <div className="min-h-screen bg-black text-white font-sans selection:bg-royal-gold selection:text-black">
        <Navbar />
        
        <main role="main">
          {/* ✅ Hero loads immediately (No Suspense here) */}
          <Hero />
          
          <Suspense fallback={<SectionLoader />}>
            <Bestsellers />
            <Features />
            <Menu />
            <Gallery />
            <Reviews />
            <Booking />
            <Location 
              onOpenAbout={() => setActiveInfoModal('about')}
              onOpenTerms={() => setActiveInfoModal('terms')}
            />
          </Suspense>
        </main>

        {/* ✅ FIXED: Cart & Modals are now Lazy Loaded inside Suspense */}
        {/* Isse initial Javascript bundle chhota ho jayega */}
        <Suspense fallback={null}>
          <CartModal />
          <InfoModals 
            isOpen={activeInfoModal !== null} 
            onClose={() => setActiveInfoModal(null)}
            type={activeInfoModal || 'about'}
          />
        </Suspense>

      </div>
    </CartProvider>
  );
}

export default App;
