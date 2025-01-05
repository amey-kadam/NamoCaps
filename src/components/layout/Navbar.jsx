import React, { useState } from 'react';
import { useCart } from '../../contexts/CartContext';
import './Navbar.css'; 

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { cartItems } = useCart();

    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="logo gradient-text">NamoCaps</div>
                
                <div className="nav-links hidden md:flex">
                    <a href="#" className="nav-link">Spiritual</a>
                    <a href="#" className="nav-link">Anime</a>
                    <a href="#" className="nav-link">Quotes</a>
                    <a href="#" className="nav-link">Comics</a>
                    <a href="#" className="nav-link">Latest</a>
                </div>

                <div className="flex items-center space-x-4">
                    <div className="search-bar">
                        <input 
                            type="text" 
                            placeholder="Search hats..." 
                        />
                        <i className="bi bi-search"></i>
                    </div>
                    <button className="cart-button">
                        <i className="bi bi-cart"></i>
                        <span>{cartItems}</span>
                    </button>
                    <button 
                        className="mobile-menu-button md:hidden"
                        onClick={() => setIsMobileMenuOpen(true)}
                    >
                        <i className="bi bi-list"></i>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                <div className="close-menu">
                    <button onClick={() => setIsMobileMenuOpen(false)}>
                        <i className="bi bi-x"></i>
                    </button>
                </div>
                <div className="flex flex-col space-y-4 mt-8">
                    <a href="#" className="nav-link">Spiritual</a>
                    <a href="#" className="nav-link">Anime</a>
                    <a href="#" className="nav-link">Quotes</a>
                    <a href="#" className="nav-link">Comics</a>
                    <a href="#" className="nav-link">Latest</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
