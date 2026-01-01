import React, { useState, Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CartModal from './components/CartModal';
import InfoModals from './components/InfoModals';
import { CartProvider } from './context/CartContext';
import { Compass } from 'lucide-react';

// Lazy Load heavy sections below the fold
const Bestsellers = lazy(() => import('./components/Bestsellers'));
const Features = lazy(() => import('./components/Features'));
const Menu = lazy(() => import('./components/Menu'));
const Gallery = lazy(() => import('./components/Gallery'));
const Reviews = lazy(() => import('./components/Reviews'));
const Booking = lazy(() => import('./components/Booking'));
const Location = lazy(() => import('./components/Location'));

// Simple loading placeholder
const SectionLoader = () => (
  <div className="py-24 flex justify-center items-center bg-royal-black">
    <div className="animate-spin text-royal-gold/30">
      <Compass size={32} />
    </div>
  </div>
);

function App() {
  const [activeInfoModal, setActiveInfoModal] = useState<'about' | 'terms' | null>(null);

  return (
    <CartProvider>
      <div className="min-h-screen bg-royal-black text-white font-sans selection:bg-royal-gold selection:text-black">
        <Navbar />
        <main>
          {/* Hero loads immediately */}
          <Hero />
          
          {/* Rest of the site loads only when needed */}
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
        <CartModal />
        
        {/* About Us & Terms Overlays */}
        <InfoModals 
          isOpen={activeInfoModal !== null} 
          onClose={() => setActiveInfoModal(null)}
          type={activeInfoModal || 'about'}
        />
      </div>
    </CartProvider>
  );
}

export default App;