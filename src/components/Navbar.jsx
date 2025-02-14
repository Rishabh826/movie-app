import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const navstyle = {
    backgroundColor: location.pathname === '/' ? 'black' : 'orangered',
    color: 'white',
    positon:'sticky'
  };

  const user = localStorage.getItem('user');

  const handleLogout = () => {
    localStorage.removeItem('user');
    window.location.href = '/login';
  };


  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top" style={navstyle}>
      <div className="container-fluid" style={{color:'white'}}>
        <Link className="navbar-brand" to="/"> <strong  style={{color:'white'}}>MovieHub</strong></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home"><strong  style={{color:'white'}}>Movies</strong></Link>
            </li>
            
          </ul>
          {user ? (
            <>
              <Link className="nav-link" to="/watchlist"> <strong  style={{color:'white'}}>Watchlist</strong></Link>
              <Link className="nav-link" to="/user"> <strong  style={{color:'white'}}>User</strong></Link>
              <button className="btn btn-outline-danger"  style={{color:'white'}} onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <Link className="btn btn-outline-danger" to="/login">Login</Link>
            
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
