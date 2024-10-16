import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard'; // Import the ProductCard component
import Sidebar from './Sidebar'; // Adjust the path if necessary
import axios from 'axios'; // Axios for making API requests

const Products = () => {
  const [products, setProducts] = useState([]); // State to store products
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch products from the database on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/products'); // Adjust API endpoint if necessary
        setProducts(response.data); // Set the products data from the response
        setLoading(false); // Turn off the loading state
      } catch (error) {
        console.error('Failed to fetch products:', error);
        setLoading(false); // Turn off loading state in case of error
      }
    };

    fetchProducts(); // Call the fetch function
  }, []); // Empty dependency array ensures this only runs on component mount

  if (loading) {
    return <div>Loading...</div>; // Show a loading message while fetching data
  }

  return (
    <div className="flex">
      <Sidebar /> {/* Include Sidebar here */}
      
      {/* Main product content here */}
      <div className="flex-1 p-4">
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold text-center mb-8">Products</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(product => (
              <ProductCard 
                key={product._id} // Use MongoDB's _id.$oid as key
                product={{
                  _id: product._id, // Ensure _id is included for routing

                  image: `http://localhost:5000${product.image}`, // Prepend server URL to image path
                  name: product.name,
                  price: product.price, // Ensure price is formatted correctly
                  description: product.description
                }} 
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
