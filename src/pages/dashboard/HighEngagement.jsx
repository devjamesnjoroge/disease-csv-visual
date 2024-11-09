import React, { useEffect, useState } from 'react';

function HighEngagement() {
  const [highEngagementTweets, setHighEngagementTweets] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const uploadData = sessionStorage.getItem('uploadData');

    if (uploadData) {
      try {
        // Parse the stringified array into actual JavaScript array
        const parsedData = JSON.parse(uploadData);

        // Ensure the data is an array
        if (Array.isArray(parsedData)) {
          // Filter tweets based on engagement metrics
          const filteredTweets = parsedData.filter(tweet => tweet.importance_score > 50); // Example threshold
          setHighEngagementTweets(filteredTweets);
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
      <h2 className="text-2xl font-semibold text-primary mb-4">High Engagement Tweets</h2>
      {highEngagementTweets.length > 0 ? (
        <div className="space-y-4">
          {highEngagementTweets.map((tweet, index) => (
            <div key={index} className="bg-secondary p-4 rounded-lg shadow-inner">
              <p className="text-text">{tweet.tweetText}</p>
              <p className="text-sm text-primary">Author: {tweet.tweetAuthor} (@{tweet.handle})</p>
              <div className="text-sm text-text mt-2 flex flex-wrap gap-4">
                <p>Replies: {tweet.replyCount}</p>
                <p>Quotes: {tweet.quoteCount}</p>
                <p>Retweets: {tweet.retweetCount}</p>
                <p>Likes: {tweet.likeCount}</p>
                <p>Views: {tweet.views}</p>
                <p>Bookmarks: {tweet.bookmarkCount}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-text mt-4">No high engagement tweets available.</p>
      )}
    </div>
  );
}

export default HighEngagement;
