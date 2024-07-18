import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location= useLocation();
  const user = localStorage.getItem('user');

  const handleLogout = () => {
    localStorage.removeItem('user');
    window.location.href = '/login';
  };
  const navStyle = {
    color: location.pathname === '/watchlist'
      ? 'orangered'
      : 'black',
  };
  const mavStyle = {
    color: location.pathname === '/'
      ? 'orangered'
      : 'black',
  };


  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex flex-column" style={{ height: '100vh', position: 'fixed' }}>
      <div className="container-fluid">
      
        <div className="collapse navbar-collapse show" id="navbarSupportedContent">
          <ul className="navbar-nav flex-column">
            <li className="nav-item">
            <Link className="navbar-brand" to="/">MovieHub</Link><hr />
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/" style={mavStyle}>Movies</Link>
            </li>
            <li className="nav-item">
              {user ? (
                <Link className="nav-link" to="/watchlist" style={navStyle}>Watchlist</Link>
              ) : (
                <Link className="nav-link" to="/login">Login</Link>
              )}
            </li>
            <li className="nav-item">
              {user ? (
                <button className="btn btn-outline-danger" onClick={handleLogout}>Logout</button>
              ) : (
                <Link className="nav-link" to="/signup">Signup</Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
