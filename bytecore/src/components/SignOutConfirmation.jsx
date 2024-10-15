// SignOutConfirmation.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead

const SignOutConfirmation = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const timer = setTimeout(() => {
      // Redirect to the landing page after 3 seconds
      navigate('/'); // Use navigate instead of history.push
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Sign Out Successful</h2>
        <p className="text-gray-700 mb-6">You have been signed out successfully.</p>
        <p className="text-gray-500">Redirecting to the landing page...</p>
      </div>
    </div>
  );
};

export default SignOutConfirmation;
