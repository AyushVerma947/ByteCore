import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'; // Import useAuth hook

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { isSignedIn, userRole, signOut } = useAuth(); // Access auth state and userRole

  const handleSearch = (e) => {
    e.preventDefault();
    // Perform search with searchQuery (you can redirect or filter items here)
    console.log('Search query:', searchQuery);
  };

  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo / Website Name */}
        <h1 className="text-2xl font-bold">
          <Link to="/">Byte Core</Link>
        </h1>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search items..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors"
          >
            Search
          </button>
        </form>

        {/* Navigation Links */}
        <nav className="flex space-x-6 items-center">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/products" className="hover:text-gray-300">
            Products
          </Link>
          <Link to="/cart" className="hover:text-gray-300">
            Cart
          </Link>

          {/* Conditionally render Add Product and Sign In/Sign Out */}
          {isSignedIn ? (
            <>
              {userRole === 'seller' && ( // Check if the user is a seller
                <Link to="/add-product">
                  <button className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition-colors">
                    Add Product
                  </button>
                </Link>
              )}
              <button
                onClick={signOut}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
              >
                Sign Out
              </button>
            </>
          ) : (
            <Link to="/login">
              <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors">
                Sign In
              </button>
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
