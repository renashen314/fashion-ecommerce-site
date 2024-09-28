"use client";
import { useParams } from 'next/navigation';

// interface ProductDetailPageProps {
//     params: {
//       id: string;  // The type for your dynamic route parameter
//     };
//   }

const ProductDetailPage = () => {
  const params = useParams();
  const { id } = params;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-900">Product Details</h1>
      <p className="mt-4 text-gray-600">You are viewing details for product {id}</p>
    </div>
  );
};

export default ProductDetailPage;