import React from 'react';
import { motion } from 'framer-motion';

const BrandMarquee = () => {
    const brands = [
        "VOGUE", "ELLE", "HARPER'S BAZAAR", "ALLURE", "COSMOPOLITAN", "GLAMOUR", "VANITY FAIR", "GQ"
    ];

    return (
        <div className="w-full bg-brand-brown text-brand-ivory py-4 overflow-hidden flex relative items-center justify-center">
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-brand-brown to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-brand-brown to-transparent z-10" />

            <motion.div
                className="flex whitespace-nowrap items-center gap-16 md:gap-32 pr-16 md:pr-32"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 30
                }}
            >
                {[...brands, ...brands, ...brands, ...brands].map((brand, index) => (
                    <span
                        key={index}
                        className="font-serif text-lg md:text-2xl tracking-[0.2em] uppercase font-light text-brand-ivory/80 opacity-80"
                    >
                        {brand}
                    </span>
                ))}
            </motion.div>
        </div>
    );
};

export default BrandMarquee;
