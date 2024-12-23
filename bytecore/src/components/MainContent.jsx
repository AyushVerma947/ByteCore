import React, { useEffect, useRef, useState } from 'react';
import ProductCard from './ProductCard'; // Adjust the import path as necessary

const MainContent = () => {
  const scrollRef = useRef(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/products');
        if (!response.ok) throw new Error('Failed to fetch products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const scrollItems = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });

        // Reset scroll position if it reaches the end
        if (scrollRef.current.scrollLeft + scrollRef.current.clientWidth >= scrollRef.current.scrollWidth) {
          scrollRef.current.scrollLeft = 0;
        }
      }
    };

    const intervalId = setInterval(scrollItems, 3000); // Auto-scroll every 3 seconds
    return () => clearInterval(intervalId);
  }, []);

  // Loading state
  if (loading) return <div>Loading products...</div>;

  // Error state
  if (error) return <div>Error: {error}</div>;

  return (
    <main className="container mx-auto py-12 px-6">
      {/* Hero Section */}
      <section id="hero" className="text-center py-12 bg-gray-100 rounded-lg mb-12">
        <h1 className="text-5xl font-bold text-blue-800 mb-6">Welcome to ByteCore</h1>
        <p className="text-xl text-gray-700 mb-8">Your ultimate destination for high-performance laptops and accessories.</p>
        <a
          href="#products"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Shop Now
        </a>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12">
        <h2 className="text-3xl font-bold text-center mb-6">Why Choose ByteCore?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Top Performance</h3>
            <p>Experience the best in class laptops powered by the latest technology.</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Durability</h3>
            <p>Our laptops are built to last with top-tier materials and quality assurance.</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Customer Support</h3>
            <p>We provide 24/7 customer support to assist with all your needs.</p>
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section id="products" className="py-12">
        <h2 className="text-3xl font-bold text-center mb-6">Our Best Sellers</h2>
        <div
          ref={scrollRef}
          className="overflow-hidden whitespace-nowrap"
          style={{ width: '100%' }}
        >
          <div className="inline-flex space-x-4" style={{ minWidth: 'max-content' }}>
            {/* Map through the products array and render ProductCard for each product */}
            {products.map((product) => (
              <ProductCard
                key={product._id}
                product={{
                  _id: product._id,
                  image: `http://localhost:5000${product.image}`,
                  name: product.name,
                  price: product.price,
                  description: product.description,
                }}
              />
            ))}
            {/* Duplicate the products to create a circular effect */}
            {products.map((product) => (
              <ProductCard
                key={`${product._id}-duplicate`} // Ensure uniqueness
                product={{
                  _id: product._id,
                  image: `http://localhost:5000${product.image}`,
                  name: product.name,
                  price: product.price,
                  description: product.description,
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="cta" className="py-12 bg-blue-100 rounded-lg text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">Get the Best Laptops for Your Needs</h2>
        <p className="text-xl text-gray-700 mb-6">Whether you are a gamer, a business professional, or a student, ByteCore has the perfect laptop for you.</p>
        <a
          href="/products"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Explore Products
        </a>
      </section>
    </main>
  );
};

export default MainContent;
