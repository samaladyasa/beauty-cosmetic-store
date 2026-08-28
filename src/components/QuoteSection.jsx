import React from 'react';

const QuoteSection = () => (
    <section className="quote-type py-20 md:py-32 w-full bg-brand-brown text-brand-ivory">
        <div className="quote-frame max-w-4xl mx-auto px-4 md:px-8 text-center">
            <blockquote className="script-type text-5xl md:text-7xl leading-tight text-brand-ivory">
                “Beauty is not a mask. It is the quiet confidence of caring for what is already yours.”
            </blockquote>
            <cite className="block not-italic mt-8 text-xs uppercase tracking-[0.3em] text-brand-ivory/55">The Aabha point of view</cite>
        </div>
    </section>
);

export default QuoteSection;
