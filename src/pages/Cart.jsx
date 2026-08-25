import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/currency';
import { handleImageError } from '../utils/images';
import { Trash2, Plus, Minus } from 'lucide-react';

const Cart = () => {
    const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

    return (
        <div className="pt-24 pb-20 px-4 md:px-8 max-w-7xl mx-auto min-h-screen">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
                <h1 className="text-4xl md:text-5xl font-serif text-brand-dark mb-12 text-center">Your Bag</h1>

                {cart.length === 0 ? (
                    <div className="text-center py-20 bg-white border border-brand-champagne/30">
                        <p className="text-brand-brown/60 mb-6 font-light text-lg">Your shopping bag is currently empty.</p>
                        <Link
                            to="/#shop"
                            className="inline-block bg-brand-dark text-white px-10 py-3 text-sm tracking-widest uppercase hover:bg-brand-brown transition-colors duration-300"
                        >
                            Continue Shopping
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2 space-y-6">
                            <div className="hidden md:grid grid-cols-12 text-xs tracking-wider uppercase text-brand-brown/60 pb-4 border-b border-brand-champagne/30">
                                <div className="col-span-6">Product</div>
                                <div className="col-span-3 text-center">Quantity</div>
                                <div className="col-span-3 text-right">Total</div>
                            </div>

                            <AnimatePresence>
                                {cart.map((item) => (
                                    <motion.div
                                        key={`${item.id}-${item.selectedColor}`}
                                        layout
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, x: -50 }}
                                        transition={{ duration: 0.3 }}
                                        className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center py-6 border-b border-brand-champagne/30"
                                    >
                                        <div className="col-span-1 md:col-span-6 flex gap-6 items-center">
                                            <div className="w-24 h-24 bg-brand-nude shrink-0 overflow-hidden">
                                                <img src={item.images[0]} onError={handleImageError} alt={item.name} className="w-full h-full object-cover" />
                                            </div>
                                            <div>
                                                <h3 className="font-serif text-lg text-brand-dark">{item.name}</h3>
                                                {item.selectedColor && (
                                                    <p className="text-sm text-brand-brown/60 mt-1 capitalize">Shade: {item.selectedColor}</p>
                                                )}
                                                <p className="text-sm text-brand-brown/80 mt-1 md:hidden">{formatPrice(item.price)}</p>
                                            </div>
                                        </div>

                                        <div className="col-span-1 md:col-span-3 flex justify-between md:justify-center items-center">
                                            <div className="flex items-center border border-brand-champagne/50">
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.selectedColor, item.quantity - 1)}
                                                    className="p-2 text-brand-brown hover:bg-brand-champagne/20 transition-colors"
                                                >
                                                    <Minus size={14} />
                                                </button>
                                                <span className="w-8 text-center text-sm">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.selectedColor, item.quantity + 1)}
                                                    className="p-2 text-brand-brown hover:bg-brand-champagne/20 transition-colors"
                                                >
                                                    <Plus size={14} />
                                                </button>
                                            </div>
                                        </div>

                                        <div className="col-span-1 md:col-span-3 flex justify-between md:justify-end items-center mt-4 md:mt-0">
                                            <button
                                                onClick={() => removeFromCart(item.id, item.selectedColor)}
                                                className="text-brand-brown/40 hover:text-red-500 transition-colors md:mr-6"
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                            <span className="font-medium text-brand-dark">{formatPrice(item.price * item.quantity)}</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>

                        <div className="lg:col-span-1">
                            <div className="bg-white p-8 border border-brand-champagne/30 sticky top-32">
                                <h2 className="font-serif text-2xl text-brand-dark mb-6 border-b border-brand-champagne/30 pb-4">Order Summary</h2>

                                <div className="space-y-4 mb-8">
                                    <div className="flex justify-between text-brand-brown/80 font-light">
                                        <span>Subtotal</span>
                                        <span>{formatPrice(cartTotal)}</span>
                                    </div>
                                    <div className="flex justify-between text-brand-brown/80 font-light">
                                        <span>Shipping</span>
                                        <span>Calculated at checkout</span>
                                    </div>
                                    <div className="flex justify-between font-medium text-brand-dark text-lg pt-4 border-t border-brand-champagne/30">
                                        <span>Total</span>
                                        <span>{formatPrice(cartTotal)}</span>
                                    </div>
                                </div>

                                <Link to="/#shop" className="w-full py-4 bg-brand-dark text-white uppercase tracking-widest text-sm hover:bg-brand-brown transition-colors duration-300 text-center block">
                                    Proceed to Checkout
                                </Link>

                                <div className="mt-6 flex items-center justify-center gap-2 text-brand-brown/50 text-xs text-center uppercase tracking-wider">
                                    <span>Secure Checkout</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </motion.div>
        </div>
    );
};

export default Cart;
