import React, { useState } from 'react';
import CategoryBanner from '../components/Category/CategoryBanner';
import CategoryFilters from '../components/Category/CategoryFilters';
import CategoryProductCard from '../components/Category/CategoryProductCard';
import { categoryProducts } from '../data/CategoryProduct';

const CategoryPage = ({ category }) => {
  const [sortBy, setSortBy] = useState('');
  const [priceFilter, setPriceFilter] = useState('');

  const products = categoryProducts[category] || [];

  const getFilteredProducts = () => {
    let filtered = [...products];

    if (priceFilter) {
      const [min, max] = priceFilter.split('-');
      filtered = filtered.filter(product => {
        if (max === '+') return product.price >= Number(min);
        return product.price >= Number(min) && product.price <= Number(max);
      });
    }

    if (sortBy === 'price-asc') filtered.sort((a, b) => a.price - b.price);
    else if (sortBy === 'price-desc') filtered.sort((a, b) => b.price - a.price);
    else if (sortBy === 'name') filtered.sort((a, b) => a.name.localeCompare(b.name));

    return filtered;
  };

  const filteredProducts = getFilteredProducts();

  return (
    <div className="min-h-screen bg-gray-50">
      <CategoryBanner category={category} />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <CategoryFilters onSort={setSortBy} onPriceFilter={setPriceFilter} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(product => (
            <CategoryProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
