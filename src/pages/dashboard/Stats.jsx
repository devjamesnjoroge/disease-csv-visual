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

// Register the required components for the chart
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

      if (row[1] && (row[1].toLowerCase().includes('tuberculosis') || row[1].toLowerCase().includes('tb'))) {
        counts.Tuberculosis += 1;
        dates.Tuberculosis[yearMonth] = (dates.Tuberculosis[yearMonth] || 0) + 1;
      }
      if (row[1] && row[1].toLowerCase().includes('flu')) {
        counts.Flu += 1;
        dates.Flu[yearMonth] = (dates.Flu[yearMonth] || 0) + 1;
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
        data: chartLabels.map(month => dates.Tuberculosis[month] || 0),
        borderColor: '#00DEFC', // Primary color
        backgroundColor: 'rgba(0, 222, 252, 0.2)',
        fill: true,
        tension: 0.4, // Smooth the line for a modern look
      },
      {
        label: 'Flu Cases',
        data: chartLabels.map(month => dates.Flu[month] || 0),
        borderColor: '#B2B2B2', // Text color for consistency
        backgroundColor: 'rgba(178, 178, 178, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="p-6 bg-secondary text-text shadow-xl rounded-lg">
      <h2 className="text-2xl font-semibold mb-4 text-primary">Statistics</h2>
      <div className="flex space-x-4 mb-6">
        <p className="font-bold">Tuberculosis Cases: <span className="text-accent">{counts.Tuberculosis}</span></p>
        <p className="font-bold">Flu Cases: <span className="text-accent">{counts.Flu}</span></p>
      </div>

      {/* Render the chart, adjusted for 70% viewport height */}
      <div className="w-full h-[70vh] mt-6 bg-secondary-light p-4 rounded-lg shadow-md">
        <Line data={chartData} options={{ maintainAspectRatio: false }} />
      </div>
    </div>
  );
};

export default Stats;
