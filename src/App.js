// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Privacy from './pages/Privacy';
import DashboardLayout from './pages/dashboard/DashboardLayout';
import Upload from './pages/dashboard/Upload';
import DataView from './pages/dashboard/DataView';
import Stats from './pages/dashboard/Stats';
import Tweets from './pages/dashboard/Tweets';
import { DashboardProvider } from './context/DashboardContext';

function App() {
  return (
    <DashboardProvider>
      <Router>
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />

          {/* Dashboard with Nested Routes */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route path="upload" element={<Upload />} />
            <Route path="data" element={<DataView />} />
            <Route path="stats" element={<Stats />} />
            <Route path="tweets" element={<Tweets />} />
          </Route>
        </Routes>
      </Router>
    </DashboardProvider>
  );
}

export default App;
