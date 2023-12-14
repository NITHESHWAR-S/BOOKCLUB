import React from 'react';
import '../assests/style/NameComponent.css';
import './nav bar.css';

const NameComponent = () => {
  return (
    <div className="name-container">
      <div className="name-label">Always Welcome</div>
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
