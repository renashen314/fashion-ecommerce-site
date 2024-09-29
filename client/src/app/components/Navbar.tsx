import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-pink-950 p-6">
      <div className="container mx-auto flex gap-8 drop-shadow-md">
        <Link href="/" className="text-white font-bold text-lg">
          Home
        </Link>
        <Link href="/products" className="text-white font-bold text-lg">
          Shop All
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
