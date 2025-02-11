// src/components/category/CategoryFilters.jsx
import React from 'react';

const CategoryFilters = ({ onSort, onPriceFilter }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
            <div className="flex flex-wrap gap-4 justify-between items-center">
                <div className="flex gap-4">
                    <select 
                        className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        onChange={(e) => onSort(e.target.value)}
                    >
                        <option value="">Sort By</option>
                        <option value="price-asc">Price: Low to High</option>
                        <option value="price-desc">Price: High to Low</option>
                        <option value="name">Name</option>
                    </select>
                    <select 
                        className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        onChange={(e) => onPriceFilter(e.target.value)}
                    >
                        <option value="">Price Range</option>
                        <option value="0-25">Under  ₹25</option>
                        <option value="25-50"> ₹25 -  ₹50</option>
                        <option value="50+">Over  ₹50</option>
                    </select>
                </div>
                <div className="text-gray-600">
                    Showing all results
                </div>
            </div>
        </div>
    );
};

export default CategoryFilters;