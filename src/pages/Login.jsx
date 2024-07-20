import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default class Login extends Component {
  handleLogin = (e) => {
    e.preventDefault();
    // Implement login logic here
    const email = e.target.elements.email.value;
    localStorage.setItem('user', email);
    window.location.href = '/';
  };

  render() {
    return (
      <div className='bg-dark' style={{ border: '2px solid white', backgroundImage: 'url(https://c4.wallpaperflare.com/wallpaper/862/449/162/jack-reacher-star-wars-interstellar-movie-john-wick-wallpaper-preview.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' ,marginTop:'2rem'}}>
        <div className="p-3 mb-2 text-dark" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="login-container" style={{ borderRadius: '20px', width: '90%', maxWidth: '420px', borderWidth: '2px', borderColor: 'white', borderStyle: 'solid', backdropFilter: 'blur(10px)',paddingTop:'40px' }}>
            <div className="card bg-transparent card-blur" style={{ padding: '20px' }}>
              <div className="login-title text-center font-weight-bold" style={{ color: 'black', backgroundColor: 'blur', marginTop: '20px' }}><h3>Login</h3></div>
              
              <form onSubmit={this.handleLogin}>
                <div className="form-group mx-3" >
                  <input type="email" name="email" className="form-control login-input" style={{ backgroundColor: 'transparent',color:'white', borderTop: '1px', borderRight: '1px', borderLeft: '1px' }} placeholder="Username or e-mail" />
                </div>
                <div className="form-group mx-3 my-3">
                  <input type="password" name="password" style={{ backgroundColor: 'transparent', borderTop: '1px', borderRight: '1px', borderLeft: '1px' }} className="form-control login-input" placeholder="Password" />
                  <div className="form-check d-flex align-items-center">
                    <input type="checkbox" className="form-check-input" style={{ marginTop: '20px' }} />
                    <label htmlFor="/" className="form-check-label" style={{ color: 'black',marginLeft:'10px',marginTop:'15px' }}>Remember Me</label>
                  </div>
                  <div>
                    <Link className="forgot-link" to="/">
                      <h7 style={{color:'blue'}}>Forgot Password ?</h7>
                    </Link>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary login-button mx-3 my-2 " style={{ width: '90%', color: 'black', backgroundColor: 'white', borderRadius: '100px' }}><strong>Continue</strong></button>
                <hr />
                <p style={{ color: 'black', marginLeft: '15px' }}>By Continue, you agree to jaggery world's <strong>Terms and conditions</strong></p>
                <div className="d-flex justify-content-center" style={{ color: 'black' }}>
                  <p>New to Jaggery world?</p>
                </div>
                <Link className="d-flex justify-content-center" to="/signup">
                  <button className="btn btn-primary login-button mx-3 my-2 " style={{ width: '100%', background: 'white', color: 'black', borderRadius: '100px' }}><strong>Create your new Jaggery account</strong></button>
                </Link>
              </form>
              <div className="d-flex justify-content-center" style={{ color: 'black' }}>
                <h7>OR Sign up using</h7>
              </div>
              <div className="d-flex justify-content-center" style={{ fontSize: '30px', wordSpacing: '30px' }}>
                <Link className="google-link" to="/Bsfillpersonfill">
                  <FcGoogle style={{ marginRight: '30px', marginTop: '20px' }} />
                </Link>
                <Link className="facebook-link" to="/Bsfillpersonfill">
                  <FaFacebookSquare style={{ marginRight: '30px', marginTop: '20px' ,color:'blue'}} />
                </Link>
                <Link className="twitter-link" to="/Bsfillpersonfill">
                  <FaXTwitter style={{ marginTop: '20px' , color:'black'}} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
