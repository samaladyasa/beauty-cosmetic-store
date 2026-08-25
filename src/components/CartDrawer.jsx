import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, Trash2, ShieldCheck, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/currency';
import { handleImageError } from '../utils/images';

const CartDrawer = ({ onCheckoutClick }) => {
    const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();

    const freeShippingThreshold = 699;
    const progress = Math.min(100, (cartTotal / freeShippingThreshold) * 100);
    const amountLeft = freeShippingThreshold - cartTotal;

    useEffect(() => {
        if (isCartOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isCartOpen]);

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsCartOpen(false)}
                        className="fixed inset-0 bg-brand-dark/30 backdrop-blur-[2px] z-50 cursor-pointer"
                    />
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 h-[100dvh] w-full max-w-[400px] bg-brand-ivory shadow-2xl z-50 flex flex-col"
                    >
                        <div className="flex justify-between items-center p-6 border-b border-brand-brown/10 pt-safe">
                            <h2 className="font-serif text-2xl text-brand-dark">Your Bag ({cart.length})</h2>
                            <button onClick={() => setIsCartOpen(false)} className="p-2 -mr-2 text-brand-brown/60 hover:text-brand-brown hover:rotate-90 transition-all duration-300">
                                <X size={20} />
                            </button>
                        </div>

                        {cart.length > 0 && (
                            <div className="bg-[#E8D5D4]/20 p-4 border-b border-brand-brown/5">
                                <p className="text-xs text-center mb-3 text-brand-brown/80 font-medium">
                                    {amountLeft > 0
                                        ? <>You're <span className="font-bold">{formatPrice(amountLeft)}</span> away from complimentary shipping.</>
                                        : <>You've unlocked <span className="font-bold">complimentary shipping!</span> 🎉</>
                                    }
                                </p>
                                <div className="w-full bg-brand-brown/10 h-1.5 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${progress}%` }}
                                        transition={{ duration: 1, ease: "easeOut" }}
                                        className="h-full bg-brand-brown rounded-full"
                                    />
                                </div>
                            </div>
                        )}

                        <div className="flex-1 overflow-y-auto p-6 space-y-8 flex flex-col">
                            {cart.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                                    <div className="w-20 h-20 rounded-full bg-[#E8D5D4]/30 flex items-center justify-center mb-4 text-brand-brown/40">
                                        <ShieldCheck size={32} />
                                    </div>
                                    <h3 className="font-serif text-2xl">Your bag is empty</h3>
                                    <p className="text-brand-brown/60 text-sm max-w-[200px] font-light">Discover our collection of premium essentials.</p>
                                    <button
                                        onClick={() => setIsCartOpen(false)}
                                        className="border border-brand-brown/30 px-8 py-4 text-xs font-semibold tracking-[0.2em] uppercase hover:bg-brand-brown hover:text-brand-ivory transition-colors mt-4"
                                    >
                                        Start Shopping
                                    </button>
                                </div>
                            ) : (
                                cart.map(item => (
                                    <motion.div
                                        layout
                                        key={`${item.id}-${item.selectedColor}`}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        className="flex gap-5 group"
                                    >
                                        <div className="h-28 w-24 bg-[#E8D5D4]/20 overflow-hidden rounded-sm relative shrink-0">
                                            <img src={item.images[0]} onError={handleImageError} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                        </div>
                                        <div className="flex-1 flex flex-col justify-between py-1">
                                            <div className="flex justify-between items-start">
                                                <div className="pr-4">
                                                    <h3 className="font-serif text-lg leading-tight mb-1 text-brand-dark">{item.name}</h3>
                                                    {item.selectedColor && <p className="text-xs text-brand-brown/60 font-light mt-1">Shade: {item.selectedColor}</p>}
                                                </div>
                                                <button onClick={() => removeFromCart(item.id, item.selectedColor)} className="text-brand-brown/30 hover:text-red-800 transition-colors shrink-0 p-1 -mt-1">
                                                    <Trash2 size={16} />
                                                </button>
                                            </div>
                                            <div className="flex justify-between items-end mt-4">
                                                <div className="flex items-center border border-brand-brown/20 rounded-sm px-2 h-8 text-sm">
                                                    <button onClick={() => updateQuantity(item.id, item.selectedColor, item.quantity - 1)} className="px-2 py-1 hover:text-amber-700 transition-colors text-brand-brown/60"><Minus size={12} /></button>
                                                    <span className="text-xs w-6 text-center font-medium">{item.quantity}</span>
                                                    <button onClick={() => updateQuantity(item.id, item.selectedColor, item.quantity + 1)} className="px-2 py-1 hover:text-amber-700 transition-colors text-brand-brown/60"><Plus size={12} /></button>
                                                </div>
                                                <p className="font-light text-brand-dark">{formatPrice(item.price * item.quantity)}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))
                            )}
                        </div>

                        {cart.length > 0 && (
                            <div className="border-t border-brand-brown/10 p-6 bg-brand-ivory pb-safe">
                                <div className="space-y-3 mb-6 font-light text-sm text-brand-brown/80">
                                    <div className="flex justify-between">
                                        <span>Subtotal</span>
                                        <span>{formatPrice(cartTotal)}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Shipping</span>
                                        <span>{amountLeft <= 0 ? 'Complimentary' : 'Calculated at checkout'}</span>
                                    </div>
                                </div>

                                <div className="flex justify-between items-end font-serif text-2xl text-brand-dark mb-6 pt-4 border-t border-brand-brown/10">
                                    <span className="text-lg">Total</span>
                                    <span>{formatPrice(cartTotal)}</span>
                                </div>

                                <button type="button" onClick={() => { setIsCartOpen(false); onCheckoutClick(); }} className="w-full bg-brand-brown text-brand-ivory py-4 text-xs font-semibold tracking-[0.2em] uppercase hover:bg-black transition-colors flex items-center justify-center gap-2 group">
                                    Secure Checkout <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </button>

                                <p className="text-[10px] text-center text-brand-brown/60 mt-4 font-light uppercase tracking-widest">
                                    Taxes calculated at checkout
                                </p>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
export default CartDrawer;
