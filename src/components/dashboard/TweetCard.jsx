// src/components/dashboard/TweetCard.jsx
import React from 'react';

const TweetCard = ({ tweet, headers }) => {
  // Map the headers to their respective indices for easy access
  const tweetData = {
    id: tweet[headers.indexOf("id")],
    tweetText: tweet[headers.indexOf("tweetText")],
    tweetURL: tweet[headers.indexOf("tweetURL")],
    tweetAuthor: tweet[headers.indexOf("tweetAuthor")],
    handle: tweet[headers.indexOf("handle")],
    date: tweet[headers.indexOf("createdAt")],
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg mb-4">
      <h3 className="text-lg font-semibold mb-2">{tweetData.tweetAuthor}</h3>
      <p className="text-gray-700">{tweetData.tweetText}</p>
      <div className="text-gray-500 text-sm mt-2">
        <a href={`${tweetData.tweetURL  }`} target="_blank" rel="noopener noreferrer">
          View on Twitter
        </a>
      </div>
      <p className="text-xs text-gray-400 mt-1">{new Date(tweetData.date).toLocaleDateString()}</p>
    </div>
  );
};

export default TweetCard;
