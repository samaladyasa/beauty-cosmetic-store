import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
    { quote: 'My skin feels cared for, not covered up.', name: 'Maya R.', detail: 'Verified ritual maker' },
    { quote: 'The serum is now the one step I never skip.', name: 'Sofia L.', detail: 'Verified ritual maker' },
    { quote: 'Beautiful formulas and packaging that feels considered.', name: 'Amara K.', detail: 'Verified ritual maker' }
];

const TestimonialsSection = () => (
    <section id="reviews" className="testimonial-type py-16 md:py-24 w-full bg-[#f7f1f1]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
            <div className="testimonial-heading">
            <span className="text-xs uppercase tracking-[0.25em] text-brand-brown/55">Loved by the ritual makers</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-3 mb-12 text-brand-dark">A little glow, shared.</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6 text-left">
                {testimonials.map((testimonial, index) => (
                    <blockquote key={testimonial.name} className="testimonial-card bg-brand-ivory p-7 md:p-8">
                        <span className="testimonial-index">0{index + 1} / 03</span>
                        <div className="flex gap-1 text-brand-brown mb-5" aria-label="5 out of 5 stars">
                            {Array.from({ length: 5 }, (_, index) => <Star key={index} size={13} fill="currentColor" aria-hidden="true" />)}
                        </div>
                        <p className="font-serif text-2xl leading-snug text-brand-dark mb-6">“{testimonial.quote}”</p>
                        <cite className="not-italic text-xs uppercase tracking-[0.2em] text-brand-brown/55">{testimonial.name}</cite>
                        <p className="text-xs text-brand-brown/45 mt-2">{testimonial.detail}</p>
                    </blockquote>
                ))}
            </div>
        </div>
    </section>
);

export default TestimonialsSection;
