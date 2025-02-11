// src/components/category/CategoryBanner.jsx
import React from 'react';

const CategoryBanner = ({ category }) => {
    const bannerText = {
        anime: "Anime Collection",
        spiritual: "Spiritual Collection",
        quotes: "Inspirational Quotes",
        comics: "Comic Heroes"
        };

    return (
        <section className="relative h-64 bg-gradient-to-r from-indigo-600 to-cyan-500 overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center justify-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
                    {bannerText[category] || category}
                </h1>
            </div>
        </section>
    );
};

export default CategoryBanner;
