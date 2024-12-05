import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
        <p>
          Follow us on{' '}
          <a href="https://twitter.com" className="text-blue-400 hover:underline">
            Twitter
          </a>
          ,{' '}
          <a href="https://facebook.com" className="text-blue-400 hover:underline">
            Facebook
          </a>
          , and{' '}
          <a href="https://instagram.com" className="text-blue-400 hover:underline">
            Instagram
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
