import { useState } from 'react';

interface FilterSidebarProps {
  onSearch: (searchTerm: string) => void;
  onFilter: (filters: any) => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ onSearch, onFilter }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState([0, 50]);
  const [origin, setOrigin] = useState('');
  const [wineType, setWineType] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleFilter = () => {
    onFilter({
      priceRange,
      origin,
      wineType,
    });
  };
  const resetFilter = () => {
    
  }
  return (
    <div className="w-64 bg-white shadow-lg p-6 rounded-md">
      {/* Search Input */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-gray-900">Search</h2>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search wines..."
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />
        <button
          onClick={handleSearch}
          className="w-full mt-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md"
        >
          Search
        </button>
      </div>

      {/* Price Range Filter */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-gray-900">Price Range</h2>
        <input
          type="range"
          min="0"
          max="500"
          value={priceRange[1]}
          onChange={(e) => setPriceRange([0, Number(e.target.value)])}
          className="w-full"
        />
        <p className="mt-2 text-gray-900">Up to ${priceRange[1]}</p>
      </div>

      {/* Wine Type Filter */}
      <div>
        <h2 className="text-xl font-semibold mb-2 text-gray-900">Wine Type</h2>
        <select
          value={wineType}
          onChange={(e) => setWineType(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 text-gray-500 rounded-md"
        >
          <option value="">All</option>
          <option value="Red">Red</option>
          <option value="White">White</option>
          <option value="Rose">Rosé</option>
          <option value="Sparkling">Sparkling</option>
        </select>
      </div>

      {/* Origin Filter */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-gray-900">Origin</h2>
        <select
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-500"
        >
          <option value="">All</option>
          <option value="France">France</option>
          <option value="Italy">Italy</option>
          <option value="Australia">Australia</option>
          <option value="USA">USA</option>
        </select>
      </div>

      <button
        onClick={handleFilter}
        className="w-full mt-6 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md"
      >
        Apply Filters
      </button>
      <button
        onClick={resetFilter}
        className="w-full mt-6 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md"
      >
        Reset
      </button>
    </div>
  );
};

export default FilterSidebar;
