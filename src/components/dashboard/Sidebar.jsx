// src/components/dashboard/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="fixed lg:h-screen w-64 p-6 bg-green-700 text-white">
      <div className="mb-8">
      <Link className="text-2xl font-bold mb-12" to="/">Dashboard</Link>
      </div>
      <nav className="space-y-4">
        <Link to="/dashboard/upload" className="block hover:bg-green-600 p-2 rounded">Upload</Link>
        <Link to="/dashboard/data" className="block hover:bg-green-600 p-2 rounded">DataView</Link>
        <Link to="/dashboard/stats" className="block hover:bg-green-600 p-2 rounded">Stats</Link>
        <Link to="/dashboard/tweets" className="block hover:bg-green-600 p-2 rounded">Tweets</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
