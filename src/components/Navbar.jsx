import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm py-3">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-green-700">Disease Data Dashboard</h1>
        <div className="space-x-6">
          <Link to="/" className="text-gray-700 hover:text-orange-500">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-orange-500">About</Link>
          <Link to="/privacy" className="text-gray-700 hover:text-orange-500">Privacy</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
