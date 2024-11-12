import React, { useState } from 'react';
import { CartContext } from './cartContext';

const CartProvider = ({ children }) => {
  // Definir el estado del carrito
  const [cart, setCart] = useState([]);

  // Función para agregar productos al carrito
  const addToCart = (product) => {
    setCart((prevCart) => {
      // Verificar si el producto ya está en el carrito
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        // Si ya existe, aumentar la cantidad
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      } else {
        // Si no existe, agregar el producto al carrito
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
