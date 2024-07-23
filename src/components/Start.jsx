import React from "react";
import '../index.css';

export default function Start() {
  return (
    <div className="d-flex flex-column bd-highlight mb-3">
      <div className="subcontainer" style={{ backgroundImage: 'url(https://asset.fujifilm.com/www/us/files/styles/1120x400/public/2020-08/5197d9ed172a928c16214c0abf0e0484/FUJIFILM-USA-digital-cameras-banner-X-series.jpg?itok=vADq7VUq)', height: '20rem' }}>
        <h1 style={{ color: 'white', textAlign: 'center', paddingTop: '15rem', fontSize: '4rem' }}>Welcome to the movieHub</h1>
      </div>
      <div className="d-flex justify-content-center align-items-center" style={{marginTop:'2rem'}}>
      <h1 style={{borderBottom:'2px solid black'}}>New Realeased of the week</h1>
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


      <div class="imgcontainer">
  <div class="upload-container">
    <div class="image-upload">
    
    
      <img src="https://cdn.dribbble.com/users/3020031/screenshots/16371150/media/4955ea9d1ac975a0c89648492d5c36b7.png?resize=400x300&vertical=center"  />
    </div>
    <div class="text-content">
     
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
