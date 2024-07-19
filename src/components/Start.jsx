import React from "react";
import '../index.css';

export default function Start() {
  return (
    <div className="d-flex flex-column bd-highlight mb-3">
      <div className="subcontainer" style={{ backgroundImage: 'url(https://media.istockphoto.com/id/1542598409/photo/movie-podium-background-with-movie-objects-3d-rendering.webp?b=1&s=170667a&w=0&k=20&c=VUwlXnJCjj7A811-dxcwhb9gZ-yp48ymZ2Jmm4lOlto=)', height: '20rem' }}>
        <h1 style={{ color: 'white', textAlign: 'center', paddingTop: '15rem', fontSize: '4rem' }}>Welcome to the movieHub</h1>
      </div>
      <div className="d-flex justify-content-center align-items-center" style={{ height: '90vh' }}>
        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <img src="https://c4.wallpaperflare.com/wallpaper/823/726/518/spider-man-into-the-spider-verse-4k-wallpaper-preview.jpg" alt="Front" />
            </div>
            <div className="card-back">
              <img src="https://i.pinimg.com/736x/96/24/cf/9624cf1d20272cf4903e8ac23ae43188.jpg" alt="Back" />
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center" style={{ height: '90vh' }}>

      <div class="about">
      <p class="about-title">About Us</p>
      <p class="small-desc">
      MovieHub is your ultimate destination for everything cinema. We offer a dynamic platform where movie enthusiasts can discover new films, stay updated with the latest releases, and manage their personal watchlists with ease. Our extensive database includes detailed movie information, trailers, and reviews to help you make informed choices about what to watch next.

At MovieHub, we believe in creating a community of passionate movie lovers. Connect with fellow enthusiasts, share your thoughts, and explore diverse genres from around the world. Our user-friendly interface ensures that your movie-watching experience is smooth and enjoyable.

Whether you’re looking for recommendations, tracking your favorite films, or simply staying in the loop with industry news, MovieHub has you covered. Join us today and immerse yourself in the world of cinema like never before. Your next great movie experience starts here!
      </p>
      <div class="go-corner">
        <div class="go-arrow">→</div>
      </div>
    </div>
    </div>
    <footer>
    <div className="footercontainer">
      <p style={{textAlign:'center',color:'#3333ff'
      }}>&copy; 2024 MovieHub. All rights reserved.</p>
    </div>
    </footer>
    </div>
  );
}
