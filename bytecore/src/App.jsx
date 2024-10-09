import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Import necessary routing components
import Signup from './components/Signup';  // Import the Signup component
import './App.css';
import Home from './components/Home';

function App() {
  const [count, setCount] = useState(0);
  console.log("app working");

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/signup" element={<Signup />} />  {/* Define the /signup route */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
