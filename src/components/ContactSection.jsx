import React from 'react';
import { Clock3, Mail, MapPin, Phone } from 'lucide-react';

const ContactSection = () => (
    <section id="contact" className="contact-type py-16 md:py-24 w-full bg-[#f3f0ec]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20 items-stretch">
            <div className="flex flex-col justify-center">
                <span className="text-sm uppercase tracking-[0.3em] font-sans text-brand-brown/60 mb-2">Contact us</span>
                <h2 className="font-display text-5xl md:text-6xl lg:text-7xl mt-4 text-brand-dark leading-tight">Your ritual <br />starts here.</h2>
                <p className="text-base md:text-lg lg:text-xl font-serif leading-relaxed text-brand-brown/80 mt-8 max-w-lg">Visit our studio for a calm, one-to-one beauty consultation, or reach our care team whenever you need a little guidance.</p>
                <div className="grid sm:grid-cols-2 gap-10 mt-12 text-base md:text-lg text-brand-brown/80 font-serif">
                    <div className="space-y-6">
                        <a href="mailto:hello@aabhabeauty.com" className="flex items-center gap-4 hover:text-brand-champagne transition-colors"><Mail size={20} className="text-brand-champagne" /> hello@aabhabeauty.com</a>
                        <a href="tel:+912212345678" className="flex items-center gap-4 hover:text-brand-champagne transition-colors"><Phone size={20} className="text-brand-champagne" /> +91 22 1234 5678</a>
                        <p className="flex items-start gap-4"><MapPin size={20} className="mt-1 shrink-0 text-brand-champagne" /> Linking Road, Bandra West,<br />Mumbai, Maharashtra</p>
                    </div>
                    <div className="border-l border-brand-champagne/40 pl-8">
                        <div className="flex items-center gap-3 text-brand-dark mb-6"><Clock3 size={20} className="text-brand-champagne" /> <span className="uppercase tracking-[0.2em] font-sans text-sm font-medium">Open hours</span></div>
                        <dl className="space-y-4 text-base leading-relaxed">
                            <div className="flex justify-between gap-4 border-b border-brand-brown/10 pb-2"><dt>Mon - Fri</dt><dd>10:00 AM - 7:00 PM</dd></div>
                            <div className="flex justify-between gap-4 border-b border-brand-brown/10 pb-2"><dt>Saturday</dt><dd>11:00 AM - 6:00 PM</dd></div>
                            <div className="flex justify-between gap-4"><dt>Sunday</dt><dd className="text-brand-champagne italic">Closed</dd></div>
                        </dl>
                    </div>
                </div>
            </div>
            <div className="contact-map min-h-[320px] md:min-h-[430px] bg-brand-champagne overflow-hidden relative">
                <iframe title="Aabha Beauty Studio location map in Mumbai" src="https://www.google.com/maps?q=Linking%20Road%2C%20Bandra%20West%2C%20Mumbai%2C%20Maharashtra&output=embed" className="w-full h-full min-h-[320px] md:min-h-[430px] border-0 grayscale-[20%]" loading="lazy" />
            </div>
        </div>
    </section>
);

export default ContactSection;
