// src/App.js
import React from 'react';
import {  Route, Routes, HashRouter } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';

import Watchlist from './pages/Watchlist';
import MovieDetails from './pages/MovieDetails';
import Navbar from './components/Navbar';
import './index.css';

function App() {
  return (
    <HashRouter>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          
          <Route path="/watchlist" element={<Watchlist/>} />
          <Route path="/movie/:id" element={<MovieDetails/>} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
