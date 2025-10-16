import React, { useState } from 'react';
import '../styles/App.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-text">Shiven Infotech</span>
        </div>
        
        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <a href="/" className="nav-link" onClick={() => setIsOpen(false)}>
            Home
          </a>
          <a href="/features" className="nav-link" onClick={() => setIsOpen(false)}>
            Features
          </a>
          <a href="/#about" className="nav-link" onClick={() => setIsOpen(false)}>
            About
          </a>
          <a href="/#more" className="nav-link" onClick={() => setIsOpen(false)}>
            More info
          </a>
          <button className="nav-btn">Get Started</button>
        </div>

        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
