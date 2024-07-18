import React, { useState, useEffect } from 'react';

function Watchlist() {
  const [watchlist, setWatchlist] = useState(() => {
    const savedWatchlist = localStorage.getItem('watchlist');
    return savedWatchlist ? JSON.parse(savedWatchlist) : [];
  });

  useEffect(() => {
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
  }, [watchlist]);

  const removeFromWatchlist = (movieId) => {
    const updatedWatchlist = watchlist.filter(movie => movie.imdbID !== movieId);
    setWatchlist(updatedWatchlist);
  };

  return (
    <div className="container" style={{backgroundImage:'url(https://wallpapercave.com/wp/wp3232945.jpg)', backgroundAttachment: 'fixed',
      backgroundSize: 'cover',height:'90%'}}>
      <div className="subcontainer" style={{ borderRadius: '50px', border: '4px solid orangered', padding: '30px', marginBottom: '30px' }}>
          <h1 style={{ color: 'white'}}>Welcome to Watchlist</h1>
          <p style={{color:'white'}}>Explore your curated collection of favorite movies, carefully selected just for you. Manage and enjoy your personalized movie lineup, and never miss a cinematic moment. Start adding to your watchlist and let the movie marathon begin!</p>
        </div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4" style={{marginTop:'4rem'}}>
        {watchlist.length > 0 ? (
          watchlist.map(movie => (
            <div key={movie.imdbID} className="col mb-4">
              <div className="card h-100">
                <img src={movie.Poster} className="card-img-top" alt={movie.Title} />
                <div className="card-body">
                  <h5 className="card-title">{movie.Title}</h5>
                  <p className="card-text">{movie.Year}</p>
                </div>
                <div className="card-footer">
                  <button className="btn btn-danger" onClick={() => removeFromWatchlist(movie.imdbID)}>Remove from Watchlist</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p style={{color:'white',textAlign:'center'}}><strong> Your watchlist is empty.</strong></p>
        )}
      </div>
    </div>
  );
}

export default Watchlist;
