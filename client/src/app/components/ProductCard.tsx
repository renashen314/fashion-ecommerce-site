import Link from 'next/link';

interface ProductCardProps {
  id: number;
  name: string;
  type: string;
  origin: string;
  price: number;
  imageUrl: string;
}
  
const ProductCard: React.FC<ProductCardProps> = ({ id, name, origin, price, imageUrl }) => {
    return (
        <Link href={`/products/${id}`}>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img className="w-full h-48 object-cover" src={imageUrl} alt={name} />
                <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
                <p className="text-gray-500">Origin: {origin}</p>
                <p className="text-xl font-bold text-pink-900 mt-2">${price.toFixed(2)}</p>
                </div>
            </div>
        </Link>
    );
  };
  
  export default ProductCard;
  