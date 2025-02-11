import React from 'react';
import { useCart } from '../../contexts/CartContext';
import { products } from '../../data/products';

const ProductList = () => {
  const { addToCart } = useCart();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4 md:px-8 lg:px-12">
      {products.map((product) => (
        <div key={product.name} className="bg-white rounded-xl shadow-sm overflow-hidden card-hover">
          <div className="relative group">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
          </div>
          <div className="p-6">
            <span className="text-sm text-indigo-600">{product.category}</span>
            <h3 className="font-semibold text-xl mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-gray-800">₹{product.price.toFixed(2)}</span>
              <button 
                onClick={() => addToCart(product)}
                className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
