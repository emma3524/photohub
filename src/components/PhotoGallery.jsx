import React from 'react';
import PhotoCard from './PhotoCard';

const PhotoGallery = ({ photos, favorites, onToggleFavorite }) => {
  if (photos.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-xl">No photos found matching your search.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {photos.map((photo) => (
        <PhotoCard
          key={photo.id}
          photo={photo}
          isFavorite={favorites.includes(photo.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
};

export default PhotoGallery;
