import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';
import QuickView from './QuickView';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { formatPrice } from '../utils/currency';
import { handleImageError } from '../utils/images';

const ProductCard = ({ product }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
    const { toggleWishlist, isInWishlist } = useWishlist();
    const pointerX = useMotionValue(0);
    const pointerY = useMotionValue(0);
    const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [4, -4]), { stiffness: 240, damping: 25 });
    const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-4, 4]), { stiffness: 240, damping: 25 });

    const handleQuickAdd = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsQuickViewOpen(true);
    };

    const handleWishlist = (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleWishlist(product);
    };

    const handlePointerMove = (event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5);
        pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5);
    };

    const resetPointer = () => {
        pointerX.set(0);
        pointerY.set(0);
    };

    const inWishlist = isInWishlist(product.id);

    return (
        <>
            <Link
                to="/#shop"
                className="group block relative"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onPointerMove={handlePointerMove}
                onPointerLeave={resetPointer}
            >
                <motion.div style={{ rotateX, rotateY, transformPerspective: 900 }} className="aspect-[4/5] bg-[#E8D5D4]/20 overflow-hidden relative rounded-sm mb-5">
                    <motion.div
                        animate={{ scale: isHovered ? 1.04 : 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="absolute inset-0 w-full h-full"
                    >
                        <img
                            src={product.images[0]}
                            alt={product.name}
                            onError={handleImageError}
                            loading="lazy"
                            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[0.8s] ease-in-out ${isHovered && product.images[1] ? 'opacity-0' : 'opacity-100'}`}
                        />
                        {product.images[1] && (
                            <img
                                src={product.images[1]}
                                alt={`${product.name} styling`}
                                onError={handleImageError}
                                loading="lazy"
                                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[0.8s] ease-in-out ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                            />
                        )}
                    </motion.div>

                    <div className="absolute top-4 left-4 flex flex-col gap-2 z-10 text-[9px] uppercase tracking-[0.2em] font-semibold">
                        {product.bestseller && <span className="bg-brand-ivory text-brand-brown px-3 py-1.5 shadow-sm">Best Seller</span>}
                        {product.newArrival && <span className="bg-brand-brown text-brand-ivory px-3 py-1.5 shadow-sm">New</span>}
                        {product.originalPrice && <span className="bg-red-800 text-brand-ivory px-3 py-1.5 shadow-sm">Sale</span>}
                    </div>

                    <button
                        onClick={handleWishlist}
                        className="absolute top-4 right-4 z-20 p-2.5 text-brand-brown hover:bg-brand-ivory hover:-translate-y-0.5 transition-all duration-300 bg-brand-ivory/80 rounded-full backdrop-blur-md shadow-[0_2px_10px_rgba(0,0,0,0.05)]"
                    >
                        <motion.div
                            whileTap={{ scale: 0.8 }}
                            animate={{ scale: inWishlist ? [1, 1.2, 1] : 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Heart size={16} className={inWishlist ? "fill-brand-brown text-brand-brown" : "stroke-[1.5]"} />
                        </motion.div>
                    </button>

                    <div className={`absolute bottom-0 left-0 right-0 p-3 md:p-4 transform transition-all duration-500 ease-out z-10 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-0 opacity-100 md:translate-y-[120%] md:opacity-0'}`}>
                        <button
                            onClick={handleQuickAdd}
                            className="w-full bg-brand-ivory/95 backdrop-blur-md text-brand-brown py-3.5 text-[10px] font-semibold uppercase tracking-[0.2em] hover:bg-brand-brown hover:text-brand-ivory transition-colors shadow-sm"
                        >
                            <span className="md:hidden">Add to Bag</span>
                            <span className="hidden md:inline">Quick View</span>
                        </button>
                    </div>
                </motion.div>

                <div className="text-center">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-brand-brown/50 font-semibold mb-2">{product.category}</p>
                    <h3 className="font-serif text-xl md:text-2xl mb-2 text-brand-dark">{product.name}</h3>
                    <p className="text-sm font-light flex items-center justify-center gap-2">
                        {product.originalPrice && <span className="line-through text-brand-brown/40">{formatPrice(product.originalPrice)}</span>}
                        <span className={product.originalPrice ? "text-red-800 font-semibold" : "text-brand-brown"}>
                            {formatPrice(product.price)}
                        </span>
                    </p>
                </div>
            </Link>

            <QuickView
                isOpen={isQuickViewOpen}
                onClose={() => setIsQuickViewOpen(false)}
                product={product}
            />
        </>
    );
};
export default ProductCard;
