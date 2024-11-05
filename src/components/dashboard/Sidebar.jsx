import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaUpload, FaTable, FaChartLine, FaTwitter } from 'react-icons/fa';

const Sidebar = () => {
  const location = useLocation();
  
  const linkClasses = (path) =>
    `flex items-center text-lg p-2 rounded transition ${
      location.pathname === path ? 'bg-primary text-secondary' : 'text-accent'
    } hover:bg-primary hover:text-secondary`;

  return (
    <div className="fixed lg:h-screen w-64 p-6 bg-secondary text-accent shadow-2xl">
      <div className="mb-12">
        <Link className="text-3xl font-bold text-primary" to="/">
          Dashboard
        </Link>
      </div>
      <nav className="space-y-4">
        <Link to="/dashboard/upload" className={linkClasses('/dashboard/upload')}>
          <FaUpload className="mr-2" /> Upload
        </Link>
        <Link to="/dashboard/data" className={linkClasses('/dashboard/data')}>
          <FaTable className="mr-2" /> DataView
        </Link>
        <Link to="/dashboard/stats" className={linkClasses('/dashboard/stats')}>
          <FaChartLine className="mr-2" /> Stats
        </Link>
        <Link to="/dashboard/tweets" className={linkClasses('/dashboard/tweets')}>
          <FaTwitter className="mr-2" /> Tweets
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
