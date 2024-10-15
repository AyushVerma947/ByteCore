// Login.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import Link for navigation to Signup
import { useAuth } from '../contexts/AuthContext'; // Import useAuth to access auth context

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('customer'); // State to track user type (customer or seller)
  const navigate = useNavigate(); // Hook for navigating after successful login
  const { signIn } = useAuth(); // Access signIn from AuthContext

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
      userType, // Include userType in the login request
    };

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Login successful!');
        signIn(userType); // Call signIn with the user type (role)
        navigate('/'); // Redirect to home page after successful login
      } else {
        alert('Invalid email or password');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        {/* User Type Selection */}
        <div className="mb-4">
          <label className="block text-gray-700">Login as:</label>
          <div className="flex justify-around mb-2">
            <label>
              <input
                type="radio"
                value="customer"
                checked={userType === 'customer'}
                onChange={() => setUserType('customer')}
                className="mr-1"
              />
              Customer
            </label>
            <label>
              <input
                type="radio"
                value="seller"
                checked={userType === 'seller'}
                onChange={() => setUserType('seller')}
                className="mr-1"
              />
              Seller
            </label>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          Log In
        </button>

        {/* Add Sign Up option for new users */}
        <p className="mt-4 text-center text-gray-600">
          New user?{' '}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign up here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
