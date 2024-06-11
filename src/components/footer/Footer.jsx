import React from 'react';
import './Footer.css'

function Footer() {
  return (
    <footer id="footer">
      <div className="footer-menu">
        <div className="container">
          <img src="images/logo.png" alt="Logo" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas incidunt debitis,
            consequatur assumenda rerum distinctio non unde expedita alias enim laboriosam molestias rem iste explicabo?</p>
          <div className="container">
            <div className="row text-center">
              <div className="col">
                <h2>Information</h2>
                <ul>
                  <li>About Us</li>
                  <li>Classes</li>
                  <li>Blog</li>
                  <li>Contact</li>
                </ul>
              </div>
              <div className="col">
                <h2>Helpful Links</h2>
                <ul>
                  <li>Services</li>
                  <li>Supports</li>
                  <li>Terms & Condition</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
