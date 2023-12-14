// LoginPage.js
import React, { useState } from 'react';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    if (username && password) {
      setLoggedIn(true);
      // You might want to redirect the user to another page upon successful login
      // Example: history.push('/dashboard');
    } else {
      alert('Please enter a valid username and password.');
    }
  };

  const handleForgotPassword = () => {
    alert('Forgot Password clicked!');
    // You might want to redirect the user to the forgot password page
    // Example: history.push('/forgot-password');
  };

  return (
    <div className="custom-container">
      <iframe
        title="Giphy"
        src="https://giphy.com/embed/u00DkhlFRgkei3d3jG"
        width="300"
        height="300"
        frameBorder="0"
        className="giphy-embed"
        allowFullScreen
      ></iframe>
      
      <div className="custom-card">
        <form>
          <h2 className="custom-heading">
            <b>
              <mark>Login</mark>
            </b>
          </h2>
          <div className="custom-form-group">
            <label htmlFor="username" className="custom-label">
              <h3>
                <b>User Name:</b>
              </h3>
            </label>
            <input
              type="text"
              className="custom-textbox"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="custom-form-group">
            <label htmlFor="password" className="custom-label">
              <h3>
                <b>Password:</b>
              </h3>
            </label>
            <input
              type="password"
              className="custom-textbox"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* Use a button type "submit" for form submissions */}
          <button type="button" className="custom-button" onClick={handleLogin}>
            Login
          </button>
          <div className="custom-forgot-password">
            <a href="#" onClick={handleForgotPassword}>
              Forgot Password?
            </a>
          </div>
          <div className="custom-social-login">
            <p>or sign in with:</p>
            <a href="#">
              <FaGoogle className="social-icon" />
            </a>
            <a href="#">
              <FaFacebook className="social-icon" />
            </a>
          </div>
          <div className="custom-signup-link">
            <b>Don't have an account?</b> <Link to="/signup"><b>Sign Up</b></Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
