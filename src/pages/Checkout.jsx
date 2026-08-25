import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/currency';
import { handleImageError } from '../utils/images';

const Checkout = () => {
    const { cartTotal, cart } = useCart();
    const [paymentMethod, setPaymentMethod] = useState('card');

    return (
        <div className="min-h-screen pt-24 pb-20 px-4 md:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">

            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="w-full lg:w-2/3 space-y-12"
            >
                <div className="space-y-6">
                    <h2 className="font-serif text-3xl border-b border-brand-champagne pb-4">Contact Information</h2>
                    <input type="email" placeholder="Email Address" className="w-full border border-brand-champagne p-4 bg-transparent outline-none focus:border-brand-brown transition-colors" />
                </div>

                <div className="space-y-6">
                    <h2 className="font-serif text-3xl border-b border-brand-champagne pb-4">Shipping Address</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input type="text" placeholder="First Name" className="w-full border border-brand-champagne p-4 bg-transparent outline-none focus:border-brand-brown transition-colors" />
                        <input type="text" placeholder="Last Name" className="w-full border border-brand-champagne p-4 bg-transparent outline-none focus:border-brand-brown transition-colors" />
                    </div>
                    <input type="text" placeholder="Address" className="w-full border border-brand-champagne p-4 bg-transparent outline-none focus:border-brand-brown transition-colors" />
                    <input type="text" placeholder="Apartment, suite, etc. (optional)" className="w-full border border-brand-champagne p-4 bg-transparent outline-none focus:border-brand-brown transition-colors" />
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <input type="text" placeholder="City" className="w-full border border-brand-champagne p-4 bg-transparent outline-none focus:border-brand-brown transition-colors" />
                        <input type="text" placeholder="State/Province" className="w-full border border-brand-champagne p-4 bg-transparent outline-none focus:border-brand-brown transition-colors" />
                        <input type="text" placeholder="Zip Code" className="w-full border border-brand-champagne p-4 bg-transparent outline-none focus:border-brand-brown transition-colors" />
                    </div>
                </div>

                <div className="space-y-6">
                    <h2 className="font-serif text-3xl border-b border-brand-champagne pb-4">Payment</h2>

                    <div className="border border-brand-champagne bg-[#fcf9f5]">
                        <div className="flex flex-col border-b border-brand-champagne">
                            <label className={`flex items-center gap-3 p-4 cursor-pointer transition-colors ${paymentMethod === 'card' ? 'bg-brand-champagne/30' : 'hover:bg-brand-champagne/10'}`}>
                                <input type="radio" name="paymentMethod" value="card" checked={paymentMethod === 'card'} onChange={() => setPaymentMethod('card')} className="accent-brand-brown" />
                                <span className="font-medium text-brand-dark cursor-pointer">Credit or Debit Card</span>
                            </label>

                            {paymentMethod === 'card' && (
                                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} className="p-4 space-y-4 border-t border-brand-champagne/30 overflow-hidden">
                                    <input type="text" placeholder="Card Number" className="w-full border border-brand-champagne p-4 bg-white outline-none focus:border-brand-brown transition-colors" />
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <input type="text" placeholder="Expiration date (MM / YY)" className="w-full border border-brand-champagne p-4 bg-white outline-none focus:border-brand-brown transition-colors" />
                                        <input type="text" placeholder="Security code (CVV)" className="w-full border border-brand-champagne p-4 bg-white outline-none focus:border-brand-brown transition-colors" />
                                    </div>
                                    <input type="text" placeholder="Name on card" className="w-full border border-brand-champagne p-4 bg-white outline-none focus:border-brand-brown transition-colors" />
                                </motion.div>
                            )}

                            <label className={`flex items-center gap-3 p-4 border-t border-brand-champagne cursor-pointer transition-colors ${paymentMethod === 'upi' ? 'bg-brand-champagne/30' : 'hover:bg-brand-champagne/10'}`}>
                                <input type="radio" name="paymentMethod" value="upi" checked={paymentMethod === 'upi'} onChange={() => setPaymentMethod('upi')} className="accent-brand-brown" />
                                <span className="font-medium text-brand-dark cursor-pointer">UPI Options</span>
                            </label>

                            {paymentMethod === 'upi' && (
                                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} className="p-4 space-y-4 border-t border-brand-champagne/30 overflow-hidden">
                                    <p className="text-sm text-brand-brown/70 mb-2">Pay securely using UPI apps like Google Pay, PhonePe, Paytm, etc.</p>
                                    <input type="text" placeholder="Enter UPI ID (e.g. name@okhdfcbank)" className="w-full border border-brand-champagne p-4 bg-white outline-none focus:border-brand-brown transition-colors" />
                                </motion.div>
                            )}

                            <label className={`flex items-center gap-3 p-4 border-t border-brand-champagne cursor-pointer transition-colors ${paymentMethod === 'paypal' ? 'bg-brand-champagne/30' : 'hover:bg-brand-champagne/10'}`}>
                                <input type="radio" name="paymentMethod" value="paypal" checked={paymentMethod === 'paypal'} onChange={() => setPaymentMethod('paypal')} className="accent-brand-brown" />
                                <span className="font-medium text-brand-dark cursor-pointer">PayPal</span>
                            </label>

                            {paymentMethod === 'paypal' && (
                                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} className="p-4 border-t border-brand-champagne/30 overflow-hidden text-center">
                                    <p className="text-sm text-brand-brown/70 pb-4">You will be redirected to PayPal to complete your purchase securely.</p>
                                </motion.div>
                            )}
                        </div>
                    </div>

                    <button className="w-full py-5 bg-brand-dark text-white uppercase tracking-widest text-sm hover:bg-brand-brown transition-colors duration-300 mt-8">
                        {paymentMethod === 'paypal' ? 'Continue with PayPal' : `Pay ${formatPrice(cartTotal)}`}
                    </button>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="w-full lg:w-1/3"
            >
                <div className="bg-white p-8 border border-brand-champagne/50 sticky top-32">
                    <h2 className="font-serif text-2xl text-brand-dark mb-6 border-b border-brand-champagne/30 pb-4">Order Summary</h2>

                    <div className="space-y-4 mb-6 max-h-64 overflow-y-auto pr-2">
                        {cart.map(item => (
                            <div key={`${item.id}-${item.selectedColor}`} className="flex gap-4 items-center">
                                <div className="h-16 w-16 bg-brand-nude shrink-0 relative rounded-sm overflow-hidden">
                                    <span className="absolute -top-2 -right-2 bg-brand-dark text-white w-5 h-5 rounded-full text-[10px] flex items-center justify-center z-10">{item.quantity}</span>
                                    <img src={item.images[0]} onError={handleImageError} alt={item.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1 text-sm">
                                    <p className="font-medium">{item.name}</p>
                                    {item.selectedColor && <p className="text-brand-brown/60 text-xs mt-1">{item.selectedColor}</p>}
                                </div>
                                <p className="text-sm font-medium">{formatPrice(item.price * item.quantity)}</p>
                            </div>
                        ))}
                    </div>

                    <div className="space-y-3 mb-6 border-t border-brand-champagne/30 pt-4">
                        <div className="flex justify-between text-brand-brown/80 font-light text-sm">
                            <span>Subtotal</span>
                            <span>{formatPrice(cartTotal)}</span>
                        </div>
                        <div className="flex justify-between text-brand-brown/80 font-light text-sm">
                            <span>Shipping</span>
                            <span>Free</span>
                        </div>
                    </div>

                    <div className="flex justify-between font-serif text-brand-dark text-xl pt-4 border-t border-brand-champagne/30">
                        <span>Total</span>
                        <span>{formatPrice(cartTotal)}</span>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Checkout;
