import React, { createContext, useState } from 'react';

// Crear el contexto para el carrito
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Agregar al carrito, pero sin sumar cantidades
  const addToCart = (product) => {
    setCart((prevCart) => {
      // Se agrega el producto directamente sin sumar cantidades
      return [...prevCart, { ...product, quantity: 1 }];  // Aquí aseguramos que cada producto se agrega individualmente
    });
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((product) => product.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
