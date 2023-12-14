import React, { useState } from 'react';
import { FaSearch} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './HomePage.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    if (username && password) {
      setLoggedIn(true);
    } else {
      alert('Please enter a valid username and password.');
    }
  };

  const handleForgotPassword = () => {
    alert('Forgot Password clicked!');
  };

  return (
    <div className="custom-container">
      <img src="https://t3.ftcdn.net/jpg/02/50/19/60/360_F_250196034_ZsE3A4DPjhGTAUMZ1nGi8itF4T0o6fYW.jpg" width="500px" height="250px" />
      <div className="custom-card">
        
        <form>
          <h2 className="custom-heading"><c><b>Book Search</b></c></h2>
          <div className="custom-form-group">
            <label htmlFor="username" className="custom-label">
              <h2><b>Book Name :</b></h2>
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
            <h2><b>Author Name :</b></h2>
            </label>
            <input
              type="text"
              className="custom-textbox"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="button" className="custom-button" onClick={handleLogin}>
            <Link to="/" style={{ color: 'black', textDecoration: 'none' }}>
              <FaSearch/>
              Search
            </Link>
          </button>
          
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
