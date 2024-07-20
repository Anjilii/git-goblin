import React from 'react';

const RepositoryCard = ({ repo }) => {
  // default values
  const {
    name = 'Unnamed Repository',
    description = 'No description available.',
    stars = 0,
    forks = 0,
    updated_at = 'No date available',
    html_url = '#',
    language = 'Unknown'
  } = repo || {};

  // Format the date for better readability
  const formattedDate = new Date(updated_at).toLocaleDateString();

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-6xl mx-auto mb-6">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{name}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-gray-500">⭐ {stars} Stars</span>
          <span className="text-sm text-gray-500">🍴 {forks} Forks</span>
          <span className="text-sm text-gray-500">📅 {formattedDate}</span>
        </div>
        <div className="flex items-center justify-between">
          <a
            href={html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            View Repository
          </a>
          <span className="text-sm text-gray-500">{language}</span>
        </div>
      </div>
    </div>
  );
};

export default RepositoryCard;
