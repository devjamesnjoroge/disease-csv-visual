// src/pages/Dashboard/Upload.jsx
import React, { useState, useContext } from 'react';
import { parseCSV } from '../../utils/csvParser';
import { DashboardContext } from '../../context/DashboardContext';

const Upload = () => {
  const [file, setFile] = useState(null);
  const { setData } = useContext(DashboardContext);

  const handleFileUpload = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      const csvText = reader.result;
      const parsedData = parseCSV(csvText);
      setData(parsedData); // Set data in context
    };
    reader.readAsText(file);
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Upload CSV</h2>
      <input 
        type="file" 
        accept=".csv" 
        onChange={(e) => setFile(e.target.files[0])} 
        className="mb-4" 
      />
      <button 
        onClick={handleFileUpload} 
        className="px-4 py-2 bg-green-600 text-white rounded">
        Upload and Process
      </button>
    </div>
  );
};

export default Upload;
