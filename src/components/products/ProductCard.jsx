// src/components/products/ProductCard.jsx
import { useCart } from '../../contexts/CartContext';

export default function ProductCard({ product }) {
    const { addToCart } = useCart();

    return (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden card-hover">
            <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <span className="text-sm text-indigo-600">{product.category}</span>
                <h4 className="font-semibold mb-2">{product.name}</h4>
                <div className="flex justify-between items-center">
                    <span className="text-gray-800">${product.price}</span>
                    <button 
                        onClick={addToCart}
                        className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}