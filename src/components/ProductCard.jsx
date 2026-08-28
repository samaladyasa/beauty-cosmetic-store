import React, { useState } from 'react';
import QuickView from './QuickView';
import { motion, AnimatePresence } from 'framer-motion';
import { formatPrice } from '../utils/currency';
import { handleImageError } from '../utils/images';

const ProductCard = ({ product }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

    const handleQuickAdd = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsQuickViewOpen(true);
    };

    return (
        <>
            <div
                className="group block relative"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="aspect-[4/5] bg-[#F7F5F2] overflow-hidden relative mb-6">
                    <motion.div
                        animate={{ scale: isHovered ? 1.05 : 1 }}
                        transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
                        className="absolute inset-0 w-full h-full"
                    >
                        <img
                            src={product.images[0]}
                            alt={product.name}
                            onError={handleImageError}
                            loading="lazy"
                            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
                        />
                        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    </motion.div>

                    <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10 text-[10px] uppercase tracking-[0.2em] font-medium">
                        {product.bestseller && <span className="bg-brand-ivory text-brand-dark px-3 py-1 shadow-sm">Best Seller</span>}
                        {product.newArrival && <span className="bg-brand-dark text-brand-ivory px-3 py-1 shadow-sm">New</span>}
                        {product.originalPrice && <span className="bg-[#8A3A35] text-brand-ivory px-3 py-1 shadow-sm">Sale</span>}
                    </div>

                    <div className={`absolute bottom-0 left-0 right-0 p-4 transform transition-all duration-500 ease-[0.16,1,0.3,1] z-10 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-0 opacity-100 md:translate-y-4 md:opacity-0'}`}>
                        <button
                            onClick={handleQuickAdd}
                            className="w-full bg-brand-ivory text-brand-dark border-none py-3.5 text-[10px] font-medium uppercase tracking-[0.25em] hover:bg-brand-dark hover:text-brand-ivory transition-colors duration-300"
                        >
                            <span className="md:hidden">Shop</span>
                            <span className="hidden md:inline">Quick View</span>
                        </button>
                    </div>
                </div>

                <div className="text-center px-1">
                    <p className="text-[10px] uppercase tracking-widest text-brand-brown/50 font-normal mb-2">{product.category}</p>
                    <h3 className="font-serif text-xl md:text-2xl mb-2 text-brand-dark group-hover:text-brand-champagne transition-colors duration-300">{product.name}</h3>
                    <p className="text-lg font-light flex items-center justify-center gap-3">
                        {product.originalPrice && <span className="line-through text-sm text-brand-brown/40">{formatPrice(product.originalPrice)}</span>}
                        <span className={product.originalPrice ? "text-[#8A3A35]" : "text-brand-dark"}>
                            {formatPrice(product.price)}
                        </span>
                    </p>
                </div>
            </div>

            <QuickView
                isOpen={isQuickViewOpen}
                onClose={() => setIsQuickViewOpen(false)}
                product={product}
            />
        </>
    );
};
export default ProductCard;
