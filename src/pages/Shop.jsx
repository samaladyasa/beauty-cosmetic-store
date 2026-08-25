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

    const searchQuery = searchParams.get('q');
    const collectionProducts = collectionParam === 'new'
        ? products.filter(product => product.newArrival)
        : collectionParam === 'bestsellers'
            ? products.filter(product => product.bestseller)
            : products;

    const filteredProducts = collectionProducts.filter(product => {
        if (filter !== 'All' && product.category !== filter) return false;

        if (searchQuery) {
            const lowerQuery = searchQuery.toLowerCase();
            return product.name.toLowerCase().includes(lowerQuery) || product.category.toLowerCase().includes(lowerQuery);
        }

        return true;
    });

    return (
        <div className="w-full min-h-screen pt-24 pb-32 max-w-7xl mx-auto px-4 md:px-8">
            <h1 className="font-serif text-5xl md:text-6xl mb-16 text-center w-full flex items-center justify-center">
                {filter === 'All' ? 'Shop All' : filter}
            </h1>

            <div className="mb-16 py-5 w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
                <span className="text-xs uppercase tracking-[0.2em] text-brand-brown/60">Filter collection</span>
                <div className="flex flex-wrap justify-center sm:justify-end gap-2" role="group" aria-label="Filter products by category">
                {categories.map(category => (
                    <button
                        key={category}
                        onClick={() => handleFilterChange(category)}
                        aria-pressed={filter === category}
                        className={`px-4 py-2 rounded-sm uppercase tracking-widest text-[10px] transition-colors ${filter === category ? 'bg-brand-brown text-brand-ivory font-semibold' : 'border border-brand-brown/15 text-brand-brown/65 hover:border-brand-brown/40 hover:text-brand-brown'}`}
                    >
                        {category}
                    </button>
                ))}
                </div>
            </div>

            <motion.div
                key={`${filter}-${searchQuery || ''}`}
                initial="hidden"
                animate="visible"
                variants={{
                    visible: { transition: { staggerChildren: 0.1 } },
                    hidden: {}
                }}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 md:gap-x-8 gap-y-12 w-full"
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
