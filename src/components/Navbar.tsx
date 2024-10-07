import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav aria-label="Main navigation">
      <ul>
        <li>
          <Link to="/" aria-label="Home page">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" aria-label="About page">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" aria-label="Contact page">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/api-example" aria-label="API Example page">
            API Example
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
