import React from 'react';
import '../css/NavLinks.css';
import { Link } from 'react-router-dom';
import About from './About';

function NavLinks() {
  return (
    <div className="nav-links-container">
      <Link to="/" style={{ textDecoration: 'none'}}><li>Home</li></Link>
      <Link to="/about" style={{ textDecoration: 'none'}}><li>About</li></Link>
      <li>Getting Started</li>
      <li>All Locations</li>
    </div>
  )
}

export default NavLinks;