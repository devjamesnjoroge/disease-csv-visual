// src/pages/Tweets.jsx
import React, { useContext } from 'react';
import { DashboardContext } from '../../context/DashboardContext';
import TweetCard from '../../components/dashboard/TweetCard';

const Tweets = () => {
  const { data } = useContext(DashboardContext);
  const headers = data[0]; // Get the headers from the first row

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold mb-4">Tweets</h2>
      {data.length > 1 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.slice(1).map((tweet, index) => (
            <TweetCard key={tweet[headers.indexOf("id")]} tweet={tweet} headers={headers} />
          ))}
        </div>
      ) : (
        <p>No tweets available.</p>
      )}
    </div>
  );
};

export default Tweets;