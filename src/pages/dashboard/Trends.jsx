import React, { useEffect, useState } from 'react';

function Trends() {
  const [trendingSymptoms, setTrendingSymptoms] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const uploadData = sessionStorage.getItem('uploadData');

    if (uploadData) {
      try {
        // Parse the stringified array into actual JavaScript array
        const parsedData = JSON.parse(uploadData);

        // Ensure the data is an array
        if (Array.isArray(parsedData)) {
          // Count occurrences of symptoms across all tweets
          const symptomCounts = {};

          parsedData.forEach(tweet => {
            tweet.detected_symptoms.forEach(symptom => {
              symptomCounts[symptom] = (symptomCounts[symptom] || 0) + 1;
            });
          });

          // Convert symptomCounts object into an array for easy rendering
          const trending = Object.keys(symptomCounts).map(symptom => ({
            symptomName: symptom,
            count: symptomCounts[symptom],
          }));

          // Sort symptoms by the count in descending order
          trending.sort((a, b) => b.count - a.count);

          setTrendingSymptoms(trending);
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

  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="bg-accent p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-primary mb-4">Trending Symptoms</h2>
      {trendingSymptoms.length > 0 ? (
        <div className="space-y-4">
          {trendingSymptoms.map((symptom, index) => (
            <div key={index} className="bg-secondary p-4 rounded-lg shadow-inner">
              <p className="text-text">{symptom.symptomName}</p>
              <p className="text-sm text-primary">Mentions: {symptom.count}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-text mt-4">No trending symptoms available.</p>
      )}
    </div>
  );
}

export default Trends;
