// CartContext.js
import React, { createContext, useContext, useState } from 'react';

// Create the CartContext
const CartContext = createContext();

// CartProvider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    // Check if product is already in the cart
    const existingProduct = cartItems.find(item => item.id === product.id);
    if (existingProduct) {
      // If it exists, update the quantity
      setCartItems((prevItems) =>
        prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // If it doesn't exist, add it to the cart with quantity 1
      setCartItems((prevItems) => [...prevItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== productId));
  };

  const clearCart = () => {
    setCartItems([]); // Clear the cart
  };

  const updateCartQuantity = (productId, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ 
      cartItems, 
      addToCart, 
      removeFromCart, 
      clearCart, 
      updateCartQuantity // Expose updateCartQuantity
    }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the Cart context
export const useCart = () => {
  return useContext(CartContext);
};
