// src/CartContext.js
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (property) => {
    setCart((prevCart) => {
        const propertyExists = prevCart.some((item) => item.id === property.id);
  
        if (!propertyExists) {
          return [...prevCart, property];
        }
        return prevCart;
      });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((property) => property.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
