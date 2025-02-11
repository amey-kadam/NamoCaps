import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import Navbar from './components/layout/Navbar';
import HeroSection from './components/home/HeroSection';
import ProductList from './components/products/ProductList';
import CategoryPage from './pages/CategoryPage';
import CheckoutPage from './pages/CheckoutPage';  

const Home = () => {
  return (
    <>
      <HeroSection />
      <ProductList />
    </>
  );
};

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            
            <Route path="/category/:categoryId" element={<CategoryPage />} />

                        <Route path="/category/anime" element={<CategoryPage category="anime" />} />
                       <Route path="/category/spiritual" element={<CategoryPage category="spiritual" />} />
                       <Route path="/category/quotes" element={<CategoryPage category="quotes" />} />
                       <Route path="/category/comics" element={<CategoryPage category="comics" />} />
            
            <Route path="/Checkout" element={<CheckoutPage />} />


          </Routes>
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;

