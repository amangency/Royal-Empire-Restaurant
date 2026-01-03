import React, { useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import Hero from './components/Hero'; 
import { CartProvider } from './context/CartContext';
import { Compass } from 'lucide-react';
import ScrollToAnchor from './components/ScrollToAnchor'; // ✅ 1. यहाँ Import किया

// Lazy Load Components
const CartModal = lazy(() => import('./components/CartModal'));
const InfoModals = lazy(() => import('./components/InfoModals'));
const Review = lazy(() => import('./components/Review')); 

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

const MainSite = ({ onOpenAbout, onOpenTerms }: { onOpenAbout: () => void, onOpenTerms: () => void }) => (
  <main role="main">
    <Hero />
    <Suspense fallback={<SectionLoader />}>
      <Bestsellers />
      <Features />
      <Menu />
      <Gallery />
      <Reviews />
      <Booking />
      <Location onOpenAbout={onOpenAbout} onOpenTerms={onOpenTerms} />
    </Suspense>
  </main>
);

function App() {
  const [activeInfoModal, setActiveInfoModal] = useState<'about' | 'terms' | null>(null);

  return (
    <CartProvider>
      <Router> 
        {/* ✅ 2. यहाँ Component लगाया (Router के अंदर, सबसे ऊपर) */}
        {/* यह URL चेक करेगा और सही जगह स्क्रॉल करेगा */}
        <ScrollToAnchor />

        <div className="min-h-screen bg-black text-white font-sans selection:bg-royal-gold selection:text-black">
          <Navbar />
          
          <Routes>
            {/* होम पेज */}
            <Route path="/" element={
              <MainSite 
                onOpenAbout={() => setActiveInfoModal('about')}
                onOpenTerms={() => setActiveInfoModal('terms')}
              />
            } />

            {/* रिव्यु शील्ड पेज */}
            <Route path="/review" element={
              <Suspense fallback={<SectionLoader />}>
                <Review />
              </Suspense>
            } />
          </Routes>

          {/* Cart & Modals */}
          <Suspense fallback={null}>
            <CartModal />
            <InfoModals 
              isOpen={activeInfoModal !== null} 
              onClose={() => setActiveInfoModal(null)}
              type={activeInfoModal || 'about'}
            />
          </Suspense>

        </div>
      </Router>
    </CartProvider>
  );
}

export default App;