import React, { useState } from 'react';
import { CartContext } from './cartContext';

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
    setCart((prevCart) => {
        const existingProduct = prevCart.find(item => item.id === product.id);
        if (existingProduct) {
        return prevCart.map(item =>
            item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
    } else {
        
        return [...prevCart, product];
    }
    });
};

    return (
    <CartContext.Provider value={{ cart, addToCart }}>
        {children}
    </CartContext.Provider>
);
};

export default CartProvider;
