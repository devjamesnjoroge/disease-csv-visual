// src/pages/Dashboard/Stats.jsx
import React, { useContext } from 'react';
import { DashboardContext } from '../../context/DashboardContext';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Filler,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Filler,
  Title,
  Tooltip,
  Legend
);

const Stats = () => {
  const { data } = useContext(DashboardContext);

  const countDiseases = () => {
    const counts = { Tuberculosis: 0, Flu: 0 };
    const dates = { Tuberculosis: {}, Flu: {} }; // Store counts by month

    data.forEach((row) => {
      const dateStr = row[15]; // Assuming the date is in the 16th column (index 15)
      const datePart = dateStr.split(' ')[0]; // Extract the date part (YYYY-MM-DD)
      const yearMonth = datePart.slice(0, 7); // Format: YYYY-MM

      if (row[1] && row[1].toLowerCase().includes('tuberculosis')) {
        counts.Tuberculosis += 1;
        dates.Tuberculosis[yearMonth] = (dates.Tuberculosis[yearMonth] || 0) + 1; // Increment count
      }
      if (row[1] && row[1].toLowerCase().includes('flu')) {
        counts.Flu += 1;
        dates.Flu[yearMonth] = (dates.Flu[yearMonth] || 0) + 1; // Increment count
      }
    });

    return { counts, dates };
  };

  const { counts, dates } = countDiseases();

  // Prepare data for the chart
  const chartLabels = [...new Set([...Object.keys(dates.Tuberculosis), ...Object.keys(dates.Flu)])]; // Unique year-month

  const chartData = {
    labels: chartLabels,
    datasets: [
      {
        label: 'Tuberculosis Cases',
        data: chartLabels.map(month => dates.Tuberculosis[month] || 0), // Count for each month
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
      {
        label: 'Flu Cases',
        data: chartLabels.map(month => dates.Flu[month] || 0), // Count for each month
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
      },
    ],
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Statistics</h2>
      <p className="font-bold">Tuberculosis Cases: <span className="text-blue-600">{counts.Tuberculosis}</span></p>
      <p className="font-bold">Flu Cases: <span className="text-green-600">{counts.Flu}</span></p>

      {/* Render the chart */}
      <div className="mt-6">
        <Line data={chartData} />
      </div>
    </div>
  );
};

export default Stats;
