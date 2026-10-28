// Action types
export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const LOAD_FAVORITES = 'LOAD_FAVORITES';

// Reducer function
export const favoritesReducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE: {
      const photoId = action.payload;
      const isFavorite = state.includes(photoId);
      
      let newState;
      if (isFavorite) {
        // Remove from favorites
        newState = state.filter(id => id !== photoId);
      } else {
        // Add to favorites
        newState = [...state, photoId];
      }
      
      // Persist to localStorage
      localStorage.setItem('favorites', JSON.stringify(newState));
      return newState;
    }
    
    case LOAD_FAVORITES: {
      // Load favorites from localStorage
      const saved = localStorage.getItem('favorites');
      return saved ? JSON.parse(saved) : [];
    }
    
    default:
      return state;
  }
};

// Initial state factory
export const getInitialFavorites = () => {
  const saved = localStorage.getItem('favorites');
  return saved ? JSON.parse(saved) : [];
};
