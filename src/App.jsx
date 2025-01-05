// src/App.jsx
import React from 'react';
import { CartProvider } from './contexts/CartContext';
import Navbar from './components/layout/Navbar';
import HeroSection from './components/home/HeroSection';
import ProductList from './components/products/ProductList';

export default function App() {
    return (
        <CartProvider>
            <div className="bg-gray-50">
                <Navbar />
                <HeroSection />
                <ProductList />
            </div>
        </CartProvider>
    );
}