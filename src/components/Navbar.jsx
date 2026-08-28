import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Navbar = ({ onMenuClick }) => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navClass = `fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-in-out bg-brand-ivory/95 backdrop-blur-xl py-4 shadow-sm border-b border-brand-brown/10`;

    return (
        <nav className={navClass}>
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-8 flex justify-between items-center min-h-10">
                <div className="flex md:hidden items-center">
                    <button onClick={onMenuClick} aria-label="Open menu" className="p-2 -ml-2 text-brand-brown min-w-10 min-h-10 flex items-center justify-center">
                        <Menu size={24} />
                    </button>
                </div>

                <div className="hidden md:flex items-center space-x-8 text-sm uppercase tracking-wider flex-1 text-brand-brown">
                    <Link to="/#home" className={`relative group transition-colors ${location.pathname === '/' ? 'text-brand-brown font-semibold' : 'hover:text-amber-900'}`}>
                        Home
                        <span className={`absolute -bottom-1 left-0 h-[1px] bg-brand-brown transition-all duration-300 ${location.pathname === '/' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                    </Link>
                    <Link to="/#shop" className={`relative group transition-colors ${location.pathname === '/shop' ? 'text-brand-brown font-semibold' : 'hover:text-amber-900'}`}>
                        Shop
                        <span className={`absolute -bottom-1 left-0 h-[1px] bg-brand-brown transition-all duration-300 ${location.pathname === '/shop' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                    </Link>
                    <Link to="/#about" className={`relative group transition-colors ${location.pathname === '/about' ? 'text-brand-brown font-semibold' : 'hover:text-amber-900'}`}>
                        About
                        <span className={`absolute -bottom-1 left-0 h-[1px] bg-brand-brown transition-all duration-300 ${location.pathname === '/about' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                    </Link>
                </div>

                <div className="text-center flex-1 flex justify-center min-w-0 px-2">
                    <Link to="/#home" className="font-['Playfair_Display'] font-semibold text-3xl sm:text-4xl md:text-5xl uppercase tracking-[0.15em] whitespace-nowrap hover:opacity-70 transition-opacity text-brand-dark">
                        Aabha
                    </Link>
                </div>

                <div className="flex items-center gap-1 sm:gap-2 md:gap-6 justify-end flex-1">
                </div>
            </div>
        </nav>
    );
};
export default Navbar;
