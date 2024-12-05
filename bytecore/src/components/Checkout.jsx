// src/components/Checkout.js

import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext'; // Assuming you have CartContext
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cartItems, clearCart } = useCart(); // Retrieve cart items and clearCart function
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
  });
  const [paymentMethod, setPaymentMethod] = useState('Credit Card');
  const navigate = useNavigate();

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handlePlaceOrder = () => {
    // Here you can handle the order placement (e.g., calling a backend service)
    alert(`Order placed for ${totalAmount}! Thank you.`);
    clearCart(); // Clear the cart after placing the order
    navigate('/'); // Redirect to homepage or order confirmation page
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      {/* Cart Summary */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
        {cartItems.length > 0 ? (
          <div className="bg-white p-4 shadow-lg rounded-lg">
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between mb-4">
                <span>{item.name} (x{item.quantity})</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="flex justify-between font-bold">
              <span>Total:</span>
              <span>${totalAmount.toFixed(2)}</span>
            </div>
          </div>
        ) : (
          <p>Your cart is empty!</p>
        )}
      </div>

      {/* Shipping Information */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Full Name</label>
            <input
              type="text"
              name="name"
              value={shippingInfo.name}
              onChange={handleInputChange}
              className="w-full border rounded-lg p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={shippingInfo.email}
              onChange={handleInputChange}
              className="w-full border rounded-lg p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Address</label>
            <input
              type="text"
              name="address"
              value={shippingInfo.address}
              onChange={handleInputChange}
              className="w-full border rounded-lg p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold">City</label>
            <input
              type="text"
              name="city"
              value={shippingInfo.city}
              onChange={handleInputChange}
              className="w-full border rounded-lg p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Postal Code</label>
            <input
              type="text"
              name="postalCode"
              value={shippingInfo.postalCode}
              onChange={handleInputChange}
              className="w-full border rounded-lg p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Country</label>
            <input
              type="text"
              name="country"
              value={shippingInfo.country}
              onChange={handleInputChange}
              className="w-full border rounded-lg p-2"
              required
            />
          </div>
        </div>
      </div>

      {/* Payment Information */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Select Payment Method</label>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-full border rounded-lg p-2"
            >
              <option value="Credit Card">Credit Card</option>
              <option value="Debit Card">Debit Card</option>
              <option value="PayPal">PayPal</option>
              <option value="UPI">UPI</option>
            </select>
          </div>
        </div>
      </div>

      {/* Place Order Button */}
      <button
        onClick={handlePlaceOrder}
        className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors"
      >
        Place Order
      </button>
    </div>
  );
};

export default Checkout;