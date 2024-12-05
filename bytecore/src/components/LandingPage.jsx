import React from 'react';
import Header from './Header'; // Assuming you have a Header component
import Footer from './Footer'; // Assuming you have a Footer component
import MainContent from './MainContent'; // The main content we created

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section
      <header>
        <Header />
      </header> */}

      {/* Main Content Section */}
      <main className="flex-grow">
        <MainContent />
      </main>
{/* 
      Footer Section
      <footer>
        <Footer />
      </footer> */}
    </div>
  );
};

export default LandingPage;
