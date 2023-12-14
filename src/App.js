import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import SignUpPage from './SignUpPage';
import { FaBook } from 'react-icons/fa';
const App = () => {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <FaBook />
          <Link className="navbar-brand" to="/">
            <b>Book Club</b>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                 <b>Home</b>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  <b>Login</b>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">
                  <b>Sign Up</b>
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/" element={<HomePage />} />
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;
