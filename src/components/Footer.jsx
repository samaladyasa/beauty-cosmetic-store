import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { WaveTransition } from './Dividers';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [subscriptionState, setSubscriptionState] = useState('idle');

    const handleSubscribe = (event) => {
        event.preventDefault();
        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

        if (!isValidEmail) {
            setSubscriptionState('error');
            return;
        }

        setSubscriptionState('success');
        setEmail('');
    };

    return (
        <div className="w-full flex flex-col">
            <WaveTransition topBg="footer-divider" bottomFill="text-transparent" />
            <footer className="site-footer text-brand-ivory pt-12 md:pt-20 pb-28 md:pb-12 px-4 md:px-8 -mt-[1px]">
                <div className="footer-content max-w-7xl mx-auto">
                    <div className="footer-brand-lockup flex flex-col md:flex-row md:items-end justify-between gap-8 pb-10 mb-12">
                        <div>
                            <span className="footer-kicker footer-small-text text-xs uppercase tracking-[0.3em] text-brand-champagne">Aabha Beauty</span>
                            <p className="script-type text-5xl md:text-7xl text-brand-ivory mt-3">Everyday radiance.</p>
                        </div>
                        <span className="footer-small-text hidden md:block text-xs uppercase tracking-[0.25em] text-brand-ivory/45">Beauty, naturally considered</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 md:pb-16">
                        <div className="sm:col-span-2 lg:col-span-5 lg:pr-16">
                            <Link to="/#home" className="font-['Playfair_Display'] font-semibold uppercase tracking-[0.15em] text-4xl md:text-5xl mb-5 inline-flex hover:text-white transition-colors">Aabha</Link>
                            <p className="footer-small-text text-brand-ivory/70 text-sm leading-relaxed mb-6 max-w-sm">
                                Thoughtfully made beauty rituals for your everyday glow.
                            </p>
                        </div>

                        <div className="lg:col-span-2">
                            <h3 className="footer-heading uppercase tracking-[0.2em] text-[10px] font-semibold mb-6 flex text-brand-ivory/50">Explore</h3>
                            <ul className="footer-small-text space-y-4 text-brand-ivory/70 text-sm flex flex-col items-start w-full">
                                <li><Link to="/#home" className="hover:text-brand-ivory transition-colors w-full flex">Home</Link></li>
                                <li><Link to="/#shop" className="hover:text-brand-ivory transition-colors w-full flex">Shop all</Link></li>
                                <li><Link to="/#about" className="hover:text-brand-ivory transition-colors w-full flex">About us</Link></li>
                                <li><Link to="/#reviews" className="hover:text-brand-ivory transition-colors w-full flex">Reviews</Link></li>
                                <li><Link to="/#contact" className="hover:text-brand-ivory transition-colors w-full flex">Contact</Link></li>
                            </ul>
                        </div>

                        <div className="lg:col-span-2">
                            <h3 className="footer-heading uppercase tracking-[0.2em] text-[10px] font-semibold mb-6 flex text-brand-ivory/50">Customer care</h3>
                            <ul className="footer-small-text space-y-4 text-brand-ivory/70 text-sm flex flex-col items-start w-full">
                                <li><Link to="/#faq" className="hover:text-brand-ivory transition-colors w-full flex">FAQ</Link></li>
                            </ul>
                        </div>

                        <div className="sm:col-span-2 lg:col-span-3 flex flex-col">
                            <h3 className="footer-heading uppercase tracking-[0.2em] text-[10px] font-semibold mb-6 flex text-brand-ivory/50">Join the beauty list</h3>
                            <p className="footer-small-text text-brand-ivory/70 text-sm leading-relaxed mb-5 max-w-xs">New rituals, considered edits, and notes from Aabha.</p>
                            <form className="flex flex-col space-y-4 w-full max-w-sm" onSubmit={handleSubscribe} noValidate>
                                <input
                                    type="email"
                                    aria-label="Email address"
                                    placeholder="Email address"
                                    value={email}
                                    onChange={(event) => {
                                        setEmail(event.target.value);
                                        setSubscriptionState('idle');
                                    }}
                                    aria-invalid={subscriptionState === 'error'}
                                    required
                                    className="footer-input bg-transparent border-b border-brand-ivory/30 pb-3 focus:outline-none focus:border-brand-champagne text-sm placeholder-brand-ivory/40 transition-colors w-full flex"
                                />
                                <button type="submit" className="self-start uppercase tracking-widest text-xs border border-brand-champagne text-brand-champagne px-6 py-3 hover:bg-brand-champagne hover:text-brand-brown transition-colors">
                                    Subscribe
                                </button>
                                {subscriptionState === 'error' && <p className="footer-small-text text-xs text-red-200">Please enter a valid email address.</p>}
                                {subscriptionState === 'success' && <p className="footer-small-text text-xs text-brand-ivory/80">You are on the beauty list.</p>}
                            </form>
                        </div>
                    </div>

                    <div className="footer-small-text flex flex-col md:flex-row justify-between items-start md:items-center pt-8 text-brand-ivory/50 text-xs w-full gap-5">
                        <p>&copy; {new Date().getFullYear()} Aabha Cosmetics. All rights reserved.</p>
                        <div className="flex flex-wrap gap-x-6 gap-y-2">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-ivory transition-colors">Instagram</a>
                            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-ivory transition-colors">Pinterest</a>
                            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-ivory transition-colors">TikTok</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
