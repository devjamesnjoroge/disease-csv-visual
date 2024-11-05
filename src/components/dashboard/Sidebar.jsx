import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaUpload, FaTable, FaChartLine, FaTwitter } from 'react-icons/fa';

const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const linkClasses = (path) =>
    `flex items-center text-lg p-2 rounded transition ${
      location.pathname === path ? 'bg-primary text-secondary' : 'text-accent'
    } hover:bg-primary hover:text-secondary w-full`; // Set width to full

  return (
    <div>
      {/* Toggle Button for Small Screens */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 right-4 z-50 p-2 bg-primary text-secondary rounded-md shadow-lg"
      >
        <FaBars />
      </button>

      {/* Sidebar / Navbar */}
      <div
        className={`fixed lg:h-screen w-64 p-6 bg-secondary text-accent shadow-2xl transition-transform transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 z-40`}
      >
        <div className="mb-12">
          <Link className="text-3xl font-bold text-primary" to="/" onClick={() => setIsOpen(false)}>
            Dashboard
          </Link>
        </div>
        <nav className="space-y-4">
          <Link to="/dashboard/upload" className={linkClasses('/dashboard/upload')} onClick={() => setIsOpen(false)}>
            <FaUpload className="mr-2" /> Upload
          </Link>
          <Link to="/dashboard/data" className={linkClasses('/dashboard/data')} onClick={() => setIsOpen(false)}>
            <FaTable className="mr-2" /> DataView
          </Link>
          <Link to="/dashboard/stats" className={linkClasses('/dashboard/stats')} onClick={() => setIsOpen(false)}>
            <FaChartLine className="mr-2" /> Stats
          </Link>
          <Link to="/dashboard/tweets" className={linkClasses('/dashboard/tweets')} onClick={() => setIsOpen(false)}>
            <FaTwitter className="mr-2" /> Tweets
          </Link>
        </nav>
      </div>

      {/* Overlay to close sidebar on small screens */}
      {isOpen && <div className="fixed inset-0 bg-black opacity-50 z-30 lg:hidden" onClick={toggleSidebar}></div>}
    </div>
  );
};

export default Sidebar;
