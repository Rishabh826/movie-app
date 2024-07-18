import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from '../components/MovieCard';

function Home() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchlist] = useState(() => {
    const savedWatchlist = localStorage.getItem('watchlist');
    return savedWatchlist ? JSON.parse(savedWatchlist) : [];
  });
  const user = localStorage.getItem('user');

  useEffect(() => {
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
  }, [watchlist]);

  const searchMovies = async () => {
    const res = await axios.get(`http://www.omdbapi.com/?s=${query}&apikey=2135c223`);
    setMovies(res.data.Search);
  };

  const addToWatchlist = (movie) => {
    if (!watchlist.find(item => item.imdbID === movie.imdbID)) {
      setWatchlist([...watchlist, movie]);
      alert(`${movie.Title} added to your watchlist!`);
    } else {
      alert(`${movie.Title} is already in your watchlist.`);
    }
  };

  return (
    <>
      <div className="container">
        <div className="subcontainer" style={{ borderRadius: '50px', border: '6px solid orangered', padding: '30px', marginBottom: '30px' }}>
          <h1 style={{ color: 'orangered' }}>Welcome to movies</h1>
          <p>Explore thousands of movies, get personalized recommendations, create your watchlist, stay updated with the latest news, trailers, and releases, and join a vibrant community of movie enthusiasts. Start your cinematic journey today!</p>
        </div>

        <div className="d-flex justify-content-center" style={{ marginTop: '5rem' }}>
          <h2 style={{ color: 'orangered' }}>Search Movies</h2>
        </div>

        <div className="d-flex justify-content-center mb-3">
          {user ? (
            <>
              <input
                className="form-control me-2"
                type="text"
                placeholder="Enter movie title"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button className="btn btn-outline-danger" onClick={searchMovies}>Search</button>
            </>
          ) : (
            <p>Please log in to search for movies.</p>
          )}
        </div>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {movies && movies.map(movie => (
            <MovieCard key={movie.imdbID} movie={movie} addToWatchlist={() => addToWatchlist(movie)} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
