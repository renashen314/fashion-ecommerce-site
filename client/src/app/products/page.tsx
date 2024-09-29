"use client";
import { useState } from 'react'
import ProductCard from '../components/ProductCard';
import FilterSidebar from '../components/FilterSidebar';
import { useProducts } from '../../context/ProductsContext';


const ShopAllPage = () => {
    const { products } = useProducts();
    const [displayedProducts, setDisplayedProducts] = useState(products);
    const handleSearch = (searchTerm: string) => {
        const filtered = products.filter((product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setDisplayedProducts(filtered);
    };
    const handleFilter = (filters: { priceRange: number[]; origin: string; wineType: string }) => {
        const filtered = products.filter((product) => {
          return (
            product.price <= filters.priceRange[1] &&
            (filters.origin === '' || product.origin === filters.origin) &&
            (filters.wineType === '' || product.type === filters.wineType)
          );
        });
        setDisplayedProducts(filtered);
    };
    const resetFilter = () => {
        setDisplayedProducts(products)
    }

  return (
    <div className="min-h-screen bg-gray-100 py-10 flex">
        <FilterSidebar onSearch={handleSearch} onFilter={handleFilter} />
        <div className="flex-grow container mx-auto px-4">
        <h1 className="text-center text-4xl font-bold text-gray-900 mb-10">Shop All Wines</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
            <ProductCard
                key={index}
                id={product.id}
                name={product.name}
                type={product.type}
                origin={product.origin}
                price={product.price}
                imageUrl={product.imageUrl}
                />
            ))}
            </div>
      </div>
    </div>
  );
};

export default ShopAllPage;
