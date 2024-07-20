// src/App.js
import React from 'react';
import {  Route, Routes, HashRouter } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';

import Watchlist from './pages/Watchlist';
import MovieDetails from './pages/MovieDetails';
import Navbar from './components/Navbar';
import Start from './components/Start';
import './index.css';
import User from './components/User';

function App() {
  return (
    <HashRouter>
      <Navbar />
      <div className="main-content">
        <Routes>
        <Route path="/" element={<Start/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/user" element={<User/>} />
          
          <Route path="/watchlist" element={<Watchlist/>} />
          <Route path="/movie/:id" element={<MovieDetails/>} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
