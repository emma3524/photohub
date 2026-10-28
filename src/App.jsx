import { useState, useReducer, useCallback, useMemo } from 'react';
import useFetchPhotos from './hooks/useFetchPhotos';
import { favoritesReducer, getInitialFavorites, TOGGLE_FAVORITE } from './reducers/favoritesReducer';
import PhotoGallery from './components/PhotoGallery';
import SearchFilter from './components/SearchFilter';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const { photos, loading, error } = useFetchPhotos();
  const [favorites, dispatch] = useReducer(favoritesReducer, [], getInitialFavorites);

  // useCallback for search handler to prevent unnecessary re-renders
  const handleSearchChange = useCallback((value) => {
    setSearchTerm(value);
  }, []);

  // useCallback for toggle favorite to prevent unnecessary re-renders
  const handleToggleFavorite = useCallback((photoId) => {
    dispatch({ type: TOGGLE_FAVORITE, payload: photoId });
  }, []);

  // useMemo to compute filtered photos only when photos or searchTerm changes
  const filteredPhotos = useMemo(() => {
    if (!searchTerm.trim()) {
      return photos;
    }
    return photos.filter(photo =>
      photo.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [photos, searchTerm]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-2">Photo Gallery</h1>
          <p className="text-center text-blue-100">Discover beautiful photos from talented authors</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Search Filter */}
        <div className="flex justify-center mb-8">
          <SearchFilter searchTerm={searchTerm} onSearchChange={handleSearchChange} />
        </div>

        {/* Loading State */}
        {loading && <LoadingSpinner />}

        {/* Error State */}
        {error && <ErrorMessage message={error} />}

        {/* Photo Gallery */}
        {!loading && !error && (
          <PhotoGallery
            photos={filteredPhotos}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
          />
        )}

        {/* Results Summary */}
        {!loading && !error && (
          <div className="mt-8 text-center text-gray-600">
            <p>
              Showing {filteredPhotos.length} of {photos.length} photos
              {favorites.length > 0 && ` • ${favorites.length} favorite${favorites.length !== 1 ? 's' : ''}`}
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Photo Gallery App. Built with React + Vite + Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
