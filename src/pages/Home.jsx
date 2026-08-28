import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import BrandMarquee from '../components/BrandMarquee';
import PromoSection from '../components/PromoSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import QuoteSection from '../components/QuoteSection';
import ContactSection from '../components/ContactSection';
import { WaveTransition } from '../components/Dividers';
import { products } from '../data/products';
import { formatPrice } from '../utils/currency';
import { getReliableImage, handleImageError } from '../utils/images';
import desktopHeroImage from '../assets/hpdesktop.png';
import mobileHeroImage from '../assets/hpmobile.png';
import skincareCategoryImage from '../assets/skincaresec.png';
import makeupCategoryImage from '../assets/makeupsec.png';
import bodyCategoryImage from '../assets/bodysec.png';
import lipCategoryImage from '../assets/lipsec.png';
import haircareCategoryImage from '../assets/haircaresec.png';
import fragranceCategoryImage from '../assets/fragnancesec.png';
import newArrivalsCategoryImage from '../assets/newarrivalssec.png';
import bestsellersCategoryImage from '../assets/bestsellerssec.png';
import dewGlowSerumImage from '../assets/products/dewglowserum.png';

const Home = () => {
    const { scrollY } = useScroll();
    const heroY = useTransform(scrollY, [0, 1000], [0, 250]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.8 }
        }
    };

    const childVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
    };

    return (
        <div className="home-page w-full flex-col items-center">
            <section className="hero-section relative h-[90vh] min-h-[600px] w-full flex items-center overflow-hidden">
                <motion.div style={{ y: heroY }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="w-full h-full"
                    >
                        <picture className="block w-full h-full">
                            <source media="(min-width: 768px)" srcSet={desktopHeroImage} />
                            <motion.img
                                initial={{ scale: 1.05 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 2, ease: "easeOut" }}
                                src={mobileHeroImage}
                                onError={handleImageError}
                                data-image-index="0"
                                alt="Beauty product spread"
                                className="w-full h-full object-cover object-center"
                            />
                        </picture>
                    </motion.div>
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-r from-brand-ivory/20 via-transparent to-brand-ivory/5 transition-opacity duration-1000"></div>

                <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 pt-10">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="hero-content hero-type max-w-2xl drop-shadow-[0_2px_16px_rgba(255,250,244,0.22)]"
                    >
                        <motion.h1 variants={childVariants} className="text-6xl md:text-8xl font-serif leading-[1.05] mb-6 tracking-tight text-brand-dark">
                            Elevate Your,<br />
                            <span className="script-type block text-6xl md:text-8xl">Natural Radiance.</span>
                        </motion.h1>

                        <motion.p variants={childVariants} className="text-lg md:text-xl text-brand-brown/80 mb-10 max-w-md font-light leading-relaxed">
                            Discover a curated collection of luxurious cosmetics and skincare designed to enhance your authentic beauty and empower your everyday flow.
                        </motion.p>

                        <motion.div variants={childVariants} className="flex flex-col sm:flex-row gap-4">
                            <a href="#shop" className="bg-brand-brown text-brand-ivory px-8 py-4 text-xs tracking-[0.15em] uppercase text-center hover:bg-black transition-colors group flex items-center justify-center gap-3">
                                Shop Collection
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <WaveTransition topBg="bg-[#f3f0ec]" bottomFill="text-[#f3f0ec]" className="hero-divider" />

            <section id="categories" className="category-type category-section pb-8 md:pb-12 bg-[#f3f0ec] w-full">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="flex items-end justify-between mb-10 border-b border-brand-brown/15 pb-6">
                        <div>
                            <span className="text-xs uppercase tracking-[0.25em] text-brand-brown/55">Start with a ritual</span>
                            <h2 className="font-serif text-4xl md:text-5xl text-brand-dark mt-3">Shop by category</h2>
                        </div>
                        <Link to="/#shop" className="hidden md:flex items-center gap-2 text-xs uppercase tracking-[0.2em] border-b border-brand-brown/40 pb-2">View all <ArrowRight size={14} /></Link>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                        {[
                            ['Skincare', skincareCategoryImage],
                            ['Makeup', makeupCategoryImage],
                            ['Body Care', bodyCategoryImage],
                            ['Lip Care', lipCategoryImage],
                            ['Haircare', haircareCategoryImage],
                            ['Fragrance', fragranceCategoryImage],
                            ['New Arrivals', newArrivalsCategoryImage],
                            ['Best Sellers', bestsellersCategoryImage]
                        ].map(([name, image], index) => (
                            <Link key={name} to={name === 'New Arrivals' ? '/?collection=new#shop' : name === 'Best Sellers' ? '/?collection=bestsellers#shop' : `/?category=${name.toLowerCase().replace(' ', '-')}#shop`} className={`group relative aspect-[4/5] overflow-hidden bg-brand-champagne luxury-shadow rounded-2xl border border-white/30 ${index % 4 === 1 ? 'md:translate-y-6' : index % 4 === 3 ? 'md:-translate-y-4' : ''}`}>
                                <img src={image} onError={handleImageError} alt={name} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" loading="lazy" />
                                <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/80 via-black/40 to-transparent pt-16"><span className="text-brand-ivory text-xl font-serif">{name}</span></div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <WaveTransition topBg="bg-[#f3f0ec]" bottomFill="text-brand-brown" />

            <BrandMarquee />

            <WaveTransition topBg="bg-brand-brown" bottomFill="text-brand-ivory" />

            <section className="ritual-section ritual-type py-6 md:py-10 bg-brand-ivory w-full">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="text-center mb-6 md:mb-8">
                        <span className="text-xs uppercase tracking-[0.25em] text-brand-brown/50">The Aabha Ritual</span>
                        <h2 className="font-serif text-3xl md:text-4xl text-brand-dark mt-3">A Symphonic Approach to Beauty</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 md:gap-0 md:divide-x divide-brand-brown/10 text-center">
                        {[
                            { step: 'MAKEUP', desc: "Artistry in every shade" },
                            { step: 'SKINCARE', desc: "Nourishment from within" },
                            { step: 'BODY CARE', desc: "Luxurious full-body care" },
                            { step: 'HAIRCARE', desc: "Revitalize your crowning glory" },
                            { step: 'FRAGRANCE', desc: "Captivating timeless auroras" }
                        ].map((item, index) => (
                            <div key={item.step} className="ritual-item flex flex-col items-center py-6 md:py-4 px-4">
                                <span className="text-xl md:text-2xl text-brand-brown/20 font-serif italic mb-4">0{index + 1}</span>
                                <h3 className="text-sm md:text-[13px] tracking-[0.3em] font-medium text-brand-dark uppercase mb-3">{item.step}</h3>
                                <p className="text-xs text-brand-brown/60 font-light max-w-[150px] leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <WaveTransition topBg="bg-brand-ivory" bottomFill="text-[#f7f1f1]" />

            <PromoSection />

            <WaveTransition topBg="bg-[#f7f1f1]" bottomFill="text-brand-ivory" />

            <section className="ingredient-section ingredient-type py-8 md:py-12 w-full bg-brand-ivory">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="ingredient-heading mb-6"><span className="text-xs uppercase tracking-[0.25em] text-brand-brown/55">The formula behind the glow</span><h2 className="font-serif text-4xl md:text-5xl text-brand-dark mt-3">Purified ingredients. Elevated results.</h2></div>
                    <div className="ingredient-grid grid grid-cols-2 md:grid-cols-4">
                        {[['Hyaluronic Acid', 'Deep hydration'], ['Vitamin C', 'Visible brightness'], ['Niacinamide', 'A calm barrier'], ['Peptides', 'Renewed firmness']].map(([name, benefit], index) => (
                            <div key={name} className="ingredient-item p-4 md:p-6 border-r border-brand-brown/10 last:border-r-0"><span className="font-serif italic text-3xl text-brand-champagne">0{index + 1}</span><h3 className="font-serif text-xl mt-4 mb-2 text-brand-dark">{name}</h3><p className="text-sm text-brand-brown/60">{benefit}</p></div>
                        ))}
                    </div>
                </div>
            </section>

            <WaveTransition topBg="bg-brand-ivory" bottomFill="text-brand-brown" />

            <section className="spotlight-section spotlight-type py-8 md:py-12 bg-brand-brown text-brand-ivory w-full">
                <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-6 md:gap-10 items-center">
                    <div className="spotlight-image-wrap"><img src={dewGlowSerumImage} onError={handleImageError} alt={products[1].name} className="w-full aspect-square object-cover" loading="lazy" /></div>
                    <div><span className="text-xs uppercase tracking-[0.25em] text-brand-ivory/55">Product spotlight</span><h2 className="font-serif text-4xl md:text-6xl mt-4 mb-6">Unleash Your Inner Glow.</h2><p className="text-brand-ivory/70 leading-relaxed mb-8 max-w-md">{products[1].description}</p><div className="flex items-center gap-6 mb-8"><span className="text-2xl font-serif">{formatPrice(products[1].price)}</span><span className="text-sm text-brand-ivory/60">{products[1].rating} / 5 from {products[1].reviews} reviews</span></div><Link to="/#shop" className="inline-flex items-center gap-3 bg-brand-ivory text-brand-brown px-7 py-4 text-xs uppercase tracking-[0.2em]">Discover the serum <ArrowRight size={15} /></Link></div>
                </div>
            </section>

            <WaveTransition topBg="bg-brand-brown" bottomFill="text-[#f7f1f1]" />

            <TestimonialsSection />

            <WaveTransition topBg="bg-[#f7f1f1]" bottomFill="text-brand-brown" />

            <QuoteSection />

            <WaveTransition topBg="bg-brand-brown" bottomFill="text-brand-ivory" />

            <FAQSection />

            <WaveTransition topBg="bg-brand-ivory" bottomFill="text-[#f3f0ec]" />

            <ContactSection />

            <WaveTransition topBg="bg-[#f3f0ec]" bottomFill="text-brand-ivory" />

        </div>
    );
};
export default Home;
