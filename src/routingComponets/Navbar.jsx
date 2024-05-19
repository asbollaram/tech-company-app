import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
      <div className="Navrbar">
        <ul>
          <Link to="/Homepage">
            <li>Homepage</li>
          </Link>
          <Link to="/AboutUs">
            <li>About Page</li>
          </Link>
          <Link to="/Service">
            <li>Services</li>
          </Link>
          <Link to="/ContantUs">
            <li>Contact Us</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
