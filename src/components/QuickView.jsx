import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star } from 'lucide-react';
import { formatPrice } from '../utils/currency';
import { getShadeTint, handleImageError } from '../utils/images';

const QuickView = ({ isOpen, onClose, product }) => {
    const [selectedShade, setSelectedShade] = useState(product?.colors?.[0]);

    useEffect(() => {
        if (product && product.colors?.length > 0) {
            setSelectedShade(product.colors[0]);
        }
    }, [product]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    if (!product) return null;

    const shadeIndex = product.colors?.indexOf(selectedShade) ?? -1;
    const selectedImage = product.images[shadeIndex >= 0 ? shadeIndex % product.images.length : 0];

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    key="backdrop"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
                />
            )}
            {isOpen && (
                <motion.div
                    key="modal"
                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 50, scale: 0.95 }}
                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[calc(100%-2rem)] max-w-[800px] h-[calc(100dvh-2rem)] max-h-[600px] bg-brand-ivory overflow-hidden flex flex-col md:flex-row rounded-sm shadow-2xl"
                >
                    <button onClick={onClose} className="absolute top-4 right-4 z-10 p-2 bg-white/50 backdrop-blur-md rounded-full text-brand-brown hover:bg-white transition-colors">
                        <X size={20} />
                    </button>

                    <div className="w-full md:w-1/2 h-[40%] md:h-full relative overflow-hidden">
                        <motion.img
                            key={selectedImage}
                            initial={{ opacity: 0, scale: 1.04 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                            src={selectedImage}
                            onError={handleImageError}
                            alt={`${product.name} in ${selectedShade || 'selected shade'}`}
                            className="w-full h-full object-cover"
                        />
                        <motion.div
                            key={`tint-${selectedShade}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="absolute inset-0 pointer-events-none mix-blend-multiply"
                            style={{ backgroundColor: getShadeTint(selectedShade) }}
                        />
                    </div>

                    <div className="w-full md:w-1/2 h-[60%] md:h-full p-5 md:p-8 flex flex-col overflow-y-auto">
                        <span className="text-xs uppercase tracking-widest text-brand-brown/60 mb-2 block">{product.category}</span>
                        <h2 className="font-serif text-3xl mb-2 text-brand-dark">{product.name}</h2>
                        <div className="flex items-center gap-2 mb-4 text-xs">
                            <div className="flex gap-0.5 text-amber-500">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={14} className={i < Math.floor(product.rating || 5) ? 'fill-current' : 'text-gray-300'} />
                                ))}
                            </div>
                            <span className="text-brand-brown/60">({product.reviews} reviews)</span>
                        </div>

                        <p className="text-2xl mb-6 font-light">
                            {product.originalPrice && <span className="line-through text-base text-brand-brown/40 mr-3">{formatPrice(product.originalPrice)}</span>}
                            {formatPrice(product.price)}
                        </p>

                        <p className="text-brand-brown/80 text-sm leading-relaxed font-light mb-8 flex-grow">
                            {product.description}
                        </p>

                        {product.colors && product.colors.length > 0 && (
                            <div className="mb-8">
                                <span className="text-xs font-semibold uppercase tracking-widest block mb-3">Shade: <span className="font-light">{selectedShade}</span></span>
                                <div className="flex flex-wrap gap-2">
                                    {product.colors.map(color => (
                                        <button
                                            key={color}
                                            onClick={() => setSelectedShade(color)}
                                            className={`px-4 py-2 border rounded-sm text-xs transition-colors ${selectedShade === color ? 'border-brand-brown bg-brand-brown text-white' : 'border-brand-brown/20 text-brand-brown hover:border-brand-brown'}`}
                                        >
                                            {color}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                    </div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    );
};

export default QuickView;
