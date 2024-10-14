import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

const ProductCard = ({ product }) => {
  return (
    <Link to={`/products/${product.id}`} className="block p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="card border rounded-lg shadow-md overflow-hidden">
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-semibold">{product.name}</h3>
          <p className="text-gray-700">Price: ${product.price.toFixed(2)}</p>
          <p className="text-gray-600">{product.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
