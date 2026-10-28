# Photo Gallery App

A responsive photo gallery web application built with React that fetches photos from the Picsum Photos API, allows users to search by author name, and mark photos as favorites.

## 🔗 Links

- **GitHub Repository:** [https://github.com/emma3524/photohub](https://github.com/emma3524/photohub)
- **Live Demo:** [Deploy to Vercel/Netlify - Link Coming Soon](#)

> 💡 **Quick Deploy:** Click the button below to deploy your own copy
>
> [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/emma3524/photohub)
> [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/emma3524/photohub)

## Features

✅ **Fetch Photos from API** - Uses the Picsum Photos API to load 30 photos  
✅ **Responsive Grid Layout** - 4 columns (desktop), 2 columns (tablet), 1 column (mobile)  
✅ **Search Filter** - Real-time filtering by author name  
✅ **Favorites System** - Toggle favorites with heart icon, persists using localStorage  
✅ **Custom Hooks** - `useFetchPhotos` hook for API data management  
✅ **useReducer** - State management for favorites  
✅ **Performance Optimized** - Uses `useCallback` and `useMemo`  
✅ **Loading & Error States** - User-friendly feedback  

## Tech Stack

- **React** 18.3.1 (Functional components with hooks only)
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first styling (no UI libraries like MUI or Ant Design)
- **JavaScript** - No TypeScript or Bootstrap

## Project Structure

```
photo-gallery-app/
├── public/
├── src/
│   ├── components/
│   │   ├── PhotoCard.jsx          # Individual photo card with heart button
│   │   ├── PhotoGallery.jsx       # Grid layout for photos
│   │   ├── SearchFilter.jsx       # Search input component
│   │   ├── LoadingSpinner.jsx     # Loading state component
│   │   └── ErrorMessage.jsx       # Error display component
│   ├── hooks/
│   │   └── useFetchPhotos.js      # Custom hook for API calls
│   ├── reducers/
│   │   └── favoritesReducer.js    # Reducer for favorites management
│   ├── App.jsx                    # Main app component
│   ├── main.jsx                   # Entry point
│   └── index.css                  # Global styles + Tailwind
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Installation & Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### 3. Build for Production

```bash
npm run build
```

### 4. Preview Production Build

```bash
npm run preview
```

## Key Implementation Details

### 1. Custom Hook: `useFetchPhotos`

Located in `src/hooks/useFetchPhotos.js`, this hook:
- Fetches 30 photos from `https://picsum.photos/v2/list?limit=30`
- Returns `{ photos, loading, error }` states
- Handles loading spinner and error messages

### 2. Favorites with `useReducer`

Located in `src/reducers/favoritesReducer.js`:
- Manages favorites list using `useReducer`
- Persists favorites to `localStorage`
- Actions: `TOGGLE_FAVORITE`, `LOAD_FAVORITES`

### 3. Search Filter

- Real-time filtering as user types
- Filters already-fetched data (no new API calls)
- Case-insensitive search by author name

### 4. Performance Optimizations

- **`useCallback`**: Used for `handleSearchChange` and `handleToggleFavorite`
- **`useMemo`**: Used for computing `filteredPhotos` based on search term

### 5. Responsive Grid

Tailwind CSS classes for responsive layout:
- Desktop: `lg:grid-cols-4` (4 columns)
- Tablet: `md:grid-cols-2` (2 columns)
- Mobile: `grid-cols-1` (1 column)

## Component Breakdown

### `App.jsx`
Main component that:
- Uses `useFetchPhotos` custom hook
- Manages search state with `useState`
- Manages favorites with `useReducer`
- Implements `useCallback` and `useMemo` for optimization

### `PhotoGallery.jsx`
Displays the grid of photos using responsive Tailwind classes.

### `PhotoCard.jsx`
Individual photo card showing:
- Photo image
- Author name
- Heart button (filled when favorited)

### `SearchFilter.jsx`
Search input with icon, filters photos by author name in real-time.

### `LoadingSpinner.jsx`
Animated loading spinner shown while fetching photos.

### `ErrorMessage.jsx`
Error display with icon shown when API fetch fails.

## Requirements Compliance

✅ **Functional components with hooks only** - No class components  
✅ **Tailwind CSS for styling** - No MUI, Ant Design, or Bootstrap  
✅ **Vite + React** - Project created with Vite  
✅ **Custom hook**: `useFetchPhotos` returns photos with loading and error states  
✅ **useReducer**: Manages favorites list  
✅ **useCallback**: Search handler and toggle favorite handler  
✅ **useMemo**: Filtered photos computation  
✅ **localStorage**: Favorites persist across page refreshes  
✅ **No API call on search**: Filters already-fetched data  

## API Reference

**Picsum Photos API**  
Endpoint: `https://picsum.photos/v2/list?limit=30`

Response format:
```json
[
  {
    "id": "0",
    "author": "Alejandro Escamilla",
    "width": 5000,
    "height": 3333,
    "url": "https://unsplash.com/...",
    "download_url": "https://picsum.photos/..."
  }
]
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub (already done!)
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your `photohub` repository
5. Vercel auto-detects Vite settings
6. Click "Deploy"

Your site will be live in seconds!

### Deploy to Netlify

1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your `dist` folder (after running `npm run build`)
3. Or connect your GitHub repo for automatic deployments

### Deploy to GitHub Pages

```bash
npm install gh-pages --save-dev
```

Add to `package.json` scripts:
```json
"scripts": {
  "deploy": "gh-pages -d dist"
}
```

Then run:
```bash
npm run build
npm run deploy
```

## License

This project is created for educational purposes as part of a frontend internship pre-screening assignment.

## Author

Built with ❤️ using React, Vite, and Tailwind CSS

**GitHub:** [@emma3524](https://github.com/emma3524)
