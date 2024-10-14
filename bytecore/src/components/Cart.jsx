import React from 'react';
import { useCart } from '../contexts/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  if (!Array.isArray(cartItems)) {
    return <div>Loading cart...</div>; // Handle loading state
  }
  console.log(cartItems)
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((product) => (
            <li key={product.id} className="flex justify-between items-center border-b py-2">
              <span>
                {product.name} (Quantity: {product.quantity}) {/* Display quantity */}
              </span>
              <button
                onClick={() => removeFromCart(product.id)}
                className="text-red-500 hover:underline"
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
