import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SocialIcon = ({ name }) => {
    if (name === 'facebook') {
        return <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5"><circle cx="12" cy="12" r="10" className="fill-current" /><path fill="#331e19" d="M13.5 20v-7h2.4l.4-2.7h-2.8V8.6c0-.8.3-1.3 1.4-1.3h1.5V4.9c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.4-3.7 3.8v1.7H8v2.7h2.5v7h3Z" /></svg>;
    }

    if (name === 'x') {
        return <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current"><path d="M5.3 4h4.1l3.5 4.8L16.8 4H19l-5.1 6.1L19.3 20h-4.1l-3.9-5.3L6.6 20H4.4l5.4-6.5L5.3 4Zm3.1 1.7H7.8l6.5 12.6h.6L15.2 18 8.4 5.7Z" /></svg>;
    }

    if (name === 'instagram') {
        return <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-none stroke-current stroke-[1.8]"><rect x="3.5" y="3.5" width="17" height="17" rx="4" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.7" r=".8" className="fill-current stroke-none" /></svg>;
    }

    if (name === 'youtube') {
        return <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current"><path d="M21 8.2a2.8 2.8 0 0 0-2-2C17.2 5.7 12 5.7 12 5.7s-5.2 0-7 .5a2.8 2.8 0 0 0-2 2A29 29 0 0 0 2.5 12 29 29 0 0 0 3 15.8a2.8 2.8 0 0 0 2 2c1.8.5 7 .5 7 .5s5.2 0 7-.5a2.8 2.8 0 0 0 2-2 29 29 0 0 0 .5-3.8 29 29 0 0 0-.5-3.8ZM10 15.2V8.8l5.5 3.2-5.5 3.2Z" /></svg>;
    }

    return null;
};

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
            <footer className="site-footer text-brand-ivory pt-12 md:pt-20 pb-28 md:pb-12 px-4 md:px-8 -mt-[1px]">
                <div className="footer-content max-w-7xl mx-auto">
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
                        <div className="flex items-center gap-5 text-brand-ivory/80">
                            <span className="uppercase tracking-[0.18em] text-[10px]">Connect with us</span>
                            {[
                                ['facebook', 'Facebook', 'https://facebook.com'],
                                ['x', 'X', 'https://x.com'],
                                ['instagram', 'Instagram', 'https://instagram.com'],
                                ['youtube', 'YouTube', 'https://youtube.com'],
                            ].map(([name, label, href]) => (
                                <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label} className="transition-colors hover:text-brand-ivory">
                                    <SocialIcon name={name} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
