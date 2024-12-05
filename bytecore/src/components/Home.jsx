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

  return (
    <div>
      <h1>Products</h1>
      {products.map(product => (
        <div key={product.id} className="product-item">
          <img src={`http://localhost:5000${product.image}`} alt={product.name} />
          <h3>{product.name}</h3>
          <p>Price: ${product.price.toFixed(2)}</p>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
