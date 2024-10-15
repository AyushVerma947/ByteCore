import React, { useEffect, useRef } from 'react';
import ProductCard from './ProductCard'; // Adjust the import path as necessary

// Sample products array
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

const MainContent = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollItems = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });

        // Check if we reached the end of the items
        if (scrollRef.current.scrollLeft + scrollRef.current.clientWidth >= scrollRef.current.scrollWidth) {
          // Reset scroll position to the start
          scrollRef.current.scrollLeft = 0;
        }
      }
    };

    const intervalId = setInterval(scrollItems, 3000); // Scroll every 3 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

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
          style={{ width: '100%' }} // Limit to 3 items at a time
        >
          <div className="inline-flex space-x-4" style={{ minWidth: 'max-content' }}>
            {/* Map through the products array and render ProductCard for each product */}
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
            {/* Duplicate the products to create a circular effect */}
            {products.map((product) => (
              <ProductCard key={product.id + 100} product={product} />
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
