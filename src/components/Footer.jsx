import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-6 mt-8">
      <div className="max-w-6xl mx-auto px-4 text-center text-gray-600">
        <p>© 2024 Disease Data Dashboard. All rights reserved.</p>
        <div className="space-x-4 mt-2">
          <Link to="/about" className="hover:text-orange-500">About</Link>
          <Link to="/privacy" className="hover:text-orange-500">Privacy</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
