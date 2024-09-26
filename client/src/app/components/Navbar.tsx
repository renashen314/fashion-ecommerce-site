import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between">
        <Link href="/" className="text-white font-bold text-lg">
          Home
        </Link>
        <Link href="/products" className="text-white font-bold text-lg">
          Products
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
