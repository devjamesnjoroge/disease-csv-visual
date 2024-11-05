// src/pages/Dashboard/DashboardLayout.jsx
import React from 'react';
import Sidebar from '../../components/dashboard/Sidebar';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-64 p-8 w-full overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
