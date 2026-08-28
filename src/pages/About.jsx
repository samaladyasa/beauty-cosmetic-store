import React from 'react';
import { motion } from 'framer-motion';
import { handleImageError } from '../utils/images';
import ourStoryImage from '../assets/hpmobile.png';

const About = () => {
    return (
        <div className="about-page pt-24 pb-20 px-4 md:px-8 max-w-7xl mx-auto min-h-screen bg-[#f3f0ec]">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="about-intro text-center max-w-3xl mx-auto mb-20"
            >
                <span className="text-base md:text-lg tracking-[0.2em] font-sans text-brand-brown/60 uppercase mb-4 block">Our Story</span>
                <h1 className="text-6xl md:text-8xl font-display mb-8 text-brand-dark leading-tight">
                    Illuminating <br className="hidden md:block" /> <span className="font-script italic text-7xl md:text-9xl text-brand-champagne">Authentic</span> Beauty
                </h1>
                <p className="text-xl md:text-2xl text-brand-brown/80 font-serif font-light leading-relaxed">
                    We believe true beauty transcends perfection. It is a harmonious blend of self-expression, confidence, and embracing your individuality with formulations that feel exceptionally luxurious.
                </p>
            </motion.div>

            <div className="about-story grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center mb-24">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="about-image aspect-[3/4] bg-brand-nude overflow-hidden"
                >
                    <img
                        src={ourStoryImage}
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
                    className="about-copy space-y-6"
                >
                    <h2 className="text-4xl md:text-5xl font-display text-brand-dark">Mindful & Ethical Formulations</h2>
                    <p className="text-lg md:text-xl text-brand-brown/80 font-serif font-light leading-relaxed">
                        Every creation in our collection is crafted with unwavering precision. We sustainably source the most potent, premium botanicals to nourish your skin without compromise.
                    </p>
                    <p className="text-lg md:text-xl text-brand-brown/80 font-serif font-light leading-relaxed">
                        Our commitment to sustainability means our packaging is fully recyclable, and we actively invest in environmental initiatives.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
