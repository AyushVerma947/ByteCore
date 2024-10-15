import React, { createContext, useState, useContext, useEffect } from 'react';

// Create AuthContext
const AuthContext = createContext();

// Provide AuthContext to components
export const AuthProvider = ({ children }) => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userRole, setUserRole] = useState(null); // State for user role (e.g., 'customer' or 'seller')

  // Function to sign in
  const signIn = (role) => { // Accept user role during sign in
    setIsSignedIn(true);
    setUserRole(role); // Set the user role
    localStorage.setItem('userSignedIn', 'true'); // Persist user signed-in state
    localStorage.setItem('userRole', role); // Persist user role
  };

  // Function to sign out
  const signOut = () => {
    setIsSignedIn(false);
    setUserRole(null); // Clear the user role
    localStorage.removeItem('userSignedIn');
    localStorage.removeItem('userRole'); // Remove user role from localStorage
  };

  // Check if user is signed in and retrieve the role from localStorage when app loads
  useEffect(() => {
    const signedIn = localStorage.getItem('userSignedIn') === 'true';
    const role = localStorage.getItem('userRole');
    setIsSignedIn(signedIn);
    setUserRole(role); // Set the user role from localStorage
  }, []);

  return (
    <AuthContext.Provider value={{ isSignedIn, userRole, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the Auth context
export const useAuth = () => useContext(AuthContext);
