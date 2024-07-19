import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const navstyle = {
    backgroundColor: location.pathname === '/' ? '#3333ff' : 'orangered',
  };

  const user = localStorage.getItem('user');

  const handleLogout = () => {
    localStorage.removeItem('user');
    window.location.href = '/login';
  };


  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={navstyle}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"> <strong>Movie</strong></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home"><strong>Home</strong></Link>
            </li>
            
          </ul>
          {user ? (
            <>
              <Link className="nav-link" to="/watchlist"> <strong>Watchlist</strong></Link>
              <button className="btn btn-outline-danger" onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <Link className="nav-link" to="/login">Login</Link>
            
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
