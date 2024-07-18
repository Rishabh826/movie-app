// src/pages/MovieDetails.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MovieDetails({ match }) {
  const [movie, setMovie] = useState({});
  const movieId = match.params.id;

  useEffect(() => {
    const fetchMovie = async () => {
      const res = await axios.get(`http://www.omdbapi.com/?i=${movieId}&apikey=2135c223`);
      setMovie(res.data);
    };
    fetchMovie();
  }, [movieId]);

  const addToWatchlist = () => {
    const user = localStorage.getItem('user');
    const watchlist = JSON.parse(localStorage.getItem(user)) || [];
    watchlist.push(movie);
    localStorage.setItem(user, JSON.stringify(watchlist));
  };

  return (
    <div>
      <h2>{movie.Title}</h2>
      <img src={movie.Poster} alt={movie.Title} />
      <p>{movie.Plot}</p>
      <button onClick={addToWatchlist}>Add to Watchlist</button>
    </div>
  );
}

export default MovieDetails;
