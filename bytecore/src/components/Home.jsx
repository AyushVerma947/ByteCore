<<<<<<< HEAD
import React from 'react';

const Home = () => {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 59.99,
      description: "High-quality wireless headphones with noise cancellation.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 199.99,
      description: "A smart watch with fitness tracking and heart rate monitor.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Laptop Stand",
      price: 29.99,
      description: "Ergonomic laptop stand for comfortable working.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Portable Charger",
      price: 25.99,
      description: "A compact power bank to charge your devices on the go.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      name: "Bluetooth Speaker",
      price: 49.99,
      description: "Wireless Bluetooth speaker with great sound quality.",
      image: "https://via.placeholder.com/150",
    },
  ];
=======
import React, { useEffect, useState } from 'react';

const Home = () => {
  const [products, setProducts] = useState([]); // State to hold products
  const [loading, setLoading] = useState(true); // State to handle loading status
  const [error, setError] = useState(null); // State to handle errors

  // Fetch products from the backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/products'); // Adjust the endpoint accordingly
        if (!response.ok) throw new Error('Failed to fetch products');
        const data = await response.json();
        setProducts(data); // Set products state with fetched data
      } catch (error) {
        setError(error.message); // Set error message if fetching fails
      } finally {
        setLoading(false); // Set loading to false regardless of success or failure
      }
    };

    fetchProducts();
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  // Loading state
  if (loading) return <div>Loading products...</div>;

  // Error state
  if (error) return <div>Error: {error}</div>;
>>>>>>> origin/master

  return (
    <div>
      <h1>Products</h1>
      {products.map(product => (
<<<<<<< HEAD
        <div key={product.id}>
          <img src={product.image} alt={product.name} />
=======
        <div key={product.id} className="product-item">
          <img src={`http://localhost:5000${product.image}`} alt={product.name} />
>>>>>>> origin/master
          <h3>{product.name}</h3>
          <p>Price: ${product.price.toFixed(2)}</p>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
