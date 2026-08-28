import React from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const Shop = () => {
    const [searchParams] = useSearchParams();
    const location = useLocation();
    const navigate = useNavigate();
    const categoryParam = searchParams.get('category');
    const collectionParam = searchParams.get('collection');
    const categories = ['All', 'Makeup', 'Skincare', 'Haircare', 'Body Care', 'Lip Care', 'Fragrance'];
    const filter = categoryParam
        ? categories.find(category => category.toLowerCase() === categoryParam.replace('-', ' ').toLowerCase()) || 'All'
        : 'All';

    const handleFilterChange = (category) => {
        const nextParams = new URLSearchParams(searchParams);
        if (category === 'All') {
            nextParams.delete('category');
        } else {
            nextParams.set('category', category.toLowerCase().replace(' ', '-'));
        }
        navigate({
            pathname: location.pathname,
            search: nextParams.toString() ? `?${nextParams.toString()}` : '',
            hash: '#shop'
        }, { replace: true });
    };

    const majorProducts = products.filter(product => product.bestseller || product.newArrival);
    const collectionProducts = collectionParam === 'new'
        ? products.filter(product => product.newArrival)
        : collectionParam === 'bestsellers'
            ? products.filter(product => product.bestseller)
            : majorProducts;

    const filteredProducts = collectionProducts.filter(product => filter === 'All' || product.category === filter);

    return (
        <div className="shop-page w-full min-h-screen pt-24 pb-32 max-w-7xl mx-auto px-4 md:px-8">
            <h1 className="shop-title font-serif text-5xl md:text-6xl mb-16 text-center w-full flex items-center justify-center">
                {filter === 'All' ? 'Featured Beauty Edit' : filter}
            </h1>

            <div className="shop-filter mb-16 py-5 w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
                <span className="text-xs uppercase tracking-[0.2em] text-brand-brown/60">Filter featured products</span>
                <div className="flex flex-wrap justify-center sm:justify-end gap-2" role="group" aria-label="Filter products by category">
                {categories.map(category => (
                    <button
                        key={category}
                        onClick={() => handleFilterChange(category)}
                        aria-pressed={filter === category}
                        className={`px-6 py-3 rounded-full uppercase tracking-widest text-xs transition-all duration-300 ${filter === category ? 'bg-brand-brown text-brand-ivory font-semibold shadow-xl' : 'bg-white/40 backdrop-blur-sm border border-brand-brown/10 text-brand-brown/70 hover:bg-white/80 hover:shadow-md'}`}
                    >
                        {category}
                    </button>
                ))}
                </div>
            </div>

            <motion.div
                key={filter}
                initial="hidden"
                animate="visible"
                variants={{
                    visible: { transition: { staggerChildren: 0.1 } },
                    hidden: {}
                }}
                className="shop-grid grid grid-cols-2 md:grid-cols-4 gap-x-4 md:gap-x-8 gap-y-12 w-full"
            >
                {filteredProducts.map(product => (
                    <motion.div
                        key={product.id}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }}
                        exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
                    >
                        <ProductCard product={product} />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};
export default Shop;
