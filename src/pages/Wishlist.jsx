import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, Trash2 } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import { AddToBagButton } from '../components/ProductInteractions';
import { formatPrice } from '../utils/currency';
import { handleImageError } from '../utils/images';

const Wishlist = () => {
    const { wishlist, toggleWishlist } = useWishlist();
    const { addToCart } = useCart();

    return (
        <div className="pt-24 pb-20 px-4 md:px-8 max-w-7xl mx-auto min-h-screen">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-6xl mx-auto"
            >
                <div className="flex flex-col items-center mb-16">
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <Heart className="text-brand-brown/40 w-6 h-6" />
                        <span className="text-sm tracking-[0.2em] text-brand-brown/60 uppercase">Favorites</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-serif text-brand-dark mb-4 text-center">Your Wishlist</h1>
                    <p className="text-brand-brown/60 font-light">{wishlist.length} {wishlist.length === 1 ? 'Item' : 'Items'}</p>
                </div>

                {wishlist.length === 0 ? (
                    <div className="text-center py-24 bg-white border border-brand-champagne/30">
                        <p className="text-brand-brown/60 mb-6 font-light text-lg">You haven't saved any items yet.</p>
                        <Link
                            to="/#shop"
                            className="inline-block bg-brand-dark text-white px-10 py-3 text-sm tracking-widest uppercase hover:bg-brand-brown transition-colors duration-300"
                        >
                            Discover Products
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {wishlist.map((item, index) => (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                key={item.id}
                                className="group flex flex-col bg-white border border-brand-champagne/30 hover:border-brand-brown/30 transition-colors duration-500 overflow-hidden"
                            >
                                <div className="relative aspect-[4/5] bg-brand-nude overflow-hidden">
                                    <img src={item.images ? item.images[0] : item.image} onError={handleImageError} alt={item.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />

                                    <button
                                        onClick={() => toggleWishlist(item)}
                                        className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full text-brand-brown hover:text-red-500 transition-colors shadow-sm z-10"
                                    >
                                        <Trash2 size={16} />
                                    </button>

                                    <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-10">
                                        <AddToBagButton
                                            product={item}
                                            quantity={1}
                                            selectedColor={item.colors ? item.colors[0] : null}
                                            addToCart={addToCart}
                                            className="w-full py-3 bg-brand-dark text-white uppercase tracking-widest text-xs hover:bg-black transition-colors"
                                        />
                                    </div>
                                </div>

                                <Link to={`/product/${item.id}`} className="p-6 flex-grow flex flex-col justify-between">
                                    <div>
                                        <p className="text-xs uppercase tracking-widest text-brand-brown/50 mb-2">{item.category}</p>
                                        <h3 className="font-serif text-xl text-brand-dark mb-2 group-hover:text-brand-brown transition-colors">{item.name}</h3>
                                    </div>
                                    <p className="text-brand-brown/80 font-medium">{formatPrice(item.price)}</p>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                )}
            </motion.div>
        </div>
    );
};

export default Wishlist;
