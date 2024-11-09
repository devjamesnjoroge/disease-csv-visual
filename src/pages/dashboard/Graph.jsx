import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Graph() {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const uploadData = sessionStorage.getItem('uploadData');

    if (uploadData) {
      try {
        const parsedData = JSON.parse(uploadData);

        if (Array.isArray(parsedData)) {
          const chartData = parsedData.map((tweet) => ({
            tweetText: tweet.tweetText,
            importanceScore: tweet.importance_score,
            detectedSymptoms: tweet.detected_symptoms.join(', ') || 'No symptoms detected',
          }));

          setData(chartData);
        } else {
          setError('Data format is incorrect. Please try again.');
        }
      } catch (error) {
        setError('Failed to parse data. Please try uploading the file again.');
      }
    } else {
      setError('No data available. Please upload a CSV file.');
    }
  }, []);

  // Prepare chart data
  const chartLabels = data.map((tweet) => tweet.detectedSymptoms);
  const chartScores = data.map((tweet) => tweet.importanceScore);

  const chartData = {
    labels: chartLabels,
    datasets: [
      {
        label: 'Importance Score by Tweet',
        data: chartScores,
        borderColor: '#FF5733',
        backgroundColor: 'rgba(255, 87, 51, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  // Chart options
  const chartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Importance Score of Tweets Based on Symptoms',
        font: {
          size: 20,
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.label}: ${context.raw} Importance Score`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Symptoms Detected',
        },
        ticks: {
          autoSkip: true,
          maxTicksLimit: 10,
        },
      },
      y: {
        title: {
          display: true,
          text: 'Importance Score',
        },
      },
    },
  };

  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="bg-accent p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-primary mb-4">Tweet Importance Scores with Symptoms</h2>
      <div className="space-y-4">
        {data.length > 0 ? (
          <Line data={chartData} options={chartOptions} />
        ) : (
          <p className="text-text mt-4">No data available for graph.</p>
        )}
      </div>
    </div>
  );
}

export default Graph;
