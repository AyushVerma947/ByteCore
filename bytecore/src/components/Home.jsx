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

  return (
    <div>
      <h1>Products</h1>
      {products.map(product => (
        <div key={product.id}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>Price: ${product.price.toFixed(2)}</p>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
