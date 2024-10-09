import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to Byte Core!</h1>
      <p className="text-lg mb-2">Your one-stop solution for laptop retail.</p>
      <p className="text-lg mb-6">Sign up to explore our range of products!</p>
      <a
        href="/signup"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
      >
        Sign Up Now
      </a>
    </div>
  );
};

export default Home;
