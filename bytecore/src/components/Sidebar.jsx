import React, { useState } from 'react';

const Sidebar = () => {
  const [showPriceRange, setShowPriceRange] = useState(false);
  const [showBrandFilter, setShowBrandFilter] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState(250);
  
  const handlePriceCheckboxChange = () => {
    setShowPriceRange(!showPriceRange);
  };

  const handleBrandCheckboxChange = () => {
    setShowBrandFilter(!showBrandFilter);
  };

  return (
    <aside className="w-1/4 bg-white p-6 shadow-md rounded-3xl">
      {/* Sort By Section */}
      <h2 className="text-lg font-semibold mb-4">Sort By</h2>
      <div className="mb-6">
        <label className="block mb-2">
          <input 
            type="checkbox" 
            className="mr-2" 
            onChange={handlePriceCheckboxChange} 
          /> Price
        </label>
        {showPriceRange && (
          <div>
            <input 
              type="range" 
              min="150" 
              max="500" 
              value={selectedPrice} 
              className="w-full" 
              onChange={(e) => setSelectedPrice(e.target.value)} 
            />
            <p>Selected Price: <span>${selectedPrice}</span></p>
          </div>
        )}
        <label className="block mb-2">
          <input 
            type="checkbox" 
            className="mr-2" 
            onChange={handleBrandCheckboxChange} 
          /> Brand
        </label>
        {showBrandFilter && (
          <div>
            <select className="w-full mt-2 p-2 border rounded">
              <option value="">Select a Brand</option>
              <option value="Samsung">Samsung</option>
              <option value="Apple">Apple</option>
              <option value="Fossil">Fossil</option>
              {/* Add more brands as needed */}
            </select>
          </div>
        )}
      </div>

      {/* Shipping Period Section */}
      <h2 className="text-lg font-semibold mb-4">Shipping Period</h2>
      <div className="space-y-3">
        <button className="sidebar-button w-full p-2 text-left bg-gray-200 hover:bg-orange-500 hover:text-white rounded-3xl">1 Day</button>
        <button className="sidebar-button w-full p-2 text-left bg-gray-200 hover:bg-orange-500 hover:text-white rounded-3xl">2 Day</button>
        <button className="sidebar-button w-full p-2 text-left bg-gray-200 hover:bg-orange-500 hover:text-white rounded-3xl">Custom Delivery Day</button>
        <input type="date" className="w-full p-2 mt-2 border rounded-3xl hidden" />
      </div>

      {/* History Section */}
      <h2 className="text-lg font-semibold mt-8 mb-4">History</h2>
      <div className="space-y-3">
        <button className="sidebar-button w-full p-2 text-left bg-gray-200 hover:bg-orange-500 hover:text-white rounded-3xl">Favorites</button>
        <button className="sidebar-button w-full p-2 text-left bg-gray-200 hover:bg-orange-500 hover:text-white rounded-3xl">Bookmarks</button>
        <button className="sidebar-button w-full p-2 text-left bg-gray-200 hover:bg-orange-500 hover:text-white rounded-3xl">Add to Cart</button>
        <button className="sidebar-button w-full p-2 text-left bg-gray-200 hover:bg-orange-500 hover:text-white rounded-3xl">Checkout</button>
      </div>
    </aside>
  );
};

export default Sidebar;
