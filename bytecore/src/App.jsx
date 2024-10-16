import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import Products from './components/Products'; 
import Header from './components/Header';  
import Footer from './components/Footer';  
import ProductDetail from './components/ProductDetail'; 
import Cart from './components/Cart';
import SignOutConfirmation from './components/SignOutConfirmation'; // Import the confirmation component
import LandingPage from './components/LandingPage';
import AddProduct from './components/AddProduct';

import { CartProvider } from './contexts/CartContext';
import { AuthProvider } from './contexts/AuthContext'; // Import AuthProvider

function App() {
  const location = useLocation(); 

  const noHeaderFooterRoutes = ['/signup', '/login'];

  return (
    <div className="flex flex-col min-h-screen">
      {!noHeaderFooterRoutes.includes(location.pathname) && <Header />}

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/sign-out-confirmation" component={SignOutConfirmation} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<Products />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          {/* <Route path="/product/:id" element={<ProductDetail />} /> */}
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>

      {!noHeaderFooterRoutes.includes(location.pathname) && <Footer />}
    </div>
  );
}

export default function WrappedApp() {
  return (
    <Router>
      <AuthProvider> {/* Wrap the app with AuthProvider */}
        <CartProvider>
          <App />
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}
