import React from 'react';

const PhotoCard = ({ photo, isFavorite, onToggleFavorite }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img
          src={photo.download_url}
          alt={`Photo by ${photo.author}`}
          className="w-full h-64 object-cover"
          loading="lazy"
        />
        <button
          onClick={() => onToggleFavorite(photo.id)}
          className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-lg hover:scale-110 transition-transform duration-200"
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill={isFavorite ? 'red' : 'none'}
            viewBox="0 0 24 24"
            stroke={isFavorite ? 'red' : 'currentColor'}
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      </div>
      <div className="p-4">
        <p className="text-gray-800 font-medium text-lg">{photo.author}</p>
      </div>
    </div>
  );
};

export default PhotoCard;
