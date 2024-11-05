// src/context/DashboardContext.js
import React, { createContext, useState } from 'react';

// Create Context
export const DashboardContext = createContext();

// Create Provider
export const DashboardProvider = ({ children }) => {
  const [data, setData] = useState([]); // Stores CSV data

  return (
    <DashboardContext.Provider value={{ data, setData }}>
      {children}
    </DashboardContext.Provider>
  );
};
