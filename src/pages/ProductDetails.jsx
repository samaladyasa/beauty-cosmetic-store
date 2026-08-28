import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { products } from '../data/products';
import { ChevronDown, Sparkles } from 'lucide-react';
import { ShadeSelector } from '../components/ProductInteractions';
import FindMyShade from '../components/FindMyShade';
import { formatPrice } from '../utils/currency';
import { getShadeTint, handleImageError } from '../utils/images';

const ProductDetails = () => {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));
    const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || null);
    const [activeImage, setActiveImage] = useState(0);
    const [isFindShadeOpen, setIsFindShadeOpen] = useState(false);

    const handleShadeSelect = (color) => {
        setSelectedColor(color);
        const shadeIndex = product.colors?.indexOf(color) ?? -1;
        if (shadeIndex >= 0 && product.images.length > 1) {
            setActiveImage(shadeIndex % product.images.length);
        }
    };

    if (!product) return <div className="pt-32 text-center h-[50vh] w-full flex justify-center items-center">Product not found</div>;

    return (
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 pt-12 pb-32">
            <div className="text-xs uppercase tracking-widest mb-10 text-brand-brown/60 flex flex-wrap items-center gap-2 w-full">
                <Link to="/#home" className="hover:text-brand-brown transition-colors">Home</Link>
                <span>/</span>
                <Link to="/#shop" className="hover:text-brand-brown transition-colors">Shop</Link>
                <span>/</span>
                <span className="text-brand-brown whitespace-nowrap">{product.name}</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 w-full">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="space-y-4 w-full flex flex-col"
                >
                    <div className="aspect-[4/5] bg-[#E8D5D4]/20 overflow-hidden rounded-sm relative w-full flex group cursor-zoom-in">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={activeImage}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.4 }}
                                src={product.images[activeImage]}
                                onError={handleImageError}
                                alt={product.name}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-[1.2]"
                            />
                            <motion.div
                                key={`tint-${selectedColor}`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="absolute inset-0 pointer-events-none mix-blend-multiply"
                                style={{ backgroundColor: getShadeTint(selectedColor) }}
                            />
                        </AnimatePresence>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full">
                        {product.images.map((img, i) => (
                            <button key={i} onClick={() => setActiveImage(i)} className={`aspect-square bg-brand-nude overflow-hidden rounded-sm border-2 transition-colors flex ${activeImage === i ? 'border-brand-brown' : 'border-transparent'}`}>
                                <img src={img} onError={handleImageError} alt={`${product.name} view ${i + 1}`} className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
                            </button>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    className="flex flex-col pt-4 w-full items-start text-left"
                >
                    <h1 className="font-serif text-4xl mb-2 flex">{product.name}</h1>
                    <div className="flex items-center gap-4 mb-6 text-sm w-full">
                        <span className="text-amber-700">★★★★½</span>
                        <span className="text-brand-brown/60 underline">{product.reviews} Reviews</span>
                    </div>

                    <p className="text-2xl mb-8 flex w-full">{formatPrice(product.price)}</p>

                    <p className="leading-relaxed mb-10 text-brand-brown/80 flex w-full text-left">{product.description}</p>

                    {product.colors && product.colors.length > 0 && (
                        <div className="w-full flex-col mb-10">
                            <div className="flex justify-between items-end mb-4 border-b border-brand-brown/10 pb-2">
                                <span className="text-xs uppercase tracking-widest font-semibold text-brand-dark">Select Shade</span>
                                {(product.category === 'Makeup' || product.category === 'Base') && (
                                    <button
                                        onClick={() => setIsFindShadeOpen(true)}
                                        className="text-[10px] uppercase font-semibold tracking-widest text-brand-brown hover:text-amber-700 flex items-center gap-1 transition-colors"
                                    >
                                        <Sparkles size={12} /> Find My Match
                                    </button>
                                )}
                            </div>
                            <ShadeSelector
                                colors={product.colors}
                                selectedColor={selectedColor}
                                onSelect={handleShadeSelect}
                            />
                        </div>
                    )}

                    <div className="border-t border-brand-brown/10 pt-8 space-y-4 w-full flex flex-col">
                        {['Ingredients', 'How To Use', 'Shipping & Returns'].map((acc) => (
                            <div key={acc} className="border-b border-brand-brown/10 pb-4 w-full">
                                <button className="w-full flex justify-between items-center py-2 text-sm uppercase tracking-widest hover:text-amber-800 transition-colors">
                                    {acc}
                                    <ChevronDown size={16} />
                                </button>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            <FindMyShade
                isOpen={isFindShadeOpen}
                onClose={() => setIsFindShadeOpen(false)}
                product={product}
                onMatch={handleShadeSelect}
            />
        </div>
    );
};
export default ProductDetails;
