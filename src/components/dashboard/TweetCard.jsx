import React from 'react';
import { FaTwitter } from 'react-icons/fa'; // Twitter icon for the link
import { BiUser } from 'react-icons/bi'; // User icon for the author name
import { BsCalendar } from 'react-icons/bs'; // Calendar icon for the date

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
    <div className="p-6 bg-secondary text-text shadow-lg rounded-lg mb-4 border border-secondary-light hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out">
      {/* Author */}
      <h3 className="text-lg font-semibold flex items-center mb-2 text-primary">
        <BiUser className="mr-2 text-accent" />
        {tweetData.tweetAuthor} <span className="text-accent ml-2">@{tweetData.handle}</span>
      </h3>

      {/* Tweet Text */}
      <p className="text-text mb-4 leading-relaxed">{tweetData.tweetText}</p>

      {/* Footer with Link and Date */}
      <div className="flex justify-between items-center mt-4">
        {/* View on Twitter */}
        <a
          href={`${tweetData.tweetURL}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-primary hover:text-accent transition-colors"
        >
          <FaTwitter className="mr-1" />
          View on Twitter
        </a>

        {/* Date */}
        <span className="flex items-center text-sm text-text">
          <BsCalendar className="mr-1 text-accent" />
          {new Date(tweetData.date).toLocaleDateString()}
        </span>
      </div>
    </div>
  );
};

export default TweetCard;
