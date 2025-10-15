import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Features from './pages/Features';
import SplashScreen from './components/SplashScreen';
import './styles/App.css';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
          </Routes>
        </main>
        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <div className="footer-section">
                <h3 className="footer-title">Shiven Infotech</h3>
                <p className="footer-text">
                  Empowering construction businesses with innovative technology solutions.
                </p>
              </div>
              <div className="footer-section">
                <h4 className="footer-heading">Quick Links</h4>
                <ul className="footer-links">
                  <li><a href="/">Home</a></li>
                  <li><a href="/features">Features</a></li>
                  <li><a href="/#about">About</a></li>
                  <li><a href="/#pricing">Pricing</a></li>
                </ul>
              </div>
              <div className="footer-section">
                <h4 className="footer-heading">Contact</h4>
                <ul className="footer-links">
                  <li>Email: info@shiveninfotech.com</li>
                  <li>Phone: +1 (555) 123-4567</li>
                  <li>Address: 123 Tech Street, City</li>
                </ul>
              </div>
              <div className="footer-section">
                <h4 className="footer-heading">Follow Us</h4>
                <div className="social-links">
                  <button className="social-link" onClick={() => window.open('https://facebook.com', '_blank')}>📘</button>
                  <button className="social-link" onClick={() => window.open('https://twitter.com', '_blank')}>🐦</button>
                  <button className="social-link" onClick={() => window.open('https://linkedin.com', '_blank')}>💼</button>
                  <button className="social-link" onClick={() => window.open('https://instagram.com', '_blank')}>📸</button>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; 2025 Shiven Infotech. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
