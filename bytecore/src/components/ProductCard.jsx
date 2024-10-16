import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { _id, image, name, price, description } = product;
  // console.log(_id)
  return (
    <Link to={`/products/${_id}`} className="border rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      <img src={image} alt={name} className="w-full h-48 object-cover mb-4" />
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-gray-600">{description}</p>
      
      {/* Check if price is defined before using toFixed() */}
      <p className="text-xl font-bold mt-4">
        {price ? `₹${Number(price).toFixed(2)}` : 'Price not available'}
      </p>
    </Link>
  );
};

export default ProductCard;
