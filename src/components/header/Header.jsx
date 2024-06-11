import React from 'react';
import './Header.css'

function Header() {
  return (
    <header id="header" className="fixed-top">
      <div className="container">
        <div className="logo">
          <img src="images/logo.png" alt="Sport Center Logo" />
        </div>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-nav" aria-controls="navbar-nav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbar-nav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link scrollto" href="#hero">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link scrollto" href="#classes">Classes</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link scrollto" href="#trainer">Trainer</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link scrollto" href="#review">Review</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link scrollto" href="#contact">Contact</a>
                </li>
                <li className="join nav-item">
                  <a className="join-btn nav-link scrollto" href="#">Join Us</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
