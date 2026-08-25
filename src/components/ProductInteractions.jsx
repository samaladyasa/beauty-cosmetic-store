import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const ShadeSelector = ({ colors, selectedColor, onSelect }) => {
    if (!colors || colors.length === 0) return null;

    return (
        <div className="mb-10 w-full flex flex-col items-start">
            <p className="uppercase tracking-[0.2em] text-xs font-semibold mb-4 text-brand-brown/70 flex">
                Shade: <span className="font-light text-brand-brown ml-2">{selectedColor}</span>
            </p>
            <div className="flex flex-wrap gap-2.5 w-full">
                {colors.map(color => (
                    <button
                        key={color}
                        onClick={() => onSelect(color)}
                        className={`relative px-4 py-2 border rounded-sm text-xs transition-all duration-300 flex items-center justify-center overflow-hidden
                        ${selectedColor === color ? 'border-brand-brown text-brand-ivory' : 'border-brand-brown/20 text-brand-brown hover:border-brand-brown/50'}`}
                        title={color}
                    >
                        {selectedColor === color && (
                            <motion.div
                                layoutId="shadeSelection"
                                className="absolute inset-0 bg-brand-brown w-full h-full -z-10"
                                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                            />
                        )}
                        <span className="relative z-10">{color}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export const AddToBagButton = ({ product, quantity, selectedColor, addToCart, className }) => {
    const [buttonState, setButtonState] = useState('idle');

    const handleAdd = () => {
        if (buttonState !== 'idle') return;

        setButtonState('adding');
        setTimeout(() => {
            addToCart(product, quantity, selectedColor);
            setButtonState('added');
            setTimeout(() => setButtonState('idle'), 2000);
        }, 600);
    };

    return (
        <motion.button
            onClick={handleAdd}
            disabled={buttonState !== 'idle'}
            whileHover={buttonState === 'idle' ? { y: -2 } : undefined}
            whileTap={buttonState === 'idle' ? { scale: 0.98 } : undefined}
            className={`relative overflow-hidden ${className}`}
        >
            <AnimatePresence mode="wait">
                {buttonState === 'idle' && (
                    <motion.span
                        key="idle"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="w-full flex items-center justify-center h-full"
                    >
                        Add to Bag
                    </motion.span>
                )}
                {buttonState === 'adding' && (
                    <motion.span
                        key="adding"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="w-full flex items-center justify-center gap-2 h-full"
                    >
                        <div className="w-3 h-3 border-2 border-brand-ivory/30 border-t-brand-ivory rounded-full animate-spin" />
                        Adding
                    </motion.span>
                )}
                {buttonState === 'added' && (
                    <motion.span
                        key="added"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="w-full flex items-center justify-center gap-2 h-full"
                    >
                        ✓ Added
                    </motion.span>
                )}
            </AnimatePresence>
        </motion.button>
    );
};
