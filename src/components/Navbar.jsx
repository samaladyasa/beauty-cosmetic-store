import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, User, Heart, ShoppingBag, Menu } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ onMenuClick, onSearchClick, onAccountClick, onWishlistClick }) => {
    const { cartCount, setIsCartOpen } = useCart();
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navClass = `fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-in-out ${scrolled || !isHome ? 'bg-brand-ivory/95 backdrop-blur-md py-4 shadow-[0_4px_20px_rgba(0,0,0,0.03)]' : 'bg-transparent py-6'
        }`;

    return (
        <nav className={navClass}>
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-8 flex justify-between items-center min-h-10">
                <div className="flex md:hidden items-center">
                    <button onClick={onMenuClick} aria-label="Open menu" className="p-2 -ml-2 text-brand-brown min-w-10 min-h-10 flex items-center justify-center">
                        <Menu size={24} />
                    </button>
                </div>

                <div className="hidden md:flex items-center space-x-8 text-sm uppercase tracking-wider flex-1">
                    <Link to="/#home" className={`relative group transition-colors ${location.pathname === '/' ? 'text-amber-900 font-medium' : 'hover:text-amber-900'}`}>
                        Home
                        <span className={`absolute -bottom-1 left-0 h-[1px] bg-amber-900 transition-all duration-300 ${location.pathname === '/' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                    </Link>
                    <Link to="/#shop" className={`relative group transition-colors ${location.pathname === '/shop' ? 'text-amber-900 font-medium' : 'hover:text-amber-900'}`}>
                        Shop
                        <span className={`absolute -bottom-1 left-0 h-[1px] bg-amber-900 transition-all duration-300 ${location.pathname === '/shop' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                    </Link>
                    <Link to="/#about" className={`relative group transition-colors ${location.pathname === '/about' ? 'text-amber-900 font-medium' : 'hover:text-amber-900'}`}>
                        About
                        <span className={`absolute -bottom-1 left-0 h-[1px] bg-amber-900 transition-all duration-300 ${location.pathname === '/about' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                    </Link>
                </div>

                <div className="text-center flex-1 flex justify-center min-w-0 px-2">
                    <Link to="/#home" className="font-serif text-xl sm:text-2xl tracking-[0.18em] uppercase whitespace-nowrap">
                        Auréa
                    </Link>
                </div>

                <div className="flex items-center gap-1 sm:gap-2 md:gap-6 justify-end flex-1">
                    <button onClick={onSearchClick} aria-label="Search products" className="p-2 min-w-10 min-h-10 flex items-center justify-center hover:-translate-y-0.5 transition-transform">
                        <Search size={20} className="text-brand-brown font-light" />
                    </button>
                    <button onClick={onAccountClick} className="hidden md:flex p-2 min-w-10 min-h-10 items-center justify-center hover:-translate-y-0.5 transition-transform" aria-label="Account">
                        <User size={20} className="text-brand-brown font-light" />
                    </button>
                    <button onClick={onWishlistClick} className="flex p-2 min-w-10 min-h-10 items-center justify-center hover:-translate-y-0.5 transition-transform" aria-label="Wishlist">
                        <Heart size={20} className="text-brand-brown font-light" />
                    </button>
                    <button onClick={() => setIsCartOpen(true)} className="relative p-2 min-w-10 min-h-10 flex items-center justify-center hover:-translate-y-0.5 transition-transform" aria-label="Open shopping bag">
                        <ShoppingBag size={20} className="text-brand-brown" />
                        <AnimatePresence>
                            {cartCount > 0 && (
                                <motion.span
                                    key={cartCount}
                                    initial={{ scale: 0, y: 10 }}
                                    animate={{ scale: 1, y: 0 }}
                                    exit={{ scale: 0 }}
                                    transition={{ type: "spring", stiffness: 500, damping: 25 }}
                                    className="absolute -top-1.5 -right-2.5 bg-amber-900 text-white text-[10px] w-[18px] h-[18px] flex items-center justify-center rounded-full font-medium"
                                >
                                    {cartCount}
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </button>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;
