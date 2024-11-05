import React from 'react';
import Sidebar from '../../components/dashboard/Sidebar';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-secondary min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8 bg-accent text-secondary shadow-lg lg:ml-64 lg:overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
