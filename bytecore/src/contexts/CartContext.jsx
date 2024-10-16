// src/contexts/CartContext.js

import React, { createContext, useContext, useState } from 'react';

// Create CartContext
const CartContext = createContext();

// Custom hook to use the CartContext
export const useCart = () => {
  return useContext(CartContext);
};

// CartProvider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]); // State to hold cart items

  // Function to add an item to the cart
  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((cartItem) => cartItem._id === item._id);
      if (existingItem) {
        // If item exists, update its quantity
        return prevItems.map((cartItem) =>
          cartItem._id === item._id ? { ...cartItem, quantity: cartItem.quantity + item.quantity } : cartItem
        );
      }
      // If item doesn't exist, add it to the cart
      return [...prevItems, item];
    });
  };

  // Function to remove an item from the cart
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item._id !== id));
  };

  // Function to clear the cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Function to update the quantity of an item in the cart
  const updateCartQuantity = (id, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item._id === id ? { ...item, quantity } : item
      )
    );
  };

  // Function to get the quantity of a specific item in the cart
  const getQuantity = (id) => {
    const item = cartItems.find((cartItem) => cartItem._id === id);
    return item ? item.quantity : 0; // Return quantity or 0 if not found
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        updateCartQuantity,
        getQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
