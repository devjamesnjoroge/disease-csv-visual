// src/pages/Dashboard/DataView.jsx
import React, { useContext } from 'react';
import { DashboardContext } from '../../context/DashboardContext';

const DataView = () => {
  const { data } = useContext(DashboardContext);
  console.log(data);
  const trData = data.slice(1);

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Data View</h2>
      {data.length > 0 ? (
        <div className="overflow-x-auto"> {/* Add this div for horizontal scrolling */}
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                {Object.values(data[0]).map((value, idx) => (
                  <th key={idx} className="px-6 py-3 border-b border-gray-300 text-left max-w-[15%]">{value}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {trData.map((row, index) => (
                <tr key={index} className="hover:bg-gray-100"> {/* Optional hover effect */}
                  {Object.values(row).map((value, idx) => (
                    <td key={idx} className="px-6 py-4 border-b border-gray-300"><p className='max-w-48'>{value}</p></td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No data available. Please upload a CSV file.</p>
      )}
    </div>
  );
};

export default DataView;
