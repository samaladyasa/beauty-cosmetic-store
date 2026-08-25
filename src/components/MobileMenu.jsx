import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

const MobileMenu = ({ isOpen, onClose, onAccountClick, onWishlistClick }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);
    const links = [
        { name: 'Home', path: '/#home' },
        { name: 'Shop All', path: '/#shop' },
        { name: 'About', path: '/#about' },
        { name: 'Categories', path: '/#categories' },
        { name: 'Wishlist', action: onWishlistClick },
        { name: 'Account', action: onAccountClick }
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, x: '-100%' }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: '-100%' }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="fixed inset-0 z-50 bg-brand-nude flex flex-col p-6 md:hidden"
                >
                    <div className="flex justify-between items-center mb-16">
                        <span className="font-serif text-2xl tracking-widest uppercase">Auréa</span>
                        <button onClick={onClose} className="p-2 -mr-2 text-brand-brown">
                            <X size={24} />
                        </button>
                    </div>

                    <div className="flex flex-col space-y-8 flex-1">
                        {links.map((link, i) => (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + i * 0.1 }}
                                key={link.name}
                                className="flex w-full"
                            >
                                {link.action ? (
                                    <button
                                    onClick={() => { link.action(); onClose(); }}
                                    className="font-serif text-4xl text-brand-brown hover:text-amber-800 transition-colors w-full"
                                    >
                                    {link.name}
                                    </button>
                                ) : (
                                    <Link to={link.path} onClick={onClose} className="font-serif text-4xl text-brand-brown hover:text-amber-800 transition-colors w-full">
                                        {link.name}
                                    </Link>
                                )}
                            </motion.div>
                        ))}
                    </div>

                    <div className="pb-8 flex flex-col space-y-4">
                        <Link
                            to="/#account"
                            onClick={(event) => { event.preventDefault(); onAccountClick(); onClose(); }}
                            className="text-sm border-t border-brand-brown/20 pt-4 flex w-full hover:text-amber-800 transition-colors"
                        >
                            Sign In / Register
                        </Link>
                        <p className="text-xs text-brand-brown/60 flex">English (USD)</p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
export default MobileMenu;
