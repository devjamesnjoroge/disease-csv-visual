import React, { useContext } from 'react';
import { DashboardContext } from '../../context/DashboardContext';

const DataView = () => {
  const { data } = useContext(DashboardContext);
  const trData = data.slice(1);

  return (
    <div className="p-6 bg-accent shadow-lg rounded-2xl">
      <h2 className="text-2xl font-semibold mb-4 text-secondary">Data View</h2>
      {data.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-accent border border-secondary shadow-md rounded">
            <thead>
              <tr className="bg-secondary text-accent">
                {Object.values(data[0]).map((value, idx) => (
                  <th key={idx} className="px-6 py-3 border-b border-secondary text-left">{value}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {trData.map((row, index) => (
                <tr key={index} className="hover:bg-secondary/20">
                  {Object.values(row).map((value, idx) => (
                    <td key={idx} className="px-6 py-4 border-b border-secondary max-w-64">{value}</td>
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
