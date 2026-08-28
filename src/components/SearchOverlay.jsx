import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search as SearchIcon, ArrowRight } from 'lucide-react';
import { products } from '../data/products';
import { Link, useNavigate } from 'react-router-dom';
import { formatPrice } from '../utils/currency';
import { handleImageError } from '../utils/images';

const SearchOverlay = ({ isOpen, onClose }) => {
    const inputRef = useRef(null);
    const navigate = useNavigate();
    const [query, setQuery] = useState('');

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            setQuery('');
            setTimeout(() => inputRef.current?.focus(), 100);
        } else {
            document.body.style.overflow = 'unset';
        }
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.body.style.overflow = 'unset';
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!query.trim()) return;
        onClose();
        navigate(`/?q=${encodeURIComponent(query)}#shop`);
    };

    const handlePopularClick = (term) => {
        setQuery(term);
        setTimeout(() => {
            onClose();
            navigate(`/?q=${encodeURIComponent(term)}#shop`);
        }, 100);
    };

    const filteredProducts = query.trim() !== ''
        ? products.filter(p =>
            p.name.toLowerCase().includes(query.toLowerCase()) ||
            p.category.toLowerCase().includes(query.toLowerCase())
        ).slice(0, 6)
        : [];

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="fixed inset-0 z-50 bg-brand-ivory/95 backdrop-blur-xl flex flex-col pt-16 md:pt-24 px-4 md:px-12 overflow-y-auto w-full min-h-screen pt-safe"
                >
                    <button onClick={onClose} aria-label="Close search" className="absolute top-6 right-6 md:top-8 md:right-8 p-2 hover:rotate-90 transition-transform duration-300">
                        <X size={28} className="text-brand-brown font-light" />
                    </button>

                    <div className="max-w-5xl mx-auto w-full">
                        <form onSubmit={handleSubmit} className="relative border-b border-brand-brown/30 pb-4 mb-12 group flex w-full">
                            <SearchIcon size={28} className="absolute left-0 top-1/2 -translate-y-1/2 text-brand-brown/40 group-focus-within:text-brand-brown transition-colors" />
                            <input
                                ref={inputRef}
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Search elegant essentials..."
                                className="w-full bg-transparent text-3xl md:text-5xl lg:text-6xl font-serif outline-none pl-10 md:pl-12 placeholder-brand-brown/20 text-brand-brown"
                            />
                        </form>

                        <AnimatePresence mode="wait">
                            {query.trim().length === 0 ? (
                                <motion.div
                                    key="empty-state"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 w-full"
                                >
                                    <div>
                                        <h3 className="uppercase tracking-[0.2em] text-[10px] font-semibold mb-6 text-brand-brown/50">Trending Searches</h3>
                                        <ul className="space-y-4 font-serif text-2xl flex flex-col items-start w-full">
                                            {['Luminous Foundation', 'Lip Tint', 'Vitamin C Serum', 'Body Oil'].map((term) => (
                                                <li key={term}>
                                                    <button type="button" onClick={() => handlePopularClick(term)} className="hover:text-amber-800 transition-colors w-full text-left font-light">{term}</button>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="uppercase tracking-[0.2em] text-[10px] font-semibold mb-6 text-brand-brown/50">Curated For You</h3>
                                        <div className="grid grid-cols-2 gap-4">
                                            {products.filter(p => p.bestseller).slice(0, 2).map(product => (
                                                <Link key={product.id} to={`/product/${product.id}`} onClick={onClose} className="group cursor-pointer block">
                                                    <div className="aspect-[4/5] bg-[#E8D5D4]/20 mb-3 overflow-hidden rounded-sm relative">
                                                        <img src={product.images[0]} onError={handleImageError} alt={product.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-[1s]" />
                                                    </div>
                                                    <p className="font-serif text-base group-hover:text-amber-800 transition-colors text-brand-dark">{product.name}</p>
                                                    <p className="text-xs text-brand-brown/60 font-medium uppercase tracking-widest mt-1">{product.category}</p>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="results-state"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="w-full"
                                >
                                    <div className="flex justify-between items-end mb-8 border-b border-brand-brown/10 pb-4">
                                        <h3 className="uppercase tracking-[0.2em] text-xs font-semibold text-brand-brown/70">
                                            Results for "<span className="text-brand-dark">{query}</span>"
                                        </h3>
                                        <span className="text-xs text-brand-brown/50">{filteredProducts.length} items</span>
                                    </div>

                                    {filteredProducts.length > 0 ? (
                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 md:gap-x-8 gap-y-12">
                                            {filteredProducts.map(product => (
                                                <Link key={product.id} to={`/product/${product.id}`} onClick={onClose} className="group cursor-pointer block flex-col items-center">
                                                    <div className="aspect-[4/5] bg-[#E8D5D4]/20 mb-4 overflow-hidden rounded-sm relative w-full">
                                                        <img src={product.images[0]} onError={handleImageError} alt={product.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-[1.5s]" />
                                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                                                    </div>
                                                    <div className="text-center w-full">
                                                        <p className="text-[10px] uppercase tracking-widest font-semibold text-brand-brown/50 mb-1">{product.category}</p>
                                                        <p className="font-serif text-lg md:text-xl group-hover:text-amber-800 transition-colors mb-1 text-brand-dark">{product.name}</p>
                                                        <p className="text-sm font-light text-brand-brown">{formatPrice(product.price)}</p>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="py-20 flex flex-col items-center justify-center text-center">
                                            <SearchIcon size={40} className="text-brand-brown/20 mb-6" />
                                            <h3 className="font-serif text-2xl mb-2 text-brand-dark">No delicate matches found</h3>
                                            <p className="text-brand-brown/60 text-sm">We couldn't find anything matching your search. Try checking for typos or searching by category.</p>
                                        </div>
                                    )}

                                    {filteredProducts.length > 0 && (
                                        <div className="mt-16 w-full text-center">
                                            <button onClick={handleSubmit} className="uppercase tracking-[0.2em] text-xs font-semibold border-b border-brand-brown pb-1 hover:text-amber-800 hover:border-amber-800 transition-colors inline-flex items-center gap-2">
                                                View All Results <ArrowRight size={14} />
                                            </button>
                                        </div>
                                    )}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
export default SearchOverlay;
