import React, { useState, useContext } from 'react';
import { parseCSV } from '../../utils/csvParser';
import { DashboardContext } from '../../context/DashboardContext';
import { FaCloudUploadAlt } from 'react-icons/fa';

const Upload = () => {
  const [file, setFile] = useState(null);
  const { setData } = useContext(DashboardContext);

  const handleFileUpload = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      const csvText = reader.result;
      const parsedData = parseCSV(csvText);
      setData(parsedData);
    };
    reader.readAsText(file);
  };

  return (
    <div className="p-6 bg-accent shadow-lg rounded-2xl">
      <h2 className="text-2xl font-semibold mb-4 text-secondary">Upload CSV</h2>
      <input
        type="file"
        accept=".csv"
        onChange={(e) => setFile(e.target.files[0])}
        className="mb-4"
      />
      <button
        onClick={handleFileUpload}
        className="px-4 py-2 bg-primary text-secondary rounded flex items-center gap-2 hover:bg-primary/90 transition"
      >
        <FaCloudUploadAlt />
        Upload and Process
      </button>
    </div>
  );
};

export default Upload;
