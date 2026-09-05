import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
    { 
        quote: 'My skin feels cared for, not covered up. This is exactly what I was looking for in a skincare routine.', 
        name: 'Maya R.', 
        detail: 'Verified Buyer',
        initials: 'MR',
        rating: 5
    },
    { 
        quote: 'The serum is now the one step I never skip. It absorbs beautifully and makes my skin feel incredibly soft.', 
        name: 'Sofia L.', 
        detail: 'Verified Buyer',
        initials: 'SL',
        rating: 5
    },
    { 
        quote: 'Beautiful formulas and packaging that feels considered. Every product seems thoughtfully designed.', 
        name: 'Amara K.', 
        detail: 'Verified Buyer',
        initials: 'AK',
        rating: 5
    },
    { 
        quote: 'The results are genuinely impressive. My skin texture has improved noticeably in just a few weeks.', 
        name: 'Elena M.', 
        detail: 'Verified Buyer',
        initials: 'EM',
        rating: 5
    },
    { 
        quote: 'I love the clean ingredients and the luxury feeling. Worth every penny and more.', 
        name: 'Grace T.', 
        detail: 'Verified Buyer',
        initials: 'GT',
        rating: 5
    }
];

const TestimonialsSection = () => {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setDirection(1);
            setCurrent((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const slideVariants = {
        enter: (dir) => ({
            x: dir > 0 ? 180 : -180,
            y: 30,
            rotateY: dir > 0 ? 22 : -22,
            scale: 0.94,
            opacity: 0,
            filter: 'blur(6px)'
        }),
        center: {
            zIndex: 1,
            x: 0,
            y: 0,
            rotateY: 0,
            scale: 1,
            opacity: 1,
            filter: 'blur(0px)'
        },
        exit: (dir) => ({
            zIndex: 0,
            x: dir < 0 ? -180 : 180,
            y: -30,
            rotateY: dir < 0 ? -22 : 22,
            scale: 0.94,
            opacity: 0,
            filter: 'blur(6px)'
        })
    };

    const paginate = (newDirection) => {
        setDirection(newDirection);
        setCurrent((prev) => (prev + newDirection + testimonials.length) % testimonials.length);
    };

    return (
        <section id="reviews" className="testimonial-type relative w-full bg-brand-ivory overflow-hidden py-16 md:py-24">
            <div className="max-w-5xl mx-auto px-4 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16 md:mb-20"
                >
                    <span className="text-xs uppercase tracking-[0.25em] text-brand-brown/55">Client Stories</span>
                    <h2 className="font-serif text-4xl md:text-5xl mt-3 text-brand-dark">Loved by the ritual makers</h2>
                </motion.div>

                <div className="relative h-[500px] md:h-[400px] flex items-center justify-center">
                    <motion.div
                        animate={{
                            scale: [1, 1.03, 1],
                            opacity: [0.7, 1, 0.8]
                        }}
                        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                        className="absolute inset-x-10 top-8 h-52 rounded-full bg-brand-champagne/30 blur-3xl"
                    />

                    <AnimatePresence initial={false} custom={direction} mode="wait">
                        <motion.div
                            key={current}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                type: 'spring',
                                stiffness: 260,
                                damping: 22,
                                mass: 0.8,
                                opacity: { duration: 0.18 }
                            }}
                            className="absolute inset-0 flex items-center"
                            style={{ transformPerspective: 1400 }}
                        >
                            <motion.div
                                initial={{ scale: 0.96, opacity: 0.7 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.5, ease: 'easeOut' }}
                                className="relative w-full overflow-hidden bg-gradient-to-br from-brand-brown/5 via-brand-champagne/10 to-brand-brown/5 rounded-[2rem] p-8 md:p-12 border border-brand-brown/10 shadow-[0_20px_60px_rgba(139,110,83,0.12)]"
                            >
                                <motion.div
                                    animate={{ x: [0, 16, 0], y: [0, -12, 0] }}
                                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                                    className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-champagne/30 blur-2xl"
                                />
                                <motion.div
                                    animate={{ x: [0, -14, 0], y: [0, 12, 0] }}
                                    transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
                                    className="absolute -left-8 bottom-0 h-28 w-28 rounded-full bg-brand-brown/10 blur-2xl"
                                />

                                <div className="relative z-10">
                                    <div className="flex flex-col items-center mb-8">
                                        <motion.div
                                            initial={{ scale: 0, rotate: -20 }}
                                            animate={{ scale: 1, rotate: 0 }}
                                            transition={{ delay: 0.08, type: 'spring', stiffness: 260, damping: 18 }}
                                            className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-brand-brown to-brand-champagne flex items-center justify-center mb-6 shadow-lg shadow-brand-brown/20"
                                        >
                                            <span className="text-white font-serif text-2xl md:text-3xl font-bold">
                                                {testimonials[current].initials}
                                            </span>
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0, y: 8 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.18 }}
                                            className="flex gap-1 text-brand-brown mb-4"
                                        >
                                            {Array.from({ length: 5 }, (_, i) => (
                                                <motion.span
                                                    key={i}
                                                    initial={{ opacity: 0, scale: 0.5 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: 0.22 + i * 0.06 }}
                                                    whileHover={{ scale: 1.2, rotate: 8 }}
                                                >
                                                    <Star
                                                        size={16}
                                                        fill="currentColor"
                                                        className="transition-transform"
                                                    />
                                                </motion.span>
                                            ))}
                                        </motion.div>
                                    </div>

                                    <motion.blockquote
                                        initial={{ opacity: 0, y: 18 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.26, duration: 0.5 }}
                                        className="text-center"
                                    >
                                        <p className="font-serif text-2xl md:text-3xl leading-relaxed text-brand-dark mb-8">
                                            "{testimonials[current].quote}"
                                        </p>
                                        <cite className="not-italic">
                                            <p className="text-sm font-semibold tracking-[0.1em] text-brand-dark">
                                                {testimonials[current].name}
                                            </p>
                                            <p className="text-xs uppercase tracking-[0.2em] text-brand-brown/60 mt-2">
                                                {testimonials[current].detail}
                                            </p>
                                        </cite>
                                    </motion.blockquote>
                                </div>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>

                    <motion.button
                        whileHover={{ scale: 1.12, rotate: 4 }}
                        whileTap={{ scale: 0.93 }}
                        animate={{ y: [0, -2, 0] }}
                        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                        onClick={() => paginate(-1)}
                        className="absolute left-0 -translate-x-14 md:-translate-x-20 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-brand-brown/10 hover:bg-brand-brown/20 text-brand-brown transition-colors backdrop-blur-sm"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft size={24} />
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.12, rotate: -4 }}
                        whileTap={{ scale: 0.93 }}
                        animate={{ y: [0, -2, 0] }}
                        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
                        onClick={() => paginate(1)}
                        className="absolute right-0 translate-x-14 md:translate-x-20 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-brand-brown/10 hover:bg-brand-brown/20 text-brand-brown transition-colors backdrop-blur-sm"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight size={24} />
                    </motion.button>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="flex justify-center gap-2 mt-12"
                >
                    {testimonials.map((_, index) => (
                        <motion.button
                            key={index}
                            onClick={() => {
                                setDirection(index > current ? 1 : -1);
                                setCurrent(index);
                            }}
                            className={`h-2 rounded-full transition-all ${
                                index === current
                                    ? 'bg-brand-brown w-8'
                                    : 'bg-brand-brown/30 w-2 hover:bg-brand-brown/50'
                            }`}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </motion.div>

                <div className="text-center mt-8 text-sm text-brand-brown/50 font-light tracking-[0.1em]">
                    {current + 1} / {testimonials.length}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
