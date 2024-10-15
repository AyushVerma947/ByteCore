import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, updateCartQuantity } = useCart();
  const [quantities, setQuantities] = useState(
    cartItems.reduce((acc, product) => {
      acc[product.id] = product.quantity; // Initialize quantities state
      return acc;
    }, {})
  );

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity > 0) {
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [productId]: newQuantity,
      }));
      updateCartQuantity(productId, newQuantity); // Update quantity in the cart
    }
  };

  if (!Array.isArray(cartItems)) {
    return <div>Loading cart...</div>; // Handle loading state
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((product) => (
            <li key={product.id} className="flex justify-between items-center border-b py-2">
              <span>{product.name}</span>
              <div className="flex items-center">
                <button
                  onClick={() => handleQuantityChange(product.id, quantities[product.id] - 1)}
                  className="px-2 py-1 bg-gray-200 rounded-l"
                >
                  -
                </button>
                <input
                  type="number"
                  min="1"
                  value={quantities[product.id]}
                  onChange={(e) =>
                    handleQuantityChange(product.id, parseInt(e.target.value, 10))
                  }
                  className="w-12 text-center border border-gray-300 px-2 py-1"
                />
                <button
                  onClick={() => handleQuantityChange(product.id, quantities[product.id] + 1)}
                  className="px-2 py-1 bg-gray-200 rounded-r"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeFromCart(product.id)}
                className="text-red-500 hover:underline ml-4"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
