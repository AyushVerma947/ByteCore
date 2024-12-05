import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const Cart = () => {
  const { cartItems, removeFromCart, updateCartQuantity } = useCart();
  const [quantities, setQuantities] = useState(
    cartItems.reduce((acc, product) => {
      acc[product._id] = product.quantity; // Initialize quantities state
      return acc;
    }, {})
  );
  
  const navigate = useNavigate(); // Initialize navigate

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity > 0) {
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [productId]: newQuantity,
      }));
      updateCartQuantity(productId, newQuantity);
    }
  };

  const handleCheckout = () => {
    if (cartItems.length > 0) {
      navigate('/checkout'); // Redirect to the Checkout page
    } else {
      alert('Your cart is empty. Please add items before proceeding to checkout.');
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
        <>
          <ul>
            {cartItems.map((product) => (
              <li key={product._id} className="flex justify-between items-center border-b py-2">
                <span>{product.name}</span>
                <div className="flex items-center">
                  <button
                    onClick={() => handleQuantityChange(product._id, quantities[product._id] - 1)}
                    className="px-2 py-1 bg-gray-200 rounded-l"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={quantities[product._id]}
                    onChange={(e) =>
                      handleQuantityChange(product._id, parseInt(e.target.value, 10))
                    }
                    className="w-12 text-center border border-gray-300 px-2 py-1"
                  />
                  <button
                    onClick={() => handleQuantityChange(product._id, quantities[product._id] + 1)}
                    className="px-2 py-1 bg-gray-200 rounded-r"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(product._id)}
                  className="text-red-500 hover:underline ml-4"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          {/* Add Go to Checkout Button */}
          <div className="mt-6 flex justify-end">
            <button
              onClick={handleCheckout}
              className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors"
            >
              Go to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

<<<<<<< HEAD
export default Cart;
=======
export default Cart;
>>>>>>> origin/master
