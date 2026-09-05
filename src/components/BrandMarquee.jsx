import React from 'react';
import { motion } from 'framer-motion';

const BrandMarquee = () => {
    const brands = [
        "VOGUE", "ELLE", "HARPER'S BAZAAR", "ALLURE", "COSMOPOLITAN", "GLAMOUR", "VANITY FAIR", "GQ"
    ];

    return (
        <div className="brand-marquee w-full h-[76px] md:h-[88px] text-brand-ivory overflow-hidden flex relative items-center justify-center">
            <svg aria-hidden="true" className="absolute inset-0 w-full h-full fill-brand-brown" viewBox="0 0 1440 120" preserveAspectRatio="none">
                <path d="M0,5C180,16 300,0 480,7C660,18 760,1 930,9C1110,20 1260,2 1440,8V112C1260,103 1110,120 930,108C760,100 660,119 480,107C300,98 180,119 0,108Z" />
            </svg>

            <motion.div
                className="relative z-20 flex whitespace-nowrap items-center gap-16 md:gap-32 pr-16 md:pr-32"
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
