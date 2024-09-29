// src/components/ProductCard.tsx

interface ProductCardProps {
    name: string;
    origin: string;
    price: number;
    imageUrl: string;
  }
  
  const ProductCard: React.FC<ProductCardProps> = ({ name, origin, price, imageUrl }) => {
    return (
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img className="w-full h-48 object-cover" src={imageUrl} alt={name} />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <p className="text-gray-500">{origin}</p>
          <p className="text-xl font-bold text-pink-900 mt-2">${price.toFixed(2)}</p>
        </div>
      </div>
    );
  };
  
  export default ProductCard;
  