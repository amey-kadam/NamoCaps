import React, { useState } from 'react';
import { useCart } from '../../contexts/CartContext';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { getCartItemsCount } = useCart();

    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="logo gradient-text">
                    <Link to="/" className="app">NamoCaps</Link>
                </div>
                
                <div className="nav-links hidden md:flex">
                    <Link to="/category/spiritual" className="nav-link">Spiritual</Link>
                    <Link to="/category/anime" className="nav-link">Anime</Link>
                    <Link to="/category/quotes" className="nav-link">Quotes</Link>
                    <Link to="/category/comics" className="nav-link">Comics</Link>
                </div>

                <div className="flex items-center space-x-4">
                    <div className="search-bar">
                        <input 
                            type="text" 
                            placeholder="Search hats..." 
                        />
                        <i className="bi bi-search"></i>
                    </div>
                <Link to="/checkout" className="cart-button">
                     <i className="bi bi-cart"></i>
                     <span>{getCartItemsCount()}</span>
                </Link>
                    <button 
                        className="mobile-menu-button md:hidden"
                        onClick={() => setIsMobileMenuOpen(true)}
                    >
                        <i className="bi bi-list"></i>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu  ₹{isMobileMenuOpen ? 'open' : ''}`}>
                <div className="close-menu">
                    <button onClick={() => setIsMobileMenuOpen(false)}>
                        <i className="bi bi-x"></i>
                    </button>
                </div>
                <div className="flex flex-col space-y-4 mt-8">
                    <Link to="/category/spiritual" className="nav-link">Spiritual</Link>
                    <Link to="/category/anime" className="nav-link">Anime</Link>
                    <Link to="/category/quotes" className="nav-link">Quotes</Link>
                    <Link to="/category/comics" className="nav-link">Comics</Link>
                    <Link to="/latest" className="nav-link">Latest</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;