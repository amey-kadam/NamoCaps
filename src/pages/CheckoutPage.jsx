import React from 'react';
import { useCart } from '../contexts/CartContext';
import { Link } from 'react-router-dom';


const CheckoutPage = () => {
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    getCartTotal 
  } = useCart();

  const shipping = 4.99;
  const subtotal = getCartTotal();
  const total = subtotal + shipping;

  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-semibold mb-6">Your cart is empty</h2>
          <Link 
            to="/" 
            className="inline-block bg-gradient-to-r from-indigo-600 to-cyan-500 text-white px-6 py-3 rounded-md hover:opacity-90"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Cart Items Section */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-6 gradient-text">Shopping Cart</h2>
            
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center py-4 border-b border-gray-200">
                <img 
                  src={item.image || '/api/placeholder/80/80'}
                  alt={item.name || 'Product'}
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="ml-4 flex-1">
                  <h3 className="font-medium text-gray-900">{item.name || 'Product'}</h3>
                  <p className="text-gray-600"> ₹{Number(item.price || 0).toFixed(2)}</p>
                  <div className="mt-2 flex items-center">
                    <button 
                      className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span className="mx-4">{item.quantity || 1}</span>
                    <button 
                      className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button 
                  className="text-gray-500 hover:text-red-500"
                  onClick={() => removeFromCart(item.id)}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))}
          </div>

          {/* Order Summary Section */}
          <div className="bg-white rounded-lg shadow p-6 h-fit">
            <h2 className="text-2xl font-semibold mb-6 gradient-text">Order Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span> ₹ {subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span> ₹ {shipping.toFixed(2)}</span>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span className="gradient-text"> ₹{total.toFixed(2)}</span>
                </div>
              </div>

              {/* Coupon Code */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700">Coupon Code</label>
                <div className="mt-1 flex">
                  <input
                    type="text"
                    className="flex-1 rounded-l-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Enter coupon code"
                  />
                  <button className="bg-gradient-to-r from-indigo-600 to-cyan-500 text-white px-4 py-2 rounded-r-md hover:opacity-90">
                    Apply
                  </button>
                </div>
              </div>

              {/* Checkout Button */}
              <button className="w-full mt-6 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white py-3 rounded-md hover:opacity-90 transition-all card-hover">
                Proceed to Payment
              </button>

              <Link to="/" className="block text-center mt-4 text-gray-600 hover:text-gray-900">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;