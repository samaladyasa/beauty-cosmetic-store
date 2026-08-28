import React from 'react';
import { motion } from 'framer-motion';
import { ScrollReveal } from './ScrollReveal';
import { handleImageError } from '../utils/images';
import archiveSaleImage from '../assets/seasonsell.png';

const PromoSection = () => {
    return (
        <section className="promo-section promo-type py-6 md:py-10 bg-[#f7f1f1] w-full overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center">
                <ScrollReveal direction="right" className="flex flex-col items-start justify-center h-full order-2 md:order-1 px-4 md:px-6 py-6 bg-brand-ivory/40 backdrop-blur-xl border border-white/50 shadow-2xl rounded-2xl">
                    <span className="text-xs tracking-[0.25em] font-medium text-red-800 uppercase mb-5 border border-red-800/20 px-4 py-1.5 rounded-full bg-red-800/5">
                        Limited Time
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-dark mb-4 leading-tight">
                        The Midnight <br /><span className="script-type text-5xl md:text-6xl text-amber-800">Glamour Sale</span>
                    </h2>
                    <p className="text-brand-brown/70 font-light text-sm md:text-base leading-relaxed mb-8 max-w-md">
                        Indulge in up to 30% off our most prestigious collections. Elevate your nightly routine with our exclusively curated seasonal masterpieces.
                    </p>
                </ScrollReveal>

                <ScrollReveal direction="left" className="order-1 md:order-2">
                    <div className="relative aspect-square md:aspect-[4/5] w-full overflow-hidden rounded-2xl luxury-shadow">
                        <img
                            src={archiveSaleImage}
                            onError={handleImageError}
                            alt="Makeup products from the seasonal sale"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] hover:scale-105"
                            loading="lazy"
                        />
                        <div className="absolute top-6 right-6 bg-brand-ivory/90 backdrop-blur-sm px-4 py-4 rounded-full flex flex-col items-center justify-center w-20 h-20 shadow-lg">
                            <span className="font-serif text-xl leading-none font-bold text-amber-800">-30%</span>
                            <span className="text-[8px] uppercase tracking-widest text-brand-brown/80 mt-1">Off</span>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default PromoSection;
