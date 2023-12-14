import React from 'react';
import '../assests/style/NameComponent.css'; // Import your custom CSS file if needed
import './nav bar.css';
const NameComponent = () => {
  return (
    <div className="name-container">
      <div className="name-label">Book Store</div>
      <div className="navigation-list">
        <ol>

          <li>Contact</li>
          <li>About us</li>
          <li>Feedback</li>
        </ol>
      </div>
    </div>
  );
};

export default NameComponent;
