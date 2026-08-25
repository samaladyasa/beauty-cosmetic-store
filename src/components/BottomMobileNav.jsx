import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Compass, Heart, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

const BottomMobileNav = ({ onWishlistClick }) => {
    const { cartCount, setIsCartOpen } = useCart();

    const navItems = [
        { path: '/#home', label: 'Home', icon: Home },
        { path: '/#shop', label: 'Explore', icon: Compass },
        { label: 'Wishlist', icon: Heart, action: onWishlistClick },
    ];

    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-brand-ivory/95 backdrop-blur-md border-t border-brand-brown/10 pb-safe pt-2 px-6 flex justify-between items-center shadow-[0_-4px_20px_rgba(0,0,0,0.02)]">
            {navItems.map((item) => {
                if (item.action) {
                    return (
                        <button key={item.label} onClick={item.action} className="flex flex-col items-center p-2 transition-colors text-brand-brown/60 hover:text-brand-brown">
                            <item.icon size={20} />
                            <span className="text-[10px] mt-1 font-medium opacity-70">{item.label}</span>
                        </button>
                    );
                }

                return (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) => `flex flex-col items-center p-2 transition-colors ${isActive ? 'text-amber-900' : 'text-brand-brown/60 hover:text-brand-brown'}`}
                    >
                        {({ isActive }) => (
                            <>
                                <motion.div animate={isActive ? { y: -2 } : { y: 0 }} transition={{ type: "spring", stiffness: 400, damping: 25 }}>
                                    <item.icon size={20} className={isActive ? 'fill-amber-900/10' : ''} />
                                </motion.div>
                                <span className={`text-[10px] mt-1 font-medium ${isActive ? 'opacity-100 font-semibold' : 'opacity-70'}`}>{item.label}</span>
                            </>
                        )}
                    </NavLink>
                );
            })}

            <button
                onClick={() => setIsCartOpen(true)}
                className="flex flex-col items-center p-2 text-brand-brown/60 hover:text-brand-brown transition-colors relative"
            >
                <ShoppingBag size={20} />
                <AnimatePresence>
                    {cartCount > 0 && (
                        <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            className="absolute top-1 right-2 bg-amber-900 text-white text-[9px] w-[14px] h-[14px] flex items-center justify-center rounded-full"
                        >
                            {cartCount}
                        </motion.span>
                    )}
                </AnimatePresence>
                <span className="text-[10px] mt-1 font-medium opacity-70">Bag</span>
            </button>
        </div>
    );
};

export default BottomMobileNav;
