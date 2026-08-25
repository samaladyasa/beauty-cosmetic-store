import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import BrandMarquee from '../components/BrandMarquee';
import PromoSection from '../components/PromoSection';
import { WaveTransition } from '../components/Dividers';
import { products } from '../data/products';
import { formatPrice } from '../utils/currency';
import { getReliableImage, handleImageError } from '../utils/images';

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
        <div className="w-full flex-col items-center">
            <section className="relative h-[90vh] min-h-[600px] w-full flex items-center overflow-hidden">
                <motion.div style={{ y: heroY }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="w-full h-full"
                    >
                        <motion.img
                            initial={{ scale: 1.05 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 2, ease: "easeOut" }}
                            src={getReliableImage(0)}
                            onError={handleImageError}
                            alt="Beauty product spread"
                            className="w-full h-full object-cover object-center"
                        />
                    </motion.div>
                </motion.div>
                <div className="absolute inset-0 bg-brand-ivory/20 transition-opacity duration-1000"></div>

                <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 pt-10">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="max-w-2xl"
                    >
                        <motion.h1 variants={childVariants} className="text-6xl md:text-8xl font-serif leading-[1.1] mb-6 tracking-tight text-brand-dark">
                            Beauty,<br />
                            <span className="italic font-light">Made Effortless.</span>
                        </motion.h1>

                        <motion.p variants={childVariants} className="text-lg md:text-xl text-brand-brown/80 mb-10 max-w-md font-light leading-relaxed">
                            Elevated essentials for your everyday ritual. Discover skincare and makeup that honors your natural glow.
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

            <WaveTransition topBg="bg-brand-ivory" bottomFill="text-[#f3f0ec]" />

            <section id="categories" className="py-16 md:py-24 bg-[#f3f0ec] w-full">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="flex items-end justify-between mb-10">
                        <div>
                            <span className="text-xs uppercase tracking-[0.25em] text-brand-brown/55">Start with a ritual</span>
                            <h2 className="font-serif text-4xl md:text-5xl text-brand-dark mt-3">Shop by category</h2>
                        </div>
                        <Link to="/#shop" className="hidden md:flex items-center gap-2 text-xs uppercase tracking-[0.2em] border-b border-brand-brown/40 pb-2">View all <ArrowRight size={14} /></Link>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
                        {[
                            ['Skincare', getReliableImage(1)],
                            ['Makeup', getReliableImage(2)],
                            ['Body Care', getReliableImage(3)],
                            ['Lip Care', getReliableImage(4)],
                            ['Haircare', getReliableImage(5)],
                            ['Fragrance', getReliableImage(6)],
                            ['New Arrivals', getReliableImage(7)],
                            ['Best Sellers', getReliableImage(8)]
                        ].map(([name, image]) => (
                            <Link key={name} to={name === 'New Arrivals' ? '/?collection=new#shop' : name === 'Best Sellers' ? '/?collection=bestsellers#shop' : `/?category=${name.toLowerCase().replace(' ', '-')}#shop`} className="group relative aspect-[4/5] overflow-hidden bg-brand-champagne">
                                <img src={image} onError={handleImageError} alt={name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/65 to-transparent pt-12"><span className="text-brand-ivory text-sm font-serif">{name}</span></div>
                            </Link>
                        ))}
                    </div>
                </div>
                </section>

            <WaveTransition topBg="bg-[#f3f0ec]" bottomFill="text-brand-brown" />

            <BrandMarquee />

            <WaveTransition topBg="bg-brand-brown" bottomFill="text-brand-ivory" />

            <section className="py-12 md:py-20 bg-brand-ivory w-full">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="text-center mb-10 md:mb-14">
                        <span className="text-xs uppercase tracking-[0.25em] text-brand-brown/50">The Auréa ritual</span>
                        <h2 className="font-serif text-3xl md:text-4xl text-brand-dark mt-3">Beauty, naturally considered</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0 md:divide-x divide-brand-brown/10 text-center">
                        {[
                            { step: 'BEAUTY', desc: "Enhance natural features" },
                            { step: 'NOURISH', desc: "Vitamin-rich formulas" },
                            { step: 'HYDRATE', desc: "Deep lasting moisture" },
                            { step: 'GLOW', desc: "Effortless radiance" }
                        ].map((item, index) => (
                            <div key={item.step} className="flex flex-col items-center py-6 md:py-4 px-4">
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

            <section className="py-16 md:py-24 w-full bg-brand-ivory">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="text-center mb-12"><span className="text-xs uppercase tracking-[0.25em] text-brand-brown/55">The formula behind the glow</span><h2 className="font-serif text-4xl md:text-5xl text-brand-dark mt-3">Ingredients with intention</h2></div>
                    <div className="grid grid-cols-2 md:grid-cols-4">
                        {[['Hyaluronic Acid', 'Deep hydration'], ['Vitamin C', 'Visible brightness'], ['Niacinamide', 'A calm barrier'], ['Peptides', 'Renewed firmness']].map(([name, benefit], index) => (
                            <div key={name} className="p-6 md:p-10 border-r border-brand-brown/10 last:border-r-0"><span className="font-serif italic text-3xl text-brand-champagne">0{index + 1}</span><h3 className="font-serif text-xl mt-6 mb-2 text-brand-dark">{name}</h3><p className="text-sm text-brand-brown/60">{benefit}</p></div>
                        ))}
                    </div>
                </div>
                </section>

            <WaveTransition topBg="bg-brand-ivory" bottomFill="text-brand-brown" />

            <section className="py-16 md:py-24 bg-brand-brown text-brand-ivory w-full">
                <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-10 md:gap-20 items-center">
                    <img src={products[1].images[0]} onError={handleImageError} alt={products[1].name} className="w-full aspect-square object-cover" loading="lazy" />
                    <div><span className="text-xs uppercase tracking-[0.25em] text-brand-ivory/55">Product spotlight</span><h2 className="font-serif text-4xl md:text-6xl mt-4 mb-6">The daily dew ritual.</h2><p className="text-brand-ivory/70 leading-relaxed mb-8 max-w-md">{products[1].description}</p><div className="flex items-center gap-6 mb-8"><span className="text-2xl font-serif">{formatPrice(products[1].price)}</span><span className="text-sm text-brand-ivory/60">{products[1].rating} / 5 from {products[1].reviews} reviews</span></div><Link to="/#shop" className="inline-flex items-center gap-3 bg-brand-ivory text-brand-brown px-7 py-4 text-xs uppercase tracking-[0.2em]">Discover the serum <ArrowRight size={15} /></Link></div>
                </div>
                </section>

            <WaveTransition topBg="bg-brand-brown" bottomFill="text-[#f7f1f1]" />

            <section className="py-16 md:py-24 w-full bg-[#f7f1f1]">
                <div className="max-w-7xl mx-auto px-4 md:px-8 text-center"><span className="text-xs uppercase tracking-[0.25em] text-brand-brown/55">Loved by the ritual makers</span><h2 className="font-serif text-4xl md:text-5xl mt-3 mb-12 text-brand-dark">A little glow, shared.</h2><div className="grid md:grid-cols-3 gap-6 text-left">
                    {[['My skin feels cared for, not covered up.', 'Maya R.'], ['The serum is now the one step I never skip.', 'Sofia L.'], ['Beautiful formulas and packaging that feels considered.', 'Amara K.']].map(([quote, name]) => (<blockquote key={name} className="bg-brand-ivory p-7"><div className="text-brand-brown tracking-widest mb-5">★★★★★</div><p className="font-serif text-2xl leading-snug text-brand-dark mb-6">“{quote}”</p><cite className="not-italic text-xs uppercase tracking-[0.2em] text-brand-brown/55">{name}</cite></blockquote>))}
                </div></div>
                </section>

            <WaveTransition topBg="bg-[#f7f1f1]" bottomFill="text-brand-ivory" />

        </div>
    );
};
export default Home;
