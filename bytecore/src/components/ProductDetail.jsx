<<<<<<< HEAD
// src/components/ProductDetail.js

import React, { useEffect, useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { useParams } from 'react-router-dom';
=======
import React, { useEffect, useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { useParams } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'; // Import the useAuth hook
>>>>>>> origin/master

const ProductDetail = () => {
  const { id } = useParams(); // Get product ID from URL parameters
  const { addToCart, updateCartQuantity, getQuantity } = useCart();
<<<<<<< HEAD
  
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  
=======
  const { isSignedIn } = useAuth(); // Get the isSignedIn state from Auth context

  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

>>>>>>> origin/master
  // Fetch product data from the backend
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:5000/products/${id}`); // Adjust the endpoint accordingly
        if (!response.ok) throw new Error('Failed to fetch product data');
        const data = await response.json();
        setProduct(data);
        setQuantity(getQuantity(id) || 1); // Set quantity from cart or default to 1
      } catch (error) {
        console.error(error);
      }
    };
<<<<<<< HEAD
    
=======

>>>>>>> origin/master
    fetchProduct();
  }, [id, getQuantity]);

  // Check if the product is in the cart
  const isInCart = getQuantity(id) > 0;

  // Handle adding/updating/removing from cart
  const handleCartAction = () => {
    if (isInCart) {
      // Update the quantity of the existing product in the cart
      updateCartQuantity(id, quantity);
    } else {
      // Otherwise, add the product to the cart
      addToCart({ ...product, quantity });
    }
  };

  if (!product) return <div>Loading...</div>; // Loading state

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col lg:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={`http://localhost:5000${product.image}`}
          alt={product.name}
          className="w-full lg:w-1/2 h-64 lg:h-auto object-cover"
        />
        <div className="p-6 flex flex-col justify-between">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-lg text-gray-800 mb-4">Price: ${product.price.toFixed(2)}</p>

<<<<<<< HEAD
          <h2 className="text-xl font-semibold mb-2">Specifications:</h2>
          <ul className="list-disc list-inside mb-4">
            {product.specifications && product.specifications.map((spec, index) => (
              <li key={index}>{spec}</li>
            ))}
          </ul>

          <h2 className="text-xl font-semibold mb-2">Features:</h2>
          <ul className="list-disc list-inside mb-4">
            {product.features && product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>

          <h2 className="text-xl font-semibold mb-2">Reviews:</h2>
          {product.reviews && product.reviews.map((review, index) => (
            <p key={index} className="mb-4">{review}</p>
          ))}

=======
          {/* Added product description */}
          <p className="text-md text-gray-600 mb-4">{product.description}</p>

          <h2 className="text-xl font-semibold mb-2">Specifications:</h2>
          <ul className="list-disc list-inside mb-4">
            <li><strong>Brand:</strong> {product.brand}</li>
            <li><strong>Model:</strong> {product.model}</li>
            <li><strong>Processor:</strong> {product.processor}</li>
            <li><strong>RAM:</strong> {product.ram}</li>
            <li><strong>Storage:</strong> {product.storage}</li>
            {product.graphicsCard && <li><strong>Graphics Card:</strong> {product.graphicsCard}</li>}
            {product.displaySize && <li><strong>Display Size:</strong> {product.displaySize}</li>}
            {product.operatingSystem && <li><strong>Operating System:</strong> {product.operatingSystem}</li>}
          </ul>

>>>>>>> origin/master
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
<<<<<<< HEAD
            onClick={handleCartAction}
            className={`mt-4 px-4 py-2 rounded-lg ${isInCart ? 'bg-red-500 text-white' : 'bg-green-500 text-white'} hover:bg-opacity-80 transition-colors`}
          >
            {isInCart ? (quantity > 1 ? 'Update Quantity' : 'Remove from Cart') : 'Add to Cart'}
          </button>
=======
            onClick={isSignedIn ? handleCartAction : undefined} // Disable action if not signed in
            className={`mt-4 px-4 py-2 rounded-lg ${isInCart ? 'bg-red-500' : 'bg-green-500'} text-white ${isSignedIn ? '' : 'opacity-50 cursor-not-allowed'} hover:bg-opacity-80 transition-colors`}
            disabled={!isSignedIn} // Disable button if not signed in
          >
            {isInCart 
              ? (quantity > 1 ? 'Update Cart' : 'Remove from Cart') 
              : 'Add to Cart'}
          </button>

          {/* Optional message for users not signed in */}
          {!isSignedIn && <p className="mt-2 text-red-500">You must be signed in to add items to the cart.</p>}
>>>>>>> origin/master
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
