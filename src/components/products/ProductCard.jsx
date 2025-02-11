import React from 'react';
import { useCart } from '../../contexts/CartContext';

const CategoryProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white p-4 rounded shadow">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-48 object-cover rounded"
      />
      <h3 className="mt-4 font-medium">{product.name}</h3>
      <p className="text-gray-600">₹{product.price.toFixed(2)}</p>
      <button 
        className="mt-2 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white px-4 py-2 rounded"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default CategoryProductCard;
