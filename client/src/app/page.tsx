const HomePage = () => {
  return (
  <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
    {/* hero */}
      <section className="flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-6xl font-extrabold mb-4">Welcome to Vine & Vibe</h1>
        <p className="text-xl font-light mb-6">Discover the finest wines from around the world.</p>
        <button className="px-6 py-3 bg-pink-900 hover:bg-red-700 text-white font-semibold rounded-md">
          Shop Now
        </button>
      </section>
    {/* Features */}
      <section className="py-20 bg-gray-100 text-black">
        <h2 className="text-4xl font-bold text-center mb-8">Why Vine & Vibe?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-10">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-2">Curated Selection</h3>
            <p>Handpicked wines from the best vineyards globally, curated by experts.</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-2">Exclusive Deals</h3>
            <p>Access to limited editions and member-exclusive offers on premium bottles.</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-2">Fast Delivery</h3>
            <p>Get your wine delivered to your doorstep in no time, with care and precision.</p>
          </div>
        </div>
      </section>
    {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container mx-auto text-center">
          <p>© 2024 Vine & Vibe. All rights reserved.</p>
        </div>
      </footer>
  </div>
  );
};

export default HomePage;