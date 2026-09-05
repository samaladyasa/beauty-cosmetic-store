import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const questions = [
    ['How do I find my best shade?', 'Start with our Find My Shade guide, then look for the closest undertone match. Our formulas are designed to blend naturally, so a near match will melt into your skin.'],
    ['Are Aabha formulas cruelty-free?', 'Yes. We never test on animals, and we work with suppliers who share our cruelty-free standards. Each product page includes its full ingredient list.'],
    ['How long does delivery take?', 'Orders are carefully packed within 1 to 2 business days. Standard delivery usually arrives within 3 to 5 business days, with tracking sent as soon as your order leaves us.'],
    ['Can I return a product I have tried?', 'We accept returns within 30 days of delivery. For hygiene reasons, opened makeup and skincare cannot be resold, so contact our care team first and we will help find the right solution.']
];

const FAQSection = () => {
    const [openQuestion, setOpenQuestion] = useState(0);

    return (
        <section id="faq" className="faq-type relative pt-8 md:pt-12 pb-16 md:pb-24 w-full bg-[radial-gradient(circle_at_top,_rgba(200,171,145,0.14),_transparent_50%),_#f9f5f1] overflow-hidden">
            <div className="absolute left-0 top-10 h-40 w-40 rounded-full bg-brand-champagne/30 blur-3xl" />
            <div className="absolute right-0 bottom-10 h-48 w-48 rounded-full bg-brand-brown/10 blur-3xl" />

            <div className="relative max-w-5xl mx-auto px-4 md:px-8 grid md:grid-cols-[0.8fr_1.2fr] gap-12 md:gap-20">
                <div className="pt-4">
                    <span className="text-xs md:text-sm uppercase tracking-[0.28em] text-brand-brown/60">A little guidance</span>
                    <h2 className="font-serif text-4xl md:text-5xl mt-4 text-brand-dark leading-tight">Questions, answered.</h2>
                    <p className="text-base md:text-lg text-brand-brown/65 leading-relaxed mt-6 max-w-sm">
                        Everything you need to make your ritual feel simple, considered, and completely yours.
                    </p>
                </div>

                <div className="faq-list rounded-[2rem] border border-brand-brown/10 bg-white/60 backdrop-blur-sm shadow-[0_18px_50px_rgba(87,63,42,0.06)] p-2 md:p-3">
                    {questions.map(([question, answer], index) => {
                        const isOpen = openQuestion === index;
                        return (
                            <div
                                key={question}
                                className={`rounded-[1.25rem] border transition-all duration-300 ${
                                    isOpen ? 'border-brand-brown/15 bg-brand-ivory shadow-[0_8px_18px_rgba(87,63,42,0.04)]' : 'border-transparent bg-transparent'
                                }`}
                            >
                                <motion.button
                                    type="button"
                                    onClick={() => setOpenQuestion(isOpen ? -1 : index)}
                                    aria-expanded={isOpen}
                                    whileTap={{ scale: 0.998 }}
                                    transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                                    className="w-full flex items-center justify-between gap-6 px-4 md:px-6 py-5 md:py-6 text-left text-lg md:text-xl text-brand-dark rounded-[1.25rem] transition-colors duration-200 hover:bg-brand-brown/[0.015]"
                                >
                                    <span className="pr-2 font-medium">{question}</span>
                                    <motion.span
                                        animate={{ rotate: isOpen ? 180 : 0, scale: isOpen ? 1.04 : 1 }}
                                        transition={{ type: 'spring', stiffness: 280, damping: 22 }}
                                        className="shrink-0 flex h-9 w-9 items-center justify-center rounded-full bg-brand-brown/5 text-brand-brown/70"
                                    >
                                        <ChevronDown size={18} aria-hidden="true" />
                                    </motion.span>
                                </motion.button>

                                <div
                                    className="grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
                                    style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                                >
                                    <div className="overflow-hidden">
                                        <motion.p
                                            initial={{ opacity: 0, y: 8 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -8 }}
                                            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                                            className="px-4 md:px-6 pb-6 pr-10 md:pr-12 text-base md:text-lg leading-relaxed text-brand-brown/65"
                                        >
                                            {answer}
                                        </motion.p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
