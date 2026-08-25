import React from 'react';
import { motion } from 'framer-motion';

export const ScrollReveal = ({ children, className = '', threshold = 0.2, direction = 'up', delay = 0 }) => {
    const variants = {
        hidden: {
            opacity: 0,
            y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
            x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
            scale: direction === 'scale' ? 0.95 : 1
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: delay
            }
        }
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: threshold }}
            variants={variants}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const ParallaxImage = ({ src, alt, className = '' }) => {
    return (
        <div className={`overflow-hidden relative ${className}`}>
            <motion.img
                initial={{ scale: 1.1, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                src={src}
                alt={alt}
                className="w-full h-full object-cover"
            />
        </div>
    );
};
