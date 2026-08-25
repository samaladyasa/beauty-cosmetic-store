import React, { createContext, useState, useContext, useEffect } from 'react';
import { products } from '../data/products';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('luxury_cart');
        if (!savedCart) return [];

        return JSON.parse(savedCart).map(item => {
            const currentProduct = products.find(product => product.id === item.id);
            return currentProduct ? { ...currentProduct, quantity: item.quantity, selectedColor: item.selectedColor } : item;
        });
    });
    const [isCartOpen, setIsCartOpen] = useState(false);

    useEffect(() => {
        localStorage.setItem('luxury_cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product, quantity = 1, color = null) => {
        setCart(prevCart => {
            const existingItemIndex = prevCart.findIndex(
                item => item.id === product.id && item.selectedColor === color
            );

            if (existingItemIndex >= 0) {
                const newCart = [...prevCart];
                newCart[existingItemIndex].quantity += quantity;
                return newCart;
            } else {
                return [...prevCart, { ...product, quantity, selectedColor: color }];
            }
        });
        setIsCartOpen(true);
    };

    const removeFromCart = (productId, color = null) => {
        setCart(prevCart =>
            prevCart.filter(item => !(item.id === productId && item.selectedColor === color))
        );
    };

    const updateQuantity = (productId, color, quantity) => {
        if (quantity < 1) return;
        setCart(prevCart => {
            return prevCart.map(item => {
                if (item.id === productId && item.selectedColor === color) {
                    return { ...item, quantity };
                }
                return item;
            });
        });
    };

    const clearCart = () => {
        setCart([]);
    };

    const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            cartTotal,
            cartCount,
            isCartOpen,
            setIsCartOpen
        }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
