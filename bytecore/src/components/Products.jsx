// Products.jsx
import React from 'react';
import ProductCard from './ProductCard'; // Import the ProductCard component
import Sidebar from './Sidebar'; // Adjust the path if necessary

const Products = () => {
const products = [
    {
        id: 1,
        name: "Gaming Laptop",
        price: 1299.99,
        description: "High-performance gaming laptop with RTX 3060 graphics.",
        image: "https://th.bing.com/th/id/OIP.WCCq2nZelTZuFIRbJF7AuAHaEK?w=235&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", // Replace with actual image URL
    },
    {
        id: 2,
        name: "Business Laptop",
        price: 899.99,
        description: "Lightweight business laptop with long battery life.",
        image: "https://th.bing.com/th/id/OIP.WCCq2nZelTZuFIRbJF7AuAHaEK?w=235&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", // Replace with actual image URL
    },
    {
        id: 3,
        name: "2-in-1 Convertible Laptop",
        price: 749.99,
        description: "Versatile 2-in-1 laptop with touchscreen capabilities.",
        image: "https://th.bing.com/th/id/OIP.WCCq2nZelTZuFIRbJF7AuAHaEK?w=235&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", // Replace with actual image URL
    },
    {
        id: 4,
        name: "Ultrabook",
        price: 1099.99,
        description: "Sleek ultrabook for portability and performance.",
        image: "https://th.bing.com/th/id/OIP.WCCq2nZelTZuFIRbJF7AuAHaEK?w=235&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", // Replace with actual image URL
    },
    {
        id: 5,
        name: "Chromebook",
        price: 349.99,
        description: "Affordable Chromebook for web browsing and apps.",
        image: "https://th.bing.com/th/id/OIP.WCCq2nZelTZuFIRbJF7AuAHaEK?w=235&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", // Replace with actual image URL
    },
    ];
      
  return (

    <div className="flex">
    <Sidebar /> {/* Include Sidebar here */}
    
    {/* Main product content here */}
    <div className="flex-1 p-4">
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} /> // Use ProductCard component
        ))}
      </div>
    </div>
    </div>
  </div>


    
  );
};

export default Products;
