import React, { useEffect, useState } from 'react';

function Overview() {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    // Retrieve and parse the data from sessionStorage
    const uploadData = sessionStorage.getItem('uploadData');

    if (uploadData) {
      try {
        // Parse the stringified array into actual JavaScript array
        const parsedData = JSON.parse(uploadData);

        // Ensure the data is an array
        if (Array.isArray(parsedData)) {
          setData(parsedData); // Set the parsed data to the state
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

  return (
    <div className="bg-accent p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-primary mb-4">Overview</h2>
      {error && <p className="text-red-500">{error}</p>}

      {data.length > 0 ? (
        <div className="mt-4 space-y-4">
          {data.map((tweet, index) => (
            <div key={index} className="bg-secondary p-4 rounded-lg shadow-inner">
              <p className="text-text">{tweet.tweetText}</p>
              <p className="text-sm text-primary">Importance Score: {tweet.importance_score}</p>
              <p className="text-sm text-primary">
                Symptoms: {tweet.detected_symptoms.length > 0 ? tweet.detected_symptoms.join(', ') : 'No symptoms detected'}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-text mt-4">No data available. Please upload a CSV file.</p>
      )}
    </div>
  );
}

export default Overview;
