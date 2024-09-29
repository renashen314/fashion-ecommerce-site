"use client";
import { useParams } from 'next/navigation';
import { useState } from 'react';
import { useProducts } from '../../../context/ProductsContext';

const ProductDetailPage = () => {
  const params = useParams();
  const productId = Number(params.id);

  const { products } = useProducts();

  const product = products.find((p) => p.id === productId);

  if (!product) {
    return <p>Product not found</p>;
  }
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };
  const handleDecrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <div className="container mx-auto p-10">
      <div className="flex flex-col md:flex-row">
        {/* Product Image on the left */}
        <div className="md:w-1/2">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-auto object-cover rounded-md shadow-md"
          />
        </div>

        {/* Product Details on the right */}
        <div className="md:ml-10 mt-6 md:mt-0 md:w-1/2">
          <p className="text-md mb-2 text-gray-700">{product.winery}</p>
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-lg mb-2">{product.origin}</p>
          <p className="text-md mb-2">Type: {product.type}</p>
          <p className="text-lg font-semibold text-gray-900 mb-6">${product.price.toFixed(2)}</p>
          <p className="text-gray-800 mb-6">{product.description}</p>

          {/* Quantity Counter */}
          <div className="flex items-center mb-6">
            <p className="text-lg font-semibold mr-4">Quantity:</p>
            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
              <button
                onClick={handleDecrement}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-lg"
              >
                -
              </button>
              <span className="px-4 py-2">{quantity}</span>
              <button
                onClick={handleIncrement}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-lg"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Bag Button */}
          <button className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-semibold">
            Add to Bag
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;