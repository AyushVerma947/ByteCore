// ProductDetail.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../contexts/CartContext'; // Import the useCart hook
import { useAuth } from '../contexts/AuthContext'; // Import the useAuth hook

const ProductDetail = () => {
  const { addToCart, removeFromCart, updateCartQuantity, cartItems } = useCart();
  const { isSignedIn } = useAuth(); // Get the isSignedIn state from Auth context

  // Dummy product data
  const products = [
    {
      id: 1,
      name: "Gaming Laptop",
      price: 1599.99,
      image: "https://via.placeholder.com/400/0000FF/FFFFFF?text=Gaming+Laptop",
    },
    {
      id: 2,
      name: "Business Laptop",
      price: 999.99,
      image: "https://via.placeholder.com/400/FF0000/FFFFFF?text=Business+Laptop",
    },
    {
      id: 3,
      name: "Ultrabook",
      price: 1299.99,
      image: "https://via.placeholder.com/400/00FF00/FFFFFF?text=Ultrabook",
    },
    {
      id: 4,
      name: "2-in-1 Laptop",
      price: 899.99,
      image: "https://via.placeholder.com/400/FFFF00/FFFFFF?text=2-in-1+Laptop",
    },
    {
      id: 5,
      name: "Student Laptop",
      price: 499.99,
      image: "https://via.placeholder.com/400/FF00FF/FFFFFF?text=Student+Laptop",
    },
  ];

  const { id } = useParams(); // Get the product ID from the URL parameters
  const product = products.find((product) => product.id === parseInt(id)); // Find the product by ID

  if (!product) {
    return <h2 className="text-center">Product not found!</h2>; // Handle case where product is not found
  }

  // Check if the product is already in the cart
  const cartItem = cartItems.find((item) => item.id === product.id);
  const isInCart = Boolean(cartItem); // Check if the product is in the cart
  const [quantity, setQuantity] = useState(isInCart ? cartItem.quantity : 1); // Set initial quantity

  // Function to handle adding/removing/updating the cart
  const handleCartAction = () => {
    if (isInCart) {
      if (quantity > 1) {
        updateCartQuantity(product.id, quantity); // Update quantity if it's more than 1
      } else {
        removeFromCart(product.id); // Remove from cart if quantity is 1
      }
    } else {
      // Add to cart with the selected quantity
      addToCart({ ...product, quantity }); 
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col lg:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full lg:w-1/2 h-64 lg:h-auto object-cover"
        />
        <div className="p-6 flex flex-col justify-between">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-lg text-gray-800 mb-4">Price: ${product.price.toFixed(2)}</p>

          {/* Specifications Section */}
          <h2 className="text-xl font-semibold mb-2">Specifications:</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Processor: Intel i7</li>
            <li>RAM: 16GB</li>
            <li>Storage: 512GB SSD</li>
            <li>Graphics: NVIDIA RTX 3060</li>
          </ul>

          {/* Features Section */}
          <h2 className="text-xl font-semibold mb-2">Features:</h2>
          <ul className="list-disc list-inside mb-4">
            <li>High-performance gaming capabilities</li>
            <li>Lightweight and portable design</li>
            <li>Long battery life</li>
          </ul>

          {/* Reviews Section */}
          <h2 className="text-xl font-semibold mb-2">Reviews:</h2>
          <p className="mb-4">★★★★★ - Excellent performance and build quality!</p>
          <p className="mb-4">★★★★ - Great value for the price.</p>
          <p className="mb-4">★★★ - Good laptop, but a bit heavy for travel.</p>

          {/* Quantity and Button Section */}
          <div className="flex items-center mb-4">
            <label htmlFor="quantity" className="mr-2">Quantity:</label>
            <input
              type="number"
              id="quantity"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="border rounded p-1 w-16 text-center"
            />
          </div>

          <button
            onClick={isSignedIn ? handleCartAction : undefined} // Disable action if not signed in
            className={`mt-4 px-4 py-2 rounded-lg ${isInCart ? 'bg-red-500 text-white' : 'bg-green-500 text-white'} ${isSignedIn ? '' : 'opacity-50 cursor-not-allowed'} hover:bg-opacity-80 transition-colors`}
            disabled={!isSignedIn} // Disable button if not signed in
          >
            {isInCart 
              ? (quantity > 1 ? 'Update Cart' : 'Remove from Cart') 
              : 'Add to Cart'}
          </button>

          {/* Optional message for users not signed in */}
          {!isSignedIn && <p className="mt-2 text-red-500">You must be signed in to add items to the cart.</p>}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
