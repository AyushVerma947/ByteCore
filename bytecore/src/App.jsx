import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import Products from './components/Products'; // Import the Products component
import Header from './components/Header';  // Import Header
import Footer from './components/Footer';  // Import Footer
import ProductDetail from './components/ProductDetail'; // Ensure this import is correct
import Cart from './components/Cart';

import { CartProvider } from './contexts/CartContext'; // Adjust the path according to your folder structure

function App() {
  const location = useLocation(); // Hook to get the current route

  // Define pages where you don't want the header and footer
  const noHeaderFooterRoutes = ['/signup', '/login'];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Conditionally render Header if the current route is not in the noHeaderFooterRoutes */}
      {!noHeaderFooterRoutes.includes(location.pathname) && <Header />}

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<Products />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products/:id" element={<ProductDetail />} /> {/* ProductDetail route */}
          <Route path="/cart" element={<Cart />} />
          {/* Add other routes as needed */}
        </Routes>
      </main>

      {/* Conditionally render Footer if the current route is not in the noHeaderFooterRoutes */}
      {!noHeaderFooterRoutes.includes(location.pathname) && <Footer />}
    </div>
  );
}

export default function WrappedApp() {
  return (
    <Router>
      <CartProvider>
        <App />
      </CartProvider>
    </Router>
  );
}
