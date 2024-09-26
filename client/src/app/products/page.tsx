import Link from 'next/link';

const ProductsPage = () => {
    const products = [
      { id: 1, name: 'White tshirt' },
      { id: 2, name: 'Jeans' },
    ];
  
    return (
      <div className="p-10 bg-white">
        <h1 className="text-3xl font-bold text-center text-gray-800">Products</h1>
        <ul className="mt-6 space-y-4">
          {products.map((product) => (
            <li key={product.id} className="text-lg text-blue-500 hover:underline">
              <Link href={`/products/${product.id}`}>
                {product.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default ProductsPage;