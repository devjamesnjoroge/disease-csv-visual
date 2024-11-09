import React from 'react';
import { FaSpinner } from 'react-icons/fa';

function Loader() {
  return (
    <div className="flex justify-center items-center h-full">
      <FaSpinner className="animate-spin text-primary" size={24} />
      <span className="ml-2 text-text">Loading...</span>
    </div>
  );
}

export default Loader;
