import React from 'react';
import { motion } from 'framer-motion';
import { getReliableImage, handleImageError } from '../utils/images';

const About = () => {
    return (
        <div className="pt-24 pb-20 px-4 md:px-8 max-w-7xl mx-auto min-h-screen bg-[#f3f0ec]">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-center max-w-3xl mx-auto mb-20"
            >
                <span className="text-sm tracking-[0.2em] text-brand-brown/60 uppercase mb-4 block">Our Story</span>
                <h1 className="text-5xl md:text-7xl font-serif mb-8 text-brand-dark leading-tight">
                    Redefining <br className="hidden md:block" /> Beauty Standards
                </h1>
                <p className="text-lg md:text-xl text-brand-brown/80 font-light leading-relaxed">
                    We believe that beauty is not about perfection. It's about self-expression, confidence, and embracing your unique self through products that are both effective and luxurious.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center mb-24">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="aspect-[3/4] bg-brand-nude overflow-hidden"
                >
                    <img
                        src={getReliableImage(2)}
                        onError={handleImageError}
                        alt="Makeup products arranged for a beauty ritual"
                        className="w-full h-full object-cover"
                    />
                </motion.div>
                <motion.div
                    id="philosophy"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    <h2 className="text-3xl md:text-4xl font-serif text-brand-dark">Conscious Ingredients</h2>
                    <p className="text-brand-brown/80 font-light leading-relaxed">
                        Every product we create is formulated with absolute precision and care. We source the finest, ethically-harvested ingredients to ensure they nourish your skin and soul. No compromises, no hidden fillers.
                    </p>
                    <p className="text-brand-brown/80 font-light leading-relaxed">
                        Our commitment to sustainability means our packaging is fully recyclable, and we actively invest in environmental initiatives.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
