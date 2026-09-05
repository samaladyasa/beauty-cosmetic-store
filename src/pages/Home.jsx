import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import BrandMarquee from '../components/BrandMarquee';
import PromoSection from '../components/PromoSection';
import ProductCard from '../components/ProductCard';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import QuoteSection from '../components/QuoteSection';
import ContactSection from '../components/ContactSection';
import About from './About';
import InfiniteSpiral from '../components/InfiniteSpiral';
import { WaveTransition } from '../components/Dividers';
import { products } from '../data/products';
import { formatPrice } from '../utils/currency';
import { handleImageError } from '../utils/images';
import desktopHeroImage from '../assets/hpdesktop.png';
import mobileHeroImage from '../assets/hpmobile.png';
import dewGlowSerumImage from '../assets/products/dewglowserum.png';
import hyaluronicAcidImage from '../assets/hyluronicacid.png';
import vitaminCImage from '../assets/vitaminC.png';
import niacinamideImage from '../assets/niacinamide.png';
import peptidesImage from '../assets/peptides.png';
import squalaneImage from '../assets/squalane.png';
import retinolImage from '../assets/retinol.png';
import radianceVitaminCSerumImage from '../assets/products/radiancevitaminCserum.png';
import luxeMattePaletteImage from '../assets/products/luxemattepalette.png';
import glowRitualBodyOilImage from '../assets/products/glowritualbodyoil.png';
import cloudKissLipTintImage from '../assets/products/cloudkissliptint.png';
import silkRepairHairOilImage from '../assets/products/silkrepairhairoil.png';
import skinScentEauDePerfumeImage from '../assets/products/skinscenteaudeperfume.png';
import velvetSkinFoundationImage from '../assets/products/velvetskinfoundation.png';

const Home = () => {
    const { scrollY } = useScroll();
    const heroY = useTransform(scrollY, [0, 1000], [0, 250]);
    const navigate = useNavigate();
    const [activeShopCategory, setActiveShopCategory] = useState('All');
    const shopCategories = ['All', 'Makeup', 'Skincare', 'Haircare', 'Body Care', 'Lip Care', 'Fragrance'];
    const featuredProducts = products.filter(product => product.bestseller || product.newArrival);

    const visibleShopProducts = activeShopCategory === 'All'
        ? featuredProducts
        : featuredProducts.filter(product => product.category === activeShopCategory);

    const goToShop = (event, destination = '/#shop') => {
        event.preventDefault();
        navigate(destination);
        window.setTimeout(() => {
            document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 0);
    };

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

                        <motion.p variants={childVariants} className="text-lg md:text-xl text-white mb-10 max-w-md font-medium leading-relaxed drop-shadow-[0_1px_10px_rgba(0,0,0,0.45)] bg-black/40 px-4 py-3 rounded-md">
                            Discover a curated collection of luxurious cosmetics and skincare designed to enhance your authentic beauty and empower your everyday flow.
                        </motion.p>

                        <motion.div variants={childVariants} className="flex flex-col sm:flex-row gap-4">
                            <a href="#shop" className="bg-brand-brown text-brand-ivory px-8 py-4 rounded-full text-xs tracking-[0.15em] uppercase text-center hover:bg-black transition-colors group flex items-center justify-center gap-3">
                                Shop Collection
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <WaveTransition topBg="bg-[#f3f0ec]" bottomFill="text-[#f3f0ec]" className="hero-divider" />

            <section id="about" className="bg-[#f3f0ec]"><About /></section>

            <BrandMarquee />

            <section id="categories" className="category-type category-section pb-8 md:pb-12 bg-[#f3f0ec] w-full">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="flex items-end justify-between mb-10 border-b border-brand-brown/15 pb-6">
                        <div>
                            <h2 className="font-serif text-4xl md:text-5xl text-brand-dark mt-3">Shop by category</h2>
                        </div>
                        <a href="/#shop" onClick={(event) => goToShop(event)} className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] border-b border-brand-brown/40 pb-2">View all <ArrowRight size={14} /></a>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                        {[
                            ['Skincare', radianceVitaminCSerumImage],
                            ['Makeup', luxeMattePaletteImage],
                            ['Body Care', glowRitualBodyOilImage],
                            ['Lip Care', cloudKissLipTintImage],
                            ['Haircare', silkRepairHairOilImage],
                            ['Fragrance', skinScentEauDePerfumeImage],
                            ['New Arrivals', dewGlowSerumImage],
                            ['Best Sellers', velvetSkinFoundationImage]
                        ].map(([name, image], index) => (
                            <Link key={name} onClick={(event) => goToShop(event, name === 'New Arrivals' ? '/?collection=new#shop' : name === 'Best Sellers' ? '/?collection=bestsellers#shop' : `/?category=${name.toLowerCase().replace(' ', '-')}#shop`)} to={name === 'New Arrivals' ? '/?collection=new#shop' : name === 'Best Sellers' ? '/?collection=bestsellers#shop' : `/?category=${name.toLowerCase().replace(' ', '-')}#shop`} className={`group relative aspect-[4/5] overflow-hidden bg-brand-champagne luxury-shadow rounded-2xl border border-white/30 ${index % 4 === 1 ? 'md:translate-y-6' : index % 4 === 3 ? 'md:-translate-y-4' : ''}`}>
                                <img src={image} onError={handleImageError} alt={name} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" loading="lazy" />
                                <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/80 via-black/40 to-transparent pt-16"><span className="text-brand-ivory text-xl font-serif">{name}</span></div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <WaveTransition topBg="bg-[#f3f0ec]" bottomFill="text-brand-champagne" className="category-products-divider" shape="mountain" />

            <section id="shop" className="shop-section w-full bg-[#f7f1f1] py-16 md:py-20">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 border-b border-brand-brown/15 pb-6">
                        <div>
                            <span className="text-xs uppercase tracking-[0.25em] text-brand-brown/55">Featured collection</span>
                            <h2 className="font-serif text-4xl md:text-5xl text-brand-dark mt-3">Featured Beauty Edit</h2>
                        </div>

                        <div className="flex flex-wrap items-center gap-2 md:justify-end">
                            {shopCategories.map(category => (
                                <button
                                    key={category}
                                    type="button"
                                    onClick={() => setActiveShopCategory(category)}
                                    className={`px-4 py-2 rounded-full text-[10px] uppercase tracking-[0.22em] transition-all duration-300 ${
                                        activeShopCategory === category
                                            ? 'bg-brand-brown text-brand-ivory shadow-lg'
                                            : 'bg-white/40 border border-brand-brown/10 text-brand-brown/75 hover:bg-white'
                                    }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 md:gap-x-8 gap-y-10">
                        {visibleShopProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </section>

            <WaveTransition topBg="bg-[#f7f1f1]" bottomFill="text-[#eadbd1]" className="products-promo-divider" shape="mountain" />

            <PromoSection />

            <WaveTransition topBg="bg-[#f7f1f1]" bottomFill="text-brand-champagne" className="promo-ingredient-divider" />

<section className="ingredient-section ingredient-type relative w-full bg-brand-ivory overflow-hidden">
    <div className="max-w-6xl mx-auto px-5 md:px-10 py-10 md:py-14">

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-6 md:mb-8"
        >
            <span className="text-[9px] uppercase tracking-[0.4em] text-brand-brown/45">
                Inside the formula
            </span>

            <h2 className="font-serif text-3xl md:text-5xl text-brand-dark mt-3">
                Simple ingredients.
                <span className="italic text-brand-brown/60"> Thoughtfully chosen.</span>
            </h2>
        </motion.div>


        <div className="relative mx-auto max-w-6xl h-[600px] md:h-[700px]">
            <InfiniteSpiral
                items={[
                  {
                    src: hyaluronicAcidImage,
                    alt: 'Hyaluronic Acid - Deep Hydration',
                    label: 'Hyaluronic Acid'
                  },
                  {
                    src: vitaminCImage,
                    alt: 'Vitamin C - Visible Brightness',
                    label: 'Vitamin C'
                  },
                  {
                    src: niacinamideImage,
                    alt: 'Niacinamide - Calm Barrier',
                    label: 'Niacinamide'
                  },
                  {
                    src: peptidesImage,
                    alt: 'Peptides - Renewed Firmness',
                    label: 'Peptides'
                  },
                  {
                    src: squalaneImage,
                    alt: 'Squalane - Oil Balance',
                    label: 'Squalane'
                  },
                  {
                    src: retinolImage,
                    alt: 'Retinol - Renewable Power',
                    label: 'Retinol'
                  }
                ]}
                animationMode="all"
                speed={0.35}
                radius={200}
                cardWidth={160}
                cardHeight={220}
                verticalSpacing={70}
                perspective={1200}
                cardsPerTurn={6}
                cardRadius={12}
                centerScale={1.35}
                edgeBlur={5}
                pauseOnHover={true}
            />
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

            <WaveTransition topBg="bg-brand-brown" bottomFill="text-brand-ivory" />

            <TestimonialsSection />

            <WaveTransition topBg="bg-[#f7f1f1]" bottomFill="text-brand-brown" className="spotlight-divider" />

            <QuoteSection />

            <WaveTransition topBg="bg-brand-brown" bottomFill="text-[#f9f5f1]" className="spotlight-divider" />

            <FAQSection />

            <WaveTransition topBg="bg-brand-ivory" bottomFill="text-[#f3f0ec]" />

            <ContactSection />

        </div>
    );
};
export default Home;
