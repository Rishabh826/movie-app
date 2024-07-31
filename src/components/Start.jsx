import React from "react";
import '../index.css';

export default function Start() {
  return (
    <div className="d-flex flex-column bd-highlight mb-3">
      <div className="subcontainer" style={{ backgroundImage: 'url(https://asset.fujifilm.com/www/us/files/styles/1120x400/public/2020-08/5197d9ed172a928c16214c0abf0e0484/FUJIFILM-USA-digital-cameras-banner-X-series.jpg?itok=vADq7VUq)', height: '20rem' }}>
        <h1 style={{ color: 'white', textAlign: 'center', paddingTop: '15rem', fontSize: '4rem' }}>Welcome to the movieHub</h1>
      </div>
      <div className="d-flex justify-content-center align-items-center" style={{ marginTop: '2rem' }}>
        <h1 style={{ borderBottom: '2px solid black', fontFamily: 'fantasy' }}>New Releases of the Week</h1>
      </div>
    
      <div className="d-flex justify-content-center align-items-center" style={{ height: '90vh' }}>
        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <img src="https://c4.wallpaperflare.com/wallpaper/823/726/518/spider-man-into-the-spider-verse-4k-wallpaper-preview.jpg" alt="Spider-Man into the Spider-Verse" />
            </div>
            <div className="card-back">
              <img src="https://i.pinimg.com/736x/96/24/cf/9624cf1d20272cf4903e8ac23ae43188.jpg" alt="Spider-Man artwork" />
            </div>
          </div>
        </div>
      </div>

      <div>
        <img src="https://wallpapers.com/images/featured/movie-9pvmdtvz4cb0xl37.jpg" alt="Movie themed background" />
        <img src="https://as2.ftcdn.net/v2/jpg/03/27/89/21/1000_F_327892164_bVbtSUgzGYnSiApo6NMmR8LdT7XZvcwM.jpg" alt="Movie scene" style={{ marginTop: '2rem' }} />
      </div>

      <div className="imgcontainer">
        <div className="upload-container">
          <div className="image-upload">
            <img src="https://png.pngtree.com/thumb_back/fh260/background/20230706/pngtree-male-cameraman-operating-a-video-camera-to-capture-a-film-3d-image_3819350.jpg" alt="Cameraman operating a video camera" />
          </div>
          <div className="text-content">
            <h1 style={{ color: 'white', fontFamily: 'fantasy', fontSize: '4rem' }}>Watch Latest Movies & Web Shows</h1>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col-md-6 d-flex align-items-center">
            <div>
              <h2 style={{ fontFamily: 'fantasy', fontSize: '4rem' }}>Your Ultimate Movie Discovery Hub</h2>
              <p>
                Discover new films, track your favorites, and connect with fellow movie enthusiasts. Dive into the world of cinema with detailed movie information, trailers, and reviews. Join MovieHub today for an unparalleled movie-watching experience!
              </p>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <div className="w-100">
              <div className="hovercard">
                <p><span><img src="https://pbs.twimg.com/media/ECkNE-YXUAAgYjg.jpg" alt="Movie scene 1" /></span></p>
                <p><span><img src="https://c4.wallpaperflare.com/wallpaper/560/5/180/bloodborne-the-old-hunters-wallpaper-thumb.jpg" alt="Movie scene 2" /></span></p>
                <p><span><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuHp3OpNi9ssh8loIWYwpu6nMe6ypiTlCkSw&s" alt="Movie scene 3" /></span></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center align-items-center" style={{ height: '90vh' }}>
        <div className="about">
          <p className="about-title">About Us</p>
          <p className="small-desc">
            MovieHub is your ultimate destination for everything cinema. We offer a dynamic platform where movie enthusiasts can discover new films, stay updated with the latest releases, and manage their personal watchlists with ease. Our extensive database includes detailed movie information, trailers, and reviews to help you make informed choices about what to watch next.

            At MovieHub, we believe in creating a community of passionate movie lovers. Connect with fellow enthusiasts, share your thoughts, and explore diverse genres from around the world. Our user-friendly interface ensures that your movie-watching experience is smooth and enjoyable.

            Whether you’re looking for recommendations, tracking your favorite films, or simply staying in the loop with industry news, MovieHub has you covered. Join us today and immerse yourself in the world of cinema like never before. Your next great movie experience starts here!
          </p>
          <div className="go-corner">
            <div className="go-arrow">→</div>
          </div>
        </div>
      </div>

      <footer>
        <div className="footercontainer">
          <p style={{ textAlign: 'center', color: '#3333ff' }}>
            &copy; 2024 MovieHub. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
