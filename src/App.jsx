import React, { useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MobileMenu from './components/MobileMenu';
import ScrollToTop from './components/ScrollToTop';
import { WaveTransition } from './components/Dividers';

// Pages
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import Checkout from './pages/Checkout';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const location = useLocation();

  return (
    <div className="relative min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar
        onMenuClick={() => setIsMobileMenuOpen(true)}
      />

      <main className="flex-grow pt-20">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<SinglePageStorefront />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<Navigate to="/#home" replace />} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer
      />
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </div>
  );
}

function SinglePageStorefront() {
  return (
    <>
      <section id="home"><Home /></section>
      <section id="shop"><Shop /></section>
      <WaveTransition topBg="bg-brand-ivory" bottomFill="text-[#f3f0ec]" />
      <section id="about" className="bg-[#f3f0ec]"><About /></section>
    </>
  );
}

function PageOverlay({ isOpen, onClose, title, children }) {
  React.useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-brand-dark/30 backdrop-blur-sm p-4 md:p-8 overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            className="relative max-w-5xl mx-auto bg-brand-ivory min-h-full shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="sticky top-0 z-10 flex items-center justify-between px-5 py-4 bg-brand-ivory/95 backdrop-blur border-b border-brand-brown/10">
              <span className="text-xs uppercase tracking-[0.2em] text-brand-brown/60">{title}</span>
              <button onClick={onClose} className="p-2 text-brand-brown hover:rotate-90 transition-transform" aria-label={`Close ${title}`}>
                <X size={20} />
              </button>
            </div>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;
