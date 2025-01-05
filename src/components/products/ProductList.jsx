// src/components/products/ProductList.jsx
import ProductCard from './ProductCard';
import { products } from '../../data/products';

export default function ProductList() {
    return (
        <section className="py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <h3 className="text-2xl font-semibold mb-8">Featured Products</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
}