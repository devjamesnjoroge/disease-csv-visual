import React, { useState } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import { FaChartLine, FaListAlt, FaUpload, FaBell, FaBars, FaChartBar } from 'react-icons/fa';
import Overview from './Overview';
import HighEngagement from './HighEngagement';
import Trends from './Trends';
import UploadCSV from './UploadCsv';
import Graph from './Graph';  // Import the new Graph component

function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate(); // Initialize the useNavigate hook

  // Function to navigate back to the homepage
  const goToHome = () => {
    navigate('/'); // Navigate to the homepage route
  };

  return (
    <div className="flex h-screen bg-secondary text-text">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-16'} fixed top-0 left-0 h-full bg-secondary transition-all duration-300`}>
        <button className="text-primary p-4" onClick={() => setSidebarOpen(!sidebarOpen)}>
          <FaBars size={24} />
        </button>
        <nav className="mt-4">
          <SidebarLink icon={<FaUpload />} text="Upload CSV" to="upload-csv" sidebarOpen={sidebarOpen} />
          <SidebarLink icon={<FaChartLine />} text="Overview" to="overview" sidebarOpen={sidebarOpen} />
          <SidebarLink icon={<FaListAlt />} text="High Engagement" to="high-engagement" sidebarOpen={sidebarOpen} />
          <SidebarLink icon={<FaBell />} text="Trends" to="trends" sidebarOpen={sidebarOpen} />
          <SidebarLink icon={<FaChartBar />} text="Graph" to="graph" sidebarOpen={sidebarOpen} /> {/* Add Graph link */}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64 p-6 overflow-auto">
        <Routes>
          <Route path="upload-csv" element={<UploadCSV />} />
          <Route path="overview" element={<Overview />} />
          <Route path="high-engagement" element={<HighEngagement />} />
          <Route path="trends" element={<Trends />} />
          <Route path="graph" element={<Graph />} /> {/* Add Graph route */}
        </Routes>
      </div>

      {/* Go Back to Home Button */}
      <div className="absolute top-4 left-4 z-10">
        <button 
          onClick={goToHome} 
          className="bg-primary text-secondary py-2 px-4 rounded-lg shadow-md hover:bg-accent">
          Go Back to Home
        </button>
      </div>
    </div>
  );
}

const SidebarLink = ({ icon, text, to, sidebarOpen }) => (
  <Link to={to} className={`flex items-center p-4 hover:bg-primary hover:text-secondary ${sidebarOpen ? 'justify-start' : 'justify-center'}`}>
    <div className="text-primary">{icon}</div>
    {sidebarOpen && <span className="ml-4 text-text">{text}</span>}
  </Link>
);

export default DashboardLayout;
