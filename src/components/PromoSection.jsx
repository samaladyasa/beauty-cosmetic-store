import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { getReliableImage, handleImageError } from '../utils/images';

const PromoSection = () => {
    return (
        <section className="py-12 md:py-20 bg-[#f7f1f1] w-full overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
                <ScrollReveal direction="right" className="flex flex-col items-start justify-center h-full order-2 md:order-1 px-4 md:px-8">
                    <span className="text-[10px] tracking-[0.25em] font-semibold text-red-800 uppercase mb-4 border border-red-800/20 px-3 py-1 rounded-sm">
                        Limited Time
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-dark mb-4 leading-tight">
                        The Summer <br /><span className="italic text-amber-800">Archive Sale</span>
                    </h2>
                    <p className="text-brand-brown/70 font-light text-sm md:text-base leading-relaxed mb-8 max-w-md">
                        Enjoy up to 30% off our most loved essentials. Refresh your daily glowing routine with our curated seasonal selections.
                    </p>
                    <Link
                        to="/#shop"
                        className="bg-brand-brown text-brand-ivory px-8 py-4 text-xs font-semibold tracking-[0.2em] uppercase hover:bg-black transition-colors flex items-center justify-center gap-2 group shadow-xl shadow-brand-brown/10"
                    >
                        Shop The Sale <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </ScrollReveal>

                <ScrollReveal direction="left" className="order-1 md:order-2">
                    <div className="relative aspect-square md:aspect-[4/5] w-full overflow-hidden rounded-sm shadow-2xl">
                        <img
                            src={getReliableImage(2)}
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
