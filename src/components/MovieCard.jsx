import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ movie, addToWatchlist }) {
  const handleAddToWatchlist = () => {
    addToWatchlist(movie);
  };

  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card h-100">
        <Link to={`/movie/${movie.imdbID}`} className="card-link">
          <img src={movie.Poster} className="card-img-top" alt={movie.Title} />
          <div className="card-body">
            <h5 className="card-title">{movie.Title}</h5>
            <p className="card-text">{movie.Year}</p>
          </div>
        </Link>
        <div className="card-footer">
          <button className="btn btn-primary" onClick={handleAddToWatchlist}>Add to Watchlist</button>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
