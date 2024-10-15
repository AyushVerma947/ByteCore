// Example component where sign out is handled
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead
import { useDispatch } from 'react-redux'; // If using Redux for state management

const UserMenu = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const dispatch = useDispatch(); // If using Redux

  const handleSignOut = () => {
    // Perform sign-out logic here (e.g., clearing tokens, etc.)
    dispatch({ type: 'SIGN_OUT' }); // Example of a Redux action

    // Redirect to the Sign Out Confirmation page
    navigate('/sign-out-confirmation'); // Use navigate instead of history.push
  };

  return (
    <div>
      {/* Your user menu items */}
      <button onClick={handleSignOut} className="bg-red-500 text-white px-4 py-2 rounded">
        Sign Out
      </button>
    </div>
  );
};

export default UserMenu;
