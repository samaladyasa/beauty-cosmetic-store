import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { getReliableImage, handleImageError } from '../utils/images';

const categoriesData = [
    {
        name: 'Skincare',
        image: getReliableImage(1),
        description: 'Nourish and protect your natural glow'
    },
    {
        name: 'Makeup',
        image: getReliableImage(2),
        description: 'Enhance your features with premium formulations'
    },
    {
        name: 'Lip Care',
        image: getReliableImage(4),
        description: 'Hydrating tints and long-lasting color'
    },
    {
        name: 'Body Care',
        image: getReliableImage(3),
        description: 'Luxurious hydration for head to toe'
    }
];

const Categories = () => {
    return (
        <div className="pt-24 pb-20 px-4 md:px-8 max-w-7xl mx-auto min-h-screen">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-center mb-16"
            >
                <span className="text-sm tracking-[0.2em] text-brand-brown/60 uppercase mb-4 block">Collections</span>
                <h1 className="text-4xl md:text-6xl font-serif text-brand-dark mb-6">Shop by Category</h1>
                <p className="max-w-xl mx-auto text-brand-brown/70 font-light">
                    Discover our curated collections designed to elevate your daily beauty ritual.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {categoriesData.map((category, index) => (
                    <Link
                        key={category.name}
                        to={`/?category=${category.name.toLowerCase().replace(' ', '-')}#shop`}
                        className="group block relative overflow-hidden"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="aspect-[4/3] w-full bg-brand-nude overflow-hidden relative"
                        >
                            <img
                                src={category.image}
                                onError={handleImageError}
                                alt={category.name}
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-brand-brown/10 group-hover:bg-brand-brown/20 transition-colors duration-500"></div>

                            <div className="absolute inset-0 p-8 flex flex-col justify-end text-white text-shadow-sm">
                                <h2 className="text-3xl font-serif mb-2">{category.name}</h2>
                                <p className="text-white/90 font-light translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                    {category.description}
                                </p>
                            </div>
                        </motion.div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Categories;
