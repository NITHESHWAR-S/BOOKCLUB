import React, { useState } from 'react';
import './SignUpPage.css';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSignUp = () => {
    if (username && email && dob && password && phone) {
      setLoggedIn(true);
    } else {
      alert('Please fill in all the required fields.');
    }
  };

  return (
    <div className="custom-container">
      <img src="https://clipart-library.com/img/1721267.png" width='305px' height='300px'/>
      <div className="custom-card">
        {loggedIn ? (
          <div className="custom-welcome">
            <h2 className="custom-display">Welcome, {username}!</h2>
            {/* Add content for authenticated users */}
          </div>
        ) : (
          <form>
            <h1 className="custom-heading"><b>Sign Up</b></h1>
            <div className="custom-form-group">
              <label htmlFor="username" className="custom-label">
              <h3><b>User Name:</b></h3>
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
              <label htmlFor="email" className="custom-label">
              <h3><b>Email:</b></h3>
              </label>
              <input
                type="email"
                className="custom-textbox"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="custom-form-group">
              <label htmlFor="dob" className="custom-label">
              <h3><b>Date Of Birth:</b></h3>
              </label>
              <input
                type="date"
                className="custom-textbox"
                id="dob"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
            </div>
            <div className="custom-form-group">
              <label htmlFor="password" className="custom-label">
              <h3><b>Password:</b></h3>
              </label>
              <input
                type="password"
                className="custom-textbox"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="custom-form-group">
              <label htmlFor="phone" className="custom-label">
              <h3><b>Phone Number:</b></h3>
              </label>
              <input
                type="tel"
                className="custom-textbox"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <button type="button" className="custom-button" onClick={handleSignUp}>
            <Link to="/login" style={{ color: 'white' ,textDecoration:'none' }}>Sign Up</Link>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
