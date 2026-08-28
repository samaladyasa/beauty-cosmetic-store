import React, { useState } from 'react';
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
        <section id="faq" className="faq-type py-16 md:py-24 w-full bg-brand-ivory">
            <div className="max-w-5xl mx-auto px-4 md:px-8 grid md:grid-cols-[0.8fr_1.2fr] gap-12 md:gap-20">
                <div>
                    <span className="text-sm uppercase tracking-[0.25em] text-brand-brown/55">A little guidance</span>
                    <h2 className="font-serif text-4xl md:text-5xl mt-3 text-brand-dark">Questions, answered.</h2>
                    <p className="text-base md:text-lg text-brand-brown/60 leading-relaxed mt-6 max-w-sm">Everything you need to make your ritual feel simple, considered, and completely yours.</p>
                </div>
                <div className="faq-list border-t border-brand-brown/15">
                    {questions.map(([question, answer], index) => {
                        const isOpen = openQuestion === index;
                        return (
                            <div key={question} className="border-b border-brand-brown/15">
                                <button type="button" onClick={() => setOpenQuestion(isOpen ? -1 : index)} aria-expanded={isOpen} className="w-full flex items-center justify-between gap-6 py-6 text-left text-lg md:text-xl text-brand-dark">
                                    <span>{question}</span>
                                    <ChevronDown size={20} className={`shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                                </button>
                                {isOpen && <p className="pb-6 pr-8 text-base md:text-lg leading-relaxed text-brand-brown/60">{answer}</p>}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
