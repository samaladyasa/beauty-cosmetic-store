import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Account = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="min-h-screen pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto flex items-center justify-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-md bg-brand-ivory border border-brand-brown/10 p-8 md:p-12 shadow-2xl"
            >
                <div className="text-center mb-10">
                    <h1 className="font-serif text-3xl md:text-4xl text-brand-dark mb-4">
                        {isLogin ? 'Welcome Back' : 'Create Account'}
                    </h1>
                    <p className="text-brand-brown/60 text-sm">
                        {isLogin
                            ? 'Sign in to access your wishlist and exclusive offers.'
                            : 'Join Auréa for exclusive access to new arrivals and personalized picks.'}
                    </p>
                </div>

                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    {!isLogin && (
                        <div>
                            <label className="block text-xs uppercase tracking-widest text-brand-brown/70 mb-2">Full Name</label>
                            <input
                                type="text"
                                className="w-full bg-transparent border-b border-brand-brown/30 py-2 outline-none focus:border-brand-brown transition-colors text-brand-brown placeholder-brand-brown/20"
                                placeholder="Your name"
                            />
                        </div>
                    )}

                    <div>
                        <label className="block text-xs uppercase tracking-widest text-brand-brown/70 mb-2">Email Address</label>
                        <input
                            type="email"
                            className="w-full bg-transparent border-b border-brand-brown/30 py-2 outline-none focus:border-brand-brown transition-colors text-brand-brown placeholder-brand-brown/20"
                            placeholder="Email address"
                        />
                    </div>

                    <div>
                        <div className="flex justify-between mb-2">
                            <label className="block text-xs uppercase tracking-widest text-brand-brown/70">Password</label>
                            {isLogin && <button type="button" className="text-xs text-brand-brown/60 hover:text-brand-brown transition-colors">Forgot?</button>}
                        </div>
                        <input
                            type="password"
                            className="w-full bg-transparent border-b border-brand-brown/30 py-2 outline-none focus:border-brand-brown transition-colors text-brand-brown placeholder-brand-brown/20"
                            placeholder="Password"
                        />
                    </div>

                    <button className="w-full bg-brand-brown text-brand-ivory py-4 uppercase tracking-widest text-sm hover:bg-black transition-colors mt-8">
                        {isLogin ? 'Sign In' : 'Create Account'}
                    </button>
                </form>

                <div className="mt-8 pt-8 border-t border-brand-brown/10 text-center">
                    <p className="text-sm text-brand-brown/60">
                        {isLogin ? "Don't have an account?" : "Already have an account?"}
                        <button
                            onClick={() => setIsLogin(!isLogin)}
                            className="ml-2 text-brand-brown hover:text-brand-dark font-medium uppercase text-xs tracking-widest"
                        >
                            {isLogin ? 'Register' : 'Sign In'}
                        </button>
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default Account;
