import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Sparkles } from 'lucide-react';

const FindMyShade = ({ product, isOpen, onClose, onMatch }) => {
    const [step, setStep] = useState(0);
    const [selections, setSelections] = useState({ tone: null, undertone: null });

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            setStep(0);
            setSelections({ tone: null, undertone: null });
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    const tones = [
        { id: 'fair', label: 'Fair' },
        { id: 'light', label: 'Light' },
        { id: 'medium', label: 'Medium' },
        { id: 'tan', label: 'Tan' },
        { id: 'deep', label: 'Deep' }
    ];

    const undertones = [
        { id: 'cool', label: 'Cool', desc: 'Pink or bluish hints' },
        { id: 'neutral', label: 'Neutral', desc: 'A balance of pink & yellow' },
        { id: 'warm', label: 'Warm', desc: 'Yellow, peachy, or golden' }
    ];

    const handleNext = () => setStep(s => s + 1);

    const handleFinish = () => {
        if (!product || !product.colors) return;

        let matchIndex = 0;
        const toneIndex = tones.findIndex(t => t.id === selections.tone);
        const undertoneIndex = undertones.findIndex(u => u.id === selections.undertone);

        if (toneIndex !== -1 && undertoneIndex !== -1) {
            matchIndex = (toneIndex * 3 + undertoneIndex) % product.colors.length;
        }

        onMatch(product.colors[matchIndex]);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
            >
                <div className="absolute inset-0" onClick={onClose} />
                <motion.div
                    initial={{ scale: 0.95, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.95, opacity: 0, y: 20 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    className="relative bg-brand-ivory w-full max-w-lg rounded-sm shadow-2xl overflow-hidden flex flex-col min-h-[500px]"
                >
                    <button onClick={onClose} className="absolute top-4 right-4 z-10 p-2 text-brand-brown/60 hover:text-brand-brown transition-colors">
                        <X size={20} />
                    </button>

                    <div className="flex-1 p-8 md:p-12 flex flex-col justify-center items-center text-center">
                        <AnimatePresence mode="wait">
                            {step === 0 && (
                                <motion.div key="intro" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="flex flex-col items-center">
                                    <Sparkles size={32} className="text-amber-600 mb-6" />
                                    <h2 className="font-serif text-3xl mb-4 text-brand-dark">Find Your Match</h2>
                                    <p className="text-brand-brown/70 mb-10 text-sm leading-relaxed max-w-xs">
                                        Take our quick 2-step quiz to find your perfect {product?.name || "shade"} match.
                                    </p>
                                    <button onClick={handleNext} className="bg-brand-brown text-brand-ivory px-8 py-4 text-xs font-semibold tracking-[0.2em] uppercase hover:bg-black transition-colors w-full">
                                        Start Quiz
                                    </button>
                                </motion.div>
                            )}

                            {step === 1 && (
                                <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="w-full">
                                    <span className="text-xs uppercase tracking-widest text-brand-brown/50 font-semibold mb-2 block">Step 1 of 2</span>
                                    <h2 className="font-serif text-2xl mb-8 text-brand-dark">What is your skin tone?</h2>
                                    <div className="flex flex-col gap-3">
                                        {tones.map(tone => (
                                            <button
                                                key={tone.id}
                                                onClick={() => { setSelections(s => ({ ...s, tone: tone.id })); handleNext(); }}
                                                className="border border-brand-brown/20 p-4 rounded-sm hover:border-brand-brown transition-colors uppercase tracking-[0.15em] text-xs font-medium"
                                            >
                                                {tone.label}
                                            </button>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {step === 2 && (
                                <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="w-full">
                                    <span className="text-xs uppercase tracking-widest text-brand-brown/50 font-semibold mb-2 block">Step 2 of 2</span>
                                    <h2 className="font-serif text-2xl mb-8 text-brand-dark">What is your undertone?</h2>
                                    <div className="flex flex-col gap-3">
                                        {undertones.map(u => (
                                            <button
                                                key={u.id}
                                                onClick={() => { setSelections(s => ({ ...s, undertone: u.id })); setStep(3); }}
                                                className="border border-brand-brown/20 p-4 rounded-sm hover:border-brand-brown transition-colors text-left flex flex-col"
                                            >
                                                <span className="uppercase tracking-[0.15em] text-xs font-semibold bg-transparent">{u.label}</span>
                                                <span className="text-[10px] text-brand-brown/60 mt-1">{u.desc}</span>
                                            </button>
                                        ))}
                                    </div>
                                    <button onClick={() => setStep(1)} className="mt-6 text-xs text-brand-brown/60 hover:text-brand-brown underline uppercase tracking-widest">Back</button>
                                </motion.div>
                            )}

                            {step === 3 && (
                                <motion.div key="result" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center w-full">
                                    <div className="w-16 h-16 rounded-full border-4 border-brand-ivory shadow-xl bg-gradient-to-tr from-brand-nude to-brand-brown/20 flex items-center justify-center mb-6">
                                        <Sparkles size={24} className="text-white" />
                                    </div>
                                    <h2 className="font-serif text-3xl mb-3 text-brand-dark">We found your match!</h2>
                                    <p className="text-brand-brown/70 text-sm mb-10">Based on your choices, we recommend this perfect shade.</p>
                                    <button onClick={handleFinish} className="bg-brand-brown text-brand-ivory px-8 py-4 text-xs font-semibold tracking-[0.2em] uppercase hover:bg-black transition-colors w-full flex items-center justify-center gap-2">
                                        View Recommend Shade <ArrowRight size={16} />
                                    </button>
                                    <button onClick={() => setStep(0)} className="mt-6 text-xs text-brand-brown/60 hover:text-brand-brown underline uppercase tracking-widest">Retake Quiz</button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default FindMyShade;
