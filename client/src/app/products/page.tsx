// src/app/products/page.tsx

import ProductCard from '../components/ProductCard';

const products = [
  {
    name: 'Chateau Margaux',
    origin: 'France',
    price: 29.99,
    imageUrl: 'https://images.unsplash.com/photo-1534735714471-c5ea63cbe1cf?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with actual images
  },
  {
    name: 'Penfolds Grange',
    origin: 'Australia',
    price: 45.99,
    imageUrl: 'https://images.unsplash.com/photo-1700893417207-99da24343476?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Castello Monaci',
    origin: 'Italy',
    price: 18.99,
    imageUrl: 'https://images.unsplash.com/photo-1618611627105-74f7567bc6a2?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Opus One',
    origin: 'USA',
    price: 32.99,
    imageUrl: 'https://images.unsplash.com/photo-1628187832510-94b4d90445af?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  // Add more products as needed
];

const ShopAllPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <h1 className="text-center text-4xl font-bold text-gray-900 mb-10">Shop All Wines</h1>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
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
